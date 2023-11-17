import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

export class App extends Component{
  state = {
    search:''
  }

  onClickSearchbar = (search) => {
    this.setState({ search });
   
  }

  render() {
     return (
       <div>
         <Searchbar onSubmit={this.onClickSearchbar} />
         <ImageGallery search={this.state.search} />
       </div>
     );
  }
}

// obg ={
//   id - унікальний ідентифікатор
//   webformatURL - посилання на маленьке зображення для списку карток
//   largeImageURL - посилання на велике зображення для модального вікна
// }
//39875248-e66a9da82da2239ad899e3cdb  -- мій ключ
//https://pixabay.com/api/?q=cat&page=1&key=39875248-e66a9da82da2239ad899e3cdb&image_type=photo&orientation=horizontal&per_page=12 --http запит
//https://pixabay.com/api/?key=39875248-e66a9da82da2239ad899e3cdb&q=yellow+flowers&image_type=photo