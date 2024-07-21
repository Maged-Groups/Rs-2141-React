import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import App from './App'

// Redux
import store from './redux/store'
import { Provider } from 'react-redux'

// CSS
import './index.css'

// react-toastify
import 'react-toastify/dist/ReactToastify.css';

const main = document.querySelector('div');

const root = createRoot(main)


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
