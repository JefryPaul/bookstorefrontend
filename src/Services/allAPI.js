import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async(reqbody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqbody)
}