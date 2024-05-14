
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(ref => ref.json())
        .then(data => setCatagories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl">All Catagories</h2>
            {
                catagories.map(category => <NavLink to={`category/${category.id}`} className='block py-2 pl-11' key={category.id}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;