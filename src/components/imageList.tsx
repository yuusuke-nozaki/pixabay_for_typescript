import React from 'react';
import Masonry from 'react-masonry-component';

import '../styles/ImageListStyles.css';

const ImageList = (props: any) => {
    const images = props.images.map((image: any) => {
        return (
            <a
                href={image.pageURL}
                key={image.id}
                target='_blank'
                rel='noopener noreferrer'
                className='ui medium image' >
            <img src={image.webformatURL} alt={image.tags} />
            </a>
        );
    });
    return <Masonry className='image-list'>{images}</Masonry>
};

export default ImageList;