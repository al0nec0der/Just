import {
    c as e,
    r as s,
    j as a,
    L as t
} from "./D-s6PRqiKBLBeb70.js";
import {
    m as r,
    A as l,
    N as i,
    T as n,
    p as d,
    B as o,
    q as c,
    n as m,
    k as x,
    M as h
} from "./cNwJ5LchEYW1Y-Rh.js";
import {
    n as u
} from "./Btvs7VabEaxge3D0.js";
import {
    m as g
} from "./rok5ZiflEFTZ0mAl.js";
import {
    I as p,
    P as b,
    a6 as f
} from "./DuhNfJysh32dzoQX.js";
import {
    a as j,
    b as v,
    c as N,
    d as y,
    e as w
} from "./B-4N2_WDClcrmfIj.js";
import "./DRKqkMc30zo_0ikY.js";
import "./CW___00ulSquyL62.js";
import "./BfZ2chxSRdnyRXRh.js";
import "./Dzd9VM057lnHWOrh.js";
import "./C8dBobwRpSGb9gtE.js";
import "./Dud8YmOKJJ5dkhIL.js";
import "./BeLtu-UYPkietiDK.js";
import "./LM2JspYDBI8LNjlT.js";
import "./3aNFxleMQdjaFZtw.js";
import "./DZoN2sFbwskeIicV.js";
import "./DpIj8wd6VUmqXzzl.js";
import "./BDEOJ3om1uRt4ddv.js";
import "./CxGgxkmD02DlAHB9.js";
import "./CdjEVO9ucAe6ofNA.js";
import "./BQN4GL9TIiLnyRs4.js";
const _ = () => {
    const _ = e(),
        {
            type: k,
            id: S
        } = _,
        {
            isAuthenticated: $
        } = r(),
        [z, E] = s.useState(null),
        [I, A] = s.useState(1),
        [F, L] = s.useState([]),
        [O, T] = s.useState(!0),
        [C] = s.useState(0),
        [J, M] = s.useState(!1),
        [B, R] = s.useState({}),
        W = s.useCallback(async () => {
            if (z) try {
                if ($) {
                    const e = await fetch(`${l}/auth/watch-later`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                    if (e.ok) {
                        const s = (await e.json()).watchLater.some(e => e.id === z.id.toString());
                        M(s)
                    }
                } else {
                    const e = localStorage.getItem("watchLater"),
                        s = (e ? JSON.parse(e) : []).some(e => e.id === z.id.toString());
                    M(s)
                }
            } catch (e) {}
        }, [z, $]);
    s.useEffect(() => {
        (async () => {
            if (k && S && ("movie" === k || "tv" === k)) try {
                T(!0);
                const e = await fetch(`${o}/${k}/${S}?append_to_response=credits,similar&api_key=${c}`),
                    s = await e.json(),
                    a = { ...s,
                        title: "movie" === k ? s.title : s.name,
                        media_type: k,
                        genres: s.genres,
                        credits: s.credits,
                        similar: s.similar
                    };
                E(a), "tv" === k && D(1)
            } catch (e) {} finally {
                T(!1)
            }
        })()
    }, [k, S]), s.useEffect(() => {
        z && W()
    }, [z, W]);
    const D = async e => {
        if (S) try {
            const s = await fetch(`${o}/tv/${S}/season/${e}?api_key=${c}`),
                a = await s.json();
            L(a.episodes), A(e)
        } catch (s) {}
    };
    s.useEffect(() => {
        F.length > 0 && (async () => {
            if (!S) return;
            const e = {};
            try {
                const s = (await m())[S];
                if (s && s.show_progress)
                    for (const a of F) {
                        const t = `s${a.season_number}e${a.episode_number}`,
                            r = s.show_progress[t];
                        if (r && r.progress) {
                            const s = r.progress.watched || 0,
                                t = r.progress.duration || 60 * a.runtime || 0,
                                l = t > 0 ? s / t * 100 : 0;
                            e[a.id] = {
                                progress: Math.min(l, 100),
                                completed: !!r.progress.completed
                            }
                        } else e[a.id] = {
                            progress: 0,
                            completed: !1
                        }
                    } else
                        for (const a of F) {
                            const s = await x("tv", S, a.season_number, a.episode_number);
                            e[a.id] = {
                                progress: s || 0,
                                completed: !1
                            }
                        }
            } catch (s) {}
            R(e)
        })()
    }, [F, S]);
    const P = e => {
            if (!e) return "";
            const s = Math.floor(e / 60),
                a = e % 60;
            return s > 0 ? `${s}h ${a}m` : `${a}m`
        },
        q = e => e ? new Date(e).getFullYear() : "";
    if (O || !z) return a.jsxs("div", {
        className: "animate-pulse",
        children: [a.jsx("div", {
            className: "h-[70vh] bg-gradient-to-b from-brand/5 to-background"
        }), a.jsx("div", {
            className: "container mx-auto px-4 max-w-7xl -mt-32 relative z-10",
            children: a.jsxs("div", {
                className: "flex flex-col md:flex-row gap-8",
                children: [a.jsx("div", {
                    className: "md:w-1/3 lg:w-1/4",
                    children: a.jsx("div", {
                        className: "aspect-[2/3] bg-secondary/10 border border-border/10 rounded-xl shadow-lg"
                    })
                }), a.jsxs("div", {
                    className: "md:w-2/3 lg:w-3/4 space-y-4",
                    children: [a.jsx("div", {
                        className: "h-8 bg-secondary/10 rounded-full w-3/4"
                    }), a.jsx("div", {
                        className: "h-4 bg-secondary/10 rounded-full w-1/2"
                    }), a.jsx("div", {
                        className: "h-4 bg-secondary/10 rounded-full w-1/4"
                    }), a.jsx("div", {
                        className: "h-4 bg-secondary/10 rounded-full w-2/3"
                    }), a.jsxs("div", {
                        className: "space-y-2 mt-6",
                        children: [a.jsx("div", {
                            className: "h-4 bg-secondary/10 rounded-full w-full"
                        }), a.jsx("div", {
                            className: "h-4 bg-secondary/10 rounded-full w-full"
                        }), a.jsx("div", {
                            className: "h-4 bg-secondary/10 rounded-full w-3/4"
                        })]
                    })]
                })]
            })
        })]
    });
    return a.jsxs(a.Fragment, {
        children: [a.jsx("style", {
            children: "\n          .custom-scrollbar::-webkit-scrollbar {\n            width: 6px;\n          }\n          \n          .custom-scrollbar::-webkit-scrollbar-track {\n            background: rgba(255, 255, 255, 0.1);\n            border-radius: 3px;\n          }\n          \n          .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: rgba(0, 255, 157, 0.3);\n            border-radius: 3px;\n          }\n          \n          .custom-scrollbar::-webkit-scrollbar-thumb:hover {\n            background: rgba(0, 255, 157, 0.5);\n          }\n        "
        }), a.jsx(i, {}), a.jsx("div", {
            className: "relative min-h-screen pb-12 pt-16 bg-background",
            children: a.jsxs("div", {
                className: "relative",
                children: [a.jsxs("div", {
                    className: "h-[25vh] sm:h-[30vh] lg:h-[35vh] overflow-hidden relative",
                    children: [z.backdrop_path ? a.jsx(g.img, {
                        src: `${n}${z.backdrop_path}`,
                        alt: z.title,
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
                    }) : a.jsx("div", {
                        className: "w-full h-full bg-gradient-to-br from-black via-black/80 to-black/60 flex items-center justify-center",
                        children: a.jsxs("div", {
                            className: "text-foreground/20 flex flex-col items-center",
                            children: [a.jsx(p, {
                                size: 64,
                                className: "mb-2"
                            }), a.jsx("span", {
                                className: "text-sm font-medium",
                                children: "No Backdrop Available"
                            })]
                        })
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-background/90 to-transparent"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,157,0.03)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20 pointer-events-none"
                    })]
                }), a.jsx("div", {
                    className: "container mx-auto px-4 -mt-32 sm:-mt-36 lg:-mt-40 relative z-10",
                    children: a.jsxs(g.div, {
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
                        children: [a.jsx("div", {
                            className: "md:w-1/3 lg:w-1/4 flex-shrink-0",
                            children: a.jsxs("div", {
                                className: "sticky top-20 space-y-6 max-w-[280px] mx-auto md:mx-0",
                                children: [a.jsx(g.div, {
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
                                    children: a.jsx("div", {
                                        className: "relative w-full h-full",
                                        children: z.poster_path ? a.jsxs(a.Fragment, {
                                            children: [a.jsx("div", {
                                                className: "absolute -inset-1 bg-gradient-to-br from-brand/30 to-brand/60 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-700"
                                            }), a.jsx("img", {
                                                src: `${d}${z.poster_path}`,
                                                alt: z.title,
                                                className: "w-full h-full object-cover relative z-10"
                                            }), a.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-20"
                                            })]
                                        }) : a.jsxs("div", {
                                            className: "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-background/60 to-background/40",
                                            children: [a.jsx(p, {
                                                size: 48,
                                                className: "text-foreground/30 mb-2"
                                            }), a.jsx("span", {
                                                className: "text-foreground/70 text-center px-4",
                                                children: "No Poster Available"
                                            })]
                                        })
                                    })
                                }), a.jsxs(g.div, {
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
                                    children: ["tv" === k ? C > 0 ? a.jsxs(t, {
                                        to: `/watch/tv/${S}/${z?.last_season_watched}/${z?.last_episode_watched}`,
                                        className: "bg-brand hover:bg-brand/90 text-background font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group w-full",
                                        children: [a.jsx("div", {
                                            className: "absolute inset-0 bg-background/10 origin-left transition-transform duration-300",
                                            style: {
                                                transform: `scaleX(${C/100})`
                                            }
                                        }), a.jsxs("div", {
                                            className: "relative flex items-center justify-between w-full",
                                            children: [a.jsxs("div", {
                                                className: "flex items-center gap-3",
                                                children: [a.jsx(b, {
                                                    size: 20
                                                }), a.jsxs("div", {
                                                    className: "text-left",
                                                    children: [a.jsx("span", {
                                                        className: "block font-semibold",
                                                        children: "Continue Watching"
                                                    }), a.jsxs("span", {
                                                        className: "text-sm text-background/80",
                                                        children: ["S", z ? .last_season_watched, ", E", z ? .last_episode_watched]
                                                    })]
                                                })]
                                            }), a.jsx("div", {
                                                className: "w-8 h-8 rounded-full border-2 border-background/20 flex items-center justify-center",
                                                children: a.jsx(j, {
                                                    className: "w-4 h-4"
                                                })
                                            })]
                                        })]
                                    }) : a.jsxs(t, {
                                        to: `/watch/tv/${S}/1/1`,
                                        className: "bg-brand hover:bg-brand/90 text-background font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 w-full",
                                        children: [a.jsx(b, {
                                            size: 20
                                        }), a.jsx("span", {
                                            children: "Start Watching"
                                        })]
                                    }) : a.jsxs(t, {
                                        to: `/watch/movie/${S}`,
                                        className: "bg-brand hover:bg-brand/90 text-background font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 w-full",
                                        children: [a.jsx(b, {
                                            size: 20
                                        }), a.jsx("span", {
                                            children: "Watch Now"
                                        })]
                                    }), a.jsxs("button", {
                                        onClick: () => (async e => {
                                            const s = {
                                                id: e.id.toString(),
                                                mediaType: e.media_type,
                                                title: e.title,
                                                addedAt: Date.now()
                                            };
                                            try {
                                                if ($) {
                                                    if (!(await fetch("https://backend.fmovies.gd/api/auth/watch-later", {
                                                            method: J ? "DELETE" : "POST",
                                                            headers: {
                                                                "Content-Type": "application/json",
                                                                Authorization: `Bearer ${localStorage.getItem("token")}`
                                                            },
                                                            body: JSON.stringify(s)
                                                        })).ok) throw new Error("Failed to update watch later")
                                                } else {
                                                    const e = localStorage.getItem("watchLater"),
                                                        a = e ? JSON.parse(e) : [];
                                                    if (J) {
                                                        const e = a.filter(e => !(e.id === s.id && e.mediaType === s.mediaType));
                                                        localStorage.setItem("watchLater", JSON.stringify(e))
                                                    } else a.push(s), localStorage.setItem("watchLater", JSON.stringify(a))
                                                }
                                                M(!J), u.success(J ? "Removed from watch later" : "Added to watch later", {
                                                    duration: 3e3,
                                                    position: "bottom-right"
                                                })
                                            } catch (a) {
                                                u.error("Failed to update watch later", {
                                                    duration: 3e3,
                                                    position: "bottom-right"
                                                })
                                            }
                                        })(z),
                                        className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors " + (J ? "bg-brand/20 text-brand hover:bg-brand/30" : "bg-secondary/30 hover:bg-secondary/40 text-foreground"),
                                        children: [a.jsx(f, {
                                            size: 20
                                        }), a.jsx("span", {
                                            children: J ? "Saved" : "Watch Later"
                                        })]
                                    })]
                                }), a.jsxs(g.div, {
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
                                    children: [a.jsx("h3", {
                                        className: "text-lg font-semibold mb-3 text-foreground",
                                        children: "Quick Info"
                                    }), a.jsxs("ul", {
                                        className: "space-y-3",
                                        children: [z.vote_average > 0 && a.jsxs("li", {
                                            className: "flex justify-between items-center",
                                            children: [a.jsx("span", {
                                                className: "text-foreground/60",
                                                children: "Rating"
                                            }), a.jsxs("div", {
                                                className: "flex items-center",
                                                children: [a.jsx(v, {
                                                    className: "w-4 h-4 text-yellow-400 mr-1"
                                                }), a.jsx("span", {
                                                    className: "font-semibold",
                                                    children: z.vote_average.toFixed(1)
                                                }), a.jsx("span", {
                                                    className: "text-foreground/50 text-sm ml-1",
                                                    children: "/10"
                                                })]
                                            })]
                                        }), (z.release_date || z.first_air_date) && a.jsxs("li", {
                                            className: "flex justify-between items-center",
                                            children: [a.jsx("span", {
                                                className: "text-foreground/60",
                                                children: "Release"
                                            }), a.jsx("span", {
                                                className: "font-medium",
                                                children: q(z.release_date || z.first_air_date)
                                            })]
                                        }), z.runtime && a.jsxs("li", {
                                            className: "flex justify-between items-center",
                                            children: [a.jsx("span", {
                                                className: "text-foreground/60",
                                                children: "Runtime"
                                            }), a.jsx("span", {
                                                className: "font-medium",
                                                children: P(z.runtime)
                                            })]
                                        }), "tv" === k && z.number_of_seasons && a.jsxs("li", {
                                            className: "flex justify-between items-center",
                                            children: [a.jsx("span", {
                                                className: "text-foreground/60",
                                                children: "Seasons"
                                            }), a.jsx("span", {
                                                className: "font-medium",
                                                children: z.number_of_seasons
                                            })]
                                        }), "tv" === k && z.number_of_episodes && a.jsxs("li", {
                                            className: "flex justify-between items-center",
                                            children: [a.jsx("span", {
                                                className: "text-foreground/60",
                                                children: "Episodes"
                                            }), a.jsx("span", {
                                                className: "font-medium",
                                                children: z.number_of_episodes
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), a.jsxs("div", {
                            className: "md:w-2/3 lg:w-3/4",
                            children: [a.jsxs(g.div, {
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
                                children: [a.jsx("h1", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80",
                                    children: z.title
                                }), a.jsxs("div", {
                                    className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-foreground/70 mb-6",
                                    children: [a.jsx("div", {
                                        className: "bg-brand/20 text-brand border-none px-2 py-1 rounded-full text-sm capitalize",
                                        children: k
                                    }), z.release_date && a.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [a.jsx(N, {
                                            className: "w-4 h-4"
                                        }), q(z.release_date)]
                                    }), z.first_air_date && a.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [a.jsx(N, {
                                            className: "w-4 h-4"
                                        }), q(z.first_air_date)]
                                    }), z.runtime && a.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [a.jsx(y, {
                                            className: "w-4 h-4"
                                        }), P(z.runtime)]
                                    }), z.genres && z.genres.length > 0 && a.jsx("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: z.genres.slice(0, 3).map(e => a.jsx("span", {
                                            className: "bg-secondary/20 px-2 py-1 rounded-full text-xs",
                                            children: e.name
                                        }, e.id))
                                    }), z.vote_average > 0 && a.jsxs("div", {
                                        className: "flex items-center gap-1 text-yellow-400",
                                        children: [a.jsx(v, {
                                            className: "w-4 h-4"
                                        }), a.jsx("span", {
                                            className: "font-semibold",
                                            children: z.vote_average.toFixed(1)
                                        })]
                                    })]
                                }), a.jsxs("div", {
                                    className: "md:hidden flex flex-wrap items-center gap-3 mt-5",
                                    children: [z.vote_average > 0 && a.jsxs("div", {
                                        className: "flex items-center gap-1 text-yellow-400 bg-black/40 px-3 py-1 rounded-full",
                                        children: [a.jsx(v, {
                                            className: "w-5 h-5"
                                        }), a.jsx("span", {
                                            className: "font-semibold text-lg",
                                            children: z.vote_average.toFixed(1)
                                        }), a.jsx("span", {
                                            className: "text-foreground/50 text-sm",
                                            children: "/10"
                                        })]
                                    }), C > 0 && a.jsxs("div", {
                                        className: "bg-black/40 px-3 py-1 rounded-full flex items-center gap-1",
                                        children: [a.jsx("div", {
                                            className: "w-4 h-4 rounded-full bg-brand"
                                        }), a.jsxs("span", {
                                            className: "text-sm",
                                            children: [C, "% watched"]
                                        })]
                                    })]
                                })]
                            }), a.jsx(g.div, {
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
                                children: "movie" === k ? a.jsxs("div", {
                                    className: "space-y-8",
                                    children: [a.jsxs("div", {
                                        className: "bg-secondary/10 backdrop-blur-md rounded-xl border border-border/10 p-6 transition-all duration-300 hover:border-brand/20 hover:bg-secondary/20",
                                        children: [a.jsxs("div", {
                                            className: "mb-6",
                                            children: [a.jsx("h3", {
                                                className: "text-lg font-semibold text-foreground mb-2",
                                                children: "Synopsis"
                                            }), a.jsx("div", {
                                                className: "max-h-[120px] overflow-y-auto pr-2 custom-scrollbar",
                                                children: a.jsx("p", {
                                                    className: "text-foreground/70 leading-relaxed",
                                                    children: z.overview || "No synopsis available."
                                                })
                                            })]
                                        }), a.jsx("div", {
                                            className: "flex flex-col md:flex-row items-stretch gap-6",
                                            children: C > 0 && a.jsxs("div", {
                                                className: "flex-1",
                                                children: [a.jsxs("div", {
                                                    className: "flex justify-between text-sm text-foreground/70 mb-2",
                                                    children: [a.jsx("span", {
                                                        children: "Continue watching"
                                                    }), a.jsxs("span", {
                                                        children: [C, "% completed"]
                                                    })]
                                                }), a.jsx("div", {
                                                    className: "h-2 bg-secondary/30 rounded-full overflow-hidden",
                                                    children: a.jsx("div", {
                                                        className: "h-full bg-brand rounded-full",
                                                        style: {
                                                            width: `${C}%`
                                                        }
                                                    })
                                                })]
                                            })
                                        })]
                                    }), z.similar && z.similar.results && z.similar.results.length > 0 && a.jsxs("section", {
                                        children: [a.jsxs("h2", {
                                            className: "text-xl font-bold text-foreground/90 flex items-center mb-5",
                                            children: [a.jsx("span", {
                                                className: "w-1 h-6 bg-brand rounded-full mr-4"
                                            }), "Similar Movies"]
                                        }), a.jsx("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5",
                                            children: z.similar.results.slice(0, 6).map(e => a.jsx(h, {
                                                item: { ...e,
                                                    id: "string" == typeof e.id ? parseInt(e.id) : e.id,
                                                    media_type: "movie",
                                                    genre_ids: e.genre_ids || []
                                                }
                                            }, e.id))
                                        })]
                                    })]
                                }) : a.jsxs("div", {
                                    className: "space-y-8",
                                    children: [a.jsx("div", {
                                        className: "bg-secondary/10 backdrop-blur-md rounded-xl border border-border/10 p-6 transition-all duration-300 hover:border-brand/20 hover:bg-secondary/20",
                                        children: a.jsxs("div", {
                                            className: "mb-6",
                                            children: [a.jsx("h3", {
                                                className: "text-lg font-semibold text-foreground mb-2",
                                                children: "Synopsis"
                                            }), a.jsx("div", {
                                                className: "max-h-[120px] overflow-y-auto pr-2 custom-scrollbar",
                                                children: a.jsx("p", {
                                                    className: "text-foreground/70 leading-relaxed",
                                                    children: z.overview || "No synopsis available."
                                                })
                                            })]
                                        })
                                    }), z.seasons && z.seasons.length > 0 && a.jsxs("div", {
                                        className: "space-y-6",
                                        children: [a.jsxs("div", {
                                            className: "flex flex-col gap-4",
                                            children: [a.jsx("h3", {
                                                className: "text-lg font-semibold text-foreground",
                                                children: "Seasons"
                                            }), a.jsx("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3",
                                                children: z.seasons.map(e => a.jsxs("button", {
                                                    onClick: () => D(e.season_number),
                                                    className: "relative group overflow-hidden rounded-xl border transition-all duration-300 " + (I === e.season_number ? "border-brand bg-brand/20 text-brand" : "border-border/10 bg-secondary/10 hover:bg-secondary/20 text-foreground/70 hover:text-foreground"),
                                                    children: [a.jsxs("div", {
                                                        className: "p-3 text-center",
                                                        children: [a.jsx("div", {
                                                            className: "font-medium",
                                                            children: e.name
                                                        }), a.jsxs("div", {
                                                            className: "text-xs mt-1 opacity-70",
                                                            children: [e.episode_count, " Episodes"]
                                                        })]
                                                    }), I === e.season_number && a.jsx("div", {
                                                        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
                                                    })]
                                                }, e.id))
                                            })]
                                        }), a.jsxs("div", {
                                            className: "space-y-4",
                                            children: [a.jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [a.jsx("h3", {
                                                    className: "text-lg font-semibold text-foreground",
                                                    children: "Episodes"
                                                }), a.jsxs("div", {
                                                    className: "text-sm text-foreground/60",
                                                    children: [F.length, " Episodes • Season ", I]
                                                })]
                                            }), a.jsx("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                                children: F.map(e => {
                                                    const s = B[e.id] || {
                                                            progress: 0,
                                                            completed: !1
                                                        },
                                                        r = s.progress,
                                                        l = s.completed;
                                                    return a.jsxs(t, {
                                                        to: `/watch/tv/${S}/${e.season_number}/${e.episode_number}`,
                                                        className: "group relative bg-secondary/10 hover:bg-secondary/20 rounded-xl overflow-hidden border border-border/10 transition-all duration-300",
                                                        children: [a.jsxs("div", {
                                                            className: "aspect-video relative",
                                                            children: [e.still_path ? a.jsx("img", {
                                                                src: `${d}${e.still_path}`,
                                                                alt: e.name,
                                                                className: "w-full h-full object-cover",
                                                                loading: "lazy"
                                                            }) : a.jsx("div", {
                                                                className: "w-full h-full bg-secondary/20 flex items-center justify-center",
                                                                children: a.jsx(p, {
                                                                    className: "w-8 h-8 text-foreground/30"
                                                                })
                                                            }), a.jsx("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
                                                            }), (r > 0 || l) && a.jsx("div", {
                                                                className: "absolute bottom-0 left-0 right-0 h-1 bg-secondary/30",
                                                                children: a.jsx("div", {
                                                                    className: "h-full bg-brand transition-all duration-300",
                                                                    style: {
                                                                        width: `${l?100:r}%`
                                                                    }
                                                                })
                                                            }), a.jsx("div", {
                                                                className: "absolute bottom-3 left-3 right-3",
                                                                children: a.jsxs("div", {
                                                                    className: "flex items-center gap-2 text-sm",
                                                                    children: [a.jsx("div", {
                                                                        className: "w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold " + (l ? "bg-brand/20 text-brand" : "bg-secondary/40 text-foreground/80"),
                                                                        children: l ? a.jsx(w, {
                                                                            className: "w-5 h-5"
                                                                        }) : e.episode_number
                                                                    }), a.jsxs("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [a.jsx("h4", {
                                                                            className: "font-medium text-foreground truncate",
                                                                            children: e.name
                                                                        }), r > 0 && !l && a.jsxs("div", {
                                                                            className: "text-xs text-brand/80",
                                                                            children: [Math.round(r), "% watched"]
                                                                        })]
                                                                    })]
                                                                })
                                                            }), a.jsx("div", {
                                                                className: "absolute top-3 right-3 flex items-center gap-2",
                                                                children: e.runtime && a.jsxs("div", {
                                                                    className: "bg-background/50 backdrop-blur-sm text-xs px-2 py-1 rounded-md flex items-center gap-1",
                                                                    children: [a.jsx(y, {
                                                                        className: "w-3 h-3"
                                                                    }), P(e.runtime)]
                                                                })
                                                            })]
                                                        }), a.jsx("div", {
                                                            className: "p-3 border-t border-border/5",
                                                            children: a.jsx("p", {
                                                                className: "text-xs text-foreground/60 line-clamp-2",
                                                                children: e.overview || "No description available."
                                                            })
                                                        }), a.jsx("div", {
                                                            className: "absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        })]
                                                    }, e.id)
                                                })
                                            })]
                                        })]
                                    }), z.similar && z.similar.results && z.similar.results.length > 0 && a.jsxs("section", {
                                        children: [a.jsxs("h2", {
                                            className: "text-xl font-bold text-foreground/90 flex items-center mb-5",
                                            children: [a.jsx("span", {
                                                className: "w-1 h-6 bg-brand rounded-full mr-4"
                                            }), "Similar Shows"]
                                        }), a.jsx("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5",
                                            children: z.similar.results.slice(0, 6).map(e => a.jsx(h, {
                                                item: { ...e,
                                                    id: "string" == typeof e.id ? parseInt(e.id) : e.id,
                                                    media_type: "tv",
                                                    genre_ids: e.genre_ids || []
                                                }
                                            }, e.id))
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            })
        })]
    })
};
export {
    _ as
    default
};