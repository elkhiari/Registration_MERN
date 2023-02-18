import { useContext } from "react";
import { UserContext } from "../App";
import AccountInfo from "./Accountinfo";
import Formulaire from "./form";

export default function Inscription()
{
    const {user,setUser} = useContext(UserContext)
    return(
        <>
            {!user?<Formulaire />:<AccountInfo />}
        </>
    )
}