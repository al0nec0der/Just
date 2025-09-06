import {
    _ as t,
    a as e
} from "./Dzd9VM057lnHWOrh.js";
import {
    v as n,
    o as i
} from "./D-s6PRqiKBLBeb70.js";
var r = function() {
        function t() {
            this.listeners = []
        }
        var e = t.prototype;
        return e.subscribe = function(t) {
            var e = this,
                n = t || function() {};
            return this.listeners.push(n), this.onSubscribe(),
                function() {
                    e.listeners = e.listeners.filter(function(t) {
                        return t !== n
                    }), e.onUnsubscribe()
                }
        }, e.hasListeners = function() {
            return this.listeners.length > 0
        }, e.onSubscribe = function() {}, e.onUnsubscribe = function() {}, t
    }(),
    s = "undefined" == typeof window;

function o() {}

function u(t) {
    return "number" == typeof t && t >= 0 && t !== 1 / 0
}

function a(t) {
    return Array.isArray(t) ? t : [t]
}

function c(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}

function l(e, n, i) {
    return C(e) ? "function" == typeof n ? t({}, i, {
        queryKey: e,
        queryFn: n
    }) : t({}, n, {
        queryKey: e
    }) : e
}

function h(e, n, i) {
    return C(e) ? [t({}, n, {
        queryKey: e
    }), i] : [e || {}, n]
}

function f(t, e) {
    var n = t.active,
        i = t.exact,
        r = t.fetching,
        s = t.inactive,
        o = t.predicate,
        u = t.queryKey,
        a = t.stale;
    if (C(u))
        if (i) {
            if (e.queryHash !== v(u, e.options)) return !1
        } else if (!y(e.queryKey, u)) return !1;
    var c = function(t, e) {
        return !0 === t && !0 === e || null == t && null == e ? "all" : !1 === t && !1 === e ? "none" : (null != t ? t : !e) ? "active" : "inactive"
    }(n, s);
    if ("none" === c) return !1;
    if ("all" !== c) {
        var l = e.isActive();
        if ("active" === c && !l) return !1;
        if ("inactive" === c && l) return !1
    }
    return ("boolean" != typeof a || e.isStale() === a) && (("boolean" != typeof r || e.isFetching() === r) && !(o && !o(e)))
}

function d(t, e) {
    var n = t.exact,
        i = t.fetching,
        r = t.predicate,
        s = t.mutationKey;
    if (C(s)) {
        if (!e.options.mutationKey) return !1;
        if (n) {
            if (p(e.options.mutationKey) !== p(s)) return !1
        } else if (!y(e.options.mutationKey, s)) return !1
    }
    return ("boolean" != typeof i || "loading" === e.state.status === i) && !(r && !r(e))
}

function v(t, e) {
    return ((null == e ? void 0 : e.queryKeyHashFn) || p)(t)
}

function p(t) {
    var e, n = a(t);
    return e = n, JSON.stringify(e, function(t, e) {
        return g(e) ? Object.keys(e).sort().reduce(function(t, n) {
            return t[n] = e[n], t
        }, {}) : e
    })
}

function y(t, e) {
    return m(a(t), a(e))
}

function m(t, e) {
    return t === e || typeof t == typeof e && (!(!t || !e || "object" != typeof t || "object" != typeof e) && !Object.keys(e).some(function(n) {
        return !m(t[n], e[n])
    }))
}

function b(t, e) {
    if (t === e) return t;
    var n = Array.isArray(t) && Array.isArray(e);
    if (n || g(t) && g(e)) {
        for (var i = n ? t.length : Object.keys(t).length, r = n ? e : Object.keys(e), s = r.length, o = n ? [] : {}, u = 0, a = 0; a < s; a++) {
            var c = n ? a : r[a];
            o[c] = b(t[c], e[c]), o[c] === t[c] && u++
        }
        return i === s && u === i ? t : o
    }
    return e
}

function g(t) {
    if (!O(t)) return !1;
    var e = t.constructor;
    if (void 0 === e) return !0;
    var n = e.prototype;
    return !!O(n) && !!n.hasOwnProperty("isPrototypeOf")
}

function O(t) {
    return "[object Object]" === Object.prototype.toString.call(t)
}

function C(t) {
    return "string" == typeof t || Array.isArray(t)
}

function P(t) {
    Promise.resolve().then(t).catch(function(t) {
        return setTimeout(function() {
            throw t
        })
    })
}

function R() {
    if ("function" == typeof AbortController) return new AbortController
}
var q = new(function(t) {
        function n() {
            var e;
            return (e = t.call(this) || this).setup = function(t) {
                var e;
                if (!s && (null == (e = window) ? void 0 : e.addEventListener)) {
                    var n = function() {
                        return t()
                    };
                    return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1),
                        function() {
                            window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n)
                        }
                }
            }, e
        }
        e(n, t);
        var i = n.prototype;
        return i.onSubscribe = function() {
            this.cleanup || this.setEventListener(this.setup)
        }, i.onUnsubscribe = function() {
            var t;
            this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
        }, i.setEventListener = function(t) {
            var e, n = this;
            this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(function(t) {
                "boolean" == typeof t ? n.setFocused(t) : n.onFocus()
            })
        }, i.setFocused = function(t) {
            this.focused = t, t && this.onFocus()
        }, i.onFocus = function() {
            this.listeners.forEach(function(t) {
                t()
            })
        }, i.isFocused = function() {
            return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
        }, n
    }(r)),
    F = new(function(t) {
        function n() {
            var e;
            return (e = t.call(this) || this).setup = function(t) {
                var e;
                if (!s && (null == (e = window) ? void 0 : e.addEventListener)) {
                    var n = function() {
                        return t()
                    };
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", n, !1),
                        function() {
                            window.removeEventListener("online", n), window.removeEventListener("offline", n)
                        }
                }
            }, e
        }
        e(n, t);
        var i = n.prototype;
        return i.onSubscribe = function() {
            this.cleanup || this.setEventListener(this.setup)
        }, i.onUnsubscribe = function() {
            var t;
            this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
        }, i.setEventListener = function(t) {
            var e, n = this;
            this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(function(t) {
                "boolean" == typeof t ? n.setOnline(t) : n.onOnline()
            })
        }, i.setOnline = function(t) {
            this.online = t, t && this.onOnline()
        }, i.onOnline = function() {
            this.listeners.forEach(function(t) {
                t()
            })
        }, i.isOnline = function() {
            return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
        }, n
    }(r));

