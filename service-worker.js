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
    "revision": "fd231fcf5717e38a090a091472af23b3"
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
    "url": "assets/js/12.0a199323.js",
    "revision": "d7a9e6400ff7fea448ed531fe7d44d01"
  },
  {
    "url": "assets/js/13.3749322b.js",
    "revision": "edfd97a63dbfd3e07cc9f75fea82e7a8"
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
    "url": "assets/js/16.49c55374.js",
    "revision": "388c07a3e066e6c2a4cc68d72751e188"
  },
  {
    "url": "assets/js/17.8c8ad589.js",
    "revision": "af5e575462ed4eb10ee0098eeb833eb2"
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
    "url": "assets/js/20.405ea880.js",
    "revision": "fa4ad6f5ca9379a234eed42a8f89992b"
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
    "url": "assets/js/26.f343c9fc.js",
    "revision": "b9dd8caf3ade16348ef39d62e49687e9"
  },
  {
    "url": "assets/js/27.de40687f.js",
    "revision": "789d162fa04c21e3f89553b1e9ae0abe"
  },
  {
    "url": "assets/js/28.5657862e.js",
    "revision": "62a99ba4e5408ad8d9ada63851a2e5de"
  },
  {
    "url": "assets/js/29.a82ee2cc.js",
    "revision": "39312edfaef597f3d69d2236fa9e668a"
  },
  {
    "url": "assets/js/30.227c58a7.js",
    "revision": "617eeefb2a0f3c9fe2086e6795db2a59"
  },
  {
    "url": "assets/js/31.fa86b382.js",
    "revision": "c1bc158dfe7ceedd8f4f074909bbebe6"
  },
  {
    "url": "assets/js/32.60aa1db9.js",
    "revision": "44c64edbfc57bd6409640f1831581bc5"
  },
  {
    "url": "assets/js/33.0883962b.js",
    "revision": "ca21546f2ab84b346b5593749087cabc"
  },
  {
    "url": "assets/js/34.cbf943a2.js",
    "revision": "2fadb0f5cf391a9990ba0b356a483410"
  },
  {
    "url": "assets/js/35.afc3f022.js",
    "revision": "bedeec8c4ce4a09ea80e0a7b93f12203"
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
    "url": "assets/js/42.41cb3cba.js",
    "revision": "c4cb1a5dea147f1cebb5a1d43b0d8af6"
  },
  {
    "url": "assets/js/43.0c1d1f83.js",
    "revision": "a38cb8cf39fc7a11af64560bb6770102"
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
    "url": "assets/js/app.22d284d6.js",
    "revision": "17e3a43cfc8cb7d3d63b685133463464"
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
    "revision": "98ce4fd3ea21c607ce855372de9384d3"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8f1b65197fdd7ee70443ee7746152097"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c70b35578d1ce6fc0e2fdad2685e9c09"
  },
  {
    "url": "guide/contributors.html",
    "revision": "96f5b56ba4d86b2ed3de6643707d118f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7e4bd9d985bd6d84ddfbf4d46e07cc1a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4876a86d04d8fbbb7465d50ca6430ed0"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "020b7049ada997dcc5edf398844d8658"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ba5ac647f306b7f60f70cf24443ccd1a"
  },
  {
    "url": "guide/index.html",
    "revision": "b31f588ea34eb92ea8c2bbe4fb972888"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "391632bccacf07fba7fe0696b5750532"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "2dcf61961010a51bd60a23910f26d892"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "457e418493d30ddc68969f6b8cb65393"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "360db37937303c860b3ccb5154d3e839"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "60e4b183018a6c25fc37209f79997bac"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "76879622f6c24ba43284d15a18407762"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "b177989c84a70d7e7a08196808c7a35c"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "363f7a022e223b9ab91e4b6e8467578d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "54dcfe593a9a1de47444f1af0e86fa91"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "774b51caa767a03fa464cb173c1c6bfb"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "76dfc940c1ab2c6ed543c6618fdbf8a0"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "be6e611f3bf8b62f1a3dd0566a74ba76"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "7c48509c2761592c862da2c460e036ba"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f9b9933d27bf659a624680b0014181fc"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f8907b173c385334f138650bbcc38e7f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "acb3de11f629e1d3376023385cf9bc65"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "321bbe5b5561635968ca8a001635f19a"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "7660eb0a5a74255fbde7ee353da154d9"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "254fb8d07a062722eaddac64fd122708"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "84a3cf156f2571673dd39804bc6e7b0a"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "097be41006a5aea8211a5216ccca3505"
  },
  {
    "url": "guide/snaps.html",
    "revision": "a387b6597385208584ce13a158a57ee6"
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
