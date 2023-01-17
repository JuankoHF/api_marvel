import { Container as Content } from 'semantic-ui-react';
import './Container.scss';

export default function Container({children, bg}) {
    return (
        <div className={bg !== 'Ligth' ? 'continer_se': null}>
            <Content>{children}</Content>
        </div>
    );

}