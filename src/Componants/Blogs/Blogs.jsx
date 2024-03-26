// import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
const Blogs = () => {

    const notify = () => toast("Wow so easy !");
    return (
        <div>
            <h2 className="text-center">Blogs</h2>
            <div>
                <button onClick={notify}>Notify !</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Blogs;