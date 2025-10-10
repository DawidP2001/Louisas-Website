import React from 'react';
import Card from '../components/Card';

const CrochetPage: React.FC = () => {

    return (
        <div className='p-1 rounded shadow col-span-2 '>
            <Card title="Louisa's Story">
                <p>Hi, I'm Louisa, a passionate crochet enthusiast!</p>
            </Card>
        </div>
    );
};

export default CrochetPage;