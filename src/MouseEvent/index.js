import MouseEvent from './MouseEvent';

try {
    new MouseEvent('test');
} catch (e) {
    window.MouseEvent = MouseEvent;
}
