const Footer = () => {
    return (
        <div className="text-center p-4 bg-gray-200 dark:bg-gray-800 text-black">
            <p className="text-sm">&copy; {new Date().getFullYear()} caillougarage. All rights reserved.</p>
            <p className="text-sm">Created by Dawid Pionk</p>
        </div>
    );
};

export default Footer;