function S(t) {
    return Math.min(1e3 * Math.pow(2, t), 3e4)
}

function w(t) {
    return "function" == typeof(null == t ? void 0 : t.cancel)
}
var E = function(t) {
    this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
};

function Q(t) {
    return t instanceof E
}
var A = function(t) {
        var e, n, i, r, s = this,
            o = !1;
        this.abort = t.abort, this.cancel = function(t) {
            return null == e ? void 0 : e(t)
        }, this.cancelRetry = function() {
            o = !0
        }, this.continueRetry = function() {
            o = !1
        }, this.continue = function() {
            return null == n ? void 0 : n()
        }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise(function(t, e) {
            i = t, r = e
        });
        var u = function(e) {
                s.isResolved || (s.isResolved = !0, null == t.onSuccess || t.onSuccess(e), null == n || n(), i(e))
            },
            a = function(e) {
                s.isResolved || (s.isResolved = !0, null == t.onError || t.onError(e), null == n || n(), r(e))
            };
        ! function i() {
            if (!s.isResolved) {
                var r;
                try {
                    r = t.fn()
                } catch (c) {
                    r = Promise.reject(c)
                }
                e = function(t) {
                    if (!s.isResolved && (a(new E(t)), null == s.abort || s.abort(), w(r))) try {
                        r.cancel()
                    } catch (e) {}
                }, s.isTransportCancelable = w(r), Promise.resolve(r).then(u).catch(function(e) {
                    var r, u;
                    if (!s.isResolved) {
                        var c, l = null != (r = t.retry) ? r : 3,
                            h = null != (u = t.retryDelay) ? u : S,
                            f = "function" == typeof h ? h(s.failureCount, e) : h,
                            d = !0 === l || "number" == typeof l && s.failureCount < l || "function" == typeof l && l(s.failureCount, e);
                        if (!o && d) s.failureCount++, null == t.onFail || t.onFail(s.failureCount, e), (c = f, new Promise(function(t) {
                            setTimeout(t, c)
                        })).then(function() {
                            if (!q.isFocused() || !F.isOnline()) return new Promise(function(e) {
                                n = e, s.isPaused = !0, null == t.onPause || t.onPause()
                            }).then(function() {
                                n = void 0, s.isPaused = !1, null == t.onContinue || t.onContinue()
                            })
                        }).then(function() {
                            o ? a(e) : i()
                        });
                        else a(e)
                    }
                })
            }
        }()
    },
    x = new(function() {
        function t() {
            this.queue = [], this.transactions = 0, this.notifyFn = function(t) {
                t()
            }, this.batchNotifyFn = function(t) {
                t()
            }
        }
        var e = t.prototype;
        return e.batch = function(t) {
            var e;
            this.transactions++;
            try {
                e = t()
            } finally {
                this.transactions--, this.transactions || this.flush()
            }
            return e
        }, e.schedule = function(t) {
            var e = this;
            this.transactions ? this.queue.push(t) : P(function() {
                e.notifyFn(t)
            })
        }, e.batchCalls = function(t) {
            var e = this;
            return function() {
                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                e.schedule(function() {
                    t.apply(void 0, i)
                })
            }
        }, e.flush = function() {
            var t = this,
                e = this.queue;
            this.queue = [], e.length && P(function() {
                t.batchNotifyFn(function() {
                    e.forEach(function(e) {
                        t.notifyFn(e)
                    })
                })
            })
        }, e.setNotifyFunction = function(t) {
            this.notifyFn = t
        }, e.setBatchNotifyFunction = function(t) {
            this.batchNotifyFn = t
        }, t
    }()),
    D = console;

