
import { useEffect, useState } from "react";
import BarChart from "./BarChart/BarChart"

const PageToRead = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    console.log(books)
    return (
        <div>
            {
                books.map(book => <BarChart
                    key={book.bookId}
                    book={book}
                ></BarChart>)
            }
        </div >
    );
};

export default PageToRead;