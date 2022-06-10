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
    "revision": "dc6403caf169dff10044870ed7c72642"
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
    "url": "assets/js/12.1df585d6.js",
    "revision": "5dffcd75c7367a988644fb1024bfe979"
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
    "url": "assets/js/16.49c55374.js",
    "revision": "388c07a3e066e6c2a4cc68d72751e188"
  },
  {
    "url": "assets/js/17.4157c0ca.js",
    "revision": "ebb2efed39c8e981832982541fd90284"
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
    "url": "assets/js/20.a6056861.js",
    "revision": "61fa227274ffe7c5aea77960b8b2792a"
  },
  {
    "url": "assets/js/21.fa4839f9.js",
    "revision": "e393e327fa1a69691c28161281f4628e"
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
    "url": "assets/js/25.0781c253.js",
    "revision": "d5015bca9c78d3166a042943148fab98"
  },
  {
    "url": "assets/js/26.48020d43.js",
    "revision": "9e9937b86bdcc90069caf287e3873587"
  },
  {
    "url": "assets/js/27.5cde3c47.js",
    "revision": "7a0356f3eb078e0b4a9c263b109686d3"
  },
  {
    "url": "assets/js/28.8caef439.js",
    "revision": "a989555751435c592e80644af394a726"
  },
  {
    "url": "assets/js/29.9cdeacfc.js",
    "revision": "a935e53335a894adfbba3454a0b73c8b"
  },
  {
    "url": "assets/js/30.84936941.js",
    "revision": "6e92b4568b29ef407f1d21634fc682a6"
  },
  {
    "url": "assets/js/31.8cdb7ffc.js",
    "revision": "c7a14f1d25cb026219d373fc80cfe3bd"
  },
  {
    "url": "assets/js/32.407ffaab.js",
    "revision": "9d85977136a4436fe160e75babe3efff"
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
    "url": "assets/js/36.0ee6e91d.js",
    "revision": "46af703a64761ff821a572479b1eda0b"
  },
  {
    "url": "assets/js/37.ca305201.js",
    "revision": "84f69863dbd43b27fc75f40b3ef78af4"
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
    "url": "assets/js/app.79c8c8d8.js",
    "revision": "ca900d330eb11d885856a158bb6473bf"
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
    "revision": "f89175090dd8e43429cb5009af928f22"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3438751a23e3b9ece6ce36130fe5f9b4"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b8235d77e49671b6d2921316e252e2ed"
  },
  {
    "url": "guide/contributors.html",
    "revision": "9499073d6bf8abdab58714f08e4ad214"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "004c2604f399495d93655607673be1eb"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "04aea3cbfa691d813fd97e8948ce0a43"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "dd62f139a17c37351b08d68be9823da4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b6b670d8e2bf7e2763c8578f7f73ce67"
  },
  {
    "url": "guide/index.html",
    "revision": "27f432a072470651327c33b246c1a0b4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "55344d10b389408ddaba050d32718601"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "04b04115379d5f06e8872b25f3819956"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "fff04edfbf8552f4bc973d059baaf2ef"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "8b86a310719fcc50046fe5c865896491"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "b3846913dd9eaa5b2603f57546de35a9"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "fb60e02b5fcd5057b3ca9ef039e1c721"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "206207be20386e2f50c44e077c681b75"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "89669a4e12dfdb19f89f4cc2a81b81f8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "8b2119f4ad772d570c00959d1b7f8a35"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "3a9ea8d5ebb87012e1acaff790721ecf"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e716d5834c2d5a250c06db715690a0fb"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "54174f9f554f675ddf9fd8786c4c3e2f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "80d1fab0c726ddf6945d7a4a959aabda"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c7d2d1fc06c8a8ffc77a5fab99b8526a"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "03c400975b17695adfa99ca1f0711801"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ee0c865d1c906dc6410acf7d69d522e9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8e6d6906da514ae1ccf2795ce880a146"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "360c9274f162aae066cdecc05953be51"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "93e8c0e188f605013361482eb75eea5b"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "203cd94a042e95d6ab893d624b499084"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9f212dd93d38747d63b484b3778bad65"
  },
  {
    "url": "guide/snaps.html",
    "revision": "dccb34fbbda95799e8b1fb47c919fad2"
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
