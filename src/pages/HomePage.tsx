import React from 'react';
import Card from '../components/Card';
import NavigationCard from '../components/NavigationCard';

interface HomePageProps {
  setActiveButton: (button: string) => void;
}   

const HomePage: React.FC<HomePageProps> = ({ setActiveButton }) => {

    return (
        <div className='grid grid-cols-3 gap-1 mt-4'>
            <div className='p-1 rounded shadow'>
                <NavigationCard setActiveButton={setActiveButton} />
                <Card title="Instagram">
                    <p className="text-center text-black">Follow me on Instagram for the latest updates and behind-the-scenes looks at my crafting projects!</p>
                </Card>
            </div>
            <div className='p-1 rounded shadow'>
                <Card title="Welcome">
                    <div className="wave text-center mx-auto"></div>
                    <p className="text-center text-black">
                        Hello! I'm Louisa, and welcome to my crafting corner of the internet. Here you'll find a collection of my favorite knit and crochet patterns, 
                        tips, and projects. Whether you're a seasoned crafter or just starting out, I hope you find something that inspires you!
                        </p>
                </Card>
                <Card title="From the Blog">
                    <p className="text-left text-black">New Blog Post: "5 Tips for Perfecting Your Knit Stitches" - Check out my latest blog post where I share my top tips for achieving flawless knit stitches every time. Whether you're a beginner or looking to refine your skills, these tips will help you take your knitting to the next level!</p>
                </Card>
            </div>
            <div className='p-1 rounded shadow'>
                <Card title="Featured Pattern">
                    <p className="text-center text-black">Check out my latest knit pattern, the Cozy Cable Sweater! Perfect for chilly days, this sweater combines classic cables with a modern fit. Click below to view the pattern and start knitting!</p>
                </Card>
                <Card title="Contact me">
                    <img src="/gifs/Phone.gif" alt="Phone" className="mx-auto mb-2" />
                    <p className="text-center text-black">Have questions or want to collaborate? Feel free to reach out to me via email at louisa@example.com</p>
                </Card>
            </div>
        </div>
    );
};

export default HomePage;