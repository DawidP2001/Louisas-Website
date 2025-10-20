import React from 'react';
import Card from '../Card';

interface ContactCardProps {
    className?: string;
}
const ContactCard: React.FC<ContactCardProps> = ({ className='' }) => {
    return (

            <Card title="Contact me" className={'' + className}>
                <img src="./gifs/Phone.gif" alt="Phone" className="mx-auto mb-2 border" />
                <p className="">Have questions or want me to test your pattern feel free to reach out to me on <a href='https://www.instagram.com/caillougarage/?hl=en' className='text-blue-600 underline'>insta</a> or <a href='https://www.tiktok.com/@caillougarage' className='text-blue-600 underline'>tiktok</a></p>
            </Card>
    );
};

export default ContactCard;