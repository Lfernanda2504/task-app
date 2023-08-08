import { useRouter } from "next/navigation"
export const TaskCard = ({ task }) => {
    const router = useRouter()
    return (
        <div className="w-full max-w-md  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 mb-3 py-3" onClick={()=> router.push(`/edit/${task.id}`)}>
            <div className="flex flex-col items-center justify-center pb-10 ">
                <h5 className="uppercase py-3 mb-1 text-xl font-medium text-sky-600">{task.title}</h5>
                <span className="text-sm text-gray-800 dark:text-gray-400">{task.description}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Eliminar</button>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</button>
                </div>
            </div>
        </div>
    )
}
