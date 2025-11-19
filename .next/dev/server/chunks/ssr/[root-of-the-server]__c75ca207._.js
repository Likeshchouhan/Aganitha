module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dashboard page placeholder
__turbopack_context__.s([]);
"use client";
const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
return /*#__PURE__*/ _jsxDEV("div", {
    children: [
        /*#__PURE__*/ _jsxDEV("h1", {
            className: "text-3xl font-bold mb-4",
            children: "TinyLink Dashboard"
        }, void 0, false, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 5,
            columnNumber: 1
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ _jsxDEV("form", {
            onSubmit: addLink,
            className: "mb-6 p-4 bg-white rounded shadow space-y-3",
            children: [
                /*#__PURE__*/ _jsxDEV("input", {
                    type: "text",
                    placeholder: "Enter long URL",
                    className: "w-full p-2 border rounded",
                    value: url,
                    onChange: (e)=>setUrl(e.target.value),
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 12,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ _jsxDEV("input", {
                    type: "text",
                    placeholder: "Optional custom code",
                    className: "w-full p-2 border rounded",
                    value: code,
                    onChange: (e)=>setCode(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 20,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ _jsxDEV("p", {
                    className: "text-red-500 text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ _jsxDEV("button", {
                    disabled: loading,
                    className: "bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50",
                    children: loading ? "Creating..." : "Create Link"
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 32,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 8,
            columnNumber: 1
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ _jsxDEV("table", {
            className: "w-full bg-white shadow rounded",
            children: [
                /*#__PURE__*/ _jsxDEV("thead", {
                    children: /*#__PURE__*/ _jsxDEV("tr", {
                        className: "border-b",
                        children: [
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "p-2 text-left",
                                children: "Code"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 44,
                                columnNumber: 1
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "p-2 text-left",
                                children: "URL"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 45,
                                columnNumber: 1
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "p-2",
                                children: "Clicks"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 46,
                                columnNumber: 1
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "p-2",
                                children: "Last Clicked"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 47,
                                columnNumber: 1
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "p-2",
                                children: "Actions"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 48,
                                columnNumber: 1
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 43,
                        columnNumber: 1
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 42,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ _jsxDEV("tbody", {
                    children: links.map((l)=>/*#__PURE__*/ _jsxDEV("tr", {
                            className: "border-b",
                            children: [
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "p-2",
                                    children: l.code
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 54,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "p-2 truncate max-w-xs",
                                    children: l.url
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 55,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "p-2 text-center",
                                    children: l.clicks
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 56,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "p-2 text-sm",
                                    children: l.lastClicked ? new Date(l.lastClicked).toLocaleString() : "—"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 57,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "p-2 text-center",
                                    children: /*#__PURE__*/ _jsxDEV("button", {
                                        onClick: ()=>deleteLink(l.code),
                                        className: "text-red-600",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 61,
                                        columnNumber: 1
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 60,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, l.code, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 53,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 51,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 41,
            columnNumber: 1
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/app/page.jsx",
    lineNumber: 4,
    columnNumber: 1
}, ("TURBOPACK compile-time value", void 0));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c75ca207._.js.map