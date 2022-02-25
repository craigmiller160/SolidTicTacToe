import { render } from 'solid-js/web';
import { Page } from './components/Page';

const dispose = render(() => <Page />, document.getElementById('root')!);
if (import.meta.hot) {
    import.meta.hot.dispose(dispose);
}