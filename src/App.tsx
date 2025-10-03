import { act } from 'react';
import './App.css'
import HomePage from './pages/HomePage'

function App() {
const [activeButton, setActiveButton] = React.useState('home');

  return (
    <>
       {activeButton === 'home' && <HomePage activeButton={activeButton} setActiveButton={setActiveButton} />}
       {activeButton === 'Knit' && <div>About Me Page</div>}
    </>
  )
}

export default App
