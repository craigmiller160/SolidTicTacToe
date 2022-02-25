import './Board.scss';
import { Square } from './Square';

export const Board = () => (
    <div className="Board">
        <div className="Row">
            <Square top left />
            <Square top hCenter />
            <Square top right />
        </div>
        <div className="Row">
            <Square vCenter left />
            <Square vCenter hCenter />
            <Square vCenter right />
        </div>
        <div className="Row">
            <Square bottom left />
            <Square bottom hCenter />
            <Square bottom right />
        </div>
    </div>
);