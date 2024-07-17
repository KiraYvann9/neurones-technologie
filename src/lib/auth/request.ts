//const base_url = process.env.BASE_URL
//1080
import {BASE_URL} from "@/lib/config";

export const register = async (data: any) =>{

    const response = await fetch(`${BASE_URL}register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body : JSON.stringify(data)
    })

    return response

}