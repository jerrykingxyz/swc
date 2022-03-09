import * as swcHelpers from "@swc/helpers";
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
const React = require('react');
export default function Component(props) {
    let condition1;
    if (condition1) {
        return /*#__PURE__*/ React.createElement(ChildComponent, swcHelpers.extends({}, props));
    } else {
        return /*#__PURE__*/ React.createElement(ChildComponent, swcHelpers.extends({}, props, {
            property1: "NewString"
        }));
    }
};
function ChildComponent({ property1  }) {
    return /*#__PURE__*/ React.createElement("span", null, property1);
}
