import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async (reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqbody)
}

export const loginAPI = async (reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqbody)
}

export const getHomeBookAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-books`)
}

export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}

export const getAllBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-books`, "", reqHeader)
}

export const getABookAPI = async (bookid, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/view-book/${bookid}`, {}, reqHeader)
}
