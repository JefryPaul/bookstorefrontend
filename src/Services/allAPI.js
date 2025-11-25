import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async (reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqbody)
}

export const loginAPI = async (reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqbody)
}

export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}