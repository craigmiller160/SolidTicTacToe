import { createSignal, Setter } from 'solid-js';
import './Square.scss';

interface Props {
    readonly top?: boolean;
    readonly vCenter?: boolean;
    readonly bottom?: boolean;
    readonly left?: boolean;
    readonly hCenter?: boolean;
    readonly right?: boolean;
}

const createToggle = (setValue: Setter<string>) => () => setValue((old) => {
    if (old === '') {
        return 'X';
    } else if (old === 'X') {
        return 'O';
    } else {
        return '';
    }
});

export const Square = (props: Props) => {
    const [value, setValue] = createSignal('');
    const toggle = createToggle(setValue);
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