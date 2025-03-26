import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function AppHeader({ auth }: PageProps) {
    const [isActive, setIsActive] = useState({
        news: false,
        events: false,
        library: false,
    });

    useEffect(() => {
        const handleRouteChange = () => {
            const currentPath = window.location.pathname;
            // Проверяем, содержит ли URL '/events' или '/library'
            setIsActive({
                news: currentPath === '/' && !currentPath.includes('/events'),
                events: currentPath.includes('/events'),
                library: currentPath.includes('/library'),
            });
        };
        handleRouteChange();

        // Добавляем слушатель события для обработки изменения URL
        window.addEventListener('popstate', handleRouteChange);

        // Очищаем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav__menu">
                        <ul className="list">
                            <li className="list__item logo">
                                <Link href="/">МБУС им. Маяковского</Link>
                            </li>
                            <li className={`list__item ${isActive.news ? 'opacity-100' : 'opacity-50'}`}>
                                <Link href={route('news')}>Новости</Link>
                            </li>
                            {/*
                            <li className={`list__item ${isActive.events ? 'opacity-100' : 'opacity-50'}`}>
                                <Link href={route('events')}>Мероприятия</Link>
                            </li>
                        */}
                            <li className={`list__item ${isActive.library ? 'opacity-100' : 'opacity-50'}`}>
                                <Link href={route('library')}>Электронная библиотека</Link>
                            </li>

                            <ul className="flex items-center">
                                <li className="list__item mr-5">
                                    <Link href="/library" className="flex items-center">
                                        Найти книгу
                                        <span className="ml-4 block rounded-[8px] bg-white/[.1] p-2">
                                            <svg width="18" height="18" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.6379 8.91936L8.73589 7.10952C9.34956 6.3634 9.68254 5.44204 9.6813 4.49352C9.6813 3.64879 9.41883 2.82304 8.92707 2.12067C8.43532 1.41831 7.73637 0.87088 6.91861 0.547617C6.10085 0.224354 5.20101 0.139774 4.33288 0.304572C3.46476 0.46937 2.66733 0.876145 2.04145 1.47346C1.41556 2.07077 0.989327 2.83179 0.816646 3.66029C0.643965 4.48878 0.732591 5.34754 1.07132 6.12797C1.41004 6.90839 1.98366 7.57543 2.71962 8.04474C3.45558 8.51404 4.32084 8.76454 5.20598 8.76454C6.19986 8.76571 7.1653 8.44794 7.94711 7.86228L9.84353 9.67746C9.89554 9.7275 9.95741 9.76722 10.0256 9.79433C10.0937 9.82143 10.1669 9.83538 10.2407 9.83538C10.3146 9.83538 10.3877 9.82143 10.4559 9.79433C10.524 9.76722 10.5859 9.7275 10.6379 9.67746C10.6903 9.62783 10.732 9.56879 10.7604 9.50373C10.7888 9.43867 10.8034 9.36889 10.8034 9.29841C10.8034 9.22793 10.7888 9.15815 10.7604 9.0931C10.732 9.02804 10.6903 8.96899 10.6379 8.91936V8.91936ZM1.84948 4.49352C1.84948 3.85998 2.04634 3.24066 2.41516 2.71388C2.78397 2.18711 3.30818 1.77654 3.9215 1.53409C4.53482 1.29165 5.2097 1.22821 5.8608 1.35181C6.51189 1.47541 7.10996 1.78049 7.57937 2.22847C8.04879 2.67646 8.36846 3.24722 8.49798 3.8686C8.62749 4.48997 8.56102 5.13404 8.30697 5.71936C8.05293 6.30467 7.62272 6.80496 7.07074 7.15693C6.51877 7.50891 5.86983 7.69678 5.20598 7.69678C4.31578 7.69678 3.46204 7.3593 2.83258 6.75857C2.20311 6.15784 1.84948 5.34308 1.84948 4.49352Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li className="list__item flex">
                                    {auth.user ? (
                                        <AuthenticatedLayout children={undefined}></AuthenticatedLayout>
                                    ) : (
                                        <>
                                            <Link className="mr-[10px]" href={route('login')}>
                                                Войти
                                            </Link>
                                            <Link href={route('register')}>Зарегистрироваться</Link>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
