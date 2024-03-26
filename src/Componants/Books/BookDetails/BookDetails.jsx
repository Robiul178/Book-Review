import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDataInToLocalStorage, saveWishListData } from "../../utility/localStorage";


const BookDetails = () => {
    const loadedBook = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const book = loadedBook.find(book => book.bookId === intId);
    const { review, image, bookName, author, category, totalPages, rating, publisher, yearOfPublishing } = book;

    const handleReadBook = () => {
        toast.success("Book Added to the read list!");
        saveDataInToLocalStorage(book);
    };

    const handleBookWishlist = () => {
        toast.success("Book Added to the Wish list!");
        saveWishListData(book);

    };

    return (
        <section className="lg:flex p-4 gap-10 my-6">

            <ToastContainer stacked ></ToastContainer>
            <div className="">
                <img
                    width={425}
                    height={565}
                    src={image} alt="" />
            </div>
            <div className="max-w-[800px]">
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
                <div className="flex gap-8 py-4">
                    <div>
                        <p className="pb-2">Number of Pages </p>
                        <p className="pb-2">Publisher </p>
                        <p className="pb-2">Year of Publishing </p>
                        <p className="pb-2">Rating </p>
                    </div>
                    <div className="font-bold">
                        <p className="pb-2">: {totalPages}</p>
                        <p className="pb-2">: {publisher}</p>
                        <p className="pb-2">: {yearOfPublishing}</p>
                        <p className="pb-2">: {rating}</p>
                    </div>
                </div>
                <div className="border-t-2 pt-4">
                    <button onClick={handleReadBook} className="btn btn-outline me-4">Read</button>
                    <button onClick={handleBookWishlist} className="btn btn-info btn-primary">Wishlist</button>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;