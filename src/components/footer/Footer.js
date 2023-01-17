import React from 'react';
import './Footer.scss';
import Jnk from './Jnk';

export default function Footer() {
   
    return (

        <div className="footer">
            <div className="content_footer">
                <h2>COOKIES</h2>
                <h2>PROTECCIÓN DE DATOS</h2>
                <h2>AVISO LEGAL</h2>
                <h2>CONTACTO</h2> 
            </div>
            <div className="content_footer signature">
                <p>copyright 2022</p>
                <p> | Desarrollado por JNK-WedDEV</p>
            </div>
            <Jnk />
        </div>
        
    );
}