
import logoImage from '../assets/Group.png'


function Header() {

    return (
        <>
            <header className=" bg-transparent body-font ms-[62px]">
                <div className="container bg-transparent mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <img src={logoImage} className='text-gray-800' alt="A descriptive alt text" />
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl text-white  ">Moss</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 text-white  hover:text-white-900 font-bold-[50px] font-monospace">Listing</a>
                        <a className="mr-5  text-white   hover:text-white-900 font-bold-[50px] font-monospace">Pages</a>

                    </nav>
                    <button className="inline-flex me-6 items-center bg-transparent border-1 border-white text-gray-100  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Login

                    </button>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Signup

                    </button>
                </div>
            </header>

        </>
    )
}

export default Header