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
    "revision": "94392e6907d9d262c8da98b4b7b03200"
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
    "url": "assets/js/13.d79658ea.js",
    "revision": "e2a7acef270949b1a2679d90e59d7cad"
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
    "url": "assets/js/16.e46d19b1.js",
    "revision": "af56eac17c6261709a8de25fbc109ee9"
  },
  {
    "url": "assets/js/17.0062d511.js",
    "revision": "262288e77fe83d53a08720dab1ea511e"
  },
  {
    "url": "assets/js/18.bcb9499d.js",
    "revision": "1ce81def74bbd4ea89ecb20a68462cbf"
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
    "url": "assets/js/24.c64d5d30.js",
    "revision": "b2bb20491c8f35d5662194312b4874c0"
  },
  {
    "url": "assets/js/25.2a75c305.js",
    "revision": "4180e97acebc2ff3c3472d0074913687"
  },
  {
    "url": "assets/js/26.fb43346f.js",
    "revision": "a710dff3795f2048e43b11daed173965"
  },
  {
    "url": "assets/js/27.db6b3a31.js",
    "revision": "5ab67906e6c74650c1768040f5fddd65"
  },
  {
    "url": "assets/js/28.5657862e.js",
    "revision": "62a99ba4e5408ad8d9ada63851a2e5de"
  },
  {
    "url": "assets/js/29.13b3e16a.js",
    "revision": "2cc6c2f20401f2590df32a6e1936fea0"
  },
  {
    "url": "assets/js/30.1506d86e.js",
    "revision": "e4de3abd4bcb05cbbe540750118ae6f9"
  },
  {
    "url": "assets/js/31.cdc6f8c3.js",
    "revision": "80666dd03fc2e059ec728d898409c8e4"
  },
  {
    "url": "assets/js/32.e5ee9c0c.js",
    "revision": "25f46d8927a61e508b323c49bba030e6"
  },
  {
    "url": "assets/js/33.dba9aa07.js",
    "revision": "51d83ae6399ab7dc4ef5362114af0b94"
  },
  {
    "url": "assets/js/34.2e8942b6.js",
    "revision": "1193146162e62d0e2a458ad90920a6c3"
  },
  {
    "url": "assets/js/35.f9998a95.js",
    "revision": "3c52ca0ea327118d7132bbb6791451f0"
  },
  {
    "url": "assets/js/36.0ee6e91d.js",
    "revision": "46af703a64761ff821a572479b1eda0b"
  },
  {
    "url": "assets/js/37.63dd64ea.js",
    "revision": "12fe9cdd1d68a83044d44dba98464330"
  },
  {
    "url": "assets/js/38.0a0b7784.js",
    "revision": "82321cab35e3c0126559dd5dbe0fdf62"
  },
  {
    "url": "assets/js/39.32fbeaa1.js",
    "revision": "bc692f5a73c600bff05191a697bbc592"
  },
  {
    "url": "assets/js/4.cf404e46.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.9a84a952.js",
    "revision": "20200b618653419a27ae6c9444e30f07"
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
    "url": "assets/js/app.024f687b.js",
    "revision": "5b999003a6c830120093ea5c94de3321"
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
    "revision": "371d9a8dc7df5784a6eb6c3b51bfcd4b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "39f05b675a31dbfdc5fd8755e215579c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "934eea375632fb54f13def1e1026ec5c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8377e0513f93d66584392c6712ab2165"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "64b135f404208b592c6a1c1b116d6271"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ac1ff545db13a0e62533220d679ad7f9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9ff93ebe79cf72b6f22cd891af99b604"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "278cb758ea4e4079d7107c99fb407c80"
  },
  {
    "url": "guide/index.html",
    "revision": "93b0bc3950a2b64db35592021e37d6f6"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3aede922ce202aabd5beca295f6d511d"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "6d7223d5477068eda70eee8d2ae729ee"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "ec571691467b41277cf15452a428ebb5"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "1507d33ad3bcf604b68a47a516aee73b"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "63b0d7e333f3f3f7fd884317d75c98d5"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "55e81ebd8d2a00bdf800953840a38e27"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "283c61fe3b7c4af190c1bdd10e5c9865"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "f2d974f2ebc4d581eb89d47a001cfa82"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "21e5efa8b4d6c82f6f12dfabbe35ddaa"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "1778f36f7d9a3fb6c6a5db3abb94d7b8"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "62b7e6e973d1878a5d62ba98831512f2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "31b8b80ddae4e295aad3ae3907b76f13"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "09468ef9716f73bd55cebdbf74b608bb"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d9b381fab32f9f6806e115904c09f516"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c686828d327323075573a0beb041c546"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "1b0a418122fcc697e4ede07275cfa172"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c4a92680d3ffd760fd2cb669165809ed"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "60f753f376bcdb25ecc56645da378fb1"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "76f752dfdcee28a94dabe08c3aa66fd9"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "25af41f054432eda3efa77898581ad8f"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9a2e57d18205c37a9ba7a406537b47f8"
  },
  {
    "url": "guide/snaps.html",
    "revision": "c775d4ba70926154b7b0dbfe5ba36bc7"
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
