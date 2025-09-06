function e() {
    return e = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
        }
        return e
    }, e.apply(this, arguments)
}
var t;
! function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
}(t || (t = {}));
const n = "popstate";

function a(a) {
    return void 0 === a && (a = {}),
        function(a, i, h, c) {
            void 0 === c && (c = {});
            let {
                window: u = document.defaultView,
                v5Compat: p = !1
            } = c, f = u.history, d = t.Pop, m = null, g = v();
            null == g && (g = 0, f.replaceState(e({}, f.state, {
                idx: g
            }), ""));

            function v() {
                return (f.state || {
                    idx: null
                }).idx
            }

            function y() {
                d = t.Pop;
                let e = v(),
                    n = null == e ? null : e - g;
                g = e, m && m({
                    action: d,
                    location: $.location,
                    delta: n
                })
            }

            function w(e, n) {
                d = t.Push;
                let a = o($.location, e, n);
                g = v() + 1;
                let r = l(a, g),
                    i = $.createHref(a);
                try {
                    f.pushState(r, "", i)
                } catch (s) {
                    if (s instanceof DOMException && "DataCloneError" === s.name) throw s;
                    u.location.assign(i)
                }
                p && m && m({
                    action: d,
                    location: $.location,
                    delta: 1
                })
            }

            function b(e, n) {
                d = t.Replace;
                let a = o($.location, e, n);
                g = v();
                let r = l(a, g),
                    i = $.createHref(a);
                f.replaceState(r, "", i), p && m && m({
                    action: d,
                    location: $.location,
                    delta: 0
                })
            }

            function P(e) {
                let t = "null" !== u.location.origin ? u.location.origin : u.location.href,
                    n = "string" == typeof e ? e : s(e);
                return n = n.replace(/ $/, "%20"), r(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }
            let $ = {
                get action() {
                    return d
                },
                get location() {
                    return a(u, f)
                },
                listen(e) {
                    if (m) throw new Error("A history only accepts one active listener");
                    return u.addEventListener(n, y), m = e, () => {
                        u.removeEventListener(n, y), m = null
                    }
                },
                createHref: e => i(u, e),
                createURL: P,
                encodeLocation(e) {
                    let t = P(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: w,
                replace: b,
                go: e => f.go(e)
            };
            return $
        }(function(e, t) {
            let {
                pathname: n,
                search: a,
                hash: r
            } = e.location;
            return o("", {
                pathname: n,
                search: a,
                hash: r
            }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }, function(e, t) {
            return "string" == typeof t ? t : s(t)
        }, 0, a)
}

function r(e, t) {
    if (!1 === e || null == e) throw new Error(t)
}

function i(e, t) {
    if (!e) try {
        throw new Error(t)
    } catch (n) {}
}

function l(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function o(t, n, a, r) {
    return void 0 === a && (a = null), e({
        pathname: "string" == typeof t ? t : t.pathname,
        search: "",
        hash: ""
    }, "string" == typeof n ? h(n) : n, {
        state: a,
        key: n && n.key || r || Math.random().toString(36).substr(2, 8)
    })
}

function s(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: a = ""
    } = e;
    return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), a && "#" !== a && (t += "#" === a.charAt(0) ? a : "#" + a), t
}

function h(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let a = e.indexOf("?");
        a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e)
    }
    return t
}
var c;

function u(e, t, n) {
    return void 0 === n && (n = "/"),
        function(e, t, n) {
            let a = "string" == typeof t ? h(t) : t,
                r = S(a.pathname || "/", n);
            if (null == r) return null;
            let i = p(e);
            ! function(e) {
                e.sort((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                    let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                    return n ? e[e.length - 1] - t[t.length - 1] : 0
                }(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)))
            }(i);
            let l = null;
            for (let o = 0; null == l && o < i.length; ++o) {
                let e = W(r);
                l = $(i[o], e)
            }
            return l
        }(e, t, n)
}

function p(e, t, n, a) {
    void 0 === t && (t = []), void 0 === n && (n = []), void 0 === a && (a = "");
    let i = (e, i, l) => {
        let o = {
            relativePath: void 0 === l ? e.path || "" : l,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: i,
            route: e
        };
        o.relativePath.startsWith("/") && (r(o.relativePath.startsWith(a), 'Absolute route path "' + o.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(a.length));
        let s = j([a, o.relativePath]),
            h = n.concat(o);
        e.children && e.children.length > 0 && (r(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), p(e.children, t, h, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: P(s, e.index),
            routesMeta: h
        })
    };
    return e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
            for (let a of f(e.path)) i(e, t, a);
        else i(e, t)
    }), t
}

