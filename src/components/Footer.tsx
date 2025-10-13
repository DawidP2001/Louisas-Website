const Footer = () => {
    return (
        <div className="text-center p-0 text-black">
            <p className="text-sm">&copy; {new Date().getFullYear()} caillougarage. All rights reserved.</p>
            <p className="text-sm">Created by Dawid Pionk; Contact developer at: <a href="mailto:dawid@example.com" className="underline">dawid@example.com</a></p>
            <a className="text-sm" href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Pixel perfect - Flaticon</a>
        </div>
    );
};

export default Footer;