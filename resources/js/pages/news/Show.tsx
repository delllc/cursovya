import { MainLayout } from '@/layouts/news/layout';
import { Link } from '@inertiajs/react';

const NewsShow = ({ newsItem, auth }) => {
    return (
        <MainLayout auth={auth}>
            {/*<div className="container mx-auto p-4">*/}
            {/*    <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>*/}
            {/*    <p className="text-gray-700">{newsItem.desc}</p>*/}
            {/*    <Link href={route('news')} className="text-blue-500 hover:underline mt-4 inline-block">*/}
            {/*        Вернуться к списку новостей*/}
            {/*    </Link>*/}
            {/*</div>*/}

            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                {/* Главный контейнер */}
                <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
                    {/* Заголовок новости */}
                    <h1 className="mb-4 text-3xl font-bold text-gray-800">{newsItem.title}</h1>
                    {console.log(newsItem)}
                    {/* Дата публикации */}
                    <p className="mb-6 text-sm text-gray-500">{newsItem.date}</p>

                    {/* Описание новости */}
                    <p className="mb-6 leading-relaxed text-gray-600">{newsItem.desc}</p>

                    {/* Кнопка "Назад" */}
                    <Link
                        href={route('news')}
                        className="inline-block rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                    >
                        Назад к новостям
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
};

export default NewsShow;
