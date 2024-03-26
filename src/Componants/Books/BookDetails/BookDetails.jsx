import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const loadedBook = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const book = loadedBook.find(book => book.bookId === intId)

    const { review, image, bookName, author, category, totalPages, rating, publisher, yearOfPublishing } = book;

    return (
        <section className="flex gap-10">
            <div>
                <img
                    width={425}
                    height={565}
                    src={image} alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-bold pb-4">{bookName}</h2>
                <p className="border-b-2 pb-3">By : {author}</p>
                <p className="border-b-2 pb-3"> {category}</p>
                <p>
                    <span className="font-bold">Review:</span>{review}
                </p>
                <div className="flex gap-4 border-b-2 py-4">
                    <p className="font-bold mt-2">Tag</p>
                    <div className="text-[#23BE0A] flex gap-4">
                        {
                            book.tags.map((tag) =>
                                <div
                                    key={tag.id}
                                    className="bg-base-200 p-2 rounded-3xl  font-semibold"
                                >#{tag}</div>
                            )
                        }
                    </div>
                </div>


                <div className="flex gap-8 pt-4">
                    <div>
                        <p className="pb-2">Number of Pages :</p>
                        <p className="pb-2">Publisher :</p>
                        <p className="pb-2">Year of Publishing :</p>
                        <p className="pb-2">Rating :</p>
                    </div>
                    <div className="font-bold">
                        <p className="pb-2">{totalPages}</p>
                        <p className="pb-2">{publisher}</p>
                        <p className="pb-2">{yearOfPublishing}</p>
                        <p className="pb-2">{rating}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;