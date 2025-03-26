import { Link } from '@inertiajs/react';

interface Book {
    id: number;
    title: string;
    author: string;
    cover_image?: string;
}

const BookCard = ({ book   }) => {


    return (



        <div key={book.id} style={{ width: '200px', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', marginRight: '10px' }} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
           <img
              src={book.cover_image || 'https://via.placeholder.com/150'}
               alt={book.title}
               loading="lazy"
              style={{ width: '100%', height: '150px', objectFit: 'contain' }}
           />
           <h4 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h4>
           <p className="text-sm text-gray-600 line-clamp-2">{book.description}</p>
           <p className="text-xs text-gray-500 mt-2" >Автор: {book.author}</p>

            <Link href={route('books.show', book.id)} className="mt-4 block text-center w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300">Прочитать</Link>
        </div>



    );

};

export default BookCard;
