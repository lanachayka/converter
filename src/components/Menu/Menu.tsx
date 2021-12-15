import React from 'react';
import st from './Menu.module.css'
import MenuLink from '../MenuLink/MenuLink';

const Menu: React.FC = () => {
    return (
        <div>
            <h1 className={st.title}>Choose what you want to convert:</h1>
            <nav className={st.navigation}>
                <MenuLink way="/converter/length" name="Length" />
                <MenuLink way="/converter/weight" name="Weight" />
                <MenuLink way="/converter/temperature" name="Temperature" />
            </nav>
            <hr className={st.line}/>
        </div>
    );
}

export default Menu;