function t(r, n) {
    return t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
        return t.__proto__ = r, t
    }, t(r, n)
}

function r(r, n) {
    r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t(r, n)
}

function n() {
    return n = Object.assign ? Object.assign.bind() : function(t) {
        for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            for (var o in n)({}).hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, n.apply(null, arguments)
}
export {
    n as _, r as a
};