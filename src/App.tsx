import { QueryClientProvider } from '@tanstack/react-query'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CustomerList } from './pages'
import { queryClient } from './services/utils'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomerList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider >
  )
}

export default App
