/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7455446d8efdd24654317334b46f47d0"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/canvas.971cb020.png",
    "revision": "971cb02002686a101f623c37c610e72e"
  },
  {
    "url": "assets/img/sdk-clear-connections.5371800d.png",
    "revision": "5371800d0020f0726e0a8cca40e66eb4"
  },
  {
    "url": "assets/img/sdk-comm-diagram.3472e32b.svg",
    "revision": "3472e32bd762d2f001309da94c0dac8f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be180509.js",
    "revision": "2e2494e6227c667b5d3a893fc261c069"
  },
  {
    "url": "assets/js/11.b0cac00b.js",
    "revision": "84928516a445b3343f2cb1fd0bd8621c"
  },
  {
    "url": "assets/js/12.a79da054.js",
    "revision": "548fbe2dfa6984f1ae85f95690728c58"
  },
  {
    "url": "assets/js/13.61bf4c40.js",
    "revision": "2eabe39c33cd1a7a2698d5e6ec8624cb"
  },
  {
    "url": "assets/js/14.ddf534ce.js",
    "revision": "551424eb268c52544160b32ba75443a9"
  },
  {
    "url": "assets/js/15.4a1d346d.js",
    "revision": "6f2ab264d5067affce65fa1a2a071b4f"
  },
  {
    "url": "assets/js/16.e0f57117.js",
    "revision": "05b8262b702704ccb408f464ecd849eb"
  },
  {
    "url": "assets/js/17.e29f438a.js",
    "revision": "63ea8061ba4ac9652a4cd24bd1aa4460"
  },
  {
    "url": "assets/js/18.eee92b11.js",
    "revision": "8135425b649b4ecf4faf9f1e074f00c5"
  },
  {
    "url": "assets/js/19.94b94f82.js",
    "revision": "0d676ae6ec540b7ae2b83850b2656d6b"
  },
  {
    "url": "assets/js/20.173df397.js",
    "revision": "dc125b6dc5435211cc6b0a3a61176fc6"
  },
  {
    "url": "assets/js/21.677be34a.js",
    "revision": "eae56018be2ab6e7d71ca26194653afd"
  },
  {
    "url": "assets/js/22.62c42bba.js",
    "revision": "1424a77f434557d060d5d1cde8f39cea"
  },
  {
    "url": "assets/js/23.0bf6b4b8.js",
    "revision": "c2c17f01f928325b8062d1ee28b1151a"
  },
  {
    "url": "assets/js/24.ff509903.js",
    "revision": "f8c8ab8be258c644eb188ca17cba0561"
  },
  {
    "url": "assets/js/25.826d31db.js",
    "revision": "612bae7ab2dff0138c4bcb50402df8f0"
  },
  {
    "url": "assets/js/26.dec95cc5.js",
    "revision": "8a146c5a81a7b21c8786ba5025c79c6f"
  },
  {
    "url": "assets/js/27.d4901661.js",
    "revision": "8572c3fe50443bded45b4c55bb8414bb"
  },
  {
    "url": "assets/js/28.d8ee364b.js",
    "revision": "11806ab6de8648ce216ca62129e56769"
  },
  {
    "url": "assets/js/29.13b3e16a.js",
    "revision": "2cc6c2f20401f2590df32a6e1936fea0"
  },
  {
    "url": "assets/js/30.ea380391.js",
    "revision": "2d150e8e934d32d2a69e58d70a5c9073"
  },
  {
    "url": "assets/js/31.8cdb7ffc.js",
    "revision": "c7a14f1d25cb026219d373fc80cfe3bd"
  },
  {
    "url": "assets/js/32.407ffaab.js",
    "revision": "9d85977136a4436fe160e75babe3efff"
  },
  {
    "url": "assets/js/33.172a06aa.js",
    "revision": "f0c47da8cd853a9d400a5f749aa5f36d"
  },
  {
    "url": "assets/js/34.6f04a030.js",
    "revision": "c3240241b7fd999645b37d09de383e5f"
  },
  {
    "url": "assets/js/35.e5c78284.js",
    "revision": "ab9f4d855d9961e340c3315c404728ed"
  },
  {
    "url": "assets/js/36.9dec8501.js",
    "revision": "56e3a9b8ecaeefedc3522ea8e003804c"
  },
  {
    "url": "assets/js/37.3b644495.js",
    "revision": "241c91b72106e20beba6178d5bb17f1f"
  },
  {
    "url": "assets/js/38.e0f5fbe4.js",
    "revision": "06827473d5a2aae0488db61029f533b6"
  },
  {
    "url": "assets/js/39.9aecb0d2.js",
    "revision": "b4e9e80c3517758677b9b90e4c216c8d"
  },
  {
    "url": "assets/js/4.cf404e46.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.16562e59.js",
    "revision": "04fd20d98894f62e8cc1564185de611e"
  },
  {
    "url": "assets/js/41.19e52c28.js",
    "revision": "a7451975b9037b2be20107ea727201ea"
  },
  {
    "url": "assets/js/42.5ce6875c.js",
    "revision": "926f2b921e4c99d39b5589072414696b"
  },
  {
    "url": "assets/js/43.e7abc268.js",
    "revision": "71b1b9505a3b12b2ac2fbcbc246fdcb7"
  },
  {
    "url": "assets/js/44.db640888.js",
    "revision": "53e49cc294d772f4176d758b9e641235"
  },
  {
    "url": "assets/js/5.92ba9df5.js",
    "revision": "6339e93d48d91e7203227d4580876063"
  },
  {
    "url": "assets/js/6.de575d78.js",
    "revision": "a67799b907b2514cb25379987ac13649"
  },
  {
    "url": "assets/js/7.4a88d7c1.js",
    "revision": "31a9a54ffd210609555c4d4dfbe2c096"
  },
  {
    "url": "assets/js/8.6cff39f1.js",
    "revision": "b2e78424e5535c44d83adc420e9eee7f"
  },
  {
    "url": "assets/js/9.6a586f0a.js",
    "revision": "e3b10d73c217a604d84b3f9b519848db"
  },
  {
    "url": "assets/js/app.37663e23.js",
    "revision": "d154f35e30e1d5a6c3f17b5da4d8f790"
  },
  {
    "url": "assets/js/vendors~docsearch.6cb0424f.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "assets/js/vendors~notification.d3c8a3f6.js",
    "revision": "7bc22d6fb5ada409e6b49d6c2a9ca2fe"
  },
  {
    "url": "faq/index.html",
    "revision": "6c0157b8e5669c23341ba14d22db2ddf"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "33401f804bac7eea9e5ce2b8a6e7c816"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "71ee1bc08ae06126638b5145987e5b01"
  },
  {
    "url": "guide/contributors.html",
    "revision": "fe4745ad7aca48c442bfbe1bb1a36b2f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "04902e80dee0e06354d50c136469f162"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7a891fdb592e4c0de2a07478e5dc1036"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b60533a9a7c3cad224071cb07f39ad06"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "180f9b67c47f161c83eec506394bf03d"
  },
  {
    "url": "guide/index.html",
    "revision": "cbc1abcb1254e2a5b4c6aaafe9217d7e"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1fabf3f30cb5e717a186fb0d690452f7"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "b5760044ab1111510c4cf05440920ef5"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "b5e8aba08d40d5c91dc63d063fc08268"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "7a841f212db3dd5277eb83611a782de4"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "39902c40acea38e1cf3cb6a011e0b526"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "f9873a5a15f43f2871f5c4b51cacb111"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "0f6ef48bd5e2a93ae34a89e1b6d3038d"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "46806a85beea8ee5067a7e9b9871a202"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "2f44afd38047d512c0215b1a114471fd"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e608f3b456e8efb610b46c6acdf69876"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "95e3dd75c31e524ad9b307a7a6884357"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ef45118460319737ef441ad5cb33a997"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "af5546cad3de5d341ac225470e17b327"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e5ad1729b4f5b3a0cd97ca8818d6b73b"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "709d508790cb37435a765e54abe255a3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "86951e533702a969f0bfac3e9a13d241"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8727f01dea44689f7263d6a3152d3d57"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "bf321a24a5f950f4d82b754b4f54d8f0"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "67ebe84a8d3fadef5200fdf2c6f52a5e"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "7eae703fc4ceacae2afee293f7c92440"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "930ab62624632ce1d4e7b57ebde069fa"
  },
  {
    "url": "guide/snaps.html",
    "revision": "f81793c77e46cb09eed56a0b35703443"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
