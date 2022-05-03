import { Provider } from 'react-redux'

import App from './App'
import { CssBaseline } from '@mui/material'
import { store } from './app/store'
import { createRoot } from 'react-dom/client'





createRoot(
  document.getElementById('root') as Element | DocumentFragment
).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
)