function M() {
    return D
}
var T = function() {
        function e(t) {
            this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = t.meta, this.scheduleGc()
        }
        var n = e.prototype;
        return n.setOptions = function(e) {
            var n;
            this.options = t({}, this.defaultOptions, e), this.meta = null == e ? void 0 : e.meta, this.cacheTime = Math.max(this.cacheTime || 0, null != (n = this.options.cacheTime) ? n : 3e5)
        }, n.setDefaultOptions = function(t) {
            this.defaultOptions = t
        }, n.scheduleGc = function() {
            var t = this;
            this.clearGcTimeout(), u(this.cacheTime) && (this.gcTimeout = setTimeout(function() {
                t.optionalRemove()
            }, this.cacheTime))
        }, n.clearGcTimeout = function() {
            this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
        }, n.optionalRemove = function() {
            this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this))
        }, n.setData = function(t, e) {
            var n, i, r = this.state.data,
                s = function(t, e) {
                    return "function" == typeof t ? t(e) : t
                }(t, r);
            return (null == (n = (i = this.options).isDataEqual) ? void 0 : n.call(i, r, s)) ? s = r : !1 !== this.options.structuralSharing && (s = b(r, s)), this.dispatch({
                data: s,
                type: "success",
                dataUpdatedAt: null == e ? void 0 : e.updatedAt
            }), s
        }, n.setState = function(t, e) {
            this.dispatch({
                type: "setState",
                state: t,
                setStateOptions: e
            })
        }, n.cancel = function(t) {
            var e, n = this.promise;
            return null == (e = this.retryer) || e.cancel(t), n ? n.then(o).catch(o) : Promise.resolve()
        }, n.destroy = function() {
            this.clearGcTimeout(), this.cancel({
                silent: !0
            })
        }, n.reset = function() {
            this.destroy(), this.setState(this.initialState)
        }, n.isActive = function() {
            return this.observers.some(function(t) {
                return !1 !== t.options.enabled
            })
        }, n.isFetching = function() {
            return this.state.isFetching
        }, n.isStale = function() {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(t) {
                return t.getCurrentResult().isStale
            })
        }, n.isStaleByTime = function(t) {
            return void 0 === t && (t = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !c(this.state.dataUpdatedAt, t)
        }, n.onFocus = function() {
            var t, e = this.observers.find(function(t) {
                return t.shouldFetchOnWindowFocus()
            });
            e && e.refetch(), null == (t = this.retryer) || t.continue()
        }, n.onOnline = function() {
            var t, e = this.observers.find(function(t) {
                return t.shouldFetchOnReconnect()
            });
            e && e.refetch(), null == (t = this.retryer) || t.continue()
        }, n.addObserver = function(t) {
            -1 === this.observers.indexOf(t) && (this.observers.push(t), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }, n.removeObserver = function(t) {
            -1 !== this.observers.indexOf(t) && (this.observers = this.observers.filter(function(e) {
                return e !== t
            }), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
                revert: !0
            }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }, n.getObserversCount = function() {
            return this.observers.length
        }, n.invalidate = function() {
            this.state.isInvalidated || this.dispatch({
                type: "invalidate"
            })
        }, n.fetch = function(t, e) {
            var n, i, r, s = this;
            if (this.state.isFetching)
                if (this.state.dataUpdatedAt && (null == e ? void 0 : e.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (this.promise) {
                var o;
                return null == (o = this.retryer) || o.continueRetry(), this.promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                var u = this.observers.find(function(t) {
                    return t.options.queryFn
                });
                u && this.setOptions(u.options)
            }
            var c = a(this.queryKey),
                l = R(),
                h = {
                    queryKey: c,
                    pageParam: void 0,
                    meta: this.meta
                };
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: function() {
                    if (l) return s.abortSignalConsumed = !0, l.signal
                }
            });
            var f, d, v = {
                fetchOptions: e,
                options: this.options,
                queryKey: c,
                state: this.state,
                fetchFn: function() {
                    return s.options.queryFn ? (s.abortSignalConsumed = !1, s.options.queryFn(h)) : Promise.reject("Missing queryFn")
                },
                meta: this.meta
            };
            (null == (n = this.options.behavior) ? void 0 : n.onFetch) && (null == (f = this.options.behavior) || f.onFetch(v));
            (this.revertState = this.state, this.state.isFetching && this.state.fetchMeta === (null == (i = v.fetchOptions) ? void 0 : i.meta)) || this.dispatch({
                type: "fetch",
                meta: null == (d = v.fetchOptions) ? void 0 : d.meta
            });
            return this.retryer = new A({
                fn: v.fetchFn,
                abort: null == l || null == (r = l.abort) ? void 0 : r.bind(l),
                onSuccess: function(t) {
                    s.setData(t), null == s.cache.config.onSuccess || s.cache.config.onSuccess(t, s), 0 === s.cacheTime && s.optionalRemove()
                },
                onError: function(t) {
                    Q(t) && t.silent || s.dispatch({
                        type: "error",
                        error: t
                    }), Q(t) || (null == s.cache.config.onError || s.cache.config.onError(t, s), M().error(t)), 0 === s.cacheTime && s.optionalRemove()
                },
                onFail: function() {
                    s.dispatch({
                        type: "failed"
                    })
                },
                onPause: function() {
                    s.dispatch({
                        type: "pause"
                    })
                },
                onContinue: function() {
                    s.dispatch({
                        type: "continue"
                    })
                },
                retry: v.options.retry,
                retryDelay: v.options.retryDelay
            }), this.promise = this.retryer.promise, this.promise
        }, n.dispatch = function(t) {
            var e = this;
            this.state = this.reducer(this.state, t), x.batch(function() {
                e.observers.forEach(function(e) {
                    e.onQueryUpdate(t)
                }), e.cache.notify({
                    query: e,
                    type: "queryUpdated",
                    action: t
                })
            })
        }, n.getDefaultState = function(t) {
            var e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                n = void 0 !== t.initialData ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0,
                i = void 0 !== e;
            return {
                data: e,
                dataUpdateCount: 0,
                dataUpdatedAt: i ? null != n ? n : Date.now() : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchMeta: null,
                isFetching: !1,
                isInvalidated: !1,
                isPaused: !1,
                status: i ? "success" : "idle"
            }
        }, n.reducer = function(e, n) {
            var i, r;
            switch (n.type) {
                case "failed":
                    return t({}, e, {
                        fetchFailureCount: e.fetchFailureCount + 1
                    });
                case "pause":
                    return t({}, e, {
                        isPaused: !0
                    });
                case "continue":
                    return t({}, e, {
                        isPaused: !1
                    });
                case "fetch":
                    return t({}, e, {
                        fetchFailureCount: 0,
                        fetchMeta: null != (i = n.meta) ? i : null,
                        isFetching: !0,
                        isPaused: !1
                    }, !e.dataUpdatedAt && {
                        error: null,
                        status: "loading"
                    });
                case "success":
                    return t({}, e, {
                        data: n.data,
                        dataUpdateCount: e.dataUpdateCount + 1,
                        dataUpdatedAt: null != (r = n.dataUpdatedAt) ? r : Date.now(),
                        error: null,
                        fetchFailureCount: 0,
                        isFetching: !1,
                        isInvalidated: !1,
                        isPaused: !1,
                        status: "success"
                    });
                case "error":
                    var s = n.error;
                    return Q(s) && s.revert && this.revertState ? t({}, this.revertState) : t({}, e, {
                        error: s,
                        errorUpdateCount: e.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: e.fetchFailureCount + 1,
                        isFetching: !1,
                        isPaused: !1,
                        status: "error"
                    });
                case "invalidate":
                    return t({}, e, {
                        isInvalidated: !0
                    });
                case "setState":
                    return t({}, e, n.state);
                default:
                    return e
            }
        }, e
    }(),
    I = function(t) {
        function n(e) {
            var n;
            return (n = t.call(this) || this).config = e || {}, n.queries = [], n.queriesMap = {}, n
        }
        e(n, t);
        var i = n.prototype;
        return i.build = function(t, e, n) {
            var i, r = e.queryKey,
                s = null != (i = e.queryHash) ? i : v(r, e),
                o = this.get(s);
            return o || (o = new T({
                cache: this,
                queryKey: r,
                queryHash: s,
                options: t.defaultQueryOptions(e),
                state: n,
                defaultOptions: t.getQueryDefaults(r),
                meta: e.meta
            }), this.add(o)), o
        }, i.add = function(t) {
            this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
                type: "queryAdded",
                query: t
            }))
        }, i.remove = function(t) {
            var e = this.queriesMap[t.queryHash];
            e && (t.destroy(), this.queries = this.queries.filter(function(e) {
                return e !== t
            }), e === t && delete this.queriesMap[t.queryHash], this.notify({
                type: "queryRemoved",
                query: t
            }))
        }, i.clear = function() {
            var t = this;
            x.batch(function() {
                t.queries.forEach(function(e) {
                    t.remove(e)
                })
            })
        }, i.get = function(t) {
            return this.queriesMap[t]
        }, i.getAll = function() {
            return this.queries
        }, i.find = function(t, e) {
            var n = h(t, e)[0];
            return void 0 === n.exact && (n.exact = !0), this.queries.find(function(t) {
                return f(n, t)
            })
        }, i.findAll = function(t, e) {
            var n = h(t, e)[0];
            return Object.keys(n).length > 0 ? this.queries.filter(function(t) {
                return f(n, t)
            }) : this.queries
        }, i.notify = function(t) {
            var e = this;
            x.batch(function() {
                e.listeners.forEach(function(e) {
                    e(t)
                })
            })
        }, i.onFocus = function() {
            var t = this;
            x.batch(function() {
                t.queries.forEach(function(t) {
                    t.onFocus()
                })
            })
        }, i.onOnline = function() {
            var t = this;
            x.batch(function() {
                t.queries.forEach(function(t) {
                    t.onOnline()
                })
            })
        }, n
    }(r),
    U = function() {
        function e(e) {
            this.options = t({}, e.defaultOptions, e.options), this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.observers = [], this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                isPaused: !1,
                status: "idle",
                variables: void 0
            }, this.meta = e.meta
        }
        var n = e.prototype;
        return n.setState = function(t) {
            this.dispatch({
                type: "setState",
                state: t
            })
        }, n.addObserver = function(t) {
            -1 === this.observers.indexOf(t) && this.observers.push(t)
        }, n.removeObserver = function(t) {
            this.observers = this.observers.filter(function(e) {
                return e !== t
            })
        }, n.cancel = function() {
            return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(o).catch(o)) : Promise.resolve()
        }, n.continue = function() {
            return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
        }, n.execute = function() {
            var t, e = this,
                n = "loading" === this.state.status,
                i = Promise.resolve();
            return n || (this.dispatch({
                type: "loading",
                variables: this.options.variables
            }), i = i.then(function() {
                null == e.mutationCache.config.onMutate || e.mutationCache.config.onMutate(e.state.variables, e)
            }).then(function() {
                return null == e.options.onMutate ? void 0 : e.options.onMutate(e.state.variables)
            }).then(function(t) {
                t !== e.state.context && e.dispatch({
                    type: "loading",
                    context: t,
                    variables: e.state.variables
                })
            })), i.then(function() {
                return e.executeMutation()
            }).then(function(n) {
                t = n, null == e.mutationCache.config.onSuccess || e.mutationCache.config.onSuccess(t, e.state.variables, e.state.context, e)
            }).then(function() {
                return null == e.options.onSuccess ? void 0 : e.options.onSuccess(t, e.state.variables, e.state.context)
            }).then(function() {
                return null == e.options.onSettled ? void 0 : e.options.onSettled(t, null, e.state.variables, e.state.context)
            }).then(function() {
                return e.dispatch({
                    type: "success",
                    data: t
                }), t
            }).catch(function(t) {
                return null == e.mutationCache.config.onError || e.mutationCache.config.onError(t, e.state.variables, e.state.context, e), M().error(t), Promise.resolve().then(function() {
                    return null == e.options.onError ? void 0 : e.options.onError(t, e.state.variables, e.state.context)
                }).then(function() {
                    return null == e.options.onSettled ? void 0 : e.options.onSettled(void 0, t, e.state.variables, e.state.context)
                }).then(function() {
                    throw e.dispatch({
                        type: "error",
                        error: t
                    }), t
                })
            })
        }, n.executeMutation = function() {
            var t, e = this;
            return this.retryer = new A({
                fn: function() {
                    return e.options.mutationFn ? e.options.mutationFn(e.state.variables) : Promise.reject("No mutationFn found")
                },
                onFail: function() {
                    e.dispatch({
                        type: "failed"
                    })
                },
                onPause: function() {
                    e.dispatch({
                        type: "pause"
                    })
                },
                onContinue: function() {
                    e.dispatch({
                        type: "continue"
                    })
                },
                retry: null != (t = this.options.retry) ? t : 0,
                retryDelay: this.options.retryDelay
            }), this.retryer.promise
        }, n.dispatch = function(e) {
            var n = this;
            this.state = function(e, n) {
                switch (n.type) {
                    case "failed":
                        return t({}, e, {
                            failureCount: e.failureCount + 1
                        });
                    case "pause":
                        return t({}, e, {
                            isPaused: !0
                        });
                    case "continue":
                        return t({}, e, {
                            isPaused: !1
                        });
                    case "loading":
                        return t({}, e, {
                            context: n.context,
                            data: void 0,
                            error: null,
                            isPaused: !1,
                            status: "loading",
                            variables: n.variables
                        });
                    case "success":
                        return t({}, e, {
                            data: n.data,
                            error: null,
                            status: "success",
                            isPaused: !1
                        });
                    case "error":
                        return t({}, e, {
                            data: void 0,
                            error: n.error,
                            failureCount: e.failureCount + 1,
                            isPaused: !1,
                            status: "error"
                        });
                    case "setState":
                        return t({}, e, n.state);
                    default:
                        return e
                }
            }(this.state, e), x.batch(function() {
                n.observers.forEach(function(t) {
                    t.onMutationUpdate(e)
                }), n.mutationCache.notify(n)
            })
        }, e
    }();
