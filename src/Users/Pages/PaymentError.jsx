import React from 'react'
import Header from '../../Common/Components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../Common/Components/Footer'

function PaymentError() {
    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
                <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center max-w-lg w-full">

                    <img
                        src="https://png.pngtree.com/png-clipart/20250516/original/pngtree-payment-error-icon-png-image_20994702.png"
                        alt="Error"
                        className="w-32 mx-auto mb-6"
                    />

                    <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                        Payment Failed!
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Something went wrong while processing your payment.
                        Please try again or use a different payment method.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Link
                            to="/checkout"
                            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
                        >
                            Try Again
                        </Link>

                        <Link
                            to="/books"
                            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300"
                        >
                            Back to Books
                        </Link>
                    </div>
                </div>
            </div> 

            <Footer />
        </>
    )
}

export default PaymentError
