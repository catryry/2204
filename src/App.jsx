import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { routes } from './routes'
import Home from './pages/Home';
import Letters from './pages/Letters';
import Music from './pages/Music';
import Reminders from './pages/Reminders';



function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={routes.letters} element={<Letters/>}/>
        <Route path={routes.music} element={<Music/>}/>
        <Route path={routes.reminders} element={<Reminders/>}/>
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
