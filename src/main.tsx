console.log('🚀 main.tsx cargando...')
console.log('🔍 DOM root:', document.getElementById('root'))
console.log('📱 User Agent:', navigator.userAgent)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('📦 React importado:', React)
console.log('📦 ReactDOM importado:', ReactDOM)

const rootElement = document.getElementById('root')
console.log('🎯 Root element encontrado:', rootElement)

if (!rootElement) {
  console.error('❌ NO SE ENCONTRÓ EL ROOT ELEMENT')
} else {
  console.log('✅ Root element OK, creando React root...')
  
  try {
    const root = ReactDOM.createRoot(rootElement)
    console.log('✅ React root creado:', root)
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('✅ App renderizada')
  } catch (error) {
    console.error('❌ ERROR AL RENDERIZAR:', error)
  }
}