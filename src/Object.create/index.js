import create from './create';

if (typeof Object.create !== 'function') {
    Object.create = create();
}
