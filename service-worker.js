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
    "revision": "afc30514ab4cbba4d907527d887f1abd"
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
    "url": "assets/js/13.e80a4aca.js",
    "revision": "2cdfd10c6200641028994c6de35ddb5c"
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
    "url": "assets/js/18.e99d1669.js",
    "revision": "38e1539ea56879158141198297ce36e3"
  },
  {
    "url": "assets/js/19.68da8ea1.js",
    "revision": "bd1461dcbe61c7876b13ed957d730da4"
  },
  {
    "url": "assets/js/20.405ea880.js",
    "revision": "fa4ad6f5ca9379a234eed42a8f89992b"
  },
  {
    "url": "assets/js/21.c9f5ba61.js",
    "revision": "b7b3da6fbbaa45705d8e2b4f6c1b25bd"
  },
  {
    "url": "assets/js/22.2062131b.js",
    "revision": "238db2778d2cc9c636ab941cbb85175a"
  },
  {
    "url": "assets/js/23.82594df7.js",
    "revision": "5dc271d1bf53aba9ef1a615ea78eba67"
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
    "url": "assets/js/26.781423b4.js",
    "revision": "e5e021816d055b00fb87dfe9688c8c70"
  },
  {
    "url": "assets/js/27.92ee95c6.js",
    "revision": "296d59f2b33e0513f4936d7e8335c21a"
  },
  {
    "url": "assets/js/28.5657862e.js",
    "revision": "62a99ba4e5408ad8d9ada63851a2e5de"
  },
  {
    "url": "assets/js/29.04cd9067.js",
    "revision": "60e3fb131f707f38269627292c2fbd3a"
  },
  {
    "url": "assets/js/30.84936941.js",
    "revision": "6e92b4568b29ef407f1d21634fc682a6"
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
    "url": "assets/js/34.cbf943a2.js",
    "revision": "2fadb0f5cf391a9990ba0b356a483410"
  },
  {
    "url": "assets/js/35.afc3f022.js",
    "revision": "bedeec8c4ce4a09ea80e0a7b93f12203"
  },
  {
    "url": "assets/js/36.f83616ec.js",
    "revision": "e920261744e6af1966f96fcbecc824fc"
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
    "url": "assets/js/39.012f0f85.js",
    "revision": "af8165250b2ccc27e0cd5b48fe776ba8"
  },
  {
    "url": "assets/js/4.cf404e46.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.4d00c984.js",
    "revision": "191284e72a1eb0607ee81e2b3fa3c240"
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
    "url": "assets/js/app.cf2ca726.js",
    "revision": "22811f6a1e6edcea798b440c17f2f017"
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
    "revision": "9942987430bbbb671909b686073f25a7"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e06685b8d062139ba7535f0da6f2c4b8"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "4b20fffc765c106b715a17e83283c3cf"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ccac7354d1c00509ff5f975ba7b7019f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "fe77abced6d0c34c9d1cdde79a59c38c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ff6e39d5c83195645a4f5efc9f1bff31"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "74625b1e6313cb205fa099349e46eed3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "eb761e12b598fca4fef781e703cd412b"
  },
  {
    "url": "guide/index.html",
    "revision": "c894d78d9370fdd50230daf6bcb56b2c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a41a476ca836e7fd1e58d7febf7d4bd7"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "e25373b7db372431dbc1170c49cc782b"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "b57869c32d4895f0ea4941c5f1972a70"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "80195bc991a6fc4a8b171106fc2b33a0"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "6b5dba569664499d39336aaee6399359"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "5f59a31be19522202ad1fc3b8f554fb1"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "1384328350285b7f3b6b8d12c25e7cb0"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "860a87fba2dd03ce8084503388e505f8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "8bc83e2d69906b8aab96a06d34924b41"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "7d416812edb3a359284762d2a9eaa63d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "349cfba493b5ea5d0638f6c9b5497e0f"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "f1ebdce09b514609e2a0ae831aaf62c9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0e186d0e419d35b5e085acb755a757a6"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6c50f6ce16ecf830a75c88f79285140a"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "dfd94b44bd75a501bf4177ae49547593"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e8b4d941c8a0b945e7dee14a3633ad66"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b4326ff7393193fb3e377882844dd581"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5f9c48f91e4dc6542ca909c134e9dd4d"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "7c3f5dc0e442973fb8adb9c89b4283a5"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "645a182ea0caf36d7e2bf07fa971ca28"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "fa72a9c91d9935ea6279d491fd975d16"
  },
  {
    "url": "guide/snaps.html",
    "revision": "c8256d1e8328848e7221c5834029c512"
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