var K = function(t) {
    function n(e) {
        var n;
        return (n = t.call(this) || this).config = e || {}, n.mutations = [], n.mutationId = 0, n
    }
    e(n, t);
    var i = n.prototype;
    return i.build = function(t, e, n) {
        var i = new U({
            mutationCache: this,
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(e),
            state: n,
            defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0,
            meta: e.meta
        });
        return this.add(i), i
    }, i.add = function(t) {
        this.mutations.push(t), this.notify(t)
    }, i.remove = function(t) {
        this.mutations = this.mutations.filter(function(e) {
            return e !== t
        }), t.cancel(), this.notify(t)
    }, i.clear = function() {
        var t = this;
        x.batch(function() {
            t.mutations.forEach(function(e) {
                t.remove(e)
            })
        })
    }, i.getAll = function() {
        return this.mutations
    }, i.find = function(t) {
        return void 0 === t.exact && (t.exact = !0), this.mutations.find(function(e) {
            return d(t, e)
        })
    }, i.findAll = function(t) {
        return this.mutations.filter(function(e) {
            return d(t, e)
        })
    }, i.notify = function(t) {
        var e = this;
        x.batch(function() {
            e.listeners.forEach(function(e) {
                e(t)
            })
        })
    }, i.onFocus = function() {
        this.resumePausedMutations()
    }, i.onOnline = function() {
        this.resumePausedMutations()
    }, i.resumePausedMutations = function() {
        var t = this.mutations.filter(function(t) {
            return t.state.isPaused
        });
        return x.batch(function() {
            return t.reduce(function(t, e) {
                return t.then(function() {
                    return e.continue().catch(o)
                })
            }, Promise.resolve())
        })
    }, n
}(r);

