import {
    r as e,
    j as t,
    o as n,
    a as r,
    v as o,
    R as i
} from "./D-s6PRqiKBLBeb70.js";

function s(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
    }
}

function a(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t)
}

function c(...e) {
    return t => {
        let n = !1;
        const r = e.map(e => {
            const r = a(e, t);
            return n || "function" != typeof r || (n = !0), r
        });
        if (n) return () => {
            for (let t = 0; t < r.length; t++) {
                const n = r[t];
                "function" == typeof n ? n() : a(e[t], null)
            }
        }
    }
}

function l(...t) {
    return e.useCallback(c(...t), t)
}

function u(n, r = []) {
    let o = [];
    const i = () => {
        const t = o.map(t => e.createContext(t));
        return function(r) {
            const o = r ? .[n] || t;
            return e.useMemo(() => ({
                [`__scope${n}`]: { ...r,
                    [n]: o
                }
            }), [r, o])
        }
    };
    return i.scopeName = n, [function(r, i) {
        const s = e.createContext(i),
            a = o.length;
        o = [...o, i];
        const c = r => {
            const {
                scope: o,
                children: i,
                ...c
            } = r, l = o ? .[n] ? .[a] || s, u = e.useMemo(() => c, Object.values(c));
            return t.jsx(l.Provider, {
                value: u,
                children: i
            })
        };
        return c.displayName = r + "Provider", [c, function(t, o) {
            const c = o ? .[n] ? .[a] || s,
                l = e.useContext(c);
            if (l) return l;
            if (void 0 !== i) return i;
            throw new Error(`\`${t}\` must be used within \`${r}\``)
        }]
    }, f(i, ...r)]
}

function f(...t) {
    const n = t[0];
    if (1 === t.length) return n;
    const r = () => {
        const r = t.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
        }));
        return function(t) {
            const o = r.reduce((e, {
                useScope: n,
                scopeName: r
            }) => ({ ...e,
                ...n(t)[`__scope${r}`]
            }), {});
            return e.useMemo(() => ({
                [`__scope${n.scopeName}`]: o
            }), [o])
        }
    };
    return r.scopeName = n.scopeName, r
}

function d(n) {
    const r = p(n),
        o = e.forwardRef((n, o) => {
            const {
                children: i,
                ...s
            } = n, a = e.Children.toArray(i), c = a.find(h);
            if (c) {
                const n = c.props.children,
                    i = a.map(t => t === c ? e.Children.count(n) > 1 ? e.Children.only(null) : e.isValidElement(n) ? n.props.children : null : t);
                return t.jsx(r, { ...s,
                    ref: o,
                    children: e.isValidElement(n) ? e.cloneElement(n, void 0, i) : null
                })
            }
            return t.jsx(r, { ...s,
                ref: o,
                children: i
            })
        });
    return o.displayName = `${n}.Slot`, o
}

function p(t) {
    const n = e.forwardRef((t, n) => {
        const {
            children: r,
            ...o
        } = t;
        if (e.isValidElement(r)) {
            const t = function(e) {
                    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                        n = t && "isReactWarning" in t && t.isReactWarning;
                    if (n) return e.ref;
                    if (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n) return e.props.ref;
                    return e.props.ref || e.ref
                }(r),
                i = function(e, t) {
                    const n = { ...t
                    };
                    for (const r in t) {
                        const o = e[r],
                            i = t[r];
                        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                            const t = i(...e);
                            return o(...e), t
                        } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                            ...i
                        } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return { ...e,
                        ...n
                    }
                }(o, r.props);
            return r.type !== e.Fragment && (i.ref = n ? c(n, t) : t), e.cloneElement(r, i)
        }
        return e.Children.count(r) > 1 ? e.Children.only(null) : null
    });
    return n.displayName = `${t}.SlotClone`, n
}
var m = Symbol("radix.slottable");

function h(t) {
    return e.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === m
}
var y = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((n, r) => {
    const o = d(`Primitive.${r}`),
        i = e.forwardRef((e, n) => {
            const {
                asChild: i,
                ...s
            } = e, a = i ? o : r;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), t.jsx(a, { ...s,
                ref: n
            })
        });
    return i.displayName = `Primitive.${r}`, { ...n,
        [r]: i
    }
}, {});

function g(e, t) {
    e && r.flushSync(() => e.dispatchEvent(t))
}

