const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/js/DRYkPRBnPw7PP62a.js", "assets/js/D-s6PRqiKBLBeb70.js", "assets/js/DRKqkMc30zo_0ikY.js", "assets/js/CW___00ulSquyL62.js", "assets/js/BfZ2chxSRdnyRXRh.js", "assets/js/Dzd9VM057lnHWOrh.js", "assets/js/DuhNfJysh32dzoQX.js", "assets/js/rok5ZiflEFTZ0mAl.js", "assets/js/CxGgxkmD02DlAHB9.js", "assets/js/CdjEVO9ucAe6ofNA.js", "assets/js/C8dBobwRpSGb9gtE.js", "assets/js/Dud8YmOKJJ5dkhIL.js", "assets/js/BeLtu-UYPkietiDK.js", "assets/js/LM2JspYDBI8LNjlT.js", "assets/js/3aNFxleMQdjaFZtw.js", "assets/js/DZoN2sFbwskeIicV.js", "assets/js/DpIj8wd6VUmqXzzl.js", "assets/js/BDEOJ3om1uRt4ddv.js", "assets/js/BLAQiaZv-IYrB822.js", "assets/js/BECp9yQdPAitwlCI.js", "assets/js/DfdcUrwOuH6NXQUe.js", "assets/js/wePhTpoTR_0ArJwL.js", "assets/js/crV_yrDEx9-RI-FF.js", "assets/js/Dh2ozDZ7qkBPwrsN.js", "assets/js/B-4N2_WDClcrmfIj.js", "assets/js/Dq5o0lpy8W0NgvEn.js", "assets/js/B8dUZteKaJ1Ajo6q.js", "assets/js/DYmGDhXmaZ0RdROJ.js", "assets/js/3H4l8_FZBSOmlnNZ.js", "assets/js/Btvs7VabEaxge3D0.js", "assets/js/BQN4GL9TIiLnyRs4.js", "assets/js/DnSvMRTpYpGgNkNq.js", "assets/js/CySd7UQckpWyhpoX.js"]))) => i.map(i => d[i]);
import {
    R as e,
    r as t,
    j as r,
    L as s,
    u as a,
    b as n,
    c as o,
    B as i,
    d as l,
    e as d,
    N as c,
    f as u
} from "./D-s6PRqiKBLBeb70.js";
import {
    u as m,
    Q as x,
    a as h
} from "./BfZ2chxSRdnyRXRh.js";
import {
    V as g,
    R as f,
    A as b,
    C as p,
    T as v,
    D as j,
    P as y,
    a as w,
    b as N
} from "./C8dBobwRpSGb9gtE.js";
import {
    c as z
} from "./Dud8YmOKJJ5dkhIL.js";
import {
    c as C
} from "./BeLtu-UYPkietiDK.js";
import {
    t as k
} from "./LM2JspYDBI8LNjlT.js";
import {
    X as L,
    M as D,
    H as A,
    L as M,
    C as S,
    F as _,
    T as q,
    a as B,
    S as I,
    B as E,
    b as T,
    c as W,
    I as O,
    U as P,
    d as K,
    e as R,
    f as F,
    P as V,
    A as Y,
    g as H,
    h as Z,
    R as U,
    Z as G,
    i as J,
    G as X,
    j as $,
    k as Q,
    l as ee,
    m as te,
    n as re,
    o as se,
    p as ae,
    q as ne
} from "./DuhNfJysh32dzoQX.js";
import {
    j as oe
} from "./3aNFxleMQdjaFZtw.js";
import {
    $ as ie
} from "./DZoN2sFbwskeIicV.js";
import {
    a as le
} from "./DpIj8wd6VUmqXzzl.js";
import {
    m as de
} from "./rok5ZiflEFTZ0mAl.js";
import {
    g as ce
} from "./BDEOJ3om1uRt4ddv.js";
import "./DRKqkMc30zo_0ikY.js";
import "./CW___00ulSquyL62.js";
import "./Dzd9VM057lnHWOrh.js";
import "./CxGgxkmD02DlAHB9.js";
import "./CdjEVO9ucAe6ofNA.js";
! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver(e => {
            for (const r of e)
                if ("childList" === r.type)
                    for (const e of r.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
const ue = {},
    me = function(e, t, r) {
        let s = Promise.resolve();
        if (t && t.length > 0) {
            document.getElementsByTagName("link");
            const e = document.querySelector("meta[property=csp-nonce]"),
                r = e ? .nonce || e ? .getAttribute("nonce");
            s = Promise.allSettled(t.map(e => {
                if ((e = function(e) {
                        return "https://www.fmovies.gd/" + e
                    }(e)) in ue) return;
                ue[e] = !0;
                const t = e.endsWith(".css"),
                    s = t ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${e}"]${s}`)) return;
                const a = document.createElement("link");
                return a.rel = t ? "stylesheet" : "modulepreload", t || (a.as = "script"), a.crossOrigin = "", a.href = e, r && a.setAttribute("nonce", r), document.head.appendChild(a), t ? new Promise((t, r) => {
                    a.addEventListener("load", t), a.addEventListener("error", () => r(new Error(`Unable to preload CSS for ${e}`)))
                }) : void 0
            }))
        }

        function a(e) {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
        }
        return s.then(t => {
            for (const e of t || []) "rejected" === e.status && a(e.reason);
            return e().catch(a)
        })
    };

function xe(e, t) {
    const r = ze();
    return xe = function(t, s) {
        let a = r[t -= 155];
        if (void 0 === xe.mRxWaF) {
            xe.SYBsqh = function(e) {
                let t = "",
                    r = "";
                for (let s, a, n = 0, o = 0; a = e.charAt(o++); ~a && (s = n % 4 ? 64 * s + a : a, n++ % 4) ? t += String.fromCharCode(255 & s >> (-2 * n & 6)) : 0) a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(a);
                for (let s = 0, a = t.length; s < a; s++) r += "%" + ("00" + t.charCodeAt(s).toString(16)).slice(-2);
                return decodeURIComponent(r)
            }, e = arguments, xe.mRxWaF = !0
        }
        const n = t + r[0],
            o = e[n];
        return o ? a = o : (a = xe.SYBsqh(a), e[n] = a), a
    }, xe(e, t)
}
const he = xe;
! function() {
    const e = xe,
        t = ze();
    for (;;) try {
        if (588860 === parseInt(e(189)) / 1 + parseInt(e(186)) / 2 + parseInt(e(183)) / 3 * (parseInt(e(197)) / 4) + parseInt(e(171)) / 5 + parseInt(e(172)) / 6 * (-parseInt(e(173)) / 7) + parseInt(e(155)) / 8 + -parseInt(e(160)) / 9) break;
        t.push(t.shift())
    } catch (r) {
        t.push(t.shift())
    }
}();
he(170), he(162), he(187), he(166), he(165), he(194), he(161);
let ge = 0;

function fe() {
    const e = he,
        t = {
            lFFqg: function(e, t) {
                return e % t
            },
            EIInU: function(e, t) {
                return e + t
            }
        };
    return ge = t[e(188)](t[e(190)](ge, 1), Number[e(199) + e(200) + "NTEGER"]), ge[e(192) + e(163)]()
}
const be = new Map,
    pe = e => {
        const t = he,
            r = {
                nOhfN: function(e, t) {
                    return e(t)
                },
                TSNcP: t(161) + "E_TOAST",
                jTTgG: function(e, t, r) {
                    return e(t, r)
                }
            };
        if (be.has(e)) return;
        const s = r[t(168)](setTimeout, () => {
            const s = t;
            be[s(178) + "e"](e), r[s(180)](we, {
                type: r[s(164)],
                toastId: e
            })
        }, 1e6);
        be[t(182)](e, s)
    },
    ve = (e, t) => {
        const r = he,
            s = {
                RuzWM: r(170) + r(162),
                iaiHw: r(187) + r(166) + "ST",
                KMRkq: r(165) + r(194) + "AST",
                AwdCX: function(e, t) {
                    return e(t)
                },
                sEXjz: r(161) + r(166) + "ST"
            };
        switch (t[r(185)]) {
            case s[r(159)]:
                return { ...e,
                    toasts: [t[r(198)], ...e[r(198) + "s"]][r(179)](0, 1)
                };
            case s.iaiHw:
                return { ...e,
                    toasts: e[r(198) + "s"][r(167)](e => e.id === t[r(198)].id ? { ...e,
                        ...t[r(198)]
                    } : e)
                };
            case s[r(193)]:
                {
                    const {
                        toastId: a
                    } = t;
                    return a ? s.AwdCX(pe, a) : e.toasts.forEach(e => {
                        pe(e.id)
                    }),
                    { ...e,
                        toasts: e.toasts[r(167)](e => e.id === a || void 0 === a ? { ...e,
                            open: !1
                        } : e)
                    }
                }
            case s[r(169)]:
                return void 0 === t[r(198) + "Id"] ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts[r(158) + "r"](e => e.id !== t[r(198) + "Id"])
                }
        }
    },
    je = [];
let ye = {
    toasts: []
};

function we(e) {
    const t = {
        XGDQb: function(e, t) {
            return e(t)
        },
        sHIJj: function(e, t, r) {
            return e(t, r)
        }
    };
    ye = t[he(196)](ve, ye, e), je.forEach(e => {
        t.XGDQb(e, ye)
    })
}

function Ne({ ...e
}) {
    const t = he,
        r = {
            MYuwi: function(e) {
                return e()
            },
            SuNrA: function(e) {
                return e()
            },
            kwLxs: function(e, t) {
                return e(t)
            }
        },
        s = r[t(191)](fe),
        a = () => we({
            type: t(165) + t(194) + t(175),
            toastId: s
        });
    return r.kwLxs(we, {
        type: "ADD_TOAST",
        toast: { ...e,
            id: s,
            open: !0,
            onOpenChange: e => {
                e || r[t(176)](a)
            }
        }
    }), {
        id: s,
        dismiss: a,
        update: e => we({
            type: "UPDAT" + t(166) + "ST",
            toast: { ...e,
                id: s
            }
        })
    }
}

function ze() {
    const e = ["Dg9HC3q", "tufyx1m", "quzfx0K", "nZm3ndmWngjrzNnMvW", "tuz1tLO", "zMvJDa", "zMLSDgu", "uNv6v00", "mtK0mJi2nZvbtfvOz2S", "uKvnt1y", "t0ftva", "Aw5N", "vfnoy1a", "reLttuK", "rv9ut0e", "BwfW", "ALruz0C", "C0vyANO", "qurex1q", "mZa1mZi1A0PdEMvL", "mZK2ALHNAuHv", "mta0ndG5zM9XBu5w", "BLD1vei", "qvnu", "tvL1D2K", "DxnLrwy", "zgvSzxq", "C2XPy2u", "BK9OzK4", "DxnLu3q", "C2v0", "mJmXruL3tfDb", "yxrL", "DhLWzq", "mtyYmdC0oeHLAhnTyq", "vvbeqvq", "BezgCwC", "odC2odi5CvDptxzp", "ruLjBLu", "u3voCKe", "Dg9tDhi", "s01sA3e", "u1nFve8", "C3bSAwm", "C0HjsMO", "ntuXnZjZsLbtB0u"];
    return (ze = function() {
        return e
    })()
}

function Ce() {
    var e = ["muDOzLHXrW", "mtyXodi1ndb3weLRA00", "mJa0mtbNyuffCgS", "nZuXmZy4B21XDevV", "n1bqwwvzzq", "mti0otq1mMfcBw1Yra", "nJi4y0vbzgrx", "mJuYmtCWmuP6A2nLwG", "mti1nJG2r1PRAvfJ", "ntu2nti4ohDJrg13uG"];
    return (Ce = function() {
        return e
    })()
}

function ke(e, t) {
    var r = Ce();
    return ke = function(t, s) {
        var a = r[t -= 447];
        if (void 0 === ke.YEtjzQ) {
            ke.xyhIUL = function(e) {
                for (var t, r, s = "", a = "", n = 0, o = 0; r = e.charAt(o++); ~r && (t = n % 4 ? 64 * t + r : r, n++ % 4) ? s += String.fromCharCode(255 & t >> (-2 * n & 6)) : 0) r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
                for (var i = 0, l = s.length; i < l; i++) a += "%" + ("00" + s.charCodeAt(i).toString(16)).slice(-2);
                return decodeURIComponent(a)
            }, e = arguments, ke.YEtjzQ = !0
        }
        var n = t + r[0],
            o = e[n];
        return o ? a = o : (a = ke.xyhIUL(a), e[n] = a), a
    }, ke(e, t)
}

function Le(...e) {
    return k(C(e))
}! function() {
    for (var e = ke, t = Ce();;) try {
        if (394325 === parseInt(e(448)) / 1 * (-parseInt(e(456)) / 2) + parseInt(e(451)) / 3 + parseInt(e(454)) / 4 * (parseInt(e(450)) / 5) + parseInt(e(453)) / 6 + parseInt(e(452)) / 7 * (parseInt(e(447)) / 8) + parseInt(e(455)) / 9 + -parseInt(e(449)) / 10) break;
        t.push(t.shift())
    } catch (r) {
        t.push(t.shift())
    }
}();
const De = y,
    Ae = t.forwardRef(({
        className: e,
        ...t
    }, s) => r.jsx(g, {
        ref: s,
        className: Le("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
Ae.displayName = g.displayName;
const Me = z("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    Se = t.forwardRef(({
        className: e,
        variant: t,
        ...s
    }, a) => r.jsx(f, {
        ref: a,
        className: Le(Me({
            variant: t
        }), e),
        ...s
    }));
Se.displayName = f.displayName;
t.forwardRef(({
    className: e,
    ...t
}, s) => r.jsx(b, {
    ref: s,
    className: Le("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
})).displayName = b.displayName;
const _e = t.forwardRef(({
    className: e,
    ...t
}, s) => r.jsx(p, {
    ref: s,
    className: Le("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: r.jsx(L, {
        className: "h-4 w-4"
    })
}));
_e.displayName = p.displayName;
const qe = t.forwardRef(({
    className: e,
    ...t
}, s) => r.jsx(v, {
    ref: s,
    className: Le("text-sm font-semibold", e),
    ...t
}));
qe.displayName = v.displayName;
const Be = t.forwardRef(({
    className: e,
    ...t
}, s) => r.jsx(j, {
    ref: s,
    className: Le("text-sm opacity-90", e),
    ...t
}));

function Ie() {
    const {
        toasts: t
    } = function() {
        const t = he,
            r = {
                nWuTB: function(e, t) {
                    return e > t
                }
            },
            [s, a] = e[t(181) + t(184)](ye);
        return e[t(177) + t(157)](() => {
            const e = {
                MFuNZ: function(e, t) {
                    return r[xe(174)](e, t)
                }
            };
            return je.push(a), () => {
                const t = xe,
                    r = je.indexOf(a);
                e[t(156)](r, -1) && je[t(195) + "e"](r, 1)
            }
        }, [s]), { ...s,
            toast: Ne,
            dismiss: e => we({
                type: t(165) + t(194) + "AST",
                toastId: e
            })
        }
    }();
    return r.jsxs(De, {
        children: [t.map(function({
            id: e,
            title: t,
            description: s,
            action: a,
            ...n
        }) {
            return r.jsxs(Se, { ...n,
                children: [r.jsxs("div", {
                    className: "grid gap-1",
                    children: [t && r.jsx(qe, {
                        children: t
                    }), s && r.jsx(Be, {
                        children: s
                    })]
                }), a, r.jsx(_e, {})]
            }, e)
        }), r.jsx(Ae, {})]
    })
}
Be.displayName = j.displayName;
const Ee = ({ ...e
    }) => {
        const {
            theme: t = "system"
        } = oe();
        return r.jsx(ie, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...e
        })
    },
    Te = N;
t.forwardRef(({
    className: e,
    sideOffset: t = 4,
    ...s
}, a) => r.jsx(w, {
    ref: a,
    sideOffset: t,
    className: Le("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...s
})).displayName = w.displayName;
const We = () => r.jsx("footer", {
        className: "w-full bg-background/90 backdrop-blur-md border-t border-border/30 shadow-lg py-8 mt-auto",
        children: r.jsx("div", {
            className: "container mx-auto px-4",
            children: r.jsxs("div", {
                className: "flex flex-col items-center space-y-6",
                children: [r.jsx(s, {
                    to: "/home",
                    className: "flex items-center space-x-2 group",
                    children: r.jsxs("div", {
                        className: "relative",
                        children: [r.jsx("div", {
                            className: "absolute -inset-1 bg-gradient-to-r from-brand to-brand/60 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                        }), r.jsx("div", {
                            className: "relative px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-lg ring-1 ring-border/40",
                            children: r.jsx("span", {
                                className: "text-2xl font-bold bg-gradient-to-r from-brand to-brand/60 bg-clip-text text-transparent",
                                children: "FMOVIES+"
                            })
                        })]
                    })
                }), r.jsx("div", {
                    className: "max-w-2xl text-center",
                    children: r.jsx("p", {
                        className: "text-sm text-foreground/70 leading-relaxed backdrop-blur-sm bg-secondary/20 rounded-xl p-4 border border-brand/5 shadow-lg shadow-brand/5",
                        children: "This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services."
                    })
                }), r.jsx("div", {
                    className: "flex items-center space-x-2 text-foreground/60",
                    children: r.jsxs("a", {
                        href: "mailto:contact@fmovies.gd",
                        className: "flex items-center space-x-2 px-4 py-2 rounded-xl bg-secondary/30 hover:bg-brand/10 hover:text-brand border border-brand/5 transition-all duration-200 group",
                        children: [r.jsx(D, {
                            size: 16,
                            className: "group-hover:scale-110 transition-transform"
                        }), r.jsx("span", {
                            className: "text-sm",
                            children: "contact@fmovies.gd"
                        })]
                    })
                })]
            })
        })
    }),
    Oe = Pe;

function Pe(e, t) {
    const r = Fe();
    return Pe = function(t, s) {
        let a = r[t -= 231];
        if (void 0 === Pe.IAbptN) {
            Pe.EbIDTf = function(e) {
                let t = "",
                    r = "";
                for (let s, a, n = 0, o = 0; a = e.charAt(o++); ~a && (s = n % 4 ? 64 * s + a : a, n++ % 4) ? t += String.fromCharCode(255 & s >> (-2 * n & 6)) : 0) a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(a);
                for (let s = 0, a = t.length; s < a; s++) r += "%" + ("00" + t.charCodeAt(s).toString(16)).slice(-2);
                return decodeURIComponent(r)
            }, e = arguments, Pe.IAbptN = !0
        }
        const n = t + r[0],
            o = e[n];
        return o ? a = o : (a = Pe.EbIDTf(a), e[n] = a), a
    }, Pe(e, t)
}! function() {
    const e = Pe,
        t = Fe();
    for (;;) try {
        if (464514 === parseInt(e(415)) / 1 + parseInt(e(337)) / 2 + parseInt(e(382)) / 3 * (parseInt(e(401)) / 4) + -parseInt(e(293)) / 5 * (-parseInt(e(245)) / 6) + parseInt(e(356)) / 7 * (parseInt(e(306)) / 8) + parseInt(e(414)) / 9 * (parseInt(e(404)) / 10) + -parseInt(e(332)) / 11) break;
        t.push(t.shift())
    } catch (r) {
        t.push(t.shift())
    }
}();
const Ke = Oe(364) + Oe(244) + "ckend" + Oe(255) + Oe(261) + Oe(292);
class Re {
    [Oe(291) + Oe(388)](e) {
        const t = Oe,
            r = {
                eVSwa: t(302)
            };
        localStorage[t(284) + "em"](r.eVSwa, e), this[t(280) + t(359) + t(381) + "eChange"]()
    }[Oe(319) + "ken"]() {
        const e = Oe,
            t = {
                pbZbI: e(302)
            };
        return localStorage[e(396) + "em"](t.pbZbI)
    }[Oe(350) + "er"](e) {
        const t = Oe;
        localStorage[t(284) + "em"]("user", JSON[t(408) + "gify"](e)), this[t(280) + t(359) + t(381) + t(282) + "ge"]()
    }[Oe(280) + Oe(359) + Oe(381) + "eChange"]() {
        const e = Oe,
            t = {
                WefUc: e(331) + e(305) + e(256) + "ge"
            };
        window[e(315) + e(263) + e(310)](new CustomEvent(t[e(375)]))
    }
    async [Oe(383) + "ter"](e, t) {
        const r = Oe;
        return (await le[r(395)](Ke + (r(271) + r(250) + r(341)), {
            username: e,
            password: t
        })).data
    }
    async [Oe(241)](e, t) {
        const r = Oe,
            s = {
                kQnvh: r(360) + "ites",
                lmGsS: "watch" + r(243),
                bcpuD: function(e) {
                    return e()
                }
            },
            a = await le[r(395)](Ke + (r(271) + r(365) + "n"), {
                username: e,
                password: t
            });
        return this[r(291) + r(388)](a[r(391)][r(302)]), this[r(350) + "er"](a[r(391)][r(353)]), localStorage[r(345) + r(299)](s[r(262)]), localStorage[r(345) + "eItem"](s[r(386)]), await s.bcpuD(lt), await s[r(300)](it), a[r(391)]
    }[Oe(259) + "t"]() {
        const e = Oe,
            t = {
                JlOVs: e(360) + e(265),
                ttPKN: e(353),
                PKoga: e(302),
                gdAbs: e(277) + e(243)
            },
            r = (e(410) + e(267))[e(309)]("|");
        let s = 0;
        for (;;) {
            switch (r[s++]) {
                case "0":
                    localStorage.removeItem(t[e(322)]);
                    continue;
                case "1":
                    localStorage[e(345) + e(299)](t[e(361)]);
                    continue;
                case "2":
                    this[e(280) + "erAut" + e(381) + "eChange"]();
                    continue;
                case "3":
                    localStorage[e(345) + "eItem"](t[e(347)]);
                    continue;
                case "4":
                    localStorage[e(345) + e(299)](t[e(417)]);
                    continue
            }
            break
        }
    }[Oe(405) + Oe(240) + "User"]() {
        const e = Oe,
            t = {
                FlHph: e(353)
            },
            r = localStorage[e(396) + "em"](t[e(311)]);
        return r ? JSON[e(238)](r) : null
    }
    async [Oe(316) + "eProfile"](e) {
        const t = Oe,
            r = {
                HaiBw: t(351) + "uthen" + t(279) + "ed"
            },
            s = this[t(319) + t(388)]();
        if (!s) throw new Error(r[t(373)]);
        const a = await le[t(418)](Ke + "/auth" + t(295) + t(242), {
            avatarUrl: e
        }, {
            headers: {
                Authorization: t(411) + "r " + s
            }
        });
        return this[t(350) + "er"](a[t(391)]), a[t(391)]
    }
    async getProfile() {
        const e = Oe,
            t = {
                TLLND: "Not a" + e(342) + e(279) + "ed"
            },
            r = this[e(319) + e(388)]();
        if (!r) throw new Error(t[e(318)]);
        return (await le[e(385)](Ke + (e(271) + e(295) + "ile"), {
            headers: {
                Authorization: "Bearer " + r
            }
        }))[e(391)][e(353)]
    }
    async [Oe(316) + Oe(370) + "e"](e) {
        const t = Oe,
            r = {
                apvhs: t(351) + t(342) + t(279) + "ed",
                ECkaf: "Error" + t(369) + t(416) + "theme:"
            },
            s = this[t(319) + t(388)]();
        if (!s) throw new Error(r[t(394)]);
        try {
            const r = await le[t(418)](Ke + (t(271) + t(320) + "e"), {
                theme: e
            }, {
                headers: {
                    Authorization: t(411) + "r " + s
                }
            });
            return this[t(350) + "er"](r[t(391)][t(353)]), r[t(391)]
        } catch (a) {
            throw a
        }
    }[Oe(366) + Oe(325) + Oe(324) + Oe(247)]() {
        const e = Oe,
            t = {
                oQBXZ: e(360) + "ites"
            },
            r = localStorage[e(396) + "em"](t.oQBXZ);
        return r ? JSON[e(238)](r) : []
    }[Oe(366) + Oe(269) + Oe(384) + Oe(313)]() {
        const e = Oe,
            t = {
                bHyZG: e(277) + e(243)
            },
            r = localStorage.getItem(t[e(406)]);
        return r ? JSON.parse(r) : []
    }[Oe(366) + "oredT" + Oe(378)]() {
        const e = Oe,
            t = this[e(405) + "rrentUser"]();
        return t ? .[e(321)] || null
    }
    async getFavorites() {
        const e = Oe,
            t = {
                aAsCX: function(e, t, r) {
                    return e(t, r)
                },
                PYnFG: "Faile" + e(289) + e(367) + e(368) + "rites",
                CmzGz: e(304) + e(270) + e(399) + e(360) + e(275)
            };
        if (!this["isAut" + e(248) + "cated"]()) return this[e(366) + e(325) + e(324) + e(247)]();
        try {
            const r = await t[e(333)](fetch, Ke + (e(271) + "/favo") + e(264), {
                headers: {
                    Authorization: "Bearer " + this[e(319) + e(388)]()
                }
            });
            if (!r.ok) throw new Error(t[e(272)]);
            return (await r[e(330)]())[e(360) + e(265)]
        } catch (r) {
            return []
        }
    }
    async [Oe(377) + Oe(326) + "ites"](e) {
        const t = Oe,
            r = {
                LjNeL: function(e, t, r) {
                    return e(t, r)
                },
                BwHsI: "POST",
                FNvhD: t(354) + t(400) + t(258) + "n",
                xagll: t(260) + t(289) + "add to fav" + t(397) + "s",
                HjHPv: t(304) + t(287) + t(257) + " favorites:"
            };
        if (!this[t(283) + t(248) + t(288)]()) return this["addTo" + t(235) + t(326) + "ites"](e);
        try {
            const s = await r[t(413)](fetch, Ke + (t(271) + t(419) + t(264)), {
                method: r.BwHsI,
                headers: {
                    Authorization: t(411) + "r " + this[t(319) + t(388)](),
                    "Content-Type": r[t(296)]
                },
                body: JSON[t(408) + "gify"](e)
            });
            if (!s.ok) throw new Error(r.xagll);
            return (await s[t(330)]())[t(360) + "ites"]
        } catch (s) {
            return []
        }
    }
    async [Oe(345) + "eFrom" + Oe(326) + Oe(265)](e, t) {
        const r = Oe,
            s = {
                qNUbU: function(e, t, r) {
                    return e(t, r)
                },
                VTOlX: r(260) + r(289) + r(345) + r(336) + r(274) + r(397) + "s"
            };
        if (!this[r(283) + r(248) + r(288)]()) return this["remov" + r(409) + r(235) + "Favor" + r(265)](e, t);
        try {
            const a = await s[r(314)](fetch, Ke + (r(271) + r(419) + r(264)), {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + this[r(319) + r(388)](),
                    "Content-Type": r(354) + r(400) + r(258) + "n"
                },
                body: JSON.stringify({
                    id: e,
                    mediaType: t
                })
            });
            if (!a.ok) throw new Error(s[r(251)]);
            return (await a[r(330)]())[r(360) + r(265)]
        } catch (a) {
            return []
        }
    }
    async [Oe(412) + Oe(317) + "ter"]() {
        const e = Oe,
            t = {
                ReFru: function(e, t, r) {
                    return e(t, r)
                }
            };
        if (!this["isAut" + e(248) + e(288)]()) return this[e(366) + e(269) + e(384) + e(313)]();
        try {
            const r = await t[e(340)](fetch, Ke + (e(271) + e(348) + e(254) + "er"), {
                headers: {
                    Authorization: e(411) + "r " + this[e(319) + "ken"]()
                }
            });
            if (!r.ok) throw new Error(e(260) + e(289) + e(367) + e(335) + e(297) + "er");
            return (await r.json())["watch" + e(243)]
        } catch (r) {
            return []
        }
    }
    async ["addTo" + Oe(303) + "Later"](e) {
        const t = Oe,
            r = {
                uSQYO: function(e, t, r) {
                    return e(t, r)
                },
                OIIPL: t(339),
                eowyG: t(304) + t(287) + t(257) + t(335) + t(297) + t(249)
            };
        if (!this[t(283) + t(248) + t(288)]()) return this[t(377) + "LocalWatch" + t(243)](e);
        try {
            const s = await r[t(352)](fetch, Ke + (t(271) + "/watc") + t(254) + "er", {
                method: r.OIIPL,
                headers: {
                    Authorization: t(411) + "r " + this[t(319) + t(388)](),
                    "Content-Type": t(354) + t(400) + "n/json"
                },
                body: JSON.stringify(e)
            });
            if (!s.ok) throw new Error(t(260) + t(289) + "add to wat" + t(323) + t(246));
            return (await s[t(330)]())[t(277) + "Later"]
        } catch (s) {
            return []
        }
    }
    async ["remov" + Oe(409) + Oe(303) + "Later"](e, t) {
        const r = Oe,
            s = {
                ulwAm: function(e, t, r) {
                    return e(t, r)
                },
                IsAbb: r(355) + "E",
                hUsfV: r(354) + r(400) + r(258) + "n",
                cTIxx: r(260) + r(289) + r(345) + r(336) + r(390) + r(323) + r(246),
                mxDvM: r(304) + " removing " + r(307) + r(277) + r(298) + "r:"
            };
        if (!this[r(283) + r(248) + r(288)]()) return this[r(345) + r(409) + r(235) + "Watch" + r(243)](e, t);
        try {
            const a = await s[r(329)](fetch, Ke + (r(271) + r(348) + "h-later"), {
                method: s.IsAbb,
                headers: {
                    Authorization: r(411) + "r " + this[r(319) + r(388)](),
                    "Content-Type": s[r(407)]
                },
                body: JSON[r(408) + r(362)]({
                    id: e,
                    mediaType: t
                })
            });
            if (!a.ok) throw new Error(s[r(393)]);
            return (await a.json())["watch" + r(243)]
        } catch (a) {
            return []
        }
    }[Oe(377) + Oe(235) + Oe(326) + Oe(265)](e) {
        const t = Oe,
            r = this[t(366) + t(325) + t(324) + "tes"](),
            s = { ...e,
                addedAt: Date.now()
            };
        return !r[t(371)](r => r.id === e.id && r[t(268) + t(286)] === e["media" + t(286)]) && (r.push(s), localStorage[t(284) + "em"](t(360) + t(265), JSON[t(408) + "gify"](r))), r
    }[Oe(345) + "eFrom" + Oe(235) + Oe(326) + Oe(265)](e, t) {
        const r = Oe,
            s = {
                pPrig: r(360) + r(265)
            },
            a = this[r(366) + r(325) + r(324) + r(247)]()[r(403) + "r"](r => !(r.id === e && r.mediaType === t));
        return localStorage[r(284) + "em"](s[r(372)], JSON[r(408) + r(362)](a)), a
    }["addTo" + Oe(235) + Oe(303) + Oe(243)](e) {
        const t = Oe,
            r = {
                KsSFv: t(277) + t(243)
            },
            s = this[t(366) + "oredW" + t(384) + t(313)](),
            a = { ...e,
                addedAt: Date[t(233)]()
            };
        return !s[t(371)](r => r.id === e.id && r[t(268) + t(286)] === e[t(268) + t(286)]) && (s[t(301)](a), localStorage[t(284) + "em"](r[t(231)], JSON[t(408) + t(362)](s))), s
    }[Oe(345) + Oe(409) + "Local" + Oe(303) + Oe(243)](e, t) {
        const r = Oe,
            s = {
                PIuNU: r(277) + r(243)
            },
            a = this["getSt" + r(269) + r(384) + r(313)]()[r(403) + "r"](s => !(s.id === e && s[r(268) + r(286)] === t));
        return localStorage[r(284) + "em"](s.PIuNU, JSON[r(408) + r(362)](a)), a
    }[Oe(283) + Oe(248) + Oe(288)]() {
        const e = Oe;
        return {
            QUlFR: function(e, t) {
                return e !== t
            }
        }[e(402)](this[e(319) + e(388)](), null)
    }
    async [Oe(232) + Oe(398) + "ts"]() {
        const e = Oe,
            t = {
                vxrqp: function(e) {
                    return e()
                },
                FboYt: e(304) + e(270) + e(399) + e(387) + e(253)
            };
        try {
            const s = await t[e(266)](ct),
                a = this[e(319) + e(388)]();
            if (!a) return {
                moviesWatched: s[e(380) + "sStar" + e(344)] || 0,
                tvEpisodesWatched: s[e(273) + e(290) + e(343)] || 0,
                totalWatchTime: s[e(278) + e(303) + e(327)] || 0,
                favoriteMovies: 0,
                favoriteTvShows: 0,
                streak: {
                    current: 0,
                    max: 0,
                    lastWatched: null
                }
            };
            try {
                const t = await le[e(385)](Ke + (e(271) + e(308) + "s"), {
                    headers: {
                        Authorization: e(411) + "r " + a
                    }
                });
                return { ...t[e(391)],
                    moviesWatched: s[e(380) + e(239) + e(344)] || t[e(391)][e(380) + "sWatc" + e(338)] || 0,
                    tvEpisodesWatched: s[e(273) + e(290) + e(343)] || t[e(391)][e(276) + e(285) + e(303) + "ed"] || 0,
                    totalWatchTime: s[e(278) + "Watch" + e(327)] || t.data[e(278) + e(303) + e(327)] || 0,
                    favoriteMovies: t[e(391)][e(360) + "iteMo" + e(281)] || 0,
                    favoriteTvShows: t[e(391)][e(360) + e(328) + e(346)] || 0,
                    streak: t[e(391)].streak || {
                        current: 0,
                        max: 0,
                        lastWatched: null
                    }
                }
            } catch (r) {
                return {
                    moviesWatched: s[e(380) + e(239) + e(344)] || 0,
                    tvEpisodesWatched: s[e(273) + "desWatched"] || 0,
                    totalWatchTime: s[e(278) + e(303) + e(327)] || 0,
                    favoriteMovies: 0,
                    favoriteTvShows: 0,
                    streak: {
                        current: 0,
                        max: 0,
                        lastWatched: null
                    }
                }
            }
        } catch (s) {
            return {
                moviesWatched: 0,
                tvEpisodesWatched: 0,
                totalWatchTime: 0,
                favoriteMovies: 0,
                favoriteTvShows: 0,
                streak: {
                    current: 0,
                    max: 0,
                    lastWatched: null
                }
            }
        }
    }
    async [Oe(252) + Oe(349) + Oe(379)]() {
        const e = Oe,
            t = (e(304), e(416), e(357), this.getToken());
        if (!t) throw new Error("Not a" + e(342) + e(279) + "ed");
        try {
            await le.delete(Ke + "/auth" + e(334) + e(379), {
                headers: {
                    Authorization: e(411) + "r " + t
                }
            }), localStorage[e(236)](), this[e(280) + "erAut" + e(381) + e(282) + "ge"]()
        } catch (r) {
            throw r
        }
    }
}

function Fe() {
    const e = ["C2v0vxm", "tM90ige", "Dvnrwu8", "DxnLCG", "yxbWBgK", "revmrvq", "mtGXmZD4CMj2zLy", "BNq6", "DxnLCIa", "zxjbDxq", "zMf2B3i", "Dhrqs04", "z2LMEq", "sgPiuhy", "Ahr0Chm", "l2XVz2K", "z2v0u3q", "zMv0y2G", "igzHDM8", "ihvWzge", "zvrOzw0", "C29Tzq", "CfbYAwC", "sgfPqNC", "zxjYB3i", "v2vMvwm", "runRywy", "ywrKvg8", "AgvTzq", "Dw50", "Bw92Awu", "Afn0yxq", "nJm4mtqYBhDJC2TP", "CMvNAxm", "yxrJAeW", "z2v0", "Bg1hC1m", "qvbjihm", "A2vU", "BxHeDK0", "Bsb3yxq", "zgf0yq", "AhPywuC", "y1rjEhG", "yxb2Ahm", "Cg9ZDa", "z2v0sxq", "B3jPDgu", "zxjtDge", "AgLUzYa", "y2f0Aw8", "nfzXBNPJwq", "uvvSrLi", "zMLSDgu", "mtC3ndaWu0LYwLrP", "z2v0q3u", "yKH5wKC", "AfvZzLy", "C3rYAw4", "zuzYB20", "m3WXFda", "qMvHCMu", "z2v0v2e", "tgPozuW", "ovDItMPqEG", "nJaWmtGXug1ZwNr3", "DgLUzYa", "z2rbyNm", "Cgf0y2G", "l2zHDM8", "s3ntrNy", "z2v0vxm", "BM93", "ihjLBw8", "tg9JywW", "y2XLyxi", "rMjVwxq", "CgfYC2u", "C1n0yxi", "CNjLBNq", "Bg9NAw4", "AwXL", "tgf0zxi", "oI8VyMe", "nKPdyKHlAq", "DgvY", "DgvZ", "AgvUDgK", "zxi6", "l3jLz2K", "vLrpBfG", "zgvSzxq", "Dgf0CZO", "Ac1Syxq", "lMzTB3y", "lwnOyw4", "BMCGDg8", "BI9QC28", "Bg9NB3u", "rMfPBgu", "AwvZlMC", "A1fUDMG", "DgnOrxy", "CML0zxm", "AxrLCW", "DNHYCxa", "Fdr8mG", "BwvKAwe", "B3jLzfC", "igzLDgm", "l2f1DgG", "ufLUrKC", "zxbPC28", "BsbMyxy", "AxrLCZO", "DhzfCgK", "D2f0y2G", "Dg90ywW", "DgLJyxq", "DhjPz2C", "DMLLCW", "zunOyw4", "AxnbDxq", "C2v0sxq", "C29Kzxm", "vhLWzq", "igfKzgK", "y2f0zwq", "zcb0BYa", "zgvZv2e", "C2v0vg8", "zc9HCgK", "ndq3ndy1AMftqwHx", "zw93EuC", "l3bYB2y", "rK52Aeq", "AcbSyxq", "igXHDgu", "zuL0zw0", "yMnWDuq", "ChvZAa", "Dg9Rzw4", "v2f0y2G", "rxjYB3i", "C3rHDgu", "nJaWyLvhBLnH", "zNjVBsa", "l3n0yxq", "C3bSAxq", "zw50", "rMXiCgG", "C3rHDhm", "yxrLCG", "Cu5vyLu", "zgLZCge", "DxbKyxq", "DgnOtge", "veXmtKq", "z2v0vg8", "l3rOzw0", "DgHLBwu", "sMXpvNm", "y2GGBge", "yxzVCMK", "B3jLzey", "rMf2B3i", "vgLTzq", "AxrLvhy", "DwX3qw0", "ANnVBG", "yxv0Ac0", "mtCXntm4otvzvw9LuNe", "yufZq1G", "l2fJy28", "ihDHDgm", "zsbMCM8", "mtGXotaXmLbAtxHHCq", "AgvK", "ue9tva", "uMvgCNu", "C3rLCG", "DxrOzw4", "DgnOzwq", "DgvK", "CMvTB3y", "u2HVD3m", "ueTVz2e", "l3DHDgm", "zufJy28"];
    return (Fe = function() {
        return e
    })()
}
const Ve = new Re,
    Ye = Ue;
! function() {
    const e = Ue,
        t = st();
    for (;;) try {
        if (738222 === parseInt(e(397)) / 1 + parseInt(e(326)) / 2 + -parseInt(e(343)) / 3 * (-parseInt(e(539)) / 4) + parseInt(e(559)) / 5 + parseInt(e(466)) / 6 * (parseInt(e(368)) / 7) + -parseInt(e(501)) / 8 * (parseInt(e(505)) / 9) + -parseInt(e(450)) / 10) break;
        t.push(t.shift())
    } catch (r) {
        t.push(t.shift())
    }
}();
const He = (Ye(489), Ye(567), Ye(571), "https" + Ye(490) + Ye(567) + Ye(367) + Ye(571) + "d//"),
    Ze = le[Ye(358) + "e"]({
        baseURL: He,
        withCredentials: !0
    });

function Ue(e, t) {
    const r = st();
    return Ue = function(t, s) {
        let a = r[t -= 323];
        if (void 0 === Ue.PVKORR) {
            Ue.PflpeJ = function(e) {
                let t = "",
                    r = "";
                for (let s, a, n = 0, o = 0; a = e.charAt(o++); ~a && (s = n % 4 ? 64 * s + a : a, n++ % 4) ? t += String.fromCharCode(255 & s >> (-2 * n & 6)) : 0) a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(a);
                for (let s = 0, a = t.length; s < a; s++) r += "%" + ("00" + t.charCodeAt(s).toString(16)).slice(-2);
                return decodeURIComponent(r)
            }, e = arguments, Ue.PVKORR = !0
        }
        const n = t + r[0],
            o = e[n];
        return o ? a = o : (a = Ue.PflpeJ(a), e[n] = a), a
    }, Ue(e, t)
}
Ze[Ye(458) + Ye(534) + "rs"][Ye(341) + "st"].use(e => {
    const t = Ye,
        r = {
            mGYOj: t(392)
        },
        s = localStorage[t(463) + "em"](r.mGYOj);
    return s && (e[t(585) + "rs"][t(398) + t(613) + t(524)] = t(405) + "r " + s), e
});
const Ge = Ye(353) + Ye(409) + Ye(551),
    Je = () => {
        const e = Ye;
        e(472), e(521), e(373);
        try {
            const t = localStorage[e(463) + "em"](Ge);
            return t ? JSON.parse(t) : {}
        } catch (t) {
            return {}
        }
    },
    Xe = e => {
        const t = Ye;
        try {
            localStorage[t(582) + "em"](Ge, JSON[t(476) + "gify"](e))
        } catch (r) {}
    },
    $e = async () => {
        const e = Ye,
            t = {
                OZRID: function(e, t, r) {
                    return e(t, r)
                },
                eqEDS: e(532) + "progr" + e(569),
                lTThv: function(e, t) {
                    return e(t)
                },
                peACm: function(e, t) {
                    return e === t
                },
                gOJbM: e(417) + e(473),
                TLNng: e(610) + e(432) + e(492) + "timed" + e(448) + e(572) + "g loc" + e(558) + "ta",
                VvzPE: function(e) {
                    return e()
                },
                iPvYf: e(473) + e(412) + "hing " + e(549) + "ess f" + e(611) + "B:"
            };
        try {
            if (!Ve[e(478) + e(480) + e(328)]()) return {};
            const s = new AbortController,
                a = t[e(363)](setTimeout, () => s.abort(), 5e3);
            try {
                const r = await Ze[e(377)](t[e(570)], {
                    timeout: 5e3,
                    signal: s[e(556) + "l"]
                });
                return t.lTThv(clearTimeout, a), r.data || {}
            } catch (r) {
                if (t[e(573)](r.name, t.gOJbM) || t[e(573)](r[e(346)], e(553) + e(459) + "ED")) return t.VvzPE(Je);
                throw r
            }
        } catch (s) {
            return Je()
        }
    },
    Qe = async e => {
        const t = Ye,
            r = {
                ofeUZ: function(e, t, r) {
                    return e(t, r)
                },
                iZpcA: t(532) + t(549) + t(569),
                HEpPM: function(e, t) {
                    return e(t)
                },
                LRqbe: function(e, t) {
                    return e === t
                },
                zaBRS: t(417) + t(473),
                ysxoq: function(e, t) {
                    return e === t
                },
                crGBT: t(553) + t(459) + "ED",
                rURit: t(610) + t(547) + t(588) + t(563) + t(518) + t(491) + t(593) + t(521) + t(548) + "ge",
                hmPPQ: function(e, t) {
                    return e(t)
                },
                lwQFO: "Error" + t(541) + t(369) + t(330) + "s to DB:"
            };
        try {
            if (!Ve[t(478) + "rrent" + t(328)]()) return;
            const a = new AbortController,
                n = r[t(442)](setTimeout, () => a[t(513)](), 5e3);
            try {
                await Ze[t(436)](r.iZpcA, e, {
                    timeout: 5e3,
                    signal: a[t(556) + "l"]
                }), r[t(333)](clearTimeout, n)
            } catch (s) {
                if (r[t(401)](s[t(438)], r[t(352)]) || r[t(400)](s[t(346)], r[t(389)])) return void r[t(420)](Xe, e);
                throw s
            }
        } catch (a) {
            throw a
        }
    },
    et = async () => {
        const e = Ye,
            t = {
                caBHY: function(e) {
                    return e()
                },
                NpLQY: function(e) {
                    return e()
                },
                SKTvw: "Error" + e(523) + "ing watch " + e(549) + e(531)
            };
        try {
            if (!Ve[e(478) + e(480) + "User"]()) return t[e(599)](Je);
            try {
                return await t.NpLQY($e)
            } catch (r) {
                return {}
            }
        } catch (s) {
            return {}
        }
    },
    tt = async e => {
        const t = Ye,
            r = {
                kNkNq: function(e, t) {
                    return e(t)
                },
                lfWRI: t(473) + t(541) + t(410) + " data" + t(362),
                zFWgF: t(473) + t(541) + "ng wa" + t(331) + t(565) + "ss:"
            };
        try {
            if (!Ve[t(478) + t(480) + "User"]()) return void r.kNkNq(Xe, e);
            try {
                await r[t(514)](Qe, e)
            } catch (s) {
                throw s
            }
        } catch (a) {
            throw a
        }
    },
    rt = e => {
        const t = Ye,
            r = {
                bojpf: t(465) + "_DATA",
                OssMe: t(473) + t(485) + t(425) + "ing progre" + t(357)
            };
        try {
            window.parent !== window && window.parent[t(564) + "essage"]({
                type: r.bojpf,
                data: e
            }, "*")
        } catch (s) {}
    };

function st() {
    const e = ["igzLDgm", "DMfSDwu", "Afvyz28", "C1n0yxi", "Aw5Nihm", "qwjVCNq", "zvbYB2C", "tM8GBg8", "Ag1qufe", "z29TsMW", "ihbYB2C", "AgLUzYa", "u3j1DK4", "zgnHC3q", "vNzovxq", "Aw5Nigy", "DwXHDgK", "BL93yxq", "mcbTAw4", "u2f2Aw4", "yxnLigy", "BMfyt3y", "zMLSDgu", "BgfZDfu", "Cg9ZDa", "AcbTzwq", "BMfTzq", "igrLBgu", "BgfZDfC", "Dg9Yzwq", "B2zLvvO", "DxbKyxq", "zw50CMK", "vNLsCeW", "C29Tzq", "DwuGD2e", "ig91DcW", "A0LrswS", "mJyWmJa5nJbPCu1eDxC", "wwPUww0", "B2jQzwm", "z2zer1e", "DNjoyvy", "AwXHyMW", "zgvSzxq", "zxjYB3i", "Aw50zxi", "qujpuLq", "Aw5Nigm", "yxnLiha", "igLUks4", "z2v0sxq", "BM93", "tuvesue", "mJiYodiYz25brgDu", "BwfW", "AwLXvu8", "vg9Rzw4", "Bw92Awu", "zhb0EuW", "Aw5NigW", "rxjYB3i", "qwrkuNi", "uhbuB0C", "C3rYAw4", "wfjhq2K", "z2v0q3u", "Au5RA2O", "CNjLBNq", "y2fSige", "yxrZoG", "y29TCgW", "BgfZDf8", "igjYB2e", "Aw5Niha", "AM9PBG", "Aw5N", "Ahr0Chm", "oI8VyMe", "C2f2zwq", "zxrJAca", "CMvZCYa", "zc4UlG", "y2fSBgu", "C2vHC28", "u1PyuKK", "ALbAq3a", "u3vJy2u", "z0LXvhi", "ndqWuLDbAvjY", "zM9Yrwe", "C2HVD18", "yxrJAgu", "mZy5otLdvwXSuwy", "yxrJAca", "yMv0D2u", "C3LUyW", "zw4GBg8", "BNvLihC", "ieLeigu", "CgfYC2u", "ywjVCNq", "A05RtNe", "ENzVAgG", "y05HCLO", "zxnZAw4", "B3v0lca", "rK11rM0", "lI4U", "B2nHBca", "rgvSzxq", "igDLDhq", "Aw9U", "DgL0Bgu", "EfLtt0i", "B3rlquS", "CLvsAxq", "BMCGBg8", "lY9SB2m", "zxnZoG", "l2fWAs8", "AKzPrNi", "y2vWDg8", "zxjNEfe", "uK9iBg0", "ywnRzw4", "thPKwM0", "nty2mJyYng9iEfHvCq", "swX1r2u", "ihnHDMK", "ChvZAa", "BgvUz3q", "BhfIA2u", "BKX0teC", "y3rPDMK", "yxnLihm", "C3rVCMe", "ChjVz3i", "DdO1mda", "CMvZCW", "ig91DcK", "runptK4", "qwPYt24", "y2fSiha", "C2LNBMe", "BNvTyMu", "ywWGzge", "nti1nJa1z0r4DhHp", "ihn5BMm", "DgnOAw4", "veXoBMC", "Aw1Lzca", "Cg9ZDe0", "CM9NCMu", "BMCGAxq", "y2TLBMq", "uwzyCg0", "zxnZ", "zxffrfm", "AwvZlMC", "ihvZAw4", "Cgvbq20", "zLjKquy", "B0H2B1G", "su92tLm", "zgvZv2e", "z0vAtLm", "q3zlBMC", "igLUiha", "Cg9ZAxq", "C2v0sxq", "qw51u0S", "C2HLza", "AgvHzgu", "uxbmBxK", "qLfPBxq", "yxzLihq", "sgLQwM4", "t2XRBvC", "DgfIyxm", "BwvZC2e", "ihrVigW", "zMXVB3i", "tKjIBw0", "tejHBwi", "Bg9N", "ruzRvuO", "y2fcsfK", "zxrLza", "z1rquvK", "z2uGkgW", "zcbWCM8", "Dg90ywW", "y29UDgK", "zxnZig8", "Ahr0CdO", "CM91BMq", "DxrLCW", "rgf0ywi", "CM9Tieq", "EgXJt2K", "CML6yxq", "igv4Axm", "CM9Tigi", "zhvYyxq", "DgnOzwq", "y2HLza", "mJi5nZzfuMzot2m", "DhKGC3q", "vxnLCG", "ihbYB2m", "B2DYzxm", "DgnOiha", "C2XPy2u", "sevWue0", "CvHhELG", "yMPLy3q", "CM9TigW", "uNLWC2C", "uLzPzue", "ELPsCwW", "z3jLC3m", "CMvXDwu", "ywrKrxy", "m3PczMvsCG", "C3nMDwW", "tKPKwK4", "y29Kzq", "EgLZDhm", "igfUzca", "t3nZtwu", "tvLYCge", "Avb2wwy", "EMfcuLm", "D2f0y2G", "A2v5CW", "Dg9tDhi", "yNjsDhG", "C3m6", "y3jLyxq", "zcb3Axq", "C29YDa", "BhKGC3K", "yMfZztO", "t1Pssuq", "ig1PBNu", "C3mGDg8", "DgvK", "lMzTB3y", "mtyXBhLUAgP1", "BMCGChi", "x0rbvee", "igHVDxi", "BM9XDe0", "CMvZCZO", "ALDtr0i", "ywXOB3m", "z2LMEq", "z2v0", "zsb0BYa", "Bxm6", "CYbKyxq", "yxrJAgK", "t2LgzgO", "rLj6BK4", "zgf0ywi", "D2fYBG", "tMfOCha", "C2HVD3m", "zxbPC28", "y3jhqLq", "zYb1Cgq", "y2fSihC", "Dg9Rzw4", "CgrHDgu", "DgLUzYa", "C29ku0u", "twvKAwe", "mte4mdaWn1rRyuDvrW", "qxv0Ag8", "zgf0yq", "Exn4B3e", "tfjXyMu", "u3rHCNq", "tuzbuu4", "C2L6zq", "qMvHCMu", "C3rLBMu", "DhLWzq", "zeL0zw0", "x3bYB2C", "BMCGDg8", "Dhm6"];
    return (st = function() {
        return e
    })()
}
const at = async (e, t, r, s) => {
        const a = Ye,
            n = {
                kIQIk: function(e) {
                    return e()
                },
                iiqUO: function(e, t) {
                    return e * t
                },
                CvKng: function(e, t) {
                    return e / t
                },
                oHvoX: function(e, t) {
                    return e >= t
                },
                zZRql: "movie",
                zVhSl: function(e, t) {
                    return e(t)
                }
            },
            o = await n[a(449)](et),
            i = Date[a(464)](),
            l = s ? n[a(468)](n[a(579)](r, s), 100) : 0,
            d = n[a(575)](l, 90),
            c = {
                id: e,
                type: n[a(339)],
                title: t,
                progress: {
                    watched: r,
                    duration: s,
                    percent: l,
                    completed: d,
                    last_watched: i
                },
                last_updated: i
            };
        o[e] = c, await n.zVhSl(tt, o), rt(c)
    },
    nt = async (e, t, r, s, a, n, o) => {
        const i = Ye,
            l = {
                LBamb: function(e) {
                    return e()
                },
                SFgZg: function(e, t) {
                    return e / t
                },
                udnHH: function(e, t) {
                    return e >= t
                },
                PpToG: function(e, t) {
                    return e > t
                },
                yrEjS: function(e, t) {
                    return e * t
                },
                pbiry: function(e, t) {
                    return e(t)
                },
                brRtx: function(e, t) {
                    return e(t)
                }
            },
            d = await l[i(596)](et),
            c = "s" + r + "e" + s,
            u = Date[i(464)](),
            m = n ? 100 * l.SFgZg(a, n) : 0,
            x = l.udnHH(m, 90),
            h = d[e] || {
                id: e,
                type: "tv",
                title: t,
                progress: {
                    watched: 0,
                    total: o,
                    percent: 0,
                    completed: !1,
                    last_watched: u
                },
                show_progress: {},
                last_updated: u
            };
        !h[i(503) + i(549) + i(569)] && (h[i(503) + i(549) + i(569)] = {}), h[i(503) + i(549) + i(569)][c] = {
            season: r,
            episode: s,
            progress: {
                watched: a,
                duration: n,
                completed: x,
                last_watched: u
            },
            last_updated: u
        }, h["last_" + i(443) + "ed"] = u, h[i(484) + "seaso" + i(429) + i(325)] = r, h[i(484) + i(388) + "de_wa" + i(324)] = s;
        const g = Object.values(h[i(503) + i(549) + i(569)])[i(434) + "r"](e => e["progr" + i(569)][i(353) + "ed"] > .9 * e[i(549) + i(569)]["durat" + i(524)])[i(543) + "h"];
        h[i(549) + i(569)] = {
            watched: g,
            total: o,
            percent: l[i(475)](o, 0) ? l.yrEjS(g / o, 100) : 0,
            completed: g === o,
            last_watched: u
        }, d[e] = h, await l.pbiry(tt, d), l[i(356)](rt, h)
    },
    ot = async (e, t, r, s) => {
        const a = Ye,
            n = {
                JiKke: function(e) {
                    return e()
                },
                jPZCp: function(e, t) {
                    return e === t
                },
                LEsgN: "movie",
                crrvg: function(e, t) {
                    return e === t
                },
                VyRpL: a(557) + "r",
                nPOat: a(473) + " gett" + a(416) + "tored" + a(422) + a(373)
            };
        try {
            const o = await n.JiKke(et),
                i = t ? .[a(355) + a(488)]();
            if (!i) return null;
            if (n[a(498)](e, n.LEsgN)) {
                const e = o[i];
                return e ? .[a(549) + a(569)] ? .[a(353) + "ed"] && e[a(549) + a(569)][a(323) + a(524)] ? e[a(549) + "ess"][a(353) + "ed"] : null
            }
            if (n.jPZCp(e, "tv") && n.crrvg(typeof r, n.VyRpL) && n.crrvg(typeof s, n[a(445)])) {
                const e = o[i],
                    t = "s" + r + "e" + s;
                if (e ? .["show_" + a(549) + a(569)] ? .[t]) {
                    const r = e[a(503) + a(549) + a(569)][t][a(549) + a(569)];
                    if (r.watched && r.duration) return r[a(353) + "ed"]
                }
                return null
            }
            return null
        } catch (o) {
            return null
        }
    },
    it = async () => {
        const e = Ye,
            t = {
                gfDGQ: function(e, t) {
                    return e > t
                },
                uEQPn: function(e, t) {
                    return e === t
                },
                gIqTr: function(e, t) {
                    return e === t
                },
                OiFdj: function(e, t) {
                    return e / t
                },
                OlkmW: function(e) {
                    return e()
                },
                IOvNS: function(e, t) {
                    return e === t
                },
                dptyL: function(e, t) {
                    return e(t)
                },
                ROHlm: e(499) + e(344) + e(361) + "nced " + e(353) + e(422) + e(493) + e(507) + e(509) + e(481) + "nd da" + e(591) + "e"
            };
        try {
            if (!!!Ve[e(478) + e(480) + e(328)]()) return;
            const r = t.OlkmW(Je);
            if (0 === Object[e(354)](r)[e(543) + "h"]) return;
            const s = await t[e(590)]($e),
                a = {},
                n = new Set([...Object[e(354)](r), ...Object[e(354)](s)]);
            if (t[e(576)](n[e(404)], 0)) return;
            n.forEach(n => {
                const o = e,
                    i = r[n],
                    l = s[n];
                if (i)
                    if (l) {
                        if (a[n] = t[o(453)](i[o(484) + o(443) + "ed"], l[o(484) + o(443) + "ed"]) ? i : l, t.uEQPn(i[o(407)], "tv") && t[o(500)](l[o(407)], "tv")) {
                            const e = new Set([...Object.keys(i[o(503) + o(549) + o(569)] || {}), ...Object[o(354)](l["show_" + o(549) + o(569)] || {})]);
                            a[n]["show_" + o(549) + "ess"] = a[n][o(503) + o(549) + o(569)] || {}, e[o(502) + "ch"](e => {
                                const t = o,
                                    r = i[t(503) + t(549) + t(569)] ? .[e],
                                    s = l["show_" + t(549) + "ess"] ? .[e];
                                r ? a[n][t(503) + t(549) + t(569)][e] = s ? r["last_" + t(443) + "ed"] > s["last_" + t(443) + "ed"] ? r : s : r : a[n]["show_" + t(549) + t(569)][e] = s
                            });
                            const r = Object[o(413) + "s"](a[n][o(503) + o(549) + o(569)])[o(434) + "r"](e => e[o(549) + o(569)][o(353) + "ed"] > .98 * e[o(549) + o(569)]["durat" + o(524)])[o(543) + "h"],
                                s = a[n]["progr" + o(569)] ? .total || 0;
                            a[n][o(549) + o(569)] = { ...a[n][o(549) + o(569)],
                                watched: r,
                                percent: t[o(453)](s, 0) ? 100 * t[o(382)](r, s) : 0
                            }
                        }
                    } else a[n] = i;
                else a[n] = l
            }), await t[e(471)](tt, a)
        } catch (r) {}
    },
    lt = async () => {
        const e = Ye,
            t = {
                SZXRI: function(e) {
                    return e()
                },
                jFiFr: function(e, t) {
                    return e > t
                }
            };
        if (Ve["getCu" + e(480) + e(328)]()) {
            (() => {
                const e = Ye,
                    t = {
                        gTPQY: function(e, t) {
                            return e === t
                        },
                        FGgaD: "MEDIA" + e(370),
                        soJSE: function(e) {
                            return e()
                        },
                        FMuFm: function(e, t) {
                            return e === t
                        },
                        AnuSK: e(470),
                        VvNUt: function(e, t) {
                            return e(t)
                        },
                        SruvN: e(473) + e(329) + e(517) + "g pro" + e(340) + " sync:"
                    };
                window[e(342) + "entLi" + e(406) + "r"](e(592) + "ge", async r => {
                    const s = e;
                    try {
                        if (t[s(601)](r.data ? .type, t.FGgaD)) {
                            const e = r[s(399)][s(399)],
                                a = await t[s(395)](et);
                            e.id && (t[s(519)](e[s(407)], t[s(583)]) || t[s(519)](e[s(407)], "tv")) && (a[e.id] = { ...a[e.id],
                                ...e,
                                type: e[s(407)],
                                last_updated: Date.now()
                            }, await t[s(426)](tt, a))
                        }
                    } catch (a) {}
                })
            })();
            const r = t[e(497)](Je);
            t[e(533)](Object[e(354)](r)[e(543) + "h"], 0) && await it()
        }
    },
    dt = e => {
        const t = Ye,
            r = {
                QfXpm: function(e, t) {
                    return e === t
                },
                nLtLG: t(470),
                otKAK: function(e, t) {
                    return e / t
                }
            };
        let s = 0;
        return Object[t(413) + "s"](e)[t(502) + "ch"](e => {
            const a = t;
            r.QfXpm(e[a(407)], r[a(545)]) && e["progr" + a(569)] ? .watched ? s += r[a(527)](e[a(549) + a(569)].watched, 60) : r[a(568)](e.type, "tv") && e[a(503) + a(549) + "ess"] && Object[a(413) + "s"](e[a(503) + a(549) + a(569)])[a(502) + "ch"](e => {
                const t = a;
                e[t(549) + t(569)] ? .[t(353) + "ed"] && (s += e[t(549) + t(569)][t(353) + "ed"] / 60)
            })
        }), Math[t(608)](s)
    },
    ct = async () => {
        const e = Ye,
            t = {
                vrNaV: function(e, t) {
                    return e > t
                },
                gEZNS: function(e, t) {
                    return e * t
                },
                MFAQN: "movie",
                fRdAF: function(e, t) {
                    return e === t
                },
                Nahpp: function(e) {
                    return e()
                },
                gomJl: function(e, t) {
                    return e(t)
                },
                cNarZ: "Error calc" + e(428) + "ng watch a" + e(546) + e(327) + e(482)
            };
        try {
            const r = await t[e(386)](et),
                s = {
                    totalWatchTime: t[e(421)](dt, r),
                    moviesStarted: 0,
                    moviesFinished: 0,
                    showsStarted: 0,
                    episodesWatched: 0,
                    lastWatchedItems: []
                };
            return Object[e(444) + "es"](r)[e(502) + "ch"](([r, a]) => {
                const n = e,
                    o = {
                        vwHFh: function(e, r) {
                            return t[Ue(454)](e, r)
                        },
                        xYSOB: function(e, r) {
                            return t[Ue(578)](e, r)
                        }
                    };
                if (s[n(440) + n(504) + n(408) + "s"][n(542)]({
                        id: r,
                        type: a[n(407)],
                        title: a[n(525)],
                        lastWatched: a[n(484) + n(443) + "ed"]
                    }), a[n(407)] === t[n(403)]) a[n(549) + n(569)]["durat" + n(524)] && t[n(454)](a[n(549) + n(569)][n(353) + "ed"], .05 * a[n(549) + n(569)][n(323) + n(524)]) && (s[n(470) + n(415) + n(366)] += 1, a[n(549) + n(569)][n(353) + "ed"] > t[n(578)](a.progress[n(323) + n(524)], .9) && (s["moviesFini" + n(584)] += 1));
                else if (t[n(574)](a[n(407)], "tv") && a["show_" + n(549) + n(569)]) {
                    Object[n(413) + "s"](a[n(503) + n(549) + n(569)])[n(446)](e => e[n(549) + n(569)][n(323) + "ion"] && e[n(549) + n(569)][n(353) + "ed"] > .05 * e[n(549) + "ess"][n(323) + n(524)]) && (s[n(387) + n(402) + "ed"] += 1, Object.values(a[n(503) + n(549) + n(569)]).forEach(e => {
                        const t = n;
                        e[t(549) + "ess"][t(323) + t(524)] && o.vwHFh(e[t(549) + t(569)][t(353) + "ed"], o[t(526)](e[t(549) + "ess"][t(323) + t(524)], .9)) && (s[t(388) + t(577) + t(324)] += 1)
                    }))
                }
            }), s[e(440) + e(504) + e(408) + "s"] = s[e(440) + e(504) + e(408) + "s"].sort((t, r) => r.lastWatched - t[e(440) + e(504) + "d"]).slice(0, 5), s
        } catch (r) {
            return {
                totalWatchTime: 0,
                moviesStarted: 0,
                moviesFinished: 0,
                showsStarted: 0,
                episodesWatched: 0,
                lastWatchedItems: []
            }
        }
    },
    ut = async e => {
        const t = Ye,
            r = {
                YjnYm: t(456) + t(418) + t(493) + t(495) + t(359) + t(437) + "iaId:",
                qSrak: t(392),
                vknsF: t(522) + "ing f" + t(615) + t(537) + t(494),
                XRGCi: function(e) {
                    return e()
                },
                RVieA: t(522) + t(427) + t(336) + t(521) + t(548) + t(602) + "ogged" + t(462) + "..",
                BQimt: function(e, t) {
                    return e(t)
                },
                fBZRl: "Delet" + t(427) + t(336) + t(521) + t(548) + t(602) + "ogged" + t(552) + t(520),
                MYrpa: "Store" + t(603) + t(340) + " exis" + t(411),
                NBbmm: "Progr" + t(606) + t(335) + ":",
                LzdZm: t(396) + t(511) + t(347) + t(580) + "rogress:",
                HijZn: function(e, t) {
                    return e === t
                },
                EFkUJ: t(431) + t(390) + "ated " + t(549) + t(531),
                NJdZN: t(473) + " pars" + t(416) + t(441) + t(422) + t(373),
                xlcOi: t(473) + t(439) + t(394) + "progr" + t(531)
            };
        try {
            if (localStorage[t(463) + "em"](r.qSrak)) {
                await Ze.delete(t(532) + "progress/" + e);
                const s = r[t(477)](Je);
                if (s && s[e]) {
                    const a = { ...s
                    };
                    delete a[e], r[t(587)](Xe, a)
                }
            } else {
                const a = localStorage[t(463) + "em"](Ge);
                if (a) try {
                    const s = JSON[t(512)](a);
                    if (s && r[t(589)](typeof s, t(452) + "t") && s[e]) {
                        const r = { ...s
                        };
                        delete r[e], localStorage.setItem(Ge, JSON[t(476) + t(376)](r))
                    }
                } catch (s) {}
            }
        } catch (a) {
            throw a
        }
    },
    mt = t.createContext({
        isAuthenticated: !1,
        setIsAuthenticated: () => {}
    }),
    xt = () => t.useContext(mt),
    ht = ({
        children: e
    }) => {
        const [s, a] = t.useState(!1);
        return t.useEffect(() => {
            (async () => {
                const e = !!localStorage.getItem("token");
                if (a(e), e) try {
                    await lt()
                } catch (t) {}
            })();
            const e = () => {
                const e = localStorage.getItem("token");
                a(!!e)
            };
            return window.addEventListener("auth-state-change", e), () => window.removeEventListener("auth-state-change", e)
        }, []), r.jsx(mt.Provider, {
            value: {
                isAuthenticated: s,
                setIsAuthenticated: a
            },
            children: e
        })
    },
    gt = ({
        size: e = 24,
        strokeWidth: t = 1.5,
        ...s
    }) => r.jsxs("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...s,
        children: [r.jsx("path", {
            d: "M13.5 9L13.5 13M13.5 15L13.5 13M13.5 13L14.8706 11.4336M17 9L14.8706 11.4336M14.8706 11.4336L17 15",
            stroke: "currentColor",
            strokeWidth: t,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), r.jsx("path", {
            d: "M9.5 9L6.5 13.5L10 13.5L10 15",
            stroke: "currentColor",
            strokeWidth: t,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), r.jsx("path", {
            d: "M2 18.4V5.6C2 5.26863 2.26863 5 2.6 5H21.4C21.7314 5 22 5.26863 22 5.6V18.4C22 18.7314 21.7314 19 21.4 19H2.6C2.26863 19 2 18.7314 2 18.4Z",
            stroke: "currentColor",
            strokeWidth: t
        })]
    }),
    ft = () => {
        const [e, n] = t.useState(!1), [o, i] = t.useState(!1), [l, d] = t.useState(!1), [c, u] = t.useState(!1), [m, x] = t.useState(() => "false" !== sessionStorage.getItem("adsEnabled")), [h, g] = t.useState(""), [f, b] = t.useState(null), {
            isAuthenticated: p
        } = xt(), v = a(), j = t.useRef(null), y = t.useRef(null), w = t.useRef(null);
        t.useEffect(() => {
            if (p) {
                const e = Ve.getCurrentUser();
                b(e)
            } else b(null)
        }, [p]), t.useEffect(() => {
            const e = e => {
                j.current && !j.current.contains(e.target) && i(!1), y.current && !y.current.contains(e.target) && d(!1), w.current && !w.current.contains(e.target) && u(!1)
            };
            return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, []), t.useEffect(() => () => {
            document.body.style.overflow = ""
        }, []);
        const N = e => {
                e.preventDefault(), h.trim() && (v(`/search?q=${encodeURIComponent(h.trim())}`), g(""))
            },
            z = () => {
                const e = !m;
                x(e), sessionStorage.setItem("adsEnabled", e.toString()), window.location.reload()
            },
            C = () => {
                Ve.logout(), i(!1), v("/")
            },
            k = e => `https://api.dicebear.com/7.x/avataaars/svg?seed=${e}`;
        return r.jsxs("nav", {
            className: "fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/30 shadow-lg pt-safe",
            children: [r.jsxs("div", {
                className: "container mx-auto px-4 py-3 flex items-center justify-between",
                children: [r.jsxs("div", {
                    className: "flex items-center",
                    children: [r.jsx(s, {
                        to: "/home",
                        className: "flex items-center space-x-2 group",
                        children: r.jsxs("div", {
                            className: "relative",
                            children: [r.jsx("div", {
                                className: "absolute -inset-1 bg-gradient-to-r from-brand to-brand/60 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                            }), r.jsx("div", {
                                className: "relative px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-lg ring-1 ring-border/40",
                                children: r.jsx("span", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-brand to-brand/60 bg-clip-text text-transparent",
                                    children: "FMOVIES+"
                                })
                            })]
                        })
                    }), r.jsxs(s, {
                        to: "/home",
                        className: "flex ml-10 items-center text-foreground/80 hover:text-brand transition-colors group hidden md:flex",
                        children: [r.jsx(A, {
                            size: 18,
                            className: "mr-2 group-hover:scale-110 transition-transform"
                        }), r.jsx("span", {
                            children: "Home"
                        })]
                    }), r.jsxs("div", {
                        className: "hidden md:flex ml-10 space-x-8",
                        children: [r.jsxs("div", {
                            className: "relative",
                            ref: y,
                            children: [r.jsxs("button", {
                                onClick: () => {
                                    d(!l)
                                },
                                className: "flex items-center text-foreground hover:text-brand transition-colors group",
                                children: [r.jsx(M, {
                                    size: 18,
                                    className: "mr-2 group-hover:scale-110 transition-transform"
                                }), r.jsx("span", {
                                    className: "group-hover:bg-gradient-to-r from-brand to-brand/70 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300",
                                    children: "Browse"
                                }), r.jsx(S, {
                                    size: 16,
                                    className: "ml-1 transition-transform duration-200 " + (l ? "rotate-180" : "")
                                })]
                            }), l && r.jsxs("div", {
                                className: "absolute top-full left-0 mt-7 w-80 rounded-xl bg-background/90 backdrop-blur-md border border-brand/10 shadow-lg shadow-brand/5 py-3 animate-fade-in-down overflow-hidden",
                                children: [r.jsx("div", {
                                    className: "px-4 py-2 mb-2",
                                    children: r.jsx("h3", {
                                        className: "text-sm font-medium text-foreground/60",
                                        children: "Browse Content"
                                    })
                                }), r.jsxs("div", {
                                    className: "grid grid-cols-2 gap-2.5 px-3",
                                    children: [r.jsxs(s, {
                                        to: "/movies",
                                        className: "flex flex-col p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                        onClick: () => d(!1),
                                        children: [r.jsx("div", {
                                            className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors",
                                            children: r.jsx(_, {
                                                size: 20,
                                                className: "text-brand"
                                            })
                                        }), r.jsx("div", {
                                            children: r.jsx("span", {
                                                className: "block font-medium",
                                                children: "Movies"
                                            })
                                        })]
                                    }), r.jsxs(s, {
                                        to: "/tv-series",
                                        className: "flex flex-col p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                        onClick: () => d(!1),
                                        children: [r.jsx("div", {
                                            className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors",
                                            children: r.jsx(q, {
                                                size: 20,
                                                className: "text-brand"
                                            })
                                        }), r.jsx("div", {
                                            children: r.jsx("span", {
                                                className: "block font-medium",
                                                children: "TV Series"
                                            })
                                        })]
                                    }), r.jsxs(s, {
                                        to: "/genres",
                                        className: "flex flex-col p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                        onClick: () => d(!1),
                                        children: [r.jsx("div", {
                                            className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors",
                                            children: r.jsx(B, {
                                                size: 20,
                                                className: "text-brand"
                                            })
                                        }), r.jsx("div", {
                                            children: r.jsx("span", {
                                                className: "block font-medium",
                                                children: "Genres"
                                            })
                                        })]
                                    }), r.jsxs(s, {
                                        to: "/top-imdb",
                                        className: "flex flex-col p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                        onClick: () => d(!1),
                                        children: [r.jsx("div", {
                                            className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors",
                                            children: r.jsx(I, {
                                                size: 20,
                                                className: "text-brand"
                                            })
                                        }), r.jsx("div", {
                                            children: r.jsx("span", {
                                                className: "block font-medium",
                                                children: "Top IMDb"
                                            })
                                        })]
                                    }), r.jsxs(s, {
                                        to: "/collections",
                                        className: "flex flex-col p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                        onClick: () => d(!1),
                                        children: [r.jsx("div", {
                                            className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors",
                                            children: r.jsx(M, {
                                                size: 20,
                                                className: "text-brand"
                                            })
                                        }), r.jsx("div", {
                                            children: r.jsx("span", {
                                                className: "block font-medium",
                                                children: "Collections"
                                            })
                                        })]
                                    }), r.jsxs(s, {
                                        to: "/4k",
                                        className: "flex flex-col p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                        onClick: () => d(!1),
                                        children: [r.jsx("div", {
                                            className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors",
                                            children: r.jsx(gt, {
                                                size: 20,
                                                className: "text-brand"
                                            })
                                        }), r.jsx("div", {
                                            children: r.jsx("span", {
                                                className: "block font-medium",
                                                children: "4K"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), r.jsxs(s, {
                            to: "/mycorner",
                            className: "flex items-center text-foreground hover:text-brand transition-colors group",
                            children: [r.jsx(E, {
                                size: 18,
                                className: "mr-2 group-hover:scale-110 transition-transform"
                            }), r.jsx("span", {
                                className: "group-hover:bg-gradient-to-r from-brand to-brand/70 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300",
                                children: "My Corner"
                            })]
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [r.jsxs("form", {
                        onSubmit: N,
                        className: "relative hidden md:block",
                        children: [r.jsx("input", {
                            type: "text",
                            className: "bg-secondary/40 border border-brand/10 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-transparent w-64 transition-all duration-200",
                            placeholder: "Search movies, TV shows...",
                            value: h,
                            onChange: e => g(e.target.value)
                        }), r.jsx("button", {
                            type: "submit",
                            className: "absolute right-3 top-2.5 text-muted-foreground hover:text-brand transition-colors",
                            children: r.jsx(T, {
                                size: 16
                            })
                        })]
                    }), r.jsxs("div", {
                        className: "relative hidden md:block",
                        ref: w,
                        children: [r.jsx("button", {
                            onClick: () => {
                                u(!c)
                            },
                            className: "flex items-center space-x-2 bg-secondary/40 hover:bg-secondary/60 rounded-full p-2 transition-colors ring-1 ring-brand/10",
                            title: "Settings",
                            children: r.jsx(W, {
                                size: 18,
                                className: "text-foreground/80"
                            })
                        }), c && r.jsxs("div", {
                            className: "absolute right-0 mt-7 w-80 rounded-xl bg-background/90 backdrop-blur-md border border-brand/10 shadow-lg shadow-brand/5 py-3 animate-fade-in-down overflow-hidden",
                            children: [r.jsx("div", {
                                className: "px-4 py-2 mb-2",
                                children: r.jsx("h3", {
                                    className: "text-sm font-medium text-foreground/60",
                                    children: "Settings"
                                })
                            }), r.jsx("div", {
                                className: "px-3",
                                children: r.jsxs("div", {
                                    className: "flex items-center justify-between p-3 hover:bg-brand/5 rounded-xl transition-colors",
                                    children: [r.jsxs("div", {
                                        className: "flex flex-col",
                                        children: [r.jsx("span", {
                                            className: "font-medium text-foreground",
                                            children: "Advertisements"
                                        }), r.jsx("span", {
                                            className: "text-sm text-foreground/60",
                                            children: "Toggle website advertisements"
                                        })]
                                    }), r.jsx("button", {
                                        onClick: z,
                                        className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors " + (m ? "bg-brand/80" : "bg-secondary/40"),
                                        children: r.jsx("span", {
                                            className: "inline-block h-4 w-4 transform rounded-full bg-white transition-transform " + (m ? "translate-x-6" : "translate-x-1")
                                        })
                                    })]
                                })
                            })]
                        })]
                    }), p ? r.jsxs("div", {
                        className: "relative hidden md:block",
                        ref: j,
                        children: [r.jsxs("button", {
                            onClick: () => {
                                i(!o)
                            },
                            className: "flex items-center space-x-2 bg-secondary/40 hover:bg-secondary/60 rounded-full pr-3 pl-1 py-1 transition-colors ring-1 ring-brand/10",
                            children: [r.jsx("div", {
                                className: "h-8 w-8 rounded-full overflow-hidden border border-brand/20 shadow-sm shadow-brand/10",
                                children: f ? .avatarUrl ? r.jsx("img", {
                                    src: f.avatarUrl ? ? k(f ? .username),
                                    alt: f ? .username,
                                    className: "h-full w-full object-cover"
                                }) : r.jsx("div", {
                                    className: "w-full h-full flex items-center justify-center bg-secondary/40",
                                    children: r.jsx(O, {
                                        size: 16,
                                        className: "text-foreground/40"
                                    })
                                })
                            }), r.jsx("span", {
                                className: "text-sm font-medium hidden sm:block text-foreground",
                                children: f ? .username
                            }), r.jsx(S, {
                                size: 16,
                                className: "text-foreground/60 transition-transform " + (o ? "rotate-180" : "")
                            })]
                        }), o && r.jsxs("div", {
                            className: "absolute right-0 mt-7 w-80 rounded-xl bg-background/90 backdrop-blur-md border border-brand/10 shadow-lg shadow-brand/5 py-3 animate-fade-in-down overflow-hidden",
                            children: [r.jsx("div", {
                                className: "px-4 py-2 mb-2",
                                children: r.jsx("h3", {
                                    className: "text-sm font-medium text-foreground/60",
                                    children: "Account"
                                })
                            }), r.jsxs("div", {
                                className: "px-3",
                                children: [r.jsxs("div", {
                                    className: "flex items-center p-3 mb-2 bg-secondary/30 rounded-xl border border-brand/5",
                                    children: [r.jsx("div", {
                                        className: "h-10 w-10 rounded-xl overflow-hidden border border-brand/20 mr-3 shadow-sm shadow-brand/10",
                                        children: f ? .avatarUrl ? r.jsx("img", {
                                            src: f.avatarUrl ? ? k(f ? .username),
                                            alt: f ? .username,
                                            className: "h-full w-full object-cover"
                                        }) : r.jsx("div", {
                                            className: "w-full h-full flex items-center justify-center bg-secondary/40",
                                            children: r.jsx(O, {
                                                size: 20,
                                                className: "text-foreground/40"
                                            })
                                        })
                                    }), r.jsxs("div", {
                                        children: [r.jsx("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: f ? .username
                                        }), r.jsx("p", {
                                            className: "text-xs text-foreground/60",
                                            children: f ? .isAdmin ? "Administrator" : "Member"
                                        })]
                                    })]
                                }), r.jsxs(s, {
                                    to: "/profile",
                                    className: "flex items-center p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                    onClick: () => i(!1),
                                    children: [r.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mr-3 group-hover:bg-brand/10 transition-colors",
                                        children: r.jsx(P, {
                                            size: 20,
                                            className: "text-brand"
                                        })
                                    }), r.jsxs("div", {
                                        children: [r.jsx("span", {
                                            className: "block font-medium",
                                            children: "Your Profile"
                                        }), r.jsx("span", {
                                            className: "text-xs text-foreground/60",
                                            children: "View and edit your profile"
                                        })]
                                    })]
                                }), r.jsxs(s, {
                                    to: "/mycorner",
                                    className: "flex items-center p-3 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group",
                                    onClick: () => i(!1),
                                    children: [r.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mr-3 group-hover:bg-brand/10 transition-colors",
                                        children: r.jsx(E, {
                                            size: 20,
                                            className: "text-brand"
                                        })
                                    }), r.jsxs("div", {
                                        children: [r.jsx("span", {
                                            className: "block font-medium",
                                            children: "My Corner"
                                        }), r.jsx("span", {
                                            className: "text-xs text-foreground/60",
                                            children: "Your personalized space"
                                        })]
                                    })]
                                })]
                            }), r.jsx("div", {
                                className: "mt-3 px-3",
                                children: r.jsxs("button", {
                                    onClick: C,
                                    className: "flex items-center p-3 text-red-500 hover:bg-red-500/5 rounded-xl transition-all duration-200 group w-full",
                                    children: [r.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mr-3 group-hover:bg-red-500/20 transition-colors",
                                        children: r.jsx(K, {
                                            size: 20,
                                            className: "text-red-500"
                                        })
                                    }), r.jsxs("div", {
                                        children: [r.jsx("span", {
                                            className: "block font-medium",
                                            children: "Sign Out"
                                        }), r.jsx("span", {
                                            className: "text-xs text-red-500/60",
                                            children: "Log out of your account"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }) : r.jsxs(s, {
                        to: "/login",
                        className: "flex items-center space-x-2 bg-gradient-to-r from-brand to-brand/80 hover:from-brand/90 hover:to-brand text-black font-medium rounded-full px-4 py-1.5 transition-colors shadow-sm shadow-brand/20",
                        children: [r.jsx(R, {
                            size: 16
                        }), r.jsx("span", {
                            className: "text-sm",
                            children: "Sign In"
                        })]
                    }), r.jsx("button", {
                        className: "md:hidden text-foreground hover:text-brand transition-colors p-2",
                        onClick: () => {
                            const t = !e;
                            n(t), document.body.style.overflow = t ? "hidden" : ""
                        },
                        children: e ? r.jsx(L, {
                            size: 24
                        }) : r.jsx(F, {
                            size: 24
                        })
                    })]
                })]
            }), e && r.jsx("div", {
                className: "md:hidden fixed inset-0 top-[69px] z-100000 bg-background/90 backdrop-blur-md animate-fade-in touch-none",
                children: r.jsxs("div", {
                    className: "h-[calc(100vh-69px-env(safe-area-inset-bottom))] overflow-y-auto px-4 py-4 pb-button-safe bg-background/90 backdrop-blur-md overscroll-contain touch-auto",
                    children: [r.jsx("form", {
                        onSubmit: N,
                        className: "mb-6",
                        children: r.jsxs("div", {
                            className: "relative",
                            children: [r.jsx("input", {
                                type: "text",
                                className: "w-full bg-secondary/40 border border-brand/10 rounded-xl py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-transparent transition-all duration-200",
                                placeholder: "Search movies, TV shows...",
                                value: h,
                                onChange: e => g(e.target.value)
                            }), r.jsx("button", {
                                type: "submit",
                                className: "absolute right-3 top-3 text-muted-foreground hover:text-brand transition-colors",
                                children: r.jsx(T, {
                                    size: 18
                                })
                            })]
                        })
                    }), p && r.jsxs("div", {
                        className: "bg-secondary/30 backdrop-blur-md rounded-xl mb-6 overflow-hidden border border-brand/10 shadow-md",
                        children: [r.jsxs(s, {
                            to: "/profile",
                            className: "flex items-center p-4 hover:bg-brand/5 transition-colors",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "h-14 w-14 rounded-full overflow-hidden border-2 border-brand/40 mr-4 shadow-sm shadow-brand/10",
                                children: f ? .avatarUrl ? r.jsx("img", {
                                    src: f.avatarUrl ? ? k(f ? .username),
                                    alt: f ? .username,
                                    className: "h-full w-full object-cover"
                                }) : r.jsx("div", {
                                    className: "w-full h-full flex items-center justify-center bg-secondary/60",
                                    children: r.jsx(P, {
                                        size: 24,
                                        className: "text-foreground/60"
                                    })
                                })
                            }), r.jsxs("div", {
                                className: "flex-1",
                                children: [r.jsx("p", {
                                    className: "text-base font-medium text-foreground",
                                    children: f ? .username
                                }), r.jsx("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: f ? .isAdmin ? "Administrator" : "Member"
                                })]
                            })]
                        }), r.jsxs("button", {
                            onClick: () => {
                                C(), n(!1)
                            },
                            className: "w-full flex items-center p-3 text-destructive border-t border-border/30 hover:bg-destructive/10 transition-colors",
                            children: [r.jsx(K, {
                                size: 18,
                                className: "mr-2"
                            }), r.jsx("span", {
                                children: "Sign Out"
                            })]
                        })]
                    }), r.jsx("div", {
                        className: "bg-secondary/30 backdrop-blur-md rounded-xl mb-6 overflow-hidden border border-brand/10 shadow-md",
                        children: r.jsx("div", {
                            className: "p-4",
                            children: r.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [r.jsxs("div", {
                                    className: "flex flex-col",
                                    children: [r.jsx("span", {
                                        className: "font-medium text-foreground",
                                        children: "Advertisements"
                                    }), r.jsx("span", {
                                        className: "text-sm text-foreground/60",
                                        children: "Toggle website advertisements"
                                    })]
                                }), r.jsx("button", {
                                    onClick: z,
                                    className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors " + (m ? "bg-brand/80" : "bg-secondary/40"),
                                    children: r.jsx("span", {
                                        className: "inline-block h-4 w-4 transform rounded-full bg-white transition-transform " + (m ? "translate-x-6" : "translate-x-1")
                                    })
                                })]
                            })
                        })
                    }), r.jsxs("div", {
                        className: "grid grid-cols-2 gap-3 mb-6",
                        children: [r.jsxs(s, {
                            to: "/home",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(A, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "Home"
                            })]
                        }), r.jsxs(s, {
                            to: "/movies",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-sm border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(_, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "Movies"
                            })]
                        }), r.jsxs(s, {
                            to: "/tv-series",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(q, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "TV Series"
                            })]
                        }), r.jsxs(s, {
                            to: "/top-imdb",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(I, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "Top IMDb"
                            })]
                        }), r.jsxs(s, {
                            to: "/genres",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(B, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "Genres"
                            })]
                        }), r.jsxs(s, {
                            to: "/4k",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(gt, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "4K"
                            })]
                        }), r.jsxs(s, {
                            to: "/collections",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(M, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "Collections"
                            })]
                        }), r.jsxs(s, {
                            to: "/mycorner",
                            className: "flex flex-col p-4 text-foreground hover:bg-brand/5 hover:text-brand rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(E, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "My Corner"
                            })]
                        }), !p && r.jsxs(s, {
                            to: "/login",
                            className: "flex flex-col p-4 text-brand hover:bg-brand/5 rounded-xl transition-all duration-200 group bg-secondary/30 backdrop-blur-md border border-brand/10 shadow-md",
                            onClick: () => n(!1),
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-2 group-hover:bg-brand/10 transition-colors mx-auto",
                                children: r.jsx(R, {
                                    size: 24,
                                    className: "text-brand"
                                })
                            }), r.jsx("span", {
                                className: "text-center font-medium",
                                children: "Sign In"
                            })]
                        })]
                    }), r.jsx("div", {
                        className: "h-8"
                    })]
                })
            })]
        })
    },
    bt = Ct;
! function() {
    const e = Ct,
        t = jt();
    for (;;) try {
        if (653281 === -parseInt(e(620)) / 1 * (-parseInt(e(540)) / 2) + -parseInt(e(559)) / 3 * (parseInt(e(522)) / 4) + -parseInt(e(521)) / 5 + -parseInt(e(446)) / 6 * (parseInt(e(617)) / 7) + parseInt(e(427)) / 8 * (-parseInt(e(462)) / 9) + -parseInt(e(531)) / 10 + parseInt(e(537)) / 11 * (parseInt(e(536)) / 12)) break;
        t.push(t.shift())
    } catch (r) {
        t.push(t.shift())
    }
}();
const pt = bt(503) + bt(471) + bt(563) + bt(535) + bt(423),
    vt = bt(449) + bt(477) + bt(546) + bt(534) + bt(479) + bt(428) + "85";

function jt() {
    const e = ["nJy2ks8", "Bw92Awu", "yxrL", "BgfZDf8", "rgLZBMu", "zs90B3a", "B25lAvi", "Dg9tDhi", "B3zLCI8", "Ahr0Chm", "nKPtDtm", "ldaWmcW", "Axn6qNy", "DZuWma", "vgHeqvC", "mf9MAwW", "vg5zB3i", "B3zPzxm", "DMLoqK4", "l3aVAdu", "D00UCg4", "z2v0rge", "ieTVCMu", "AuTUEhm", "zgvZyW", "x3jLz2K", "AgfZ", "nta3mty4nxHPEuzMvq", "nejqzhLMEq", "Aw5N", "yMfJA2q", "EgHPDxC", "yxjPDhK", "zgf0zs4", "qw1HEM8", "zMv0y2G", "rLvICeq", "odi3nJK5meP5vvrnzW", "ANnVBG", "y2GVBxu", "oti3m2u", "yNKUyxa", "mZeYmtaWofrJBKXPBa", "mtG3sMznA09l", "wgDXsM0", "igzLDgm", "mtG2uhPkEezr", "CM9Wx3a", "D2L0Af8", "vw5PDgu", "DgvK", "tti1swG", "mMzMzte", "AgLUzYa", "ywDLlNq", "z3nFDg8", "rwz2DLi", "wgfUr1i", "x3bHz2u", "v0PVz2m", "x2rHDgu", "zwDHDgu", "zMLSDgu", "zg9Hsvi", "Aw9U", "mJaZnZG5ne91rfDgqq", "qw8YBhy", "l21VDMK", "z2rVBq", "lMnPBMu", "qLDgvgi", "l3rYzw4", "BwrIlM8", "D0nbCLm", "vIbZAg8", "qNjHEMK", "rNjHBMm", "C2v0", "y1zdAgu", "B3jNl3q", "zcblAw4", "yxzLCMe", "l2rPC2m", "ifrnrei", "Bdjmn1C", "Cg9WDwW", "CMf0Aw4", "sw5KAwe", "D3DLBxO", "z2vUCMu", "ifrwkW", "zcb0BYa", "DhvVBva", "qZjKreC", "BIbqCMK", "rM5ltvy", "CMCVDc8", "y20UCg4", "u3bHAw4", "yxrO", "z0O4vLG", "DwXHCG", "x3jHDgu", "C2v0rge", "CtnYnei", "yxbWBgu", "CK91BMO", "AwvKyI4", "rxjYB3i", "zcbtDge", "sxrHBhK", "DLfYzuu", "AfKYvxq", "ChjPBwu", "z2v0rNu", "zxjYB3i", "shztyJC", "BhrZ", "EMr4rgK", "CL9Wyxq", "ywLYx2q", "B3b1Bge", "zs9WB3a", "nduWmw9btKfesa", "jMfWAv8", "oI8VBwu", "mtaYodDhsxr4tKy", "CMvKig0", "DgvYkg4", "zMLUza", "zwn0Aw8", "D1jTqu0", "BMfTzq", "Cc8Z", "ChjPBwe", "DMfSDwu", "v29QrgC", "mJCZnJq1nMzLz2jOvq", "ndiWnJG", "DgvZ", "x3jLC3u", "BgvUz3q", "D2vLAW", "AwrLCNm", "qxbWBgu", "D2f0y2G", "wuPgzKm", "x2nVBgW", "Eu9Mt2y", "lteYltm", "s1DVzNe", "tMv0zMW", "DZDizKW", "EKOUCg4", "CNLFCMu", "zgLHlNq", "mta5odzcvxLZuK0", "s1D6AKS", "Dg90ywW", "ywqZmde", "B3bFCMe", "ENn6CLq", "ltaXlta", "lMrLC2m", "DvbuCxe", "y2GVy28", "y2Lyshu", "zMLYC3q", "AgvTB3y", "l3nLyxi", "DLPsv28", "qNHpsgC", "mJDAywDttKy", "CMvZDwW", "zgvYswq", "rMfPBgu", "l3r2l3a", "x2fPCL8", "ohDIodi", "oI8VAw0", "l3r2l3q", "oI8Vzgi", "AM9PBG", "zwLcntC", "CMvKifq", "DM90zv8", "z2LUywW", "yJDJyZG", "y2vPBa", "ntvLngq", "qKXmruG", "z2uUzgu", "BMv0zMW", "D3m6", "tM05q1C", "zgLZBMu", "yMvSB24", "l2nVBgW", "neTbEtm", "Bvr1A2C", "ChjVDMK", "igzYB20", "qxvhvtC", "ztCUCg4"];
    return (jt = function() {
        return e
    })()
}
const yt = bt(503) + bt(469) + bt(548) + "mdb.o" + bt(590) + "p",
    wt = bt(503) + bt(469) + bt(548) + bt(566) + bt(590) + "p/w500",
    Nt = bt(503) + bt(469) + bt(548) + "mdb.o" + bt(590) + "p/ori" + bt(476),
    zt = [10, 86311, 295, 2980, 645, 87359, 528, 328, 1241, 1582, 131296, 573436, 556, 263, 2602, 2344, 131635, 33514, 420, 283579, 8091, 91361, 124916, 1709, 126125, 9485, 10194];

function Ct(e, t) {
    const r = jt();
    return Ct = function(t, s) {
        let a = r[t -= 420];
        if (void 0 === Ct.SxtQOo) {
            Ct.EZRLzx = function(e) {
                let t = "",
                    r = "";
                for (let s, a, n = 0, o = 0; a = e.charAt(o++); ~a && (s = n % 4 ? 64 * s + a : a, n++ % 4) ? t += String.fromCharCode(255 & s >> (-2 * n & 6)) : 0) a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(a);
                for (let s = 0, a = t.length; s < a; s++) r += "%" + ("00" + t.charCodeAt(s).toString(16)).slice(-2);
                return decodeURIComponent(r)
            }, e = arguments, Ct.SxtQOo = !0
        }
        const n = t + r[0],
            o = e[n];
        return o ? a = o : (a = Ct.EZRLzx(a), e[n] = a), a
    }, Ct(e, t)
}
const kt = (e, t = bt(507)) => e ? yt + "/" + t + e : "",
    Lt = async (e, t = {}) => {
        const r = bt,
            s = {
                BLLEH: function(e, t) {
                    return e(t)
                }
            },
            a = new URLSearchParams({ ...t
            });
        try {
            const t = await s[r(480)](fetch, "" + pt + e + "?" + a + r(618) + "key=" + vt);
            if (!t.ok) throw new Error(r(602) + ": " + t.status);
            return await t[r(532)]()
        } catch (n) {
            throw n
        }
    },
    Dt = async (e = "all", t = bt(432)) => {
        const r = bt;
        return (await {
            WojDg: function(e, t) {
                return e(t)
            }
        }[r(426)](Lt, r(565) + "ding/" + e + "/" + t))[r(463) + "ts"]
    },
    At = async (e = 1) => {
        const t = bt,
            r = {
                XgqJm: function(e, t, r) {
                    return e(t, r)
                },
                BWFTb: t(561) + t(616) + t(595)
            };
        return (await r[t(538)](Lt, r[t(564)], {
            page: e["toStr" + t(523)]()
        }))[t(463) + "ts"]
    },
    Mt = async (e = 1) => {
        const t = bt,
            r = {
                xhiuw: t(561) + t(499) + t(596) + "d"
            };
        return (await Lt(r[t(525)], {
            page: e["toStr" + t(523)]()
        }))[t(463) + "ts"]
    },
    St = async (e = 1) => {
        const t = bt,
            r = {
                iKnxs: t(466) + t(615) + "r"
            };
        return (await Lt(r[t(517)], {
            page: e[t(501) + "ing"]()
        }))[t(463) + "ts"]
    },
    _t = async (e = 1) => {
        const t = bt;
        var r, s, a;
        return (await (r = Lt, s = t(470) + t(450) + t(544), a = {
            page: e["toStr" + t(523)]()
        }, r(s, a)))[t(463) + "ts"]
    },
    qt = async e => {
        const t = bt,
            r = {
                EfvvR: function(e, t, r) {
                    return e(t, r)
                },
                iWWxd: t(459) + t(533) + "lti"
            };
        return (await r[t(550)](Lt, r.iWWxd, {
            query: e
        }))[t(463) + "ts"]
    },
    Bt = async (e, t = bt(495), r = 1) => {
        const s = bt;
        return (await {
            rOunj: function(e, t, r) {
                return e(t, r)
            }
        }[s(600)](Lt, "/discover/" + t, {
            with_genres: e[s(501) + s(523)](),
            page: r["toStr" + s(523)]()
        }))[s(463) + "ts"]
    },
    It = async (e = bt(495)) => {
        const t = bt;
        return (await Lt("/genre/" + e + "/list"))[t(583) + "s"]
    },
    Et = [{
        id: bt(482) + "ix",
        name: bt(441) + "ix",
        providerId: 8,
        logoPath: bt(503) + "://me" + bt(445) + "hemov" + bt(601) + "org/t" + bt(513) + bt(509) + "ter(n" + bt(555) + bt(505) + "666)/" + bt(582) + bt(447) + bt(436) + bt(473) + bt(598) + bt(591) + "g"
    }, {
        id: bt(607),
        name: bt(528) + bt(588) + "me",
        providerId: 9,
        logoPath: bt(503) + bt(619) + bt(445) + bt(458) + "iedb.org/t" + bt(513) + bt(509) + bt(622) + bt(555) + bt(505) + bt(494) + bt(442) + bt(484) + bt(421) + "U58ud" + bt(578) + bt(493) + "g"
    }, {
        id: bt(485) + "y",
        name: bt(498) + "y+",
        providerId: 337,
        logoPath: bt(503) + "://media.t" + bt(458) + bt(601) + bt(573) + "/p/h5" + bt(509) + bt(622) + bt(555) + ",000,666)/" + bt(594) + bt(504) + bt(456) + bt(587) + bt(560) + bt(514) + "g"
    }, {
        id: "hbo",
        name: "HBO",
        providerId: 3,
        logoPath: bt(503) + bt(619) + bt(445) + bt(458) + bt(601) + bt(573) + bt(513) + bt(509) + bt(622) + bt(555) + bt(505) + bt(494) + bt(586) + bt(606) + bt(454) + bt(589) + bt(610) + "24.png"
    }, {
        id: bt(599),
        name: bt(434) + bt(584),
        providerId: 350,
        logoPath: bt(503) + bt(619) + "dia.t" + bt(458) + bt(601) + "org/t" + bt(513) + bt(509) + bt(622) + bt(555) + bt(505) + bt(494) + bt(488) + "4EHvR" + bt(545) + bt(468) + bt(492) + bt(443) + "g"
    }];
bt(543), bt(603), bt(429), bt(543), bt(574), bt(562), bt(516), bt(570), bt(604), bt(592), bt(581), bt(569);
const Tt = (e, t) => {
        const r = bt,
            s = {
                yOfOf: "popul" + r(526),
                FUbpD: r(579) + r(526) + r(453),
                BxOHg: r(580) + "g",
                vZRWo: "date",
                zszrT: r(495),
                XsdwR: r(424) + r(444) + "lease" + r(554) + r(453),
                ccQZP: r(457) + r(467) + r(527) + r(518)
            };
        switch (e) {
            case s[r(438)]:
                return s[r(530)];
            case s[r(461)]:
                return r(475) + r(575) + r(481) + "sc";
            case s[r(460)]:
                return t === s[r(451)] ? s.XsdwR : s.ccQZP;
            default:
                return r(579) + r(526) + r(453)
        }
    },
    Wt = e => {
        const t = bt,
            r = Et[t(623)](t => t.id === e);
        return r ? r[t(490) + t(464)] : null
    },
    Ot = async (e = bt(579) + bt(526), t = [2e3, (new Date)[bt(608) + "llYear"]()], r, s, a = 1, n = "US") => {
        const o = bt,
            i = {
                GKeAq: function(e, t) {
                    return e > t
                },
                TnYor: function(e, t) {
                    return e(t)
                },
                viNBN: function(e, t, r) {
                    return e(t, r)
                },
                XanGR: "/disc" + o(502) + "movie",
                zdxDi: o(602) + " fetching " + o(556) + o(621) + o(511) + ":"
            };
        try {
            const l = Tt(e, o(495)),
                d = t[0] + (o(452) + "1"),
                c = {
                    sort_by: l,
                    "primary_release_date.gte": d,
                    "primary_release_date.lte": t[1] + (o(439) + "1"),
                    page: a[o(501) + "ing"](),
                    "vote_count.gte": "50"
                };
            if (r && i.GKeAq(r[o(431) + "h"], 0) && (c[o(542) + o(583) + "s"] = r[o(472)](",")), s) {
                const e = i[o(510)](Wt, s);
                e && (c[o(542) + o(435) + "_providers"] = e[o(501) + o(523)](), c[o(435) + o(519) + "on"] = n)
            }
            const u = await i[o(512)](Lt, i[o(551)], c);
            return {
                results: u.results,
                total_pages: u["total" + o(552) + "s"] || 1,
                total_results: u["total" + o(430) + o(611)] || 0
            }
        } catch (l) {
            return {
                results: [],
                total_pages: 1,
                total_results: 0
            }
        }
    },
    Pt = async (e = bt(579) + bt(526), t = [2e3, (new Date)[bt(608) + "llYear"]()], r, s, a = 1, n = "US", o = !1) => {
        const i = bt,
            l = {
                vQreE: function(e, t) {
                    return e >= t
                },
                iszBv: function(e, t, r) {
                    return e(t, r)
                },
                SlffL: function(e, t) {
                    return e > t
                },
                wCArS: i(576) + i(502) + "tv",
                ThDAW: function(e, t) {
                    return e - t
                },
                cVChe: function(e, t) {
                    return e / t
                },
                TDWdX: i(602) + i(539) + i(547) + "filte" + i(474) + i(568) + i(483)
            };
        try {
            const d = l[i(506)](Tt, e, "tv"),
                c = t[0] + "-01-01",
                u = {
                    sort_by: d,
                    "first_air_date.gte": c,
                    "first_air_date.lte": t[1] + (i(439) + "1"),
                    page: a[i(501) + i(523)](),
                    "vote_count.gte": "50"
                };
            if (r && l.SlffL(r.length, 0) && (u[i(542) + "genres"] = r.join(",")), s) {
                const e = Wt(s);
                e && (u["with_" + i(435) + "_prov" + i(433)] = e[i(501) + i(523)](), u[i(435) + "_region"] = n)
            }
            const m = await l[i(506)](Lt, l[i(567)], u);
            let x = m[i(463) + "ts"];
            if (o) {
                const e = new Date;
                e[i(597) + "te"](l[i(508)](e[i(515) + "te"](), 14)), x = x[i(556) + "r"](t => {
                    const r = i;
                    if (!t[r(497) + "air_date"]) return !1;
                    const s = new Date(t["last_" + r(614) + r(496)]);
                    return l[r(605)](s, e)
                })
            }
            return {
                results: x,
                total_pages: o ? Math.max(1, Math[i(478)](l[i(572)](x.length, 20))) : m[i(448) + "_pages"] || 1,
                total_results: o ? x.length : m["total" + i(430) + "lts"] || 0
            }
        } catch (d) {
            return {
                results: [],
                total_pages: 1,
                total_results: 0
            }
        }
    },
    Kt = async (e, t = 1) => {
        const r = bt,
            s = await {
                WJogc: function(e, t, r) {
                    return e(t, r)
                }
            }[r(553)](Lt, r(459) + r(455) + "llect" + r(558), {
                query: e,
                page: t[r(501) + r(523)]()
            });
        return {
            results: s[r(463) + "ts"],
            total_pages: s[r(448) + r(552) + "s"],
            total_results: s[r(448) + r(430) + r(611)]
        }
    },
    Rt = async e => {
        const t = bt;
        return await {
            mTukg: function(e, t) {
                return e(t)
            }
        }[t(489)](Lt, t(487) + "ection/" + e)
    },
    Ft = () => {
        const [e, s] = t.useState(""), [n, o] = t.useState([]), [i, l] = t.useState(""), d = a();
        t.useEffect(() => {
            (async () => {
                try {
                    const e = await Dt("all", "week");
                    if (e && e.length > 0) {
                        o(e);
                        const t = e.filter(e => e.backdrop_path);
                        if (t.length > 0) {
                            const e = t[Math.floor(Math.random() * Math.min(5, t.length))];
                            l(`${Nt}${e.backdrop_path}`)
                        }
                    }
                } catch (e) {}
            })()
        }, []);
        const c = () => {
            d("/home")
        };
        return r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsxs("div", {
                className: "min-h-screen bg-background pt-16",
                children: [r.jsxs("div", {
                    className: "relative w-full overflow-hidden h-[80vh]",
                    children: [i && r.jsx("div", {
                        className: "absolute inset-0 bg-cover bg-center z-0",
                        style: {
                            backgroundImage: `url(${i})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center top"
                        }
                    }), r.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60 z-1"
                    }), r.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-background/90 to-transparent z-1"
                    }), r.jsx("div", {
                        className: "container mx-auto px-4 py-20 relative z-10 h-full flex items-center",
                        children: r.jsxs("div", {
                            className: "max-w-4xl text-left space-y-8",
                            children: [r.jsxs("div", {
                                className: "animate-fade-in",
                                children: [r.jsx("h1", {
                                    className: "text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand/70",
                                    children: "Fmovies"
                                }), r.jsx("p", {
                                    className: "text-xl md:text-3xl text-foreground/90 mb-4 font-semibold",
                                    children: "Your Ultimate Streaming Experience"
                                }), r.jsx("p", {
                                    className: "text-muted-foreground text-lg max-w-2xl",
                                    children: "Discover thousands of movies and TV shows, all in one place. Stream your favorite content in high quality, completely free."
                                })]
                            }), r.jsx("div", {
                                className: "w-full max-w-2xl animate-slide-up",
                                style: {
                                    animationDelay: "0.2s"
                                },
                                children: r.jsxs("form", {
                                    onSubmit: t => {
                                        t.preventDefault(), e.trim() && d(`/search?q=${encodeURIComponent(e.trim())}`)
                                    },
                                    className: "relative group",
                                    children: [r.jsx("input", {
                                        type: "text",
                                        className: "w-full bg-background/80 backdrop-blur-md border border-border/40 rounded-xl py-4 px-6 pr-12 text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-transparent transition-all duration-300",
                                        placeholder: "Search for movies, TV shows...",
                                        value: e,
                                        onChange: e => s(e.target.value)
                                    }), r.jsx("button", {
                                        type: "submit",
                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-brand hover:text-brand/80 transition-colors",
                                        children: r.jsx(T, {
                                            size: 24
                                        })
                                    })]
                                })
                            }), r.jsx("div", {
                                className: "animate-slide-up",
                                style: {
                                    animationDelay: "0.4s"
                                },
                                children: r.jsxs("button", {
                                    onClick: c,
                                    className: "group inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-background font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-brand/20",
                                    children: [r.jsx(V, {
                                        size: 20,
                                        className: "group-hover:translate-x-1 transition-transform"
                                    }), "Start Exploring", r.jsx(Y, {
                                        size: 20,
                                        className: "group-hover:translate-x-1 transition-transform"
                                    })]
                                })
                            })]
                        })
                    })]
                }), r.jsx("div", {
                    className: "container mx-auto px-4 -mt-16 relative z-20",
                    children: r.jsxs("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in",
                        style: {
                            animationDelay: "0.6s"
                        },
                        children: [r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-4 rounded-lg border border-border/40 shadow-xl hover:shadow-2xl transition-shadow",
                            children: [r.jsxs("h3", {
                                className: "text-brand font-bold text-lg flex items-center gap-2",
                                children: [r.jsx(I, {
                                    className: "h-5 w-5"
                                }), "HD Quality"]
                            }), r.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Crystal clear streaming"
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-4 rounded-lg border border-border/40 shadow-xl hover:shadow-2xl transition-shadow",
                            children: [r.jsxs("h3", {
                                className: "text-brand font-bold text-lg flex items-center gap-2",
                                children: [r.jsx(H, {
                                    className: "h-5 w-5"
                                }), "No Ads"]
                            }), r.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Uninterrupted viewing"
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-4 rounded-lg border border-border/40 shadow-xl hover:shadow-2xl transition-shadow",
                            children: [r.jsxs("h3", {
                                className: "text-brand font-bold text-lg flex items-center gap-2",
                                children: [r.jsx(Z, {
                                    className: "h-5 w-5"
                                }), "Free Access"]
                            }), r.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "No subscription needed"
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-4 rounded-lg border border-border/40 shadow-xl hover:shadow-2xl transition-shadow",
                            children: [r.jsxs("h3", {
                                className: "text-brand font-bold text-lg flex items-center gap-2",
                                children: [r.jsx(U, {
                                    className: "h-5 w-5"
                                }), "Regular Updates"]
                            }), r.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Latest content added daily"
                            })]
                        })]
                    })
                }), r.jsxs("div", {
                    className: "container mx-auto px-4 py-16 mt-8",
                    children: [r.jsxs("div", {
                        className: "text-center mb-12",
                        children: [r.jsxs("h2", {
                            className: "text-3xl font-bold text-foreground/90 flex items-center justify-center mb-4",
                            children: [r.jsx("span", {
                                className: "w-1 h-6 bg-brand rounded-full mr-4"
                            }), "Explore Our Content"]
                        }), r.jsx("p", {
                            className: "text-muted-foreground max-w-3xl mx-auto",
                            children: "From latest blockbuster movies to trending TV shows, Fmovies offers a vast selection of entertainment options for every taste"
                        })]
                    }), r.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [r.jsxs("div", {
                            className: "relative overflow-hidden rounded-2xl group shadow-xl",
                            children: [r.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"
                            }), n.length > 0 && n[0].backdrop_path && r.jsx("img", {
                                src: `${Nt}${n[0].backdrop_path}`,
                                alt: "Movies",
                                className: "w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            }), r.jsxs("div", {
                                className: "absolute inset-0 flex flex-col justify-end p-6 z-20",
                                children: [r.jsxs("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [r.jsx(_, {
                                        className: "h-6 w-6 text-brand"
                                    }), r.jsx("h3", {
                                        className: "text-2xl font-bold text-white",
                                        children: "Movies"
                                    })]
                                }), r.jsx("p", {
                                    className: "text-white/80 mb-4",
                                    children: "Discover the latest blockbusters and timeless classics"
                                }), r.jsxs("button", {
                                    onClick: () => d("/home"),
                                    className: "bg-brand/90 hover:bg-brand text-background py-2 px-4 rounded-lg inline-flex items-center gap-2 w-fit transition-colors",
                                    children: ["Explore Movies ", r.jsx(Y, {
                                        size: 16
                                    })]
                                })]
                            })]
                        }), r.jsxs("div", {
                            className: "relative overflow-hidden rounded-2xl group shadow-xl",
                            children: [r.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"
                            }), n.length > 1 && n[1].backdrop_path && r.jsx("img", {
                                src: `${Nt}${n[1].backdrop_path}`,
                                alt: "TV Shows",
                                className: "w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            }), r.jsxs("div", {
                                className: "absolute inset-0 flex flex-col justify-end p-6 z-20",
                                children: [r.jsxs("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [r.jsx(q, {
                                        className: "h-6 w-6 text-brand"
                                    }), r.jsx("h3", {
                                        className: "text-2xl font-bold text-white",
                                        children: "TV Shows"
                                    })]
                                }), r.jsx("p", {
                                    className: "text-white/80 mb-4",
                                    children: "Binge-watch your favorite series and discover new shows"
                                }), r.jsxs("button", {
                                    onClick: () => d("/home"),
                                    className: "bg-brand/90 hover:bg-brand text-background py-2 px-4 rounded-lg inline-flex items-center gap-2 w-fit transition-colors",
                                    children: ["Explore TV Shows ", r.jsx(Y, {
                                        size: 16
                                    })]
                                })]
                            })]
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "container mx-auto px-4 py-16 space-y-12",
                    children: [r.jsxs("div", {
                        className: "text-center mb-4",
                        children: [r.jsxs("h2", {
                            className: "text-3xl font-bold text-foreground/90 flex items-center justify-center mb-4",
                            children: [r.jsx("span", {
                                className: "w-1 h-6 bg-brand rounded-full mr-4"
                            }), "Features of Fmovies"]
                        }), r.jsx("p", {
                            className: "text-muted-foreground max-w-3xl mx-auto",
                            children: "Experience the best streaming service with these amazing features"
                        })]
                    }), r.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-4 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center",
                                children: r.jsx(G, {
                                    className: "h-6 w-6 text-brand"
                                })
                            }), r.jsx("h4", {
                                className: "text-xl font-semibold",
                                children: "High Quality Content"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Watch Movies online in high quality without any video lagging. All movies come with subtitles."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-4 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center",
                                children: r.jsx(J, {
                                    className: "h-6 w-6 text-brand"
                                })
                            }), r.jsx("h4", {
                                className: "text-xl font-semibold",
                                children: "All Devices Compatible"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Use this website with all devices like TV, Smartphone, laptop or tablet. Find any Movies or TV show easily with our clean interface."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-4 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center",
                                children: r.jsx(U, {
                                    className: "h-6 w-6 text-brand"
                                })
                            }), r.jsx("h4", {
                                className: "text-xl font-semibold",
                                children: "Extensive Library"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Fmovies has a vast collection of Movies and TV shows with Different genres section. We update website daily with new content."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-4 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center",
                                children: r.jsx(Z, {
                                    className: "h-6 w-6 text-brand"
                                })
                            }), r.jsx("h4", {
                                className: "text-xl font-semibold",
                                children: "Totally Free"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Our website is totally free of cost. Watch Movies as much as you want without compromising quality. Share with friends and family."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-4 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center",
                                children: r.jsx(X, {
                                    className: "h-6 w-6 text-brand"
                                })
                            }), r.jsx("h4", {
                                className: "text-xl font-semibold",
                                children: "No Installation Required"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Watch TV shows and Movies online without installing any app or software. No account creation or personal information required."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-4 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center",
                                children: r.jsx(H, {
                                    className: "h-6 w-6 text-brand"
                                })
                            }), r.jsx("h4", {
                                className: "text-xl font-semibold",
                                children: "No Ads"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "We ensure the best movie watching experience with no ads, allowing you to focus solely on watching your desired movies."
                            })]
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "container mx-auto px-4 py-16 mb-8",
                    children: [r.jsxs("div", {
                        className: "text-center mb-8",
                        children: [r.jsxs("h2", {
                            className: "text-3xl font-bold text-foreground/90 flex items-center justify-center mb-4",
                            children: [r.jsx("span", {
                                className: "w-1 h-6 bg-brand rounded-full mr-4"
                            }), "Frequently Asked Questions"]
                        }), r.jsx("p", {
                            className: "text-muted-foreground max-w-3xl mx-auto",
                            children: "Get answers to common questions about our streaming service"
                        })]
                    }), r.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
                        children: [r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-2 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("h4", {
                                className: "text-xl font-semibold text-brand",
                                children: "What is Fmovies?"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Fmovies is a free streaming platform that offers a vast collection of movies and TV shows in high quality with minimal ads."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-2 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("h4", {
                                className: "text-xl font-semibold text-brand",
                                children: "Is Fmovies safe to use?"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Yes, Fmovies is safe to use. We prioritize user safety and for additional security, we recommend using a reliable VPN."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-2 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("h4", {
                                className: "text-xl font-semibold text-brand",
                                children: "Does Fmovies support different qualities and subtitles?"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Yes, we offer multiple quality options (360p, 720p, 1080p) and support various subtitle languages to enhance your viewing experience."
                            })]
                        }), r.jsxs("div", {
                            className: "bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border/40 space-y-2 shadow-lg hover:shadow-xl transition-shadow",
                            children: [r.jsx("h4", {
                                className: "text-xl font-semibold text-brand",
                                children: "Is Fmovies compatible with mobile devices?"
                            }), r.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Yes, Fmovies is fully compatible with all devices including smartphones, tablets, laptops, and smart TVs. No app installation is required."
                            })]
                        })]
                    }), r.jsx("div", {
                        className: "flex justify-center mt-10",
                        children: r.jsxs("button", {
                            onClick: c,
                            className: "bg-brand text-background font-semibold py-3 px-8 rounded-full shadow-lg shadow-brand/20 hover:bg-brand/90 transition-colors flex items-center gap-2",
                            children: ["Start Watching Now ", r.jsx(Y, {
                                size: 18
                            })]
                        })
                    })]
                })]
            })]
        })
    },
    Vt = ({
        items: e
    }) => {
        const [a, n] = t.useState(0), o = () => {
            n(t => t === e.length - 1 ? 0 : t + 1)
        };
        if (t.useEffect(() => {
                const e = setInterval(() => {
                    o()
                }, 6e3);
                return () => clearInterval(e)
            }, [a, e.length]), !e.length) return null;
        const i = e[a],
            l = "title" in i,
            d = l ? i.title : i.name,
            c = l ? i.release_date : i.first_air_date,
            u = c ? new Date(c).getFullYear() : null,
            m = l ? `/movie/${i.id}` : `/tv/${i.id}`,
            x = i.vote_average.toFixed(1);
        return r.jsxs("div", {
            className: "relative h-[60vh] md:h-[80vh] w-full overflow-hidden group",
            children: [r.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center transition-transform duration-1000",
                style: {
                    backgroundImage: `url(${kt(i.backdrop_path,"original")})`
                },
                children: r.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
                })
            }), r.jsx("div", {
                className: "relative h-full container mx-auto px-4 flex items-end pb-24",
                children: r.jsxs("div", {
                    className: "max-w-3xl space-y-6",
                    children: [r.jsxs("div", {
                        className: "flex items-center gap-4 text-foreground",
                        children: [r.jsxs("div", {
                            className: "flex items-center gap-2 bg-brand/90 backdrop-blur-none px-4 py-2 rounded-full",
                            children: [r.jsx(I, {
                                size: 18,
                                className: "text-background"
                            }), r.jsx("span", {
                                className: "font-semibold text-background",
                                children: x
                            })]
                        }), u && r.jsx("div", {
                            className: "bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 font-medium",
                            children: u
                        })]
                    }), r.jsx("h1", {
                        className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-sm",
                        children: d
                    }), r.jsx("p", {
                        className: "text-lg text-white/90 line-clamp-3 md:line-clamp-none max-w-2xl drop-shadow-sm",
                        children: i.overview
                    }), r.jsxs(s, {
                        to: m,
                        className: "group inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-background font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105",
                        children: [r.jsx(V, {
                            size: 24,
                            className: "group-hover:translate-x-1 transition-transform"
                        }), "Watch Now"]
                    })]
                })
            }), r.jsx("button", {
                onClick: () => {
                    n(t => 0 === t ? e.length - 1 : t - 1)
                },
                className: "absolute left-4 top-1/2 -translate-y-1/2 bg-background/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-background/20 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100",
                children: r.jsx($, {
                    size: 28
                })
            }), r.jsx("button", {
                onClick: o,
                className: "absolute right-4 top-1/2 -translate-y-1/2 bg-background/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-background/20 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100",
                children: r.jsx(Q, {
                    size: 28
                })
            }), r.jsx("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2",
                children: e.map((e, t) => r.jsx("button", {
                    onClick: () => n(t),
                    className: "w-2 h-2 rounded-full transition-all duration-300 " + (t === a ? "bg-brand w-8" : "bg-white/50 hover:bg-white/80")
                }, t))
            })]
        })
    },
    Yt = ({
        activeTab: e,
        onTabChange: t
    }) => r.jsxs("div", {
        className: "flex items-center gap-4 mb-8 px-4",
        children: [r.jsx("button", {
            onClick: () => t("movies"),
            className: "px-4 py-2 rounded-lg font-medium transition-colors " + ("movies" === e ? "bg-brand text-black" : "bg-secondary/50 text-foreground/70 hover:bg-secondary"),
            children: "Movies"
        }), r.jsx("button", {
            onClick: () => t("tv"),
            className: "px-4 py-2 rounded-lg font-medium transition-colors " + ("tv" === e ? "bg-brand text-black" : "bg-secondary/50 text-foreground/70 hover:bg-secondary"),
            children: "TV Shows"
        })]
    }),
    Ht = ({
        item: e
    }) => {
        const t = "/4k" === n().pathname,
            a = "media_type" in (o = e) ? "movie" === o.media_type : "title" in o;
        var o;
        let i, l = "";
        l = a ? "title" in e ? e.title : "" : "name" in e ? e.name : "", i = a ? "release_date" in e ? e.release_date : void 0 : "first_air_date" in e ? e.first_air_date : void 0;
        const d = i ? new Date(i).getFullYear() : null,
            c = void 0 !== e.vote_average ? e.vote_average.toFixed(1) : "N/A",
            u = a ? `/movie/${e.id}` : `/tv/${e.id}`;
        return r.jsx("div", {
            className: "relative",
            children: r.jsx(s, {
                to: u,
                className: "block",
                children: r.jsxs("div", {
                    className: "relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary/20 group/movie",
                    children: [e.poster_path ? r.jsx("img", {
                        src: kt(e.poster_path, "w342"),
                        alt: l,
                        className: "w-full h-full object-cover transition-transform duration-300 group-hover/movie:scale-105",
                        loading: "lazy"
                    }) : r.jsxs("div", {
                        className: "w-full h-full flex flex-col items-center justify-center bg-secondary/30 text-foreground/40",
                        children: [r.jsx(O, {
                            size: 48,
                            className: "mb-2"
                        }), r.jsx("span", {
                            className: "text-sm font-medium px-4 text-center",
                            children: "No Image Available"
                        })]
                    }), r.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover/movie:opacity-100 transition-opacity duration-300"
                    }), void 0 !== e.vote_average && r.jsxs("div", {
                        className: "absolute top-2 right-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1",
                        children: [r.jsx(I, {
                            size: 14,
                            className: "text-brand fill-brand"
                        }), c]
                    }), t && r.jsx("div", {
                        className: "absolute top-2 left-2 bg-background/90 backdrop-blur-sm text-brand p-1.5 rounded-md",
                        children: r.jsx(gt, {
                            size: 22
                        })
                    }), r.jsxs("div", {
                        className: "absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover/movie:translate-y-0 transition-transform duration-300",
                        children: [r.jsx("h3", {
                            className: "text-white font-semibold text-sm line-clamp-2",
                            children: l
                        }), !!d && r.jsx("p", {
                            className: "text-xs text-gray-300 mt-1",
                            children: d
                        })]
                    })]
                })
            })
        })
    },
    Zt = ({
        item: e,
        progressData: t
    }) => {
        const s = a(),
            n = "title" in e ? e.title : e.name,
            o = e.poster_path || "";
        return r.jsx("div", {
            className: "relative cursor-pointer",
            onClick: r => {
                if (!r.target.closest(".delete-button"))
                    if ("movie" === t.type) s(`/watch/movie/${e.id}`);
                    else if ("tv" === t.type) {
                    const r = t.last_season_watched,
                        a = t.last_episode_watched;
                    r && a && s(`/watch/tv/${e.id}/${r}/${a}`)
                }
            },
            children: r.jsxs("div", {
                className: "relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary/20",
                children: [r.jsx("img", {
                    src: `https://image.tmdb.org/t/p/w500${o}`,
                    alt: n,
                    className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                }), r.jsx("button", {
                    onClick: t => {
                        t.stopPropagation();
                        const r = localStorage.getItem("watch_progress");
                        if (r) {
                            const t = JSON.parse(r);
                            delete t[e.id.toString()], localStorage.setItem("watch_progress", JSON.stringify(t)), window.dispatchEvent(new CustomEvent("watchProgressUpdated", {
                                detail: {
                                    id: e.id.toString()
                                }
                            }))
                        }
                    },
                    className: "delete-button absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-2 rounded-lg hover:bg-background/60 transition-colors duration-300",
                    title: "Remove from Continue Watching",
                    children: r.jsx(L, {
                        size: 16,
                        className: "text-foreground"
                    })
                }), r.jsxs("div", {
                    className: "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent",
                    children: [r.jsx("h3", {
                        className: "text-white font-semibold text-sm line-clamp-2",
                        children: n
                    }), "tv" === t.type && r.jsx("p", {
                        className: "text-xs text-gray-300 mt-1",
                        children: (() => {
                            if ("tv" === t.type && t.show_progress) {
                                const e = t.last_season_watched,
                                    r = t.last_episode_watched;
                                if (e && r) return `S${e}E${r}`
                            }
                            return ""
                        })()
                    }), r.jsx("div", {
                        className: "mt-2 h-1 bg-white/20 rounded-full",
                        children: r.jsx("div", {
                            className: "h-full bg-brand rounded-full",
                            style: {
                                width: `${(()=>{if("movie"===t.type)return t.progress.watched/t.progress.duration*100;if("tv"===t.type&&t.show_progress){const e=t.last_season_watched,r=t.last_episode_watched;if(e&&r){const s=`s${e}e${r}`,a=t.show_progress[s];if(a)return a.progress.watched/a.progress.duration*100}}return 0})()}%`
                            }
                        })
                    })]
                })]
            })
        })
    },
    Ut = ({
        title: e,
        items: s,
        isContinueWatching: a = !1,
        showProgress: n = !1,
        progressData: o = {}
    }) => {
        const [i, l] = t.useState(!1), d = t.useRef(null), c = e => {
            if (l(!0), d.current) {
                const {
                    scrollLeft: t,
                    clientWidth: r
                } = d.current, s = "left" === e ? t - r : t + r;
                d.current.scrollTo({
                    left: s,
                    behavior: "smooth"
                })
            }
        };
        return s.length ? r.jsxs("div", {
            className: "relative",
            children: [r.jsx("h2", {
                className: "text-xl font-semibold mb-4 px-4",
                children: e
            }), r.jsxs("div", {
                className: "relative",
                children: [r.jsx($, {
                    className: `absolute top-1/2 -translate-y-1/2 left-0 z-20 h-12 w-12 cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110 ${!i&&"hidden"}`,
                    onClick: () => c("left")
                }), r.jsx("div", {
                    className: "flex space-x-4 overflow-x-auto pb-6 px-4 scrollbar-none",
                    ref: d,
                    style: {
                        scrollbarWidth: "none"
                    },
                    children: a ? s.map(e => r.jsx("div", {
                        className: "flex-none w-[200px]",
                        children: r.jsx(Zt, {
                            item: e,
                            progressData: o[e.id.toString()]
                        })
                    }, e.id)) : s.map(e => {
                        const t = e;
                        return r.jsxs("div", {
                            className: "flex-none w-[160px] md:w-[180px] group relative",
                            children: [r.jsx(Ht, {
                                item: e
                            }), n && "progress" in t && "number" == typeof t.progress && r.jsx("div", {
                                className: "absolute bottom-0 left-0 right-0 h-1 bg-secondary/30",
                                children: r.jsx("div", {
                                    className: "h-full bg-brand",
                                    style: {
                                        width: `${Math.min(t.progress,100)}%`
                                    }
                                })
                            }), n && "media_type" in t && "tv" === t.media_type && "season" in t && "episode" in t && "number" == typeof t.season && "number" == typeof t.episode && r.jsxs("div", {
                                className: "absolute top-2 left-2 bg-secondary/60 backdrop-blur-sm text-foreground text-xs px-2 py-0.5 rounded-md z-10",
                                children: ["S", t.season, "E", t.episode]
                            })]
                        }, e.id)
                    })
                }), r.jsx(Q, {
                    className: "absolute top-1/2 -translate-y-1/2 right-0 z-20 h-12 w-12 cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110",
                    onClick: () => c("right")
                })]
            })]
        }) : null
    },
    Gt = ({
        id: e,
        title: t,
        type: a,
        posterPath: n
    }) => r.jsx(r.Fragment, {
        children: r.jsxs("div", {
            className: "flex flex-col md:flex-row items-start md:items-center mb-6 gap-4 relative pl-3 md:pl-4",
            children: [r.jsx("div", {
                className: "absolute -inset-4 bg-gradient-to-r from-background via-brand/5 to-background rounded-xl -z-10"
            }), r.jsxs("h2", {
                className: "text-2xl font-bold text-foreground/90 flex items-center md:hidden",
                children: [r.jsx("span", {
                    className: "w-1 h-6 bg-brand rounded-full mr-4 animate-pulse"
                }), "Because You Watched"]
            }), r.jsxs("div", {
                className: "flex items-center",
                children: [r.jsx(s, {
                    to: `/${a}/${e}`,
                    className: "block relative group",
                    children: r.jsxs("div", {
                        className: "w-10 h-15 md:w-16 md:h-24 rounded-lg overflow-hidden bg-secondary/20 shadow-lg transition-transform duration-300 group-hover:scale-105 border border-transparent group-hover:border-brand/30",
                        children: [n ? r.jsx("img", {
                            src: kt(n, "w92"),
                            alt: t,
                            className: "w-full h-full object-cover"
                        }) : r.jsx("div", {
                            className: "w-full h-full flex flex-col items-center justify-center bg-secondary/30 text-foreground/40",
                            children: r.jsx(O, {
                                size: 16,
                                className: "mb-1"
                            })
                        }), r.jsx("div", {
                            className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300",
                            children: r.jsx(re, {
                                size: 24,
                                className: "text-white"
                            })
                        })]
                    })
                }), r.jsxs("div", {
                    className: "ml-3",
                    children: [r.jsxs("h2", {
                        className: "hidden md:block text-2xl font-bold text-foreground/90 mb-1",
                        children: [r.jsx("span", {
                            className: "inline-block w-1 h-6 bg-brand rounded-full mr-4 align-middle animate-pulse"
                        }), "Because You Watched"]
                    }), r.jsxs(s, {
                        to: `/${a}/${e}`,
                        className: "text-lg font-medium text-brand hover:text-brand/80 transition-colors hover:underline",
                        children: ['"', t, '"']
                    }), r.jsx("p", {
                        className: "text-sm text-foreground/60",
                        children: "More like this"
                    })]
                })]
            })]
        })
    }),
    Jt = ({
        isLoading: e,
        error: t,
        recommendationsGroups: s,
        onRetry: a
    }) => e ? r.jsxs("section", {
        className: "space-y-6",
        children: [r.jsxs("h2", {
            className: "text-2xl font-bold text-foreground/90 flex items-center",
            children: [r.jsx("span", {
                className: "w-1 h-6 bg-brand rounded-full mr-4"
            }), "Because You Watched"]
        }), r.jsx("div", {
            className: "flex justify-center py-8",
            children: r.jsx(ee, {
                className: "h-8 w-8 animate-spin text-brand"
            })
        })]
    }) : t ? r.jsxs("section", {
        className: "space-y-6",
        children: [r.jsxs("h2", {
            className: "text-2xl font-bold text-foreground/90 flex items-center",
            children: [r.jsx("span", {
                className: "w-1 h-6 bg-brand rounded-full mr-4"
            }), "Because You Watched"]
        }), r.jsxs("div", {
            className: "p-8 rounded-lg bg-background/50 border border-border/50 text-center",
            children: [r.jsx(te, {
                className: "h-8 w-8 text-brand/60 mx-auto mb-2"
            }), r.jsx("p", {
                className: "text-foreground/60 mb-3",
                children: "Unable to load recommendations"
            }), r.jsx("button", {
                onClick: a,
                className: "text-sm px-4 py-1.5 rounded-lg bg-brand/20 hover:bg-brand/30 text-brand",
                children: "Try Again"
            })]
        })]
    }) : s.length > 0 ? r.jsxs("section", {
        className: "space-y-6",
        children: [r.jsx(Gt, {
            id: s[0].sourceId,
            title: s[0].sourceTitle,
            type: s[0].sourceType,
            posterPath: s[0].sourcePosterPath
        }), r.jsx(Ut, {
            title: "",
            items: s[0].recommendations
        })]
    }) : null,
    Xt = ({
        title: e,
        viewAllLink: t
    }) => r.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [r.jsxs("h2", {
            className: "text-2xl font-bold text-foreground/90 flex items-center",
            children: [r.jsx("span", {
                className: "w-1 h-6 bg-brand rounded-full mr-4"
            }), e]
        }), t && r.jsxs(s, {
            to: t,
            className: "flex items-center text-foreground/60 hover:text-brand transition-colors text-sm font-medium",
            children: ["View All ", r.jsx(Q, {
                size: 16,
                className: "ml-1"
            })]
        })]
    }),
    $t = ({
        isLoading: e,
        error: t,
        media: s,
        onRetry: a
    }) => r.jsxs("section", {
        className: "space-y-6",
        children: [r.jsx(Xt, {
            title: "Continue Watching"
        }), e ? r.jsx("div", {
            className: "flex justify-center py-8",
            children: r.jsx(ee, {
                className: "h-8 w-8 animate-spin text-brand"
            })
        }) : t ? r.jsxs("div", {
            className: "p-8 rounded-lg bg-background/50 border border-border/50 text-center",
            children: [r.jsx(te, {
                className: "h-8 w-8 text-brand/60 mx-auto mb-2"
            }), r.jsx("p", {
                className: "text-foreground/60 mb-3",
                children: "Unable to load your watch history"
            }), r.jsx("button", {
                onClick: a,
                className: "text-sm px-4 py-1.5 rounded-lg bg-brand/20 hover:bg-brand/30 text-brand",
                children: "Try Again"
            })]
        }) : s.length > 0 ? r.jsx(Ut, {
            title: "",
            items: s,
            showProgress: !0
        }) : r.jsxs("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: [r.jsx("p", {
                className: "text-foreground/60 text-lg",
                children: "You haven't started watching anything yet"
            }), r.jsx("p", {
                className: "text-foreground/40 text-sm mt-2",
                children: "Start watching a movie or TV show to see it here"
            })]
        })]
    }),
    Qt = ({
        title: e,
        genreId: t,
        mediaType: s,
        isLoading: a,
        error: n,
        items: o,
        onRetry: i
    }) => r.jsxs("div", {
        className: "mb-12",
        children: [r.jsx(Xt, {
            title: e,
            viewAllLink: `/${s}?genre=${"movies"===s?t.movie:t.tv}`
        }), a ? r.jsx("div", {
            className: "flex justify-center py-8",
            children: r.jsx(ee, {
                className: "h-8 w-8 animate-spin text-brand"
            })
        }) : n ? r.jsxs("div", {
            className: "p-8 rounded-lg bg-background/50 border border-border/50 text-center",
            children: [r.jsx(te, {
                className: "h-8 w-8 text-brand/60 mx-auto mb-2"
            }), r.jsxs("p", {
                className: "text-foreground/60 mb-3",
                children: ["Unable to load ", e.toLowerCase(), " ", s]
            }), r.jsx("button", {
                onClick: i,
                className: "text-sm px-4 py-1.5 rounded-lg bg-brand/20 hover:bg-brand/30 text-brand",
                children: "Try Again"
            })]
        }) : o && o.length > 0 ? r.jsx(Ut, {
            title: "",
            items: o
        }) : r.jsx("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: r.jsxs("p", {
                className: "text-foreground/60 text-lg",
                children: ["No ", e.toLowerCase(), " ", s, " available"]
            })
        })]
    }),
    er = ({
        title: e,
        viewAllLink: t,
        isLoading: s,
        error: a,
        items: n,
        onRetry: o
    }) => r.jsxs("section", {
        className: "space-y-6",
        children: [r.jsx(Xt, {
            title: e,
            viewAllLink: t
        }), s ? r.jsx("div", {
            className: "flex justify-center py-8",
            children: r.jsx(ee, {
                className: "h-8 w-8 animate-spin text-brand"
            })
        }) : a ? r.jsxs("div", {
            className: "p-8 rounded-lg bg-background/50 border border-border/50 text-center",
            children: [r.jsx(te, {
                className: "h-8 w-8 text-brand/60 mx-auto mb-2"
            }), r.jsxs("p", {
                className: "text-foreground/60 mb-3",
                children: ["Unable to load ", e.toLowerCase()]
            }), r.jsx("button", {
                onClick: o,
                className: "text-sm px-4 py-1.5 rounded-lg bg-brand/20 hover:bg-brand/30 text-brand",
                children: "Try Again"
            })]
        }) : n && n.length > 0 ? r.jsx(Ut, {
            title: "",
            items: n
        }) : r.jsx("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: r.jsxs("p", {
                className: "text-foreground/60 text-lg",
                children: ["No ", e.toLowerCase(), " available"]
            })
        })]
    }),
    tr = {
        movie: 28,
        tv: 10759
    },
    rr = {
        movie: 35,
        tv: 35
    },
    sr = {
        movie: 27,
        tv: 9648
    },
    ar = {
        movie: 878,
        tv: 10765
    },
    nr = ({
        collection: e
    }) => r.jsxs(s, {
        to: `/collections/${e.id}`,
        className: "block relative group overflow-hidden rounded-xl shadow-lg hover:shadow-brand/20 transition-shadow duration-300",
        children: [r.jsx("div", {
            className: "aspect-video bg-secondary/30",
            children: e.backdrop_path || e.poster_path ? r.jsx("img", {
                src: kt(e.backdrop_path || e.poster_path, "w780"),
                alt: e.name,
                className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                loading: "lazy"
            }) : r.jsxs("div", {
                className: "w-full h-full flex flex-col items-center justify-center text-foreground/40",
                children: [r.jsx(O, {
                    size: 40,
                    className: "mb-2"
                }), r.jsx("span", {
                    className: "text-sm",
                    children: "No Image"
                })]
            })
        }), r.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        }), r.jsxs("div", {
            className: "absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white",
            children: [r.jsx("h3", {
                className: "text-lg md:text-xl font-bold line-clamp-1 mb-1",
                children: e.name
            }), e.parts && r.jsxs("p", {
                className: "text-xs md:text-sm text-gray-300 mb-2 md:mb-3",
                children: [e.parts.length, " Movies"]
            }), r.jsx("button", {
                className: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium py-1.5 px-3 md:py-2 md:px-4 rounded-lg text-xs md:text-sm transition-colors",
                onClick: t => {
                    t.preventDefault(), document.getElementById(`collection-link-${e.id}`) ? .click()
                },
                children: "View Collection"
            }), r.jsx("span", {
                id: `collection-link-${e.id}`,
                style: {
                    display: "none"
                }
            })]
        })]
    }),
    or = ({
        title: e,
        viewAllLink: t
    }) => r.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [r.jsxs("h2", {
            className: "text-2xl font-bold text-foreground/90 flex items-center",
            children: [r.jsx("span", {
                className: "w-1 h-6 bg-brand rounded-full mr-4"
            }), e]
        }), t && r.jsxs(s, {
            to: t,
            className: "flex items-center text-foreground/60 hover:text-brand transition-colors text-sm font-medium",
            children: ["View All ", r.jsx(Q, {
                size: 16,
                className: "ml-1"
            })]
        })]
    }),
    ir = ({
        collections: e
    }) => {
        const t = e.slice(0, 3);
        return t.length ? r.jsxs("div", {
            className: "relative py-8 my-6",
            children: [r.jsx(or, {
                title: "Featured Collections"
            }), r.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4",
                children: t.map(e => r.jsx(nr, {
                    collection: e
                }, e.id))
            }), r.jsx("div", {
                className: "mt-8 text-center",
                children: r.jsxs(s, {
                    to: "/collections",
                    className: "inline-flex items-center justify-center bg-secondary hover:bg-secondary/80 text-foreground/90 font-medium py-2.5 px-5 rounded-lg transition-colors",
                    children: [r.jsx(M, {
                        size: 18,
                        className: "mr-2"
                    }), "Browse All Collections"]
                })
            })]
        }) : null
    },
    lr = () => {
        const {
            isAuthenticated: e
        } = xt(), [s, a] = t.useState([]), [n, o] = t.useState([]), [i, l] = t.useState(!0), [d, c] = t.useState(!1), [u, x] = t.useState([]), [h, g] = t.useState(!1), [f, b] = t.useState(!1), [p, v] = t.useState([]), [j, y] = t.useState(!0), [w, N] = t.useState(!1), [z, C] = t.useState([]), [k, L] = t.useState(!0), [D, A] = t.useState(!1), [M, S] = t.useState("movies"), {
            data: _,
            isLoading: q,
            isError: B,
            refetch: I
        } = m({
            queryKey: ["trending"],
            queryFn: () => Dt("all", "week"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: E,
            isLoading: T,
            isError: W,
            refetch: O
        } = m({
            queryKey: ["popularMovies"],
            queryFn: () => At(),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: P,
            isLoading: K,
            isError: R,
            refetch: F
        } = m({
            queryKey: ["popularTVShows"],
            queryFn: () => St(),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: V,
            isLoading: Y,
            isError: H,
            refetch: Z
        } = m({
            queryKey: ["topRatedMovies"],
            queryFn: () => Mt(),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: G,
            isLoading: J,
            isError: X,
            refetch: $
        } = m({
            queryKey: ["topRatedTVShows"],
            queryFn: () => _t(),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: Q,
            isLoading: re,
            isError: se,
            refetch: ae
        } = m({
            queryKey: ["actionMovies"],
            queryFn: () => Bt(tr.movie, "movie"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: ne,
            isLoading: oe,
            isError: ie,
            refetch: le
        } = m({
            queryKey: ["comedyMovies"],
            queryFn: () => Bt(rr.movie, "movie"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: de,
            isLoading: ce,
            isError: ue,
            refetch: me
        } = m({
            queryKey: ["horrorMovies"],
            queryFn: () => Bt(sr.movie, "movie"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: xe,
            isLoading: he,
            isError: ge,
            refetch: fe
        } = m({
            queryKey: ["sciFiMovies"],
            queryFn: () => Bt(ar.movie, "movie"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: be,
            isLoading: pe,
            isError: ve,
            refetch: je
        } = m({
            queryKey: ["actionTVShows"],
            queryFn: () => Bt(tr.tv, "tv"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: ye,
            isLoading: we,
            isError: Ne,
            refetch: ze
        } = m({
            queryKey: ["comedyTVShows"],
            queryFn: () => Bt(rr.tv, "tv"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: Ce,
            isLoading: ke,
            isError: Le,
            refetch: De
        } = m({
            queryKey: ["horrorTVShows"],
            queryFn: () => Bt(sr.tv, "tv"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        }), {
            data: Ae,
            isLoading: Me,
            isError: Se,
            refetch: _e
        } = m({
            queryKey: ["sciFiTVShows"],
            queryFn: () => Bt(ar.tv, "tv"),
            retry: 3,
            retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
        });
        t.useEffect(() => {
            if (_) {
                const e = _.filter(e => e.backdrop_path && e.overview);
                a(e.slice(0, 5))
            }
        }, [_]), t.useEffect(() => {
            const e = async () => {
                    l(!0), c(!1), y(!0), N(!1);
                    try {
                        const e = await et(),
                            r = Object.entries(e).map(([e, t]) => {
                                if ("movie" === t.type) return {
                                    id: e,
                                    type: "movie",
                                    title: t.title,
                                    progress: t.progress.percent || 0,
                                    lastUpdated: t.last_updated,
                                    position: t.progress.watched,
                                    duration: t.progress.duration || 0,
                                    completed: t.progress.completed
                                };
                                if ("tv" === t.type && t.show_progress) {
                                    const r = Object.values(t.show_progress).sort((e, t) => t.last_updated - e.last_updated)[0];
                                    if (r) return {
                                        id: e,
                                        type: "tv",
                                        title: t.title,
                                        progress: r.progress.watched / r.progress.duration * 100,
                                        lastUpdated: r.last_updated,
                                        position: r.progress.watched,
                                        duration: r.progress.duration,
                                        season: r.season,
                                        episode: r.episode,
                                        completed: r.progress.completed
                                    }
                                }
                                return null
                            }).filter(e => null !== e),
                            s = [...r].sort((e, t) => t.lastUpdated - e.lastUpdated),
                            a = [...r].sort((e, t) => e.completed && !t.completed ? -1 : !e.completed && t.completed ? 1 : t.progress - e.progress).slice(0, 5);
                        if (s.length > 0) {
                            const e = new Set([...s.map(e => e.id), ...a.map(e => e.id)]),
                                n = await qe(Array.from(e).map(e => {
                                    const t = r.find(t => t.id === e);
                                    return {
                                        id: e,
                                        mediaType: t ? .type || "movie"
                                    }
                                })),
                                i = s.map(e => {
                                    const t = n.find(t => t.id === Number(e.id));
                                    return t ? { ...t,
                                        id: t.id,
                                        title: t.title || t.name || "",
                                        name: t.name || t.title || "",
                                        poster_path: t.poster_path,
                                        backdrop_path: t.backdrop_path || "",
                                        vote_average: t.vote_average,
                                        overview: t.overview || "",
                                        genre_ids: t.genre_ids || [],
                                        media_type: e.type,
                                        progress: e.progress,
                                        season: e.season,
                                        episode: e.episode
                                    } : null
                                }).filter(e => null !== e),
                                l = a.map(e => {
                                    const t = n.find(t => t.id === Number(e.id));
                                    return t ? { ...t,
                                        id: t.id,
                                        title: t.title || t.name || "",
                                        name: t.name || t.title || "",
                                        poster_path: t.poster_path,
                                        backdrop_path: t.backdrop_path || "",
                                        vote_average: t.vote_average,
                                        overview: t.overview || "",
                                        genre_ids: t.genre_ids || [],
                                        media_type: e.type,
                                        progress: e.progress,
                                        season: e.season,
                                        episode: e.episode
                                    } : null
                                }).filter(e => null !== e);
                            o(i), v(l), i.length > 0 && t(i)
                        }
                    } catch (e) {
                        c(!0), N(!0)
                    } finally {
                        l(!1), y(!1)
                    }
                },
                t = async e => {
                    try {
                        g(!0), b(!1);
                        const t = e.length >= 5 ? [...e].sort((e, t) => {
                            const r = "progress" in e ? e.progress : 0;
                            return ("progress" in t ? t.progress : 0) - r
                        }).slice(0, 3) : e.slice(0, Math.min(3, e.length));
                        if (0 === t.length) return;
                        const r = t.map(async e => {
                                try {
                                    const t = "media_type" in e && e.media_type ? e.media_type : e.first_air_date ? "tv" : "movie",
                                        r = e.id,
                                        s = await fetch(`${pt}/${t}/${r}?api_key=${vt}&append_to_response=recommendations,similar`);
                                    if (!s.ok) return null;
                                    const a = await s.json(),
                                        n = (a.recommendations ? .results ? .length > 0 ? a.recommendations.results : a.similar ? .results) || [];
                                    return n.length > 0 ? {
                                        sourceId: Number(r),
                                        sourceTitle: a.title || a.name || "",
                                        sourceType: t,
                                        sourcePosterPath: a.poster_path || "",
                                        recommendations: n.slice(0, 10).map(e => ({ ...e,
                                            media_type: e.media_type || (e.first_air_date ? "tv" : "movie")
                                        }))
                                    } : null
                                } catch (t) {
                                    return null
                                }
                            }),
                            s = (await Promise.all(r)).filter(e => null !== e);
                        x(s)
                    } catch (t) {
                        b(!0)
                    } finally {
                        g(!1)
                    }
                };
            e();
            const r = () => {
                e()
            };
            return window.addEventListener("watchProgressUpdated", r), () => {
                window.removeEventListener("watchProgressUpdated", r)
            }
        }, [e]);
        const qe = async e => {
                const t = e.map(async e => {
                    const t = Number(e.id),
                        r = e.mediaType;
                    if (!r) return null;
                    try {
                        const e = await fetch(`${pt}/${r}/${t}?api_key=${vt}`);
                        if (!e.ok) return null;
                        const s = await e.json();
                        return { ...s,
                            media_type: r,
                            genre_ids: s.genres ? .map(e => e.id) || []
                        }
                    } catch (s) {
                        return null
                    }
                });
                return (await Promise.all(t)).filter(e => null !== e)
            },
            Be = () => {
                if (e) {
                    const e = new Event("watchProgressUpdated");
                    window.dispatchEvent(e)
                }
            },
            Ie = q || T || K || Y || J || re || oe || ce || he || pe || we || ke || Me || k,
            Ee = B || W || R || H || X || se || ie || ue || ge || ve || Ne || Le || Se || D,
            Te = () => {
                if (B && I(), W && O(), R && F(), H && Z(), X && $(), se && ae(), ie && le(), ue && me(), ge && fe(), ve && je(), Ne && ze(), Le && De(), Se && _e(), Be(), D) {
                    (async () => {
                        L(!0), A(!1);
                        try {
                            const t = [],
                                r = zt.slice(0, 7);
                            for (const s of r) try {
                                const e = await Rt(s);
                                t.push(e)
                            } catch (e) {}
                            C(t)
                        } catch (e) {
                            A(!0)
                        } finally {
                            L(!1)
                        }
                    })()
                }
            };
        return t.useEffect(() => {
            (async () => {
                L(!0), A(!1);
                try {
                    const t = [],
                        r = zt.slice(0, 7);
                    for (const s of r) try {
                        const e = await Rt(s);
                        t.push(e)
                    } catch (e) {}
                    C(t)
                } catch (e) {
                    A(!0)
                } finally {
                    L(!1)
                }
            })()
        }, []), Ie ? r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsx("div", {
                className: "min-h-screen flex items-center justify-center bg-background",
                children: r.jsx(ee, {
                    className: "h-10 w-10 animate-spin text-brand"
                })
            })]
        }) : Ee ? r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsxs("div", {
                className: "min-h-screen flex flex-col items-center justify-center bg-background p-4",
                children: [r.jsx("div", {
                    className: "w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center",
                    children: r.jsx(te, {
                        className: "h-8 w-8 text-red-500"
                    })
                }), r.jsx("h2", {
                    className: "text-xl font-semibold mb-2 text-center",
                    children: "Something went wrong"
                }), r.jsx("p", {
                    className: "text-foreground/60 mb-6 max-w-md text-center",
                    children: "We're having trouble loading content. Please check your connection and try again."
                }), r.jsxs("button", {
                    onClick: Te,
                    className: "px-5 py-2.5 rounded-lg bg-brand hover:bg-brand/90 text-white flex items-center gap-2 transition-colors",
                    children: [r.jsx(U, {
                        size: 16,
                        className: "animate-spin"
                    }), r.jsx("span", {
                        children: "Retry"
                    })]
                })]
            })]
        }) : r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsxs("main", {
                className: "pt-16 min-h-screen bg-background",
                children: [s && s.length > 0 && r.jsx(Vt, {
                    items: s
                }), r.jsx("div", {
                    className: "container mx-auto px-4 py-12",
                    children: r.jsxs("div", {
                        className: "space-y-16",
                        children: [r.jsx($t, {
                            isLoading: i,
                            error: d,
                            media: n,
                            onRetry: Be
                        }), r.jsx(Jt, {
                            isLoading: h,
                            error: f,
                            recommendationsGroups: u,
                            onRetry: () => {
                                Be()
                            }
                        }), r.jsx(er, {
                            title: "Popular Movies",
                            viewAllLink: "/movies",
                            isLoading: T,
                            error: W,
                            items: E || [],
                            onRetry: () => O()
                        }), r.jsx(er, {
                            title: "Popular TV Shows",
                            viewAllLink: "/tv",
                            isLoading: K,
                            error: R,
                            items: P || [],
                            onRetry: () => F()
                        }), r.jsx("section", {
                            className: "space-y-6",
                            children: r.jsx(ir, {
                                collections: z
                            })
                        }), r.jsx(er, {
                            title: "Top Rated TV Shows",
                            viewAllLink: "/tv?sort=rating",
                            isLoading: J,
                            error: X,
                            items: G || [],
                            onRetry: () => $()
                        }), r.jsx(er, {
                            title: "Trending This Week",
                            viewAllLink: "/trending",
                            isLoading: q,
                            error: B,
                            items: _ || [],
                            onRetry: () => I()
                        }), r.jsx("section", {
                            className: "space-y-6",
                            children: r.jsxs("div", {
                                className: "border-t border-border/50 pt-8",
                                children: [r.jsx(Yt, {
                                    activeTab: M,
                                    onTabChange: S
                                }), r.jsx(Qt, {
                                    title: "Action",
                                    genreId: tr,
                                    mediaType: M,
                                    isLoading: "movies" === M ? re : pe,
                                    error: "movies" === M ? se : ve,
                                    items: "movies" === M ? Q || [] : be || [],
                                    onRetry: () => "movies" === M ? ae() : je()
                                }), r.jsx(Qt, {
                                    title: "Comedy",
                                    genreId: rr,
                                    mediaType: M,
                                    isLoading: "movies" === M ? oe : we,
                                    error: "movies" === M ? ie : Ne,
                                    items: "movies" === M ? ne || [] : ye || [],
                                    onRetry: () => "movies" === M ? le() : ze()
                                }), r.jsx(Qt, {
                                    title: "Horror",
                                    genreId: sr,
                                    mediaType: M,
                                    isLoading: "movies" === M ? ce : ke,
                                    error: "movies" === M ? ue : Le,
                                    items: "movies" === M ? de || [] : Ce || [],
                                    onRetry: () => "movies" === M ? me() : De()
                                }), r.jsx(Qt, {
                                    title: "Sci-Fi",
                                    genreId: ar,
                                    mediaType: M,
                                    isLoading: "movies" === M ? he : Me,
                                    error: "movies" === M ? ge : Se,
                                    items: "movies" === M ? xe || [] : Ae || [],
                                    onRetry: () => "movies" === M ? fe() : _e()
                                })]
                            })
                        })]
                    })
                })]
            })]
        })
    },
    dr = () => {
        const e = n();
        return t.useEffect(() => {}, [e.pathname]), r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsx("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-100",
                children: r.jsxs("div", {
                    className: "text-center",
                    children: [r.jsx("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "404"
                    }), r.jsx("p", {
                        className: "text-xl text-gray-600 mb-4",
                        children: "Oops! Page not found"
                    }), r.jsx("a", {
                        href: "/",
                        className: "text-blue-500 hover:text-blue-700 underline",
                        children: "Return to Home"
                    })]
                })
            })]
        })
    },
    cr = () => {
        const {
            pathname: e
        } = n();
        return t.useEffect(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            })
        }, [e]), null
    },
    ur = ({
        collection: e
    }) => {
        const t = e.poster_path ? kt(e.poster_path) : e.backdrop_path ? kt(e.backdrop_path) : null,
            a = e.parts ? .length || 0;
        return r.jsx("div", {
            className: "relative",
            children: r.jsx(s, {
                to: `/collections/${e.id}`,
                className: "block",
                children: r.jsxs("div", {
                    className: "relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary/20 group/movie",
                    children: [t ? r.jsx("img", {
                        src: t,
                        alt: e.name,
                        className: "w-full h-full object-cover transition-transform duration-300 group-hover/movie:scale-105",
                        loading: "lazy"
                    }) : r.jsxs("div", {
                        className: "w-full h-full flex flex-col items-center justify-center bg-secondary/30 text-foreground/40",
                        children: [r.jsx(O, {
                            size: 48,
                            className: "mb-2"
                        }), r.jsx("span", {
                            className: "text-sm font-medium px-4 text-center",
                            children: "No Image Available"
                        })]
                    }), r.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover/movie:opacity-100 transition-opacity duration-300"
                    }), r.jsxs("div", {
                        className: "absolute top-2 left-2 bg-background/90 backdrop-blur-sm text-brand p-1.5 rounded-md flex items-center gap-1",
                        children: [r.jsx(M, {
                            size: 14,
                            className: "text-brand"
                        }), r.jsx("span", {
                            className: "text-xs font-medium",
                            children: "Collection"
                        })]
                    }), a > 0 && r.jsxs("div", {
                        className: "absolute top-2 right-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1",
                        children: [r.jsx(_, {
                            size: 14,
                            className: "text-brand"
                        }), a]
                    }), r.jsxs("div", {
                        className: "absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover/movie:translate-y-0 transition-transform duration-300",
                        children: [r.jsx("h3", {
                            className: "text-white font-semibold text-sm line-clamp-2",
                            children: e.name
                        }), r.jsxs("p", {
                            className: "text-xs text-gray-300 mt-1 flex items-center",
                            children: [r.jsx(_, {
                                size: 12,
                                className: "mr-1.5 text-brand/80"
                            }), r.jsxs("span", {
                                children: [a, " Movies"]
                            })]
                        })]
                    })]
                })
            })
        })
    },
    mr = () => {
        const e = a(),
            [s, n] = t.useState([]),
            [o, i] = t.useState([]),
            [l, d] = t.useState(!0),
            [c, u] = t.useState("");
        t.useEffect(() => {
            (async () => {
                d(!0);
                try {
                    const t = [];
                    for (const s of zt) try {
                        const e = await Rt(s);
                        t.push(e)
                    } catch (e) {}
                    n(t);
                    const r = await (async (e = 1) => {
                        const t = bt,
                            r = {
                                KWofq: function(e, t, r) {
                                    return e(t, r)
                                },
                                XWMWm: t(561) + "e/popular"
                            },
                            s = (await r[t(440)](Lt, r.XWMWm, {
                                page: e["toStr" + t(523)]()
                            }))[t(463) + "ts"][t(556) + "r"](e => e[t(486) + "gs_to" + t(437) + t(420) + "n"]),
                            a = new Map;
                        for (const n of s) !a[t(520)](n[t(486) + t(549) + t(437) + t(420) + "n"].id) && a[t(571)](n[t(486) + t(549) + t(437) + t(420) + "n"].id, {
                            id: n[t(486) + "gs_to_collection"].id,
                            name: n[t(486) + "gs_to" + t(437) + t(420) + "n"][t(422)],
                            poster_path: n["belongs_to_coll" + t(420) + "n"]["poste" + t(613) + "h"],
                            backdrop_path: n[t(486) + t(549) + t(437) + t(420) + "n"][t(524) + t(541) + t(593)],
                            overview: ""
                        });
                        return Array.from(a[t(425) + "s"]())
                    })();
                    i(r)
                } catch (e) {} finally {
                    d(!1)
                }
            })()
        }, []);
        return r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsx("div", {
                className: "min-h-screen pt-16 bg-background",
                children: r.jsxs("div", {
                    className: "container mx-auto px-4 py-8",
                    children: [r.jsxs("div", {
                        className: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4",
                        children: [r.jsxs("div", {
                            children: [r.jsx("h1", {
                                className: "text-3xl font-bold mb-2",
                                children: "Movie Collections"
                            }), r.jsx("p", {
                                className: "text-foreground/70",
                                children: "Explore your favorite movie universes and series (search for more results)"
                            })]
                        }), r.jsxs("form", {
                            onSubmit: t => {
                                t.preventDefault(), c.trim() && e(`/search?query=${encodeURIComponent(c)}&type=collection`)
                            },
                            className: "flex-1 max-w-md bg-card rounded-full px-4 py-2 flex items-center border border-border focus-within:border-brand focus-within:ring-0 focus-within:outline-none transition-colors",
                            children: [r.jsx("input", {
                                type: "text",
                                placeholder: "Search collections...",
                                className: "bg-transparent w-full outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none",
                                value: c,
                                onChange: e => u(e.target.value),
                                style: {
                                    outline: "none",
                                    boxShadow: "none"
                                }
                            }), r.jsx("button", {
                                type: "submit",
                                className: "ml-2 p-1 hover:text-brand",
                                children: r.jsx(T, {
                                    size: 20
                                })
                            })]
                        })]
                    }), l ? r.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6",
                        children: [...Array(10)].map((e, t) => r.jsx("div", {
                            className: "aspect-[2/3] bg-card animate-pulse rounded-lg"
                        }, t))
                    }) : r.jsx(r.Fragment, {
                        children: r.jsxs("section", {
                            className: "mb-12",
                            children: [r.jsx("h2", {
                                className: "text-2xl font-bold mb-4",
                                children: "Featured Collections"
                            }), r.jsx("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6",
                                children: s.length > 0 ? s.map(e => r.jsx(ur, {
                                    collection: e
                                }, e.id)) : r.jsx("div", {
                                    className: "col-span-full text-center py-8",
                                    children: r.jsx("p", {
                                        className: "text-foreground/60",
                                        children: "No collections available at the moment"
                                    })
                                })
                            })]
                        })
                    })]
                })
            })]
        })
    },
    xr = () => {
        const {
            id: e
        } = o(), [a, n] = t.useState(null), [i, l] = t.useState(!0), [d, c] = t.useState([]);
        t.useEffect(() => {
            (async () => {
                if (e) {
                    l(!0);
                    try {
                        const t = await Rt(Number(e));
                        if (n(t), t.parts && t.parts.length > 0) {
                            const e = [...t.parts].sort((e, t) => e.release_date ? t.release_date ? new Date(e.release_date).getTime() - new Date(t.release_date).getTime() : -1 : 1);
                            c(e)
                        }
                    } catch (t) {} finally {
                        l(!1)
                    }
                }
            })()
        }, [e]);
        const u = e => e ? new Date(e).getFullYear() : "";
        return i ? r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsx("div", {
                className: "min-h-screen pt-16 bg-background",
                children: r.jsxs("div", {
                    className: "animate-pulse",
                    children: [r.jsx("div", {
                        className: "h-[70vh] bg-gradient-to-b from-brand/5 to-background"
                    }), r.jsx("div", {
                        className: "container mx-auto px-4 max-w-7xl -mt-32 relative z-10",
                        children: r.jsxs("div", {
                            className: "flex flex-col md:flex-row gap-8",
                            children: [r.jsx("div", {
                                className: "md:w-1/3 lg:w-1/4",
                                children: r.jsx("div", {
                                    className: "aspect-[2/3] bg-secondary/10 border border-border/10 rounded-xl shadow-lg"
                                })
                            }), r.jsxs("div", {
                                className: "md:w-2/3 lg:w-3/4 space-y-4",
                                children: [r.jsx("div", {
                                    className: "h-8 bg-secondary/10 rounded-full w-3/4"
                                }), r.jsx("div", {
                                    className: "h-4 bg-secondary/10 rounded-full w-1/2"
                                }), r.jsx("div", {
                                    className: "h-4 bg-secondary/10 rounded-full w-1/4"
                                }), r.jsx("div", {
                                    className: "h-4 bg-secondary/10 rounded-full w-2/3"
                                }), r.jsxs("div", {
                                    className: "space-y-2 mt-6",
                                    children: [r.jsx("div", {
                                        className: "h-4 bg-secondary/10 rounded-full w-full"
                                    }), r.jsx("div", {
                                        className: "h-4 bg-secondary/10 rounded-full w-full"
                                    }), r.jsx("div", {
                                        className: "h-4 bg-secondary/10 rounded-full w-3/4"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            })]
        }) : a ? r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsx("div", {
                className: "relative min-h-screen pb-12 pt-16 bg-background",
                children: r.jsxs("div", {
                    className: "relative",
                    children: [r.jsxs("div", {
                        className: "h-[25vh] sm:h-[30vh] lg:h-[35vh] overflow-hidden relative",
                        children: [a.backdrop_path ? r.jsx(de.img, {
                            src: kt(a.backdrop_path, "original"),
                            alt: a.name,
                            className: "w-full h-full object-cover opacity-40",
                            initial: {
                                scale: 1.1,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: .4
                            },
                            transition: {
                                duration: 1.5,
                                ease: "easeOut"
                            }
                        }) : r.jsx("div", {
                            className: "w-full h-full bg-gradient-to-br from-black via-black/80 to-black/60 flex items-center justify-center",
                            children: r.jsxs("div", {
                                className: "text-foreground/20 flex flex-col items-center",
                                children: [r.jsx(O, {
                                    size: 64,
                                    className: "mb-2"
                                }), r.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "No Backdrop Available"
                                })]
                            })
                        }), r.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent"
                        }), r.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-background/90 to-transparent"
                        }), r.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent"
                        }), r.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,157,0.03)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20 pointer-events-none"
                        })]
                    }), r.jsx("div", {
                        className: "container mx-auto px-4 -mt-32 sm:-mt-36 lg:-mt-40 relative z-10",
                        children: r.jsxs(de.div, {
                            className: "flex flex-col md:flex-row gap-8",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            children: [r.jsx("div", {
                                className: "md:w-1/3 lg:w-1/4 flex-shrink-0",
                                children: r.jsxs("div", {
                                    className: "sticky top-20 space-y-6 max-w-[280px] mx-auto md:mx-0",
                                    children: [r.jsx(de.div, {
                                        className: "aspect-[2/3] bg-secondary/20 rounded-xl overflow-hidden shadow-2xl w-full group",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: .3,
                                            duration: .8
                                        },
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        children: r.jsx("div", {
                                            className: "relative w-full h-full",
                                            children: a.poster_path ? r.jsxs(r.Fragment, {
                                                children: [r.jsx("div", {
                                                    className: "absolute -inset-1 bg-gradient-to-br from-brand/30 to-brand/60 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-700"
                                                }), r.jsx("img", {
                                                    src: kt(a.poster_path, "w500"),
                                                    alt: a.name,
                                                    className: "w-full h-full object-cover relative z-10"
                                                }), r.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-20"
                                                })]
                                            }) : r.jsxs("div", {
                                                className: "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-background/60 to-background/40",
                                                children: [r.jsx(O, {
                                                    size: 48,
                                                    className: "text-foreground/30 mb-2"
                                                }), r.jsx("span", {
                                                    className: "text-foreground/70 text-center px-4",
                                                    children: "No Poster Available"
                                                })]
                                            })
                                        })
                                    }), r.jsx(de.div, {
                                        className: "space-y-3 mt-4",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .4
                                        },
                                        children: r.jsxs(s, {
                                            to: "/collections",
                                            className: "w-full bg-brand hover:bg-brand/90 text-background font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300",
                                            children: [r.jsx(se, {
                                                size: 18
                                            }), r.jsx("span", {
                                                children: "Back to Collections"
                                            })]
                                        })
                                    }), r.jsxs(de.div, {
                                        className: "bg-secondary/10 backdrop-blur-sm p-4 rounded-xl border border-border/10 mt-4",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .6
                                        },
                                        children: [r.jsx("h3", {
                                            className: "text-lg font-semibold mb-3 text-foreground",
                                            children: "Collection Info"
                                        }), r.jsxs("ul", {
                                            className: "space-y-3",
                                            children: [r.jsxs("li", {
                                                className: "flex justify-between items-center",
                                                children: [r.jsx("span", {
                                                    className: "text-foreground/60",
                                                    children: "Movies"
                                                }), r.jsx("span", {
                                                    className: "font-medium",
                                                    children: d.length
                                                })]
                                            }), d.length > 0 && d[0].release_date && r.jsxs("li", {
                                                className: "flex justify-between items-center",
                                                children: [r.jsx("span", {
                                                    className: "text-foreground/60",
                                                    children: "First Release"
                                                }), r.jsx("span", {
                                                    className: "font-medium",
                                                    children: u(d[0].release_date)
                                                })]
                                            }), d.length > 0 && d[d.length - 1].release_date && r.jsxs("li", {
                                                className: "flex justify-between items-center",
                                                children: [r.jsx("span", {
                                                    className: "text-foreground/60",
                                                    children: "Latest Release"
                                                }), r.jsx("span", {
                                                    className: "font-medium",
                                                    children: u(d[d.length - 1].release_date)
                                                })]
                                            }), d.length > 0 && r.jsxs("li", {
                                                className: "flex justify-between items-center",
                                                children: [r.jsx("span", {
                                                    className: "text-foreground/60",
                                                    children: "Avg. Rating"
                                                }), r.jsxs("div", {
                                                    className: "flex items-center",
                                                    children: [r.jsx(I, {
                                                        size: 14,
                                                        className: "text-yellow-400 mr-1 fill-current"
                                                    }), r.jsx("span", {
                                                        className: "font-semibold",
                                                        children: (d.reduce((e, t) => e + t.vote_average, 0) / d.length).toFixed(1)
                                                    }), r.jsx("span", {
                                                        className: "text-foreground/50 text-sm ml-1",
                                                        children: "/10"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            }), r.jsxs("div", {
                                className: "md:w-2/3 lg:w-3/4",
                                children: [r.jsxs(de.div, {
                                    className: "mb-8",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    children: [r.jsx("h1", {
                                        className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80",
                                        children: a.name
                                    }), r.jsxs("div", {
                                        className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-foreground/70 mb-6",
                                        children: [r.jsx("div", {
                                            className: "bg-brand/20 text-brand border-none px-2 py-1 rounded-full text-sm",
                                            children: "Collection"
                                        }), d.length > 0 && r.jsxs("span", {
                                            className: "flex items-center gap-1",
                                            children: [r.jsx(_, {
                                                size: 16,
                                                className: "text-brand"
                                            }), d.length, " Movies"]
                                        }), d.length > 0 && d[0].release_date && d[d.length - 1].release_date && r.jsxs("span", {
                                            className: "flex items-center gap-1",
                                            children: [r.jsx(ae, {
                                                size: 16,
                                                className: "text-brand"
                                            }), r.jsxs("span", {
                                                children: [u(d[0].release_date), " -", u(d[d.length - 1].release_date)]
                                            })]
                                        })]
                                    })]
                                }), r.jsxs(de.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .4
                                    },
                                    className: "space-y-8",
                                    children: [r.jsx("div", {
                                        className: "bg-secondary/10 backdrop-blur-md rounded-xl border border-border/10 p-6 transition-all duration-300 hover:border-brand/20 hover:bg-secondary/20",
                                        children: r.jsxs("div", {
                                            className: "mb-6",
                                            children: [r.jsx("h3", {
                                                className: "text-lg font-semibold text-foreground mb-2",
                                                children: "Overview"
                                            }), r.jsx("div", {
                                                className: "max-h-[120px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand/30 scrollbar-track-white/10",
                                                children: r.jsx("p", {
                                                    className: "text-foreground/70 leading-relaxed",
                                                    children: a.overview || "No overview available for this collection."
                                                })
                                            })]
                                        })
                                    }), d.length > 0 && r.jsxs("div", {
                                        className: "space-y-6",
                                        children: [r.jsxs("h2", {
                                            className: "text-xl font-bold text-foreground/90 flex items-center",
                                            children: [r.jsx("span", {
                                                className: "w-1 h-6 bg-brand rounded-full mr-4"
                                            }), "Watch Timeline"]
                                        }), r.jsx("div", {
                                            className: "bg-secondary/10 backdrop-blur-md rounded-xl border border-border/10 p-6 transition-all duration-300 hover:border-brand/20 hover:bg-secondary/20",
                                            children: r.jsx("div", {
                                                className: "space-y-8",
                                                children: d.map((e, t) => r.jsxs("div", {
                                                    className: "relative pl-16 pt-0",
                                                    children: [r.jsx("div", {
                                                        className: "w-12 h-12 rounded-full bg-gradient-to-br from-brand/40 to-brand/10 backdrop-blur-md shadow-lg shadow-brand/10 border border-brand/30 flex items-center justify-center absolute left-0 top-1 z-10 transition-transform duration-300 hover:scale-110",
                                                        children: r.jsx("span", {
                                                            className: "text-brand font-bold text-lg",
                                                            children: t + 1
                                                        })
                                                    }), r.jsx(s, {
                                                        to: `/movie/${e.id}`,
                                                        className: "block bg-secondary/20 border border-border/20 rounded-xl p-4 transition-all duration-300 hover:translate-x-1 hover:bg-secondary/30 hover:border-brand/30",
                                                        children: r.jsxs("div", {
                                                            className: "flex flex-col sm:flex-row gap-4",
                                                            children: [r.jsx("div", {
                                                                className: "sm:w-1/6 flex-shrink-0",
                                                                children: r.jsx("div", {
                                                                    className: "aspect-[2/3] rounded-lg overflow-hidden",
                                                                    children: r.jsx("img", {
                                                                        src: kt(e.poster_path || "", "w342"),
                                                                        alt: e.title,
                                                                        className: "w-full h-full object-cover"
                                                                    })
                                                                })
                                                            }), r.jsxs("div", {
                                                                className: "flex-1",
                                                                children: [r.jsxs("div", {
                                                                    className: "flex items-start justify-between",
                                                                    children: [r.jsx("h3", {
                                                                        className: "text-xl font-semibold mb-1",
                                                                        children: e.title
                                                                    }), r.jsx(s, {
                                                                        to: `/watch/movie/${e.id}`,
                                                                        className: "flex items-center justify-center p-2 bg-brand text-background rounded-full hover:bg-brand/90 transition-colors ml-2",
                                                                        onClick: e => e.stopPropagation(),
                                                                        children: r.jsx(V, {
                                                                            size: 18,
                                                                            fill: "currentColor"
                                                                        })
                                                                    })]
                                                                }), r.jsxs("div", {
                                                                    className: "flex items-center gap-3 text-sm text-foreground/60 mb-2",
                                                                    children: [e.release_date && r.jsxs("div", {
                                                                        className: "flex items-center",
                                                                        children: [r.jsx(ae, {
                                                                            size: 14,
                                                                            className: "mr-1 text-brand"
                                                                        }), r.jsx("span", {
                                                                            children: u(e.release_date)
                                                                        })]
                                                                    }), e.vote_average > 0 && r.jsxs("div", {
                                                                        className: "flex items-center",
                                                                        children: [r.jsx(I, {
                                                                            size: 14,
                                                                            className: "mr-1 text-yellow-400 fill-current"
                                                                        }), r.jsx("span", {
                                                                            children: e.vote_average.toFixed(1)
                                                                        })]
                                                                    })]
                                                                }), r.jsx("p", {
                                                                    className: "text-sm text-foreground/70 line-clamp-2 mb-4",
                                                                    children: e.overview || "No overview available."
                                                                }), r.jsxs("div", {
                                                                    className: "inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand/80 transition-colors",
                                                                    children: [r.jsx(ne, {
                                                                        size: 14
                                                                    }), r.jsx("span", {
                                                                        children: "View Details"
                                                                    })]
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                }, e.id))
                                            })
                                        })]
                                    }), r.jsxs("div", {
                                        className: "space-y-6",
                                        children: [r.jsxs("h2", {
                                            className: "text-xl font-bold text-foreground/90 flex items-center",
                                            children: [r.jsx("span", {
                                                className: "w-1 h-6 bg-brand rounded-full mr-4"
                                            }), "Movies in Collection"]
                                        }), r.jsx("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6",
                                            children: a.parts ? .map(e => r.jsx(Ht, {
                                                item: { ...e,
                                                    media_type: "movie",
                                                    genre_ids: e.genre_ids || []
                                                }
                                            }, e.id))
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            })]
        }) : r.jsxs(r.Fragment, {
            children: [r.jsx(ft, {}), r.jsx("div", {
                className: "min-h-screen pt-16 bg-background",
                children: r.jsxs("div", {
                    className: "container mx-auto px-4 py-8 text-center",
                    children: [r.jsx("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Collection not found"
                    }), r.jsx(s, {
                        to: "/collections",
                        className: "btn-primary px-4 py-2",
                        children: "Back to Collections"
                    })]
                })
            })]
        })
    },
    hr = ({
        onComplete: e
    }) => {
        const [s, a] = t.useState(Ve.getCurrentUser()), n = t.useRef(null), o = t.useRef(null), i = t.useRef(null), l = t.useRef(null), d = t.useRef(null), c = t.useRef(null), u = t.useRef(null), m = t.useRef(null), x = t.useRef(!1), [h, g] = t.useState(!1), f = t.useRef(null);
        t.useEffect(() => {
            if (!h && c.current) {
                for (let e = 0; e < 80; e++) {
                    const e = document.createElement("div");
                    e.className = "absolute rounded-full";
                    const t = ["bg-brand-400/30", "bg-brand-500/30", "bg-brand-300/30"];
                    e.classList.add(t[Math.floor(Math.random() * t.length)]);
                    const r = 3 * Math.random() + 2;
                    e.style.width = `${r}px`, e.style.height = `${r}px`, e.style.left = 100 * Math.random() + "%", e.style.top = 100 * Math.random() + "%", c.current.appendChild(e)
                }
                g(!0)
            }
        }, [h]);
        const b = t.useRef(() => {
            n.current && ce.to(n.current, {
                duration: .8,
                opacity: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    e(), m.current && (m.current.kill(), m.current = null)
                }
            })
        }).current;
        return t.useEffect(() => {
            if (x.current || !h) return;
            x.current = !0, m.current && m.current.kill();
            const e = ce.timeline({
                paused: !0,
                onComplete: b
            });
            if (m.current = e, ce.set(l.current, {
                    scale: .8,
                    opacity: 0
                }), ce.set(o.current, {
                    opacity: 0,
                    y: 10
                }), ce.set(i.current, {
                    opacity: 0,
                    y: 20
                }), ce.set(u.current, {
                    opacity: 0,
                    scale: .9
                }), c.current) {
                const t = c.current.children;
                ce.set(t, {
                    opacity: 0,
                    scale: 0
                });
                for (let r = 0; r < t.length; r++) {
                    const s = 1 * Math.random(),
                        a = 2.5 * Math.random() + 1.5;
                    e.to(t[r], {
                        opacity: .7 * Math.random() + .3,
                        scale: 1,
                        delay: s,
                        duration: .6
                    }, 0), e.to(t[r], {
                        y: "-=" + (40 * Math.random() + 20),
                        x: "+=" + (20 * Math.random() - 10),
                        delay: s,
                        duration: a,
                        repeat: -1,
                        yoyo: !0,
                        ease: "sine.inOut"
                    }, 0)
                }
            }
            return e.to(l.current, {
                scale: 1,
                opacity: 1,
                duration: .6,
                ease: "back.out(1.7)"
            }, 0).to(o.current, {
                opacity: 1,
                y: 0,
                duration: .6,
                ease: "power2.out"
            }, .3).to(i.current, {
                opacity: 1,
                y: 0,
                duration: .6,
                ease: "power2.out"
            }, .5).to(u.current, {
                opacity: .7,
                scale: 1.15,
                duration: .8,
                ease: "power2.inOut"
            }, .2).to(l.current, {
                boxShadow: "0 0 30px rgba(13, 202, 240, 0.6)",
                duration: .7,
                ease: "power2.inOut"
            }, .3).to(u.current, {
                opacity: .8,
                scale: 1.25,
                duration: .7,
                ease: "power1.inOut"
            }, .5).to(d.current, {
                opacity: 0,
                duration: .6,
                ease: "power3.inOut"
            }, .7), requestAnimationFrame(() => {
                e.play()
            }), f.current = window.setTimeout(() => {
                b()
            }, 3e3), () => {
                m.current && (m.current.kill(), m.current = null), null !== f.current && window.clearTimeout(f.current)
            }
        }, [e, h, b]), r.jsxs("div", {
            ref: n,
            className: "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
            children: [r.jsx("div", {
                ref: c,
                className: "absolute inset-0 pointer-events-none"
            }), r.jsxs("div", {
                className: "relative flex flex-col items-center z-10",
                children: [r.jsx("div", {
                    ref: u,
                    className: "absolute inset-0 bg-gradient-to-r from-brand-400/20 via-brand-500/20 to-brand-300/20 rounded-full blur-3xl transform scale-150"
                }), r.jsxs("div", {
                    ref: l,
                    className: "relative px-6 sm:px-10 py-4 sm:py-5 bg-background/80 backdrop-blur-xl rounded-xl border border-brand-500/30 shadow-lg",
                    children: [r.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-brand-500/5 via-brand-400/5 to-transparent rounded-xl"
                    }), r.jsxs("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [r.jsx("div", {
                            ref: o,
                            className: "relative z-10",
                            children: r.jsx("span", {
                                className: "text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-300 via-brand-500 to-brand-400 bg-clip-text text-transparent drop-shadow-sm",
                                children: "FMOVIES+"
                            })
                        }), s && r.jsxs("div", {
                            ref: i,
                            className: "relative z-10 text-lg sm:text-xl text-foreground/80 font-medium",
                            children: ["Welcome back, ", r.jsx("span", {
                                className: "text-brand",
                                children: s.username
                            })]
                        })]
                    }), r.jsx("div", {
                        className: "absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 via-brand-400/20 to-brand-300/20 blur-sm rounded-xl opacity-50"
                    })]
                }), r.jsx("div", {
                    className: "mt-10 relative z-10",
                    children: r.jsx("div", {
                        className: "flex space-x-3",
                        children: [0, 1, 2].map(e => r.jsx("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-brand-500/70 animate-pulse shadow-sm shadow-brand-500/30",
                            style: {
                                animationDelay: .15 * e + "s"
                            }
                        }, e))
                    })
                })]
            }), r.jsx("div", {
                ref: d,
                className: "absolute inset-0 bg-background"
            })]
        })
    },
    gr = t.lazy(() => me(() =>
        import ("./DRYkPRBnPw7PP62a.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]))),
    fr = t.lazy(() => me(() =>
        import ("./BLAQiaZv-IYrB822.js"), __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 7, 8, 9, 17]))),
    br = t.lazy(() => me(() =>
        import ("./BECp9yQdPAitwlCI.js"), __vite__mapDeps([19, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 7, 8, 9, 17]))),
    pr = t.lazy(() => me(() =>
        import ("./DfdcUrwOuH6NXQUe.js"), __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 7, 8, 9, 17]))),
    vr = t.lazy(() => me(() =>
        import ("./wePhTpoTR_0ArJwL.js"), __vite__mapDeps([21, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 7, 8, 9, 17]))),
    jr = t.lazy(() => me(() =>
        import ("./crV_yrDEx9-RI-FF.js"), __vite__mapDeps([22, 1, 2, 3, 6, 7, 8, 9, 23, 24, 12, 13, 4, 5, 10, 11, 14, 15, 16, 17])).then(e => ({
        default: e.VideoPlayer
    }))),
    yr = t.lazy(() => me(() =>
        import ("./Dq5o0lpy8W0NgvEn.js"), __vite__mapDeps([25, 1, 2, 3, 7, 8, 9, 6, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17])).then(e => ({
        default: e.Register
    }))),
    wr = t.lazy(() => me(() =>
        import ("./B8dUZteKaJ1Ajo6q.js"), __vite__mapDeps([26, 1, 2, 3, 7, 8, 9, 6, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17])).then(e => ({
        default: e.Login
    }))),
    Nr = t.lazy(() => me(() =>
        import ("./DYmGDhXmaZ0RdROJ.js"), __vite__mapDeps([27, 1, 2, 3, 7, 8, 9, 6, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17]))),
    zr = t.lazy(() => me(() =>
        import ("./3H4l8_FZBSOmlnNZ.js"), __vite__mapDeps([28, 1, 2, 3, 29, 30, 7, 8, 9, 6, 24, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17]))),
    Cr = t.lazy(() => me(() =>
        import ("./DnSvMRTpYpGgNkNq.js"), __vite__mapDeps([31, 1, 2, 3, 29, 30, 6, 7, 8, 9, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17]))),
    kr = t.lazy(() => me(() =>
        import ("./CySd7UQckpWyhpoX.js"), __vite__mapDeps([32, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 7, 8, 9, 17]))),
    Lr = new x({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: !1,
                staleTime: 3e5,
                cacheTime: 6e5,
                retry: 3,
                retryDelay: e => Math.min(1e3 * 2 ** e, 3e4)
            }
        }
    }),
    Dr = () => r.jsx("div", {
        className: "min-h-screen bg-background flex items-center justify-center",
        children: r.jsxs("div", {
            className: "flex flex-col items-center gap-4",
            children: [r.jsx(ee, {
                className: "h-12 w-12 animate-spin text-brand"
            }), r.jsx("p", {
                className: "text-foreground/70",
                children: "Loading content..."
            })]
        })
    }),
    Ar = () => {
        const e = n(),
            s = e.pathname.includes("/watch/");
        return r.jsx("div", {
            className: "min-h-screen flex flex-col pb-safe",
            children: r.jsxs(t.Suspense, {
                fallback: r.jsx(Dr, {}),
                children: [r.jsxs(l, {
                    children: [r.jsx(d, {
                        path: "/",
                        element: r.jsx(Ft, {})
                    }), r.jsx(d, {
                        path: "/home",
                        element: r.jsx(lr, {})
                    }), r.jsx(d, {
                        path: "/genres",
                        element: r.jsx(gr, {})
                    }), r.jsx(d, {
                        path: "/movies",
                        element: r.jsx(fr, {})
                    }), r.jsx(d, {
                        path: "/tv-series",
                        element: r.jsx(br, {})
                    }), r.jsx(d, {
                        path: "/top-imdb",
                        element: r.jsx(pr, {})
                    }), r.jsx(d, {
                        path: "/search",
                        element: r.jsx(vr, {})
                    }), r.jsx(d, {
                        path: "/4k",
                        element: r.jsx(kr, {})
                    }), r.jsx(d, {
                        path: "/:type/:id",
                        element: r.jsx(zr, {})
                    }), r.jsx(d, {
                        path: "/collections",
                        element: r.jsx(mr, {})
                    }), r.jsx(d, {
                        path: "/collections/:id",
                        element: r.jsx(xr, {})
                    }), r.jsx(d, {
                        path: "/watch/movie/:tmdbId",
                        element: r.jsx(t.Suspense, {
                            fallback: r.jsx(Dr, {}),
                            children: r.jsx(jr, {
                                mediaType: "movie"
                            }, e.pathname)
                        })
                    }), r.jsx(d, {
                        path: "/watch/tv/:tmdbId/:seasonId/:episodeId",
                        element: r.jsx(t.Suspense, {
                            fallback: r.jsx(Dr, {}),
                            children: r.jsx(jr, {
                                mediaType: "tv"
                            }, e.pathname)
                        })
                    }), r.jsx(d, {
                        path: "/login",
                        element: r.jsx(wr, {})
                    }), r.jsx(d, {
                        path: "/register",
                        element: r.jsx(yr, {})
                    }), r.jsx(d, {
                        path: "/profile",
                        element: r.jsx(Nr, {})
                    }), r.jsx(d, {
                        path: "/mycorner",
                        element: r.jsx(Cr, {})
                    }), r.jsx(d, {
                        path: "/404",
                        element: r.jsx(dr, {})
                    }), r.jsx(d, {
                        path: "*",
                        element: r.jsx(c, {
                            to: "/404",
                            replace: !0
                        })
                    })]
                }), !s && r.jsx(We, {})]
            })
        })
    },
    Mr = () => {
        const [e, s] = t.useState(navigator.onLine), [a, n] = t.useState(!1), [o, l] = t.useState(!1), [d, c] = t.useState(!1), u = t.useRef(!1), m = t.useRef(null), x = t.useCallback(() => {
            n(!1), l(!0)
        }, []);
        return t.useEffect(() => {
            if (u.current) return;
            u.current = !0;
            sessionStorage.getItem("hasSeenIntro") ? (l(!0), c(!0)) : (c(!0), setTimeout(() => {
                n(!0), sessionStorage.setItem("hasSeenIntro", "true")
            }, 100));
            const e = () => s(!0),
                t = () => s(!1);
            return window.addEventListener("online", e), window.addEventListener("offline", t), () => {
                window.removeEventListener("online", e), window.removeEventListener("offline", t)
            }
        }, []), e ? r.jsxs(r.Fragment, {
            children: [a && d && r.jsx(hr, {
                onComplete: x
            }), r.jsx("div", {
                ref: m,
                className: (a ? "opacity-0" : "opacity-100") + " transition-opacity duration-500",
                "aria-hidden": a,
                children: r.jsx(h, {
                    client: Lr,
                    children: r.jsx(ht, {
                        children: r.jsxs(Te, {
                            children: [r.jsx(Ie, {}), r.jsx(Ee, {}), r.jsxs(i, {
                                children: [r.jsx(cr, {}), r.jsx(Ar, {})]
                            })]
                        })
                    })
                })
            })]
        }) : r.jsx("div", {
            className: "min-h-screen bg-background flex items-center justify-center p-4",
            children: r.jsxs("div", {
                className: "max-w-md w-full p-6 bg-background/80 backdrop-blur-lg border border-border/40 rounded-xl text-center",
                children: [r.jsx("div", {
                    className: "w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center",
                    children: r.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 text-red-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: r.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), r.jsx("h2", {
                    className: "text-xl font-semibold mb-2",
                    children: "No Internet Connection"
                }), r.jsx("p", {
                    className: "text-foreground/70 mb-6",
                    children: "Please check your network connection and try again."
                }), r.jsx("button", {
                    onClick: () => window.location.reload(),
                    className: "px-4 py-2 rounded-lg bg-brand text-white hover:bg-brand/90 transition-colors",
                    children: "Retry"
                })]
            })
        })
    };
u(document.getElementById("root")).render(r.jsx(Mr, {}));
export {
    Ke as A, pt as B, ur as C, Ht as M, ft as N, Nt as T, me as _, Bt as a, At as b, Ot as c, St as d, Pt as e, Mt as f, It as g, _t as h, qt as i, Kt as j, ot as k, nt as l, xt as m, et as n, Ve as o, wt as p, vt as q, ct as r, Et as s, ut as t, at as u
};