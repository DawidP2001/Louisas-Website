import React from 'react';
import Card from '../Card';

interface FavouriteProjectsCardProps {
    className?: string;
}
const FavouriteProjectsCard: React.FC<FavouriteProjectsCardProps> = ({ className='' }) => {
    return (
        <Card title="Favourite Projects" className={'' + className}>
            <div className='grid grid-cols-3 gap-3'>
                <a target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/CubiFDvrNgp/?img_index=1'>
                    <p className='text-black text-left text-lg'>Sock Warmers</p>
                    <img src='./Crochet/leg-warmers.png' className="border rounded-lg" alt="Sock Warmers" />
                    <p>These are really cute ankle warming accessories that I love making!</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/DH8zvyxtIPC/?img_index=1'>
                    <p className='text-black text-left text-lg'>Babydoll Top</p>
                    <img src='./Crochet/babydoll.png' className="border rounded-lg" alt="Hat" />
                    <p>babydoll top by @grecinata ⋆˚✿˖° </p>
                </a>
                <a target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300 cursor-pointer' href='https://www.instagram.com/p/C6T8GwFtQ91/?img_index=1'>
                    <p className='text-black text-left text-lg'>Tuesday Top</p>
                    <img src='./Knit/tuesday-top.png' className="border rounded-lg" alt="Sock Warmers" />
                    <p className='text-md'>such a simple yet staple piece :) very beginner friendly and works up pretty fast!</p>
                </a>
            </div>
        </Card>
    );
};

export default FavouriteProjectsCard;