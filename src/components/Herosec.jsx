

function Herosec() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5  py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24  px-25  md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center  ">
                        <p style={{

                            font: 'Source Serif 4',
                            fontWeight: '700',
                            fontSize: "32px",
                            lineHeight: "150%",
                            letterSpacing: '0px',
                            color: '#406C65'
                        }}  >
                            We are committed to delivering
                            <br className="hidden lg:inline-block" />
                            the best — offering unmatched
                            <br className="hidden lg:inline-block" />
                            quality, and ease.
                        </p>


                        <button style={{
                            backgroundColor: '#406C65',
                            marginTop: 35
                        }}
                            className="inline-flex justify-content-start text-white  border-0 py-2 px-6 focus:outline-none hover:bg-[#406C65]  rounded text-lg">
                            Read More
                        </button>

                    </div>
                    <div className="lg:max-w-lg lg:w-full px-20  md:w-1/2 w-5/6">

                        <p style={{
                            fontWeight: "400",
                            fontSize: 15,
                            lineHeight: '126%',
                            letterSpacing: '2px',
                            color: '#8A8A8A',
                            textAlign: 'justified-paragraph'
                        }}>
                            At our core, we believe that property booking is more than just a transaction — it’s about creating value, trust, and lasting connections.
                        </p>
                        <p
                            style={{
                                fontWeight: "400",
                                fontSize: 15,
                                lineHeight: '126%',
                                letterSpacing: '2px',
                                color: '#8A8A8A',
                                marginTop: 4,
                                textAlign: 'justified-paragraph'
                            }}
                        >
                            We are committed to delivering the very best, ensuring every property we offer reflects our dedication to quality and excellence. With a customer-first approach, we aim to not only meet but exceed expectations, making your property booking journey truly exceptional.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Herosec