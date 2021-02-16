const PROXY_CONFIG = [
  {
    context: [
      "/api",
      "/beer",
      "/beer/finds",
      "/i",
      "/need",
      "/to",
      "/proxy"
    ],
    target: "http://localhost:8099",
    secure: false,
    changeOrigin: true,
    "pathRewrite": {
      "^/beer": "",
      "^/beer/finds": ""
    }
  }
]

module.exports = PROXY_CONFIG;
