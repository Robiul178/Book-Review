
const Banner = () => {
    return (
        <div className="mt-8">
            <div className="hero max-h-[600px] bg-base-200 rounded-xl p-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        className="-skew-y-12"
                        width={500}
                        src="../../../../public/bookCover.png" />
                    <div>
                        <h1 className="text-6xl font-bold mb-8">Novels to restock <br /> your library</h1>
                        <button className="btn btn-outline text-2xl  hover:bg-green-500 hover:border-white ">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;