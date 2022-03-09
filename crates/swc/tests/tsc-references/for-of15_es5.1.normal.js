import * as swcHelpers from "@swc/helpers";
var _iterator = Symbol.iterator;
//@target: ES6
var StringIterator = /*#__PURE__*/ function() {
    "use strict";
    function StringIterator() {
        swcHelpers.classCallCheck(this, StringIterator);
    }
    var _proto = StringIterator.prototype;
    _proto.next = function next() {
        return "";
    };
    _proto[_iterator] = function() {
        return this;
    };
    return StringIterator;
}();
var v;
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator1 = (new StringIterator)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator1.next()).done); _iteratorNormalCompletion = true){
        v = _step.value;
    } // Should fail
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator1.return != null) {
            _iterator1.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
