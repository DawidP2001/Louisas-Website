const Footer = () => {
    return (
        <div className="text-center p-0 text-black flex justify-around items-center mt-4 border-t border-black pt-2 text-xs sm:text-sm">
            <div>
                <p className="text-sm">&copy; {new Date().getFullYear()} caillougarage. All rights reserved.</p>
                <a className="text-sm underline text-blue-600" href="https://www.flaticon.com" title="instagram logo icons">Icons taken from Flaticon</a>
                
            </div>
            <div>
                <p className="text-sm">Created by Dawid Pionk;</p>
                <p className="text-sm">Contact Dawid at: <a href="https://www.linkedin.com/in/dawid-pionk/" className="underline text-blue-600">LinkedIn</a>, <a href="https://www.fiverr.com/dawidpionk" className="underline text-blue-600">Fiverr</a></p>
            </div>
        </div>
    );
};

export default Footer;