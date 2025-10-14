/**
 * About Me Page
 * author: Dawid Pionk
 * 
 * To Do:
 *  - Add different sections about Louisa's journey, inspirations, and goals
 *  - Include photos and personal anecdotes
 */
import React from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const AboutMePage: React.FC = () => {

    return (
        <motion.div
        className='p-1 rounded shadow col-span-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        >
            <Card title="Louisa's Story">
                <div className='text-black text-left'>
                    <img 
                        className="float-right ml-4 mb-2 max-w-xs rounded-lg border" 
                        src='./gifs/wink.gif' 
                        alt="Wink GIF"
                    />
                    <p className=''>Hi, I'm Louisa, a passionate crochet enthusiast! You can have a read through this section to find out more about me. I started my crochet journey many years ago and have been creating beautiful pieces ever since. My love for this craft has grown tremendously over the years, and I'm excited to share my knowledge and experiences with you through this website.</p>
                </div>
            </Card>
            <Card title="Favourite Projects">
                <div className='grid grid-cols-3 gap-3'>
                    <a className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/CubiFDvrNgp/?img_index=1'>
                        <p className='text-black text-left text-lg'>Sock Warmers</p>
                        <img src='./Crochet/Sock-Warmers.png' className="border rounded-lg" alt="Sock Warmers" />
                        <p>These are really cute ankle warming accessories that I love making!</p>
                    </a>
                    <a className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/CubiFDvrNgp/?img_index=1'>
                        <p className='text-black text-left text-lg'>Hat</p>
                        <img src='./Crochet/Sock-Warmers.png' className="border rounded-lg" alt="Hat" />
                        <p>These are really cute ankle warming accessories that I love making!</p>
                    </a>
                    <a className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/CubiFDvrNgp/?img_index=1'>
                        <p className='text-black text-left text-lg'>Sock Warmers</p>
                        <img src='./Crochet/Sock-Warmers.png' className="border rounded-lg" alt="Sock Warmers" />
                        <p className='text-md'>These are really cute ankle warming accessories that I love making!</p>
                    </a>
                </div>
            </Card>
            <Card title="Fun Facts">
                <p className='text-black text-left'>I draw inspiration from nature, art, and everyday life, which fuels my creativity and drives me to explore new patterns and styles. My goal is to share my knowledge and passion with others through this website, providing a space where fellow crochet enthusiasts can find inspiration, learn new techniques, and connect with a like-minded community. Whether you're a beginner or an experienced crocheter, I hope you'll find something here that sparks your creativity and encourages you to embark on your own crochet journey.</p>
            </Card>
        </motion.div>
    );
};

export default AboutMePage;