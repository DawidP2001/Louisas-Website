/**
 * KnitCrochetPage.tsx
 * Page component for displaying knit and crochet patterns and related content.
 * author: Dawid Pionk
 * 
 * Note: Currently a placeholder page as there are no combined knit and crochet products.
 */
import React from 'react';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

interface KnitCrochetPageProps {
  setSelected: (button: number) => void;
}   

const KnitCrochetPage: React.FC<KnitCrochetPageProps> = ({ setSelected }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [sortSelected, setSortSelected] = React.useState('');
    
    return (
            <motion.div
                className='p-1 col-span-2'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
            >   
                <Card title="Knit and Crochet Patterns">
                    <div className='flex'>
                    <input type="text" placeholder="Search patterns..." className="w-full p-2 mb-4 border rounded" />
                    <select className="p-2 mb-4 border rounded bg-white ml-2">
                        <option value="">Sort by...</option>
                        <option value="name-asc">Name: A-Z</option>
                        <option value="name-desc">Name: Z-A</option>
                    </select>
                    </div>
                    <div className='grid grid-cols-3 gap-1'>
                        <h3>Currently don't have any this is for the futures sorry x</h3>
                    </div>
                </Card>
            </motion.div>
    );
};

export default KnitCrochetPage;