import { createSignal } from 'solid-js';
import './style.scss';

export const Counter = () => {
    const [count, setCount] = createSignal(0);
    const increment = () => setCount(count() + 1);

    return (
        <div className="Wrapper">
            <button type="button" onClick={increment}>
                {count()}
            </button>
        </div>
    );
};