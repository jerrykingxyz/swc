// @target: es2015
// @lib: esnext
// @filename: F1.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
var f1 = function() {
    var _ref = _wrap_async_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2
            ];
        });
    });
    return function f1() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F2.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
var f2 = function() {
    var _ref = _wrap_async_generator(function() {
        var x;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4
                    ];
                case 1:
                    x = _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function f2() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F3.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
var f3 = function() {
    var _ref = _wrap_async_generator(function() {
        var x;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        1
                    ];
                case 1:
                    x = _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function f3() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F4.ts
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
import _ts_values from "@swc/helpers/src/_ts_values.mjs";
var f4 = function() {
    var _ref = _wrap_async_generator(function() {
        var x;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        5,
                        _ts_values(_async_generator_delegate(_async_iterator([
                            1
                        ]), _await_async_generator))
                    ];
                case 1:
                    x = _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function f4() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F5.ts
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
import _ts_values from "@swc/helpers/src/_ts_values.mjs";
var f5 = function() {
    var _ref = _wrap_async_generator(function() {
        var x;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        5,
                        _ts_values(_async_generator_delegate(_async_iterator(_wrap_async_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            1
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        })()), _await_async_generator))
                    ];
                case 1:
                    x = _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function f5() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F6.ts
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
var f6 = function() {
    var _ref = _wrap_async_generator(function() {
        var x;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _await_async_generator(1)
                    ];
                case 1:
                    x = _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function f6() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F7.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
var f7 = function() {
    var _ref = _wrap_async_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                1
            ];
        });
    });
    return function f7() {
        return _ref.apply(this, arguments);
    };
}();
