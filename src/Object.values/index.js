import values from './values';

if (typeof Object.values !== 'function') {
    Object.values = values;
}
