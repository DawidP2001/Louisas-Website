import React from 'react';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { allProducts } from '../constants/ProductConstants';

interface CrochetPageProps {
  setSelected: (button: number) => void;
  setExpandedCardActive: (active: boolean) => void;
}   

const CrochetPage: React.FC<CrochetPageProps> = ({ setSelected, setExpandedCardActive }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [sortSelected, setSortSelected] = React.useState('');

    return (
        <motion.div
            className='p-1 col-span-2'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
        >
            <Card title="Crochet Patterns">
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
                        .filter(product => product.category === "Crochet")
                        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .sort((a, b) => {
                            if (sortSelected === 'name-asc') return a.name.localeCompare(b.name);
                            if (sortSelected === 'name-desc') return b.name.localeCompare(a.name);
                            return 0;
                        })
                        .map(product => (
                            <button key={product.id} onClick={() => {setSelected(product.id); setExpandedCardActive(true);}}>
                                <ProductCard name={product.name} imageUrl={product.imageUrl} />
                            </button>
                        ))
                    }
                </div>
            </Card>
        </motion.div>
    );
};

export default CrochetPage;