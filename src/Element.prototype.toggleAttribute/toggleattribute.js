export default function(name, force) {
    var forcePassed = arguments.length === 2;
    var forceOn = !!force;
    var forceOff = forcePassed && !force;

    if (this.getAttribute(name) !== null) {
        if (forceOn) return true;

        this.removeAttribute(name);
        return false;
    } else {
        if (forceOff) return false;

        this.setAttribute(name, "");
        return true;
    }
};