function w(t) {
    const n = e.useRef(t);
    return e.useEffect(() => {
        n.current = t
    }), e.useMemo(() => (...e) => n.current ? .(...e), [])
}
var v, x = "dismissableLayer.update",
    b = "dismissableLayer.pointerDownOutside",
    E = "dismissableLayer.focusOutside",
    T = e.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    R = e.forwardRef((n, r) => {
        const {
            disableOutsidePointerEvents: o = !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: c,
            onInteractOutside: u,
            onDismiss: f,
            ...d
        } = n, p = e.useContext(T), [m, h] = e.useState(null), g = m ? .ownerDocument ? ? globalThis ? .document, [, R] = e.useState({}), C = l(r, e => h(e)), D = Array.from(p.layers), [L] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), A = D.indexOf(L), O = m ? D.indexOf(m) : -1, N = p.layersWithOutsidePointerEventsDisabled.size > 0, j = O >= A, M = function(t, n = globalThis ? .document) {
            const r = w(t),
                o = e.useRef(!1),
                i = e.useRef(() => {});
            return e.useEffect(() => {
                const e = e => {
                        if (e.target && !o.current) {
                            let t = function() {
                                S(b, r, o, {
                                    discrete: !0
                                })
                            };
                            const o = {
                                originalEvent: e
                            };
                            "touch" === e.pointerType ? (n.removeEventListener("click", i.current), i.current = t, n.addEventListener("click", i.current, {
                                once: !0
                            })) : t()
                        } else n.removeEventListener("click", i.current);
                        o.current = !1
                    },
                    t = window.setTimeout(() => {
                        n.addEventListener("pointerdown", e)
                    }, 0);
                return () => {
                    window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", i.current)
                }
            }, [n, r]), {
                onPointerDownCapture: () => o.current = !0
            }
        }(e => {
            const t = e.target,
                n = [...p.branches].some(e => e.contains(t));
            j && !n && (a ? .(e), u ? .(e), e.defaultPrevented || f ? .())
        }, g), _ = function(t, n = globalThis ? .document) {
            const r = w(t),
                o = e.useRef(!1);
            return e.useEffect(() => {
                const e = e => {
                    if (e.target && !o.current) {
                        S(E, r, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                };
                return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
            }, [n, r]), {
                onFocusCapture: () => o.current = !0,
                onBlurCapture: () => o.current = !1
            }
        }(e => {
            const t = e.target;
            [...p.branches].some(e => e.contains(t)) || (c ? .(e), u ? .(e), e.defaultPrevented || f ? .())
        }, g);
        return function(t, n = globalThis ? .document) {
            const r = w(t);
            e.useEffect(() => {
                const e = e => {
                    "Escape" === e.key && r(e)
                };
                return n.addEventListener("keydown", e, {
                    capture: !0
                }), () => n.removeEventListener("keydown", e, {
                    capture: !0
                })
            }, [r, n])
        }(e => {
            O === p.layers.size - 1 && (i ? .(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
        }, g), e.useEffect(() => {
            if (m) return o && (0 === p.layersWithOutsidePointerEventsDisabled.size && (v = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), P(), () => {
                o && 1 === p.layersWithOutsidePointerEventsDisabled.size && (g.body.style.pointerEvents = v)
            }
        }, [m, g, o, p]), e.useEffect(() => () => {
            m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), P())
        }, [m, p]), e.useEffect(() => {
            const e = () => R({});
            return document.addEventListener(x, e), () => document.removeEventListener(x, e)
        }, []), t.jsx(y.div, { ...d,
            ref: C,
            style: {
                pointerEvents: N ? j ? "auto" : "none" : void 0,
                ...n.style
            },
            onFocusCapture: s(n.onFocusCapture, _.onFocusCapture),
            onBlurCapture: s(n.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: s(n.onPointerDownCapture, M.onPointerDownCapture)
        })
    });
R.displayName = "DismissableLayer";
var C = e.forwardRef((n, r) => {
    const o = e.useContext(T),
        i = e.useRef(null),
        s = l(r, i);
    return e.useEffect(() => {
        const e = i.current;
        if (e) return o.branches.add(e), () => {
            o.branches.delete(e)
        }
    }, [o.branches]), t.jsx(y.div, { ...n,
        ref: s
    })
});

function P() {
    const e = new CustomEvent(x);
    document.dispatchEvent(e)
}

function S(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? g(o, i) : o.dispatchEvent(i)
}
C.displayName = "DismissableLayerBranch";
var D = R,
    L = C,
    A = globalThis ? .document ? e.useLayoutEffect : () => {},
    O = e.forwardRef((n, r) => {
        const {
            container: i,
            ...s
        } = n, [a, c] = e.useState(!1);
        A(() => c(!0), []);
        const l = i || a && globalThis ? .document ? .body;
        return l ? o.createPortal(t.jsx(y.div, { ...s,
            ref: r
        }), l) : null
    });
O.displayName = "Portal";
var N = t => {
    const {
        present: n,
        children: r
    } = t, o = function(t) {
        const [n, r] = e.useState(), o = e.useRef(null), i = e.useRef(t), s = e.useRef("none"), a = t ? "mounted" : "unmounted", [c, l] = function(t, n) {
            return e.useReducer((e, t) => n[e][t] ? ? e, t)
        }(a, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
        return e.useEffect(() => {
            const e = j(o.current);
            s.current = "mounted" === c ? e : "none"
        }, [c]), A(() => {
            const e = o.current,
                n = i.current;
            if (n !== t) {
                const r = s.current,
                    o = j(e);
                if (t) l("MOUNT");
                else if ("none" === o || "none" === e ? .display) l("UNMOUNT");
                else {
                    l(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT")
                }
                i.current = t
            }
        }, [t, l]), A(() => {
            if (n) {
                let e;
                const t = n.ownerDocument.defaultView ? ? window,
                    r = r => {
                        const s = j(o.current).includes(CSS.escape(r.animationName));
                        if (r.target === n && s && (l("ANIMATION_END"), !i.current)) {
                            const r = n.style.animationFillMode;
                            n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                                "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                            })
                        }
                    },
                    a = e => {
                        e.target === n && (s.current = j(o.current))
                    };
                return n.addEventListener("animationstart", a), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                    t.clearTimeout(e), n.removeEventListener("animationstart", a), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
            }
            l("ANIMATION_END")
        }, [n, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(c),
            ref: e.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
        }
    }(n), i = "function" == typeof r ? r({
        present: o.isPresent
    }) : e.Children.only(r), s = l(o.ref, function(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
            n = t && "isReactWarning" in t && t.isReactWarning;
        if (n) return e.ref;
        if (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n) return e.props.ref;
        return e.props.ref || e.ref
    }(i));
    return "function" == typeof r || o.isPresent ? e.cloneElement(i, {
        ref: s
    }) : null
};

function j(e) {
    return e ? .animationName || "none"
}
N.displayName = "Presence";
var M = i[" useInsertionEffect ".trim().toString()] || A;

function _({
    prop: t,
    defaultProp: n,
    onChange: r = () => {},
    caller: o
}) {
    const [i, s, a] = function({
        defaultProp: t,
        onChange: n
    }) {
        const [r, o] = e.useState(t), i = e.useRef(r), s = e.useRef(n);
        return M(() => {
            s.current = n
        }, [n]), e.useEffect(() => {
            i.current !== r && (s.current ? .(r), i.current = r)
        }, [r, i]), [r, o, s]
    }({
        defaultProp: n,
        onChange: r
    }), c = void 0 !== t, l = c ? t : i; {
        const n = e.useRef(void 0 !== t);
        e.useEffect(() => {
            const e = n.current;
            if (e !== c) {}
            n.current = c
        }, [c, o])
    }
    const u = e.useCallback(e => {
        if (c) {
            const n = function(e) {
                return "function" == typeof e
            }(e) ? e(t) : e;
            n !== t && a.current ? .(n)
        } else s(e)
    }, [c, t, s, a]);
    return [l, u]
}
var k = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    F = e.forwardRef((e, n) => t.jsx(y.span, { ...e,
        ref: n,
        style: { ...k,
            ...e.style
        }
    }));
F.displayName = "VisuallyHidden";
var I = F,
    W = "ToastProvider",
    [H, $, B] = function(e) {
        const r = e + "CollectionProvider",
            [o, i] = u(r),
            [s, a] = o(r, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            }),
            c = e => {
                const {
                    scope: r,
                    children: o
                } = e, i = n.useRef(null), a = n.useRef(new Map).current;
                return t.jsx(s, {
                    scope: r,
                    itemMap: a,
                    collectionRef: i,
                    children: o
                })
            };
        c.displayName = r;
        const f = e + "CollectionSlot",
            p = d(f),
            m = n.forwardRef((e, n) => {
                const {
                    scope: r,
                    children: o
                } = e, i = l(n, a(f, r).collectionRef);
                return t.jsx(p, {
                    ref: i,
                    children: o
                })
            });
        m.displayName = f;
        const h = e + "CollectionItemSlot",
            y = "data-radix-collection-item",
            g = d(h),
            w = n.forwardRef((e, r) => {
                const {
                    scope: o,
                    children: i,
                    ...s
                } = e, c = n.useRef(null), u = l(r, c), f = a(h, o);
                return n.useEffect(() => (f.itemMap.set(c, {
                    ref: c,
                    ...s
                }), () => {
                    f.itemMap.delete(c)
                })), t.jsx(g, {
                    [y]: "",
                    ref: u,
                    children: i
                })
            });
        return w.displayName = h, [{
            Provider: c,
            Slot: m,
            ItemSlot: w
        }, function(t) {
            const r = a(e + "CollectionConsumer", t);
            return n.useCallback(() => {
                const e = r.collectionRef.current;
                if (!e) return [];
                const t = Array.from(e.querySelectorAll(`[${y}]`));
                return Array.from(r.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
            }, [r.collectionRef, r.itemMap])
        }, i]
    }("Toast"),
    [V, z] = u("Toast", [B]),
    [K, U] = V(W),
    X = n => {
        const {
            __scopeToast: r,
            label: o = "Notification",
            duration: i = 5e3,
            swipeDirection: s = "right",
            swipeThreshold: a = 50,
            children: c
        } = n, [l, u] = e.useState(null), [f, d] = e.useState(0), p = e.useRef(!1), m = e.useRef(!1);
        return o.trim(), t.jsx(H.Provider, {
            scope: r,
            children: t.jsx(K, {
                scope: r,
                label: o,
                duration: i,
                swipeDirection: s,
                swipeThreshold: a,
                toastCount: f,
                viewport: l,
                onViewportChange: u,
                onToastAdd: e.useCallback(() => d(e => e + 1), []),
                onToastRemove: e.useCallback(() => d(e => e - 1), []),
                isFocusedToastEscapeKeyDownRef: p,
                isClosePausedRef: m,
                children: c
            })
        })
    };
X.displayName = W;
var Y = "ToastViewport",
    q = ["F8"],
    Z = "toast.viewportPause",
    G = "toast.viewportResume",
    J = e.forwardRef((n, r) => {
        const {
            __scopeToast: o,
            hotkey: i = q,
            label: s = "Notifications ({hotkey})",
            ...a
        } = n, c = U(Y, o), u = $(o), f = e.useRef(null), d = e.useRef(null), p = e.useRef(null), m = e.useRef(null), h = l(r, m, c.onViewportChange), g = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = c.toastCount > 0;
        e.useEffect(() => {
            const e = e => {
                0 !== i.length && i.every(t => e[t] || e.code === t) && m.current ? .focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, [i]), e.useEffect(() => {
            const e = f.current,
                t = m.current;
            if (w && e && t) {
                const n = () => {
                        if (!c.isClosePausedRef.current) {
                            const e = new CustomEvent(Z);
                            t.dispatchEvent(e), c.isClosePausedRef.current = !0
                        }
                    },
                    r = () => {
                        if (c.isClosePausedRef.current) {
                            const e = new CustomEvent(G);
                            t.dispatchEvent(e), c.isClosePausedRef.current = !1
                        }
                    },
                    o = t => {
                        !e.contains(t.relatedTarget) && r()
                    },
                    i = () => {
                        e.contains(document.activeElement) || r()
                    };
                return e.addEventListener("focusin", n), e.addEventListener("focusout", o), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", i), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
                    e.removeEventListener("focusin", n), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", n), window.removeEventListener("focus", r)
                }
            }
        }, [w, c.isClosePausedRef]);
        const v = e.useCallback(({
            tabbingDirection: e
        }) => {
            const t = u().map(t => {
                const n = t.ref.current,
                    r = [n, ...ye(n)];
                return "forwards" === e ? r : r.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
        }, [u]);
        return e.useEffect(() => {
            const e = m.current;
            if (e) {
                const t = t => {
                    const n = t.altKey || t.ctrlKey || t.metaKey;
                    if ("Tab" === t.key && !n) {
                        const n = document.activeElement,
                            r = t.shiftKey;
                        if (t.target === e && r) return void d.current ? .focus();
                        const o = v({
                                tabbingDirection: r ? "backwards" : "forwards"
                            }),
                            i = o.findIndex(e => e === n);
                        ge(o.slice(i + 1)) ? t.preventDefault() : r ? d.current ? .focus() : p.current ? .focus()
                    }
                };
                return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
        }, [u, v]), t.jsxs(L, {
            ref: f,
            role: "region",
            "aria-label": s.replace("{hotkey}", g),
            tabIndex: -1,
            style: {
                pointerEvents: w ? void 0 : "none"
            },
            children: [w && t.jsx(ee, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    ge(v({
                        tabbingDirection: "forwards"
                    }))
                }
            }), t.jsx(H.Slot, {
                scope: o,
                children: t.jsx(y.ol, {
                    tabIndex: -1,
                    ...a,
                    ref: h
                })
            }), w && t.jsx(ee, {
                ref: p,
                onFocusFromOutsideViewport: () => {
                    ge(v({
                        tabbingDirection: "backwards"
                    }))
                }
            })]
        })
    });
J.displayName = Y;
var Q = "ToastFocusProxy",
    ee = e.forwardRef((e, n) => {
        const {
            __scopeToast: r,
            onFocusFromOutsideViewport: o,
            ...i
        } = e, s = U(Q, r);
        return t.jsx(F, {
            tabIndex: 0,
            ...i,
            ref: n,
            style: {
                position: "fixed"
            },
            onFocus: e => {
                const t = e.relatedTarget;
                !s.viewport ? .contains(t) && o()
            }
        })
    });
ee.displayName = Q;
var te = "Toast",
    ne = e.forwardRef((e, n) => {
        const {
            forceMount: r,
            open: o,
            defaultOpen: i,
            onOpenChange: a,
            ...c
        } = e, [l, u] = _({
            prop: o,
            defaultProp: i ? ? !0,
            onChange: a,
            caller: te
        });
        return t.jsx(N, {
            present: r || l,
            children: t.jsx(ie, {
                open: l,
                ...c,
                ref: n,
                onClose: () => u(!1),
                onPause: w(e.onPause),
                onResume: w(e.onResume),
                onSwipeStart: s(e.onSwipeStart, e => {
                    e.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: s(e.onSwipeMove, e => {
                    const {
                        x: t,
                        y: n
                    } = e.detail.delta;
                    e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`)
                }),
                onSwipeCancel: s(e.onSwipeCancel, e => {
                    e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: s(e.onSwipeEnd, e => {
                    const {
                        x: t,
                        y: n
                    } = e.detail.delta;
                    e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), u(!1)
                })
            })
        })
    });
ne.displayName = te;
var [re, oe] = V(te, {
    onClose() {}
}), ie = e.forwardRef((n, o) => {
    const {
        __scopeToast: i,
        type: a = "foreground",
        duration: c,
        open: u,
        onClose: f,
        onEscapeKeyDown: d,
        onPause: p,
        onResume: m,
        onSwipeStart: h,
        onSwipeMove: g,
        onSwipeCancel: v,
        onSwipeEnd: x,
        ...b
    } = n, E = U(te, i), [T, R] = e.useState(null), C = l(o, e => R(e)), P = e.useRef(null), S = e.useRef(null), L = c || E.duration, A = e.useRef(0), O = e.useRef(L), N = e.useRef(0), {
        onToastAdd: j,
        onToastRemove: M
    } = E, _ = w(() => {
        const e = T ? .contains(document.activeElement);
        e && E.viewport ? .focus(), f()
    }), k = e.useCallback(e => {
        e && e !== 1 / 0 && (window.clearTimeout(N.current), A.current = (new Date).getTime(), N.current = window.setTimeout(_, e))
    }, [_]);
    e.useEffect(() => {
        const e = E.viewport;
        if (e) {
            const t = () => {
                    k(O.current), m ? .()
                },
                n = () => {
                    const e = (new Date).getTime() - A.current;
                    O.current = O.current - e, window.clearTimeout(N.current), p ? .()
                };
            return e.addEventListener(Z, n), e.addEventListener(G, t), () => {
                e.removeEventListener(Z, n), e.removeEventListener(G, t)
            }
        }
    }, [E.viewport, L, p, m, k]), e.useEffect(() => {
        u && !E.isClosePausedRef.current && k(L)
    }, [u, L, E.isClosePausedRef, k]), e.useEffect(() => (j(), () => M()), [j, M]);
    const F = e.useMemo(() => T ? pe(T) : null, [T]);
    return E.viewport ? t.jsxs(t.Fragment, {
        children: [F && t.jsx(se, {
            __scopeToast: i,
            role: "status",
            "aria-live": "foreground" === a ? "assertive" : "polite",
            children: F
        }), t.jsx(re, {
            scope: i,
            onClose: _,
            children: r.createPortal(t.jsx(H.ItemSlot, {
                scope: i,
                children: t.jsx(D, {
                    asChild: !0,
                    onEscapeKeyDown: s(d, () => {
                        E.isFocusedToastEscapeKeyDownRef.current || _(), E.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: t.jsx(y.li, {
                        tabIndex: 0,
                        "data-state": u ? "open" : "closed",
                        "data-swipe-direction": E.swipeDirection,
                        ...b,
                        ref: C,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...n.style
                        },
                        onKeyDown: s(n.onKeyDown, e => {
                            "Escape" === e.key && (d ? .(e.nativeEvent), e.nativeEvent.defaultPrevented || (E.isFocusedToastEscapeKeyDownRef.current = !0, _()))
                        }),
                        onPointerDown: s(n.onPointerDown, e => {
                            0 === e.button && (P.current = {
                                x: e.clientX,
                                y: e.clientY
                            })
                        }),
                        onPointerMove: s(n.onPointerMove, e => {
                            if (!P.current) return;
                            const t = e.clientX - P.current.x,
                                n = e.clientY - P.current.y,
                                r = Boolean(S.current),
                                o = ["left", "right"].includes(E.swipeDirection),
                                i = ["left", "up"].includes(E.swipeDirection) ? Math.min : Math.max,
                                s = o ? i(0, t) : 0,
                                a = o ? 0 : i(0, n),
                                c = "touch" === e.pointerType ? 10 : 2,
                                l = {
                                    x: s,
                                    y: a
                                },
                                u = {
                                    originalEvent: e,
                                    delta: l
                                };
                            r ? (S.current = l, me("toast.swipeMove", g, u, {
                                discrete: !1
                            })) : he(l, E.swipeDirection, c) ? (S.current = l, me("toast.swipeStart", h, u, {
                                discrete: !1
                            }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > c || Math.abs(n) > c) && (P.current = null)
                        }),
                        onPointerUp: s(n.onPointerUp, e => {
                            const t = S.current,
                                n = e.target;
                            if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), S.current = null, P.current = null, t) {
                                const n = e.currentTarget,
                                    r = {
                                        originalEvent: e,
                                        delta: t
                                    };
                                he(t, E.swipeDirection, E.swipeThreshold) ? me("toast.swipeEnd", x, r, {
                                    discrete: !0
                                }) : me("toast.swipeCancel", v, r, {
                                    discrete: !0
                                }), n.addEventListener("click", e => e.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), E.viewport)
        })]
    }) : null
}), se = n => {
    const {
        __scopeToast: r,
        children: o,
        ...i
    } = n, s = U(te, r), [a, c] = e.useState(!1), [l, u] = e.useState(!1);
    return function(e = () => {}) {
        const t = w(e);
        A(() => {
            let e = 0,
                n = 0;
            return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
                window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
            }
        }, [t])
    }(() => c(!0)), e.useEffect(() => {
        const e = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(e)
    }, []), l ? null : t.jsx(O, {
        asChild: !0,
        children: t.jsx(F, { ...i,
            children: a && t.jsxs(t.Fragment, {
                children: [s.label, " ", o]
            })
        })
    })
}, ae = e.forwardRef((e, n) => {
    const {
        __scopeToast: r,
        ...o
    } = e;
    return t.jsx(y.div, { ...o,
        ref: n
    })
});
ae.displayName = "ToastTitle";
var ce = e.forwardRef((e, n) => {
    const {
        __scopeToast: r,
        ...o
    } = e;
    return t.jsx(y.div, { ...o,
        ref: n
    })
});
ce.displayName = "ToastDescription";
var le = e.forwardRef((e, n) => {
    const {
        altText: r,
        ...o
    } = e;
    return r.trim() ? t.jsx(de, {
        altText: r,
        asChild: !0,
        children: t.jsx(fe, { ...o,
            ref: n
        })
    }) : null
});
le.displayName = "ToastAction";
var ue = "ToastClose",
    fe = e.forwardRef((e, n) => {
        const {
            __scopeToast: r,
            ...o
        } = e, i = oe(ue, r);
        return t.jsx(de, {
            asChild: !0,
            children: t.jsx(y.button, {
                type: "button",
                ...o,
                ref: n,
                onClick: s(e.onClick, i.onClose)
            })
        })
    });
fe.displayName = ue;
var de = e.forwardRef((e, n) => {
    const {
        __scopeToast: r,
        altText: o,
        ...i
    } = e;
    return t.jsx(y.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...i,
        ref: n
    })
});

function pe(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(e => {
        if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
                return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const n = e.ariaHidden || e.hidden || "none" === e.style.display,
                r = "" === e.dataset.radixToastAnnounceExclude;
            if (!n)
                if (r) {
                    const n = e.dataset.radixToastAnnounceAlt;
                    n && t.push(n)
                } else t.push(...pe(e))
        }
    }), t
}

function me(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? g(o, i) : o.dispatchEvent(i)
}
var he = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return "left" === t || "right" === t ? i && r > n : !i && o > n
};

function ye(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
                const t = "INPUT" === e.tagName && "hidden" === e.type;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function ge(e) {
    const t = document.activeElement;
    return e.some(e => e === t || (e.focus(), document.activeElement !== t))
}
var we = X,
    ve = J,
    xe = ne,
    be = ae,
    Ee = ce,
    Te = le,
    Re = fe;
const Ce = ["top", "right", "bottom", "left"],
    Pe = Math.min,
    Se = Math.max,
    De = Math.round,
    Le = Math.floor,
    Ae = e => ({
        x: e,
        y: e
    }),
    Oe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Ne = {
        start: "end",
        end: "start"
    };

function je(e, t, n) {
    return Se(e, Pe(t, n))
}

function Me(e, t) {
    return "function" == typeof e ? e(t) : e
}

function _e(e) {
    return e.split("-")[0]
}

function ke(e) {
    return e.split("-")[1]
}

function Fe(e) {
    return "x" === e ? "y" : "x"
}

function Ie(e) {
    return "y" === e ? "height" : "width"
}
const We = new Set(["top", "bottom"]);

function He(e) {
    return We.has(_e(e)) ? "y" : "x"
}

function $e(e) {
    return Fe(He(e))
}

function Be(e) {
    return e.replace(/start|end/g, e => Ne[e])
}
const Ve = ["left", "right"],
    ze = ["right", "left"],
    Ke = ["top", "bottom"],
    Ue = ["bottom", "top"];

function Xe(e, t, n, r) {
    const o = ke(e);
    let i = function(e, t, n) {
        switch (e) {
            case "top":
            case "bottom":
                return n ? t ? ze : Ve : t ? Ve : ze;
            case "left":
            case "right":
                return t ? Ke : Ue;
            default:
                return []
        }
    }(_e(e), "start" === n, r);
    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(Be)))), i
}

function Ye(e) {
    return e.replace(/left|right|bottom|top/g, e => Oe[e])
}

function qe(e) {
    return "number" != typeof e ? function(e) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        }
    }(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Ze(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Ge(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = He(t),
        s = $e(t),
        a = Ie(s),
        c = _e(t),
        l = "y" === i,
        u = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        d = r[a] / 2 - o[a] / 2;
    let p;
    switch (c) {
        case "top":
            p = {
                x: u,
                y: r.y - o.height
            };
            break;
        case "bottom":
            p = {
                x: u,
                y: r.y + r.height
            };
            break;
        case "right":
            p = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            p = {
                x: r.x - o.width,
                y: f
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (ke(t)) {
        case "start":
            p[s] -= d * (n && l ? -1 : 1);
            break;
        case "end":
            p[s] += d * (n && l ? -1 : 1)
    }
    return p
}
async function Je(e, t) {
    var n;
    void 0 === t && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: a,
        strategy: c
    } = e, {
        boundary: l = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: f = "floating",
        altBoundary: d = !1,
        padding: p = 0
    } = Me(t, e), m = qe(p), h = a[d ? "floating" === f ? "reference" : "floating" : f], y = Ze(await i.getClippingRect({
        element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
        boundary: l,
        rootBoundary: u,
        strategy: c
    })), g = "floating" === f ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), v = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
        x: 1,
        y: 1
    }, x = Ze(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: g,
        offsetParent: w,
        strategy: c
    }) : g);
    return {
        top: (y.top - x.top + m.top) / v.y,
        bottom: (x.bottom - y.bottom + m.bottom) / v.y,
        left: (y.left - x.left + m.left) / v.x,
        right: (x.right - y.right + m.right) / v.x
    }
}

function Qe(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function et(e) {
    return Ce.some(t => e[t] >= 0)
}
const tt = new Set(["left", "top"]);

function nt() {
    return "undefined" != typeof window
}

function rt(e) {
    return st(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function ot(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
}

function it(e) {
    var t;
    return null == (t = (st(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
}

function st(e) {
    return !!nt() && (e instanceof Node || e instanceof ot(e).Node)
}

function at(e) {
    return !!nt() && (e instanceof Element || e instanceof ot(e).Element)
}

function ct(e) {
    return !!nt() && (e instanceof HTMLElement || e instanceof ot(e).HTMLElement)
}

function lt(e) {
    return !(!nt() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot)
}
const ut = new Set(["inline", "contents"]);

function ft(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = Tt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ut.has(o)
}
const dt = new Set(["table", "td", "th"]);

function pt(e) {
    return dt.has(rt(e))
}
const mt = [":popover-open", ":modal"];

function ht(e) {
    return mt.some(t => {
        try {
            return e.matches(t)
        } catch (n) {
            return !1
        }
    })
}
const yt = ["transform", "translate", "scale", "rotate", "perspective"],
    gt = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    wt = ["paint", "layout", "strict", "content"];

function vt(e) {
    const t = xt(),
        n = at(e) ? Tt(e) : e;
    return yt.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || gt.some(e => (n.willChange || "").includes(e)) || wt.some(e => (n.contain || "").includes(e))
}

function xt() {
    return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}
const bt = new Set(["html", "body", "#document"]);

function Et(e) {
    return bt.has(rt(e))
}

function Tt(e) {
    return ot(e).getComputedStyle(e)
}

function Rt(e) {
    return at(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Ct(e) {
    if ("html" === rt(e)) return e;
    const t = e.assignedSlot || e.parentNode || lt(e) && e.host || it(e);
    return lt(t) ? t.host : t
}

function Pt(e) {
    const t = Ct(e);
    return Et(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ct(t) && ft(t) ? t : Pt(t)
}

function St(e, t, n) {
    var r;
    void 0 === t && (t = []), void 0 === n && (n = !0);
    const o = Pt(e),
        i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
        s = ot(o);
    if (i) {
        const e = Dt(s);
        return t.concat(s, s.visualViewport || [], ft(o) ? o : [], e && n ? St(e) : [])
    }
    return t.concat(o, St(o, [], n))
}

function Dt(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Lt(e) {
    const t = Tt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = ct(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        a = De(n) !== i || De(r) !== s;
    return a && (n = i, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function At(e) {
    return at(e) ? e : e.contextElement
}

function Ot(e) {
    const t = At(e);
    if (!ct(t)) return Ae(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = Lt(t);
    let s = (i ? De(n.width) : n.width) / r,
        a = (i ? De(n.height) : n.height) / o;
    return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
        x: s,
        y: a
    }
}
const Nt = Ae(0);

function jt(e) {
    const t = ot(e);
    return xt() && t.visualViewport ? {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    } : Nt
}

function Mt(e, t, n, r) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    const o = e.getBoundingClientRect(),
        i = At(e);
    let s = Ae(1);
    t && (r ? at(r) && (s = Ot(r)) : s = Ot(e));
    const a = function(e, t, n) {
        return void 0 === t && (t = !1), !(!n || t && n !== ot(e)) && t
    }(i, n, r) ? jt(i) : Ae(0);
    let c = (o.left + a.x) / s.x,
        l = (o.top + a.y) / s.y,
        u = o.width / s.x,
        f = o.height / s.y;
    if (i) {
        const e = ot(i),
            t = r && at(r) ? ot(r) : r;
        let n = e,
            o = Dt(n);
        for (; o && r && t !== n;) {
            const e = Ot(o),
                t = o.getBoundingClientRect(),
                r = Tt(o),
                i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                s = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, l *= e.y, u *= e.x, f *= e.y, c += i, l += s, n = ot(o), o = Dt(n)
        }
    }
    return Ze({
        width: u,
        height: f,
        x: c,
        y: l
    })
}

function _t(e, t) {
    const n = Rt(e).scrollLeft;
    return t ? t.left + n : Mt(it(e)).left + n
}

function kt(e, t) {
    const n = e.getBoundingClientRect();
    return {
        x: n.left + t.scrollLeft - _t(e, n),
        y: n.top + t.scrollTop
    }
}
const Ft = new Set(["absolute", "fixed"]);

function It(e, t, n) {
    let r;
    if ("viewport" === t) r = function(e, t) {
        const n = ot(e),
            r = it(e),
            o = n.visualViewport;
        let i = r.clientWidth,
            s = r.clientHeight,
            a = 0,
            c = 0;
        if (o) {
            i = o.width, s = o.height;
            const e = xt();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, c = o.offsetTop)
        }
        const l = _t(r);
        if (l <= 0) {
            const e = r.ownerDocument,
                t = e.body,
                n = getComputedStyle(t),
                o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                s = Math.abs(r.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
        } else l <= 25 && (i += l);
        return {
            width: i,
            height: s,
            x: a,
            y: c
        }
    }(e, n);
    else if ("document" === t) r = function(e) {
        const t = it(e),
            n = Rt(e),
            r = e.ownerDocument.body,
            o = Se(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = Se(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
        let s = -n.scrollLeft + _t(e);
        const a = -n.scrollTop;
        return "rtl" === Tt(r).direction && (s += Se(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
        }
    }(it(e));
    else if (at(t)) r = function(e, t) {
        const n = Mt(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = ct(e) ? Ot(e) : Ae(1);
        return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
        }
    }(t, n);
    else {
        const n = jt(e);
        r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
        }
    }
    return Ze(r)
}

function Wt(e, t) {
    const n = Ct(e);
    return !(n === t || !at(n) || Et(n)) && ("fixed" === Tt(n).position || Wt(n, t))
}

function Ht(e, t, n) {
    const r = ct(t),
        o = it(t),
        i = "fixed" === n,
        s = Mt(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = Ae(0);

    function l() {
        c.x = _t(o)
    }
    if (r || !r && !i)
        if (("body" !== rt(t) || ft(o)) && (a = Rt(t)), r) {
            const e = Mt(t, !0, i, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
        } else o && l();
    i && !r && o && l();
    const u = !o || r || i ? Ae(0) : kt(o, a);
    return {
        x: s.left + a.scrollLeft - c.x - u.x,
        y: s.top + a.scrollTop - c.y - u.y,
        width: s.width,
        height: s.height
    }
}

function $t(e) {
    return "static" === Tt(e).position
}

function Bt(e, t) {
    if (!ct(e) || "fixed" === Tt(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return it(e) === n && (n = n.ownerDocument.body), n
}

function Vt(e, t) {
    const n = ot(e);
    if (ht(e)) return n;
    if (!ct(e)) {
        let t = Ct(e);
        for (; t && !Et(t);) {
            if (at(t) && !$t(t)) return t;
            t = Ct(t)
        }
        return n
    }
    let r = Bt(e, t);
    for (; r && pt(r) && $t(r);) r = Bt(r, t);
    return r && Et(r) && $t(r) && !vt(r) ? n : r || function(e) {
        let t = Ct(e);
        for (; ct(t) && !Et(t);) {
            if (vt(t)) return t;
            if (ht(t)) return null;
            t = Ct(t)
        }
        return null
    }(e) || n
}
const zt = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
        } = e;
        const i = "fixed" === o,
            s = it(r),
            a = !!t && ht(t.floating);
        if (r === s || a && i) return n;
        let c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            l = Ae(1);
        const u = Ae(0),
            f = ct(r);
        if ((f || !f && !i) && (("body" !== rt(r) || ft(s)) && (c = Rt(r)), ct(r))) {
            const e = Mt(r);
            l = Ot(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
        }
        const d = !s || f || i ? Ae(0) : kt(s, c);
        return {
            width: n.width * l.x,
            height: n.height * l.y,
            x: n.x * l.x - c.scrollLeft * l.x + u.x + d.x,
            y: n.y * l.y - c.scrollTop * l.y + u.y + d.y
        }
    },
    getDocumentElement: it,
    getClippingRect: function(e) {
        let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
        } = e;
        const i = [..."clippingAncestors" === n ? ht(t) ? [] : function(e, t) {
                const n = t.get(e);
                if (n) return n;
                let r = St(e, [], !1).filter(e => at(e) && "body" !== rt(e)),
                    o = null;
                const i = "fixed" === Tt(e).position;
                let s = i ? Ct(e) : e;
                for (; at(s) && !Et(s);) {
                    const t = Tt(s),
                        n = vt(s);
                    n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && Ft.has(o.position) || ft(s) && !n && Wt(e, s)) ? r = r.filter(e => e !== s) : o = t, s = Ct(s)
                }
                return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            s = i[0],
            a = i.reduce((e, n) => {
                const r = It(t, n, o);
                return e.top = Se(r.top, e.top), e.right = Pe(r.right, e.right), e.bottom = Pe(r.bottom, e.bottom), e.left = Se(r.left, e.left), e
            }, It(t, s, o));
        return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
        }
    },
    getOffsetParent: Vt,
    getElementRects: async function(e) {
        const t = this.getOffsetParent || Vt,
            n = this.getDimensions,
            r = await n(e.floating);
        return {
            reference: Ht(e.reference, await t(e.floating), e.strategy),
            floating: {
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
            }
        }
    },
    getClientRects: function(e) {
        return Array.from(e.getClientRects())
    },
    getDimensions: function(e) {
        const {
            width: t,
            height: n
        } = Lt(e);
        return {
            width: t,
            height: n
        }
    },
    getScale: Ot,
    isElement: at,
    isRTL: function(e) {
        return "rtl" === Tt(e).direction
    }
};

function Kt(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function Ut(e, t, n, r) {
    void 0 === r && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = "function" == typeof ResizeObserver,
        layoutShift: a = "function" == typeof IntersectionObserver,
        animationFrame: c = !1
    } = r, l = At(e), u = o || i ? [...l ? St(l) : [], ...St(t)] : [];
    u.forEach(e => {
        o && e.addEventListener("scroll", n, {
            passive: !0
        }), i && e.addEventListener("resize", n)
    });
    const f = l && a ? function(e, t) {
        let n, r = null;
        const o = it(e);

        function i() {
            var e;
            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
        }
        return function s(a, c) {
            void 0 === a && (a = !1), void 0 === c && (c = 1), i();
            const l = e.getBoundingClientRect(),
                {
                    left: u,
                    top: f,
                    width: d,
                    height: p
                } = l;
            if (a || t(), !d || !p) return;
            const m = {
                rootMargin: -Le(f) + "px " + -Le(o.clientWidth - (u + d)) + "px " + -Le(o.clientHeight - (f + p)) + "px " + -Le(u) + "px",
                threshold: Se(0, Pe(1, c)) || 1
            };
            let h = !0;

            function y(t) {
                const r = t[0].intersectionRatio;
                if (r !== c) {
                    if (!h) return s();
                    r ? s(!1, r) : n = setTimeout(() => {
                        s(!1, 1e-7)
                    }, 1e3)
                }
                1 !== r || Kt(l, e.getBoundingClientRect()) || s(), h = !1
            }
            try {
                r = new IntersectionObserver(y, { ...m,
                    root: o.ownerDocument
                })
            } catch (g) {
                r = new IntersectionObserver(y, m)
            }
            r.observe(e)
        }(!0), i
    }(l, n) : null;
    let d, p = -1,
        m = null;
    s && (m = new ResizeObserver(e => {
        let [r] = e;
        r && r.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
            var e;
            null == (e = m) || e.observe(t)
        })), n()
    }), l && !c && m.observe(l), m.observe(t));
    let h = c ? Mt(e) : null;
    return c && function t() {
        const r = Mt(e);
        h && !Kt(h, r) && n();
        h = r, d = requestAnimationFrame(t)
    }(), n(), () => {
        var e;
        u.forEach(e => {
            o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
        }), null == f || f(), null == (e = m) || e.disconnect(), m = null, c && cancelAnimationFrame(d)
    }
}
const Xt = function(e) {
        return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: a
                } = t, c = await async function(e, t) {
                    const {
                        placement: n,
                        platform: r,
                        elements: o
                    } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), s = _e(n), a = ke(n), c = "y" === He(n), l = tt.has(s) ? -1 : 1, u = i && c ? -1 : 1, f = Me(t, e);
                    let {
                        mainAxis: d,
                        crossAxis: p,
                        alignmentAxis: m
                    } = "number" == typeof f ? {
                        mainAxis: f,
                        crossAxis: 0,
                        alignmentAxis: null
                    } : {
                        mainAxis: f.mainAxis || 0,
                        crossAxis: f.crossAxis || 0,
                        alignmentAxis: f.alignmentAxis
                    };
                    return a && "number" == typeof m && (p = "end" === a ? -1 * m : m), c ? {
                        x: p * u,
                        y: d * l
                    } : {
                        x: d * l,
                        y: p * u
                    }
                }(t, e);
                return s === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                    x: o + c.x,
                    y: i + c.y,
                    data: { ...c,
                        placement: s
                    }
                }
            }
        }
    },
    Yt = function(e) {
        return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: e => {
                            let {
                                x: t,
                                y: n
                            } = e;
                            return {
                                x: t,
                                y: n
                            }
                        }
                    },
                    ...c
                } = Me(e, t), l = {
                    x: n,
                    y: r
                }, u = await Je(t, c), f = He(_e(o)), d = Fe(f);
                let p = l[d],
                    m = l[f];
                if (i) {
                    const e = "y" === d ? "bottom" : "right";
                    p = je(p + u["y" === d ? "top" : "left"], p, p - u[e])
                }
                if (s) {
                    const e = "y" === f ? "bottom" : "right";
                    m = je(m + u["y" === f ? "top" : "left"], m, m - u[e])
                }
                const h = a.fn({ ...t,
                    [d]: p,
                    [f]: m
                });
                return { ...h,
                    data: {
                        x: h.x - n,
                        y: h.y - r,
                        enabled: {
                            [d]: i,
                            [f]: s
                        }
                    }
                }
            }
        }
    },
    qt = function(e) {
        return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: a,
                    platform: c,
                    elements: l
                } = t, {
                    mainAxis: u = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: d,
                    fallbackStrategy: p = "bestFit",
                    fallbackAxisSideDirection: m = "none",
                    flipAlignment: h = !0,
                    ...y
                } = Me(e, t);
                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                const g = _e(o),
                    w = He(a),
                    v = _e(a) === a,
                    x = await (null == c.isRTL ? void 0 : c.isRTL(l.floating)),
                    b = d || (v || !h ? [Ye(a)] : function(e) {
                        const t = Ye(e);
                        return [Be(e), t, Be(t)]
                    }(a)),
                    E = "none" !== m;
                !d && E && b.push(...Xe(a, h, m, x));
                const T = [a, ...b],
                    R = await Je(t, y),
                    C = [];
                let P = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                if (u && C.push(R[g]), f) {
                    const e = function(e, t, n) {
                        void 0 === n && (n = !1);
                        const r = ke(e),
                            o = $e(e),
                            i = Ie(o);
                        let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                        return t.reference[i] > t.floating[i] && (s = Ye(s)), [s, Ye(s)]
                    }(o, s, x);
                    C.push(R[e[0]], R[e[1]])
                }
                if (P = [...P, {
                        placement: o,
                        overflows: C
                    }], !C.every(e => e <= 0)) {
                    var S, D;
                    const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                        t = T[e];
                    if (t) {
                        if (!("alignment" === f && w !== He(t)) || P.every(e => He(e.placement) !== w || e.overflows[0] > 0)) return {
                            data: {
                                index: e,
                                overflows: P
                            },
                            reset: {
                                placement: t
                            }
                        }
                    }
                    let n = null == (D = P.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : D.placement;
                    if (!n) switch (p) {
                        case "bestFit":
                            {
                                var L;
                                const e = null == (L = P.filter(e => {
                                    if (E) {
                                        const t = He(e.placement);
                                        return t === w || "y" === t
                                    }
                                    return !0
                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : L[0];e && (n = e);
                                break
                            }
                        case "initialPlacement":
                            n = a
                    }
                    if (o !== n) return {
                        reset: {
                            placement: n
                        }
                    }
                }
                return {}
            }
        }
    },
    Zt = function(e) {
        return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: a
                } = t, {
                    apply: c = () => {},
                    ...l
                } = Me(e, t), u = await Je(t, l), f = _e(o), d = ke(o), p = "y" === He(o), {
                    width: m,
                    height: h
                } = i.floating;
                let y, g;
                "top" === f || "bottom" === f ? (y = f, g = d === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = f, y = "end" === d ? "top" : "bottom");
                const w = h - u.top - u.bottom,
                    v = m - u.left - u.right,
                    x = Pe(h - u[y], w),
                    b = Pe(m - u[g], v),
                    E = !t.middlewareData.shift;
                let T = x,
                    R = b;
                if (null != (n = t.middlewareData.shift) && n.enabled.x && (R = v), null != (r = t.middlewareData.shift) && r.enabled.y && (T = w), E && !d) {
                    const e = Se(u.left, 0),
                        t = Se(u.right, 0),
                        n = Se(u.top, 0),
                        r = Se(u.bottom, 0);
                    p ? R = m - 2 * (0 !== e || 0 !== t ? e + t : Se(u.left, u.right)) : T = h - 2 * (0 !== n || 0 !== r ? n + r : Se(u.top, u.bottom))
                }
                await c({ ...t,
                    availableWidth: R,
                    availableHeight: T
                });
                const C = await s.getDimensions(a.floating);
                return m !== C.width || h !== C.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    },
    Gt = function(e) {
        return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: r = "referenceHidden",
                    ...o
                } = Me(e, t);
                switch (r) {
                    case "referenceHidden":
                        {
                            const e = Qe(await Je(t, { ...o,
                                elementContext: "reference"
                            }), n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: e,
                                    referenceHidden: et(e)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const e = Qe(await Je(t, { ...o,
                                altBoundary: !0
                            }), n.floating);
                            return {
                                data: {
                                    escapedOffsets: e,
                                    escaped: et(e)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Jt = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: a,
                middlewareData: c
            } = t, {
                element: l,
                padding: u = 0
            } = Me(e, t) || {};
            if (null == l) return {};
            const f = qe(u),
                d = {
                    x: n,
                    y: r
                },
                p = $e(o),
                m = Ie(p),
                h = await s.getDimensions(l),
                y = "y" === p,
                g = y ? "top" : "left",
                w = y ? "bottom" : "right",
                v = y ? "clientHeight" : "clientWidth",
                x = i.reference[m] + i.reference[p] - d[p] - i.floating[m],
                b = d[p] - i.reference[p],
                E = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(l));
            let T = E ? E[v] : 0;
            T && await (null == s.isElement ? void 0 : s.isElement(E)) || (T = a.floating[v] || i.floating[m]);
            const R = x / 2 - b / 2,
                C = T / 2 - h[m] / 2 - 1,
                P = Pe(f[g], C),
                S = Pe(f[w], C),
                D = P,
                L = T - h[m] - S,
                A = T / 2 - h[m] / 2 + R,
                O = je(D, A, L),
                N = !c.arrow && null != ke(o) && A !== O && i.reference[m] / 2 - (A < D ? P : S) - h[m] / 2 < 0,
                j = N ? A < D ? A - D : A - L : 0;
            return {
                [p]: d[p] + j,
                data: {
                    [p]: O,
                    centerOffset: A - O - j,
                    ...N && {
                        alignmentOffset: j
                    }
                },
                reset: N
            }
        }
    }),
    Qt = function(e) {
        return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: a = 0,
                    mainAxis: c = !0,
                    crossAxis: l = !0
                } = Me(e, t), u = {
                    x: n,
                    y: r
                }, f = He(o), d = Fe(f);
                let p = u[d],
                    m = u[f];
                const h = Me(a, t),
                    y = "number" == typeof h ? {
                        mainAxis: h,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...h
                    };
                if (c) {
                    const e = "y" === d ? "height" : "width",
                        t = i.reference[d] - i.floating[e] + y.mainAxis,
                        n = i.reference[d] + i.reference[e] - y.mainAxis;
                    p < t ? p = t : p > n && (p = n)
                }
                if (l) {
                    var g, w;
                    const e = "y" === d ? "width" : "height",
                        t = tt.has(_e(o)),
                        n = i.reference[f] - i.floating[e] + (t && (null == (g = s.offset) ? void 0 : g[f]) || 0) + (t ? 0 : y.crossAxis),
                        r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (w = s.offset) ? void 0 : w[f]) || 0) - (t ? y.crossAxis : 0);
                    m < n ? m = n : m > r && (m = r)
                }
                return {
                    [d]: p,
                    [f]: m
                }
            }
        }
    },
    en = (e, t, n) => {
        const r = new Map,
            o = {
                platform: zt,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return (async (e, t, n) => {
            const {
                placement: r = "bottom",
                strategy: o = "absolute",
                middleware: i = [],
                platform: s
            } = n, a = i.filter(Boolean), c = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let l = await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }),
                {
                    x: u,
                    y: f
                } = Ge(l, r, c),
                d = r,
                p = {},
                m = 0;
            for (let h = 0; h < a.length; h++) {
                const {
                    name: n,
                    fn: i
                } = a[h], {
                    x: y,
                    y: g,
                    data: w,
                    reset: v
                } = await i({
                    x: u,
                    y: f,
                    initialPlacement: r,
                    placement: d,
                    strategy: o,
                    middlewareData: p,
                    rects: l,
                    platform: s,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                u = null != y ? y : u, f = null != g ? g : f, p = { ...p,
                    [n]: { ...p[n],
                        ...w
                    }
                }, v && m <= 50 && (m++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (l = !0 === v.rects ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }) : v.rects), ({
                    x: u,
                    y: f
                } = Ge(l, d, c))), h = -1)
            }
            return {
                x: u,
                y: f,
                placement: d,
                strategy: o,
                middlewareData: p
            }
        })(e, t, { ...o,
            platform: i
        })
    };
var tn = "undefined" != typeof document ? e.useLayoutEffect : function() {};

function nn(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
                if (!nn(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; 0 !== r--;) {
            const n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !nn(e[n], t[n])) return !1
        }
        return !0
    }
    return e != e && t != t
}

function rn(e) {
    if ("undefined" == typeof window) return 1;
    return (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function on(e, t) {
    const n = rn(e);
    return Math.round(t * n) / n
}

function sn(t) {
    const n = e.useRef(t);
    return tn(() => {
        n.current = t
    }), n
}
const an = e => ({
        name: "arrow",
        options: e,
        fn(t) {
            const {
                element: n,
                padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? Jt({
                element: n.current,
                padding: r
            }).fn(t) : {} : n ? Jt({
                element: n,
                padding: r
            }).fn(t) : {};
            var o
        }
    }),
    cn = (e, t) => ({ ...Yt(e),
        options: [e, t]
    }),
    ln = (e, t) => ({ ...Qt(e),
        options: [e, t]
    }),
    un = (e, t) => ({ ...qt(e),
        options: [e, t]
    }),
    fn = (e, t) => ({ ...Zt(e),
        options: [e, t]
    }),
    dn = (e, t) => ({ ...Gt(e),
        options: [e, t]
    }),
    pn = (e, t) => ({ ...an(e),
        options: [e, t]
    });
var mn = e.forwardRef((e, n) => {
    const {
        children: r,
        width: o = 10,
        height: i = 5,
        ...s
    } = e;
    return t.jsx(y.svg, { ...s,
        ref: n,
        width: o,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? r : t.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
});
mn.displayName = "Arrow";
var hn = mn;
var yn = "Popper",
    [gn, wn] = u(yn),
    [vn, xn] = gn(yn),
    bn = "PopperAnchor",
    En = e.forwardRef((n, r) => {
        const {
            __scopePopper: o,
            virtualRef: i,
            ...s
        } = n, a = xn(bn, o), c = e.useRef(null), u = l(r, c), f = e.useRef(null);
        return e.useEffect(() => {
            const e = f.current;
            f.current = i ? .current || c.current, e !== f.current && a.onAnchorChange(f.current)
        }), i ? null : t.jsx(y.div, { ...s,
            ref: u
        })
    });
En.displayName = bn;
var Tn = "PopperContent",
    [Rn, Cn] = gn(Tn),
    Pn = e.forwardRef((n, o) => {
        const {
            __scopePopper: i,
            side: s = "bottom",
            sideOffset: a = 0,
            align: c = "center",
            alignOffset: u = 0,
            arrowPadding: f = 0,
            avoidCollisions: d = !0,
            collisionBoundary: p = [],
            collisionPadding: m = 0,
            sticky: h = "partial",
            hideWhenDetached: g = !1,
            updatePositionStrategy: v = "optimized",
            onPlaced: x,
            ...b
        } = n, E = xn(Tn, i), [T, R] = e.useState(null), C = l(o, e => R(e)), [P, S] = e.useState(null), D = function(t) {
            const [n, r] = e.useState(void 0);
            return A(() => {
                if (t) {
                    r({
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    });
                    const e = new ResizeObserver(e => {
                        if (!Array.isArray(e)) return;
                        if (!e.length) return;
                        const n = e[0];
                        let o, i;
                        if ("borderBoxSize" in n) {
                            const e = n.borderBoxSize,
                                t = Array.isArray(e) ? e[0] : e;
                            o = t.inlineSize, i = t.blockSize
                        } else o = t.offsetWidth, i = t.offsetHeight;
                        r({
                            width: o,
                            height: i
                        })
                    });
                    return e.observe(t, {
                        box: "border-box"
                    }), () => e.unobserve(t)
                }
                r(void 0)
            }, [t]), n
        }(P), L = D ? .width ? ? 0, O = D ? .height ? ? 0, N = s + ("center" !== c ? "-" + c : ""), j = "number" == typeof m ? m : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...m
        }, M = Array.isArray(p) ? p : [p], _ = M.length > 0, k = {
            padding: j,
            boundary: M.filter(An),
            altBoundary: _
        }, {
            refs: F,
            floatingStyles: I,
            placement: W,
            isPositioned: H,
            middlewareData: $
        } = function(t) {
            void 0 === t && (t = {});
            const {
                placement: n = "bottom",
                strategy: o = "absolute",
                middleware: i = [],
                platform: s,
                elements: {
                    reference: a,
                    floating: c
                } = {},
                transform: l = !0,
                whileElementsMounted: u,
                open: f
            } = t, [d, p] = e.useState({
                x: 0,
                y: 0,
                strategy: o,
                placement: n,
                middlewareData: {},
                isPositioned: !1
            }), [m, h] = e.useState(i);
            nn(m, i) || h(i);
            const [y, g] = e.useState(null), [w, v] = e.useState(null), x = e.useCallback(e => {
                e !== R.current && (R.current = e, g(e))
            }, []), b = e.useCallback(e => {
                e !== C.current && (C.current = e, v(e))
            }, []), E = a || y, T = c || w, R = e.useRef(null), C = e.useRef(null), P = e.useRef(d), S = null != u, D = sn(u), L = sn(s), A = sn(f), O = e.useCallback(() => {
                if (!R.current || !C.current) return;
                const e = {
                    placement: n,
                    strategy: o,
                    middleware: m
                };
                L.current && (e.platform = L.current), en(R.current, C.current, e).then(e => {
                    const t = { ...e,
                        isPositioned: !1 !== A.current
                    };
                    N.current && !nn(P.current, t) && (P.current = t, r.flushSync(() => {
                        p(t)
                    }))
                })
            }, [m, n, o, L, A]);
            tn(() => {
                !1 === f && P.current.isPositioned && (P.current.isPositioned = !1, p(e => ({ ...e,
                    isPositioned: !1
                })))
            }, [f]);
            const N = e.useRef(!1);
            tn(() => (N.current = !0, () => {
                N.current = !1
            }), []), tn(() => {
                if (E && (R.current = E), T && (C.current = T), E && T) {
                    if (D.current) return D.current(E, T, O);
                    O()
                }
            }, [E, T, O, D, S]);
            const j = e.useMemo(() => ({
                    reference: R,
                    floating: C,
                    setReference: x,
                    setFloating: b
                }), [x, b]),
                M = e.useMemo(() => ({
                    reference: E,
                    floating: T
                }), [E, T]),
                _ = e.useMemo(() => {
                    const e = {
                        position: o,
                        left: 0,
                        top: 0
                    };
                    if (!M.floating) return e;
                    const t = on(M.floating, d.x),
                        n = on(M.floating, d.y);
                    return l ? { ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...rn(M.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: o,
                        left: t,
                        top: n
                    }
                }, [o, l, M.floating, d.x, d.y]);
            return e.useMemo(() => ({ ...d,
                update: O,
                refs: j,
                elements: M,
                floatingStyles: _
            }), [d, O, j, M, _])
        }({
            strategy: "fixed",
            placement: N,
            whileElementsMounted: (...e) => Ut(...e, {
                animationFrame: "always" === v
            }),
            elements: {
                reference: E.anchor
            },
            middleware: [(B = {
                mainAxis: a + O,
                alignmentAxis: u
            }, { ...Xt(B),
                options: [B, V]
            }), d && cn({
                mainAxis: !0,
                crossAxis: !1,
                limiter: "partial" === h ? ln() : void 0,
                ...k
            }), d && un({ ...k
            }), fn({ ...k,
                apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r
                }) => {
                    const {
                        width: o,
                        height: i
                    } = t.reference, s = e.floating.style;
                    s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${r}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
                }
            }), P && pn({
                element: P,
                padding: f
            }), On({
                arrowWidth: L,
                arrowHeight: O
            }), g && dn({
                strategy: "referenceHidden",
                ...k
            })]
        });
        var B, V;
        const [z, K] = Nn(W), U = w(x);
        A(() => {
            H && U ? .()
        }, [H, U]);
        const X = $.arrow ? .x,
            Y = $.arrow ? .y,
            q = 0 !== $.arrow ? .centerOffset,
            [Z, G] = e.useState();
        return A(() => {
            T && G(window.getComputedStyle(T).zIndex)
        }, [T]), t.jsx("div", {
            ref: F.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...I,
                transform: H ? I.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Z,
                "--radix-popper-transform-origin": [$.transformOrigin ? .x, $.transformOrigin ? .y].join(" "),
                ...$.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: n.dir,
            children: t.jsx(Rn, {
                scope: i,
                placedSide: z,
                onArrowChange: S,
                arrowX: X,
                arrowY: Y,
                shouldHideArrow: q,
                children: t.jsx(y.div, {
                    "data-side": z,
                    "data-align": K,
                    ...b,
                    ref: C,
                    style: { ...b.style,
                        animation: H ? void 0 : "none"
                    }
                })
            })
        })
    });
Pn.displayName = Tn;
var Sn = "PopperArrow",
    Dn = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Ln = e.forwardRef(function(e, n) {
        const {
            __scopePopper: r,
            ...o
        } = e, i = Cn(Sn, r), s = Dn[i.placedSide];
        return t.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: t.jsx(hn, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });

function An(e) {
    return null !== e
}
Ln.displayName = Sn;
var On = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, i = 0 !== o.arrow ? .centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [c, l] = Nn(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[l], f = (o.arrow ? .x ? ? 0) + s / 2, d = (o.arrow ? .y ? ? 0) + a / 2;
        let p = "",
            m = "";
        return "bottom" === c ? (p = i ? u : `${f}px`, m = -a + "px") : "top" === c ? (p = i ? u : `${f}px`, m = `${r.floating.height+a}px`) : "right" === c ? (p = -a + "px", m = i ? u : `${d}px`) : "left" === c && (p = `${r.floating.width+a}px`, m = i ? u : `${d}px`), {
            data: {
                x: p,
                y: m
            }
        }
    }
});

function Nn(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var jn = En,
    Mn = Pn,
    _n = Ln,
    [kn, Fn] = u("Tooltip", [wn]),
    In = wn(),
    Wn = "TooltipProvider",
    Hn = 700,
    $n = "tooltip.open",
    [Bn, Vn] = kn(Wn),
    zn = n => {
        const {
            __scopeTooltip: r,
            delayDuration: o = Hn,
            skipDelayDuration: i = 300,
            disableHoverableContent: s = !1,
            children: a
        } = n, c = e.useRef(!0), l = e.useRef(!1), u = e.useRef(0);
        return e.useEffect(() => {
            const e = u.current;
            return () => window.clearTimeout(e)
        }, []), t.jsx(Bn, {
            scope: r,
            isOpenDelayedRef: c,
            delayDuration: o,
            onOpen: e.useCallback(() => {
                window.clearTimeout(u.current), c.current = !1
            }, []),
            onClose: e.useCallback(() => {
                window.clearTimeout(u.current), u.current = window.setTimeout(() => c.current = !0, i)
            }, [i]),
            isPointerInTransitRef: l,
            onPointerInTransitChange: e.useCallback(e => {
                l.current = e
            }, []),
            disableHoverableContent: s,
            children: a
        })
    };
zn.displayName = Wn;
var Kn = "Tooltip",
    [Un, Xn] = kn(Kn),
    Yn = "TooltipTrigger";
e.forwardRef((n, r) => {
    const {
        __scopeTooltip: o,
        ...i
    } = n, a = Xn(Yn, o), c = Vn(Yn, o), u = In(o), f = l(r, e.useRef(null), a.onTriggerChange), d = e.useRef(!1), p = e.useRef(!1), m = e.useCallback(() => d.current = !1, []);
    return e.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), t.jsx(jn, {
        asChild: !0,
        ...u,
        children: t.jsx(y.button, {
            "aria-describedby": a.open ? a.contentId : void 0,
            "data-state": a.stateAttribute,
            ...i,
            ref: f,
            onPointerMove: s(n.onPointerMove, e => {
                "touch" !== e.pointerType && (p.current || c.isPointerInTransitRef.current || (a.onTriggerEnter(), p.current = !0))
            }),
            onPointerLeave: s(n.onPointerLeave, () => {
                a.onTriggerLeave(), p.current = !1
            }),
            onPointerDown: s(n.onPointerDown, () => {
                a.open && a.onClose(), d.current = !0, document.addEventListener("pointerup", m, {
                    once: !0
                })
            }),
            onFocus: s(n.onFocus, () => {
                d.current || a.onOpen()
            }),
            onBlur: s(n.onBlur, a.onClose),
            onClick: s(n.onClick, a.onClose)
        })
    })
}).displayName = Yn;
var [qn, Zn] = kn("TooltipPortal", {
    forceMount: void 0
}), Gn = "TooltipContent", Jn = e.forwardRef((e, n) => {
    const r = Zn(Gn, e.__scopeTooltip),
        {
            forceMount: o = r.forceMount,
            side: i = "top",
            ...s
        } = e,
        a = Xn(Gn, e.__scopeTooltip);
    return t.jsx(N, {
        present: o || a.open,
        children: a.disableHoverableContent ? t.jsx(rr, {
            side: i,
            ...s,
            ref: n
        }) : t.jsx(Qn, {
            side: i,
            ...s,
            ref: n
        })
    })
}), Qn = e.forwardRef((n, r) => {
    const o = Xn(Gn, n.__scopeTooltip),
        i = Vn(Gn, n.__scopeTooltip),
        s = e.useRef(null),
        a = l(r, s),
        [c, u] = e.useState(null),
        {
            trigger: f,
            onClose: d
        } = o,
        p = s.current,
        {
            onPointerInTransitChange: m
        } = i,
        h = e.useCallback(() => {
            u(null), m(!1)
        }, [m]),
        y = e.useCallback((e, t) => {
            const n = e.currentTarget,
                r = {
                    x: e.clientX,
                    y: e.clientY
                },
                o = function(e, t, n = 5) {
                    const r = [];
                    switch (t) {
                        case "top":
                            r.push({
                                x: e.x - n,
                                y: e.y + n
                            }, {
                                x: e.x + n,
                                y: e.y + n
                            });
                            break;
                        case "bottom":
                            r.push({
                                x: e.x - n,
                                y: e.y - n
                            }, {
                                x: e.x + n,
                                y: e.y - n
                            });
                            break;
                        case "left":
                            r.push({
                                x: e.x + n,
                                y: e.y - n
                            }, {
                                x: e.x + n,
                                y: e.y + n
                            });
                            break;
                        case "right":
                            r.push({
                                x: e.x - n,
                                y: e.y - n
                            }, {
                                x: e.x - n,
                                y: e.y + n
                            })
                    }
                    return r
                }(r, function(e, t) {
                    const n = Math.abs(t.top - e.y),
                        r = Math.abs(t.bottom - e.y),
                        o = Math.abs(t.right - e.x),
                        i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                        case i:
                            return "left";
                        case o:
                            return "right";
                        case n:
                            return "top";
                        case r:
                            return "bottom";
                        default:
                            throw new Error("unreachable")
                    }
                }(r, n.getBoundingClientRect())),
                i = function(e) {
                    const t = e.slice();
                    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                        function(e) {
                            if (e.length <= 1) return e.slice();
                            const t = [];
                            for (let r = 0; r < e.length; r++) {
                                const n = e[r];
                                for (; t.length >= 2;) {
                                    const e = t[t.length - 1],
                                        r = t[t.length - 2];
                                    if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                                    t.pop()
                                }
                                t.push(n)
                            }
                            t.pop();
                            const n = [];
                            for (let r = e.length - 1; r >= 0; r--) {
                                const t = e[r];
                                for (; n.length >= 2;) {
                                    const e = n[n.length - 1],
                                        r = n[n.length - 2];
                                    if (!((e.x - r.x) * (t.y - r.y) >= (e.y - r.y) * (t.x - r.x))) break;
                                    n.pop()
                                }
                                n.push(t)
                            }
                            return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                        }(t)
                }([...o, ... function(e) {
                    const {
                        top: t,
                        right: n,
                        bottom: r,
                        left: o
                    } = e;
                    return [{
                        x: o,
                        y: t
                    }, {
                        x: n,
                        y: t
                    }, {
                        x: n,
                        y: r
                    }, {
                        x: o,
                        y: r
                    }]
                }(t.getBoundingClientRect())]);
            u(i), m(!0)
        }, [m]);
    return e.useEffect(() => () => h(), [h]), e.useEffect(() => {
        if (f && p) {
            const e = e => y(e, p),
                t = e => y(e, f);
            return f.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
                f.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
            }
        }
    }, [f, p, y, h]), e.useEffect(() => {
        if (c) {
            const e = e => {
                const t = e.target,
                    n = {
                        x: e.clientX,
                        y: e.clientY
                    },
                    r = f ? .contains(t) || p ? .contains(t),
                    o = ! function(e, t) {
                        const {
                            x: n,
                            y: r
                        } = e;
                        let o = !1;
                        for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
                            const e = t[i],
                                a = t[s],
                                c = e.x,
                                l = e.y,
                                u = a.x,
                                f = a.y;
                            l > r != f > r && n < (u - c) * (r - l) / (f - l) + c && (o = !o)
                        }
                        return o
                    }(n, c);
                r ? h() : o && (h(), d())
            };
            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
        }
    }, [f, p, c, d, h]), t.jsx(rr, { ...n,
        ref: a
    })
}), [er, tr] = kn(Kn, {
    isInside: !1
}), nr = function(e) {
    const n = ({
        children: e
    }) => t.jsx(t.Fragment, {
        children: e
    });
    return n.displayName = `${e}.Slottable`, n.__radixId = m, n
}("TooltipContent"), rr = e.forwardRef((n, r) => {
    const {
        __scopeTooltip: o,
        children: i,
        "aria-label": s,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        ...l
    } = n, u = Xn(Gn, o), f = In(o), {
        onClose: d
    } = u;
    return e.useEffect(() => (document.addEventListener($n, d), () => document.removeEventListener($n, d)), [d]), e.useEffect(() => {
        if (u.trigger) {
            const e = e => {
                const t = e.target;
                t ? .contains(u.trigger) && d()
            };
            return window.addEventListener("scroll", e, {
                capture: !0
            }), () => window.removeEventListener("scroll", e, {
                capture: !0
            })
        }
    }, [u.trigger, d]), t.jsx(R, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        onFocusOutside: e => e.preventDefault(),
        onDismiss: d,
        children: t.jsxs(Mn, {
            "data-state": u.stateAttribute,
            ...f,
            ...l,
            ref: r,
            style: { ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [t.jsx(nr, {
                children: i
            }), t.jsx(er, {
                scope: o,
                isInside: !0,
                children: t.jsx(I, {
                    id: u.contentId,
                    role: "tooltip",
                    children: s || i
                })
            })]
        })
    })
});
Jn.displayName = Gn;
var or = "TooltipArrow";
e.forwardRef((e, n) => {
    const {
        __scopeTooltip: r,
        ...o
    } = e, i = In(r);
    return tr(or, r).isInside ? null : t.jsx(_n, { ...i,
        ...o,
        ref: n
    })
}).displayName = or;
var ir = zn,
    sr = Jn;
export {
    Te as A, Re as C, Ee as D, we as P, xe as R, be as T, ve as V, sr as a, ir as b
};