let e, t, r, l = {
        data: ""
    },
    a = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : e || l,
    n = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    o = /\/\*[^]*?\*\/|  +/g,
    c = /\n+/g,
    s = (e, t) => {
        let r = "",
            l = "",
            a = "";
        for (let n in e) {
            let o = e[n];
            "@" == n[0] ? "i" == n[1] ? r = n + " " + o + ";" : l += "f" == n[1] ? s(o, n) : n + "{" + s(o, "k" == n[1] ? "" : t) + "}" : "object" == typeof o ? l += s(o, t ? t.replace(/([^,])+/g, e => n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != o && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), a += s.p ? s.p(n, o) : n + ":" + o + ";")
        }
        return r + (t && a ? t + "{" + a + "}" : a) + l
    },
    i = {},
    p = e => {
        if ("object" == typeof e) {
            let t = "";
            for (let r in e) t += r + p(e[r]);
            return t
        }
        return e
    },
    u = (e, t, r, l, a) => {
        let u = p(e),
            d = i[u] || (i[u] = (e => {
                let t = 0,
                    r = 11;
                for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
                return "go" + r
            })(u));
        if (!i[d]) {
            let t = u !== e ? e : (e => {
                let t, r, l = [{}];
                for (; t = n.exec(e.replace(o, ""));) t[4] ? l.shift() : t[3] ? (r = t[3].replace(c, " ").trim(), l.unshift(l[0][r] = l[0][r] || {})) : l[0][t[1]] = t[2].replace(c, " ").trim();
                return l[0]
            })(e);
            i[d] = s(a ? {
                ["@keyframes " + d]: t
            } : t, r ? "" : "." + d)
        }
        let g = r && i.g ? i.g : null;
        return r && (i.g = i[d]), ((e, t, r, l) => {
            l ? t.data = t.data.replace(l, e) : -1 === t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e)
        })(i[d], t, l, g), d
    };

function d(e) {
    let t = this || {},
        r = e.call ? e(t.p) : e;
    return u(r.unshift ? r.raw ? ((e, t, r) => e.reduce((e, l, a) => {
        let n = t[a];
        if (n && n.call) {
            let e = n(r),
                t = e && e.props && e.props.className || /^go/.test(e) && e;
            n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : s(e, "") : !1 === e ? "" : e
        }
        return e + l + (null == n ? "" : n)
    }, ""))(r, [].slice.call(arguments, 1), t.p) : r.reduce((e, r) => Object.assign(e, r && r.call ? r(t.p) : r), {}) : r, a(t.target), t.g, t.o, t.k)
}
d.bind({
    g: 1
});
let g = d.bind({
    k: 1
});

function f(l, a, n, o) {
    s.p = a, e = l, t = n, r = o
}

function b(l, a) {
    let n = this || {};
    return function() {
        let a = arguments;
        return function o(c, s) {
            let i = Object.assign({}, c),
                p = i.className || o.className;
            n.p = Object.assign({
                theme: t && t()
            }, i), n.o = / *go\d+/.test(p), i.className = d.apply(n, a) + (p ? " " + p : "");
            let u = l;
            return l[0] && (u = i.as || l, delete i.as), r && u[0] && r(i), e(u, i)
        }
    }
}
export {
    g as h, b as j, f as m, d as u
};