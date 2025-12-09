import React from 'react'
import Header from '../../Common/Components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../Common/Components/Footer'

function PaymentSuccess() {
    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
                <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center max-w-lg w-full">

                    <img
                        src="https://funtura.in/wp-content/themes/funtura/assets/images/success.svg"
                        alt="Success"
                        className="w-40 mx-auto mb-6"
                    />

                    <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
                        Congratulations
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Thank you for shopping with <span className="font-semibold">Bookstore</span>.
                        We hope you enjoy your reading experience!
                    </p>

                    <Link
                        to="/books"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    >
                        Explore More Books →
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default PaymentSuccess
