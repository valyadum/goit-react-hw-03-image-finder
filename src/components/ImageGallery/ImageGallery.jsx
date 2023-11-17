import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";


export default class ImageGallery extends Component{
    state = {
        find: null,
    }
    componentDidUpdate(prevProps,prevState) {
        if (prevProps.search !== this.props.search) {
            console.log('change');
            fetch(
                `https://pixabay.com/api/?q=${this.props.search}&page=1&key=39875248-e66a9da82da2239ad899e3cdb&image_type=photo&orientation=horizontal&per_page=12`
            ).then(response => response.json()).then(data=> this.setState({find:data.hits}));
        }
    }
    render() {
        return <ul className="gallery">{this.state.find && <ImageGalleryItem info={this.state.find} />}</ul>;
    }
}
//console.log(data.hits)