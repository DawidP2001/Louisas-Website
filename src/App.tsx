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

function App() {
  return (
    <main className='min-h-screen min-w-screen'>
      <div id="contents" className="max-w-4xl mx-auto p-4 bg-[#FEF7CD] my-2 dashed">
        <Title 
            title="caillougarage" 
            subtitle="Discover my favorite knit and crochet patterns, tips, and projects!" 
            className="mb-1"
        />
        <HomePage/>
      </div>
    </main>
  );
}

export default App
