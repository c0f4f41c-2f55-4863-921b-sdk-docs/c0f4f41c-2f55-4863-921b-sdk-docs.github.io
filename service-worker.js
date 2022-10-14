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
    "revision": "9c2befea19b9e743016dd60d3fc9c0df"
  },
  {
    "url": "assets/css/0.styles.196e21d4.css",
    "revision": "f3a4ddc7c9ff72e8a778ed719aefcc31"
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
    "url": "assets/js/10.aa67722d.js",
    "revision": "5fd493d124d1b801bf1f1cd7ccf7f4d1"
  },
  {
    "url": "assets/js/11.f74cf859.js",
    "revision": "98948dee413dfca6c1f257f6807f09a2"
  },
  {
    "url": "assets/js/12.a79da054.js",
    "revision": "548fbe2dfa6984f1ae85f95690728c58"
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
    "url": "assets/js/17.8028663e.js",
    "revision": "32f0e701dda918012509b22ed6cfe4e1"
  },
  {
    "url": "assets/js/18.7a269acf.js",
    "revision": "37fb465a0b9fc9910494dd71374362f3"
  },
  {
    "url": "assets/js/19.4db10219.js",
    "revision": "ef8b22792885dce6d025687bafeec76f"
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
    "url": "assets/js/22.dce1df44.js",
    "revision": "4df4ab2b98264ef6961ee690e7ff420c"
  },
  {
    "url": "assets/js/23.3ff51f90.js",
    "revision": "0d060e6f68acc0c5a06699a0365d4ce2"
  },
  {
    "url": "assets/js/24.b6bb29df.js",
    "revision": "6e4adf7f454b51cd8ddecc8fa08f76af"
  },
  {
    "url": "assets/js/25.bc9683bf.js",
    "revision": "001fdd600b093daf4d1762951c6c9cd1"
  },
  {
    "url": "assets/js/26.721e1e4a.js",
    "revision": "76084eab6638d2516ee4403dd8758561"
  },
  {
    "url": "assets/js/27.aa0dc6c0.js",
    "revision": "3a6f94f4be6ab0e2cea04468b1c131ff"
  },
  {
    "url": "assets/js/28.f35b4e78.js",
    "revision": "6873d87f0b245bbe44e5c759664f4b71"
  },
  {
    "url": "assets/js/29.fa0a21e0.js",
    "revision": "3cbb7dc9e8ff2dfcbb7041878c72fbdb"
  },
  {
    "url": "assets/js/30.23592221.js",
    "revision": "d48b45ed684da872d3214e26a928cef4"
  },
  {
    "url": "assets/js/31.78adebc8.js",
    "revision": "a631240d107e48c76deb351f7f4ac8d8"
  },
  {
    "url": "assets/js/32.15534953.js",
    "revision": "79dc25763d763d34173c32df51ce6b89"
  },
  {
    "url": "assets/js/33.fd17139c.js",
    "revision": "cb86fc0617103d30c4efad1586e82056"
  },
  {
    "url": "assets/js/34.486488c8.js",
    "revision": "ab3651689a4e3b232124043dd1fc5ab1"
  },
  {
    "url": "assets/js/35.e373e28a.js",
    "revision": "46777964f57ce9f42502fa415aaad001"
  },
  {
    "url": "assets/js/36.420fb268.js",
    "revision": "b17f5e4d7279868d0a1ee968b37f5215"
  },
  {
    "url": "assets/js/37.5b4a3af8.js",
    "revision": "c9b24687f6e20b31ad94203a9dc26a6f"
  },
  {
    "url": "assets/js/38.1f674b38.js",
    "revision": "22b60a9d540791741faed133243d4153"
  },
  {
    "url": "assets/js/39.40452820.js",
    "revision": "ea358ed8d7444502950e8609f7ee6981"
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
    "url": "assets/js/42.ec32cfd6.js",
    "revision": "ac6ef578ddbd3d71f75829ef4284fcb6"
  },
  {
    "url": "assets/js/43.74755aaf.js",
    "revision": "d55d415fa40314bfd715f13d373ef041"
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
    "url": "assets/js/9.a3e60a60.js",
    "revision": "f835bc371c8936a3918e4d3014dc079f"
  },
  {
    "url": "assets/js/app.212b6ef1.js",
    "revision": "0bfe8ad5fae82e1e585abadff5eb0b87"
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
    "revision": "a7abac4b88c02f45c50d7d7666f89bff"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "50efc9d284022f25f3966fcfe5acdf8e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "cc6170f8caa60b74b311bef6a3287a51"
  },
  {
    "url": "guide/contributors.html",
    "revision": "e2d50d48867d318a7bf60e960f8ba7da"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "b1afbd71401c7a08bc659ed5759ee704"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "191ff6b3ad3fa5d20c689605f9f551ef"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "8eb0594ec76bfd3920656f9504569c87"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b409fa6825fdcbcebf1a3a2337e3971d"
  },
  {
    "url": "guide/index.html",
    "revision": "12008278b6fd2e2c36644a892977682f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4ea7f52dd3f0760c184e0c78a872c25d"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "22d8a6b74e860d4dad5da0c9b198d703"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "66a5d96bd22f385cda1fc348a3742556"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "c42bf316e189e54457fd3832a5eecf01"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "377b53ed732294c13787657729880b18"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "6ef6e53bea63950664c6345523b490a9"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "b6b8de4bde3f55104961a2d12fba1348"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "fb6316635b1f9f9f30cc3c1324c736ec"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "0eaeef0871288c573c4af4b951af0b24"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "b3860c2c3922035f8d6062b437ad4385"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "87646b5cb21a9efda8d5a0959d0a0cd9"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "9e78737d70f30680ddebd67df19cd939"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "63a3f0ba55c48565a950e150816d06fb"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "e508cde9944bdb1d65bb7bb395b50a4c"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "ca6809a9dc8fa338ac1be5727330c0cc"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "68e2c251e731258bea8d83abda20265b"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0778967ffd24fd7a4dd7788a31a0f95d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "268f388e4408597a5dcdbb74ad0db78a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "5d46dde792482c038c0873ad1628857a"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3910f6bb2f39defd08bb78c2ac9e7011"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "888191f634bdcebb7fe4f8c7d75d23e4"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "5b99f6b9c98ef651d88edbeaec51767d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "9829b4c8423f67543a0e6eda65de8014"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e5fb982c6e5c7df2bdeb554cadb0d69b"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "ac404b89189ac53755dabd0479f9f033"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "e4259a771afdfceaa3a37634f8f6c3ec"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "f2fd65dfc6991730f8c7f2ebb2e58ff8"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "e53b5b62e26b9ca362140d57a81b8f93"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "dbb7d4ae4674d0584eaa424f849cf6e1"
  },
  {
    "url": "guide/snaps.html",
    "revision": "5774de1a42ffbf71ca7845fafb47c1d8"
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
