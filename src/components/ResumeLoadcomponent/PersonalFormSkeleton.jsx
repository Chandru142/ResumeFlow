import React from 'react'

const PersonalFormSkeleton = () => {
    return (
    <div className="shadow-lg h-full border-t-5 border-t-primary mt-5 p-5">
      <h2 className="text-xl font-bold">Personal Details</h2>
      <h3 className="text-md">Get Started by filling basic details</h3>

      <div>
        <form className="mt-5">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="text-sm">
                First Name
              </label>
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
            </div>

            <div>
              <label htmlFor="lastName" className="text-sm">
                Last Name
              </label>
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
            </div>

            <div className="col-span-2">
              <label htmlFor="jobTitle" className="text-sm">
                Job Title
              </label>
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
            </div>

            <div className="col-span-2">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
            </div>

            <div className="">
              <label htmlFor="phone" className="text-sm">
                Phone
              </label>
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
            </div>

            <div className="">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          </div>
          <div className="mt-5 h-10 w-16 bg-gray-200 animate-pulse rounded-md"></div>
        </form>
      </div>
    </div>
  )
}

export default PersonalFormSkeleton