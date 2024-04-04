import { Route, Routes } from 'react-router'
import './App.css'
import { DashboardPage } from './pages/DashboardPage'
import { PageNotFoundPage } from './pages/PageNotFoundPage'
import { HomePage } from './pages/HomePage'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/*' element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
