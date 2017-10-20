export default function(undefined) {
    var Temp = function() {};
    return function (prototype, propertiesObject) {
        if (prototype !== Object(prototype)) {
            throw TypeError(
                'Argument must be an object, or null'
            );
        }
        Temp.prototype = prototype || {};
        var result = new Temp();
        Temp.prototype = null;
        if (propertiesObject !== undefined) {
            Object.defineProperties(result, propertiesObject);
        }

        // to imitate the case of Object.create(null)
        if (prototype === null) {
            result.__proto__ = null;
        }
        return result;
    };
};
