import {
    r as e
} from "./D-s6PRqiKBLBeb70.js";
var t = ["light", "dark"],
    r = e.createContext(void 0),
    a = {
        setTheme: e => {},
        themes: []
    },
    l = () => {
        var t;
        return null != (t = e.useContext(r)) ? t : a
    };
e.memo(({
    forcedTheme: r,
    storageKey: a,
    attribute: l,
    enableSystem: c,
    enableColorScheme: s,
    defaultTheme: n,
    value: o,
    attrs: m,
    nonce: i
}) => {
    let d = "system" === n,
        $ = "class" === l ? `var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});` : `var d=document.documentElement,n='${l}',s='setAttribute';`,
        u = s ? t.includes(n) && n ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${n}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        h = (e, r = !1, a = !0) => {
            let c = o ? o[e] : e,
                n = r ? e + "|| ''" : `'${c}'`,
                m = "";
            return s && a && !r && t.includes(e) && (m += `d.style.colorScheme = '${e}';`), "class" === l ? m += r || c ? `c.add(${n})` : "null" : c && (m += `d[s](n,${n})`), m
        },
        f = r ? `!function(){${$}${h(r)}}()` : c ? `!function(){try{${$}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${d})){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}${d?"":"else{"+h(n,!1,!1)+"}"}${u}}catch(e){}}()` : `!function(){try{${$}var e=localStorage.getItem('${a}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}else{${h(n,!1,!1)};}${u}}catch(t){}}();`;
    return e.createElement("script", {
        nonce: i,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
});
export {
    l as j
};