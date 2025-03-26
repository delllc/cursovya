import SearchBar from '@/components/SearchBar';
import BookCard from '@/components/ui/BookCard';
import Heading from '@/components/ui/heading';
import { MainLayout } from '@/layouts/news/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
    cover_image?: string;
}
const Library = ({ auth }) => {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        available: null,
        search: '', // Поисковый запрос
    });

    // Функция для получения книг
    const fetchBooks = async () => {
        try {
            const response = await axios.get('/books', {
                params: filters, // Отправляем текущие фильтры
            });

            // Убедитесь, что response.data.books является массивом
            if (Array.isArray(response.data.books)) {
                setBooks(response.data.books); // Устанавливаем книги
            } else {
                console.error('Response data is not an array:', response.data);
                setBooks([]); // Устанавливаем пустой массив в случае ошибки
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            setBooks([]); // Устанавливаем пустой массив в случае ошибки
        }
    };
    // Загрузка книг при изменении фильтров
    useEffect(() => {
        fetchBooks();
    }, [filters]);

    // Обработчик поиска
    const handleSearch = (term) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            search: term, // Обновляем поисковый запрос
        }));
    };
    useEffect(() => {
        axios
            .get('/category')
            .then((response) => setCategories(response.data))
            .catch((e) => console.error(e));
    }, []);
    // @ts-ignore
    return (
        <MainLayout auth={auth} className="flex">
            <div className="flex min-h-screen bg-gray-50">
                {/* Левая панель */}
                <div className="w-64 bg-white p-4 shadow-md">
                    {/* Блок поиска */}
                    <div className="mb-4">
                        <SearchBar
                            onSearch={handleSearch}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Блок категорий */}
                    <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-gray-700">Категории:</h4>
                        <div className="flex flex-col gap-1">
                            {categories.map((data) => (
                                <button
                                    key={data.id}
                                    onClick={() =>
                                        setFilters((prevFilter) => ({
                                            ...prevFilter,
                                            category: prevFilter.category === '' ? data.category : '',
                                        }))
                                    }
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                                        filters.category === data.category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    {data.category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Чекбокс */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="onlyFavorites"
                            checked={filters.available !== null}
                            onChange={() =>
                                setFilters((prevFilters) => ({
                                    ...prevFilters,
                                    available: prevFilters.available === null ? true : null,
                                }))
                            }
                            className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-400"
                        />
                        <label htmlFor="onlyFavorites" className="text-sm text-gray-700">
                            Показать доступные книги
                        </label>
                    </div>
                </div>
            </div>
            {/* Правая панель */}
            <div className="mt-5 ml-5">
                <Heading size="large">Книги</Heading>
                <div className="mt-5 flex">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <BookCard id={book.id} key={book.id} book={book} onToggleFavorite={() => handleToggleFavorite(book.id)} />
                        ))
                    ) : (
                        <p className="p-5 text-2xl">Нет доступных книг.</p>
                    )}
                </div>
            </div>
            {/*</div>*/}
        </MainLayout>
    );
};

export default Library;
