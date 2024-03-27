import { MdStarRate } from "react-icons/md";
const WriterCard = ({ writer }) => {
    const { author, rating, category, yearOfPublishing, bookName } = writer;
    return (
        <section>
            <div>
                <div className="card border">
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className="font-bold">Name :</span>
                            {author}</h2>
                        <p className="flex"> <MdStarRate></MdStarRate>
                            {rating}</p>
                        <p>
                            <span className="font-bold">
                                Best Book:
                            </span>
                            {bookName}
                        </p>
                        <div className="flex justify-between p-4 border rounded-xl">
                            <span>
                                Category : {category}
                            </span>
                            <span>
                                Publishing year: {yearOfPublishing}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WriterCard;