function L() {
    return {
        onFetch: function(t) {
            t.fetchFn = function() {
                var e, n, i, r, s, o, u, a = null == (e = t.fetchOptions) || null == (n = e.meta) ? void 0 : n.refetchPage,
                    c = null == (i = t.fetchOptions) || null == (r = i.meta) ? void 0 : r.fetchMore,
                    l = null == c ? void 0 : c.pageParam,
                    h = "forward" === (null == c ? void 0 : c.direction),
                    f = "backward" === (null == c ? void 0 : c.direction),
                    d = (null == (s = t.state.data) ? void 0 : s.pages) || [],
                    v = (null == (o = t.state.data) ? void 0 : o.pageParams) || [],
                    p = R(),
                    y = null == p ? void 0 : p.signal,
                    m = v,
                    b = !1,
                    g = t.options.queryFn || function() {
                        return Promise.reject("Missing queryFn")
                    },
                    O = function(t, e, n, i) {
                        return m = i ? [e].concat(m) : [].concat(m, [e]), i ? [n].concat(t) : [].concat(t, [n])
                    },
                    C = function(e, n, i, r) {
                        if (b) return Promise.reject("Cancelled");
                        if (void 0 === i && !n && e.length) return Promise.resolve(e);
                        var s = {
                                queryKey: t.queryKey,
                                signal: y,
                                pageParam: i,
                                meta: t.meta
                            },
                            o = g(s),
                            u = Promise.resolve(o).then(function(t) {
                                return O(e, i, t, r)
                            });
                        w(o) && (u.cancel = o.cancel);
                        return u
                    };
                if (d.length)
                    if (h) {
                        var P = void 0 !== l,
                            q = P ? l : N(t.options, d);
                        u = C(d, P, q)
                    } else if (f) {
                    var F = void 0 !== l,
                        S = F ? l : k(t.options, d);
                    u = C(d, F, S, !0)
                } else ! function() {
                    m = [];
                    var e = void 0 === t.options.getNextPageParam,
                        n = !a || !d[0] || a(d[0], 0, d);
                    u = n ? C([], e, v[0]) : Promise.resolve(O([], v[0], d[0]));
                    for (var i = function(n) {
                            u = u.then(function(i) {
                                if (!a || !d[n] || a(d[n], n, d)) {
                                    var r = e ? v[n] : N(t.options, i);
                                    return C(i, e, r)
                                }
                                return Promise.resolve(O(i, v[n], d[n]))
                            })
                        }, r = 1; r < d.length; r++) i(r)
                }();
                else u = C([]);
                var E = u.then(function(t) {
                    return {
                        pages: t,
                        pageParams: m
                    }
                });
                return E.cancel = function() {
                    b = !0, null == p || p.abort(), w(u) && u.cancel()
                }, E
            }
        }
    }
}

function N(t, e) {
    return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
}

function k(t, e) {
    return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
}

function j(t, e) {
    if (t.getNextPageParam && Array.isArray(e)) {
        var n = N(t, e);
        return null != n && !1 !== n
    }
}

