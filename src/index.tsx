import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App'
import { FelaProvider, createRenderer } from './styling'

const renderer = createRenderer()
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FelaProvider renderer={renderer}>
        <App />
      </FelaProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

