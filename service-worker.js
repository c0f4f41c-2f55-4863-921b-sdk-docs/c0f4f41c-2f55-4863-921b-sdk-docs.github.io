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
    "revision": "84596ffdc4707b933f39b2372e7eb056"
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
    "url": "assets/js/16.df90c8d2.js",
    "revision": "6938ab27ef2b7a603b3c8d143f879757"
  },
  {
    "url": "assets/js/17.a3d9e177.js",
    "revision": "ab5802c321606f0eb24429bf1c5ef4ce"
  },
  {
    "url": "assets/js/18.fded3646.js",
    "revision": "e5b7d833e6675c8268b68c9515be61ea"
  },
  {
    "url": "assets/js/19.8ba0814b.js",
    "revision": "ee670e73a2062d16bdcdc5ea4b8dc7f1"
  },
  {
    "url": "assets/js/20.55ae3c5d.js",
    "revision": "1622ba988f2ecb7307ec78285ae9b060"
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
    "url": "assets/js/27.c1fd2551.js",
    "revision": "81577ac91fe1bee974ee19919c2aa09b"
  },
  {
    "url": "assets/js/28.f35b4e78.js",
    "revision": "6873d87f0b245bbe44e5c759664f4b71"
  },
  {
    "url": "assets/js/29.6ddcfbfc.js",
    "revision": "d27c804a5fe1590964e7dcc634206906"
  },
  {
    "url": "assets/js/30.7fc4fd46.js",
    "revision": "74b223d2a2e49b2e4c7eb1586476aca1"
  },
  {
    "url": "assets/js/31.be86e267.js",
    "revision": "24425f44d98649a4187c80d61b4ace6a"
  },
  {
    "url": "assets/js/32.15534953.js",
    "revision": "79dc25763d763d34173c32df51ce6b89"
  },
  {
    "url": "assets/js/33.e2d1710f.js",
    "revision": "e0fa2876f9360f05f03a1624c84746f5"
  },
  {
    "url": "assets/js/34.0a8486f2.js",
    "revision": "509cff2b8035c7013377d7f7795a052a"
  },
  {
    "url": "assets/js/35.e373e28a.js",
    "revision": "46777964f57ce9f42502fa415aaad001"
  },
  {
    "url": "assets/js/36.c2edece0.js",
    "revision": "cef419e642245e190596eed0915d41f4"
  },
  {
    "url": "assets/js/37.b577a912.js",
    "revision": "f30fcb90b675ac2dfa3007caf5fa4f26"
  },
  {
    "url": "assets/js/38.0beb38ae.js",
    "revision": "7ad3c368b136b5c09fc94ca9e1539632"
  },
  {
    "url": "assets/js/39.c1df0a61.js",
    "revision": "2c4545e99c8eb867481e9b8098b10abb"
  },
  {
    "url": "assets/js/4.335f270e.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.c23c338b.js",
    "revision": "6cec3d27f12182648a0eca40e35f3d09"
  },
  {
    "url": "assets/js/41.8863d099.js",
    "revision": "9427bfc8a149273b5d28053008caab0d"
  },
  {
    "url": "assets/js/42.95c2c8ac.js",
    "revision": "fa7a49cbe5ee2aea22393f5593e39f5d"
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
    "url": "assets/js/46.ae25bbba.js",
    "revision": "7e9bb6381e6af5fe9303b29fab93c2ff"
  },
  {
    "url": "assets/js/47.5f9a71d5.js",
    "revision": "52e80e4338f491b0fbe3b4dc83228d9c"
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
    "url": "assets/js/50.8eecf949.js",
    "revision": "568fd974f8edbe5058c113e7774e21b6"
  },
  {
    "url": "assets/js/51.fc8b5632.js",
    "revision": "a1ed16c599a51add5a3aa2fd7dce9420"
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
    "url": "assets/js/app.3deb00ba.js",
    "revision": "5da6dfd4a703ca50dc32aeb403685cd8"
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
    "revision": "20676bd7c306a2a2bf207db50d144557"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "fd28c95df85fa9c3f4ccd390f2a83720"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "212b0f44aba72bcda1e9e5a731df422c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "53791a229447a8478d919c97379a1649"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "67ab14956f8d35dad1deaff9f0dcc265"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a70e25f98b193ec749bcf3c8bc2a751f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6690ad1d90724efb6c49474bb6faca6a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b160ed852446e96f664652c22260ef54"
  },
  {
    "url": "guide/index.html",
    "revision": "84ef66f6b73820696fae7a4ca2e95613"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "09ef7d7ca11c09846f72072be5d38963"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "ff3e20e319bd3c39c253e8367fff89f7"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "9344ac80b772dfb1ca530ad856b8876b"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "5b5297e788771c23edd9108aac4c736d"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "87f97b497fe86fafd80d429d131530d7"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "d5c1d6012b0e0b8199b08f115e19fd6b"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "e20ea76ef54cb0508f935035a6234bb5"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "61a4c0a30feb3713f21ad188aa22deec"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "8a3dde29560c6fccee5b8c202933828d"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "503ec944930dda4199bd9f34fc166ca6"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "d0760b60ebd1fe77b425ab1047c0720a"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "63cad02d5fd8fd2590cdaa77ebf71e33"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "8e696f59ecaba9503e461fe04081bf24"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "fb9e62717b7d71040cfe71ed37287630"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "7677648604021de43748fff54ed25125"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "1e6e5514b6d507e4e4d5a06da292e971"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3b077688de99dcf5aa5134fd5530ee24"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "d0c327f8d43fa39bec4ac6f41a9d9d09"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "993ba585a97e18aa9f0bb5486076c9b7"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "09b716210b30a27cfbb8ee6d05493023"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9b5594fc6c847c96c7fd38495d49fe74"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "91e48fc737d226168533a3714665ef41"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "01658871768abbb1c5ccab5344e9a784"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e8de5bec42208de17934e2248d38dd40"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "cc47ac00eec8991cea39f94faaba40cf"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "250262acf982074f503d5b388d0f99e7"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "14488960d6738da358f9a20ad96a1ef1"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "095ff72a547f4d43056f96e1084bd94b"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "271a8f307bbb38cebdbc3796413f4e03"
  },
  {
    "url": "guide/snaps.html",
    "revision": "4c9e301a9db693ba7cce3172e00baf96"
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
