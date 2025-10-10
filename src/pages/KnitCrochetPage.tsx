import React from 'react';
import Card from '../components/Card';
import NavigationCard from '../components/NavigationCard';
import ProductCard from '../components/ProductCard';
import ExpandedProductCard from '../components/ExpandedProductCard';

interface KnitCrochetPageProps {
  activeButton: string;
  setActiveButton: (button: string) => void;
}   

const KnitCrochetPage: React.FC<KnitCrochetPageProps> = ({ activeButton, setActiveButton }) => {
    const [selected, setSelected] = React.useState('');
    const expanded = selected ? (
        <ExpandedProductCard name={selected} imageUrl='Knit/1.jpg'>
            <p className="text-justify text-black">This is a detailed description of the {selected}. It includes materials needed, step-by-step instructions, and tips for best results.</p>
        </ExpandedProductCard>
    ) : null;
    
    return (
        <div className='grid grid-cols-3 gap-1 mt-4'>
            <div className='p-1 rounded shadow'>
                <NavigationCard activeButton={activeButton} setActiveButton={setActiveButton} />
                {expanded}
                <a href='https://www.instagram.com/caillougarage/' target="_blank" rel="noopener noreferrer">
                    <Card>
                        <div className='text-center flex flex-row items-center justify-center'>
                            <img src='icons/instagram.png' alt="Instagram Icon" className="mx-auto mb-2 w-12" />
                            <h3 className="text-lg text-center mb-4 press-start-2p-regular" style={{ color: 'black' }}>
                                Instagram
                            </h3>
                        </div>
                        <div className="slider">
                            <div className="slide-track">
                                <img src="/slideshow/1.PNG" alt="Instagram 1" className="mx-auto mb-2" />
                                <img src="/slideshow/2.PNG" alt="Instagram 2" className="mx-auto mb-2" />
                                <img src="/slideshow/3.PNG" alt="Instagram 3" className="mx-auto mb-2" />
                                <img src="/slideshow/4.PNG" alt="Instagram 4" className="mx-auto mb-2" />
                                <img src="/slideshow/5.PNG" alt="Instagram 5" className="mx-auto mb-2" />
                                <img src="/slideshow/6.PNG" alt="Instagram 6" className="mx-auto mb-2" />
                                <img src="/slideshow/7.PNG" alt="Instagram 7" className="mx-auto mb-2" />
                                <img src="/slideshow/8.PNG" alt="Instagram 8" className="mx-auto mb-2" />
                                <img src="/slideshow/1.PNG" alt="Instagram 1" />
                                <img src="/slideshow/2.PNG" alt="Instagram 2" />
                                <img src="/slideshow/3.PNG" alt="Instagram 3" />
                                <img src="/slideshow/4.PNG" alt="Instagram 4" />
                                <img src="/slideshow/5.PNG" alt="Instagram 5" />
                                <img src="/slideshow/6.PNG" alt="Instagram 6" />
                                <img src="/slideshow/7.PNG" alt="Instagram 7" />
                                <img src="/slideshow/8.PNG" alt="Instagram 8" />
                            </div>
                        </div>
                        <p className="text-justify text-black">Follow me on Instagram for the latest updates and behind-the-scenes looks at my crafting projects!</p>
                    </Card>
                </a>
            </div>
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
        </div>
    );
};

export default KnitCrochetPage;