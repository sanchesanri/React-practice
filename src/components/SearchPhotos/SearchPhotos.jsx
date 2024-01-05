import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { requestPost } from '../services/api';
import { PixabayForm } from '../PixabayForm/PixabayForm';
import { PixabayInfo } from '../PixabayInfo/PIxabayInfo';

export class SearchPhotosPixabay extends Component {
  state = {
    pixabay: null,
    loading: false,
  };

  handleSearchFormSubmit = handleSearch => {
    this.setState({ pixabay: handleSearch });
  };

  componentDidMount() {
    // this.setState({ loading: true });
    // requestPost()
    //   .then(resp => {
    //     this.setState({ pixabay: resp.hits });
    //   })
    //   .finally(() => this.setState({ loading: false }));
  }

  render() {
    // console.log(this.state.pixabay);
    return (
      <div>
        {/* {this.state.loading && <h2>Loading...</h2>}
        {this.state.pixabay && (
          <img
            src={this.state.pixabay[0].previewURL}
            alt={this.state.pixabay[0].tags}
          />
        )} */}
        <PixabayForm onSubmit={this.handleSearchFormSubmit} />
        <PixabayInfo pixabayInfo={this.state.pixabay} />
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </div>
    );
  }
}
