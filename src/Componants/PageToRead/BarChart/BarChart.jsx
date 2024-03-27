import { useEffect, useState } from "react";
import { BarChart as Bc, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import propTypes from 'prop-types';


const BarChart = () => {

    const [readBookList, setReadBookList] = useState([null]);

    useEffect(() => {
        const readBookList = JSON.parse(localStorage.getItem("books"));
        setReadBookList(readBookList);

    }, [])
    console.log(readBookList)


    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };


    return (
        <div>
            <div>
                <ResponsiveContainer width="100%" height={600}>
                    <Bc
                        width={1300}
                        height={600}
                        data={readBookList}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {readBookList.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </Bc>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

BarChart.propTypes = {
    fill: propTypes.func,
    x: propTypes.func,
    y: propTypes.func,
    width: propTypes.func,
    height: propTypes.func,
}


export default BarChart;