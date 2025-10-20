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
import LouisaStoryCard from '../../components/Specific-Cards/LouisaStoryCard';
import FavouriteProjectsCard from '../../components/Specific-Cards/FavouriteProjectsCard';

const AboutMePage: React.FC = () => {

    return (
        <motion.div
        className='p-1 rounded col-span-2'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        >
            <LouisaStoryCard />
            <FavouriteProjectsCard />
        </motion.div>
    );
};

export default AboutMePage;