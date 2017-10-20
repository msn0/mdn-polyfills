import entries from './entries';

if (typeof Object.entries !== 'function') {
    Object.entries = entries;
}
