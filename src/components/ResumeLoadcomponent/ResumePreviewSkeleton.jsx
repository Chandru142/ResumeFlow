import React from 'react'

const ResumePreviewSkeleton = () => {
  return (
   
    <div>
      {/* Personal Info */}
      <div className="shadow-lg p-10 border-t-[20px] h-auto border-gray-300">
        {/* Name skeleton */}
        <div className="flex justify-center mb-2">
          <div className="h-6 bg-gray-300 rounded animate-pulse w-48"></div>
        </div>

        {/* Job title skeleton */}
        <div className="flex justify-center mb-1">
          <div className="h-3 bg-gray-300 rounded animate-pulse w-32"></div>
        </div>

        {/* Address skeleton */}
        <div className="flex justify-center mb-7">
          <div className="h-3 bg-gray-300 rounded animate-pulse w-56"></div>
        </div>

        {/* Contact info skeleton */}
        <div className="flex justify-between pt-7">
          <div className="h-4 bg-gray-300 rounded animate-pulse w-28"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse w-36"></div>
        </div>

        <hr className="border-2 my-1.5 border-gray-300" />

        {/* Summary skeleton */}
        <div className="space-y-2 my-4">
          <div className="h-3 bg-gray-300 rounded animate-pulse w-full"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse w-4/5"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
        </div>

        {/* Experience Section */}
        <div className="my-2">
          <div className="flex justify-center mb-2">
            <div className="h-5 bg-gray-300 rounded animate-pulse w-24"></div>
          </div>
          <hr className="border-2 border-gray-300" />

          {/* Experience items */}
          {[1, 2].map((_, index) => (
            <div className="my-2.5" key={index}>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-48 mb-2"></div>
              <div className="flex justify-between mb-2">
                <div className="h-3 bg-gray-300 rounded animate-pulse w-40"></div>
                <div className="h-3 bg-gray-300 rounded animate-pulse w-32"></div>
              </div>
              <div className="space-y-1">
                <div className="h-3 bg-gray-300 rounded animate-pulse w-full"></div>
                <div className="h-3 bg-gray-300 rounded animate-pulse w-5/6"></div>
                <div className="h-3 bg-gray-300 rounded animate-pulse w-4/5"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="my-2">
          <div className="flex justify-center mb-2">
            <div className="h-5 bg-gray-300 rounded animate-pulse w-20"></div>
          </div>
          <hr className="border-2 border-gray-300" />

          <div className="my-2.5">
            <div className="h-4 bg-gray-300 rounded animate-pulse w-52 mb-2"></div>
            <div className="flex justify-between mb-2">
              <div className="h-3 bg-gray-300 rounded animate-pulse w-44"></div>
              <div className="h-3 bg-gray-300 rounded animate-pulse w-24"></div>
            </div>
            <div className="space-y-1">
              <div className="h-3 bg-gray-300 rounded animate-pulse w-full"></div>
              <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="my-2">
          <div className="flex justify-center mb-2">
            <div className="h-5 bg-gray-300 rounded animate-pulse w-16"></div>
          </div>
          <hr className="border-2 border-gray-300" />

          <div className="grid grid-cols-2 gap-4 my-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="h-4 bg-gray-300 rounded animate-pulse w-20"></div>
                <div className="h-2 bg-gray-300 w-[100px] rounded-2xl animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default ResumePreviewSkeleton