import { MainLayout } from '@/layouts/news/layout';
import { PageProps } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ReaderCard = ({ auth }: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = async () => {
        try {
            const response = await axios.get('/favorites');
            setFavorites(response.data);
        } catch (error) {
            console.error('Ошибочка', error);
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <MainLayout auth={auth}>
            {/*<div style={{ padding: '20px' }}>*/}
            {/*    <h2>Читательский билет</h2>*/}
            {/*    <div>*/}
            {/*        <p>*/}

            {/*            <strong>ФИО:</strong> {auth.user.name || 'Не указано'}*/}
            {/*        </p>*/}
            {/*        /!*<p>*!/*/}
            {/*        /!*    <strong>Возраст:</strong> {auth.user || 'Не указано'}*!/*/}
            {/*        /!*</p>*!/*/}
            {/*        /!*<p>*!/*/}
            {/*        /!*    <strong>Срок действия билета:</strong> {user.card_expiration_date || 'Не указано'}*!/*/}
            {/*        /!*</p>*!/*/}
            {/*    </div>*/}

            {/*    <h3>Прочитанные книги</h3>*/}
            {/*    <ul>*/}
            {/*        /!*{user.read_books?.length > 0 ? (*!/*/}
            {/*        /!*    user.read_books.map((book) => (*!/*/}
            {/*        /!*        <li key={book.id}>*!/*/}
            {/*        /!*            {book.title} ({book.author})*!/*/}
            {/*        /!*        </li>*!/*/}
            {/*        /!*    ))*!/*/}
            {/*        /!*) : (*!/*/}
            {/*        /!*    <p>Нет прочитанных книг.</p>*!/*/}
            {/*        /!*)}*!/*/}
            {/*    </ul>*/}

            {/*    <h3>Избранные книги</h3>*/}
            {/*    <ul>*/}

            {/*{favorites.length > 0 ? (*/}
            {/*    favorites.map((book) => (*/}

            {/*        <li key={book.id}>*/}
            {/*            {book.title} ({book.author})*/}
            {/*            {console.log(book)}*/}
            {/*        </li>*/}
            {/*    ))*/}
            {/*) : (*/}
            {/*    <p>Нет избранных книг.</p>*/}
            {/*)}*/}
            {/*    </ul>*/}

            {/*    <h3>Текущие книги</h3>*/}
            {/*    <ul>*/}
            {/*        /!*{auth.user.current_books?.length > 0 ? (*!/*/}
            {/*        /!*    auth.user.current_books.map((book) => (*!/*/}
            {/*        /!*        <li key={book.id}>*!/*/}
            {/*        /!*            {book.title} ({book.author})*!/*/}
            {/*        /!*        </li>*!/*/}
            {/*        /!*    ))*!/*/}
            {/*        /!*) : (*!/*/}
            {/*        /!*    <p>Нет текущих книг.</p>*!/*/}
            {/*        /!*)}*!/*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
                    {/* Верхняя часть: ФИО и дата окончания */}
                    <div className="mb-6 flex justify-between">
                        <div>
                            <p className="font-semibold text-gray-600">ФИО:</p>
                            <p className="text-lg font-bold">{auth.user.name}</p>
                        </div>
                    </div>

                    {/* Прочитанные книги */}
                    {/* <div className="mb-6"> */}
                    <p className="mb-2 font-semibold text-gray-600"></p>
                    <div className="flex gap-4 overflow-x-auto">
                        {/*{auth.user.favoritedBooks.map((book, index) => (*/}
                        {/*    <BookCard key={index} title={book.title} image={book.image} />*/}
                        {/*))}*/}
                    </div>
                    {/* </div> */}

                    {/* Избранные книги */}
                    <div className="mb-6">
                        <p className="mb-2 font-semibold text-gray-600">Избранные книги:</p>
                        <div className="flex gap-4 overflow-x-auto">
                            {favorites.length > 0 ? (
                                favorites.map((book) => <BookCard key={book.id} title={book.title} image={book.cover_image} />)
                            ) : (
                                <p>Нет избранных книг.</p>
                            )}
                            {/*{readerInfo.favoriteBooks.map((book, index) => (*/}
                            {/*    <BookCard key={index} title={book.title} image={book.image} />*/}
                            {/*))}*/}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

const BookCard = ({ title, image }) => {
    return (
        <div className="w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 shadow-md">
            <img src={image} alt={title} className="h-40 w-full object-fill" />
            <div className="p-2">
                <p className="truncate text-sm font-semibold text-gray-700">{title}</p>
            </div>
        </div>
    );
};

export default ReaderCard;
