import commonAPI from "./commonAPI"

export const registerAPI = async(reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqbody)
}