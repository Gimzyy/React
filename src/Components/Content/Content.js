import React from 'react';
import style from './Content.module.css';
import MyPosts from "./MyPosts/myPosts";

const Content = ()=> {
    return(
        <div className= {style.sectionContent}>
            <div>
                <img src= 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'  alt='avatar'/>
            </div>
            <div>
                img + info
            </div>
            <MyPosts/>
        </div>
    );
};

export default Content;