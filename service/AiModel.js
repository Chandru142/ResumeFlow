import { GoogleGenAI, } from "@google/genai";

const ai = new GoogleGenAI({apiKey:import.meta.env.VITE_GEMINI_API_KEY});

 const generateAicontent=async(prompt)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:prompt,                   
    config: {
      responseMimeType: "application/json",
    },

  });

  return response
}

export default {
  generateAicontent     
}