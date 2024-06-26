import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee pauseOnHover={true} autoFill= {true}>
                <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-98" to="/">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;