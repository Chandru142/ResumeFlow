import axios from 'axios';


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY
const axiosClient=axios.create({
  baseURL:import.meta.env.VITE_BASE_URL+"/api",
  headers:{
   'Content-Type':"application/json",
   'Authorization':`Bearer ${API_KEY}`
  }

})

const createNewResume= async (data)=>{
  try {
    const response=await axiosClient.post("/user-resumes",{data})
    return response.data
  } catch (error) {
    console.error("Error creating resume:");
    throw error; 
  }
  
}


const getResumes=async (email)=>{
  try {
    if(!email)throw new Error("email is Required") 
    const response=await axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${encodeURIComponent(email)}`)
    const data=response.data
    return data
  } catch (error) {
    console.error("Error fetching resumes:",error);
    throw error;
    
  }

}


const updateResume=async (id,data)=>{
  try {
    if(!id)throw new Error("email is Required") 
    const response= await axiosClient.put(`/user-resumes/`+id,{data})

    return response.data
   
  } catch (error) {
    console.error("Error fetching resumes:",error);
    throw error;
    
  }

}

const fetchResumeDetails=async (id)=>{
  try {
    if(!id)throw new Error("no resume exist")
      const response=await axiosClient.get(`/user-resumes/`+id)
      return response.data
    
  } catch (error) {
    console.error("Error fetching resume details",error)
    throw error
    
  }
}


const deleteResume=async(id)=>{
  try {
    const res=await axiosClient.delete(`/user-resumes/`+id)
    console.log("Resume Deleted Successfully");
    return res
    
  } catch (error) {
    console.log("Unable to delete the resume");
    
  }

}

export default {
  createNewResume,
  getResumes,
  updateResume,
  fetchResumeDetails,
  deleteResume
}