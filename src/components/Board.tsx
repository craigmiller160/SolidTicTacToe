import './Board.scss';
import { Square } from './Square';

export const Board = () => (
    <div className="Board">
        <div className="Row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="Row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="Row">
            <Square />
            <Square />
            <Square />
        </div>
    </div>
);