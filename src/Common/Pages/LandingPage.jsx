import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'; 
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <>
            <Header />

            <div
                style={{ height: "500px" }}
                className='flex flex-col justify-center items-center 
                           bg-[url("https://i.pinimg.com/736x/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg")] 
                           bg-no-repeat bg-cover bg-center text-white'
            >
                <div
                    className='w-full flex flex-col justify-center items-center'
                    style={{ height: "500px", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <h1 className='text-5xl font-bold mb-3'>Wonderful Gifts</h1>
                    <p className='text-lg mb-5'>Give your family and friends a book</p>

                    <div className='mt-3 flex items-center relative'>
                        <input
                            type="text"
                            placeholder='Search Books'
                            className='bg-white text-black p-3 rounded-3xl placeholder-gray-500 w-80 outline-none'
                        />
                        <HiMiniMagnifyingGlass
                            className='text-gray-500 text-2xl absolute right-5 cursor-pointer hover:text-black transition'
                        />
                    </div>
                </div>
            </div> 

            <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
                <h1>NEW ARRIVALS</h1> 
                <h1>Explore our latest collection</h1> 
                <div className='md:grid grid-cols-4 w-full mt-5'>
                    <div className='p-3'>
                        <div className='shadow p-3 rounded'>
                            <img height={"300px"} width={"100%"} src="https://m.media-amazon.com/images/I/81tFwEZOFcL._SY245_.jpg" alt="" /> 
                            <div className='text-center mt-3'>
                                <p className='font-bold text-2xl'>Book Name</p>
                                <p className='font-bold text-2xl'>Author</p>
                                <p className='font-bold'>₹ 599</p>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='text-center my-5'>
                    <Link to={'all-books'}><button className='px-3 py-2 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button></Link>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default LandingPage;
