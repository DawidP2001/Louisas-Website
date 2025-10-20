import React from 'react';
import Card from '../Card';

interface LouisaStoryCardProps {
    className?: string;
}
const LouisaStoryCard: React.FC<LouisaStoryCardProps> = ({ className='' }) => {
    return (
        <Card title="Louisa's Story" className={'min-h-48' + className}>
            <div className='text-black text-left'>
                <img 
                    className=" float-right ml-4 mb-2 max-w-[180px] sm:max-w-[250px] rounded-lg border" 
                    src='./gifs/wink.gif' 
                    alt="Wink GIF"
                />
                <p className=''>Hi, I'm Louisa, a passionate crochet enthusiast! You can have a read through this section to find out more about me. I started my crochet journey many years ago and have been creating beautiful pieces ever since. My love for this craft has grown tremendously over the years, and I'm excited to share my knowledge and experiences with you through this website.</p>
            </div>
        </Card>
    );
};

export default LouisaStoryCard;