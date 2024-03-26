// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";

const ListBooks = () => {
    const [localStorageBook, setLocalStorageBook] = useState([]);
    console.log(localStorageBook)

    useEffect(() => {
        const getBook = JSON.parse(localStorage.getItem("books")) || [];
        setLocalStorageBook(getBook)
    }, [])

    return (
        <div>
            <h2>ListBooks</h2>
        </div>
    );
};

export default ListBooks;