function H(t, e) {
    if (t.getPreviousPageParam && Array.isArray(e)) {
        var n = k(t, e);
        return null != n && !1 !== n
    }
}
var B = function() {
        function e(t) {
            void 0 === t && (t = {}), this.queryCache = t.queryCache || new I, this.mutationCache = t.mutationCache || new K, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
        }
        var n = e.prototype;
        return n.mount = function() {
            var t = this;
            this.unsubscribeFocus = q.subscribe(function() {
                q.isFocused() && F.isOnline() && (t.mutationCache.onFocus(), t.queryCache.onFocus())
            }), this.unsubscribeOnline = F.subscribe(function() {
                q.isFocused() && F.isOnline() && (t.mutationCache.onOnline(), t.queryCache.onOnline())
            })
        }, n.unmount = function() {
            var t, e;
            null == (t = this.unsubscribeFocus) || t.call(this), null == (e = this.unsubscribeOnline) || e.call(this)
        }, n.isFetching = function(t, e) {
            var n = h(t, e)[0];
            return n.fetching = !0, this.queryCache.findAll(n).length
        }, n.isMutating = function(e) {
            return this.mutationCache.findAll(t({}, e, {
                fetching: !0
            })).length
        }, n.getQueryData = function(t, e) {
            var n;
            return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state.data
        }, n.getQueriesData = function(t) {
            return this.getQueryCache().findAll(t).map(function(t) {
                return [t.queryKey, t.state.data]
            })
        }, n.setQueryData = function(t, e, n) {
            var i = l(t),
                r = this.defaultQueryOptions(i);
            return this.queryCache.build(this, r).setData(e, n)
        }, n.setQueriesData = function(t, e, n) {
            var i = this;
            return x.batch(function() {
                return i.getQueryCache().findAll(t).map(function(t) {
                    var r = t.queryKey;
                    return [r, i.setQueryData(r, e, n)]
                })
            })
        }, n.getQueryState = function(t, e) {
            var n;
            return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state
        }, n.removeQueries = function(t, e) {
            var n = h(t, e)[0],
                i = this.queryCache;
            x.batch(function() {
                i.findAll(n).forEach(function(t) {
                    i.remove(t)
                })
            })
        }, n.resetQueries = function(e, n, i) {
            var r = this,
                s = h(e, n, i),
                o = s[0],
                u = s[1],
                a = this.queryCache,
                c = t({}, o, {
                    active: !0
                });
            return x.batch(function() {
                return a.findAll(o).forEach(function(t) {
                    t.reset()
                }), r.refetchQueries(c, u)
            })
        }, n.cancelQueries = function(t, e, n) {
            var i = this,
                r = h(t, e, n),
                s = r[0],
                u = r[1],
                a = void 0 === u ? {} : u;
            void 0 === a.revert && (a.revert = !0);
            var c = x.batch(function() {
                return i.queryCache.findAll(s).map(function(t) {
                    return t.cancel(a)
                })
            });
            return Promise.all(c).then(o).catch(o)
        }, n.invalidateQueries = function(e, n, i) {
            var r, s, o, u = this,
                a = h(e, n, i),
                c = a[0],
                l = a[1],
                f = t({}, c, {
                    active: null == (r = null != (s = c.refetchActive) ? s : c.active) || r,
                    inactive: null != (o = c.refetchInactive) && o
                });
            return x.batch(function() {
                return u.queryCache.findAll(c).forEach(function(t) {
                    t.invalidate()
                }), u.refetchQueries(f, l)
            })
        }, n.refetchQueries = function(e, n, i) {
            var r = this,
                s = h(e, n, i),
                u = s[0],
                a = s[1],
                c = x.batch(function() {
                    return r.queryCache.findAll(u).map(function(e) {
                        return e.fetch(void 0, t({}, a, {
                            meta: {
                                refetchPage: null == u ? void 0 : u.refetchPage
                            }
                        }))
                    })
                }),
                l = Promise.all(c).then(o);
            return (null == a ? void 0 : a.throwOnError) || (l = l.catch(o)), l
        }, n.fetchQuery = function(t, e, n) {
            var i = l(t, e, n),
                r = this.defaultQueryOptions(i);
            void 0 === r.retry && (r.retry = !1);
            var s = this.queryCache.build(this, r);
            return s.isStaleByTime(r.staleTime) ? s.fetch(r) : Promise.resolve(s.state.data)
        }, n.prefetchQuery = function(t, e, n) {
            return this.fetchQuery(t, e, n).then(o).catch(o)
        }, n.fetchInfiniteQuery = function(t, e, n) {
            var i = l(t, e, n);
            return i.behavior = L(), this.fetchQuery(i)
        }, n.prefetchInfiniteQuery = function(t, e, n) {
            return this.fetchInfiniteQuery(t, e, n).then(o).catch(o)
        }, n.cancelMutations = function() {
            var t = this,
                e = x.batch(function() {
                    return t.mutationCache.getAll().map(function(t) {
                        return t.cancel()
                    })
                });
            return Promise.all(e).then(o).catch(o)
        }, n.resumePausedMutations = function() {
            return this.getMutationCache().resumePausedMutations()
        }, n.executeMutation = function(t) {
            return this.mutationCache.build(this, t).execute()
        }, n.getQueryCache = function() {
            return this.queryCache
        }, n.getMutationCache = function() {
            return this.mutationCache
        }, n.getDefaultOptions = function() {
            return this.defaultOptions
        }, n.setDefaultOptions = function(t) {
            this.defaultOptions = t
        }, n.setQueryDefaults = function(t, e) {
            var n = this.queryDefaults.find(function(e) {
                return p(t) === p(e.queryKey)
            });
            n ? n.defaultOptions = e : this.queryDefaults.push({
                queryKey: t,
                defaultOptions: e
            })
        }, n.getQueryDefaults = function(t) {
            var e;
            return t ? null == (e = this.queryDefaults.find(function(e) {
                return y(t, e.queryKey)
            })) ? void 0 : e.defaultOptions : void 0
        }, n.setMutationDefaults = function(t, e) {
            var n = this.mutationDefaults.find(function(e) {
                return p(t) === p(e.mutationKey)
            });
            n ? n.defaultOptions = e : this.mutationDefaults.push({
                mutationKey: t,
                defaultOptions: e
            })
        }, n.getMutationDefaults = function(t) {
            var e;
            return t ? null == (e = this.mutationDefaults.find(function(e) {
                return y(t, e.mutationKey)
            })) ? void 0 : e.defaultOptions : void 0
        }, n.defaultQueryOptions = function(e) {
            if (null == e ? void 0 : e._defaulted) return e;
            var n = t({}, this.defaultOptions.queries, this.getQueryDefaults(null == e ? void 0 : e.queryKey), e, {
                _defaulted: !0
            });
            return !n.queryHash && n.queryKey && (n.queryHash = v(n.queryKey, n)), n
        }, n.defaultQueryObserverOptions = function(t) {
            return this.defaultQueryOptions(t)
        }, n.defaultMutationOptions = function(e) {
            return (null == e ? void 0 : e._defaulted) ? e : t({}, this.defaultOptions.mutations, this.getMutationDefaults(null == e ? void 0 : e.mutationKey), e, {
                _defaulted: !0
            })
        }, n.clear = function() {
            this.queryCache.clear(), this.mutationCache.clear()
        }, e
    }(),
    G = function(n) {
        function i(t, e) {
            var i;
            return (i = n.call(this) || this).client = t, i.options = e, i.trackedProps = [], i.selectError = null, i.bindMethods(), i.setOptions(e), i
        }
        e(i, n);
        var r = i.prototype;
        return r.bindMethods = function() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
        }, r.onSubscribe = function() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), _(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
        }, r.onUnsubscribe = function() {
            this.listeners.length || this.destroy()
        }, r.shouldFetchOnReconnect = function() {
            return W(this.currentQuery, this.options, this.options.refetchOnReconnect)
        }, r.shouldFetchOnWindowFocus = function() {
            return W(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
        }, r.destroy = function() {
            this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this)
        }, r.setOptions = function(t, e) {
            var n = this.options,
                i = this.currentQuery;
            if (this.options = this.client.defaultQueryObserverOptions(t), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
            var r = this.hasListeners();
            r && J(this.currentQuery, i, this.options, n) && this.executeFetch(), this.updateResult(e), !r || this.currentQuery === i && this.options.enabled === n.enabled && this.options.staleTime === n.staleTime || this.updateStaleTimeout();
            var s = this.computeRefetchInterval();
            !r || this.currentQuery === i && this.options.enabled === n.enabled && s === this.currentRefetchInterval || this.updateRefetchInterval(s)
        }, r.getOptimisticResult = function(t) {
            var e = this.client.defaultQueryObserverOptions(t),
                n = this.client.getQueryCache().build(this.client, e);
            return this.createResult(n, e)
        }, r.getCurrentResult = function() {
            return this.currentResult
        }, r.trackResult = function(t, e) {
            var n = this,
                i = {},
                r = function(t) {
                    n.trackedProps.includes(t) || n.trackedProps.push(t)
                };
            return Object.keys(t).forEach(function(e) {
                Object.defineProperty(i, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return r(e), t[e]
                    }
                })
            }), (e.useErrorBoundary || e.suspense) && r("error"), i
        }, r.getNextResult = function(t) {
            var e = this;
            return new Promise(function(n, i) {
                var r = e.subscribe(function(e) {
                    e.isFetching || (r(), e.isError && (null == t ? void 0 : t.throwOnError) ? i(e.error) : n(e))
                })
            })
        }, r.getCurrentQuery = function() {
            return this.currentQuery
        }, r.remove = function() {
            this.client.getQueryCache().remove(this.currentQuery)
        }, r.refetch = function(e) {
            return this.fetch(t({}, e, {
                meta: {
                    refetchPage: null == e ? void 0 : e.refetchPage
                }
            }))
        }, r.fetchOptimistic = function(t) {
            var e = this,
                n = this.client.defaultQueryObserverOptions(t),
                i = this.client.getQueryCache().build(this.client, n);
            return i.fetch().then(function() {
                return e.createResult(i, n)
            })
        }, r.fetch = function(t) {
            var e = this;
            return this.executeFetch(t).then(function() {
                return e.updateResult(), e.currentResult
            })
        }, r.executeFetch = function(t) {
            this.updateQuery();
            var e = this.currentQuery.fetch(this.options, t);
            return (null == t ? void 0 : t.throwOnError) || (e = e.catch(o)), e
        }, r.updateStaleTimeout = function() {
            var t = this;
            if (this.clearStaleTimeout(), !s && !this.currentResult.isStale && u(this.options.staleTime)) {
                var e = c(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                this.staleTimeoutId = setTimeout(function() {
                    t.currentResult.isStale || t.updateResult()
                }, e)
            }
        }, r.computeRefetchInterval = function() {
            var t;
            return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
        }, r.updateRefetchInterval = function(t) {
            var e = this;
            this.clearRefetchInterval(), this.currentRefetchInterval = t, !s && !1 !== this.options.enabled && u(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(function() {
                (e.options.refetchIntervalInBackground || q.isFocused()) && e.executeFetch()
            }, this.currentRefetchInterval))
        }, r.updateTimers = function() {
            this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
        }, r.clearTimers = function() {
            this.clearStaleTimeout(), this.clearRefetchInterval()
        }, r.clearStaleTimeout = function() {
            this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
        }, r.clearRefetchInterval = function() {
            this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
        }, r.createResult = function(t, e) {
            var n, i = this.currentQuery,
                r = this.options,
                s = this.currentResult,
                o = this.currentResultState,
                u = this.currentResultOptions,
                a = t !== i,
                c = a ? t.state : this.currentQueryInitialState,
                l = a ? this.currentResult : this.previousQueryResult,
                h = t.state,
                f = h.dataUpdatedAt,
                d = h.error,
                v = h.errorUpdatedAt,
                p = h.isFetching,
                y = h.status,
                m = !1,
                g = !1;
            if (e.optimisticResults) {
                var O = this.hasListeners(),
                    C = !O && _(t, e),
                    P = O && J(t, i, e, r);
                (C || P) && (p = !0, f || (y = "loading"))
            }
            if (e.keepPreviousData && !h.dataUpdateCount && (null == l ? void 0 : l.isSuccess) && "error" !== y) n = l.data, f = l.dataUpdatedAt, y = l.status, m = !0;
            else if (e.select && void 0 !== h.data)
                if (s && h.data === (null == o ? void 0 : o.data) && e.select === this.selectFn) n = this.selectResult;
                else try {
                    this.selectFn = e.select, n = e.select(h.data), !1 !== e.structuralSharing && (n = b(null == s ? void 0 : s.data, n)), this.selectResult = n, this.selectError = null
                } catch (q) {
                    M().error(q), this.selectError = q
                } else n = h.data;
            if (void 0 !== e.placeholderData && void 0 === n && ("loading" === y || "idle" === y)) {
                var R;
                if ((null == s ? void 0 : s.isPlaceholderData) && e.placeholderData === (null == u ? void 0 : u.placeholderData)) R = s.data;
                else if (R = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== R) try {
                    R = e.select(R), !1 !== e.structuralSharing && (R = b(null == s ? void 0 : s.data, R)), this.selectError = null
                } catch (q) {
                    M().error(q), this.selectError = q
                }
                void 0 !== R && (y = "success", n = R, g = !0)
            }
            return this.selectError && (d = this.selectError, n = this.selectResult, v = Date.now(), y = "error"), {
                status: y,
                isLoading: "loading" === y,
                isSuccess: "success" === y,
                isError: "error" === y,
                isIdle: "idle" === y,
                data: n,
                dataUpdatedAt: f,
                error: d,
                errorUpdatedAt: v,
                failureCount: h.fetchFailureCount,
                errorUpdateCount: h.errorUpdateCount,
                isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
                isFetchedAfterMount: h.dataUpdateCount > c.dataUpdateCount || h.errorUpdateCount > c.errorUpdateCount,
                isFetching: p,
                isRefetching: p && "loading" !== y,
                isLoadingError: "error" === y && 0 === h.dataUpdatedAt,
                isPlaceholderData: g,
                isPreviousData: m,
                isRefetchError: "error" === y && 0 !== h.dataUpdatedAt,
                isStale: z(t, e),
                refetch: this.refetch,
                remove: this.remove
            }
        }, r.shouldNotifyListeners = function(t, e) {
            if (!e) return !0;
            var n = this.options,
                i = n.notifyOnChangeProps,
                r = n.notifyOnChangePropsExclusions;
            if (!i && !r) return !0;
            if ("tracked" === i && !this.trackedProps.length) return !0;
            var s = "tracked" === i ? this.trackedProps : i;
            return Object.keys(t).some(function(n) {
                var i = n,
                    o = t[i] !== e[i],
                    u = null == s ? void 0 : s.some(function(t) {
                        return t === n
                    }),
                    a = null == r ? void 0 : r.some(function(t) {
                        return t === n
                    });
                return o && !a && (!s || u)
            })
        }, r.updateResult = function(e) {
            var n = this.currentResult;
            if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, ! function(t, e) {
                    if (t && !e || e && !t) return !1;
                    for (var n in t)
                        if (t[n] !== e[n]) return !1;
                    return !0
                }(this.currentResult, n)) {
                var i = {
                    cache: !0
                };
                !1 !== (null == e ? void 0 : e.listeners) && this.shouldNotifyListeners(this.currentResult, n) && (i.listeners = !0), this.notify(t({}, i, e))
            }
        }, r.updateQuery = function() {
            var t = this.client.getQueryCache().build(this.client, this.options);
            if (t !== this.currentQuery) {
                var e = this.currentQuery;
                this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
            }
        }, r.onQueryUpdate = function(t) {
            var e = {};
            "success" === t.type ? e.onSuccess = !0 : "error" !== t.type || Q(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
        }, r.notify = function(t) {
            var e = this;
            x.batch(function() {
                t.onSuccess ? (null == e.options.onSuccess || e.options.onSuccess(e.currentResult.data), null == e.options.onSettled || e.options.onSettled(e.currentResult.data, null)) : t.onError && (null == e.options.onError || e.options.onError(e.currentResult.error), null == e.options.onSettled || e.options.onSettled(void 0, e.currentResult.error)), t.listeners && e.listeners.forEach(function(t) {
                    t(e.currentResult)
                }), t.cache && e.client.getQueryCache().notify({
                    query: e.currentQuery,
                    type: "observerResultsUpdated"
                })
            })
        }, i
    }(r);

