 import React from 'react';
 import st from './MenuLink.module.css';

interface MenuLinkProps {
    type: string;
    setCurrentType: (type: string)=>void;
    active: string;
}

const MenuLink: React.FC<MenuLinkProps> = (props) => {
    return <button
            onClick={()=> props.setCurrentType(props.type)}
            className={props.active===props.type ? st.active : st.link}>{props.type}
           </button>
}

export default MenuLink;