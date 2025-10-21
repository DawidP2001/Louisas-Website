import React from 'react';
import Card from '../Card';

interface FeaturedPatternCardProps {
    className?: string;
}
const FeaturedPatternCard: React.FC<FeaturedPatternCardProps> = ({ className='' }) => {
    return (
            <Card title="Featured" className={'' + className}>
                <p className='text-center text-black mb-1 text-lg' style={{marginTop: '-1rem'}}>Tulip Shorts</p>
                <a href="https://www.tiktok.com/@caillougarage/video/7541708443678297366" className='' target="_blank" rel="noopener noreferrer">
                    <img src="./gifs/Tulip-Shorts.gif" alt="Wales Crochet Pattern" className="mx-auto mb-2 border rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" />
                </a>
                <p className="">pattern by <span style={{hyphens:"none"}}>@made_bymolly</span> on ig, out soon!</p>
            </Card>
    );
};

export default FeaturedPatternCard;