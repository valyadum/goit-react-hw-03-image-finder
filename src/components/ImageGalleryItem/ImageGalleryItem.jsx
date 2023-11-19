import React, { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import Modal from "../Modal/Modal";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  showModalToggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
      return (
        <GalleryItem key={id}>
          <GalleryItemImage src={webformatURL} alt={tags} onClick={this.showModalToggle} />
          {this.state.showModal && <Modal onClose={this.showModalToggle} urlImage={largeImageURL} tags={tags} />}
        </GalleryItem>
      )
  }
}