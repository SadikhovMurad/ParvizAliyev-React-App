import { useEffect } from "react";
import GalleryLayout from "./GalleryLayout";
import { Link } from "react-router-dom";



export default function TattooGallery() {
    return (
        <>
            <div className="mt-5  container container-fluid  d-none d-lg-block  text-white text-center">
                <div className="TextRow row-2 mt-5 mx-auto">
                    <h1 style={{ userSelect: 'none' }}>gallery</h1>
                </div>
                <div className='w-75 d-flex justify-content-center mx-auto'>
                    <Link id='gb1' className='glbutton w-50' to="/GraffitiGallery">
                        Graffiti
                    </Link>
                    <Link id='gb2' className='glbutton glbuttonActive ms-3 w-50' to="/TattooGallery">
                        Tattoo
                    </Link>
                </div>
                <div className="myWork container container-fluid row mt-5 mx-auto text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto
                    sunt ullam nisi repudiandae. Voluptatum, cumque fugit dolores possimus,
                    libero consequuntur aperiam sint non porro sit veritatis nihil tenetur
                    beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    iusto sunt ullam nisi repudiandae. Voluptatum, cumque fugit dolores
                    possimus, libero consequuntur aperiam sint non porro sit veritatis nihil
                    tenetur beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="row mt-5 mb-3  w-100 mx-auto">
                    <div className='col ratio ratio-16x9'>
                        <iframe src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702072803/parvizaliyev/workvideo2_1_ee46qw.mp4' height="300" />

                    </div>
                    <div className='col ratio ratio-16x9 ms-3'>
                        <iframe src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702072803/parvizaliyev/workvideo2_1_ee46qw.mp4' height="300" />
                    </div>
                </div>
            </div>

        </>
    )
}