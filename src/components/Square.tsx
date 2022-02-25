import { createSignal } from 'solid-js';
import './Square.scss';

interface Props {
    readonly top?: boolean;
    readonly vCenter?: boolean;
    readonly bottom?: boolean;
    readonly left?: boolean;
    readonly hCenter?: boolean;
    readonly right?: boolean;
}

export const Square = (props: Props) => {
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
    const classes = {
        Square: true,
        Top: props.top,
        Bottom: props.bottom,
        V_Center: props.vCenter,
        Left: props.left,
        H_Center: props.hCenter,
        Right: props.right
    };

    return (
        <div classList={classes} onClick={toggle}>
            <h1>{value()}</h1>
        </div>
    );
}