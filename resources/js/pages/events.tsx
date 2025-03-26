import { MainLayout } from '@/layouts/news/layout';
import { PageProps } from '@/types';

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    imageUrl?: string;
    category: string;
}

export default function EventsPage({auth}:PageProps) {
    // This would come from your backend
    const events: Event[] = [
        {
            id: 1,
            title: "Book Reading: The Great Gatsby",
            description: "Join us for a special reading of F. Scott Fitzgerald's masterpiece",
            date: "2024-03-15",
            location: "Main Library Hall",
            imageUrl: "https://example.com/gatsby-event.jpg",
            category: "Book Reading"
        },
        {
            id: 2,
            title: "Children's Story Time",
            description: "Weekly story time for children aged 5-10",
            date: "2024-03-16",
            location: "Children's Section",
            imageUrl: "https://example.com/story-time.jpg",
            category: "Children"
        },
        // Add more events as needed
    ];

    return (
        <MainLayout auth={auth}>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Library Events</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

function EventCard({ event }: { event: Event }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {event.imageUrl && (
                <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {event.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">📅 {new Date(event.date).toLocaleDateString()}</span>
                    <span>📍 {event.location}</span>
                </div>
            </div>
        </div>
    );
}
