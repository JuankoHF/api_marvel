import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router'
import './Header.scss';

export default function Header() {
    
    const currentPath = useLocation();
    const finalCurrentPath = currentPath.pathname.replace("/", "");

    const [activeItem, setActiveItem] = useState(finalCurrentPath);

    //const history = useHistory();

    const itemClick = (e, { name }) => {
        setActiveItem(name);
        //history.push(name);
    };

    
    return(
        <div className='header-menu'>
            <Menu>
                <Link to={'/'}>
                    <Menu.Item name= 'Inicio' active={activeItem === 'Inicio'} 
                        onClick={itemClick}
                    />   
                </Link>                 
                <Link to={'/series'}>
                    <Menu.Item name= 'Series' active={activeItem === 'Series'} 
                        onClick={itemClick} 
                    />
                </Link>
                
                <Link to={'/comics'}>
                    <Menu.Item name= 'Comics' active={activeItem === 'Comics'} 
                        onClick={itemClick}
                    />
                </Link>
            </Menu>
        </div>
    );
    
}