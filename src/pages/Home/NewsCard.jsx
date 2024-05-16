import { Link } from "react-router-dom";


const NewsCard = ({ aNews }) => {

    const { title, details, image_url, _id } = aNews;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16">
                <h2 className="card-title mt-5">{title}</h2>

                <div className="card-body">
                    <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>

                    {
                        details.length > 200 ? <p className="text-[16px] text-justify">{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More</Link></p > : <p className="text-[16px] text-justify" >{details}</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default NewsCard;