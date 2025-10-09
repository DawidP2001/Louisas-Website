import React from 'react';
import Card from './Card';
import NavButton from './Nav-Button';
import Icon from './icon';

interface NavigationCardProps {
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ activeButton, setActiveButton }) => {
  return (
    <Card title="Navigation">
      <div className="flex flex-col items-center">
        <NavButton onClick={() => setActiveButton('home')} isActive={activeButton === 'home'} className="mb-2 w-full text-left">
          <Icon name="home" className="inline-block mr-2" /> Home
        </NavButton>
        <NavButton onClick={() => setActiveButton('about')} isActive={activeButton === 'about'} className="mb-2 w-full text-left">
          <Icon name="user" className="inline-block mr-2" /> About Me
        </NavButton>
        <NavButton onClick={() => setActiveButton('knit')} isActive={activeButton === 'knit'} className="mb-2 w-full text-left">
          <Icon name="knit" className="inline-block mr-2" /> Knit Patterns
        </NavButton>
        <NavButton onClick={() => setActiveButton('crochet')} isActive={activeButton === 'crochet'} className="mb-2 w-full text-left">
          <Icon name="crochet" className="inline-block mr-2" /> Crochet
        </NavButton>
        <NavButton onClick={() => setActiveButton('knit-crochet')} isActive={activeButton === 'knit-crochet'} className="mb-2 w-full text-left">
          <Icon name="knit-crochet" className="inline-block mr-2" /> Knit & Crochet
        </NavButton>
      </div>
    </Card>
  );
};

export default NavigationCard;