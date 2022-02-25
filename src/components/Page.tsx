import './Page.scss';
import { Board } from './Board';
import { Winner } from './Winner';

export const Page = () => (
    <div className="Page">
        <Board />
        <Winner />
    </div>
);