function _(t, e) {
    return function(t, e) {
        return !(!1 === e.enabled || t.state.dataUpdatedAt || "error" === t.state.status && !1 === e.retryOnMount)
    }(t, e) || t.state.dataUpdatedAt > 0 && W(t, e, e.refetchOnMount)
}

function W(t, e, n) {
    if (!1 !== e.enabled) {
        var i = "function" == typeof n ? n(t) : n;
        return "always" === i || !1 !== i && z(t, e)
    }
    return !1
}

function J(t, e, n, i) {
    return !1 !== n.enabled && (t !== e || !1 === i.enabled) && (!n.suspense || "error" !== t.state.status) && z(t, n)
}

function z(t, e) {
    return t.isStaleByTime(e.staleTime)
}
var V = function(n) {
        function i(t, e) {
            return n.call(this, t, e) || this
        }
        e(i, n);
        var r = i.prototype;
        return r.bindMethods = function() {
            n.prototype.bindMethods.call(this), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
        }, r.setOptions = function(e, i) {
            n.prototype.setOptions.call(this, t({}, e, {
                behavior: L()
            }), i)
        }, r.getOptimisticResult = function(t) {
            return t.behavior = L(), n.prototype.getOptimisticResult.call(this, t)
        }, r.fetchNextPage = function(t) {
            var e;
            return this.fetch({
                cancelRefetch: null == (e = null == t ? void 0 : t.cancelRefetch) || e,
                throwOnError: null == t ? void 0 : t.throwOnError,
                meta: {
                    fetchMore: {
                        direction: "forward",
                        pageParam: null == t ? void 0 : t.pageParam
                    }
                }
            })
        }, r.fetchPreviousPage = function(t) {
            var e;
            return this.fetch({
                cancelRefetch: null == (e = null == t ? void 0 : t.cancelRefetch) || e,
                throwOnError: null == t ? void 0 : t.throwOnError,
                meta: {
                    fetchMore: {
                        direction: "backward",
                        pageParam: null == t ? void 0 : t.pageParam
                    }
                }
            })
        }, r.createResult = function(e, i) {
            var r, s, o, u, a, c, l = e.state,
                h = n.prototype.createResult.call(this, e, i);
            return t({}, h, {
                fetchNextPage: this.fetchNextPage,
                fetchPreviousPage: this.fetchPreviousPage,
                hasNextPage: j(i, null == (r = l.data) ? void 0 : r.pages),
                hasPreviousPage: H(i, null == (s = l.data) ? void 0 : s.pages),
                isFetchingNextPage: l.isFetching && "forward" === (null == (o = l.fetchMeta) || null == (u = o.fetchMore) ? void 0 : u.direction),
                isFetchingPreviousPage: l.isFetching && "backward" === (null == (a = l.fetchMeta) || null == (c = a.fetchMore) ? void 0 : c.direction)
            })
        }, i
    }(G),
    X = n.unstable_batchedUpdates;
