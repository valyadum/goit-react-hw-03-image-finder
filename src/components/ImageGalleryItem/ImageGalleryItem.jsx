import React from 'react';

const ImageGalleryItem = ({ info }) => {
  return info.map(({ id, webformatURL, largeImageURL,tags }) => {
    return (
      <li className="gallery-item" key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  });
};

export default ImageGalleryItem;
