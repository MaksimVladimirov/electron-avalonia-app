import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app/App'
import { BrowserRouter } from 'react-router-dom'
import TodoStoreProvider from './components/TodoStoreProvider/TodoStoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <TodoStoreProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        </TodoStoreProvider>
    </BrowserRouter>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
})
