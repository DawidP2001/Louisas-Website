import React from 'react';
import Card from '../components/Card';
import NavigationCard from '../components/NavigationCard';
import Title from '../components/Title';0

interface PatternPageProps {
    activeButton: string;
    setActiveButton: (button: string) => void;
}

const PatternPage: React.FC<PatternPageProps> = ({ setActiveButton }) => {
    return (
        <main className='grid grid-cols-5 gap-4 p-4 min-h-screen min-w-screen'>
            <div></div>
            <div className="col-span-3">
                <Title 
                  title="My Patterns" 
                  subtitle="Explore a collection of my favorite knitting and crochet patterns." 
                  className="mb-6"
                />
            </div>
            <div></div>
        </main>
    );
};

export default PatternPage;