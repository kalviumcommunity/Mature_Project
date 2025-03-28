import React from 'react'

const Box = ({description}) => {
  return (
  
   <div className="flex-1 flex flex-col justify-center items-center">
   {/* Box with line underneath */}
   <div className="relative">
     <div className="h-100 w-180 bg-amber-50 flex items-center justify-center rounded-2xl shadow-lg">
     {description}
     </div>
     <div className="absolute left-0 w-full border-t-2 border-amber-50 mt-2"></div>
   </div>
 </div>
 
  )
}

export default Box