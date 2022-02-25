import { render } from 'solid-js/web';
import { Counter } from './Counter';

const dispose = render(() => <Counter />, document.getElementById('root')!);
if (import.meta.hot) {
    import.meta.hot.dispose(dispose);
}