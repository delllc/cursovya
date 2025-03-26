import Dropdown from '@/components/Dropdown';
import { usePage } from '@inertiajs/react';

interface AuthenticatedLayoutProps {
    header?: JSX.Element;
}

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div>
            <nav>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex items-center rounded-md">
                                            {user.name}
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm leading-4 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                <svg
                                                    className="ms-2 -me-0.5 h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="#ffffff"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('reader-card.edit')}>Читательский билет</Dropdown.Link>
                                        <Dropdown.Link href={route('profile.edit')}>Настройки</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Выход
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
