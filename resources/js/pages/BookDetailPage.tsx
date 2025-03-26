import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

function BookDetail({ id }) {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [favoriteId, setFavoriteId] = useState([]);

    const fetchFavorites = useCallback(async () => {
        try {
            const response = await axios.get('/favorites');
            const res = response.data.map((book) => book.id);
            setFavoriteId(res);
            console.log('Favorite IDs:', res);
        } catch (e) {
            console.error(e);
        }
    }, []); // Пустой массив зависимостей

    const handleToggleFavorite = useCallback(
        async (bookId: number) => {
            const isAlreadyFavorited = favoriteId.includes(bookId);

            if (isAlreadyFavorited) {
                try {
                    // Удаляем книгу с сервера
                    await axios.delete(`/books/${bookId}/favorite`);
                    // Обновляем состояние локально
                    setFavoriteId((prevFavorites) => prevFavorites.filter((id) => id !== bookId));
                    console.log('Книга удалена из избранного:', bookId);
                } catch (e) {
                    console.error('Ошибка при удалении книги из избранного:', e);
                }
            } else {
                try {
                    // Добавляем книгу на сервер
                    await axios.post(`/books/${bookId}/favorite`);
                    // Обновляем состояние локально
                    setFavoriteId((prevFavorites) => [...prevFavorites, bookId]);
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

    useEffect(() => {
        fetch(route('books.show', id)) // Ziggy для динамического маршрута
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Book not found');
                }
                return response.json();
            })
            .then((data) => {
                setBook(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    // Фейковый рейтинг
    const fakeRating = Math.floor(Math.random() * 5) + 1; // Генерация числа от 1 до 5

    return (
        <div className="container mx-auto p-4">
            {/* Основной контейнер */}
            <div className="flex flex-col gap-8 md:flex-row">
                {/* Левая часть: картинка */}
                <div className="md:w-1/3">
                    <img
                        src={book.cover_image || 'https://via.placeholder.com/300'} // Если нет картинки, используем placeholder
                        alt={book.title}
                        className="h-auto w-full rounded-lg shadow-md"
                    />
                </div>

                {/* Правая часть: информация о книге */}
                <div className="md:w-2/3">
                    {/* Заголовок */}
                    <h1 className="mb-4 text-3xl font-bold text-gray-800">{book.title}</h1>

                    {/* Рейтинг */}
                    <div className="mb-4 flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ${index < fakeRating ? 'text-yellow-500' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">{fakeRating} / 5</span>
                    </div>

                    {/* Описание */}
                    <p className="mb-4 text-gray-600">{book.desc || 'Описание книги недоступно.'}</p>

                    {/* Доступность */}
                    <div className="mb-4">
                        <span
                            className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                                book.available ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                            }`}
                        >
                            {book.available ? 'Доступна' : 'Недоступна'}
                        </span>
                    </div>

                    {/* Кнопки */}
                    <div className="flex gap-4">
                        <button className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600">Прочитать</button>
                        <button
                            onClick={handleToggleFavorite}
                            className="rounded bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
                        >
                            {favoriteId.includes(book.id) === book.id ? 'Удалить из избранного' : 'Добавить в избранное'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
