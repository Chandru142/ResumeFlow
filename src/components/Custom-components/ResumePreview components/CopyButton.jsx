import { Button } from '@/components/ui/button'
import { Copy, CopyCheckIcon } from 'lucide-react'
import {React , useState} from 'react'

const CopyButton = ({item}) => {

 const [copied,setcopied]=useState(false)

  const handleCopy=async(text)=>{

    try {
      await navigator.clipboard.writeText(text)

      setcopied(true)

      setTimeout(() => {

        setcopied(false)
        
      }, 2000);

    } catch (error) {

      console.log("Copied failed",error);
      toast.error("Copy Failed")
      
      
    }

  }


  return (
    
      <Button onClick={()=>handleCopy(item.summary)} className={`scale-90 transition-colors duration-200 active:scale-85 ${copied?"bg-gray-400 hover:bg-gray-400":"bg-primary"}`}>
            {copied?<CopyCheckIcon/>:<Copy/>}
            </Button>

  )
}

export default CopyButton