import React, { use, useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { getHomeBookAPI } from '../../Services/allAPI';

function LandingPage() {

    const [homeBook, setHomeBook] = useState([])

    const getHomeBooks = async () => {
        const result = await getHomeBookAPI()
        console.log(result);
        setHomeBook(result.data)
    }

    useEffect(() => {
        getHomeBooks()
    }, [])

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

            <section className="md:px-40 p-5 flex flex-col justify-center items-center">
                <h1>New Arrivals</h1>
                <h1>Explore Our Latest Collection</h1>

                {homeBook.length > 0 ?
                    <div className="md:grid grid-cols-4 w-full mt-5">

                        {homeBook.map((item, index) => (
                            <div key={index} className="p-3">
                                <div className="shadow p-3 rounded">
                                    <img
                                        height={"300px"}
                                        width={"100%"}
                                        src={item.imageUrl}
                                        alt=""
                                    />
                                    <div className="text-center mt-3">
                                        <p className="font-bold text-2xl">{item.title}</p>
                                        <p className="font-bold text-xl">{item.author}</p>
                                        <p className="font-bold">₹{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    :
                    <p>Loading.......</p>
                }

                <div className="text-center my-5">
                    <Link to={"/all-books"}>
                        <button className="px-3 py-2 rounded bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white">
                            Explore More
                        </button>
                    </Link>
                </div>
            </section>



            <section className="mb-20">
                <div className="md:grid grid-cols-2 mx-20 mt-10 text-center">
                    <div>
                        <h1 className="text-xl">Featured Authors</h1>
                        <h1 className="text-2xl mb-4">
                            Captivates With Every Word
                        </h1>
                        <p className="text-justify mb-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                            suscipit recusandae corporis nostrum laudantium tempore laboriosam
                            tempora ea provident id minima, magni blanditiis officia aperiam,
                            ab officiis et labore aliquam.lorem Lorem ipsum dolor si
                            consectetur adipisicing elit. Ex, assumenda maxime ducimus
                            inventore, et odit iusto facilis ullam at alias laborum deleniti
                            sapiente. Nesciunt vel eveniet incidunt sequi accusamus! Nisi.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi

                        </p>
                        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dicta repellendus fugit odio, reprehenderit delectus alias quibusdam beatae laborum fugiat quo, dolorum qui quasi mollitia id, porro perspiciatis inventore iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium expedita assumenda provident similique ad perspiciatis a placeat molestias sint? Quae, eaque eum accusamus debitis modi aliquam. Voluptas, ullam aspernatur?</p>
                    </div>

                    <div className="mx-30">
                        <img width={"450px"} src="https://i.guim.co.uk/img/media/d619fa31c267a9e7191e1ec40d4cd67f3c629924/37_0_592_355/master/592.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=cb3f45028ee0669e2b22a5af37d459bd" alt="" />
                    </div>
                </div>
            </section>


            <section>
                <div className="text-center mb-3">
                    <h1 className="text-lg">TESTIMONIALS</h1>
                    <h1 className="text-2xl">See What Others Are Saying</h1>
                </div>
                <div className="flex justify-center mb-5">
                    <div className="bg-white shadow-xl rounded-full p-4  text-center">
                        <img className="mx-auto rounded-full object-cover " width={"200px"} src="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-confident-beautiful-girl-wearing-formal-office-dress-white-british-woman-png-image_12502570.png" alt="" />
                        <p className="mt-3">Tressa Joseph</p>

                    </div>

                </div>
                <p className="mx-60 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magnam incidunt architecto? Consectetur quos, ut tempore minima enim dignissimos. Optio consequatur sequi numquam minus, labore aliquid id a tempora dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sapiente laudantium unde fugit, veritatis aliquid accusamus ratione dolores quod nulla officiis est eos dolorem perspiciatis soluta harum doloribus laboriosam pariatur!</p>
            </section>




            <Footer />
        </>
    );
}

export default LandingPage;
