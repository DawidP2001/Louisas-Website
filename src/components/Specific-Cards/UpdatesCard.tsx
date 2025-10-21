import React from 'react';
import Card from '../Card';
import { motion } from "framer-motion";

interface UpdatesCardProps {
    className?: string;
}
const UpdatesCard: React.FC<UpdatesCardProps> = ({ className='' }) => {
    return (
        <motion.div
            className={'relative' + className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
        >
            <img src="gifs/trumpet.gif" alt="Trumpets" className="absolute  right-0 sm:top-3 w-8 h-8 sm:w-10 sm:h-10 z-10 " />
            <img src="gifs/trumpet.gif" alt="Trumpets" className="absolute left-0 sm:top-3 w-8 h-8 sm:w-10 sm:h-10 z-10 scale-x-[-1]" />
            <Card title="Updates">
                <img src="h2.PNG" alt="Yarn" className="mx-auto mb-2 rounded-4xl" />
                <p className="">
                    I am currently working on a pattern test by the talented designer <span style={{hyphens:"none"}}>@Twin_Made.</span> You can check out their work on Instagram. Stay tuned for more updates and new patterns coming soon!
                </p>
            </Card>
        </motion.div>
    );
};

export default UpdatesCard;