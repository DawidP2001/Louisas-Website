import React from 'react';
import Card from '../components/Card';
import NavigationCard from '../components/NavigationCard';
import KnitPage from './KnitPage';
import KnitCrochetPage from './KnitCrochetPage';
import CrochetPage from './CrochetPage';
import AboutMePage from './AboutMePage';
import ExpandedProductCard from '../components/ExpandedProductCard';
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
    const [activeButton, setActiveButton] = React.useState('home');
    const [selected, setSelected] = React.useState<number | null>(null);
    const [expandedCardActive, setExpandedCardActive] = React.useState(false);
    
    // Function to handle setting the expanded card active state
    const handleSetExpandedCardActive = (active: boolean) => {
        if (!expandedCardActive && active) {
          //  const instaCard = document.querySelector('.instagram-card');
        }
        setExpandedCardActive(active);
    };

    React.useEffect(() => {
        setSelected(null);
        setExpandedCardActive(false);
        
    }, [activeButton]);
    
    const expanded = selected ? (
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        >
            <ExpandedProductCard id={selected} />
        </motion.div>
) : null;
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 mt-4'>
                <div className='p-1'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        <NavigationCard activeButton={activeButton} setActiveButton={setActiveButton} />
                    </motion.div>
                    {expanded}
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            y: 0 // Slide down when expanded card is active
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                            type: "spring", 
                            stiffness: 300, 
                            damping: 25,
                            y: { duration: 2, ease: "easeInOut" } // Smooth slide animation
                        }}
                        className=' instagram-card'
                    >
                    <a href='https://www.instagram.com/caillougarage/' target="_blank" rel="noopener noreferrer">
                        <Card>
                            <div className="text-center flex flex-row items-center justify-center">
                                <img src='icons/instagram.png' alt="Instagram Icon" className="mx-auto mb-2 mt-[-6px] w-8 md:w-12" />
                                <h3 className="md:text-lg text-xs text-center mb-4 press-start-2p-regular" style={{ color: 'black' }}>
                                    Instagram
                                </h3>
                            </div>
                            <div className="slider">
                                <div className="slide-track">
                                    <img src="./slideshow/1.PNG" alt="Instagram 1" className="mx-auto mb-2" />
                                    <img src="./slideshow/2.PNG" alt="Instagram 2" className="mx-auto mb-2" />
                                    <img src="./slideshow/3.PNG" alt="Instagram 3" className="mx-auto mb-2" />
                                    <img src="./slideshow/4.PNG" alt="Instagram 4" className="mx-auto mb-2" />
                                    <img src="./slideshow/5.PNG" alt="Instagram 5" className="mx-auto mb-2" />
                                    <img src="./slideshow/6.PNG" alt="Instagram 6" className="mx-auto mb-2" />
                                    <img src="./slideshow/7.PNG" alt="Instagram 7" className="mx-auto mb-2" />
                                    <img src="./slideshow/8.PNG" alt="Instagram 8" className="mx-auto mb-2" />
                                    <img src="./slideshow/1.PNG" alt="Instagram 1" />
                                    <img src="./slideshow/2.PNG" alt="Instagram 2" />
                                    <img src="./slideshow/3.PNG" alt="Instagram 3" />
                                    <img src="./slideshow/4.PNG" alt="Instagram 4" />
                                    <img src="./slideshow/5.PNG" alt="Instagram 5" />
                                    <img src="./slideshow/6.PNG" alt="Instagram 6" />
                                    <img src="./slideshow/7.PNG" alt="Instagram 7" />
                                    <img src="./slideshow/8.PNG" alt="Instagram 8" />
                                </div>
                            </div>
                            <p className="">Follow me on Instagram for the latest updates and behind-the-scenes looks at my crafting projects!</p>
                        </Card>
                    </a>
                    </motion.div>
                </div>
                {activeButton === 'home' && (
                    <motion.div
                            className='p-1 rounded md:col-span-2 grid md:grid-cols-2 gap-1'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                        <div className='p-1'>
                            <Card title="Welcome">
                                <div className="wave text-center mx-auto"></div>
                                <p className="">
                                    Hello! I'm Louisa, and welcome to my caillougarage website. Here you'll find a collection of my favorite knit and crochet patterns, 
                                    tips, and projects. I hope you enjoy exploring and find inspiration for your own crafting journey!
                                </p>
                            </Card>
                            <Card title="Updates">
                                <img src="h2.PNG" alt="Yarn" className="mx-auto mb-2 rounded-4xl" />
                                <p className="">
                                    I am currently working on a pattern test by the talented designer Twin_Made. You can check out their work on Instagram. Stay tuned for more updates and new patterns coming soon!
                                </p>
                            </Card>
                        </div>
                        <div className='p-1'>
                            <Card title="Featured Pattern">
                                <p className='text-center text-black mb-5 text-lg' style={{marginTop: '-1rem'}}>Wales Crochet Pattern</p>
                                <img src="./gifs/Wales Crochet GIF by Twin_Made.gif" alt="Wales Crochet Pattern" className="mx-auto mb-2" />
                                <p className="">Check out my latest knit pattern, the Cozy Cable Sweater! Perfect for chilly days, this sweater combines classic cables with a modern fit. Click below to view the pattern and start knitting!</p>
                            </Card>
                            <Card title="Contact me">
                                <img src="./gifs/Phone.gif" alt="Phone" className="mx-auto mb-2" />
                                <p className="">Have questions or want to collaborate? Feel free to reach out to me via email at louisa@example.com</p>
                            </Card>
                        </div>
                    </motion.div>
                )}
                {activeButton === 'about' && (
                    <AboutMePage />
                )}
                {activeButton === 'knit' && (
                    <KnitPage setSelected={setSelected} setExpandedCardActive={handleSetExpandedCardActive} />
                )}
                {activeButton === 'crochet' && (
                    <CrochetPage setSelected={setSelected} setExpandedCardActive={handleSetExpandedCardActive}/>
                )}
                {activeButton === 'knit-crochet' && (
                    <KnitCrochetPage setSelected={setSelected} setExpandedCardActive={handleSetExpandedCardActive}/>
                )}
            </div>
        </>
    );
};

export default HomePage;