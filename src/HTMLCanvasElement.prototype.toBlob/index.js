import toBlob from './toBlob';

if (!HTMLCanvasElement.prototype.toBlob) {
    HTMLCanvasElement.prototype.toBlob = toBlob;
}
