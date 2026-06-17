import { auth } from "../auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
    try{
        const session = await auth.api.getSession({
        headers: await headers() // some endpoints might require headers
    })

    return session?.user || null;
    }
    catch(error){
        console.log(error)
        return {}
    }
}