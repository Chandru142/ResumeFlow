import React from 'react'

const SummaryLoadSkeleton = () => {
  return (
     <div className='py-6'>
        {[1,2,3].map((item,index)=>(

        <div key={index} className=' p-3.5 mb-4 rounded-2xl bg-gray-200 min-h-32 animate-pulse '>
          <h2 className='text-xl py-1.5 font-medium text-foreground'></h2>
          <div className='text-sm text-foreground'></div>
        </div>

        ))}

      </div>
  )
}

export default SummaryLoadSkeleton