import LogoGame from "./../assets/logo.png";
import "./navbar.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {


    interface menuItem{
        id: string | number;
        title: string;
        url: string;
        icon: any;
    }

    let itemsSocial: menuItem[] = [
        {
            id: 1,
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/santiago-grisafi/",
            icon: <FaLinkedin />
        },
        {
            id: 2,
            title: "GitHub",
            url: "https://github.com/sngrisa",
            icon: <FaGithub />
        },
    ]

    return (
        <>
            <div className="w-full container mx-auto">
                <div className="w-full flex items-center justify-between">
                    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/" id="navbarlogo">
                        <img src={LogoGame} alt="FinalFantasyFighers" />
                    </a>
                    <div className="flex w-1/2 justify-end content-center">
                        {
                            itemsSocial.map((itemSocial: menuItem, idx: number | string) => {
                                return (
                                    <a className="inline-block text-white no-underline hover:text-slate-200
                                     hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href={itemSocial.url} key={idx}>
                                        <span className="mr-2 font-bold text-2xl">{itemSocial.icon}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;