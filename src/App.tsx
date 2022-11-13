import { Button } from 'antd'
import {BrowserRouter, Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

function App() {
  console.log('import.meta.env', import.meta.env.VITE_APP_NAME)
  return (
      <div className="App">
        <Button type="primary">boton</Button>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>  </Route>
      <Route path="about" element={<About/>}>  </Route>
      </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App
