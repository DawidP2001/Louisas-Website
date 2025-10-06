/**
 * App.tsx
 * Main application component that manages navigation between different pages.
 * author: Dawid Pionk
 * 
 * To Do: 
 * 1. Do content for welcome card
 * 2. Do content for featured pattern card
 * 3. Do content for contact me card
 * 4. Do content for instagram card
 * 5. Do content for the blog
 * 6. Do content for contact me
 */
import './App.css'
import HomePage from './pages/HomePage'
import React from 'react';
import Title from './components/Title';

function App() {
const [activeButton, setActiveButton] = React.useState('home');

  return (
    <main className='min-h-screen min-w-screen'>
      <div id="contents" className="max-w-4xl mx-auto p-4 bg-[#FEF7CD]">
        <Title 
            title="caillougarage" 
            subtitle="Discover my favorite knit and crochet patterns, tips, and projects!" 
            className="mb-6"
        />
        {activeButton === 'home' && <HomePage setActiveButton={setActiveButton} />}
        {activeButton === 'Knit' && <div>About Me Page</div>}
      </div>
    </main>
  );
}

export default App
