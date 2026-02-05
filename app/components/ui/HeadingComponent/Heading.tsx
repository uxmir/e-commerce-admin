
import React from 'react'
interface headingProps{
headingValue:string;
}
const Heading:React.FC<headingProps> = ({headingValue}) => {
  return (
    <div>
      <h1 className=' text-lg sm:text-2xl font-medium  capitalize text-gray-800 dark:text-white'>{headingValue}</h1>
    </div>
  )
}

export default Heading
