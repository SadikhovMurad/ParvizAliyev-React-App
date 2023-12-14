import './Static files/template.css';
import React, { useEffect, useState } from 'react';
import work1 from '../Images and videos/work1.jpeg';
import work2 from '../Images and videos/work2.jpeg';
import work3 from '../Images and videos/work3.jpeg';
import work4 from '../Images and videos/work4.jpeg';
import work5 from '../Images and videos/work5.jpeg';
import work6 from '../Images and videos/work6.jpeg';
import work7 from '../Images and videos/work7.jpeg';
import work8 from '../Images and videos/work8.jpeg';
import work9 from '../Images and videos/work9.jpeg';
import workVideo2Ogg from '../Images and videos/workvideo2.ogg';




export default function Gallery() {
    return (
        <>
            {/* GALLERY */}
            <div id="Gallery" className="mt-5 container container-fluid  d-none d-lg-block  text-white text-center">
                <div className="TextRow row-2 mt-5 mx-auto">
                    <h1 className='animate__animated animate__backInUp' style={{ userSelect: 'none' }}>gallery</h1>
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
                <div style={{ fontSize: "2em" }} className="myWork container container-fluid mt-5">
                    Bunlar mənim təhvil verdiyim bəzi işlərdir
                </div>
                <div className='container container-fluid mt-5 w-75 mx-auto text-center '>
                    <div className="d-flex justify-content-between  mt-3">
                        <img src={work1} width="400" height="400" className='img-fluid' />
                        <img src={work2} width="400" height="400" className='img-fluid' />
                    </div>
                    <div className='mt-5 mx-auto '>
                        <img src={work7} className='img-fluid w-100 h-100' />
                    </div>
                </div>
                <div className="myWork container container-fluid row mt-5 mx-auto text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto
                    sunt ullam nisi repudiandae. Voluptatum, cumque fugit dolores possimus,
                    libero consequuntur aperiam sint non porro sit veritatis nihil tenetur

                </div>
                <div className='container container-fluid mt-5 w-75 mx-auto'>
                    <div className="d-flex justify-content-between mx-auto   mt-3">
                        <img src={work3} width="400" height="400" className='img-fluid' />
                        <img src={work4} width="400" height="400" className='img-fluid' />
                    </div>
                    <div className='mt-5 mx-auto '>
                        <img src={work5} className='img-fluid w-100 h-100' />
                    </div>
                </div>
                <div className="myWork container container-fluid row mt-5 mx-auto text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto
                    sunt ullam nisi repudiandae. Voluptatum, cumque fugit dolores possimus,
                    libero consequuntur aperiam sint non porro sit veritatis nihil tenetur
                </div>
                <div className='container container-fluid mt-5 w-75 mx-auto'>
                    <div className="d-flex justify-content-between mx-auto   mt-3">
                        <img src={work6} width="400" height="400" className='img-fluid' />
                        <img src={work9} width="400" height="400" className='img-fluid' />
                    </div>
                    <div className='mt-5 mx-auto '>
                        <img src={work8} className='img-fluid w-100 h-100' />
                    </div>
                </div>
            </div>

            {/* Gallery page for tablet */}
            <div id='GalleryForTablet' className='mt-5 container container-fluid  text-white text-center  d-none d-sm-block d-lg-none'>
                <div className="TextRow row-2 mt-5 mx-auto">
                    <h1 className='animate__animated animate__backInUp' style={{ userSelect: 'none' }}>gallery</h1>
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
                    <div className='col ratio ratio-16x9 ms-3'>
                        <iframe src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702072803/parvizaliyev/workvideo2_1_ee46qw.mp4' height="300" />
                    </div>
                </div>

                <div style={{ fontSize: "1.7em" }} className="myWork container container-fluid mt-5">
                    Bunlar mənim təhvil verdiyim bəzi işlərdir
                </div>
                <div className='d-flex column-gap-2  container container-fluid w-100 mt-5'>
                    <div className='ratio ratio-4x3  ms-3'>
                        <img src={work1} />
                    </div>
                    <div className='ratio ratio-4x3 ms-3'>
                        <img src={work2} />
                    </div>
                    <div className='ratio ratio-4x3 ms-3'>
                        <img src={work3} />
                    </div>
                </div>

                <div className='d-flex column-gap-2  container container-fluid w-100 mt-5'>
                    <div className='ratio ratio-4x3  ms-3'>
                        <img src={work4} />
                    </div>
                    <div className='ratio ratio-4x3 ms-3'>
                        <img src={work5} />
                    </div>
                    <div className='ratio ratio-4x3 ms-3'>
                        <img src={work6} />
                    </div>
                </div>
                <div className='d-flex column-gap-2  container container-fluid w-100 mt-5'>
                    <div className='ratio ratio-4x3  ms-3'>
                        <img src={work7} />
                    </div>
                    <div className='ratio ratio-4x3 ms-3'>
                        <img src={work8} />
                    </div>
                    <div className='ratio ratio-4x3 ms-3'>
                        <img src={work9} />
                    </div>
                </div>

            </div>

            {/* Gallery page for Phone */}
            <div id='GalleryForPhone' className='mt-5 container container-fluid  text-white text-center d-block d-sm-none d-md-none'>
                <div className="TextRow row-2 mt-5 mx-auto">
                    <h1 className='animate__animated animate__backInUp' style={{ userSelect: 'none', fontSize: '3em' }}>gallery</h1>
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
                    <div className='col ratio ratio-16x9 ms-3'>
                        <iframe src='https://res.cloudinary.com/dkeckqqcp/video/upload/v1702072803/parvizaliyev/workvideo2_1_ee46qw.mp4' height="300" />
                    </div>
                </div>
                <div style={{ fontSize: "1.5em" }} className="myWork container container-fluid mt-5">
                    Bunlar mənim təhvil verdiyim bəzi işlərdir
                </div>
                <div className='d-flex column-gap-2  container container-fluid w-100 mt-5'>
                    <div className='ratio ratio-1x1  ms-3'>
                        <img src={work1} />
                    </div>
                    <div className='ratio ratio-1x1 ms-3'>
                        <img src={work2} />
                    </div>
                    <div className='ratio ratio-1x1 ms-3'>
                        <img src={work3} />
                    </div>
                </div>

                <div className='d-flex column-gap-2  container container-fluid w-100 mt-2'>
                    <div className='ratio ratio-1x1  ms-3'>
                        <img src={work4} />
                    </div>
                    <div className='ratio ratio-1x1 ms-3'>
                        <img src={work5} />
                    </div>
                    <div className='ratio ratio-1x1 ms-3'>
                        <img src={work6} />
                    </div>
                </div>
                <div className='d-flex column-gap-2  container container-fluid w-100 mt-2'>
                    <div className='ratio ratio-1x1  ms-3'>
                        <img src={work7} />
                    </div>
                    <div className='ratio ratio-1x1 ms-3'>
                        <img src={work8} />
                    </div>
                    <div className='ratio ratio-1x1 ms-3'>
                        <img src={work9} />
                    </div>
                </div>
            </div>

        </>
    )
}