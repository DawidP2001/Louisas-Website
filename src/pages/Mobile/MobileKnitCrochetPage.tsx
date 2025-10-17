/**
 * KnitCrochetPage.tsx
 * Page component for displaying knit and crochet patterns and related content.
 * author: Dawid Pionk
 * 
 * Note: Currently a placeholder page as there are no combined knit and crochet products.
 */
import React from 'react';
import Card from '../../components/Card';
import ProductCard from '../../components/ProductCard';
import { motion } from 'framer-motion';
import { allProducts } from '../../constants/ProductConstants';
import NavigationCard from '../../components/NavigationCard';
import ExpandedProductCard from '../../components/ExpandedProductCard';
import InstaCard from '../../components/Specific-Cards/InstaCard';

interface KnitCrochetPageProps {
    activeButton: string;
    setActiveButton: (button: string) => void;
    setExpandedCardActive: (active: boolean) => void;
}   

const KnitCrochetPage: React.FC<KnitCrochetPageProps> = ({ setExpandedCardActive, activeButton, setActiveButton }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [sortSelected, setSortSelected] = React.useState('');
    const [selected, setSelected] = React.useState<number | null>(null);

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
        <>
            <div className='col-span-2 grid grid-cols-2 gap-1'>
                <NavigationCard className="my-1" activeButton={activeButton} setActiveButton={setActiveButton} />
                <InstaCard />
            </div>
            <div className='col-span-2'>
                {expanded}
            </div>
            <motion.div
                className='p-1 col-span-2'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
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
        </>
    );
};

export default KnitCrochetPage;