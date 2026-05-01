import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 mt-10 w-full">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Contact Us
                        </h2>
                        <p className="text-[16px]">Email: support@suncart.com</p>
                        <p className="text-[16px]">Phone: +880 1234-567890</p>
                        <p className="text-[16px]">Location: Dhaka, Bangladesh</p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Follow Us
                        </h2>
                        <div className="flex gap-4 justify-center">
                            <a href="#" className="hover:text-white ">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Privacy */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Legacy
                        </h2>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Terms & Conditions
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Refund Policy
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} SunCart. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;