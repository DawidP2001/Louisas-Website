/**
 * About Me Page
 * author: Dawid Pionk
 * 
 * To Do:
 *  - Add different sections about Louisa's journey, inspirations, and goals
 *  - Include photos and personal anecdotes
 */
import React from 'react';
import { motion } from 'framer-motion';
import NavigationCard from '../../components/NavigationCard';
import InstaCard from '../../components/Specific-Cards/InstaCard';
import LouisaStoryCard from '../../components/Specific-Cards/LouisaStoryCard';
import FavouriteProjectsCard from '../../components/Specific-Cards/FavouriteProjectsCard';

interface MobileAboutMePageProps {
    activeButton: string;
    setActiveButton: (button: string) => void;
}


const AboutMePage: React.FC<MobileAboutMePageProps> = ({setActiveButton, activeButton }) => {
    return (
        <>
            <div className='col-span-2 grid grid-cols-2 gap-1'>
                <NavigationCard className="my-1" activeButton={activeButton} setActiveButton={setActiveButton} />
                <InstaCard />
            </div>
        <motion.div
        className='rounded col-span-2 mt-[-10px]'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        >
            <LouisaStoryCard />
            <FavouriteProjectsCard />
        </motion.div>
        </>
    );
};

export default AboutMePage;