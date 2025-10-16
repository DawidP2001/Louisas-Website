/**
 * About Me Page
 * author: Dawid Pionk
 * 
 * To Do:
 *  - Add different sections about Louisa's journey, inspirations, and goals
 *  - Include photos and personal anecdotes
 */
import React from 'react';
import Card from '../../components/Card';
import { motion } from 'framer-motion';
import NavigationCard from '../../components/NavigationCard';

interface MobileAboutMePageProps {
    className?: string;
    activeButton: string;
    setActiveButton: (button: string) => void;
}


const AboutMePage: React.FC<MobileAboutMePageProps> = ({ className, setActiveButton, activeButton }) => {
    return (
        <>
            <div className='col-span-2 grid grid-cols-2 gap-1'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <NavigationCard className="my-1" activeButton={activeButton} setActiveButton={setActiveButton} />
                </motion.div>
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
                    <Card className='my-1'>
                        <div className="text-center flex flex-row items-center justify-center">
                            <img src='icons/instagram.png' alt="Instagram Icon" className="mx-auto mb-0 mt-[-6px] w-4 md:w-12" />
                            <h3 className="md:text-lg text-xs text-center mb-1 press-start-2p-regular" style={{ color: 'black' }}>
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
                                <img src="./slideshow/1.PNG" alt="Instagram 1" className="mx-auto mb-2"/>
                                <img src="./slideshow/2.PNG" alt="Instagram 2" className="mx-auto mb-2" />
                                <img src="./slideshow/3.PNG" alt="Instagram 3" className="mx-auto mb-2" />
                                <img src="./slideshow/4.PNG" alt="Instagram 4" className="mx-auto mb-2" />
                                <img src="./slideshow/5.PNG" alt="Instagram 5" className="mx-auto mb-2" />
                                <img src="./slideshow/6.PNG" alt="Instagram 6" className="mx-auto mb-2" />
                                <img src="./slideshow/7.PNG" alt="Instagram 7" className="mx-auto mb-2" />
                                <img src="./slideshow/8.PNG" alt="Instagram 8" className="mx-auto mb-2" />
                            </div>
                        </div>
                        <p className="">Follow me on Instagram for the latest updates and behind-the-scenes looks at my crafting projects!</p>
                    </Card>
                </a>
                </motion.div>
            </div>
        <motion.div
        className='rounded col-span-2 mt-[-10px]'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        >
            <Card title="Louisa's Story">
                <div className='text-black text-left'>
                    <img 
                        className="float-right ml-4 mb-2 max-w-full rounded-lg border"
                        src='./gifs/wink.gif' 
                        alt="Wink GIF"
                    />
                    <p className='text-xs'>Hi, I'm Louisa, a passionate crochet enthusiast! You can have a read through this section to find out more about me. I started my crochet journey many years ago and have been creating beautiful pieces ever since. My love for this craft has grown tremendously over the years, and I'm excited to share my knowledge and experiences with you through this website.</p>
                </div>
            </Card>
            <Card title="Favourite Projects">
                <div className='grid grid-cols-3 gap-3'>
                    <a className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/CubiFDvrNgp/?img_index=1'>
                        <p className='text-black text-left text-lg'>Sock Warmers</p>
                        <img src='./Crochet/leg-warmers.png' className="border rounded-lg" alt="Sock Warmers" />
                        <p>These are really cute ankle warming accessories that I love making!</p>
                    </a>
                    <a className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/CubiFDvrNgp/?img_index=1'>
                        <p className='text-black text-left text-lg'>Hat</p>
                        <img src='./Crochet/leg-warmers.png' className="border rounded-lg" alt="Hat" />
                        <p>These are really cute ankle warming accessories that I love making!</p>
                    </a>
                    <a className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/CubiFDvrNgp/?img_index=1'>
                        <p className='text-black text-left text-lg'>Sock Warmers</p>
                        <img src='./Crochet/leg-warmers.png' className="border rounded-lg" alt="Sock Warmers" />
                        <p className='text-md'>These are really cute ankle warming accessories that I love making!</p>
                    </a>
                </div>
            </Card>
            <Card title="Fun Facts">
                <p className='text-black text-left'>I draw inspiration from nature, art, and everyday life, which fuels my creativity and drives me to explore new patterns and styles. My goal is to share my knowledge and passion with others through this website, providing a space where fellow crochet enthusiasts can find inspiration, learn new techniques, and connect with a like-minded community. Whether you're a beginner or an experienced crocheter, I hope you'll find something here that sparks your creativity and encourages you to embark on your own crochet journey.</p>
            </Card>
        </motion.div>
        </>
    );
};

export default AboutMePage;