/**
 * KnitCrochetPage.tsx
 * Page component for displaying knit and crochet patterns and related content.
 * author: Dawid Pionk
 * 
 * Note: Currently a placeholder page as there are no combined knit and crochet products.
 */
import React from 'react';
import Card from '../../components/Card';
import { motion } from 'framer-motion';
import NavigationCard from '../../components/NavigationCard';
import ExpandedProductCard from '../../components/ExpandedProductCard';
import InstaCard from '../../components/Specific-Cards/InstaCard';
import ProductCard from '../../components/ProductCard';
import { allProducts } from '../../constants/ProductConstants';

interface KnitCrochetPageProps {
    activeButton: string;
    setActiveButton: (button: string) => void;
}   

const KnitCrochetPage: React.FC<KnitCrochetPageProps> = ({ activeButton, setActiveButton }) => {
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
                layout
                className='col-span-2'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
            >   
                <Card title="Knit & Crochet Patterns">
                    <div className='flex'>
                    <input 
                        type="text" 
                        placeholder="Search patterns..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 mb-4 border rounded" 
                    />
                    <select 
                        value={sortSelected} 
                        onChange={(e) => setSortSelected(e.target.value)}
                        className="p-2 mb-4 border rounded bg-white ml-2"
                    >
                        <option value="">Sort by...</option>
                        <option value="name-asc">Name: A-Z</option>
                        <option value="name-desc">Name: Z-A</option>
                    </select>
                    </div>
                    <div className='grid grid-cols-3 gap-1'>
                        {allProducts
                        .filter(product => product.category === "KnitCrochet")
                        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .sort((a, b) => {
                            if (sortSelected === 'name-asc') return a.name.localeCompare(b.name);
                            if (sortSelected === 'name-desc') return b.name.localeCompare(a.name);
                            return 0;
                        })
                        .map(product => (
                            <button key={product.id} onClick={() => {setSelected(product.id);}}>
                                <ProductCard name={product.name} imageUrl={product.imageUrl} />
                            </button>
                        ))
                    }
                    </div>
                    <div className=''>
                        <h3 className='text-left'>Don't have any projects for this section yet x</h3>
                    </div>
                </Card>
            </motion.div>
        </>
    );
};

export default KnitCrochetPage;