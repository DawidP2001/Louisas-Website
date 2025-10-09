import React from 'react';
import Card from '../components/Card';
import NavigationCard from '../components/NavigationCard';

interface HomePageProps {
  setActiveButton: (button: string) => void;
}   

const HomePage: React.FC<HomePageProps> = ({ setActiveButton }) => {

    return (
        <div className='grid grid-cols-3 gap-1 mt-4'>
            <div className='p-1'>
                <NavigationCard setActiveButton={setActiveButton} />
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
            <div className='p-1'>
                <Card title="Welcome">
                    <div className="wave text-center mx-auto"></div>
                    <p className="text-justify text-black">
                        Hello! I'm Louisa, and welcome to my caillougarage website. Here you'll find a collection of my favorite knit and crochet patterns, 
                        tips, and projects. I hope you enjoy exploring and find inspiration for your own crafting journey!
                        </p>
                </Card>
                <Card title="Updates">
                    <p className="text-justify text-black">New Blog Post: "5 Tips for Perfecting Your Knit Stitches" - Check out my latest blog post where I share my top tips for achieving flawless knit stitches every time. Whether you're a beginner or looking to refine your skills, these tips will help you take your knitting to the next level!</p>
                </Card>
            </div>
            <div className='p-1'>
                <Card title="Featured Pattern">
                    <p className='text-center text-black mb-5 text-lg' style={{marginTop: '-1rem'}}>Wales Crochet Pattern</p>
                    <img src="/gifs/Wales Crochet GIF by Twin_Made.gif" alt="Wales Crochet Pattern" className="mx-auto mb-2" />
                    <p className="text-justify text-black">Check out my latest knit pattern, the Cozy Cable Sweater! Perfect for chilly days, this sweater combines classic cables with a modern fit. Click below to view the pattern and start knitting!</p>
                </Card>
                <Card title="Contact me">
                    <img src="/gifs/Phone.gif" alt="Phone" className="mx-auto mb-2" />
                    <p className="text-justify text-black">Have questions or want to collaborate? Feel free to reach out to me via email at louisa@example.com</p>
                </Card>
                <a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Pixel perfect - Flaticon</a>
            </div>
        </div>
    );
};

export default HomePage;