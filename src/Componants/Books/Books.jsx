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
        <section className="my-12">
            <div >
                <h2 className="text-center text-5xl font-semibold mb-8">Books</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book => <ShowBooks
                        key={book.id}
                        book={book}
                    ></ShowBooks>)
                }
            </div>
        </section>
    );
};

export default Books;