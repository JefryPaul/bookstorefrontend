import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async(reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqbody)
} 

export const loginAPI = async (reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqbody)
}