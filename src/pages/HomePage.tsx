import React from 'react';
import Card from '../components/Card';
import NavButton from '../components/Nav-Button';
import Icon from '../components/icon';

const HomePage: React.FC = () => {
    const [activeButton, setActiveButton] = React.useState('home');

    return (
        <main className='grid grid-cols-5 gap-4 p-4 min-h-screen min-w-screen'>
            <div></div>
            <div className="col-span-3">
                <h1 className="text-black text-4xl font-bold text-center">Welcome to Louisa's Website</h1>
                <p className="text-black mt-2 text-lg text-center">This is a simple website built with React and Tailwind CSS.</p>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <div className=' p-4 rounded shadow'>
                        <Card title="Navigation">
                            <div className="flex flex-col items-center">
                                <NavButton href="#" isActive className="mb-2 w-full text-left"><Icon name="home" className="inline-block" /> Home</NavButton>
                                <NavButton href="#" className="mb-2 w-full text-left"><Icon name="user" className="inline-block" /> About Me</NavButton>
                                <NavButton href="#" className="mb-2 w-full text-left"><Icon name="knit" className="inline-block" /> Knit Patterns</NavButton>
                                <NavButton href="#" className="mb-2 w-full text-left"><Icon name="crochet" className="inline-block" /> Crochet</NavButton>
                                <NavButton href="#" className="mb-2 w-full text-left"><Icon name="knit-crochet" className="inline-block" /> Knit & Crochet</NavButton>
                            </div>
                        </Card>
                        <Card title="Instagram">
                            <p className="text-center text-black">Follow me on Instagram for the latest updates and behind-the-scenes looks at my crafting projects!</p>
                        </Card>
                    </div>
                    <div className='p-4 rounded shadow'>
                        <Card title="Welcome">
                            <p className="text-center text-black">Hello! I'm Louisa, and welcome to my crafting corner of the internet. Here you'll find a collection of my favorite knit and crochet patterns, tips, and projects. Whether you're a seasoned crafter or just starting out, I hope you find something that inspires you!</p>
                        </Card>
                        <Card title="From the Blog">
                            <p className="text-center text-black">New Blog Post: "5 Tips for Perfecting Your Knit Stitches" - Check out my latest blog post where I share my top tips for achieving flawless knit stitches every time. Whether you're a beginner or looking to refine your skills, these tips will help you take your knitting to the next level!</p>
                        </Card>
                    </div>
                    <div className='p-4 rounded shadow'>
                        <Card title="Featured Pattern">
                            <p className="text-center text-black">Check out my latest knit pattern, the Cozy Cable Sweater! Perfect for chilly days, this sweater combines classic cables with a modern fit. Click below to view the pattern and start knitting!</p>
                        </Card>
                        <Card title="Contact me">
                            <p className="text-center text-black">Have questions or want to collaborate? Feel free to reach out to me via email at louisa@example.com</p>
                        </Card>
                    </div>
                </div>
            </div>
            <div></div>
        </main>
    );
};

export default HomePage;