x.setBatchNotifyFunction(X);
var Y = console;
D = Y;
var Z = i.createContext(void 0),
    $ = i.createContext(!1);

function tt(t) {
    return t && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Z), window.ReactQueryClientContext) : Z
}
var et = function() {
        var t = i.useContext(tt(i.useContext($)));
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    nt = function(t) {
        var e = t.client,
            n = t.contextSharing,
            r = void 0 !== n && n,
            s = t.children;
        i.useEffect(function() {
            return e.mount(),
                function() {
                    e.unmount()
                }
        }, [e]);
        var o = tt(r);
        return i.createElement($.Provider, {
            value: r
        }, i.createElement(o.Provider, {
            value: e
        }, s))
    };
var it, rt = i.createContext((it = !1, {
    clearReset: function() {
        it = !1
    },
    reset: function() {
        it = !0
    },
    isReset: function() {
        return it
    }
}));

function st(t, e) {
    var n = i.useRef(!1),
        r = i.useState(0)[1],
        s = et(),
        o = i.useContext(rt),
        u = s.defaultQueryObserverOptions(t);
    u.optimisticResults = !0, u.onError && (u.onError = x.batchCalls(u.onError)), u.onSuccess && (u.onSuccess = x.batchCalls(u.onSuccess)), u.onSettled && (u.onSettled = x.batchCalls(u.onSettled)), u.suspense && ("number" != typeof u.staleTime && (u.staleTime = 1e3), 0 === u.cacheTime && (u.cacheTime = 1)), (u.suspense || u.useErrorBoundary) && (o.isReset() || (u.retryOnMount = !1));
    var a, c, l, h = i.useState(function() {
            return new e(s, u)
        })[0],
        f = h.getOptimisticResult(u);
    if (i.useEffect(function() {
            n.current = !0, o.clearReset();
            var t = h.subscribe(x.batchCalls(function() {
                n.current && r(function(t) {
                    return t + 1
                })
            }));
            return h.updateResult(),
                function() {
                    n.current = !1, t()
                }
        }, [o, h]), i.useEffect(function() {
            h.setOptions(u, {
                listeners: !1
            })
        }, [u, h]), u.suspense && f.isLoading) throw h.fetchOptimistic(u).then(function(t) {
        var e = t.data;
        null == u.onSuccess || u.onSuccess(e), null == u.onSettled || u.onSettled(e, null)
    }).catch(function(t) {
        o.clearReset(), null == u.onError || u.onError(t), null == u.onSettled || u.onSettled(void 0, t)
    });
    if (f.isError && !o.isReset() && !f.isFetching && (a = u.suspense, c = u.useErrorBoundary, l = [f.error, h.getCurrentQuery()], "function" == typeof c ? c.apply(void 0, l) : "boolean" == typeof c ? c : a)) throw f.error;
    return "tracked" === u.notifyOnChangeProps && (f = h.trackResult(f, u)), f
}

function ot(t, e, n) {
    return st(l(t, e, n), G)
}

function ut(t, e, n) {
    return st(l(t, e, n), V)
}
export {
    B as Q, nt as a, ut as b, et as c, ot as u
};