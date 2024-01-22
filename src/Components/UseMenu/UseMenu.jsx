import { useEffect } from "react";
import { useState } from "react";


const UseMenu = () => {
    const[menus, setMenus] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setMenus(data);
            setLoading(false)
        })
    },[]);
    return [menus, loading]
};

export default UseMenu;