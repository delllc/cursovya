import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            Your local library providing access to knowledge, culture, and community events.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/books" className="text-gray-300 hover:text-white">
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-gray-300 hover:text-white">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-gray-300 hover:text-white">
                                    News
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>📞 (555) 123-4567</li>
                            <li>📧 info@library.com</li>
                            <li>📍 123 Library Street</li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                            <li>Saturday: 10:00 AM - 6:00 PM</li>
                            <li>Sunday: 12:00 PM - 5:00 PM</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; {new Date().getFullYear()} Library Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 