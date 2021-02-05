import React from 'react';
import style from './Content.module.css';

const Content = ()=> {
    return(
        <div className= {style.sectionContent}>
            <div>
                <img src= 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'  alt={null}/>
            </div>
            <div>
                img + info
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
            </div>
            <div>
                <div className= {style.item}>
                    post 1
                </div>
                <div className= {style.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Content;