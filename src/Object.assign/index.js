import assign from './assign';

if (typeof Object.assign !== 'function') {
    Object.assign = assign;
}
