import { useContext } from "react"
import { UserContext } from "../App"
import PDfDownloadBtn from "./PDF"

export default function AccountInfo()
{
    const {user,setUser} = useContext(UserContext)
    return(
         
        <div class="m-10 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Cnie
                </th>
                <th scope="col" class="px-6 py-3">
                    First name
                </th>
                <th scope="col" class="px-6 py-3">
                    Last name 
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    PHONE
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user && user.cnie}
                </th>
                <td class="px-6 py-4">
                {user && user.firstName}
                </td>
                <td class="px-6 py-4">
                {user && user.lastName}
                </td>
                <td class="px-6 py-4">
                {user && user.email}
                </td>
                <td class="px-6 py-4">
                {user && user.phone}
                </td>
                <td class="px-6 py-4">
                {user && user.adress}
                </td>
                <td class="px-6 py-4">
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                    <PDfDownloadBtn props={user} />
                </td>
            </tr>
        </tbody>
    </table>
</div>

            
        </div>
    )
}