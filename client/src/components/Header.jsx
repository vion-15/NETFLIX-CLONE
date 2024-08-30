import { Button, Dropdown, DropdownItem, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/netflix.png"
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
    const path = useLocation().pathname;

    return (
        <Navbar className={`border-b-4 h-[86px] pt-7 ${path !== '/' ? 'py-[10px] h-[65px]' : ''}`}>

            {/* Logo */}
            <Link to='/' className="flex">
                <img src={logoImage} alt="logo"
                    className={`w-28 ${path !== '/' ? 'h-5 w-[74px] ml-9' : ''}`} />
            </Link>

            {/* Menu Navigasi */}
            <Navbar.Collapse className={`ml-[262px] ${path !== '/' ? 'ml-8' : ''}`}>

                {path !== '/' && (
                    <Navbar.Link as='div' active={path === '/'}>
                        <Link to='/' className="text-gray-400 text-[14px]">Home</Link>
                    </Navbar.Link>
                )}

                <Navbar.Link as='div' active={path === '/new'}>
                    <Link
                        to='/new'
                        className={`text-gray-400 text-[14px] ${path == '/new' ? 'text-red-700 font-bold' : ''}`}>New</Link>
                </Navbar.Link>

                <Navbar.Link as='div' active={path === '/popular'}>
                    <Link
                        to='/popular'
                        className={`text-gray-400 text-[14px] ${path == '/popular' ? 'text-red-700 font-bold' : ''}`}>Popular</Link>
                </Navbar.Link>

                {path !== '/' && (
                    <Navbar.Link as='div' active={path === '/list'}>
                        <Link
                            to='/list'
                            className={`text-gray-400 text-[14px] ${path == '/list' ? 'text-red-700 font-bold' : ''}`}>List</Link>
                    </Navbar.Link>
                )}

                <Navbar.Link as='div' active={path === '/sports'}>
                    <Link
                        to='/sports'
                        className={`text-gray-400 text-[14px] ${path == '/sports' ? 'text-red-700 font-bold' : ''}`}>Sports</Link>
                </Navbar.Link>

                <Navbar.Link as='div' active={path === '/guide'}>
                    <Link
                        to='/guide'
                        className={`text-gray-400 text-[14px] ${path == '/guide' ? 'text-red-700 font-bold' : ''}`}>Guide</Link>
                </Navbar.Link>

            </Navbar.Collapse>

            {/* Search bar */}
            <form className="flex gap-4 ml-8">
                <TextInput type="text" placeholder='Search Movie...' icon={IoSearch}
                    className={`w-[470px] ${path !== '/' ? 'w-[520px]' : ''}`} />
                <Button type="button" color='failure'>Sign In</Button>
            </form>

            {/* DropDown button */}
            <div className="flex ml-4">
                {path !== '/' && (
                    <Dropdown
                        arrowIcon={false}
                        label={<AiOutlineMenu className="w-5 h-5 inline-block" />}
                        color='failure' outline>
                        <DropdownItem>About Us</DropdownItem>
                        <DropdownItem>API</DropdownItem>
                        <DropdownItem>FAQ</DropdownItem>
                        <DropdownItem>Terms of Use</DropdownItem>
                        <DropdownItem>Privacy Policy</DropdownItem>
                    </Dropdown>
                )}
            </div>

        </Navbar>
    )
}
