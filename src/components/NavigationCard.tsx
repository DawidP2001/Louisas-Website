import React from 'react';
import Card from './Card';
import NavButton from './Nav-Button';
import Icon from './icon';

const NavigationCard: React.FC = () => {
  return (
    <Card title="Navigation">
      <div className="flex flex-col items-center">
        <NavButton href="#" isActive className="mb-2 w-full text-left">
          <Icon name="home" className="inline-block mr-2" /> Home
        </NavButton>
        <NavButton href="#" className="mb-2 w-full text-left">
          <Icon name="user" className="inline-block mr-2" /> About Me
        </NavButton>
        <NavButton href="#" className="mb-2 w-full text-left">
          <Icon name="knit" className="inline-block mr-2" /> Knit Patterns
        </NavButton>
        <NavButton href="#" className="mb-2 w-full text-left">
          <Icon name="crochet" className="inline-block mr-2" /> Crochet
        </NavButton>
        <NavButton href="#" className="mb-2 w-full text-left">
          <Icon name="knit-crochet" className="inline-block mr-2" /> Knit & Crochet
        </NavButton>
      </div>
    </Card>
  );
};

export default NavigationCard;