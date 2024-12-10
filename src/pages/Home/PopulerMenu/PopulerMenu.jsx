import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopulerMenu = () => {
    const [menu, setMenu]=useState();
    fetch('menu.json')
    .then(res=>res.json())
    .then(data=>{
        const populerTtem= data.filter(item => item.category==='popular');
      setMenu(populerTtem)
    })
    return (
        <section>
           <SectionTitle
           heading={"From our menu"}
           subheading={"Populer item"}
           ></SectionTitle> 

           <div>
            {
                menu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
           </div>
        </section>
        
    );
};

export default PopulerMenu;