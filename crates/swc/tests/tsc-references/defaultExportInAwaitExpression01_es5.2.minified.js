var x = new Promise(function(resolve, reject) {
    resolve({});
});
export default x;
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
import x from "./a";
_async_to_generator(function() {
    var value;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    4,
                    x
                ];
            case 1:
                return value = _state.sent(), [
                    2
                ];
        }
    });
})();
