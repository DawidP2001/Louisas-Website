import React from 'react';
import Card from '../../components/Card';
import NavigationCard from '../../components/NavigationCard';
import KnitPage from './MobileKnitPage';
import KnitCrochetPage from './MobileKnitCrochetPage';
import CrochetPage from './MobileCrochetPage';
import AboutMePage from './MobileAboutMePage';
import ExpandedProductCard from '../../components/ExpandedProductCard';
import { motion } from "framer-motion";
import InstaCard from '../../components/Specific-Cards/InstaCard';

interface MobileHomePageProps {
    className?: string;
}

const HomePage: React.FC<MobileHomePageProps> = ({ className }) => {
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
    
    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-1 mt-4 ` + (className ? className : '')}>
            {activeButton === 'home' && (
                <>
                    <div className='p-1'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                            <NavigationCard activeButton={activeButton} setActiveButton={setActiveButton} />
                        </motion.div>
                        <InstaCard />
                            <motion.div
                                className=""
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, type: "spring" }}
                            >
                                <Card title="Updates">
                                    <img src="h2.PNG" alt="Yarn" className="mx-auto mb-2 rounded-4xl" />
                                    <p className="">
                                        I am currently working on a pattern test by the talented designer Twin_Made. You can check out their work on Instagram. Stay tuned for more updates and new patterns coming soon!
                                    </p>
                                </Card>
                            </motion.div>
                    </div>
                    <motion.div
                        className='p-1'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        <Card title="Welcome">
                            <div className="wave text-center mx-auto"></div>
                            <p className="">
                                Hello! I'm Louisa, and welcome to my caillougarage website. Here you'll find a collection of my favorite knit and crochet patterns, 
                                tips, and projects. I hope you enjoy exploring and find inspiration for your own crafting journey!
                            </p>
                        </Card>
                        <Card title="Featured Pattern">
                            <p className='text-center text-black mb-5 text-lg' style={{marginTop: '-1rem'}}>Wales Crochet Pattern</p>
                            <img src="./gifs/Wales Crochet GIF by Twin_Made.gif" alt="Wales Crochet Pattern" className="mx-auto mb-2" />
                            <p className="">Check out my latest knit pattern, the Cozy Cable Sweater! Perfect for chilly days, this sweater combines classic cables with a modern fit. Click below to view the pattern and start knitting!</p>
                        </Card>
                        <Card title="Contact me">
                            <img src="./gifs/Phone.gif" alt="Phone" className="mx-auto mb-2" />
                            <p className="">Have questions or want to collaborate? Feel free to reach out to me via email at louisa@example.com</p>
                        </Card>
                    </motion.div>
                </>
            )}
            {activeButton === 'about' && (
                <AboutMePage activeButton={activeButton} setActiveButton={setActiveButton} />
            )}
            {activeButton === 'knit' && (
                <KnitPage activeButton={activeButton} setActiveButton={setActiveButton} setExpandedCardActive={handleSetExpandedCardActive} />
            )}
            {activeButton === 'crochet' && (
                <CrochetPage activeButton={activeButton} setActiveButton={setActiveButton} setExpandedCardActive={handleSetExpandedCardActive}/>
            )}
            {activeButton === 'knit-crochet' && (
                <KnitCrochetPage activeButton={activeButton} setActiveButton={setActiveButton} setExpandedCardActive={handleSetExpandedCardActive}/>
            )}
        </div>
    );
};

export default HomePage;