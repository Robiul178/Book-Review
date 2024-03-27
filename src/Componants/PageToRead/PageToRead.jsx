
import { useEffect, useState } from "react";
import BarChart from "./BarChart/BarChart"

const PageToRead = () => {

    const [readBookList, setReadBookList] = useState([]);

    useEffect(() => {
        const readBookList = JSON.parse(localStorage.getItem("books"));
        setReadBookList(readBookList);

    }, [])

    console.log(readBookList)
    return (
        <div className="py-44">
            <BarChart></BarChart>
        </div>
    );
};

export default PageToRead;