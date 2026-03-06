import { BrowserRouter, Route, Routes } from 'react-router'
import { Index } from '@/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
