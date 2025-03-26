import { type ReactNode } from 'react';
import { Link } from '@inertiajs/react';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-white shadow-lg min-h-screen">
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
                    </div>
                    <nav className="mt-4">
                        <Link href="/admin/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                            Dashboard
                        </Link>
                        <Link href="/admin/books" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                            Books
                        </Link>
                        <Link href="/admin/users" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                            Users
                        </Link>
                        <Link href="/admin/news" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                            News
                        </Link>
                        <Link href="/admin/events" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                            Events
                        </Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                    {children}
                </div>
            </div>
        </div>
    );
} 