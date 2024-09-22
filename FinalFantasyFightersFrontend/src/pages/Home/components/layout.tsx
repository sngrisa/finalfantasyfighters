import { GiStarfighter } from "react-icons/gi";
import WindowImage from "./../../../assets/home.png";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import "./layout.scss";

const Layout = () => {
    return (
        <>
            <div className="w-full">
                <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
                    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden text-shadow-[20] ">
                        <h1 className="my-4 cursor-pointer text-6xl md:text-6xl text-white font-bold leading-tight text-center md:text-left flex items-center" id="text-home">
                            <span className="mr-2 text-red-700 text-shadow-[20]"><GiStarfighter /></span> Welcome to Final Fantasy Fighters
                        </h1>
                        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-white font-bold text-shadow-[20] flex items-center justify-center">
                            The app of final fantasy fighters!!!
                        </p>
                        <div className="w-full flex items-center justify-center" id="buttonHome">
                            <a href="/figthing" className="w-full">
                                <Button className="w-full flex items-center font-bold hover:bg-gray-500 hover:text-white text-2xl" variant="outline">
                                    <span className="mr-3"><FaPlay /></span>Play Game
                                </Button>
                            </a>
                        </div>
                    </div>
                    <a className="w-full xl:w-3/5 p-12 overflow-hidden cursor-pointer" href="/figthing">
                        <img
                            className="mx-auto w-full border border-white border-border md:w-4/5 transform transition duration-700 ease-in-out hover:scale-105 hover:rotate-6 shadow-lg rounded-lg"
                            src={WindowImage}
                            alt="FinalFantasy Fighers.png"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Layout;