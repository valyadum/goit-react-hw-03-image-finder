import { Component } from "react";
import { AppContainer } from "./App.styled";
import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../Searchbar/Searchbar";
import fetchApi from "../utils/imageAPI";
import Button from "../Button/Button";
import Loader from "components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export class App extends Component {
  state = {
    search: "",
    image: [],
    page: 1,
    loadMore: false,
    isLoad: false,
    
  };
 
  onClickSearchbar = (search) => {
    this.setState({ search: search, page: 1,isLoad:true});
  };
  componentDidUpdate(_, prevState) {
    const { search, page} = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      fetchApi(search, page).then(({ totalHits, hits }) => {
        if (totalHits === 0) {
             toast.error("По вашому запиту зображень не знайденно");
          // alert('По вашому запиту зображень не знайденно');
          return this.setState({
            image: [], loadMore: false, isLoad:false
          })
        }
        return this.setState({
          image: page === 1 ? hits : [...prevState.image, ...hits],
          loadMore: this.state.page < Math.ceil(totalHits / 12),
          isLoad:false
        });
      });
    }
  }

  handleLoadMore = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1,isLoad:true };
    });
  };
  render() {
    return (
      <AppContainer>
        <ToastContainer  />
        <Searchbar onSubmit={this.onClickSearchbar} />
        {(this.state.image && <ImageGallery find={this.state.image} />)}
        {this.state.loadMore && <Button onClick={this.handleLoadMore} />}
        {this.state.isLoad && <Loader />}
      </AppContainer>
    );
  }
}
