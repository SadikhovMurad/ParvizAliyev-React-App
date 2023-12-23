import './Static files/template.css'
import Gallery from './Gallery'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'






export default function Layout() {


    return (
        <>
            {/* Navbar */}
            <div className="d-none d-lg-block">
                <nav id="#myNavbar" className="navbar navbar-expand-lg w-75 mt-3 mx-auto bg-transparent">
                    <div className="container-fluid">
                        <NavLink to="/"
                            style={{
                                fontFamily: '"Inconsolata", monospace',
                                color: "white",
                                fontSize: "1.7em"
                            }}
                            className="navbar-brand me-2 "

                        >
                            PAINTER & ILLUSTRATOR
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ms-3 ">
                                    <NavLink to="/Gallery"
                                        className="text1"
                                        aria-current="page"
                                        href={Gallery}
                                    >
                                        GALLERY
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-3">
                                    <NavLink to="/About" className="text1" href="#scrollToAbout">
                                        ABOUT
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item  ms-3">
                                    <NavLink to="/About" className="text1" href="#scrollToAbout">
                                        SERVICES
                                    </NavLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            {/* Responsive navbar for tablet */}
            <div className="d-none d-sm-block d-lg-none">
                <nav className="navbar navbar-expand-xl bg-transparent">
                    <div className="container-fluid">
                        <NavLink to="/"
                            style={{
                                fontFamily: '"Inconsolata", monospace',
                                color: "white",
                                fontSize: "1.4em"
                            }}
                            className="responsiveNavbarBrand navbar-brand d-none d-sm-block d-xl-none me-2  w-75"

                        >
                            Painter &amp; Illustrator
                        </NavLink>
                        <a
                            style={{ fontSize: "3em" }}
                            className="toggleBtn btn navbar-toggler ms-auto"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#navbarNavOffCanvas"
                            aria-controls="navbarNavOffCanvas"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="bi bi-list text-white" />
                        </a>
                        <div
                            style={{ backgroundColor: "#161A30", transitionDuration: "0.3s" }}
                            className="offcanvas offcanvas-top ms-auto d-xl-none w-100 h-100"
                            tabIndex={-1}
                            id="navbarNavOffCanvas"
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            <div className="offcanvas-header">
                                <h1
                                    style={{
                                        fontFamily: '"Oswald", sans-serif',
                                        color: "white",
                                        fontWeight: 600,
                                        fontSize: "2em",
                                        textDecoration: "none"
                                    }}
                                    className="mt-2 me-auto text-start "
                                >
                                    PARVIZ ALIYEV
                                </h1>
                                <button
                                    type="button"
                                    style={{ color: "white", fontSize: "2em" }}
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <hr className="d-md-none" />
                            <div className="offcanvas-body d-flex justify-content-center align-items-center">
                                <ul className="navbar-nav d-flex justify-content-center mx-auto text-center h-100">
                                    <li className="nav-item">
                                        <NavLink data-bs-dismiss="offcanvas" id='link' to="/" className="textResponsiveNavbar text-white">
                                            HOME
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink data-bs-dismiss="offcanvas" id='link' to="/Gallery" className="textResponsiveNavbar text-white">
                                            GALLERY
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink data-bs-dismiss="offcanvas" id='link' to="/About" className="textResponsiveNavbar text-white">
                                            ABOUT
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Responsive navbar for very small device (Iphone 5/6/7/8 ) and another phones*/}
            <div className="d-block d-sm-none d-md-none">
                <div className="container-fluid">
                    <div className="d-flex">
                        <NavLink to="/"
                            style={{
                                fontFamily: '"Inconsolata", monospace',
                                color: "white",
                                fontSize: "1.2em"
                            }}
                            className="navbar-brand d-block d-sm-none me-2 mt-1  w-75"

                        >
                            Painter &amp; Illustrator
                        </NavLink>
                        <button
                            style={{ fontSize: "1.6em" }}
                            className="navbar-toggler ms-auto mt-1"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#navbarNavOffCanvas1"
                            aria-controls="navbarNavOffCanvas1"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="bi bi-list text-white" />
                        </button>
                    </div>
                    <div
                        style={{ backgroundColor: "#161A30", transitionDuration: "0.3s" }}
                        className="offcanvas offcanvas-top ms-auto d-xl-none w-100 h-100"
                        tabIndex={-1}
                        id="navbarNavOffCanvas1"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h1
                                style={{
                                    fontFamily: '"Oswald", sans-serif',
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: "2em",
                                    textDecoration: "none"
                                }}
                                className="mt-2 me-auto text-start "
                            >
                                PARVIZ ALIYEV
                            </h1>
                            <button
                                type="button"
                                style={{ color: "white", fontSize: "2em" }}
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <hr className="d-md-none" />
                        <div className="offcanvas-body d-flex justify-content-center align-items-center">
                            <ul className="navbar-nav d-flex justify-content-center my-auto text-center h-100">
                                <li className="nav-item">
                                    <NavLink data-bs-dismiss="offcanvas" id='link' to="/" className="textResponsiveNavbar text-white">
                                        HOME
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink data-bs-dismiss="offcanvas" id='link' to="/Gallery" className="textResponsiveNavbar text-white">
                                        GALLERY
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink data-bs-dismiss="offcanvas" id='link' to="/About" className="textResponsiveNavbar text-white">
                                        ABOUT
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}