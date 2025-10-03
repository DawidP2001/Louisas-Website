import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main className='grid grid-cols-5 gap-4 p-4 min-h-screen min-w-screen'>
            <div></div>
            <div className="col-span-3">
                <h1 className="text-4xl font-bold">Welcome to Louisa's Website</h1>
                <p className="mt-2 text-lg">This is a simple website built with React and Tailwind CSS.</p>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <div className='bg-black p-4 rounded shadow'>Column 1</div>
                    <div className='bg-black p-4 rounded shadow'>Column 2</div>
                    <div className='bg-black p-4 rounded shadow'>Column 3</div>
                </div>
            </div>
            <div></div>
        </main>
    );
};

export default HomePage;