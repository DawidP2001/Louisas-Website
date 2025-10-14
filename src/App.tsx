/**
 * App.tsx
 * Main application component that manages navigation between different pages.
 * author: Dawid Pionk
 * 
 * To Do: 
 * - About me Page
 * - Add functionality to product filters
 * - Add products
 * - Add fiverr contact link
 */
import './App.css'
import HomePage from './pages/HomePage'
import Title from './components/Title';
import Footer from './components/Footer';

function App() {
  return (
    <main className='min-h-screen min-w-screen'>
      {/**bg-[#FEF7CD] */}
      <div id="contents" className="max-w-4xl mx-auto p-4 my-2 bg-white dashed relative">
        <img src="./animations/yarn.png" alt="Pattern" className="text-black w-32 absolute top-4 right-4 spin-left" />
        <img src="./animations/yarn.png" alt="Pattern" className="text-black w-32 absolute top-4 left-4 spin-right" />
        <Title 
            title="caillougarage" 
            subtitle="Discover my favorite knit and crochet patterns, tips, and projects!" 
            className="mb-1"
        />
        <HomePage />
        <Footer />
      </div>
    </main>
  );
}

export default App
