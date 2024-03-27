import { useEffect } from "react";
import { useState } from "react";
import ShowBooks from "./ShowBooks/ShowBooks";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <section className="pt-72 pb-10">
            <div >
                <h2 className="text-center text-5xl font-semibold mb-8">Books</h2>
            </div>
            <div>

            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-16">
                {
                    books.map(book => <ShowBooks
                        key={book.bookId}
                        book={book}
                    ></ShowBooks>)
                }
            </div>
        </section>
    );
};

export default Books;