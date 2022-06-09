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
    "revision": "1a714ee318a496162de0d2c74f668d2c"
  },
  {
    "url": "assets/css/0.styles.196e21d4.css",
    "revision": "f3a4ddc7c9ff72e8a778ed719aefcc31"
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
    "url": "assets/js/10.2ed2ccc8.js",
    "revision": "76729ef06fcde7b7df12c0aee3643887"
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
    "url": "assets/js/13.b8bd2310.js",
    "revision": "9137ad596b751c1f763d8f66f0de3f5b"
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
    "url": "assets/js/18.e99d1669.js",
    "revision": "38e1539ea56879158141198297ce36e3"
  },
  {
    "url": "assets/js/19.1890ec53.js",
    "revision": "1a7285d68bf91c342d62fb40d54670cc"
  },
  {
    "url": "assets/js/20.350bcecd.js",
    "revision": "a70519e00febde6505e8308aa1d84227"
  },
  {
    "url": "assets/js/21.fa603726.js",
    "revision": "c31c84603934cec708bbf1874f64fafc"
  },
  {
    "url": "assets/js/22.4eb93748.js",
    "revision": "115df3f31c24836bd0cbf173cbeb7939"
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
    "url": "assets/js/25.0781c253.js",
    "revision": "d5015bca9c78d3166a042943148fab98"
  },
  {
    "url": "assets/js/26.f343c9fc.js",
    "revision": "b9dd8caf3ade16348ef39d62e49687e9"
  },
  {
    "url": "assets/js/27.b2cd3397.js",
    "revision": "e46e23fdf1ac9a6ed3633873696f4078"
  },
  {
    "url": "assets/js/28.ab69968a.js",
    "revision": "32fe19d8bbd56228b9dcc5c67e1af33c"
  },
  {
    "url": "assets/js/29.13b3e16a.js",
    "revision": "2cc6c2f20401f2590df32a6e1936fea0"
  },
  {
    "url": "assets/js/30.ea380391.js",
    "revision": "2d150e8e934d32d2a69e58d70a5c9073"
  },
  {
    "url": "assets/js/31.fa86b382.js",
    "revision": "c1bc158dfe7ceedd8f4f074909bbebe6"
  },
  {
    "url": "assets/js/32.407ffaab.js",
    "revision": "9d85977136a4436fe160e75babe3efff"
  },
  {
    "url": "assets/js/33.11263c7a.js",
    "revision": "25e71797f3640a34ee21ceffe1e18bf6"
  },
  {
    "url": "assets/js/34.27f698b7.js",
    "revision": "4ef51376b26c997b167dee78c4e68a7d"
  },
  {
    "url": "assets/js/35.fdd91895.js",
    "revision": "5f534552e8bce76b8f7995cd1569fc17"
  },
  {
    "url": "assets/js/36.fbfd6bfc.js",
    "revision": "1ad111f0788802cb323442b28f4e4db0"
  },
  {
    "url": "assets/js/37.0bbaf94e.js",
    "revision": "11e15cf1bbb28f395499e084be191eb9"
  },
  {
    "url": "assets/js/38.4551dae4.js",
    "revision": "282214c4d93c12fae1443cbac9236c14"
  },
  {
    "url": "assets/js/39.52740b38.js",
    "revision": "cd52d570e661e1f2d137632205d72af9"
  },
  {
    "url": "assets/js/4.cf404e46.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.c2aa7bc6.js",
    "revision": "87bd59b22e1ccb4f5841e395a5c1f94e"
  },
  {
    "url": "assets/js/41.74fe147f.js",
    "revision": "684dcf108e097fe4e6de1dc58ca543fa"
  },
  {
    "url": "assets/js/42.77b05ad8.js",
    "revision": "62e091ceab3ee40df8640ac6d1783f16"
  },
  {
    "url": "assets/js/43.77b4f9dc.js",
    "revision": "89b3ab6c0603f14a02f8742220a98a86"
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
    "url": "assets/js/9.156dc92b.js",
    "revision": "131aa9600301f33da3385542efc0f77c"
  },
  {
    "url": "assets/js/app.e060740e.js",
    "revision": "e952be96704549bc810bc9379c5ca844"
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
    "revision": "5eee1c63097d69e1c51fa37e9f57d556"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7578e83e4a8cc1dfe7dd32964bed3332"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "4ab94b9f2e8710d6497f44507dd54243"
  },
  {
    "url": "guide/contributors.html",
    "revision": "5e2b61659820399388ddc8016ee336ca"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "237124b5b0c608cd9576e8ca31b13ddc"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7879f0e40b260eb3d768437b415efc32"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "89a13366331bc5aa23cc46e7b739b42c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c3b2abb1b3fc05d422c627143d926284"
  },
  {
    "url": "guide/index.html",
    "revision": "f1045d9cbcd37aa27f2dc844067a03fe"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "10488f59d152b8617f564e4b76733dbc"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "3f3d0e151fd8d598efa850e14e478448"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "15c64fce56dd731fee2340df442de2b5"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "768ef63fb875c7a8c6bb592a1fa024a7"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "0f31298dc66f511ac8e8582bfc5d1e80"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "7231f1dc031fe312d26b1554502a6fdf"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "63226924f1e346773c1c847617a58f1b"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "8867a4c796912c4916b07f6b49ac1e91"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "1ac290a4c4a89fd084e0d921a0b470e0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "84ae49dcf0bcaf7255833a33248cbc88"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "fc5e993af37d3952b681058dc02df168"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "09a5fc3b1c126bc4bf4b6775861210e1"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "a75f8f2064abada664ed1a529f09120f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "28c9ab83695aae9f2af3ea58ff6c225a"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b9f4f62e071bf9610668febf71cda3b0"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "eb4b6483fd60195b9fe05b45e48c4180"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a3028a42b5c6822765d4ed0ac141dc11"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "77f063b3a7dcd8101d8530fe952cb83c"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "e8c145219235452332e7c21f8bb359df"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "e5b25abe4f024757214ccef39b3e124a"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "4b83dd0f9ebaca426a15b22be07bc7a5"
  },
  {
    "url": "guide/snaps.html",
    "revision": "e1fd0b9413a4b5148dfaf9fd0af8d820"
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
