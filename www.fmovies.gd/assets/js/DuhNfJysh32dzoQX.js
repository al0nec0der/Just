import {
    r as a
} from "./D-s6PRqiKBLBeb70.js";
const e = (...a) => a.filter((a, e, y) => Boolean(a) && "" !== a.trim() && y.indexOf(a) === e).join(" ").trim();
var y = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const h = a.forwardRef(({
        color: h = "currentColor",
        size: t = 24,
        strokeWidth: k = 2,
        absoluteStrokeWidth: d,
        className: p = "",
        children: l,
        iconNode: i,
        ...r
    }, s) => a.createElement("svg", {
        ref: s,
        ...y,
        width: t,
        height: t,
        stroke: h,
        strokeWidth: d ? 24 * Number(k) / Number(t) : k,
        className: e("lucide", p),
        ...r
    }, [...i.map(([e, y]) => a.createElement(e, y)), ...Array.isArray(l) ? l : [l]])),
    t = (y, t) => {
        const k = a.forwardRef(({
            className: k,
            ...d
        }, p) => {
            return a.createElement(h, {
                ref: p,
                iconNode: t,
                className: e(`lucide-${l=y,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, k),
                ...d
            });
            var l
        });
        return k.displayName = `${y}`, k
    },
    k = t("Activity", [
        ["path", {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }]
    ]),
    d = t("ArrowLeft", [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ]),
    p = t("ArrowRight", [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ]),
    l = t("BadgeInfo", [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "16",
            y2: "12",
            key: "1y1yb1"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "8",
            y2: "8",
            key: "110wyk"
        }]
    ]),
    i = t("BookmarkCheck", [
        ["path", {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",
            key: "169p4p"
        }],
        ["path", {
            d: "m9 10 2 2 4-4",
            key: "1gnqz4"
        }]
    ]),
    r = t("Calendar", [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ]),
    s = t("Captions", [
        ["rect", {
            width: "18",
            height: "14",
            x: "3",
            y: "5",
            rx: "2",
            ry: "2",
            key: "12ruh7"
        }],
        ["path", {
            d: "M7 15h4M15 15h2M7 11h2M13 11h4",
            key: "1ueiar"
        }]
    ]),
    c = t("ChevronDown", [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ]),
    o = t("ChevronLeft", [
        ["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]
    ]),
    n = t("ChevronRight", [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ]),
    x = t("CircleAlert", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }]
    ]),
    M = t("CircleCheckBig", [
        ["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ]),
    m = t("CirclePlay", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polygon", {
            points: "10 8 16 12 10 16 10 8",
            key: "1cimsy"
        }]
    ]),
    v = t("Cloud", [
        ["path", {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir"
        }]
    ]),
    g = t("Cog", [
        ["path", {
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            key: "sobvz5"
        }],
        ["path", {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            key: "11i496"
        }],
        ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }],
        ["path", {
            d: "M12 22v-2",
            key: "1osdcq"
        }],
        ["path", {
            d: "m17 20.66-1-1.73",
            key: "eq3orb"
        }],
        ["path", {
            d: "M11 10.27 7 3.34",
            key: "16pf9h"
        }],
        ["path", {
            d: "m20.66 17-1.73-1",
            key: "sg0v6f"
        }],
        ["path", {
            d: "m3.34 7 1.73 1",
            key: "1ulond"
        }],
        ["path", {
            d: "M14 12h8",
            key: "4f43i9"
        }],
        ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }],
        ["path", {
            d: "m20.66 7-1.73 1",
            key: "1ow05n"
        }],
        ["path", {
            d: "m3.34 17 1.73-1",
            key: "nuk764"
        }],
        ["path", {
            d: "m17 3.34-1 1.73",
            key: "2wel8s"
        }],
        ["path", {
            d: "m11 13.73-4 6.93",
            key: "794ttg"
        }]
    ]),
    w = t("Crown", [
        ["path", {
            d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
            key: "1vdc57"
        }],
        ["path", {
            d: "M5 21h14",
            key: "11awu3"
        }]
    ]),
    u = t("Expand", [
        ["path", {
            d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8",
            key: "1c15vz"
        }],
        ["path", {
            d: "M3 16.2V21m0 0h4.8M3 21l6-6",
            key: "1fsnz2"
        }],
        ["path", {
            d: "M21 7.8V3m0 0h-4.8M21 3l-6 6",
            key: "hawz9i"
        }],
        ["path", {
            d: "M3 7.8V3m0 0h4.8M3 3l6 6",
            key: "u9ee12"
        }]
    ]),
    f = t("Film", [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }],
        ["path", {
            d: "M7 3v18",
            key: "bbkbws"
        }],
        ["path", {
            d: "M3 7.5h4",
            key: "zfgn84"
        }],
        ["path", {
            d: "M3 12h18",
            key: "1i2n21"
        }],
        ["path", {
            d: "M3 16.5h4",
            key: "1230mu"
        }],
        ["path", {
            d: "M17 3v18",
            key: "in4fa5"
        }],
        ["path", {
            d: "M17 7.5h4",
            key: "myr1c1"
        }],
        ["path", {
            d: "M17 16.5h4",
            key: "go4c1d"
        }]
    ]),
    z = t("Filter", [
        ["polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }]
    ]),
    L = t("Globe", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }],
        ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]
    ]),
    b = t("History", [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }],
        ["path", {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }]
    ]),
    q = t("House", [
        ["path", {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }],
        ["path", {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }]
    ]),
    C = t("ImageOff", [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }],
        ["path", {
            d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
            key: "1bzlo9"
        }],
        ["line", {
            x1: "13.5",
            x2: "6",
            y1: "13.5",
            y2: "21",
            key: "1q0aeu"
        }],
        ["line", {
            x1: "18",
            x2: "21",
            y1: "12",
            y2: "15",
            key: "5mozeu"
        }],
        ["path", {
            d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
            key: "mmje98"
        }],
        ["path", {
            d: "M21 15V5a2 2 0 0 0-2-2H9",
            key: "43el77"
        }]
    ]),
    j = t("Image", [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }]
    ]),
    A = t("Info", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 16v-4",
            key: "1dtifu"
        }],
        ["path", {
            d: "M12 8h.01",
            key: "e9boi3"
        }]
    ]),
    H = t("KeyRound", [
        ["path", {
            d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
            key: "1s6t7t"
        }],
        ["circle", {
            cx: "16.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "w0ekpg"
        }]
    ]),
    V = t("LayoutGrid", [
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1",
            key: "nxv5o0"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }]
    ]),
    S = t("LayoutList", [
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }],
        ["path", {
            d: "M14 4h7",
            key: "3xa0d5"
        }],
        ["path", {
            d: "M14 9h7",
            key: "1icrd9"
        }],
        ["path", {
            d: "M14 15h7",
            key: "1mj8o2"
        }],
        ["path", {
            d: "M14 20h7",
            key: "11slyb"
        }]
    ]),
    N = t("List", [
        ["path", {
            d: "M3 12h.01",
            key: "nlz23k"
        }],
        ["path", {
            d: "M3 18h.01",
            key: "1tta3j"
        }],
        ["path", {
            d: "M3 6h.01",
            key: "1rqtza"
        }],
        ["path", {
            d: "M8 12h13",
            key: "1za7za"
        }],
        ["path", {
            d: "M8 18h13",
            key: "1lx6n3"
        }],
        ["path", {
            d: "M8 6h13",
            key: "ik3vkj"
        }]
    ]),
    R = t("LoaderCircle", [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]
    ]),
    Z = t("Loader", [
        ["path", {
            d: "M12 2v4",
            key: "3427ic"
        }],
        ["path", {
            d: "m16.2 7.8 2.9-2.9",
            key: "r700ao"
        }],
        ["path", {
            d: "M18 12h4",
            key: "wj9ykh"
        }],
        ["path", {
            d: "m16.2 16.2 2.9 2.9",
            key: "1bxg5t"
        }],
        ["path", {
            d: "M12 18v4",
            key: "jadmvz"
        }],
        ["path", {
            d: "m4.9 19.1 2.9-2.9",
            key: "bwix9q"
        }],
        ["path", {
            d: "M2 12h4",
            key: "j09sii"
        }],
        ["path", {
            d: "m4.9 4.9 2.9 2.9",
            key: "giyufr"
        }]
    ]),
    B = t("LogIn", [
        ["path", {
            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
            key: "u53s6r"
        }],
        ["polyline", {
            points: "10 17 15 12 10 7",
            key: "1ail0h"
        }],
        ["line", {
            x1: "15",
            x2: "3",
            y1: "12",
            y2: "12",
            key: "v6grx8"
        }]
    ]),
    I = t("LogOut", [
        ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }],
        ["polyline", {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }],
        ["line", {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }]
    ]),
    P = t("Mail", [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]
    ]),
    T = t("Menu", [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ]),
    E = t("Minimize2", [
        ["polyline", {
            points: "4 14 10 14 10 20",
            key: "11kfnr"
        }],
        ["polyline", {
            points: "20 10 14 10 14 4",
            key: "rlmsce"
        }],
        ["line", {
            x1: "14",
            x2: "21",
            y1: "10",
            y2: "3",
            key: "o5lafz"
        }],
        ["line", {
            x1: "3",
            x2: "10",
            y1: "21",
            y2: "14",
            key: "1atl0r"
        }]
    ]),
    U = t("MonitorDot", [
        ["circle", {
            cx: "19",
            cy: "6",
            r: "3",
            key: "108a5v"
        }],
        ["path", {
            d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
            key: "1fet9y"
        }],
        ["path", {
            d: "M12 17v4",
            key: "1riwvh"
        }],
        ["path", {
            d: "M8 21h8",
            key: "1ev6f3"
        }]
    ]),
    W = t("Pause", [
        ["rect", {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "zuxfzm"
        }],
        ["rect", {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "1okwgv"
        }]
    ]),
    $ = t("Pen", [
        ["path", {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }]
    ]),
    O = t("Play", [
        ["polygon", {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }]
    ]);
t("Rabbit", [
    ["path", {
        d: "M13 16a3 3 0 0 1 2.24 5",
        key: "1epib5"
    }],
    ["path", {
        d: "M18 12h.01",
        key: "yjnet6"
    }],
    ["path", {
        d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
        key: "ue9ozu"
    }],
    ["path", {
        d: "M20 8.54V4a2 2 0 1 0-4 0v3",
        key: "49iql8"
    }],
    ["path", {
        d: "M7.612 12.524a3 3 0 1 0-1.6 4.3",
        key: "1e33i0"
    }]
]);
const D = t("RefreshCw", [
        ["path", {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }],
        ["path", {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }],
        ["path", {
            d: "M8 16H3v5",
            key: "1cv678"
        }]
    ]),
    F = t("RotateCcw", [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }]
    ]),
    G = t("RotateCw", [
        ["path", {
            d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
            key: "1p45f6"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }]
    ]),
    K = t("Search", [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]
    ]),
    X = t("Server", [
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "2",
            rx: "2",
            ry: "2",
            key: "ngkwjq"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2",
            ry: "2",
            key: "iecqi9"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "6",
            y2: "6",
            key: "16zg32"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "18",
            y2: "18",
            key: "nzw8ys"
        }]
    ]),
    J = t("Settings", [
        ["path", {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ]),
    Q = t("Share2", [
        ["circle", {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }],
        ["circle", {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }],
        ["circle", {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }],
        ["line", {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }],
        ["line", {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }]
    ]),
    Y = t("ShieldCheck", [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ]),
    _ = t("Shield", [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }]
    ]),
    aa = t("Smartphone", [
        ["rect", {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3"
        }],
        ["path", {
            d: "M12 18h.01",
            key: "mhygvu"
        }]
    ]),
    ea = t("Sparkles", [
        ["path", {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }],
        ["path", {
            d: "M20 3v4",
            key: "1olli1"
        }],
        ["path", {
            d: "M22 5h-4",
            key: "1gvqau"
        }],
        ["path", {
            d: "M4 17v2",
            key: "vumght"
        }],
        ["path", {
            d: "M5 18H3",
            key: "zchphs"
        }]
    ]),
    ya = t("Star", [
        ["path", {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }]
    ]),
    ha = t("Trash2", [
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }],
        ["path", {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }]
    ]),
    ta = t("TrendingUp", [
        ["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }],
        ["polyline", {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }]
    ]),
    ka = t("TriangleAlert", [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }],
        ["path", {
            d: "M12 9v4",
            key: "juzpu7"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ]),
    da = t("Trophy", [
        ["path", {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }],
        ["path", {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }],
        ["path", {
            d: "M4 22h16",
            key: "57wxv0"
        }],
        ["path", {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }],
        ["path", {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }],
        ["path", {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }]
    ]),
    pa = t("Tv", [
        ["rect", {
            width: "20",
            height: "15",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2",
            key: "10ag99"
        }],
        ["polyline", {
            points: "17 2 12 7 7 2",
            key: "11pgbg"
        }]
    ]),
    la = t("Upload", [
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }],
        ["polyline", {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }]
    ]),
    ia = t("UserPlus", [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14",
            key: "1bvyxn"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11",
            key: "1shjgl"
        }]
    ]),
    ra = t("User", [
        ["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }],
        ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]
    ]),
    sa = t("Volume2", [
        ["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }],
        ["path", {
            d: "M16 9a5 5 0 0 1 0 6",
            key: "1q6k2b"
        }],
        ["path", {
            d: "M19.364 18.364a9 9 0 0 0 0-12.728",
            key: "ijwkga"
        }]
    ]);
t("VolumeX", [
    ["path", {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw"
    }],
    ["line", {
        x1: "22",
        x2: "16",
        y1: "9",
        y2: "15",
        key: "1ewh16"
    }],
    ["line", {
        x1: "16",
        x2: "22",
        y1: "9",
        y2: "15",
        key: "5ykzw1"
    }]
]);
const ca = t("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    oa = t("Zap", [
        ["path", {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }]
    ]);
export {
    H as $, p as A, l as B, c as C, s as D, g as E, f as F, L as G, q as H, C as I, E as J, u as K, V as L, P as M, v as N, Z as O, O as P, j as Q, D as R, ya as S, pa as T, ra as U, sa as V, U as W, ca as X, M as Y, oa as Z, la as _, N as a, Y as a0, ia as a1, ea as a2, _ as a3, $ as a4, k as a5, i as a6, b as a7, ha as a8, K as b, J as c, I as d, B as e, T as f, x as g, Q as h, aa as i, o as j, n as k, R as l, ka as m, m as n, d as o, r as p, A as q, z as r, ta as s, da as t, w as u, F as v, G as w, W as x, X as y, S as z
};