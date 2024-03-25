
const ShowBooks = ({ book }) => {

    const { bookName, author, tags, category, rating } = book;
    console.log('from tag', book.tags)

    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div>
                        <button className="btn">{tags}</button>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowBooks;