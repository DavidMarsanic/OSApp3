function Footer() {
    return (
        <footer className="p-4 text-white text-center">
            <p className="text-sm">© 2023 Open Source Platform. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-sm hover:underline">
                    Privacy Policy
                </a>
                <a href="#" className="text-sm hover:underline">
                    Terms of Service
                </a>
                <a href="#" className="text-sm hover:underline">
                    Contact Us
                </a>
            </div>
        </footer>
    );
}

export default Footer;
