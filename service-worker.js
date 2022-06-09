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
    "revision": "2eb337a470dd30c03ebfe11beca1a0e3"
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
    "url": "assets/js/13.68be7a63.js",
    "revision": "69947255f95c0f177329e71715a8abaf"
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
    "url": "assets/js/19.b8c04f53.js",
    "revision": "40e52969dab986a5873cd1aa54272333"
  },
  {
    "url": "assets/js/20.405ea880.js",
    "revision": "fa4ad6f5ca9379a234eed42a8f89992b"
  },
  {
    "url": "assets/js/21.22fa2326.js",
    "revision": "5e5f85c9eae38fdcca27f706b840a3eb"
  },
  {
    "url": "assets/js/22.28a47dfa.js",
    "revision": "f52484751b5f9d8413539d5585d65b3a"
  },
  {
    "url": "assets/js/23.82594df7.js",
    "revision": "5dc271d1bf53aba9ef1a615ea78eba67"
  },
  {
    "url": "assets/js/24.8fb574de.js",
    "revision": "be099918a6f21e6d24313ae99f6a49d1"
  },
  {
    "url": "assets/js/25.05d5060b.js",
    "revision": "128f869e7e9474f3afb9d490577c71fa"
  },
  {
    "url": "assets/js/26.14f730a9.js",
    "revision": "4908392a84bd91a6127df19783010d46"
  },
  {
    "url": "assets/js/27.6a6f7a7e.js",
    "revision": "abac6eaad8b0d199d88b3ea668fa2cdc"
  },
  {
    "url": "assets/js/28.897ad92d.js",
    "revision": "a3b876baf97e0077c9f7b14a259766f1"
  },
  {
    "url": "assets/js/29.06cdfa74.js",
    "revision": "68864e939a371b08486eff32623f82fc"
  },
  {
    "url": "assets/js/30.227c58a7.js",
    "revision": "617eeefb2a0f3c9fe2086e6795db2a59"
  },
  {
    "url": "assets/js/31.1589ee22.js",
    "revision": "38e64090055ade3f10ba616dbc334557"
  },
  {
    "url": "assets/js/32.e5ee9c0c.js",
    "revision": "25f46d8927a61e508b323c49bba030e6"
  },
  {
    "url": "assets/js/33.0883962b.js",
    "revision": "ca21546f2ab84b346b5593749087cabc"
  },
  {
    "url": "assets/js/34.27f698b7.js",
    "revision": "4ef51376b26c997b167dee78c4e68a7d"
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
    "url": "assets/js/37.1a4e0168.js",
    "revision": "709e70f0bfdab17f234b2d95ae11b161"
  },
  {
    "url": "assets/js/38.834a461f.js",
    "revision": "6ccaa05b0192b0a8f44022ea10ada23f"
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
    "url": "assets/js/40.aa9929a5.js",
    "revision": "bac1bcd1ae82e15eb2305770a9b9cf12"
  },
  {
    "url": "assets/js/41.fd265bfd.js",
    "revision": "5a98b000bb1631146e11dc7268e6f460"
  },
  {
    "url": "assets/js/42.e5737b30.js",
    "revision": "f41d13ea82db31f06fd313f4f8831287"
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
    "url": "assets/js/app.b31bf0dd.js",
    "revision": "0490912d262a07f559eaae88e10138b6"
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
    "revision": "8145c153db4cbf1c43482ae871e71516"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8038ef2fbe4bde99343a7b87be927265"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "aaaa11dc3ba56d0fb87fe2c8b56422f8"
  },
  {
    "url": "guide/contributors.html",
    "revision": "db375b6be19b1416022343a7ac4a20d7"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "9c96a4f7c701ccacdad7f4cfacbb4d73"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4a29526503fc241968c3bc7a5cda883b"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "f3b3c57769307824100394e2845932ec"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f6cd6fdda7b3bccf5e27d0a19744fd22"
  },
  {
    "url": "guide/index.html",
    "revision": "b0f4d8b6928eab434ef76d6d2b9c658a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4558dd1418e594474e7ff2f725d2323f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "39320fac57a76eed48272711d89734b5"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "4b95f60628404162f2be2e360ea140f8"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "caef2574b528f2853f9b0779a2b85b5a"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "26e28b93bca55a292cd25121d4a4a083"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "c6ba2aa9c9c24655dd63a81c76f26d7c"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "f59139fc7014553a8d338c253546ac09"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "59370c7acfa11bcc58f63a41f40a70de"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "970ed159ca122fe4e42612665124dd81"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "35e5e78c272786aff8cf65a18701e8d5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "82cfb7f9cea29b5f3ec1ac8545761975"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "578cc7173fe6e72fa506b2534e58ca6e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "7042835217f635b9548ff66ea3c5ea59"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1310262d1bc7cc79aea4236561ba4804"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "3cfc0e6e2c5d0e682d7b902dd6b573bd"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "20fb4b6d1aa8ed88d5fdac0fd89caefa"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "100fc3a1b58641a999923c3f5d2b9a4f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "a0833733cffe33817af3b0b80ed360b9"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "6886c40cdf53c5bd4e3c418a8e0be555"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "c8b5b4b19b37e61e50816a26efff03b0"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "340221920cbe50648baccd1b13b6dd96"
  },
  {
    "url": "guide/snaps.html",
    "revision": "352850dea35939827175f0397d5398d9"
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
