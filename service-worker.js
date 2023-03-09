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
    "revision": "8fcb54aa7ca2cf47b5b47aa6813b8ff5"
  },
  {
    "url": "assets/css/0.styles.58fb0f02.css",
    "revision": "c43d8601e92fc9180a9f6fe1df4c8508"
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
    "url": "assets/js/10.70580d54.js",
    "revision": "66bcaed0c581c74d456f62434db7fb1c"
  },
  {
    "url": "assets/js/11.e87bac70.js",
    "revision": "64cac7835aa00a99d8f0381c99c5d690"
  },
  {
    "url": "assets/js/12.764ee691.js",
    "revision": "cfc1598b7726b4974085e8ea214e4a3b"
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
    "url": "assets/js/15.9d55a13b.js",
    "revision": "ca30763233832ecbaaf753fe14e62e9b"
  },
  {
    "url": "assets/js/16.67300195.js",
    "revision": "868ba83901e3103bebf14788ac77ecba"
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
    "url": "assets/js/19.dd6f933f.js",
    "revision": "6ce8f9487f19f20179e17d8670793bc5"
  },
  {
    "url": "assets/js/20.55ae3c5d.js",
    "revision": "1622ba988f2ecb7307ec78285ae9b060"
  },
  {
    "url": "assets/js/21.63a40cb6.js",
    "revision": "1a4632ecc7be58bbb93404c5bd93d2e5"
  },
  {
    "url": "assets/js/22.421d9483.js",
    "revision": "90dc2684973b8727f762077726f9aa69"
  },
  {
    "url": "assets/js/23.3ff51f90.js",
    "revision": "0d060e6f68acc0c5a06699a0365d4ce2"
  },
  {
    "url": "assets/js/24.79c5759a.js",
    "revision": "ff1cd23a1c7ebdfce82570a4c0a77284"
  },
  {
    "url": "assets/js/25.82fc8d2e.js",
    "revision": "28ebfd41d19e2bceeab6aec04797f697"
  },
  {
    "url": "assets/js/26.81df71cb.js",
    "revision": "c521078ae469d815fee5d0402609b811"
  },
  {
    "url": "assets/js/27.74373352.js",
    "revision": "4afdc5badf1a204dcadf8c48c3f5bd54"
  },
  {
    "url": "assets/js/28.dda7ba91.js",
    "revision": "133694e9e1bc602ca1327db3d5a8d8a6"
  },
  {
    "url": "assets/js/29.8141fb99.js",
    "revision": "d0ceac521676bea956b23dec14b53fbf"
  },
  {
    "url": "assets/js/30.30b0f297.js",
    "revision": "399b992b210f1d39afea1b36d6935c69"
  },
  {
    "url": "assets/js/31.7d45e5ed.js",
    "revision": "2f34a292b534454133871a033febfe7a"
  },
  {
    "url": "assets/js/32.2ef35652.js",
    "revision": "94ef0cb25d5277a91a61400352b8f245"
  },
  {
    "url": "assets/js/33.68097aa7.js",
    "revision": "e12bdc1df384fc4a94fa5fdafe1beb72"
  },
  {
    "url": "assets/js/34.f046825f.js",
    "revision": "77bf6e84a1efd9de7f7f203ba0bc6b0f"
  },
  {
    "url": "assets/js/35.d815276f.js",
    "revision": "af86714d99906a698cc633c390f96118"
  },
  {
    "url": "assets/js/36.424fa298.js",
    "revision": "d92bb960090673bc63ab33edfb92b46f"
  },
  {
    "url": "assets/js/37.239cd286.js",
    "revision": "9ded6e423f52594a51e4422c592729cd"
  },
  {
    "url": "assets/js/38.d496e276.js",
    "revision": "87b686641edadfaf02f68bcf00fa4e15"
  },
  {
    "url": "assets/js/39.7659ff26.js",
    "revision": "7190aaf9f5ae744665e9c3d3426654d1"
  },
  {
    "url": "assets/js/4.7d26e848.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.856f3654.js",
    "revision": "8f15f9d603d1ad9621364ddb33c77fef"
  },
  {
    "url": "assets/js/41.f089a1c9.js",
    "revision": "9bed66e146dffd786e7554bcb827b0d7"
  },
  {
    "url": "assets/js/42.079befe0.js",
    "revision": "01e2afa7369885e3b1ff96a24865fad6"
  },
  {
    "url": "assets/js/43.2b7d7e82.js",
    "revision": "c7925ce80278868b6c7815b6b25453d9"
  },
  {
    "url": "assets/js/44.b0ed6d80.js",
    "revision": "ccdd4db82616327f8a58983de375372f"
  },
  {
    "url": "assets/js/45.312ee373.js",
    "revision": "f5ca665d3c8b6075a8bf847749e002a1"
  },
  {
    "url": "assets/js/46.b24f9b52.js",
    "revision": "fced19a36c28d9427ed0f62c96b2f4a7"
  },
  {
    "url": "assets/js/47.f40c0c2e.js",
    "revision": "8d4fc0ea7e56f6e68d771c69c5bd6543"
  },
  {
    "url": "assets/js/48.0e78b542.js",
    "revision": "fb353e51e8011850debd6e7cfec29204"
  },
  {
    "url": "assets/js/49.f0b2b4b0.js",
    "revision": "778a38ca3ae4a4ce5deec982c15bfeaa"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/50.7d4ae732.js",
    "revision": "287e8a4458f83ab1e5aa73efe1a6266b"
  },
  {
    "url": "assets/js/51.92168eae.js",
    "revision": "26ebe1e4d40acf257100a710d38b5e93"
  },
  {
    "url": "assets/js/52.ce0601c8.js",
    "revision": "d75405b3ea2020dff5751cf2aa30d68a"
  },
  {
    "url": "assets/js/53.c0b16fee.js",
    "revision": "f87c2c8e7ffc81827cdccbb76c6ec6f4"
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
    "url": "assets/js/9.29f1e142.js",
    "revision": "9edbb39ac8784363c627a9419b378b39"
  },
  {
    "url": "assets/js/app.b566aadc.js",
    "revision": "7dab1073989c787ef3bbe16feb8fdffd"
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
    "revision": "3f1605e8b6d17987513c12f85151d23e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "66846a16d2ccba2879fe23a0017d3828"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e9b199bc43f15751f11907c82a1dc728"
  },
  {
    "url": "guide/contributors.html",
    "revision": "25b0f35cac18a69ab83c73e7e8c3c552"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4e8e12c3cdfb3169e0dc9bde7f26e9b3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "9056dc1bc2511477498d3ec06d889945"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d475339ce0fd7da60559cd57c3c96f4a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "32201d0fd51ad03bfa6f9c89030191f9"
  },
  {
    "url": "guide/index.html",
    "revision": "b0492cfb1a880bc2ecfc2fe011e74329"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e7e671aa1e66ab6bb20fa9ad8d013753"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "443c3fb16907147066f1ad33109740b3"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "00891f40bc1f3facaff4c3559e39eb21"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "be8e895eff77dfbaf015a4b3cd32d9e6"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "0977b7a168b868419881013ae89d711d"
  },
  {
    "url": "guide/metamask-sdk-ios.html",
    "revision": "860d12fa514d8069350944916a948e1b"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "bbd4c16dcd7e97ee6f9d88b9eae9c333"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "860bf6400cf1f7f89d9050362139c137"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "3a0e91e8972ca781a6f1b8b66355b88a"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "dcb680d0eef0e7a36475cd73276f5829"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "0d57b9ac52ded449569f6b5703fa21e8"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "e56f9c1bc1a93846e784576d7d18f35d"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "c8ebf875fe72ab21a95f4928a65b520b"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "3826fa66124e916cc09052fad39f8fe5"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "6a448a75ab6269130222568dc906a40d"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "d2815c212f28f30d822d9d0761e0bdca"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "023d093490bd3a9fb341c916b65e9712"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "c557c7a03dcb2949bdac8c07d2eda934"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7f0c8d444944c1d7756091b4a2c6c76c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2808ba40ea130ea5472e659cd53c3a63"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "dd7a35b3fd8592aef4195908777b41e2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "630e5f43655e7cfb10f1b06e3eb203f2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "fac59f3696b766ab78a412f7f813786b"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d66d46193623503abc76c54bdf2da20f"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "7e9a63809dcc706821cbaefad69ce7b6"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "db1308f9fd17196131d35325268f5adb"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "ef1c39ab5f1e2eab6d84916c2e564acd"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f729b03caa77e06583daa83ca0ae54f5"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "0d4837858c6635896f091c53e3b05bcb"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "f7d86f804a21216349adff3a803b91d9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "899b3c50e8f61abc2c73ebb7dbee3128"
  },
  {
    "url": "guide/snaps.html",
    "revision": "a2b7778791cfd82fc48bf3158e03b8ba"
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
