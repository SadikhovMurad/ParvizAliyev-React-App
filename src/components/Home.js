import React, { useRef } from "react"
import personalimage from '../Images and videos/Personalimage.jpeg'


export default function Home() {
    return (
        <>
            {/* Body Page */}
            <div className="container animate__animated animate__backInLeft mt-4  d-none d-lg-block">
                <div className="row">
                    <div className="col">
                        <div className="waviy text-center mt-5">
                            <span>P</span>
                            <span>A</span>
                            <span>R</span>
                            <span>V</span>
                            <span>I</span>
                            <span>Z</span>
                            <span className="ms-2">A</span>
                            <span>L</span>
                            <span>I</span>
                            <span>Y</span>
                            <span>E</span>
                            <span>V</span>
                        </div>
                        {/* <h1 style="font-family: 'Oswald', sans-serif;
          color: white;
          font-weight: 600;
          font-size: 3em;
          text-decoration: none;color: white;" class="mt-5  mx-auto text-center ">PARVIZ ALIYEV</h1> */}
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "#3081D0",
                                fontWeight: 600,
                                fontSize: "1.5em",
                                textDecoration: "none"
                            }}
                            className="mt-3 mx-auto text-center "
                        >
                            ART DIRECTOR &amp; TATTOO MASTER
                        </p>
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "whitesmoke",
                                fontWeight: 450,
                                fontSize: "1em",
                                textDecoration: "none"
                            }}
                            className="mt-3 mx-auto text-center "
                        >
                            pakoaliev@gmail.com
                        </p>
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "whitesmoke",
                                fontWeight: 450,
                                fontSize: "1em",
                                textDecoration: "none"
                            }}
                            className="mt-3 mx-auto text-center "
                        >
                            (+994) 77 777-77-77
                        </p>
                        <div className="myWork text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                            minima quae expedita, officiis nam molestias neque officia tenetur
                            doloremque reprehenderit? Autem delectus natus cumque dolores
                            ratione obcaecati officia dignissimos magni.
                        </div>
                        {/* <p style="font-family: 'Oswald', sans-serif;
          color: whitesmoke;
          font-weight: 600;
          font-size: 1em;
          text-decoration: none;" class="mt-3 mx-auto text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima quae expedita, officiis nam molestias neque officia tenetur doloremque reprehenderit? Autem delectus natus cumque dolores ratione obcaecati officia dignissimos magni.
          </p> */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            className="mt-3"
                        >
                            <a
                                href="https://instagram.com/pako.aliyev"
                                // // target="_blank"
                                className="SosilMediaIcon h-50"
                            >
                                <i className="bi bi-instagram" />
                            </a>
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                className="SosilMediaIcon h-50 ms-4 "
                            >
                                <i className="bi bi-tiktok" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="SosilMediaIcon h-50 ms-4 "
                            >
                                <i className="bi bi-facebook" />
                            </a>
                            <a
                                href="https://twitter.com"
                                // // target="_blank"
                                className="SosilMediaIcon h-50 ms-4  "
                            >
                                <i className="bi bi-twitter" />
                            </a>
                            <a
                                href="https://wa.me/+994775966907"
                                // // target="_blank"
                                className="SosilMediaIcon h-50 ms-4  "
                            >
                                <i className="bi bi-whatsapp" />
                            </a>
                        </div>
                    </div>
                    <div className="col mt-4 ms-5 ">
                        <img
                            id="personalImage"
                            src={personalimage}
                            width={400}
                            height={520}
                        />
                    </div>
                </div>
            </div>
            {/* Responsive Body for tablet */}
            <div className="container  animate__animated animate__backInLeft d-none d-sm-block d-lg-none">
                <div className="col">
                    <div className="row">
                        <div className="waviyTablet text-center mt-2">
                            <span>P</span>
                            <span>A</span>
                            <span>R</span>
                            <span>V</span>
                            <span>I</span>
                            <span>Z</span>
                            <span className="ms-2">A</span>
                            <span>L</span>
                            <span>I</span>
                            <span>Y</span>
                            <span>E</span>
                            <span>V</span>
                        </div>
                        {/* <h1 style="font-family: 'Oswald', sans-serif;
          color: white;
          font-weight: 600;
          font-size: 3em;
          text-decoration: none;color: white;" class="mt-5  mx-auto text-center ">PARVIZ ALIYEV</h1> */}
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "#3081D0",
                                fontWeight: 600,
                                fontSize: "1.5em",
                                textDecoration: "none"
                            }}
                            className="mt-2  mx-auto text-center "
                        >
                            ART DIRECTOR &amp; TATTOO MASTER
                        </p>
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "whitesmoke",
                                fontWeight: 450,
                                fontSize: "1em",
                                textDecoration: "none"
                            }}
                            className="mt-2  mx-auto text-center "
                        >
                            pakoaliev@gmail.com
                        </p>
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "whitesmoke",
                                fontWeight: 450,
                                fontSize: "1em",
                                textDecoration: "none"
                            }}
                            className="mt-1 mx-auto text-center "
                        >
                            (+994) 77 777-77-77
                        </p>
                    </div>
                    <div className="row mx-auto mt-2">
                        <img
                            id="personalImage"
                            className="w-75 h-75 mx-auto"
                            src={personalimage}
                            width={300}
                            height={450}
                        />
                    </div>
                    <div className="row mx-auto mt-5">
                        <div className="myWork text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                            minima quae expedita, officiis nam molestias neque officia tenetur
                            doloremque reprehenderit? Autem delectus natus cumque dolores
                            ratione obcaecati officia dignissimos magni.
                        </div>
                        {/* <p style="font-family: 'Oswald', sans-serif;
          color: whitesmoke;
          font-weight: 600;
          font-size: 1em;
          text-decoration: none;" class="mt-3 mx-auto text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima quae expedita, officiis nam molestias neque officia tenetur doloremque reprehenderit? Autem delectus natus cumque dolores ratione obcaecati officia dignissimos magni.
          </p> */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            className="mt-3 mb-5"
                        >
                            <a
                                style={{ cursor: "pointer" }}
                                href="https://instagram.com/pako.aliyev"
                                // // target="_blank"
                                className="h-50 text-white"
                            >
                                <i className="bi bi-instagram" />
                            </a>
                            <a
                                style={{ cursor: "pointer" }}
                                href="https://tiktok.com"
                                // // target="_blank"
                                className="h-50 text-white ms-4 "
                            >
                                <i className="bi bi-tiktok" />
                            </a>
                            <a
                                style={{ cursor: "pointer" }}
                                href="https://facebook.com"
                                // // target="_blank"
                                className="h-50 text-white ms-4 "
                            >
                                <i className="bi bi-facebook" />
                            </a>
                            <a
                                style={{ cursor: "pointer" }}
                                href="https://twitter.com"
                                // // target="_blank"
                                className="h-50 text-white ms-4  "
                            >
                                <i className="bi bi-twitter" />
                            </a>
                            <a
                                style={{ cursor: "pointer" }}
                                href="https://wa.me/+994775966907"
                                // // target="_blank"
                                className="h-50 text-white ms-4  "
                            >
                                <i className="bi bi-whatsapp" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Responsive Body for phones */}
            <div className="container  animate__animated animate__backInLeft d-block d-sm-none d-md-none">
                <div className="col">
                    <div className="row">
                        <div className="waviy text-center mt-2">
                            <span>P</span>
                            <span>A</span>
                            <span>R</span>
                            <span>V</span>
                            <span>I</span>
                            <span>Z</span>
                            <span className="ms-2">A</span>
                            <span>L</span>
                            <span>I</span>
                            <span>Y</span>
                            <span>E</span>
                            <span>V</span>
                        </div>
                        {/* <h1 style="font-family: 'Oswald', sans-serif;
          color: white;
          font-weight: 600;
          font-size: 3em;
          text-decoration: none;color: white;" class="mt-5  mx-auto text-center ">PARVIZ ALIYEV</h1> */}
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "#3081D0",
                                fontWeight: 600,
                                fontSize: "1.5em",
                                textDecoration: "none"
                            }}
                            className="mt-2  mx-auto text-center "
                        >
                            ART DIRECTOR &amp; TATTOO MASTER
                        </p>
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "whitesmoke",
                                fontWeight: 450,
                                fontSize: "1em",
                                textDecoration: "none"
                            }}
                            className="mt-2  mx-auto text-center "
                        >
                            pakoaliev@gmail.com
                        </p>
                        <p
                            style={{
                                fontFamily: '"Oswald", sans-serif',
                                color: "whitesmoke",
                                fontWeight: 450,
                                fontSize: "1em",
                                textDecoration: "none"
                            }}
                            className="mt-1 mx-auto text-center "
                        >
                            (+994) 77 777-77-77
                        </p>
                    </div>
                    <div className="row mx-auto mt-2">
                        <img
                            id="personalImage"
                            className="w-75 h-75 mx-auto"
                            src={personalimage}
                            width={300}
                            height={450}
                        />
                    </div>
                    <div className="row mx-auto mt-5">
                        <div className="myWork text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                            minima quae expedita, officiis nam molestias neque officia tenetur
                            doloremque reprehenderit? Autem delectus natus cumque dolores
                            ratione obcaecati officia dignissimos magni.
                        </div>
                        {/* <p style="font-family: 'Oswald', sans-serif;
          color: whitesmoke;
          font-weight: 600;
          font-size: 1em;
          text-decoration: none;" class="mt-3 mx-auto text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima quae expedita, officiis nam molestias neque officia tenetur doloremque reprehenderit? Autem delectus natus cumque dolores ratione obcaecati officia dignissimos magni.
          </p> */}
                        <hr className='text-white mt-4 ' />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            className="mb-3"
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
                        <hr style={{ color: "transparent" }} />
                    </div>
                </div>
            </div>

        </>
    )

}