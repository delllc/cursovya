import { MainLayout } from '@/layouts/news/layout';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const BookShow = ({ books, auth }) => {
    const [favoriteId, setFavoriteId] = useState([]);
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        setPdfUrl(books.url_book);
    }, []);

    const fetchFavorites = useCallback(async () => {
        try {
            const response = await axios.get('/favorites');
            const res = response.data.map((book) => book.id);
            setFavoriteId(res);
            console.log('Favorite IDs:', res);
        } catch (e) {
            console.error(e);
        }
    }, [favoriteId]); // Пустой массив зависимостей

    const handleToggleFavorite = useCallback(
        async (bookId: number) => {
            const isAlreadyFavorited = favoriteId.includes(books.id);

            if (isAlreadyFavorited) {
                try {
                    // Удаляем книгу с сервера
                    await axios.delete(`/books/${books.id}/favorite`);
                    // Обновляем состояние локально
                    setFavoriteId((prevFavorites) => prevFavorites.filter((id) => id !== books.id));
                    console.log('Книга удалена из избранного:', bookId);
                } catch (e) {
                    console.error('Ошибка при удалении книги из избранного:', e);
                }
            } else {
                try {
                    // Добавляем книгу на сервер
                    await axios.post(`/books/${books.id}/favorite`);
                    // Обновляем состояние локально
                    setFavoriteId((prevFavorites) => [...prevFavorites, books.id]);
                    console.log('Книга добавлена в избранное:', bookId);
                } catch (e) {
                    console.error('Ошибка при добавлении книги в избранное:', e);
                }
            }
        },
        [favoriteId],
    );

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <MainLayout auth={auth}>
            <div className="container mx-auto p-4">
                {/* Основной контейнер */}
                <div className="flex flex-col gap-8 md:flex-row">
                    {/* Левая часть: картинка */}
                    <div className="md:w-1/3">
                        <img
                            src={books.cover_image || 'https://via.placeholder.com/300'} // Если нет картинки, используем placeholder
                            alt={books.title}
                            className="h-auto w-full rounded-lg shadow-md"
                        />
                    </div>

                    {/* Правая часть: информация о книге */}
                    <div className="md:w-2/3">
                        {/* Заголовок */}
                        <h1 className="mb-2 text-3xl font-bold text-gray-800">{books.title}</h1>
                        <h1 className="tetxt-sm mb-4 font-bold text-gray-800">Автор: {books.author}</h1>
                        {/* Рейтинг */}
                        <div className="mb-4 flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Описание */}
                        <p className="mb-4 text-gray-600">{books.description || 'Описание книги недоступно.'}</p>

                        {/* Доступность */}
                        <div className="mb-4">
                            <span
                                className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                                    books.available ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                                }`}
                            >
                                {books.available ? 'Доступна' : 'Недоступна'}
                            </span>
                        </div>

                        {/* Кнопки */}
                        <div className="flex gap-4">
                            <button className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600">
                                <a href={pdfUrl}>Прочитать</a>
                            </button>
                            <button
                                onClick={handleToggleFavorite}
                                className="rounded bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
                            >
                                {favoriteId.includes(books.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default BookShow;
