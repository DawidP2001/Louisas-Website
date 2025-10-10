/**
 * App.tsx
 * Main application component that manages navigation between different pages.
 * author: Dawid Pionk
 * 
 * To Do: 
 * 3. Do content for contact me card
 * - Do Pattern card
 */
import './App.css'
import HomePage from './pages/HomePage'
import React from 'react';
import Title from './components/Title';
import AboutMePage from './pages/AboutMePage';
import KnitPage from './pages/KnitPage';
import CrochetPage from './pages/CrochetPage';
import KnitCrochetPage from './pages/KnitCrochetPage';

function App() {
const [activeButton, setActiveButton] = React.useState('home');

  return (
    <main className='min-h-screen min-w-screen'>
      <div id="contents" className="max-w-4xl mx-auto p-4 bg-[#FEF7CD] my-2 dashed">
        <Title 
            title="caillougarage" 
            subtitle="Discover my favorite knit and crochet patterns, tips, and projects!" 
            className="mb-1"
        />
        {activeButton === 'home' && <HomePage activeButton={activeButton} setActiveButton={setActiveButton} />}
        {activeButton === 'about' && <AboutMePage activeButton={activeButton} setActiveButton={setActiveButton} />}
        {activeButton === 'knit' && <KnitPage activeButton={activeButton} setActiveButton={setActiveButton} />}
        {activeButton === 'crochet' && <CrochetPage activeButton={activeButton} setActiveButton={setActiveButton} />}
        {activeButton === 'knit-crochet' && <KnitCrochetPage activeButton={activeButton} setActiveButton={setActiveButton} />}
      </div>
    </main>
  );
}

export default App
