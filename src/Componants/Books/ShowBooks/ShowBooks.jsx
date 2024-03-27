
import { useState } from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";


const ShowBooks = ({ book }) => {
    const [tags, setTags] = useState(book.tags);
    const { bookId, image, bookName, author, category, rating } = book;


    return (
        <section >
            <Link to={`/details/${bookId}`}>
                <div className="card  bg-base-100 border-2 p-4">
                    <figure className="px-10 pt-10 bg-base-200 rounded-xl">
                        <img
                            className="w-[200px] h-[300px] pb-4"
                            src={image} />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            {
                                tags.map((tag, i) =>
                                    <button
                                        key={i}
                                        className="btn text-green-500 font-semibold"
                                    >{tag}</button>
                                )
                            }
                        </div>
                        <h2 className="text-2xl font-semibold">{bookName}</h2>
                        <p className="border-b-2 border-dashed pb-4">By : <span className="ps-2">{author}</span> </p>
                        <div className="flex justify-between">
                            <div>{category}</div>
                            <div className="flex gap-2">
                                <span>{rating}</span>
                                <span>
                                    <MdOutlineStarRate className="mt-1"></MdOutlineStarRate>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default ShowBooks;