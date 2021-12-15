import React from 'react';
import st from './MenuLink.module.css';
import {NavLink, useMatch, useResolvedPath} from 'react-router-dom';

interface MenuLinkProps {
    way: string,
    name: string
}

const MenuLink: React.FC<MenuLinkProps> = (props) => {
    const match = useMatch({path: useResolvedPath(props.way).pathname, end:true});
    return <NavLink
        to={props.way}
        className={match ? st.active: st.link}>
        {props.name}
    </NavLink>
}

export default MenuLink;