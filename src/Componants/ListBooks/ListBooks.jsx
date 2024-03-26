// import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { useEffect } from "react";
import { useState } from "react";
// import ListBookCard from "./listBookCard/ListBookCard";
import Read from './Read/Read';
import Wishlist from './Wishlist/Wishlist';

const ListBooks = () => {

    // const [localStorageBook, setLocalStorageBook] = useState([]);
    const [readBookList, setReadBookList] = useState([]);
    const [wishBookList, setWishBookList] = useState([]);

    // useEffect(() => {
    //     const getBook = JSON.parse(localStorage.getItem("books")) || [];
    //     setLocalStorageBook(getBook);


    // }, []);
    useEffect(() => {
        const readBookList = JSON.parse(localStorage.getItem("books")) || [];
        setReadBookList(readBookList);

    }, [])
    useEffect(() => {

        const wishBookList = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishBookList(wishBookList)
    }, [])


    console.log('readBookList', readBookList)
    console.log('wishBookList', wishBookList)

    return (
        <div className="md:p-8">
            <div className="py-4">
                <Tabs>
                    <TabList>
                        <Tab to='/read'>
                            <div>
                                <h2>Read</h2>
                            </div>
                        </Tab>
                        <Tab to='/wisthlist'>
                            <div>
                                <h2>wish</h2>
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            {
                                readBookList.map(readBook => <Read
                                    key={readBook.bookId}
                                    readBook={readBook}
                                ></Read>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {
                            wishBookList.map(wishList => <Wishlist
                                key={wishList.bookId}
                                wishList={wishList}
                            ></Wishlist>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
            {/* <div>
                {
                    localStorageBook.map(book => <ListBookCard
                        key={book.bookId}
                        book={book}
                    ></ListBookCard>)
                }
            </div> */}
        </div>
    );
};

export default ListBooks;
