
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import Read from './Read/Read';
import Wishlist from './Wishlist/Wishlist';

const ListBooks = () => {

    const [readBookList, setReadBookList] = useState([]);
    const [wishBookList, setWishBookList] = useState([]);

    const [displayRead, setDisplayread] = useState([]);


    useEffect(() => {
        const readBookList = JSON.parse(localStorage.getItem("books")) || [];
        setReadBookList(readBookList);
        setDisplayread(readBookList);

    }, [])

    useEffect(() => {
        const wishBookList = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishBookList(wishBookList);
    }, [])


    const sortDataByRating = filter => {

        const data = displayRead;

        if (filter == 'rating') {
            data.sort((x, y) => {
                return y.rating - x.rating;
            });
            setDisplayread(data);
            console.table(data)
            console.log(data)
        }
        else if (filter === 'totalPages') {
            data.sort((x, y) => {
                return x.totalPages - y.totalPages;
            });
            setDisplayread(data);
            console.table(data)
            console.log(data)
        } else if (filter === 'yearOfPublishing') {
            data.sort((x, y) => {
                return x.yearOfPublishing - y.yearOfPublishing;
            });
            setDisplayread(data);
            console.table(data)
            console.log(data)
        }

        // setDisplayread(data)
        console.log(displayRead)

    }

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
                        <li onClick={() => sortDataByRating('rating')}><a>Rating</a></li>
                        <li onClick={() => sortDataByRating('totalPages')}><a>Number of Page</a></li>
                        <li onClick={() => sortDataByRating('yearOfPublishing')}><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-4">
                <Tabs>
                    <TabList>
                        <Tab >
                            <div>
                                <h2>Read</h2>
                            </div>
                        </Tab>
                        <Tab >
                            <div>
                                <h2>Wish List</h2>
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            {
                                displayRead.map(readBook => <Read
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
