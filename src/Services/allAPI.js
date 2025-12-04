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

export const getAllBooksAPI = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-books?search=${searchKey}`, {}, reqHeader)
}

export const getABookAPI = async (bookid, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/view-book/${bookid}`, {}, reqHeader)
}


export const getUserBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-books`, {}, reqHeader)
}

export const deleteAUserAddedBookAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVERURL}/delete-book/${id}`);
};

export const getAllUserBroughtBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-brought-book`, {}, reqHeader);
};

export const updateUserProfileAPI = async (reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/update-user-profile`, reqBody, reqHeader);
};

