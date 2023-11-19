import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export default function ImageGallery ({find}){
    return <Gallery >
        {
            find.map(({id, webformatURL, largeImageURL, tags}) => {
                return <ImageGalleryItem key= {id }id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />;
            })
        }
        {/* {find && <ImageGalleryItem info={find} />} */}
    </Gallery>;
    
}