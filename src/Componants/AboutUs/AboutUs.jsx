
import { useLoaderData } from "react-router-dom";
import WriterCard from "./WriterCard/WriterCard";


const AboutUs = () => {
    const writers = useLoaderData();

    return (
        <section>
            <div className="py-20 text-center border rounded-xl">
                <div className="stats shadow ">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">5897</div>
                        <div className="stat-title">Online User</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">3578</div>
                        <div className="stat-title">Book To Read</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
            <div>
                <div className="text-center py-8">
                    <h2 className="text-6xl font-bold ">THE TOP WRITERS OF 2023</h2>
                    <p className="text-xl py-6">
                        The Top Authors Books are available and are presented in the Book Guide and in Books Library where every user can purchase the books easily. <br />
                        The top writers and authors books are also published here. Dont miss the change of getting those precious books from here.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8">
                {
                    writers.map(writer => <WriterCard
                        key={writer.rank}
                        writer={writer}
                    ></WriterCard>)
                }
            </div>
        </section>
    );
};

export default AboutUs;