function f(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...a] = t, r = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (0 === a.length) return r ? [i, ""] : [i];
    let l = f(a.join("/")),
        o = [];
    return o.push(...l.map(e => "" === e ? i : [i, e].join("/"))), r && o.push(...l), o.map(t => e.startsWith("/") && "" === t ? "/" : t)
}! function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
}(c || (c = {}));
const d = /^:[\w-]+$/,
    m = 3,
    g = 2,
    v = 1,
    y = 10,
    w = -2,
    b = e => "*" === e;

function P(e, t) {
    let n = e.split("/"),
        a = n.length;
    return n.some(b) && (a += w), t && (a += g), n.filter(e => !b(e)).reduce((e, t) => e + (d.test(t) ? m : "" === t ? v : y), a)
}

function $(e, t, n) {
    let {
        routesMeta: a
    } = e, r = {}, i = "/", l = [];
    for (let o = 0; o < a.length; ++o) {
        let e = a[o],
            n = o === a.length - 1,
            s = "/" === i ? t : t.slice(i.length) || "/",
            h = x({
                path: e.relativePath,
                caseSensitive: e.caseSensitive,
                end: n
            }, s),
            c = e.route;
        if (!h) return null;
        Object.assign(r, h.params), l.push({
            params: r,
            pathname: j([i, h.pathname]),
            pathnameBase: R(j([i, h.pathnameBase])),
            route: c
        }), "/" !== h.pathnameBase && (i = j([i, h.pathnameBase]))
    }
    return l
}

function x(e, t) {
    "string" == typeof e && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, a] = function(e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        i("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
        let a = [],
            r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (a.push({
                paramName: t,
                isOptional: null != n
            }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        e.endsWith("*") ? (a.push({
            paramName: "*"
        }), r += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : "" !== e && "/" !== e && (r += "(?:(?=\\/|$))");
        let l = new RegExp(r, t ? void 0 : "i");
        return [l, a]
    }(e.path, e.caseSensitive, e.end), r = t.match(n);
    if (!r) return null;
    let l = r[0],
        o = l.replace(/(.)\/+$/, "$1"),
        s = r.slice(1);
    return {
        params: a.reduce((e, t, n) => {
            let {
                paramName: a,
                isOptional: r
            } = t;
            if ("*" === a) {
                let e = s[n] || "";
                o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1")
            }
            const i = s[n];
            return e[a] = r && !i ? void 0 : (i || "").replace(/%2F/g, "/"), e
        }, {}),
        pathname: l,
        pathnameBase: o,
        pattern: e
    }
}

function W(e) {
    try {
        return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return i(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
    }
}

function S(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        a = e.charAt(n);
    return a && "/" !== a ? null : e.slice(n) || "/"
}

function E(e, t, n, a) {
    return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
}

function L(e, t) {
    let n = function(e) {
        return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0)
    }(e);
    return t ? n.map((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase) : n.map(e => e.pathnameBase)
}

function O(t, n, a, i) {
    let l;
    void 0 === i && (i = !1), "string" == typeof t ? l = h(t) : (l = e({}, t), r(!l.pathname || !l.pathname.includes("?"), E("?", "pathname", "search", l)), r(!l.pathname || !l.pathname.includes("#"), E("#", "pathname", "hash", l)), r(!l.search || !l.search.includes("#"), E("#", "search", "hash", l)));
    let o, s = "" === t || "" === l.pathname,
        c = s ? "/" : l.pathname;
    if (null == c) o = a;
    else {
        let e = n.length - 1;
        if (!i && c.startsWith("..")) {
            let t = c.split("/");
            for (;
                ".." === t[0];) t.shift(), e -= 1;
            l.pathname = t.join("/")
        }
        o = e >= 0 ? n[e] : "/"
    }
    let u = function(e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: a = "",
                hash: r = ""
            } = "string" == typeof e ? h(e) : e, i = n ? n.startsWith("/") ? n : function(e, t) {
                let n = t.replace(/\/+$/, "").split("/");
                return e.split("/").forEach(e => {
                    ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                }), n.length > 1 ? n.join("/") : "/"
            }(n, t) : t;
            return {
                pathname: i,
                search: A(a),
                hash: B(r)
            }
        }(l, o),
        p = c && "/" !== c && c.endsWith("/"),
        f = (s || "." === c) && a.endsWith("/");
    return u.pathname.endsWith("/") || !p && !f || (u.pathname += "/"), u
}
const j = e => e.join("/").replace(/\/\/+/g, "/"),
    R = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    A = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
    B = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";

function C(e) {
    return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
}
const U = ["post", "put", "patch", "delete"];
new Set(U);
const k = ["get", ...U];
new Set(k);
export {
    t as A, C as a, a as b, s as c, L as g, r as i, j, u as m, h as p, O as r, S as s
};