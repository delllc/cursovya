import { useEffect, useState } from 'react';
function NewsDetail({ id }) {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(route('news.show', id)) // Ziggy для динамического маршрута
            .then((response) => {
                if (!response.ok) {
                    throw new Error('News not found');
                }
                return response.json();
            })
            .then((data) => {
                setNews(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.desc}</p>
        </div>
    );
}

export default NewsDetail;
