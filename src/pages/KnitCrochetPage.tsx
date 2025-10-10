import React from 'react';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';

interface KnitCrochetPageProps {
  setSelected: (button: string) => void;
}   

const KnitCrochetPage: React.FC<KnitCrochetPageProps> = ({ setSelected }) => {
    
    return (
            <div className='p-1 rounded shadow col-span-2 '>
                <Card title="Knit and Crochet Patterns">
                    <div className='flex'>
                    <input type="text" placeholder="Search patterns..." className="w-full p-2 mb-4 border rounded" />
                    <select className="p-2 mb-4 border rounded bg-white ml-2">
                        <option value="">Sort by...</option>
                        <option value="difficulty-easy">Difficulty: Easy</option>
                        <option value="difficulty-medium">Difficulty: Medium</option>
                        <option value="difficulty-hard">Difficulty: Hard</option>
                        <option value="name-asc">Name: A-Z</option>
                        <option value="name-desc">Name: Z-A</option>
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                    </div>
                    <div className='grid grid-cols-3 gap-1'>
                        <button onClick={() => setSelected('Cozy Knit Scarf')}><ProductCard name="Cozy Knit Scarf" imageUrl='Knit/1.jpg' /></button>
                        <button onClick={() => setSelected('Cozy Knit Scarf')}><ProductCard name="Cozy Knit Scarf" imageUrl='Knit/1.jpg' /></button>
                        <button onClick={() => setSelected('Cozy Knit Scarf')}><ProductCard name="Cozy Knit Scarf" imageUrl='Knit/1.jpg' /></button>
                        <button onClick={() => setSelected('Cozy Knit Scarf')}><ProductCard name="Cozy Knit Scarf" imageUrl='Knit/1.jpg' /></button>
                        <button onClick={() => setSelected('Cozy Knit Scarf')}><ProductCard name="Cozy Knit Scarf" imageUrl='Knit/1.jpg' /></button>
                        <button onClick={() => setSelected('Cozy Knit Scarf')}><ProductCard name="Cozy Knit Scarf" imageUrl='Knit/1.jpg' /></button>
                        <button onClick={() => setSelected('Cozy Knit Scarf')}><ProductCard name="Cozy Knit Scarf" imageUrl='Knit/1.jpg' /></button>
                    </div>
                </Card>
            </div>
    );
};

export default KnitCrochetPage;