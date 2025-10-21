import React from 'react';
import Card from '../../components/Card';
import NavigationCard from '../../components/NavigationCard';
import KnitPage from './DesktopKnitPage';
import KnitCrochetPage from './DesktopKnitCrochetPage';
import CrochetPage from './DesktopCrochetPage';
import AboutMePage from './DesktopAboutMePage';
import ExpandedProductCard from '../../components/ExpandedProductCard';
import { motion } from "framer-motion";
import FeaturedPatternCard from '../../components/Specific-Cards/FeaturedPatternCard';
import ContactCard from '../../components/Specific-Cards/CotactCard';
import InstaCard from '../../components/Specific-Cards/InstaCard';
import UpdatesCard from '../../components/Specific-Cards/UpdatesCard';

interface DesktopHomePageProps {
    className?: string;
    activeButton: string;
    setActiveButton: (button: string) => void;
}

const HomePage: React.FC<DesktopHomePageProps> = ({className, activeButton, setActiveButton}) => {
    
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
        <div className={`grid grid-cols-3 gap-1 mt-4 ` + (className ? className : '')}>
            <div className='p-1'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <NavigationCard activeButton={activeButton} setActiveButton={setActiveButton} />
                </motion.div>
                {expanded}
                <InstaCard />
            </div>
            {activeButton === 'home' && (
                <motion.div
                        className='p-1 rounded col-span-2 grid grid-cols-2 gap-1'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                    <div className='p-1'>
                        <Card title="Welcome">
                            <div className="wave text-center mx-auto"></div>
                            <p className="">
                                Hello! I'm Louisa, and welcome to my caillougarage website. Here you'll find a collection of my favorite knit and crochet patterns, 
                                and projects. I hope you enjoy exploring and find inspiration for your own crafting journey!
                            </p>
                        </Card>
                        <UpdatesCard />
                    </div>
                    <div className='p-1'>
                        <FeaturedPatternCard />
                        <ContactCard />
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
    );
};

export default HomePage;