import { useEffect, useState } from "react";
import ShowBooks from "./ShowBooks/ShowBooks";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books, 'frombook')

    return (
        <section className="pt-24 pb-10">
            <div>
                <h2 className="text-4xl text-center font-bold">Book List</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-16">
                {
                    books.map(b => <ShowBooks
                        key={b.bookId}
                        b={b}
                    ></ShowBooks>)
                }
            </div>
        </section>
    );
};

export default Books;