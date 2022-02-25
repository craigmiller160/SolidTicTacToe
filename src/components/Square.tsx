import { createSignal } from 'solid-js';
import './Square.scss';

export const Square = () => {
    const [value, setValue] = createSignal('');
    const toggle = () => setValue((old) => {
        if (old === '') {
            return 'X';
        } else if (old === 'X') {
            return 'O';
        } else {
            return '';
        }
    })
    return (
        <div className="Square" onClick={toggle}>
            <h1>{value()}</h1>
        </div>
    );
}