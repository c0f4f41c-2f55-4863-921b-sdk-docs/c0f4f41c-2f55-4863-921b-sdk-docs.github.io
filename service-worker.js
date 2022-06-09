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
    "revision": "a72cf4f81178eaebcd7ce2e5a9ef25df"
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
    "url": "assets/js/13.5a79c442.js",
    "revision": "50464fa28aecfbec6387f4a2b42b859a"
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
    "url": "assets/js/25.fc0b056b.js",
    "revision": "c67f98a56a6dca90010f05101f2f99f7"
  },
  {
    "url": "assets/js/26.dec95cc5.js",
    "revision": "8a146c5a81a7b21c8786ba5025c79c6f"
  },
  {
    "url": "assets/js/27.9754f112.js",
    "revision": "991368580df12b7746cba3277e848ac1"
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
    "url": "assets/js/30.ae402e4e.js",
    "revision": "669732ec9b70813b192db439f9639e23"
  },
  {
    "url": "assets/js/31.cdc6f8c3.js",
    "revision": "80666dd03fc2e059ec728d898409c8e4"
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
    "url": "assets/js/34.680b94a5.js",
    "revision": "4340846888ec5a30a52c7fbfcb1f9d72"
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
    "url": "assets/js/41.de56a3fa.js",
    "revision": "a8b716718bedd489e5254c21f6072527"
  },
  {
    "url": "assets/js/42.e5737b30.js",
    "revision": "f41d13ea82db31f06fd313f4f8831287"
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
    "url": "assets/js/app.c34df11e.js",
    "revision": "2823dcaaff38c838ec87a3ba1d35d141"
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
    "revision": "442d0d06db9ec3b4527c163956f58215"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d558e62fee7e9f28e4e61a28e783671a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e49388b1c56e9c5637e937920ee95f3f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "36d73eebe61469152803fa9d2436bc06"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e4d0affb3bda0b656c2c76fb1d0fa234"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "20ddfc2342163b8e6dda15ed9a966157"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "7cb99028d3a7ca3659cf70572194ee55"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b09517c4021b06644e7403f25e2b57bc"
  },
  {
    "url": "guide/index.html",
    "revision": "164334b7b773cd723881367c68bcb36d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a1e5d4eb0188faf402eaeaac0a07eb18"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "859e4e70a1a67a2db463761a9cf24881"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "76db271bf908d8477b47e25260cea0cf"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "93ed9353a5b3ca5bcb624c5d33a0d310"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "caec4a7f40188501d0d5a234f9e0833a"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "0038397a3542df82aaed7b1fa18d4157"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "a2b0ce48a06f338e41853c28c1451acc"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "fff14fc2e58f12acc73fb053b5066150"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3d137ed0edf47b8489ceed821a5d8bd8"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "974b9b083688e57a494fd116e62aef5b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7313e701bd59d2ae41f688d082b8765c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "a1631d20c1238bda28142756612b47a4"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ea1682260af150e7322fdb4486595161"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fc76bdd101420b12c42d96892e10a2b5"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "4822a5f657ec9e21b44ea7194368ac96"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6d2f2ee2652878265f25e68e4d42d6df"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3589c251ac7e21604f6297e5f3f5f126"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "2910acc9a172365c06b81872893c0270"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "071e3d83cc1f9d83594633ad809649b2"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "eb1418f76685a1639b15ddd1f69aa071"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "57e474a72520def800eada94ad97a742"
  },
  {
    "url": "guide/snaps.html",
    "revision": "bdde31a24606d0e36c6fb96004213991"
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
