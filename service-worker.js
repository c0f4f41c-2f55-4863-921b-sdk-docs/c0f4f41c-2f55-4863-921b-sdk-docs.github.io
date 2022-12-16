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
    "revision": "738d09e24a832d8e6afa39e13c33d753"
  },
  {
    "url": "assets/css/0.styles.d1ff4bc1.css",
    "revision": "8fd8abafbc4640af7580a87658cdbe76"
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
    "url": "assets/js/12.65177523.js",
    "revision": "48b94a3314c57171c1d3e864bb7a7541"
  },
  {
    "url": "assets/js/13.4f3209c4.js",
    "revision": "dedb2ea0837cf02ccc3d35e79a964c99"
  },
  {
    "url": "assets/js/14.bed0dd03.js",
    "revision": "0355c3d1061032a10c2e5af7b5b345f2"
  },
  {
    "url": "assets/js/15.9d55a13b.js",
    "revision": "ca30763233832ecbaaf753fe14e62e9b"
  },
  {
    "url": "assets/js/16.c524c1e8.js",
    "revision": "c8cb4b081209648adfb9690541acb482"
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
    "url": "assets/js/21.63a40cb6.js",
    "revision": "1a4632ecc7be58bbb93404c5bd93d2e5"
  },
  {
    "url": "assets/js/22.b5e85d3b.js",
    "revision": "45acdb27cb299b3d58d434e5be7eac61"
  },
  {
    "url": "assets/js/23.b499e770.js",
    "revision": "3fd7e639fac8a4644dd4955396f1935c"
  },
  {
    "url": "assets/js/24.066e95fe.js",
    "revision": "83d44d050c175904b6896acbec38bd11"
  },
  {
    "url": "assets/js/25.943633fd.js",
    "revision": "5b481183a5a35c536ab96456bad3d1ec"
  },
  {
    "url": "assets/js/26.b127727f.js",
    "revision": "0f0426fccb8bc105fd0dd10e2dec4fdd"
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
    "url": "assets/js/29.835d0c15.js",
    "revision": "cfc9350554365c584cb40b03f808bf7d"
  },
  {
    "url": "assets/js/30.969af978.js",
    "revision": "0062e207a8395f2d5567a2f0b06e048f"
  },
  {
    "url": "assets/js/31.112190b7.js",
    "revision": "69e94d7195258d98988824bdc2fe7c87"
  },
  {
    "url": "assets/js/32.76f55c33.js",
    "revision": "c2b7835732c13af924f64d17aba79e30"
  },
  {
    "url": "assets/js/33.4fadff06.js",
    "revision": "0c444f794838851a83ce38c44ad59134"
  },
  {
    "url": "assets/js/34.cfc93e11.js",
    "revision": "4ab59e0f509513004e1d189e317e1d04"
  },
  {
    "url": "assets/js/35.4dcf7a46.js",
    "revision": "433bfabbc96e31f3f7ba929a91851ec7"
  },
  {
    "url": "assets/js/36.f9c7a573.js",
    "revision": "75d397676a210ea99d55dabf0571cbdf"
  },
  {
    "url": "assets/js/37.708e05df.js",
    "revision": "3df3520746069defa4832f54bf750b5b"
  },
  {
    "url": "assets/js/38.65a98d37.js",
    "revision": "689b11c647ca988ae48701099c69d2c4"
  },
  {
    "url": "assets/js/39.621bfde7.js",
    "revision": "9f9f08e4403a93d9967a5cf94c536eac"
  },
  {
    "url": "assets/js/4.7d26e848.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.8cf8a97b.js",
    "revision": "013ef785602b1d6b0114065133b71b51"
  },
  {
    "url": "assets/js/41.3043ea36.js",
    "revision": "ece4f1b72c7b33f70de0f0b47b703e05"
  },
  {
    "url": "assets/js/42.f9a491fd.js",
    "revision": "9d14ad352b01bbfc35b0d582625f141c"
  },
  {
    "url": "assets/js/43.034b41d6.js",
    "revision": "3267b59a93c1c1312a897bbdda048b0f"
  },
  {
    "url": "assets/js/44.8aaf1fe0.js",
    "revision": "0fbebb2aec782dfc283c98b46d7034b2"
  },
  {
    "url": "assets/js/45.bd439b89.js",
    "revision": "c14d81edd7595d1464a6ea6a303cdcbd"
  },
  {
    "url": "assets/js/46.c38e6979.js",
    "revision": "71b48c288e51481d8505a780bc64fbcb"
  },
  {
    "url": "assets/js/47.fa3dc3d0.js",
    "revision": "6ad1e031d4f502263052ea672e1ecb4c"
  },
  {
    "url": "assets/js/48.4a70b18b.js",
    "revision": "d99c18dafd4120e2ff6cc5af65456a45"
  },
  {
    "url": "assets/js/49.3aac3ecb.js",
    "revision": "05d3cc869c1124da3850a439bd4bed85"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/50.ad1590b8.js",
    "revision": "c75600e8e29b6b13ed010316e414dca8"
  },
  {
    "url": "assets/js/51.c5583778.js",
    "revision": "54717be947adee0f3804e4ee6aafd9e7"
  },
  {
    "url": "assets/js/52.78386494.js",
    "revision": "bd0c2bc0377604f1ef120814216c0fcb"
  },
  {
    "url": "assets/js/53.2b9b5c76.js",
    "revision": "ee40bbfd1021cab78871821b623c3b7d"
  },
  {
    "url": "assets/js/6.aeb76feb.js",
    "revision": "0d96ba58acddc8b6d518a3bfaa4250ed"
  },
  {
    "url": "assets/js/7.be02d461.js",
    "revision": "b1c7abfa9fc3a3aa55e2c2faab56ddf7"
  },
  {
    "url": "assets/js/8.29467d76.js",
    "revision": "461d6b7f698f98e73296bc46e5741ab1"
  },
  {
    "url": "assets/js/9.18f0f56c.js",
    "revision": "e09ab3d8bed5c92d60230c38c4ae2532"
  },
  {
    "url": "assets/js/app.e2fdd575.js",
    "revision": "694c5cbce4119b346805bd7bf77ba08c"
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
    "revision": "6acbe9ea25b17d92d61c7d8b67358ded"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7385327826504ad287cc783e2626fc86"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b35fdf3c170098e680928a619c592e9b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "7ea4a70d23bec5fbb3534896be94703c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8765b40c329a24f6bc6670a53ae6253e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "01de83d16592f52af10f4bccee58764c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "786ea31fd1b0ae3c6893b8eb4bd36e4e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c1d2fc6daa9b620ddcccb506da1f1976"
  },
  {
    "url": "guide/index.html",
    "revision": "d0d4c789fb8a5289145bb4f873351509"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d002c1c83ec54dc8c302262024c1b6a0"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "83ca30e6b1fa2db7d99a1bf13355528a"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "ae8b953eb9fc7a9180697d88d047841e"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "acc24c4d404a0a17248426045599aff0"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "9d58c1877a00dd9e3c8a6285a6c22346"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "b0ed332ec0352836b4312c43762c88b5"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "7cf0c35b2d68e4b9274033310b90afb8"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "395a8ec09a84e36f499b6fbc2a97c5d4"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "42d81073eb38ec1a5793771b3b2e144a"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "52480964c97d29c4391fc84f57268508"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "808bbe1d2659f3e9a4304a433c773deb"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "7284ba75bbd4884fbbe7a4becdb298f1"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "aed82e4ffef5b0e9cc22590ee4b66f5f"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "31894330604df9709797c03c92d6c5b8"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "da96a48c45ea138fae0f88e696144b23"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "63abcbfae8f88ed196127429b9ebc692"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "7d87624ee123c104f2e324a88d750815"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "8a512962b855121c8d9904492a030635"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "13ba92303f29a2318305c11326267147"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b33cf91cfd6f9c99b918a1d0911286bd"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "c592b945ec1a32b70546bee730432d98"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ba2c4b9fe4889d6438318009ce64496d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2990c436a6f03b9d4110a3885b6691be"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "e63ee403e9d44adaa4e1c068601821f3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "49a2ab5ce214d4fd12900ef7d28dc935"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "28412a1ad49665e0041b98fdb7fb3b51"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "fa14090925f7e1321227b5658ef6fb9f"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "b54fc40ab725ef216fb8c12b5228d493"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "ede6741f945b96baecdc66468685f5be"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "99fee37f366cedb236d77eff93c6fe10"
  },
  {
    "url": "guide/snaps.html",
    "revision": "f1ba3f108e89ee58a35f9737bf1603aa"
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
