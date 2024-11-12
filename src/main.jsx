import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RedirectContextProvider from './context/redirect.context.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RedirectContextProvider>
      <App />
    </RedirectContextProvider>
  </QueryClientProvider>,
)
