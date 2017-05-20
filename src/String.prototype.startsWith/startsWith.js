export default function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
}
