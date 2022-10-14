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
    "revision": "e20105603370125133ed8221ec8bd813"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
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
    "url": "assets/js/10.8c75f070.js",
    "revision": "a9eabeef11f8ee33829d3788ac07aa9f"
  },
  {
    "url": "assets/js/11.f74cf859.js",
    "revision": "98948dee413dfca6c1f257f6807f09a2"
  },
  {
    "url": "assets/js/12.4f8c38cd.js",
    "revision": "c62dd3c1478faa50336303875f6bd8fe"
  },
  {
    "url": "assets/js/13.4f3209c4.js",
    "revision": "dedb2ea0837cf02ccc3d35e79a964c99"
  },
  {
    "url": "assets/js/14.99cba7b1.js",
    "revision": "132fa818b53c6b3c4ae99d389292384d"
  },
  {
    "url": "assets/js/15.c025855f.js",
    "revision": "a451607350e78e4da52e1f2a710d858c"
  },
  {
    "url": "assets/js/16.e8db1a57.js",
    "revision": "f6b0bec35f3f529c5faaaf066b761fc2"
  },
  {
    "url": "assets/js/17.de98626d.js",
    "revision": "3b08b7374168c3f1ad7da34fba77fa7e"
  },
  {
    "url": "assets/js/18.31ab7319.js",
    "revision": "b603953c889667e6d25a3b732cb8056c"
  },
  {
    "url": "assets/js/19.41550a32.js",
    "revision": "5c9f53fb71ee85e49627f0baf91e9fcf"
  },
  {
    "url": "assets/js/20.dc4a55b7.js",
    "revision": "7bb17b170f4ca25d040cbf88deb43bb4"
  },
  {
    "url": "assets/js/21.3fe4807b.js",
    "revision": "47330977afefb973e6f07abed2aa8df7"
  },
  {
    "url": "assets/js/22.9dff99c9.js",
    "revision": "524e4f4d4f83caf4a7f6c6a682e751da"
  },
  {
    "url": "assets/js/23.04557df6.js",
    "revision": "3c3d52c3e54459cb670c252f6b73f240"
  },
  {
    "url": "assets/js/24.098ad2f0.js",
    "revision": "e99c4637e9dd3b8f3ee92ca97d7d6de5"
  },
  {
    "url": "assets/js/25.d444c23a.js",
    "revision": "cdcca44ca21924736d137501e0d758df"
  },
  {
    "url": "assets/js/26.740d9f23.js",
    "revision": "25b6713e3c773d55d4b6ca229d06f50d"
  },
  {
    "url": "assets/js/27.57ab9009.js",
    "revision": "932d5c21e79ca8cdc1f2e38922ee3604"
  },
  {
    "url": "assets/js/28.f393274f.js",
    "revision": "56ca8032f731d0ca6b73331ff147cedd"
  },
  {
    "url": "assets/js/29.a35d8ef3.js",
    "revision": "d58d284d764e4bd8be0238367ed73ab4"
  },
  {
    "url": "assets/js/30.23592221.js",
    "revision": "d48b45ed684da872d3214e26a928cef4"
  },
  {
    "url": "assets/js/31.2e1ef9df.js",
    "revision": "d5c79793a003bf25015e5ad000a83cc0"
  },
  {
    "url": "assets/js/32.ab5b80a9.js",
    "revision": "4d608303f551f20e1f9fbbae97192e2b"
  },
  {
    "url": "assets/js/33.e2d1710f.js",
    "revision": "e0fa2876f9360f05f03a1624c84746f5"
  },
  {
    "url": "assets/js/34.e2c295e6.js",
    "revision": "ea561098acf55c9b1284c30b50ab3c17"
  },
  {
    "url": "assets/js/35.e527ed60.js",
    "revision": "92315d7c876c0f3b9febe24348828f66"
  },
  {
    "url": "assets/js/36.c2edece0.js",
    "revision": "cef419e642245e190596eed0915d41f4"
  },
  {
    "url": "assets/js/37.5b4a3af8.js",
    "revision": "c9b24687f6e20b31ad94203a9dc26a6f"
  },
  {
    "url": "assets/js/38.0beb38ae.js",
    "revision": "7ad3c368b136b5c09fc94ca9e1539632"
  },
  {
    "url": "assets/js/39.584ffe0e.js",
    "revision": "312c01eb896984ab8ec8b4f93cfe0fb9"
  },
  {
    "url": "assets/js/4.335f270e.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.d5385be9.js",
    "revision": "3150d4a441b54616e24e3d64a0c93fe3"
  },
  {
    "url": "assets/js/41.d122e261.js",
    "revision": "a98416452e1de79d142b4d17beb164bf"
  },
  {
    "url": "assets/js/42.6bca3c39.js",
    "revision": "6e8b958b3bf5c7eb90181a0ab2628246"
  },
  {
    "url": "assets/js/43.6ab69fd6.js",
    "revision": "fcba3a89d863fd18f64d04d702c32756"
  },
  {
    "url": "assets/js/44.36d9af58.js",
    "revision": "17e50b273e94dd5a89e4843b704ea36e"
  },
  {
    "url": "assets/js/45.04d5c7ef.js",
    "revision": "25d9da94c51057988864be2ca0e6dd20"
  },
  {
    "url": "assets/js/46.0f1733dd.js",
    "revision": "fa8936c8ce1dcf195ed56fc9261c656a"
  },
  {
    "url": "assets/js/47.7f973334.js",
    "revision": "cca458cba5f2fbc48868f35abdcc24a3"
  },
  {
    "url": "assets/js/48.ce817cb2.js",
    "revision": "b614f56f6b12382aa2bec3c8e3439e3e"
  },
  {
    "url": "assets/js/49.17c57319.js",
    "revision": "e2d5ff7e95f89852b0b538eecb683663"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/50.e084d803.js",
    "revision": "342eb2f7e7faa9410be8c454f595d0b5"
  },
  {
    "url": "assets/js/51.5ebfd1ab.js",
    "revision": "8173b6c1e394f44c0cabeb29cea6d322"
  },
  {
    "url": "assets/js/52.d6cc6a34.js",
    "revision": "f7fa90696d7c0c1cd31f854151e665bc"
  },
  {
    "url": "assets/js/6.408b7a4e.js",
    "revision": "f134cf5e3d99eea6a4ed24c7ac5b6c58"
  },
  {
    "url": "assets/js/7.2abaf22c.js",
    "revision": "ba14d26f7d37981c99ffcf173d3f2ec6"
  },
  {
    "url": "assets/js/8.29467d76.js",
    "revision": "461d6b7f698f98e73296bc46e5741ab1"
  },
  {
    "url": "assets/js/9.a901d6e4.js",
    "revision": "cb37366959b3927625011c72f277cdb1"
  },
  {
    "url": "assets/js/app.1f9d9f27.js",
    "revision": "5f084a37807382219818d84dbc721957"
  },
  {
    "url": "assets/js/vendors~docsearch.02b45572.js",
    "revision": "f5f3a74ff3aa6a503d72919490ac7a67"
  },
  {
    "url": "assets/js/vendors~notification.a9caabb0.js",
    "revision": "572675a5d71ac99ae57daae40bc30654"
  },
  {
    "url": "faq/index.html",
    "revision": "4521cdb09edd84afa61aa63b7fe1fdf8"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e31018f46eb8b021c882cdc590c30e18"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "2f9beb55d63d5c32d1846e1c7196083f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "af0fc6435ebe76e70481c2c04aa98ffc"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e847215402e507a7b867c037f36098bf"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "db40842804ddbb5f09204867005458ce"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9bd9775eda0816dc831c06c34a0ea7b7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1b0c0ef64f537dae709a2933ba39e256"
  },
  {
    "url": "guide/index.html",
    "revision": "b000edee209746fd96acd3fa153169fd"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a18ff3c3dc37cd8e054e2449bef9aae4"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "6205701135e14f29de35705eebaa93fa"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "4b4c3524acd4aa6040c31dab5096d828"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "9a8ccac79d788a1a975868c388bf69f6"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "211618179dbdabbff67ae856ad3db925"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "b66a30ed670e17e3bef7cbc08e53b51e"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "bdb3828489ec7828adf37faf11930e1f"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "458439067aa3fc9a0ce375b0a665f6c8"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "7031628ef45d42aa7797e2ca85f788e9"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "80898e051ece2e338c2c00c7686a658e"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "45f100113899f3bafa2ce1cc4de2edd5"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "ee9a61bbe65b4cb0fb8032b28c26a57a"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "b3f39e7d901f74802187a421d08e7cbd"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "4800d8d9245ede48b128f80d46e51b0c"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "ac1e493fdc8ec7104aad83edcef66dc1"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "fa3e1e718c3d43c38f19c27fa20c5cce"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e808c1d06e7034d981f161b4f6fe6f04"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "238c79f0d8f90305138518449941594c"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9a1d1ac9ffa5f5c31316bc3440715ab6"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "be6e01cf3db5c0202b2de7f8335dc8ce"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "305066743cbada023bb9ec5a8b397fae"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "38f3b207d2b0ee23f94e8aa8408543f2"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c56c93b0090904cda4df661975ff53ba"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "3cc1a606b0e1c8dde062f041de097d28"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "07d0b169a2938ec983a0688856a868b4"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "8e14010cc3b72a13cf2eafbc1b35a2c9"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "68cfb7f40a826b6b400c744f8b942465"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "f433d7ea04abc4649bf17ff0e8e446d9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "c4d94707b6957c762daf3ae60e48c96f"
  },
  {
    "url": "guide/snaps.html",
    "revision": "87d13d767f6b218263db75cd87cc2320"
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
