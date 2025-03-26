import { MinCard } from '@/components/ui/min-card';

export function CardsLayout() {
    return (
        <div className="flex w-[423px] flex-wrap mt-[25px]">
            <MinCard title="стать читателем" />
            <MinCard title="заказать книгу" />
            <MinCard title="продлить книгу" />
            <MinCard title="посмотреть новинки" />
        </div>
    );
}
