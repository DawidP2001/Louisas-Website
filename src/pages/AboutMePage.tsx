/**
 * About Me Page
 * author: Dawid Pionk
 * 
 * To Do:
 *  - Add different sections about Louisa's journey, inspirations, and goals
 *  - Include photos and personal anecdotes
 */
import React from 'react';
import Card from '../components/Card';

const AboutMePage: React.FC = () => {

    return (
        <div className='p-1 rounded shadow col-span-2 '>
            <Card title="Louisa's Story">
                <div className='flex items-center'>
                    <p className='text-black text-left'>Hi, I'm Louisa, a passionate crochet enthusiast! You can have a read through this section to find out more about me x</p>
                    <img className="mb-2 max-w-xs rounded-full border" src='./gifs/wink.gif' alt="Wink GIF"/>
                </div>
            </Card>
        </div>
    );
};

export default AboutMePage;