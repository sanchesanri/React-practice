import { Component } from 'react';
import { requestAxios } from '../services/api';

export class PixabayInfo extends Component {
  state = {
    paramSearch: null,
    status: 'idle', //pending, resolved, rejected
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.pixabayInfo;
    const nextValue = this.props.pixabayInfo;

    if (prevValue !== nextValue) {
      this.setState({ paramSearch: null, status: 'pending' });
      requestAxios(1, this.props.pixabayInfo, 12)
        .then(({ hits }) =>
          this.setState({ paramSearch: hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { paramSearch, status } = this.state;

    if (status === 'pending') {
      return <p>Loading begin</p>;
    }

    if (status === 'rejected') {
      return <h2>Oll is BROKEN</h2>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <h1>PixabayInfo</h1>

          <ul>
            {paramSearch.map(item => {
              return (
                <li key={item.id}>
                  <h2>{item.tags} </h2>
                  <img src={item.previewURL} alt={item.tags} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}
