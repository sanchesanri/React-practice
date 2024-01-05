import { Component } from 'react';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import { SearchBtn } from './PixabayForm.styled';
import 'react-toastify/dist/ReactToastify.css';

export class PixabayForm extends Component {
  state = {
    search: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.search.trim() === '') {
      return toast('🦄 your field is empty!', {
        theme: 'dark',
      });
    }

    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  handleChangeName = event => {
    this.setState({ search: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChangeName}
        />
        <SearchBtn type="submit" style={{ border: 1, padding: 8 }}>
          <FcSearch style={{ marginRight: 8 }} />
          Search
        </SearchBtn>
      </form>
    );
  }
}
