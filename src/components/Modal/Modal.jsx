import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModalStyle, Overlay } from "./Modal.styled";

const modalRoot = document.querySelector("#root-modal");

export default class Modal extends Component {
  componentDidMount() {
     window.addEventListener("keydown", this.closeByEsc);
  }
    componentWillUnmount() {
        window.removeEventListener('keydown',this.closeByEsc)
    }
    closeByEsc = (event) => {
         if (event.code !== "Escape") {
           return;
         }
         this.props.onClose();
    }
    handleBackDropClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }
  render() {
    return createPortal(
      <Overlay onClick={this.props.onClose}>
        <ModalStyle>
          <img src={this.props.urlImage} alt={this.props.tags} />
        </ModalStyle>
      </Overlay>,
      modalRoot
    );
  }
}
