// import { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const SearchBar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setSHowSuggestions] = useState(false);
//
//
//     const handleInputChange = async (value) => {
//         setSearchTerm(value)
//
//         if (value.length > 0) {
//             try {
//                 const response = await axios.get('/books/search-suggestions', {
//                     params: {query: value},
//                 });
//                 setSuggestions(response.data)
//                 setSHowSuggestions(true)
//             } catch (error) {
//                 console.error('Error fetching suggestions', error)
//             }
//         } else {
//             setSuggestions([]);
//             setSHowSuggestions(false)
//         }
//     }
//
//     useEffect(() => {
//         const delayDebounceFN = setTimeout(() => {
//             onSearch(searchTerm.trim())
//         }, 300)
//
//         return () => clearTimeout(delayDebounceFN)
//     }, [searchTerm, onSearch]);
//
//     const handleSuggestionClick = (suggestion) => {
//         setSearchTerm(suggestion);
//         setSuggestions([])
//         setSHowSuggestions(false)
//         onSearch(suggestion)
//     }
//
//
//
//     return (
//         <div style={{ position: 'relative', width: '100%' }}>
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Поиск по названию или автору..."
//                 style={{ padding: '8px', width: '100%' }}
//             />
//
//             {/* Выпадающий список предложений */}
//             {showSuggestions && suggestions.length > 0 && (
//                 <ul
//                     style={{
//                         position: 'absolute',
//                         top: '100%',
//                         left: 0,
//                         right: 0,
//                         border: '1px solid #ccc',
//                         backgroundColor: '#fff',
//                         zIndex: 10,
//                         maxHeight: '150px',
//                         overflowY: 'auto',
//                     }}
//                 >
//                     {suggestions.map((suggestion, index) => (
//                         <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             style={{
//                                 padding: '8px',
//                                 cursor: 'pointer',
//                                 borderBottom: '1px solid #eee',
//                             }}
//                         >
//                             {suggestion}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };
//
//
// export default SearchBar;


import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, className }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Обновляем родительский компонент при изменении текста
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearch(searchTerm.trim()); // Передаем поисковый запрос в родительский компонент
        }, 300); // Задержка в 300 мс для предотвращения частых запросов

        return () => clearTimeout(delayDebounceFn); // Очищаем таймер при размонтировании или новом вводе
    }, [searchTerm, onSearch]);

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск по названию или автору..."
                style={{ padding: '8px', width: '100%' }}
                className={className}
            />
        </div>
    );
};

export default SearchBar;
