'use client'
const EventButton = ({title, className}: {title: string, className?: string}) => {
  return (
    <button className={`bg-blue-500 text-white p-2 cursor-pointer hover:bg-blue-600 rounded-md ${className}`}>{title}</button>
  )
}

export default EventButton