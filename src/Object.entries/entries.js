export default function assign(target) {
    const props = Object.keys( target );
    let i = props.length;
    const res = new Array(i); // preallocate the Array
    while (i--) {
        res[i] = [props[i], target[props[i]]];
    }

    return res;
}
