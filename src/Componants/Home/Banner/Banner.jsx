
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
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;