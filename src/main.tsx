import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@/common/styles/base.css';
import '@/common/styles/variables.css';
import { MobileBlockerLayout } from './common/layouts/mobile-blocker-layout/mobile-blocker-layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MobileBlockerLayout>
      <App />
    </MobileBlockerLayout>
  </React.StrictMode>,
)
