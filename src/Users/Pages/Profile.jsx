import React, { useEffect, useState } from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { MdVerified } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { addBookAPI } from "../../Services/allAPI";
import { getUserBooksAPI } from "../../Services/allAPI";
import { deleteAUserAddedBookAPI } from "../../Services/allAPI";
import { getAllUserBroughtBooksAPI } from "../../Services/allAPI";



function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [preview, setPreview] = useState("");
  const [purchaseStatus, setPurchaseStatus] = useState(false);
  const [allUploadImages, setAllUploadImages] = useState([]);
  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")
  const [userAddedBook, setUserAddedBook] = useState([])
  const [deleteBookStatus, setDeleteBookStatus] = useState("")
  const [purchasedBooks, setPurchasedBooks] = useState([]);


  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    noOfPages: "",
    imageUrl: "",
    price: "",
    dPrice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    uploadImages: [],
  });

  console.log(bookDetails);

  const reset = () => {
    setBookDetails({
      title: "",
      author: "",
      noOfPages: "",
      imageUrl: "",
      price: "",
      dPrice: "",
      abstract: "",
      publisher: "",
      language: "",
      isbn: "",
      category: "",
      uploadImages: [],
    });
    setPreview("");
    setAllUploadImages([]);
  };

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    const fileArray = bookDetails.uploadImages;
    fileArray.push(e.target.files[0]);
    setBookDetails({ ...bookDetails, uploadImages: fileArray });

    // convert file to url
    const url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
    let images = allUploadImages;
    images.push(url);
    setAllUploadImages(images);
  };
  // console.log(preview);
  // console.log(allUploadImages);

  const handleAddBook = async () => {
    const {
      title,
      author,
      noOfPages,
      imageUrl,
      price,
      dPrice,
      abstract,
      publisher,
      language,
      isbn,
      category,
      uploadImages,
    } = bookDetails;
    if (!title || !author || !noOfPages || !imageUrl || !price || !dPrice || !abstract || !publisher || !language || !isbn || !category || uploadImages.length == 0) {
      toast.info("Fill in the form completely")
    } else {
      // request header
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      // request body - formData() //append-reqBody.append(key,value)
      // reqBody.append("title",title)
      const reqBody = new FormData()

      for (let key in bookDetails) {
        if (key != "uploadImages") {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImages.forEach(img => {
            reqBody.append("uploadImages", img)
          })
        }
      }
      try {
        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("Book Added Successfully")
          reset()
        } else if (result.status == 401) {
          toast.warning(result.response.data)
        } else {
          toast.error("Error in Adding Book")
          reset()
        }

      } catch (error) {
        toast.error("something went wrong")
      }
    }
  };


  const getUserAddedBooks = async () => {

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await getUserBooksAPI(reqHeader)
    console.log(result);
    setUserAddedBook(result.data);

  }


  const getUserPurchasedBooks = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`,
    };

    try {
      const result = await getAllUserBroughtBooksAPI(reqHeader);
      console.log(result);

      if (result.status === 200) {
        setPurchasedBooks(result.data);
      } else {
        toast.error("Failed to fetch purchase history");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error while fetching purchase history");
    }
  };




  const handleDeleteBook = async (id) => {
    try {

      const result = await deleteAUserAddedBookAPI(id);

      if (result.status == 200) {
        toast.success("Book Deleted Successfully");
        setDeleteBookStatus(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error");
    }
  };




  useEffect(() => {
    if (bookStatus == true) {
      getUserAddedBooks()
    }
  }, [bookStatus])

  useEffect(() => {
    if (deleteBookStatus) {
      getUserAddedBooks();
      setDeleteBookStatus(false);
    }
  }, [deleteBookStatus]);


  useEffect(() => {
    if (purchaseStatus === true) {
      getUserPurchasedBooks();
    }
  }, [purchaseStatus]);





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
      <Header />
      <div style={{ height: "200px" }} className="bg-black"></div>
      <div
        className="bg-white p-3"
        style={{
          width: "230px",
          height: "230px",
          borderRadius: "50%",
          marginLeft: "70px",
          marginTop: "-130px",
        }}
      >
        <img
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
        />
      </div>

      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">{username}</h1>
          <MdVerified className="text-blue-500 ms-3 text-xl" />
        </div>
        <div>
          <button className="flex px-4 py-3 font-bold border border-blue-200 text-blue-600">
            <FaRegEdit className="mt-1 me-2" />
            Edit
          </button>
        </div>
      </div>

      <p className="flex text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum
        similique debitis quis minima inventore itaque eum amet laboriosam,
        dolores autem sed sapiente hic sunt, culpa, a mollitia necessitatibus
        dolorem!
      </p>

      {/* tabs */}

      <div className="flex justify-center items-center my-8 font-medium">
        <p
          onClick={() => {
            setSellBookStatus(true),
              setBookStatus(false),
              setPurchaseStatus(false);
          }}
          className={
            sellBookStatus
              ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
              : "p-4 border border-gray-200 cursor-pointer"
          }
        >
          Sell Book
        </p>
        <p
          onClick={() => {
            setSellBookStatus(false),
              setBookStatus(true),
              setPurchaseStatus(false);
          }}
          className={
            bookStatus
              ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
              : "p-4 border border-gray-200 cursor-pointer"
          }
        >
          Book Status
        </p>
        <p
          onClick={() => {
            setSellBookStatus(false), setBookStatus(false), setPurchaseStatus(true);
          }}
          className={
            purchaseStatus
              ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
              : "p-4 border border-gray-200 cursor-pointer"
          }
        >
          Purchase History
        </p>
      </div>

      {/* Sell Books */}
      {sellBookStatus && (
        <div className="md:px-40 p-5">
          <div className="flex flex-col shadow bg-gray-300 rounded">
            <h1 className="text-center text-2xl my-5 font-bold">
              Book Details
            </h1>
            <div className="md:grid grid-cols-2">
              <div className="">
                <input
                  value={bookDetails.title}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, title: e.target.value })
                  }
                  type="text"
                  placeholder="Title"
                  className="w-full bg-gray-200 mb-4 mx-5 rounded p-2"
                />
                <input
                  value={bookDetails.author}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, author: e.target.value })
                  }
                  type="text"
                  placeholder="Author"
                  className="w-full bg-gray-200 mb-4 mx-5 rounded p-2"
                />
                <input
                  value={bookDetails.noOfPages}
                  onChange={(e) =>
                    setBookDetails({
                      ...bookDetails,
                      noOfPages: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="No of Pages"
                  className="w-full bg-gray-200 mb-4 mx-5 rounded p-2"
                />
                <input
                  value={bookDetails.imageUrl}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, imageUrl: e.target.value })
                  }
                  type="text"
                  placeholder="Image Url"
                  className="w-full bg-gray-200 mb-4 mx-5 rounded p-2"
                />
                <input
                  value={bookDetails.price}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, price: e.target.value })
                  }
                  type="text"
                  placeholder="Price"
                  className="w-full bg-gray-200 mb-4 mx-5 rounded p-2"
                />
                <input
                  value={bookDetails.dPrice}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, dPrice: e.target.value })
                  }
                  type="text"
                  placeholder="Discount Price"
                  className="w-full bg-gray-200 mb-4 mx-5 rounded p-2"
                />
                <input
                  value={bookDetails.abstract}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, abstract: e.target.value })
                  }
                  type="text"
                  placeholder="Abstract"
                  className="w-full bg-gray-200 mb-4 mx-5 rounded p-2"
                />
              </div>

              <div className="md:px-10">
                <input
                  value={bookDetails.publisher}
                  onChange={(e) =>
                    setBookDetails({
                      ...bookDetails,
                      publisher: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Publisher"
                  className="w-full bg-gray-200 mb-4  rounded p-2"
                />
                <input
                  value={bookDetails.language}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, language: e.target.value })
                  }
                  type="text"
                  placeholder="Language"
                  className="w-full bg-gray-200 mb-4  rounded p-2"
                />
                <input
                  value={bookDetails.isbn}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, isbn: e.target.value })
                  }
                  type="text"
                  placeholder="ISBN"
                  className="w-full bg-gray-200 mb-4  rounded p-2"
                />
                <input
                  value={bookDetails.category}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, category: e.target.value })
                  }
                  type="text"
                  placeholder="Category"
                  className="w-full bg-gray-200  rounded p-2"
                />
                <div className="flex justify-center items-center mt-10 flex-col">
                  {preview ? (
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={preview}
                      alt=""
                    />
                  ) : (
                    <label htmlFor="uploadBookImg">
                      <input
                        onChange={(e) => {
                          handleFile(e);
                        }}
                        id="uploadBookImg"
                        type="file"
                        style={{ display: "none" }}
                      />
                      <img
                        style={{ width: "200px", height: "200px" }}
                        src="https://img.freepik.com/premium-vector/file-upload-vector-icon-design-illustration_1174953-75051.jpg"
                        alt=""
                      />
                    </label>
                  )}

                  {preview && (
                    <div className="flex mt-10 items-center gap-5">
                      {allUploadImages.map((item, index) => (
                        <img
                          key={index}
                          style={{ width: "50px", height: "50px" }}
                          src={item}
                          alt=""
                        />
                      ))}

                      {allUploadImages.length < 3 && (
                        <label htmlFor="uploadBookImg" className="ms-4">
                          <input
                            onChange={(e) => {
                              handleFile(e);
                            }}
                            id="uploadBookImg"
                            type="file"
                            style={{ display: "none" }}
                          />
                          <img
                            style={{ width: "50px", height: "50px" }}
                            src="https://img.freepik.com/premium-vector/file-upload-vector-icon-design-illustration_1174953-75051.jpg"
                            alt=""
                          />
                        </label>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex md:justify-end justify-center mt-5 mb-5">
                  <button
                    onClick={reset}
                    className="bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:bg-white hover:text-amber-600"
                  >
                    Reset
                  </button>
                  <button type="button" onClick={handleAddBook} className="bg-green-700 text-white px-5 py-3 rounded ms-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Status */}
      {bookStatus && (
        <div className="p-10 my-20 shadow rounded">
          {userAddedBook.length > 0 ? (
            userAddedBook.map((book, index) => (
              <div key={index} className="bg-gray-200 p-5 rounded mt-4">
                <div className="md:grid grid-cols-[3fr_1fr]">
                  <div className="px-4">
                    <h1 className="text-2xl">{book.title}</h1>
                    <h2>{book.author}</h2>
                    <h3 className="text-blue-600">₹{book.price}</h3>
                    <p>{book.abstract}</p>

                    <div className="flex mt-5">
                      {book.status === "pending" && (
                        <img
                          src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png"
                          style={{ height: "70px", width: "70px" }}
                          alt=""
                        />
                      )}

                      {book.status === "rejected" && (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png"
                          style={{ height: "70px", width: "70px" }}
                          alt=""
                        />
                      )}

                      {book.status === "approved" && (
                        <img
                          src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png"
                          style={{ height: "70px", width: "70px" }}
                          alt=""
                        />
                      )}
                    </div>
                  </div>

                  <div className="px-4 mt-4 md:mt-4">
                    <img
                      src={book.imageUrl}
                      alt=""
                      className="w-full"
                      style={{ height: "250px", objectFit: "cover" }}
                    />

                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        onClick={() => handleDeleteBook(book._id)}
                        className="p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600"
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center flex-col">
              <img
                style={{ width: "200px", height: "200px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuFlmxinymbZB0Btt2vdYDeuFwZUiSVwdGQ&s"
                alt=""
              />
              <p className="text-2xl text-red-600">No Book Added yet</p>
            </div>
          )}
        </div>
      )}



      {purchaseStatus && (
        <div className="p-10 my-20 shadow rounded">
          <h1 className="text-2xl font-bold mb-5">Purchase History</h1>

          {purchasedBooks.length > 0 ? (
            purchasedBooks.map((book, index) => (
              <div key={index} className="bg-gray-200 p-5 rounded mt-4">
                <div className="md:grid grid-cols-[3fr_1fr]">

                  <div className="px-4">
                    <h1 className="text-2xl">{book.title}</h1>
                    <h2>{book.author}</h2>
                    <h3 className="text-green-700 font-bold">₹{book.price}</h3>
                    <p className="mt-3">{book.abstract}</p>

                    <p className="text-sm mt-3 text-gray-600">
                      Purchased by: <span className="font-bold">{username}</span>
                    </p>

                    <p className="text-sm text-gray-600">
                      Status: <span className="font-bold text-blue-600">Completed</span>
                    </p>
                  </div>

                  <div className="px-4 mt-4 md:mt-4">
                    <img
                      src={book.imageUrl}
                      alt=""
                      className="w-full"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center flex-col">
              <img
                style={{ width: "200px", height: "200px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuFlmxinymbZB0Btt2vdYDeuFwZUiSVwdGQ&s"
                alt=""
              />
              <p className="text-2xl text-red-600 mt-3">No Purchase History Found</p>
            </div>
          )}
        </div>
      )}





      <Footer />
    </>
  );
}

export default Profile;