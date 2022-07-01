import React from 'react'
import { createRoot } from 'react-dom/client';

import { App } from './App'
import { FelaProvider, createRenderer } from './styling'

const renderer = createRenderer()
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <FelaProvider renderer={renderer}>
      <App />
    </FelaProvider>
  </React.StrictMode>,
)

