// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import ListBookCard from "./listBookCard/ListBookCard";
import { Link } from "react-router-dom";

const ListBooks = () => {
    const [localStorageBook, setLocalStorageBook] = useState([]);

    useEffect(() => {
        const getBook = JSON.parse(localStorage.getItem("books")) || [];
        setLocalStorageBook(getBook)
    }, [])

    return (
        <div className="md:p-8">
            <div className="py-4">
                <button className="btn btn-outline btn-primary me-4">Primary</button>
                <button className="btn btn-outline btn-secondary">Secondary</button>
            </div>
            <div className="w-[200px]">
                <div role="tablist" className="tabs tabs-lifted">
                    <div role="tab" className="tab tab-active">
                        <Link to='/read'>Read</Link>
                    </div>
                    <div role="tab" className="tab ">
                        <Link to='/wishlist'>Wishlist</Link>
                    </div>
                </div>
            </div>
            <div>
                {
                    localStorageBook.map(book => <ListBookCard
                        key={book.bookId}
                        book={book}
                    ></ListBookCard>)
                }
            </div>
        </div>
    );
};

export default ListBooks;
