
import background from "../assets/image.png"
import Form from "./Form";
import Header from "./Header";
function Banner() {

    return (

        <>
            {/* This is for Background Image  */}
            <div
                className="w-full h-screen bg-no-repeat bg-cover"
                style={{
                    top: "95.7px",
                    width: "100%",
                    height: "600px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${background})`
                }}>

                {/* This is for header sections  */}
                <Header />
                {/* this is for main heading   */}
                <div className="flex flex-col flex-text-wrap mt-[170px] items-center justify-content-center">
                    <p style={{
                        fontFamily: 'Tangerine',
                        color: 'white',
                        fontWeight: '400', lineHeight: '96px',
                        fontSize: '110px',

                    }}>
                        Property In A Click.
                    </p>
                    <p style={{ font: 'Sora', fontWeight: '400', lineHeight: "100%", marginTop: 12, color: '#FFFFFF' }}>
                        Verfied listings. Trusted agents. No hidden costs
                    </p>
                </div>

                {/* THis is for Form section  */}

                <Form />



            </div >

        </>



    )
}

export default Banner;