/**
 * App.tsx
 * Main application component that manages navigation between different pages.
 * author: Dawid Pionk
 * 
 * To Do: 
 * - Add more animations
 * - Change some of the writing
 * - Product Descriptions
 * - Mobile: when you click product it should scroll to top
 * - change pattern to projects
 * - leg warmers change name
 */
import './App.css'
import Title from './components/Title';
import Footer from './components/Footer';
import DesktopHomePage from './pages/Desktop/DesktopHomePage';
import MobileHomePage from './pages/Mobile/MobileHomePage';
import React from 'react';

function App() {
  const [activeButton, setActiveButton] = React.useState<string>('home');
  return (
    <main className='min-h-screen max-w-screen min-w-screen'>
      {/**bg-[#FEF7CD] */}
      <div id="contents" className="display:inline-flex sm:max-w-3xl mx-auto p-4 my-2 bg-white dashed relative" >
        <img src="./animations/yarn.png" alt="Pattern" className="text-black w-12 sm:w-28 absolute top-6 sm:top-4 right-4 spin-left rock-back-and-forth " />
        <img src="./animations/yarn.png" alt="Pattern" className="text-black w-12 sm:w-28 absolute top-6 sm:top-4 left-4 spin-right rock-back-and-forth " />
        <Title 
            title="caillougarage" 
            subtitle="Discover my Knit and crochet patterns and more!" 
            className="mb-1"
        />
        <DesktopHomePage className='hidden sm:grid' activeButton={activeButton} setActiveButton={setActiveButton}/>
        <MobileHomePage className="grid sm:hidden" activeButton={activeButton} setActiveButton={setActiveButton}/>
        <Footer />
      </div>
    </main>
  );
}

export default App
