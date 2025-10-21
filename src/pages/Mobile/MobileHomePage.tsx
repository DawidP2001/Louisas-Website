import React from 'react';
import Card from '../../components/Card';
import NavigationCard from '../../components/NavigationCard';
import KnitPage from './MobileKnitPage';
import KnitCrochetPage from './MobileKnitCrochetPage';
import CrochetPage from './MobileCrochetPage';
import AboutMePage from './MobileAboutMePage';

import { motion } from "framer-motion";
import InstaCard from '../../components/Specific-Cards/InstaCard';
import FeaturedPatternCard from '../../components/Specific-Cards/FeaturedPatternCard';
import ContactCard from '../../components/Specific-Cards/CotactCard';
import UpdatesCard from '../../components/Specific-Cards/UpdatesCard';

interface MobileHomePageProps {
    className?: string;
    activeButton: string;
    setActiveButton: (button: string) => void;
}

const HomePage: React.FC<MobileHomePageProps> = ({ className, activeButton, setActiveButton }) => {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-1 mt-4 ` + (className ? className : '')}>
            {activeButton === 'home' && (
                <>
                    <div className=''>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                            <NavigationCard activeButton={activeButton} setActiveButton={setActiveButton} />
                        </motion.div>
                        <InstaCard />
                        <UpdatesCard />
                    </div>
                    <motion.div
                        className=''
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        <Card title="Welcome">
                            <div className="wave text-center mx-auto"></div>
                            <p className="">
                                Hello! I'm Louisa, and welcome to my caillougarage website. Here you'll find a collection of my favorite knit and crochet patterns, 
                                and projects. I hope you enjoy exploring and find inspiration for your own crafting journey!
                            </p>
                        </Card>
                        <FeaturedPatternCard />
                        <ContactCard />
                    </motion.div>
                </>
            )}
            {activeButton === 'about' && (
                <AboutMePage activeButton={activeButton} setActiveButton={setActiveButton} />
            )}
            {activeButton === 'knit' && (
                <KnitPage activeButton={activeButton} setActiveButton={setActiveButton} />
            )}
            {activeButton === 'crochet' && (
                <CrochetPage activeButton={activeButton} setActiveButton={setActiveButton} />
            )}
            {activeButton === 'knit-crochet' && (
                <KnitCrochetPage activeButton={activeButton} setActiveButton={setActiveButton} />
            )}
        </div>
    );
};

export default HomePage;