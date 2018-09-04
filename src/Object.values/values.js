export default function values(target) {
    const props = Object.keys( target );
    let i = props.length;
    const res = new Array(i); // preallocate the Array
    while (i--) {
        res[i] = target[props[i]];
    }

    return res;
}
