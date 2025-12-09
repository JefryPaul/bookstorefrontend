import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { googleLoginAPI, loginAPI, registerAPI } from "../../Services/allAPI";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode'

function Auth({ register }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [pass, setPass] = useState(false);
  const navigate = useNavigate();

  const HandleRegister = async () => {
    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
      toast.info("Fill the form completely");
    } else {
      const result = await registerAPI(userDetails);

      if (result.status === 200) {
        toast.success("Registered successfully");
        setUserDetails({ username: "", email: "", password: "" });
        navigate("/login");
      } else if (result.status === 404) {
        toast.warning(result.response.data);
        setUserDetails({ username: "", email: "", password: "" });
      } else {
        toast.error("Something Went Wrong");
        setUserDetails({ username: "", email: "", password: "" });
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = userDetails;

    if (!email || !password) {
      toast.info("Fill the form completely");
    } else {
      const result = await loginAPI({ email, password });

      if (result.status === 200) {
        toast.success("Login Successful");

        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);

        setUserDetails({ username: "", email: "", password: "" });
        navigate("/");
      } else if (result.status === 401) {
        toast.warning(result.response.data);
        setUserDetails({ username: "", email: "", password: "" });
      } else {
        toast.error("Something Went Wrong!!!");
        setUserDetails({ username: "", email: "", password: "" });
      }
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    const googleData = jwtDecode(credentialResponse.credential);

    try {
      const result = await googleLoginAPI({
        password: "googlepassword",
        email: googleData.email,
        username: googleData.name,
        profile: googleData.picture
      });

      if (result.status === 200) {
        const user = result.data.existingUser || result.data.newUser;

        sessionStorage.setItem("existingUser", JSON.stringify(user));
        sessionStorage.setItem("token", result.data.token);

        toast.success("Login Successful");

        if (user.role === "admin") {
          navigate("/admin-home");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://t4.ftcdn.net/jpg/06/91/05/19/360_F_691051962_GFhQPOAXABmf7l706q89b2PFh6FnB1kI.jpg)] bg-cover bg-center">
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center">BOOKSTORE</h1>

          <div
            style={{ width: "400px" }}
            className="bg-blue-950 text-white p-5 flex flex-col my-5 justify-center items-center rounded"
          >
            <div
              style={{ width: "100px", height: "100px", borderRadius: "100%" }}
              className="border mb-3 flex justify-center items-center"
            >
              <FaUserCircle className="text-6xl" />
            </div>

            <h1 className="text-2xl">{register ? "Register" : "Login"}</h1>

            <form className="w-full mt-4">
              {register && (
                <div className="my-5">
                  <label>UserName</label>
                  <input
                    value={userDetails.username}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, username: e.target.value })
                    }
                    type="text"
                    placeholder="Username"
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                  />
                </div>
              )}

              <div className="my-5">
                <label>Email</label>
                <input
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  type="email"
                  placeholder="Email"
                  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                />
              </div>

              <div className="mt-5">
                <label>Password</label>
                <div className="flex items-center">
                  <input
                    value={userDetails.password}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, password: e.target.value })
                    }
                    type={pass ? "text" : "password"}
                    placeholder="Password"
                    className="bg-white p-2 w-full rounded placeholder-gray-500 text-black"
                  />

                  {pass ? (
                    <FaRegEyeSlash
                      onClick={() => setPass(!pass)}
                      className="text-gray-500 cursor-pointer"
                      style={{ marginLeft: "-30px" }}
                    />
                  ) : (
                    <FaRegEye
                      onClick={() => setPass(!pass)}
                      className="text-gray-500 cursor-pointer"
                      style={{ marginLeft: "-30px" }}
                    />
                  )}
                </div>
              </div>

              <p className="text-xs text-orange-400 mt-2">
                *Never Share Your Password With Others
              </p>

              <div className="mt-4">
                {register ? (
                  <button
                    type="button"
                    onClick={HandleRegister}
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Login
                  </button>
                )}
              </div>

              {!register && (
                <div className="mt-4 flex justify-center">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log("Google Login Success:", credentialResponse);
                      handleGoogleLogin(credentialResponse)
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              )}

              <div className="mt-3 text-center">
                {register ? (
                  <p>
                    Already a user?{" "}
                    <Link className="text-blue-400" to="/login">
                      Login
                    </Link>
                  </p>
                ) : (
                  <p>
                    New user?{" "}
                    <Link className="text-blue-400" to="/register">
                      Register
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
