import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaRegUser, FaUserCheck } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Header() {

    const [listStatus, setListStatus] = useState(false)
    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("")
    // console.log(token);
    // console.log(username); 


    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("existingUser");
        toast.success("Logged out successfully");
        navigate("/");
    };

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }

        if (sessionStorage.getItem("existingUser")) {
            const name = JSON.parse(sessionStorage.getItem("existingUser"))
            setUsername(name.username)
        }
    }, [])

    return (
        <>
            <div className='grid grid-cols-3 p-3 items-center'>
                <div className='flex items-center'>
                    <img
                        width="50"
                        height="50"
                        src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
                        alt="Bookstore Logo"
                    />
                    <h1 className='font-bold text-2xl ms-2 md:hidden'>BOOKSTORE</h1>
                </div>

                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-3xl font-bold tracking-wide'>BOOKSTORE</h1>
                </div>

                <div className='md:flex justify-end items-center hidden'>
                    <FaInstagramSquare className='me-3 text-2xl hover:text-pink-500 cursor-pointer' />
                    <FaXTwitter className='me-3 text-2xl hover:text-blue-400 cursor-pointer' />
                    <FaFacebookSquare className='me-3 text-2xl hover:text-blue-600 cursor-pointer' />

                    {!token ?

                        <div className='ms-3' >
                            <Link to={"/login"}><button className='cursor-pointer flex px-4 py-3 border border-black rounded items-center'><FaRegUser className='me-3' />Login</button></Link>
                        </div>

                        :
                        <div className="relative inline-block">
                            <button
                                onClick={() => setDropdownStatus(!dropdownStatus)}
                                className="inline-flex items-center gap-2 bg-black/10 px-3 py-2 rounded-md"
                            >
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg"
                                    width="30"
                                    height="30"
                                    alt=""
                                    style={{ borderRadius: "50%" }}
                                />
                                <span className="text-sm font-semibold">{username}</span>
                            </button>

                            {dropdownStatus &&
                                <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg'>
                                    <Link to={"/profile"}><button className='block px-4 py-2 text-sm text-gray-70'>Profile</button></Link>

                                    <button onClick={handleLogout} className='block px-4 py-2 text-sm text-gray-70'>Logout</button>
                                </div>
                            }
                        </div>


                    }


                </div>




            </div>

            <nav className='w-full bg-gray-900 text-white p-5 md:flex md:justify-center md:items-center'>
                <div className='flex justify-between items-center md:hidden'>
                    <button onClick={() => setListStatus(!listStatus)}>
                        <TiThMenu className='text-3xl' />
                    </button>

                    {!token ? (
                        <Link to="/login">
                            <button className='flex items-center border border-white rounded px-3 py-2 hover:bg-white hover:text-black transition'>
                                <FaRegUser className='me-2' /> Login
                            </button>
                        </Link>
                    ) : (
                        <div className="relative inline-block">
                            <button
                                onClick={() => setDropdownStatus(!dropdownStatus)}
                                className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-md"
                            >
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg"
                                    width="30"
                                    height="30"
                                    alt=""
                                    style={{ borderRadius: "50%" }}
                                />
                                <span className="text-sm font-semibold">{username}</span>
                            </button>

                            {dropdownStatus && (
                                <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg">
                                    <Link to="/profile">
                                        <button className='block w-full text-left px-4 py-2 text-sm text-black'>Profile</button>
                                    </Link>
                                    <button onClick={handleLogout} className='block w-full text-left px-4 py-2 text-sm text-black'>Logout</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>


                <ul className={listStatus ? 'flex flex-col' : 'md:flex justify-center items-center hidden'}>
                    <li><Link to="/" className='mx-4 hover:text-yellow-400 transition'>Home</Link></li>
                    <li><Link to="/all-books" className='mx-4 hover:text-yellow-400 transition'>Books</Link></li>
                    <li><Link to="/careers" className='mx-4 hover:text-yellow-400 transition'>Careers</Link></li>
                    <li><Link to="/contact" className='mx-4 hover:text-yellow-400 transition'>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
