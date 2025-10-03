import React from 'react';
import Card from '../components/Card';
import NavigationCard from '../components/NavigationCard';
import Title from '../components/Title';

interface HomePageProps {
  activeButton: string;
  setActiveButton: (button: string) => void;
}   

const HomePage: React.FC<HomePageProps> = ({ activeButton, setActiveButton }) => {

    return (
        <main className='grid grid-cols-5 gap-4 p-4 min-h-screen min-w-screen'>
            <div></div>
            <div className="col-span-3">
                <Title 
                  title="Welcome to Louisa's Crafting Corner" 
                  subtitle="Discover my favorite knit and crochet patterns, tips, and projects!" 
                  className="mb-6"
                />
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <div className=' p-4 rounded shadow'>
                        <NavigationCard />
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