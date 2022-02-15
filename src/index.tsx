import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,
  document.getElementById('root')
);
