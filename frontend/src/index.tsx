import ReactDOM from 'react-dom'
// import './index.css'
import { Provider } from 'react-redux'

import App from './App'
import { CssBaseline } from '@mui/material'
import { store } from './app/store'

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
)
