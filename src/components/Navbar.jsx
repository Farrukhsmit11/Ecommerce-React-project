import { useState } from "react";
import logo1 from "../assets/logo/logoa.png"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";



const links = [
    { title: "home", link: "/" },
    { title: "about", link: "/about" },
    { title: "contact-us", link: "/contact" },
];


export default function Navbar() {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const isLoggedIn = true;
    const navLinkStyle =
        "capitalize hover:underline cursor-pointer hover:text-primary";


    return (
        <div className="h-28 bdr flex justify-around items-center">

            <img src={logo1} className="w-20" />

            <div className="w-60 px-2 h-10 rounded center bg-[#F5F5F5]">
                <input
                    type="search"
                    className="outline-none w-full text-sm bg-transparent"
                    placeholder="What are you looking for?"
                />
                <CiSearch className="text-3xl" />
            </div>


            <ul className=" hidden md:flex gap-3">
                {links.map((item, i) => (
                    <li className={navLinkStyle} key={i}>
                        <a href={item.link}>{item.title}</a>
                        {/* {item} */}
                    </li>
                ))}

                {!isLoggedIn ? <li className={navLinkStyle}>Login</li> : null}
            </ul>


            <div className="icons center text-2xl gap-3">
                {isLoggedIn ? (
                    <>
                        <CiHeart className="text-2xl" />
                        <CiShoppingCart />
                    </>

                ) : null}
                <div className="bg-red-500 rounded-full h-8 w-8 center text-base text-white">
                    <FaRegUser />
                </div>
            </div>
        </div>
    );
}