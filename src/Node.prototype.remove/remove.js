export default function remove() {
    if (this.parentNode !== null) {
        this.parentNode.removeChild(this);
    }
}
