"use client"
import { useTasks } from "@/context/TasksContext"
import { TaskCard } from "../components/TaskCard"

function page() {
  const {tasks} = useTasks()
  
  return (
    <div className="flex flex-wrap md:justify-center gap-3 py-3">
      {tasks.map((task, i) =>(
        <TaskCard task={task} key={i}/>
      ))}
    </div>
  )
}

export default page

