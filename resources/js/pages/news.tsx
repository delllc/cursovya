import { Card } from '@/components/ui/card';
import { LeftCard } from '@/components/ui/left-card';
import LeftObjectLayout from '@/layouts/LeftObjectLayout';
import { CardsLayout } from '@/layouts/news/CardsLayout';
import { MainLayout } from '@/layouts/news/layout';
import NewsBlockLayout from '@/layouts/news/NewsLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PageProps } from '@/types';
export default function NewsPage({ props, auth, news }:PageProps) {
    const [newsCards, setNewsCards] = useState([]);
    const [leftObject, setLeftObject] = useState([]);

    useEffect(() => {
        axios
            .get('http://app.test/news')
            .then((response) => {
                setNewsCards(response.data);
            })
            .catch((error) => {
                console.error('ooops(((', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://app.test/leftobject').then((response) => {
            setLeftObject(response.data);
        });
    }, []);

    return (
        <MainLayout auth={auth}>
            <div className="flex">
                <div>
                    <CardsLayout />

                    <LeftObjectLayout>
                        {leftObject.map((leftObject) => (
                            <LeftCard title={leftObject.title} desc={leftObject.desc} />
                        ))}
                    </LeftObjectLayout>
                </div>
                <div>
                    <NewsBlockLayout>
                        {newsCards.map((card) => (
                            <Card
                                id={card.id}
                                title={card.title}
                                date={card.date}
                                desc={card.desc}
                                views={card.views}
                                comment={card.comment}
                            />
                        ))}
                    </NewsBlockLayout>
                </div>
            </div>
        </MainLayout>
    );
}
