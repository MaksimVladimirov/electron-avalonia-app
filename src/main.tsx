import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { HashRouter } from 'react-router-dom'
import TodoStoreProvider from './components/TodoStoreProvider/TodoStoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <TodoStoreProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        </TodoStoreProvider>
    </HashRouter>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
})
