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
    "revision": "14fcc94081a85c70d7b7e63088ec1dc6"
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
    "url": "assets/js/12.240c2fec.js",
    "revision": "dda3101aba8308052cf95de4657aa7f8"
  },
  {
    "url": "assets/js/13.dd906622.js",
    "revision": "33df4c92b7e314d9bc7769a6ffb8746b"
  },
  {
    "url": "assets/js/14.ddf534ce.js",
    "revision": "551424eb268c52544160b32ba75443a9"
  },
  {
    "url": "assets/js/15.466b3bb3.js",
    "revision": "9c436de06b590b8cdd026edee12c0ae2"
  },
  {
    "url": "assets/js/16.a5aa3fcc.js",
    "revision": "62e4c5249c0c980af8d35955f776ef8f"
  },
  {
    "url": "assets/js/17.24eed907.js",
    "revision": "c85b014f7b337fb098de762f47f8e33c"
  },
  {
    "url": "assets/js/18.bcb9499d.js",
    "revision": "1ce81def74bbd4ea89ecb20a68462cbf"
  },
  {
    "url": "assets/js/19.1890ec53.js",
    "revision": "1a7285d68bf91c342d62fb40d54670cc"
  },
  {
    "url": "assets/js/20.5a7cdced.js",
    "revision": "4c7a7e67f829c676c7aac2d2da3035ba"
  },
  {
    "url": "assets/js/21.fa603726.js",
    "revision": "c31c84603934cec708bbf1874f64fafc"
  },
  {
    "url": "assets/js/22.28a47dfa.js",
    "revision": "f52484751b5f9d8413539d5585d65b3a"
  },
  {
    "url": "assets/js/23.20a105ae.js",
    "revision": "dd6e08cf9746e2ebc07a54c5c39505bb"
  },
  {
    "url": "assets/js/24.c34a87dc.js",
    "revision": "72f03e046c96a4cf1764a9fed744cf3b"
  },
  {
    "url": "assets/js/25.63241561.js",
    "revision": "2dafd4cd7a4f410d9441ddf89fb8c38a"
  },
  {
    "url": "assets/js/26.bd170d58.js",
    "revision": "466476980cdfff80052242c62a5dba20"
  },
  {
    "url": "assets/js/27.9ffde7d9.js",
    "revision": "63e40e520eb72f5c2de8e7c1fd6b41b9"
  },
  {
    "url": "assets/js/28.e84576fc.js",
    "revision": "8e03dc86fe5cf21b5a6dda52d8cb157c"
  },
  {
    "url": "assets/js/29.06cdfa74.js",
    "revision": "68864e939a371b08486eff32623f82fc"
  },
  {
    "url": "assets/js/30.94596ccd.js",
    "revision": "f6443e23dc55e07ba6a41419c52e2793"
  },
  {
    "url": "assets/js/31.0135613f.js",
    "revision": "dffc498973a5ca3f48e3812b30a7a05b"
  },
  {
    "url": "assets/js/32.edcd6bd0.js",
    "revision": "067611f4f8c3fad93e4e32eb054c1604"
  },
  {
    "url": "assets/js/33.9cb827ca.js",
    "revision": "535d81b64f0744f055e9146fb0f715a9"
  },
  {
    "url": "assets/js/34.7ae7ed96.js",
    "revision": "dd19dd66c4fbd226d8fe896cdcd2d267"
  },
  {
    "url": "assets/js/35.6d249525.js",
    "revision": "cfbde2bea615d07db6ec996f9ea07202"
  },
  {
    "url": "assets/js/36.e164dcf3.js",
    "revision": "ea6572643540129ba6c7eef50882da4b"
  },
  {
    "url": "assets/js/37.35764c74.js",
    "revision": "addedda0074f53d9a898aa1b29ca38c1"
  },
  {
    "url": "assets/js/38.b8f80fce.js",
    "revision": "aa5d6a1657216df941adf31154bde656"
  },
  {
    "url": "assets/js/39.8faf57a3.js",
    "revision": "0de6e58945822fe2d781c66c05befab9"
  },
  {
    "url": "assets/js/4.cf404e46.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.b0c3ddea.js",
    "revision": "8d5098454e8b83354f8252a5370ff2d7"
  },
  {
    "url": "assets/js/41.3e4981b8.js",
    "revision": "e2b231d40795866d83bb14e467782f60"
  },
  {
    "url": "assets/js/42.6d8f505f.js",
    "revision": "d1688a15d0a1e74e80039de374bae607"
  },
  {
    "url": "assets/js/43.b1c3de9c.js",
    "revision": "3e78eaa6a911795d78febfa47fdebf36"
  },
  {
    "url": "assets/js/44.a2c643e0.js",
    "revision": "2ce6ebef3856468fb096d2843be0fe5e"
  },
  {
    "url": "assets/js/45.b1b83f55.js",
    "revision": "58e1569606031cedf81825912e9c1143"
  },
  {
    "url": "assets/js/5.92ba9df5.js",
    "revision": "6339e93d48d91e7203227d4580876063"
  },
  {
    "url": "assets/js/6.7d919715.js",
    "revision": "fadf5b3ed2fbeb9a2f1c7d91b01f44a0"
  },
  {
    "url": "assets/js/7.dbf6a6e1.js",
    "revision": "e473e47ef85486b4bf51df2810262594"
  },
  {
    "url": "assets/js/8.045baf3c.js",
    "revision": "3f66bb7f10bc095f426f2676d129b6ed"
  },
  {
    "url": "assets/js/9.c0cdc309.js",
    "revision": "78431d4b45b5befb0ffff593b9e7b1dd"
  },
  {
    "url": "assets/js/app.0a870e4a.js",
    "revision": "981ddc36075fb57405183bb1514573e7"
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
    "revision": "7a8f910cdae5c02d1183a97a6846a382"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "cecfa5bf2cfee5fca9ce92286e3dfc34"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b14c9bdb608c2f84ca98d574ae85f321"
  },
  {
    "url": "guide/contributors.html",
    "revision": "d0c942746d855c0905724754d312afb4"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7db771364e3f8f37e6cd394bd5e96d8d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e7332dcf13808826978e4f16e80d1d38"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6f54c2d6b9f13dfd0415f965762947d8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3d14209b8eb415836bff982561cc7bd6"
  },
  {
    "url": "guide/index.html",
    "revision": "158e4bdd34c1d62a53f12b6bacfbdb9a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "320ce22746fc1f2227cd4cc9b5117cb5"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "97799fd9079a08a9ed0eca6bcfcd6718"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "0cc2a0513f25cd7c6f1d2e0ad6319e6f"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "e394ce7b8f7c8dcdcdd97a13319ed731"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "1dadb94efb018cb4d7953d8345d30955"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "30e6d268ed85f8ceb4990ac7b2e13e6c"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "0d92cd09a6420469beb44f8491f626a8"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "f347b29902575e069bcd7834bf3e24f6"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "d53cc7a15535f0a293922cad0e16913d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "ce487f5aadf72c4dcbc93246076284c8"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "584b8b34429529d021298e67e59acd9c"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1055ad5327c9357c846736d97bd7969e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "5bdc4bc20b776c69bf26fdc9ec77a9ec"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "567fb746bf820a171ccfca83381bcae5"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1ffd8f9834a98363696c9f611ef4f3e6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "0e064fc937603b366e31c16f7fb23507"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c81c8cf49df11bccc484dbe417258cbd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2c53ffe09d2489e8430135f9f8e760e1"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "48ea699771506202a2898d141458fb24"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "2906e97c53e730dc26b1aff6fbc4b23e"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "7aca876b96bb4fb5b1a7e2e5ce94cabb"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "801b5e495ef7124d9eb696b63d1ea444"
  },
  {
    "url": "guide/snaps.html",
    "revision": "e2fdfa593a83adfdf0dfd505f8d86d62"
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
