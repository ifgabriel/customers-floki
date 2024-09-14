import { QueryClientProvider } from '@tanstack/react-query'

import { CustomerList } from './pages'
import { queryClient } from './services/utils'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomerList />
    </QueryClientProvider>
  )
}

export default App
