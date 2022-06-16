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
    "revision": "639082ea359744bc9dd37cb234b72378"
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
    "url": "assets/js/13.0bc44618.js",
    "revision": "09094ec78b309db1ef64488d713a573f"
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
    "url": "assets/js/25.2a75c305.js",
    "revision": "4180e97acebc2ff3c3472d0074913687"
  },
  {
    "url": "assets/js/26.a9c441b5.js",
    "revision": "77a10a2b2b2fea454bca708632d21adb"
  },
  {
    "url": "assets/js/27.93b0d55e.js",
    "revision": "8ea90f1f63fe736548809a885a1bcf70"
  },
  {
    "url": "assets/js/28.d8ee364b.js",
    "revision": "11806ab6de8648ce216ca62129e56769"
  },
  {
    "url": "assets/js/29.9f9794c0.js",
    "revision": "0d5f9f61d0c897ef879a817e258d860d"
  },
  {
    "url": "assets/js/30.ea380391.js",
    "revision": "2d150e8e934d32d2a69e58d70a5c9073"
  },
  {
    "url": "assets/js/31.cdc6f8c3.js",
    "revision": "80666dd03fc2e059ec728d898409c8e4"
  },
  {
    "url": "assets/js/32.204d5c0e.js",
    "revision": "27ee8b551e670d0284405d538b880cd2"
  },
  {
    "url": "assets/js/33.172a06aa.js",
    "revision": "f0c47da8cd853a9d400a5f749aa5f36d"
  },
  {
    "url": "assets/js/34.27f698b7.js",
    "revision": "4ef51376b26c997b167dee78c4e68a7d"
  },
  {
    "url": "assets/js/35.8e0f1c6c.js",
    "revision": "347b8b56356c50ce8b6a0f35e53de0cc"
  },
  {
    "url": "assets/js/36.150ec304.js",
    "revision": "b927e0d84393e53a976a757f2bed758e"
  },
  {
    "url": "assets/js/37.3b644495.js",
    "revision": "241c91b72106e20beba6178d5bb17f1f"
  },
  {
    "url": "assets/js/38.6a86b006.js",
    "revision": "b08b0cf5633fbe6ee8ad24a82f56b0b9"
  },
  {
    "url": "assets/js/39.44f9b618.js",
    "revision": "bd563981d663dbec59d724231fec07e1"
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
    "url": "assets/js/41.ee874552.js",
    "revision": "f13d5ea358cf464b2682574bd00a78bd"
  },
  {
    "url": "assets/js/42.af8e1877.js",
    "revision": "fb8aeef6d615e1d52b8ea9ff83dbc74d"
  },
  {
    "url": "assets/js/43.eb640307.js",
    "revision": "f694be808a78db388578790ce612dc12"
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
    "url": "assets/js/app.93b14ed3.js",
    "revision": "104c7ef23ead98d8e984236fae664f79"
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
    "revision": "003f055b4b78a4d56b742bb175fd8aaa"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "963fe14418d1ca08ca6292e0185f20db"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "bb95e40550aaf06c521ad52d76c5ea8e"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8f90e32dfdf92835e888fcab680e046f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "13af1f889b875392924a3b512b193a01"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5042448dfe3fc35887388100ca0ce607"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d407335a6f711b82765fe1b1320f3f67"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ddc1f1bdbff7260030830e98500d34b8"
  },
  {
    "url": "guide/index.html",
    "revision": "7870060edd825180caecb22d45f8cf06"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e622835e175f54904438dfdcbcf1ecd9"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "5781fa646f1287ebddb1fb0cd0b48e4c"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "59a28a8682c29d9a734b36168b9fb3a5"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "c942bbcaa0491809e33d2c5d7dc11d3e"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "d24a175095b8917dc9e7ac12a46e3df3"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "71a0a948996bc9f7299616b408cbda2e"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "727a6e0401cbfc1661a01a801b6e6d25"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "c224382c04513c7835b921a974f81af8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "df4ddbb4bf6fbe61a9dfcd5071435ebd"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8e3b758a9a6faef1c5dccd9f234593e9"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "fe4f5909f68bc966e94316c50cc66e15"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1c3c401125aa601eb2fc8bbee04657fa"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "2450efc5b1d254a95d6043b40bac96b0"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6ad8a4fba1360b39910094763c07dd9d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bf3546582fce4a6e8e25c313668ec311"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "cdd81e548b2e873712a3f45d7a39c003"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a77a2beb78098125e77166fb6623fb65"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "8e52b42cf2455ef22134dab211e495b2"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "0dc321af7ba8190ef832140a5e5b1a8e"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "c014b430acde58ec4120840de7907e41"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "31eedc57a9181917b4792e59721e91a9"
  },
  {
    "url": "guide/snaps.html",
    "revision": "5a2c795c9b761e34e2f1f69bba699d4c"
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
