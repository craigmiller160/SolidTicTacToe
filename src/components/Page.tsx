import './Page.scss';
import { Board } from './Board';
import { Winner } from './Winner';

export const Page = () => (
    <div className="Page">
        <h1>Tic Tac Toe</h1>
        <Board />
        <Winner />
    </div>
);