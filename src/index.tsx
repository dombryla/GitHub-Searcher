import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { FelaProvider, createRenderer } from './styling'

const renderer = createRenderer()

ReactDOM.render(
  <React.StrictMode>
    <FelaProvider renderer={renderer}>
      <App />
    </FelaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
