import { MdOutlineDateRange } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

import propTypes from 'prop-types';

const ListBookCard = ({ book }) => {

    const {
        image,
        bookName,
        author,
        category,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating } = book;


    return (
        <div className="mb-6">
            <div className="card card-side bg-base-100 border-2 p-6">
                <figure className="bg-base-300 p-6 rounded">
                    <img
                        className="w-[200px] h-[250px]"
                        src={image} alt="book" />
                </figure>
                <div className="card-body">
                    <h2 className="text-4xl font-bold">{bookName}</h2>
                    <span className=" py-2">By : {author}</span>
                    <div className="flex gap-4">
                        <div>
                            <h2 className="text-xl font-bold">Tag</h2>
                        </div>
                        <div className="text-[#23BE0A] flex gap-4">
                            {
                                tags.map(tag =>
                                    <div
                                        key={tag.id}
                                        className="bg-base-200 p-2 rounded-3xl  font-semibold"
                                    >#{tag}</div>
                                )
                            }
                        </div>
                        <div className="flex mt-2">
                            <MdOutlineDateRange className="text-2xl"></MdOutlineDateRange>
                            <p>Year of Publishing : {yearOfPublishing}</p>
                        </div>

                    </div>
                    <div className="flex gap-12 border-b-2 pb-4">
                        <div className="flex gap-2">
                            <FaUsers className="text-2xl"></FaUsers>
                            <span>Publisher :{publisher}</span>
                        </div>
                        <div className="flex gap-2">
                            <FiFileText className="text-2xl"></FiFileText >
                            <span> Page :{totalPages}</span>
                        </div>
                    </div>

                    <div className="flex justify-between p-2">
                        <div>
                            <h2 className="bg-indigo-100 p-3 rounded-3xl text-indigo-400">Category : {category}</h2>
                        </div>
                        <div>
                            <h2 className="bg-green-100 p-3 rounded-3xl text-green-500">Rating : {rating}</h2>
                        </div>
                        <div>
                            <button className="btn bg-green-400 text-white">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListBookCard.propTypes = {
    book: propTypes.func
}

export default ListBookCard;