import React from 'react';
import st from './Menu.module.css'
import MenuLink from "../MenuLink/MenuLink";

interface MenuProps {
    types: string[];
    setCurrentType: (type: string)=>void;
    active: string;
}

const Menu: React.FC<MenuProps> = (props) => {
    return (
        <div>
            <h1 className={st.title}>Choose what you want to convert:</h1>
            <div className={st.navigation}>
                {props.types.map((type, index) =>
                   <MenuLink key={index} type={type} setCurrentType={props.setCurrentType} active={props.active}/>
                )}
            </div>
        </div>
    );
}

export default Menu;