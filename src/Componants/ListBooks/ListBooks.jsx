// import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
// import ListBookCard from "./listBookCard/ListBookCard";
import Read from './Read/Read';
import Wishlist from './Wishlist/Wishlist';

const ListBooks = () => {

    const [readBookList, setReadBookList] = useState([]);
    const [wishBookList, setWishBookList] = useState([]);


    useEffect(() => {
        const readBookList = JSON.parse(localStorage.getItem("books")) || [];
        setReadBookList(readBookList);

    }, [])
    useEffect(() => {

        const wishBookList = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishBookList(wishBookList)
    }, [])


    return (
        <div className="md:p-8">
            <div className='min-h-[100px] w-full bg-slate-300 rounded-xl my-4'>
                <h2 className='text-center pt-6 text-3xl font-bold'>Books</h2>
            </div>
            <div className='text-center'>
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-600 text-white">Sort By <span>
                        <IoIosArrowDown className='text-2xl' /></span> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of Page</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
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
                                <h2>Wish List</h2>
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

        </div>
    );
};

export default ListBooks;
