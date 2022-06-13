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
    "revision": "81c667cf40ec02ef9d0a4ca22c3decc7"
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
    "url": "assets/js/12.a79da054.js",
    "revision": "548fbe2dfa6984f1ae85f95690728c58"
  },
  {
    "url": "assets/js/13.dcdc03e2.js",
    "revision": "67bfd471199fcedd4ce9432307157283"
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
    "url": "assets/js/21.fa4839f9.js",
    "revision": "e393e327fa1a69691c28161281f4628e"
  },
  {
    "url": "assets/js/22.7c95d611.js",
    "revision": "c997f04dd3cf9c887e58669ef487f813"
  },
  {
    "url": "assets/js/23.82594df7.js",
    "revision": "5dc271d1bf53aba9ef1a615ea78eba67"
  },
  {
    "url": "assets/js/24.a152764e.js",
    "revision": "81fabc9a77438538fe57a72654d8ecd3"
  },
  {
    "url": "assets/js/25.0781c253.js",
    "revision": "d5015bca9c78d3166a042943148fab98"
  },
  {
    "url": "assets/js/26.b9ae4f3f.js",
    "revision": "7a64dd386f60f4428e423d3236036302"
  },
  {
    "url": "assets/js/27.ff00bb61.js",
    "revision": "d80dd73dc664a35cf795908e112dd06b"
  },
  {
    "url": "assets/js/28.be5e87bd.js",
    "revision": "9cad7369c9f5f833ef12f0516e49abe3"
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
    "url": "assets/js/31.fa86b382.js",
    "revision": "c1bc158dfe7ceedd8f4f074909bbebe6"
  },
  {
    "url": "assets/js/32.60aa1db9.js",
    "revision": "44c64edbfc57bd6409640f1831581bc5"
  },
  {
    "url": "assets/js/33.1bca47b9.js",
    "revision": "2957c4b45b1451d4095ffc2075c1422d"
  },
  {
    "url": "assets/js/34.680b94a5.js",
    "revision": "4340846888ec5a30a52c7fbfcb1f9d72"
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
    "url": "assets/js/37.ca305201.js",
    "revision": "84f69863dbd43b27fc75f40b3ef78af4"
  },
  {
    "url": "assets/js/38.fb3ab94e.js",
    "revision": "65b1f8fdf527b05de3d389b0f2a54749"
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
    "url": "assets/js/40.881e80e7.js",
    "revision": "ff818115641bc3ce06a779635cd76d1e"
  },
  {
    "url": "assets/js/41.294a1bc8.js",
    "revision": "e44e25e1cb9be79c6af02f443dff6f0c"
  },
  {
    "url": "assets/js/42.5ce6875c.js",
    "revision": "926f2b921e4c99d39b5589072414696b"
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
    "url": "assets/js/app.eaddeb9c.js",
    "revision": "089ce8648d3f048e47bcf8b525457256"
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
    "revision": "99a40fc166db05d6849e9e8aaaee8aea"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "729e2a6ca714b0745987c9247ce0d372"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5fc42d09f02c5af8b2fb8a29d065df64"
  },
  {
    "url": "guide/contributors.html",
    "revision": "bfbfcd8bb62823c06d39ae26ad80221d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7af0e880859479bd7c629fe5d9cacfe5"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "95807b9f7b2eb808b7e0842623d29cb7"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "89cda5206fbedc470bbf35c332fac136"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8f19093258af5ad67db3e5fb45681a8c"
  },
  {
    "url": "guide/index.html",
    "revision": "d0053c8d8b560035b3c2c834ffe1a0c7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "944cb2ca15d655f05ecc39524d8609d5"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "618075635ee82d66893ee913eab9a1e5"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "5d9300ed699bc366ef6a6afa8b14daa0"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "775469a33cbddb97b3737370462deea3"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "7039829c19eda292eb9976870aa04e71"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "783da3f88775bc2b6e87ecc8e5d565e7"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "d5a74d5b28596883d354053823d6ba49"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "8bfe788f94b4ce69e220b433540f04f3"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "edab8ba7693b86b9988522aa90d9ff89"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c488eb90d85205bd1dcb63e612b2fa38"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "18408204d32b9a3629eaa9bb42cb91a5"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "bcc2c6a55fa87716853943f95a22266d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1c4d802ece26bfbf0c266775a55248d4"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "9f7526c805280fe0f62e710268b8bfc4"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "94b6d80186545b9a7d40b5119cef5d12"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "73ee596d1e83c84e7b42a900239cb1bd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "fcd7132b59abea7bd50fb3bdf91eef9b"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "2a2d94a1c5e9af2fee209ac6fa0fb54e"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "f856e6f370fde874fc660be6606f6423"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "110ff1556ec4e48619724bf4a666940c"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "7867dd800c855d7e9fa6d744671b12a3"
  },
  {
    "url": "guide/snaps.html",
    "revision": "db70f0ab50eaba98aa05b50278e33ba2"
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
