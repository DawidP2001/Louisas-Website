import React from 'react';
import Card from '../Card';
import { motion } from "framer-motion";

interface InstaCardProps {
    className?: string;
}
const InstaCard: React.FC<InstaCardProps> = ({ className='' }) => {
    return (
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
                <Card className={'my-1 ' + className}>
                    <div className="text-center flex flex-row items-center justify-center mt-2">
                        <img src='icons/instagram.png' alt="Instagram Icon" className="mr-1 mt-[-8px] sm:mt-[-12px] w-6 sm:w-8" />
                        <h3 className="md:text-lg text-xs text-center mb-2 press-start-2p-regular" style={{ color: 'black' }}>
                            Instagram
                        </h3>
                    </div>
                    <div className="slider">
                        <div className="slide-track">
                            <img src="./slideshow/1.PNG" alt="Instagram 1" className="" />
                            <img src="./slideshow/2.PNG" alt="Instagram 2" className="" />
                            <img src="./slideshow/3.PNG" alt="Instagram 3" className="" />
                            <img src="./slideshow/4.PNG" alt="Instagram 4" className="" />
                            <img src="./slideshow/5.PNG" alt="Instagram 5" className="" />
                            <img src="./slideshow/6.PNG" alt="Instagram 6" className="" />
                            <img src="./slideshow/7.PNG" alt="Instagram 7" className="" />
                            <img src="./slideshow/8.PNG" alt="Instagram 8" className="" />
                            <img src="./slideshow/1.PNG" alt="Instagram 1" className="" />
                        </div>
                    </div>
                    <p className="">Follow me on Instagram for the latest updates and behind-the-scenes looks at my crafting projects!</p>
                </Card>
            </a>
        </motion.div>
    );
};

export default InstaCard;