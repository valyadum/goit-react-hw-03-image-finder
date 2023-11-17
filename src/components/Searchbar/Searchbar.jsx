import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    search: '',
  };
  onSearchBtn = event => {
      event.preventDefault();
          if (this.state.search.trim() === '') {
            alert('Введи пошуковий запит!');
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
      <header className="searchbar">
        <form className="form" onSubmit={this.onSearchBtn}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
