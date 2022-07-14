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
    "revision": "5fb8490ff30adf7e6ff32f18b122394d"
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
    "url": "assets/js/12.4f8c38cd.js",
    "revision": "c62dd3c1478faa50336303875f6bd8fe"
  },
  {
    "url": "assets/js/13.35e8b71a.js",
    "revision": "609e6d236d08c1c4e7e50e8769b6bc47"
  },
  {
    "url": "assets/js/14.ddf534ce.js",
    "revision": "551424eb268c52544160b32ba75443a9"
  },
  {
    "url": "assets/js/15.c7b73da8.js",
    "revision": "92e4e04b57f9076fcfeb9c85fde7f17f"
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
    "url": "assets/js/18.319b1fb6.js",
    "revision": "ec1a0ecf43cb0e657dc7dc6411439f81"
  },
  {
    "url": "assets/js/19.05927656.js",
    "revision": "8988e0eebcbb9ab1e8e4b0115fceda97"
  },
  {
    "url": "assets/js/20.66b122a7.js",
    "revision": "37786574c6d61db689d1d16abc3f9723"
  },
  {
    "url": "assets/js/21.22fa2326.js",
    "revision": "5e5f85c9eae38fdcca27f706b840a3eb"
  },
  {
    "url": "assets/js/22.62c42bba.js",
    "revision": "1424a77f434557d060d5d1cde8f39cea"
  },
  {
    "url": "assets/js/23.493f52e6.js",
    "revision": "8e725fe4006c1c145c436d86f541e916"
  },
  {
    "url": "assets/js/24.8fb574de.js",
    "revision": "be099918a6f21e6d24313ae99f6a49d1"
  },
  {
    "url": "assets/js/25.2a75c305.js",
    "revision": "4180e97acebc2ff3c3472d0074913687"
  },
  {
    "url": "assets/js/26.69ad9a2e.js",
    "revision": "0f203fef4eb2ec4a0a98ccabf117c212"
  },
  {
    "url": "assets/js/27.1ea322bf.js",
    "revision": "b26be0dd9ae0b479993e66142fe8ff95"
  },
  {
    "url": "assets/js/28.be5e87bd.js",
    "revision": "9cad7369c9f5f833ef12f0516e49abe3"
  },
  {
    "url": "assets/js/29.a82ee2cc.js",
    "revision": "39312edfaef597f3d69d2236fa9e668a"
  },
  {
    "url": "assets/js/30.c6c070b0.js",
    "revision": "ed3c481b6059646e59498d0ab6869b21"
  },
  {
    "url": "assets/js/31.6320b491.js",
    "revision": "20cedc3cd3cc6b621b16521c45e14a5e"
  },
  {
    "url": "assets/js/32.326afbe5.js",
    "revision": "32f1743db4b1c51773b32919468ae4b6"
  },
  {
    "url": "assets/js/33.d8707b53.js",
    "revision": "91488a3e3dd9bd5c3a4e73e30b84ce7e"
  },
  {
    "url": "assets/js/34.bc7b9ac9.js",
    "revision": "c20f4af15828ca3684a6c5653bd45294"
  },
  {
    "url": "assets/js/35.e9d9c81d.js",
    "revision": "0d8592ce85ac28d3fd29d366fcede6b9"
  },
  {
    "url": "assets/js/36.7d58cb23.js",
    "revision": "27e279a360d6779db907dde4efa87acd"
  },
  {
    "url": "assets/js/37.75832264.js",
    "revision": "9ddf0a9a57ba8975d5233bc95c1a7e5f"
  },
  {
    "url": "assets/js/38.b8f80fce.js",
    "revision": "aa5d6a1657216df941adf31154bde656"
  },
  {
    "url": "assets/js/39.ac89f894.js",
    "revision": "7e500cf9f7d60cdf8c778275945e0291"
  },
  {
    "url": "assets/js/4.cf404e46.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.3fb6e89e.js",
    "revision": "dbed274a238bdf41cf2b92cb932edd96"
  },
  {
    "url": "assets/js/41.40bc8896.js",
    "revision": "0485380700abd7035088c5651bfd431e"
  },
  {
    "url": "assets/js/42.b5269ae2.js",
    "revision": "1b271391c0ed85493b8eb8dd295e0089"
  },
  {
    "url": "assets/js/43.fd132234.js",
    "revision": "c62e663198c8925408db1aef82448a51"
  },
  {
    "url": "assets/js/44.185c94c8.js",
    "revision": "22fa1f16a1e7e728b3c2413f414fa753"
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
    "url": "assets/js/app.294577be.js",
    "revision": "1eb0620ddd86abbe740574d7c244293a"
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
    "revision": "34774e21e90ca4c48f9979e50448f3a4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ec4ef2b09ab11f7c624eae6c29e14ee7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "298c605d682d24845e0ce9303569906f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "9c79e44e5e6586a3712ea2467fa06831"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "63b910224052e729d907e590c91611b1"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "15ec0053494a265b21de7433cafd0db1"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5b93ac204dbfaf3b5553dd7ca7aac4e7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6ca4f462cedb1cad5603d50dcb977489"
  },
  {
    "url": "guide/index.html",
    "revision": "83fa3bae475f2544e36f84e19aafd64e"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ac537f55e9ca55dd2940c4f0919733e0"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "b281ed4f8202de7849eb5cf2e836645e"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "d91fcd4bf349d72ab1e4a2b04d27aca3"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "3ce624805f85c1f940ed95534863157a"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "3b9107033f4af17f9315d5ed2c2f5568"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "404838eb4c79571d47e1cff6fe213041"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "bdbd1168df639551a3c14774dd271354"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "a3b9ae62b6cefc480a6cbc4310f824f7"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "672669d8a2925ec072da48ceffe3b27a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "bce4761d3591ae12169348b44bdf45da"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ceef48d15161e9f0adef6ddfbd8f6447"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9422c3af6f5d491f13917a77f8b3e4ef"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "6d49b76e0bf548bc3205a005b0a639a2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4a47fd7d40a6adf934968e3cd4a7a4b2"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c2394c6207e2482c7ba3dc2da9559af9"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c5bd147180bbc6d658bf8d4d946378ff"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a45e7be8f1ea680e2424a2b687fc5f2d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c54d74d483408d5de763b45981afc56d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "cec95912bcaa079ec66f6e15c40aaa39"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "747119eb593f07d140bd03c8ba80e2aa"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "787444fe85fc436b073ca8118af7d06f"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "637f3600858a3a4aee61827c5cdba318"
  },
  {
    "url": "guide/snaps.html",
    "revision": "004043fb7b3663f17e9b774615b5fb2a"
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
