import { commonAPI } from "./commoapi";
import { SERVER_URL } from "./Serverurl";
export const sellerRegisterAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register/seller`,reqBody)

}
export const buyerRegisterAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register/buyer`,reqBody)
}

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)


    
}
export const uploadAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/seller`,reqBody)}

    export const getUserAPI = async () => {
return await commonAPI("GET",`${SERVER_URL}/seller`,"")    };