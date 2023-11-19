import { Component } from 'react';
import { SearchbarStyle, SearchForm, SearchFormButton,  SearchFormInput } from './Searchbar.styled';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";

export default class Searchbar extends Component {
  state = {
    search: '',
  };
  onSearchBtn = event => {
      event.preventDefault();
          if (this.state.search.trim() === '') {
            toast.error("Введи пошуковий запит!");
            return;
          }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  handleChange = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    return (
      <SearchbarStyle>
        <ToastContainer/>
        <SearchForm onSubmit={this.onSearchBtn}>
          <SearchFormButton type="submit"><FaSearch/>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.search}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}
