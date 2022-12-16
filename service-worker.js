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
    "revision": "972d46d4adb88835d97d7141e2e43d43"
  },
  {
    "url": "assets/css/0.styles.220fa494.css",
    "revision": "763a09e1011f6d19f3ca8442126b0e7f"
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
    "url": "assets/img/unity_tutorial_video.b8df28e4.png",
    "revision": "b8df28e4431019fd16d3afd590a955ab"
  },
  {
    "url": "assets/js/10.2ed2ccc8.js",
    "revision": "76729ef06fcde7b7df12c0aee3643887"
  },
  {
    "url": "assets/js/11.dc4b6923.js",
    "revision": "10f3161f1d86b7da8e86301e1cd7d673"
  },
  {
    "url": "assets/js/12.5112ea5c.js",
    "revision": "bb064fa2dbda3677acd63604e45da50c"
  },
  {
    "url": "assets/js/13.be107c8a.js",
    "revision": "2e33a9792bd9329baad8fd164ce2b3ae"
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
    "url": "assets/js/16.e0f57117.js",
    "revision": "05b8262b702704ccb408f464ecd849eb"
  },
  {
    "url": "assets/js/17.c6215244.js",
    "revision": "d9ddc634cc89e0a5c1c9762701507b01"
  },
  {
    "url": "assets/js/18.8e6ad33f.js",
    "revision": "6d58a29813d389d8de7773823515ac3b"
  },
  {
    "url": "assets/js/19.9fafd205.js",
    "revision": "8efdae217dc93f029a62c7e51e40b077"
  },
  {
    "url": "assets/js/20.39025969.js",
    "revision": "9e05365723f47c5623e82be00409f5f4"
  },
  {
    "url": "assets/js/21.fa4839f9.js",
    "revision": "e393e327fa1a69691c28161281f4628e"
  },
  {
    "url": "assets/js/22.7c95d611.js",
    "revision": "c997f04dd3cf9c887e58669ef487f813"
  },
  {
    "url": "assets/js/23.1b8001c1.js",
    "revision": "48bce556f93cec69166330638f1fe4d8"
  },
  {
    "url": "assets/js/24.c555fa0f.js",
    "revision": "9ff95c7cc58fcf6a4489531ff398cb80"
  },
  {
    "url": "assets/js/25.826d31db.js",
    "revision": "612bae7ab2dff0138c4bcb50402df8f0"
  },
  {
    "url": "assets/js/26.9a939137.js",
    "revision": "c29a231c2cad0703eece995df7bd6d4b"
  },
  {
    "url": "assets/js/27.7413bf16.js",
    "revision": "902ba4e5e7d9ebdb9a283198683303a8"
  },
  {
    "url": "assets/js/28.0b06f203.js",
    "revision": "8cb3571ebd0af3793190939dabdb9f1e"
  },
  {
    "url": "assets/js/29.7b082c70.js",
    "revision": "af2800af506c7e3c4d8f1ba54c66ac09"
  },
  {
    "url": "assets/js/30.30b0f297.js",
    "revision": "399b992b210f1d39afea1b36d6935c69"
  },
  {
    "url": "assets/js/31.99c2308f.js",
    "revision": "bef3f269bac8517515c421f6288a6403"
  },
  {
    "url": "assets/js/32.885053d8.js",
    "revision": "ec32aa6d0f77d02747ddd6b34837bf7d"
  },
  {
    "url": "assets/js/33.f150154b.js",
    "revision": "2f5920eeadbe4202be3960683a2449a6"
  },
  {
    "url": "assets/js/34.31d4a2c1.js",
    "revision": "2bedc0b5ccb3cedaf64f5c170c8f7fa4"
  },
  {
    "url": "assets/js/35.39f1d1c6.js",
    "revision": "25e218b39fdb55131f8074f924f48344"
  },
  {
    "url": "assets/js/36.8f3c1cb6.js",
    "revision": "5579b788d5033b31a79bf0add7ee34d8"
  },
  {
    "url": "assets/js/37.f1c47581.js",
    "revision": "2001bd1521201a961d0dba45631ae469"
  },
  {
    "url": "assets/js/38.8efd5066.js",
    "revision": "5190259b002f048ec85fce4bf192c848"
  },
  {
    "url": "assets/js/39.0db087d2.js",
    "revision": "ab7282578cb732462bb7bda8b9fada24"
  },
  {
    "url": "assets/js/4.f0af71a6.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.092aba5c.js",
    "revision": "d30502f82057ed610bb23ea52a02491c"
  },
  {
    "url": "assets/js/41.9d78ecb4.js",
    "revision": "79e216b6d071c3a5dc652a2563633241"
  },
  {
    "url": "assets/js/42.1f851394.js",
    "revision": "1add6d1ebd5e29bed753939f30fcffd2"
  },
  {
    "url": "assets/js/43.4b587fff.js",
    "revision": "f049aa3eb936355cbd40053e4c77d080"
  },
  {
    "url": "assets/js/44.350c36f4.js",
    "revision": "e801ad78fb2028cc1c12f53741f022dc"
  },
  {
    "url": "assets/js/45.51af5a35.js",
    "revision": "bebae7d6be95652ef55fbeb74f31feb1"
  },
  {
    "url": "assets/js/46.2ad96b07.js",
    "revision": "dd0ecb2decd06b78358d3e59cd5b8bb2"
  },
  {
    "url": "assets/js/47.b673eac4.js",
    "revision": "2f75f0fe55487b5a85b7a9d14c5cec5d"
  },
  {
    "url": "assets/js/48.b3a80157.js",
    "revision": "ffab71f68bf1c8b800a1f8192671bf99"
  },
  {
    "url": "assets/js/49.6c0920b4.js",
    "revision": "7d34a7566aba767d30337f9af07c4e9c"
  },
  {
    "url": "assets/js/5.92ba9df5.js",
    "revision": "6339e93d48d91e7203227d4580876063"
  },
  {
    "url": "assets/js/50.03dda090.js",
    "revision": "9c59b1faca15baa4818719e67bab3948"
  },
  {
    "url": "assets/js/51.c5583778.js",
    "revision": "54717be947adee0f3804e4ee6aafd9e7"
  },
  {
    "url": "assets/js/52.5888ddf0.js",
    "revision": "9dac17c6042fbcc3aac1f3ec55a85b70"
  },
  {
    "url": "assets/js/53.b58e32fe.js",
    "revision": "4c309a3539fbcdf996d8c9f0e9e44e89"
  },
  {
    "url": "assets/js/6.3f9a92c5.js",
    "revision": "cead8b01b3fb2d8f4cc1116726d65dc2"
  },
  {
    "url": "assets/js/7.72ab9b7c.js",
    "revision": "4f042bb38b5404f54c48786944db28bd"
  },
  {
    "url": "assets/js/8.045baf3c.js",
    "revision": "3f66bb7f10bc095f426f2676d129b6ed"
  },
  {
    "url": "assets/js/9.c055f319.js",
    "revision": "0ed4f0f3686543d1cef2295e12a7ea30"
  },
  {
    "url": "assets/js/app.bee298ba.js",
    "revision": "f957981abb87b8186479249f0207f760"
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
    "revision": "477996ed0e54b0b74e7828db9d714ecd"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "5d3a812652d04667c67a23c221ad43a2"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5a3d9d05a883c3fa49444bfdafc63249"
  },
  {
    "url": "guide/contributors.html",
    "revision": "fc67f75c8d3b196c8bdf4f340fd57671"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e9556a826d81a363518402fb1550c539"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "219280550aa807cd09c71b134844bfa2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "3ac6f011ac16579562d02a27d8ab321d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ccf7b10478fda81e91711671087c7ba9"
  },
  {
    "url": "guide/index.html",
    "revision": "ba7ec5d9b6421ec383992d3f6f15b59a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3ab699ebc932a447d9908f210b2f268b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "60d4ba322abbd3fa2a69516603ad0311"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "4829fa774296593eba46973674b40ce3"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "064512688f89eec2bba153bc67b7aa13"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "2f494c03355f3ad0ba7805f250a31065"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "a547e466ce53eaefa3e21df5cbc5e32f"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "cbcd5f93ccc4ea20f66244a186300313"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "09538dc46b46f434cfa219c884f8b26c"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "1a96358442ee5881e0b41f40ca1c6315"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "f5987501acf6d555f1ef51eff649c6b2"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "6d4ce196bc0921d16debee5645551610"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "29c610d836c687e37f80c5c01f55ef7d"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "f6e2c897982305562d4e7e2cd28fecc9"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "3ab8dec8e613e2064cf0783350c23f64"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "1cd6025dd66633e9e932c84745dbceef"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "d5567862af55202b6d3d471c14a4ff6d"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "b73c4a76304b00cd7ce40493aeb66972"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a3af3cb0a92c07d9ec58371da7717255"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "34ca74757b32f95a623d19280d5dffe7"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e0414bd0a538f82de6413e96f142381b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "722b4be2df68b60a78ecd78140a1a3b5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "a661df1703fb22a28c02b1eebd270043"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f03dbb27e7bf1a9462b83a0b234b9bdf"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8c406cc3800514dcda8505386c479232"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "910b892ce4aec1cd089c88fbc55ae402"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "595008a22506726f0d4b0ecb7a8ff333"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "992de5de73d48f58c3b233fcfa3b990a"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "01a83e2a4cc77e798623284228bcbf10"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9add025643a061ac35056e8a2dcef600"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "e144c670f7898420f2e2d8d56d49471d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "1470a7aef79932cc52eb2f437c53a9ae"
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
