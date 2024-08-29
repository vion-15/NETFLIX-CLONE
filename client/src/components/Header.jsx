import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/netflix.png"
import { IoSearch } from "react-icons/io5";

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className="border-b-4 h-[86px] pt-7">

            {/* Logo */}
            <Link to='/' className="flex">
                <img src={logoImage} alt="logo" className="w-28" />
            </Link>

            {/* Menu Navigasi */}
            <Navbar.Collapse className="ml-[262px]">
                {path !== '/' && (
                    <Navbar.Link as='div'>
                        <Link to='/'>Home</Link>
                    </Navbar.Link>
                )}
                <Navbar.Link as='div'>
                    <Link to='/new' className="text-gray-400 text-[14px]">New</Link>
                </Navbar.Link>
                <Navbar.Link as='div'>
                    <Link to='/popular' className="text-gray-400">Popular</Link>
                </Navbar.Link>
                {path !== '/' && (
                    <Navbar.Link as='div'>
                        <Link to='/list'>List</Link>
                    </Navbar.Link>
                )}
                <Navbar.Link as='div'>
                    <Link to='/sports' className="text-gray-400">Sports</Link>
                </Navbar.Link>
                <Navbar.Link as='div'>
                    <Link to='/guide' className="text-gray-400">Guide</Link>
                </Navbar.Link>
            </Navbar.Collapse>

            <form className="flex gap-4 ml-6">
                <TextInput type="text" placeholder='Search Movie...' icon={IoSearch} className="w-[470px]" />
                <Button type="button" color='failure'>Sign In</Button>
            </form>

        </Navbar>
    )
}
