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
    "revision": "ae388c9e0f8f58018ffd96becfdf1189"
  },
  {
    "url": "assets/css/0.styles.fa09ab35.css",
    "revision": "7d1e17401d2dbf4ca056f95868e9981e"
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
    "url": "assets/js/11.9845dae2.js",
    "revision": "29a6cb087b704b98b813685fedb23f9d"
  },
  {
    "url": "assets/js/12.50c4b9ed.js",
    "revision": "d76cc366b3e33dedf49e40b97c45ff88"
  },
  {
    "url": "assets/js/13.4f3209c4.js",
    "revision": "dedb2ea0837cf02ccc3d35e79a964c99"
  },
  {
    "url": "assets/js/14.6ef99665.js",
    "revision": "445ed5b5e5f343db367ed4f10dbbe515"
  },
  {
    "url": "assets/js/15.6932a00b.js",
    "revision": "28d3b242d1a5fae22ead2ab290ada81d"
  },
  {
    "url": "assets/js/16.67300195.js",
    "revision": "868ba83901e3103bebf14788ac77ecba"
  },
  {
    "url": "assets/js/17.8028663e.js",
    "revision": "32f0e701dda918012509b22ed6cfe4e1"
  },
  {
    "url": "assets/js/18.81eed7a1.js",
    "revision": "fa7190d8960ca00be4c5953d9c8c2239"
  },
  {
    "url": "assets/js/19.4db10219.js",
    "revision": "ef8b22792885dce6d025687bafeec76f"
  },
  {
    "url": "assets/js/20.df1ed416.js",
    "revision": "5611e00b5fae46481f2414b6cfb16f3f"
  },
  {
    "url": "assets/js/21.6c3b36c4.js",
    "revision": "5d79a960ad0a23c907ae31db8157b565"
  },
  {
    "url": "assets/js/22.72bece66.js",
    "revision": "01e2c8e6ac1964be2861cb6f1e37674c"
  },
  {
    "url": "assets/js/23.3860f311.js",
    "revision": "dc4e65116f5c6a4b990dc0ce9f4ea821"
  },
  {
    "url": "assets/js/24.3a0c7cbf.js",
    "revision": "fc758de948d14575edf4b6d0b4c595d5"
  },
  {
    "url": "assets/js/25.03afa8f4.js",
    "revision": "faddd7ffbb9702c020a8ef23ff1474ff"
  },
  {
    "url": "assets/js/26.95bbad7c.js",
    "revision": "32a89bc4ce5eaff84a07fdd24e164a02"
  },
  {
    "url": "assets/js/27.5c94a2bc.js",
    "revision": "6d6ca977871fb116dd893bf2412d6951"
  },
  {
    "url": "assets/js/28.f34e394b.js",
    "revision": "357115567f3cdfe8b80e76bafc6ee252"
  },
  {
    "url": "assets/js/29.7b082c70.js",
    "revision": "af2800af506c7e3c4d8f1ba54c66ac09"
  },
  {
    "url": "assets/js/30.9a12cb36.js",
    "revision": "38e2e165114aaa4554d32ae5262660b6"
  },
  {
    "url": "assets/js/31.3c2bcd89.js",
    "revision": "74ea6c55f8b61bc1bc1c07116f969a5f"
  },
  {
    "url": "assets/js/32.edf4b652.js",
    "revision": "a8eead3b923a95f42802638382de4743"
  },
  {
    "url": "assets/js/33.6560afec.js",
    "revision": "b1b957110a9c419b8d0ab56bcad5373c"
  },
  {
    "url": "assets/js/34.26ec1352.js",
    "revision": "753f5c49c671453a823ff39386e07b99"
  },
  {
    "url": "assets/js/35.5120d550.js",
    "revision": "d68f1d494da3a2f880e083337006ec61"
  },
  {
    "url": "assets/js/36.8f3c1cb6.js",
    "revision": "5579b788d5033b31a79bf0add7ee34d8"
  },
  {
    "url": "assets/js/37.239cd286.js",
    "revision": "9ded6e423f52594a51e4422c592729cd"
  },
  {
    "url": "assets/js/38.337a0ffd.js",
    "revision": "339adbf79fe788c1b78129c5a11f9538"
  },
  {
    "url": "assets/js/39.3710a338.js",
    "revision": "91bb2aa26cd625791bf0079305f1c5eb"
  },
  {
    "url": "assets/js/4.7d26e848.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.de0a9818.js",
    "revision": "2f95dfea0a51f66274885d758ffd888a"
  },
  {
    "url": "assets/js/41.c621c2a1.js",
    "revision": "76826fc4867c43347fe34a42d171205d"
  },
  {
    "url": "assets/js/42.079befe0.js",
    "revision": "01e2afa7369885e3b1ff96a24865fad6"
  },
  {
    "url": "assets/js/43.a8c3098a.js",
    "revision": "74b3ed0f9b6cb6281ed77819256ffb03"
  },
  {
    "url": "assets/js/44.98cab5c2.js",
    "revision": "a69f625a54585b4008d4d5da91053ced"
  },
  {
    "url": "assets/js/45.ca9597fb.js",
    "revision": "65658d532cb6378e04fe45322b8af5ea"
  },
  {
    "url": "assets/js/46.2a93b0fc.js",
    "revision": "8a77df59a240eec8572787f11693c5ad"
  },
  {
    "url": "assets/js/47.f40c0c2e.js",
    "revision": "8d4fc0ea7e56f6e68d771c69c5bd6543"
  },
  {
    "url": "assets/js/48.ce440605.js",
    "revision": "c6f4af3c1dbd1553cfb3edddca845ec9"
  },
  {
    "url": "assets/js/49.56137f4c.js",
    "revision": "fc529c758667b2ea625962d454914c74"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/50.ffc18222.js",
    "revision": "746e700b4dc57e02868d433f7032738b"
  },
  {
    "url": "assets/js/51.6736ebb3.js",
    "revision": "bc9f0b3b46b34a1a98095eb35881a85c"
  },
  {
    "url": "assets/js/52.07af7109.js",
    "revision": "b790b326f649b346747e3138d7305bc2"
  },
  {
    "url": "assets/js/53.c7fb5913.js",
    "revision": "afe49321956ed9e6067a7af38cb6a68c"
  },
  {
    "url": "assets/js/54.2c6c36bc.js",
    "revision": "51c1d697ad44cc7be3a62c3bccd42111"
  },
  {
    "url": "assets/js/6.aeeb0e13.js",
    "revision": "f8908256be3957c73ff92c2f15b3f3c7"
  },
  {
    "url": "assets/js/7.ce3ee154.js",
    "revision": "6b68c094f8c48f4a75c75677cea957e8"
  },
  {
    "url": "assets/js/8.29467d76.js",
    "revision": "461d6b7f698f98e73296bc46e5741ab1"
  },
  {
    "url": "assets/js/9.89fc5bd8.js",
    "revision": "a0b310a313c208dcc64d0627e28a479c"
  },
  {
    "url": "assets/js/app.ed15ed9e.js",
    "revision": "3a3960d5341b36b39e42b00da367ad80"
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
    "revision": "dbbe2d5734ab6ddc2d3ba5b73b98280e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "da8f5630e7c376d971045baef94422c2"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ed57aea7ee69d30f204b58455a2ff3cd"
  },
  {
    "url": "guide/contributors.html",
    "revision": "b373b65eac65da954ebe5e6d4dd854a5"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "9e8ab07c78c3593d88b6f5747fac6348"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "9441724c35acd6895f29f433d7683ff4"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c50ccf066769877fcdd09e81f9e1524d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "945e8a9c28cd40d1696b2e1dd5fad351"
  },
  {
    "url": "guide/index.html",
    "revision": "4d59cede074dd3c74090a050ade18cd4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "09049cbb41e37f3b2e504c7be6284ee4"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "76c786c246b086c6c2190e068430d282"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "b792636f31105c7cf4793f37dfdae124"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "4256a2e98f385a1dc6bf29c10a2f0b1a"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "28b86cc7ec9c3754e8ae551b95ed93ad"
  },
  {
    "url": "guide/metamask-sdk-ios.html",
    "revision": "1b616209902b19591c142c961c018e95"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "8c5c5c4403cae761c2ca7b1e2dcc05ff"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "5a115ac9d1514dd887088c4757d8fad8"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "5e11fd5a6da8cbed51b981a24019280f"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "f86e4edd8eb4d670cde526d38305c640"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "a097bed0daa0074cf147e417c43a4ef5"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "887b430c052b0a62ad4d2b89bdaae293"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "695aba636e7f976159f49112cafa5e12"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "fffce1ac57096e06e00ad5ff38824adf"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "92c87e7bc2666545859defd61e0a633b"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "ee352fa52d5f44d9381ebce16b638c3d"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "321fe966f81da76e7e27aeeecef173fb"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "a180ade9fc8e9c263bea7de3be60c55f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f85ae74f286c4def269782304d20d13e"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "3989bcec4527b6907a38368b3154375d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9af0338aae7b7a0fa2e2c1b54cb1ae09"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "34d119139a78acb11244ad79d8f2db4c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "059ff09ed5ccee0556131813206ec4ff"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "88e142139ffaed2d22f8beaca38d2e8d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "6c2e41bfd7b48b6acbf039e124265f52"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "2003298e2343c7d970d53a43fb1decc4"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4e0a5ff295b131a794860eeea113dd92"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "0261d49e4697f4a7954597f92521def2"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "7d1c812b730f041bdc908713e9a6aa47"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "16898bf444493da0808fc9055ad7c495"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "3e3bab7d337cbf15f73a636f969fa80f"
  },
  {
    "url": "guide/snaps.html",
    "revision": "edb0046c1ae85222db20fe00b1f27bd2"
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
