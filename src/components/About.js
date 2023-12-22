import { Link } from 'react-router-dom'
import aboutimage from '../Images and videos/aboutimage1.png'
import aboutimage2 from '../Images and videos/aboutimage2-removebg-preview.png'



export default function About() {

    return (
        <>
            {/* About */}
            <div className="container container-fluid d-none d-lg-block">
                <div className="TextRow row-2 mt-5 mx-auto">
                    <h1 className='animate__animated animate__backInUp' style={{ userSelect: 'none' }}>haqqımda</h1>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 bg-transparent mt-5'>
                    <div style={{ borderBottom: "2px white" }} className='col d-flex justify-content-center align-content-start '>
                        <img src={aboutimage} style={{ height: "80vh" }} />
                    </div>
                    <div style={{ borderBottom: "2px white" }} className='col bg-black d-flex justify-content-center align-items-center '>
                        <div className='text-start w-75 h-25'>

                            <h1 style={{
                                fontSize: "4em",
                                fontFamily: "'Oswald', sans-serif",
                                fontWeight: "600",
                                color: "#3081D0",
                                userSelect: "none"
                            }} className='mb-auto'>Salam. Mən</h1>
                            <h2 style={{
                                fontSize: "3em",
                                fontFamily: "'Oswald', sans-serif",
                                fontWeight: "600",
                                color: "white",
                                userSelect: "none",
                                letterSpacing: "2px"
                            }} className='text-center'>
                                PƏRVIZ ƏLIYEV
                            </h2>
                            <div className="myWork text-end">
                                RƏSSAM & TATTOO USTASI
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 '>
                    <div className='col bg-black d-flex justify-content-center align-items-start mt-4'>
                        <div className='text-start w-75 h-25'>

                            <h1 style={{
                                fontSize: "4em",
                                fontFamily: "'Oswald', sans-serif",
                                fontWeight: "600",
                                color: "#3081D0",
                                userSelect: "none"
                            }} className='mt-5 text-start'>Hekayəm</h1>
                            {/* <h2 style={{
                                fontSize: "3em",
                                fontFamily: "'Oswald', sans-serif",
                                fontWeight: "600",
                                color: "white",
                                userSelect: "none",
                                letterSpacing: "2px"
                            }}>
                                PARVIZ ALIYEV
                            </h2> */}
                            <div className="myWork text-start mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                                minima quae expedita, officiis nam molestias neque officia tenetur
                                doloremque reprehenderit? Autem delectus natus cumque dolores
                                ratione obcaecati officia dignissimos magni.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                                minima quae expedita, officiis nam molestias neque officia tenetur
                                doloremque reprehenderit? Autem delectus natus cumque dolores
                                ratione obcaecati officia dignissimos magni.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                                minima quae expedita, officiis nam molestias neque officia tenetur
                                doloremque reprehenderit? Autem delectus natus cumque dolores
                                ratione obcaecati officia dignissimos magni.
                            </div>
                        </div>
                    </div>
                    <div style={{ borderBottom: "2px white" }} className='col d-flex justify-content-center align-items-start mt-4'>
                        <img src={aboutimage2} style={{ height: "80vh" }} />
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100'>
                    <div className='col mt-4 d-flex justify-content-center align-items-start'>
                        <div className='ratio ratio-1x1'>
                            <video controls>
                                <source src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702696594/parvizaliyev/aboutvideo_resized_akliam.mp4' type='video/mp4'></source>
                                {/* <source src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702072803/parvizaliyev/workvideo2_1_ee46qw.mp4'></source> */}
                            </video>
                        </div>
                    </div>
                    <div className='col container  mt-4 text-center'>
                        <h1 style={{
                            fontSize: "4em",
                            fontFamily: "'Oswald', sans-serif",
                            fontWeight: "600",
                            color: "#3081D0",
                            userSelect: "none"
                        }} className='mt-2'>Xidmətlərim</h1>

                        <div className="myWork mt-4 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                            minima quae expedita, officiis nam molestias neque officia tenetur
                            doloremque reprehenderit? Autem delectus natus cumque dolores
                            ratione obcaecati officia dignissimos magni.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                            minima quae expedita, officiis nam molestias neque officia tenetur
                            doloremque reprehenderit? Autem delectus natus cumque dolores
                            ratione obcaecati officia dignissimos magni.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                            minima quae expedita, officiis nam molestias neque officia tenetur
                            doloremque reprehenderit? Autem delectus natus cumque dolores
                            ratione obcaecati officia dignissimos magni.
                        </div>
                        <Link to='/Gallery'>
                            <button type='button' className='button mt-4'>
                                <span></span>
                                Qaleriyam
                            </button>
                        </Link>
                    </div>
                </div>
                <hr style={{color:"transparent"}}  className='mt-4'/>
            </div>

            {/* About page for Tablet */}
            <div className='container container-fluid d-flex justify-content-center d-none d-sm-block d-lg-none'>
                <div className="TextRow row-2 mt-5 mx-auto">
                    <h1 style={{ userSelect: 'none' }}>haqqımda</h1>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5'>
                    <img src={aboutimage} style={{ height: "80vh" }} />
                    <h1 style={{
                        fontSize: "3em",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "600",
                        userSelect: "none",
                        letterSpacing: "1px"
                    }} className='myWork text-white text-center mt-3'>
                        Salam! Mən Pərviz Əliyev
                    </h1>
                    <div style={{ fontSize: "2em", color: "#3081D0", }} className="myWork text-center">
                        RƏSSAM & TATTOO USTASI
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5'>

                    <h1 style={{
                        fontSize: "4em",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "600",
                        color: "#3081D0",
                        userSelect: "none"
                    }} className='mt-5 text-center'>Hekayəm</h1>
                    <div style={{ fontSize: "1.4em" }} className="myWork text-center mt-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5'>
                    <div className='ratio ratio-1x1'>
                        <video controls>
                            <source src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702696594/parvizaliyev/aboutvideo_resized_akliam.mp4' type='video/mp4'></source>
                            {/* <source src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702072803/parvizaliyev/workvideo2_1_ee46qw.mp4'></source> */}
                        </video>
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5'>
                    <h1 style={{
                        fontSize: "4em",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "600",
                        color: "#3081D0",
                        userSelect: "none"
                    }} className='mt-5'>Xidmətlərim</h1>

                    <div style={{ fontSize: "1.4em" }} className="myWork mt-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                    </div>
                    <Link to='/Gallery'>
                        <button style={{ padding: "5px" }} type='button' className='button mt-4'>

                            Qaleriyam
                        </button>
                    </Link>
                </div>
                <hr className='text-white mt-5 ' />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    className="mt-3"
                >
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://instagram.com/pako.aliyev"
                        // target="_blank"
                        className="h-50 text-white"
                    >
                        <i className="bi bi-instagram" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://tiktok.com"
                        // target="_blank"
                        className="h-50 text-white ms-4 "
                    >
                        <i className="bi bi-tiktok" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://facebook.com"
                        // target="_blank"
                        className="h-50 text-white ms-4 "
                    >
                        <i className="bi bi-facebook" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://twitter.com"
                        // target="_blank"
                        className="h-50 text-white ms-4  "
                    >
                        <i className="bi bi-twitter" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://wa.me/+994775966907"
                        // target="_blank"
                        className="h-50 text-white ms-4  "
                    >
                        <i className="bi bi-whatsapp" />
                    </a>
                </div>
                <hr style={{color:"transparent"}} />
            </div>

            {/* About page for Phone */}
            <div className='container container-fluid d-block d-sm-none d-md-none'>
                <div className="TextRow row-2 mt-5 mx-auto">
                    <h1 style={{ userSelect: 'none', fontSize: "3.4em" }}>haqqımda</h1>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5'>

                    <img src={aboutimage} className='w-100 h-75 mx-auto ' />

                    <h1 style={{
                        fontSize: "1.5em",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "600",
                        userSelect: "none",
                        letterSpacing: "1px"
                    }} className='myWork text-white text-center mt-3'>
                        Salam! Mən Pərviz Əliyev
                    </h1>
                    <div style={{ fontSize: "1em", color: "#3081D0", }} className="myWork text-center">
                        RƏSSAM & TATTOO USTASI
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5'>
                    <h1 style={{
                        fontSize: "2em",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "600",
                        color: "#3081D0",
                        userSelect: "none"
                    }} className='mt-3 text-center'>Hekayəm</h1>
                    <div style={{ fontSize: "1em" }} className="myWork text-center mt-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5'>
                    <div className='ratio ratio-1x1'>
                        <video controls>
                            <source src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702696594/parvizaliyev/aboutvideo_resized_akliam.mp4' type='video/mp4'></source>
                            {/* <source src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702072803/parvizaliyev/workvideo2_1_ee46qw.mp4'></source> */}
                        </video>
                    </div>
                </div>
                <hr className='text-white mt-5 ' />
                <div className='row w-100 mx-auto text-center  bg-transparent mt-5 mb-4 '>
                    <h1 style={{
                        fontSize: "2em",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "600",
                        color: "#3081D0",
                        userSelect: "none"
                    }} className='mt-3'>Xidmətlərim</h1>

                    <div style={{ fontSize: "1em" }} className="myWork mt-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        minima quae expedita, officiis nam molestias neque officia tenetur
                        doloremque reprehenderit? Autem delectus natus cumque dolores
                        ratione obcaecati officia dignissimos magni.
                    </div>
                    <Link to='/Gallery'>
                        <button style={{ padding: "5px" }} type='button' className='button mt-4'>

                            Qaleriyam
                        </button>
                    </Link>
                </div>
                <hr className='text-white mt-5 ' />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    className="mt-3"
                >
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://instagram.com/pako.aliyev"
                        // target="_blank"
                        className="h-50 text-white"
                    >
                        <i className="bi bi-instagram" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://tiktok.com"
                        // target="_blank"
                        className="h-50 text-white ms-4 "
                    >
                        <i className="bi bi-tiktok" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://facebook.com"
                        // target="_blank"
                        className="h-50 text-white ms-4 "
                    >
                        <i className="bi bi-facebook" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://twitter.com"
                        // target="_blank"
                        className="h-50 text-white ms-4  "
                    >
                        <i className="bi bi-twitter" />
                    </a>
                    <a
                        style={{ cursor: "pointer" }}
                        href="https://wa.me/+994775966907"
                        // target="_blank"
                        className="h-50 text-white ms-4  "
                    >
                        <i className="bi bi-whatsapp" />
                    </a>
                </div>
                <hr style={{color:"transparent"}} />
            </div>
        </>
    )
}