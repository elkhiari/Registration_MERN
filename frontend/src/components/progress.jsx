import { useContext } from "react"
import { UserContext } from "../App"

export default function ProgRess()
{
    const {user,setUser} = useContext(UserContext)
    return (
        <div className="w-full flex place-content-center  mx-auto px-10 py-5 lg:w-1/2 lg:p-0 lg:py-5">

            <ol  className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                
                
                <li  className={!user?"flex items-center text-blue-600 dark:text-blue-500":"flex items-center text-green-600 dark:text-green-500"}>
                    <span  className={!user?"flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500":"flex items-center justify-center w-5 h-5 mr-2 text-xs border border-green-500 rounded-full shrink-0 dark:border-green-400"}>
                        1
                    </span>
                    Personal <span  className="hidden sm:inline-flex sm:ml-2">Info</span>
                    <svg aria-hidden="true"  className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </li>


                <li  className={!!user?"flex items-center text-blue-600 dark:text-blue-500":"flex items-center"}>
                    <span  className={!!user?"flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500":"flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"}>
                        2
                    </span>
                    Account <span  className="hidden sm:inline-flex sm:ml-2">Verify</span>
                    <svg aria-hidden="true"  className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </li>

                <li  className="flex items-center">
                    <span  className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        3
                    </span>
                    Account <span  className="hidden sm:inline-flex sm:ml-2">Confirmation</span>
                    <svg aria-hidden="true"  className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </li>

            </ol>

        </div>
    )
}