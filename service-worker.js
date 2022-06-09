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
    "revision": "976df6cb5b7789f4f7c51d43dcdee311"
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
    "url": "assets/js/13.5fbb2fab.js",
    "revision": "d5eee3b86853ee55c138028ab64c8c0c"
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
    "url": "assets/js/16.990e0149.js",
    "revision": "83fd8e87f819183775b2a2c207ff8d70"
  },
  {
    "url": "assets/js/17.0062d511.js",
    "revision": "262288e77fe83d53a08720dab1ea511e"
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
    "url": "assets/js/20.a6056861.js",
    "revision": "61fa227274ffe7c5aea77960b8b2792a"
  },
  {
    "url": "assets/js/21.677be34a.js",
    "revision": "eae56018be2ab6e7d71ca26194653afd"
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
    "url": "assets/js/25.63241561.js",
    "revision": "2dafd4cd7a4f410d9441ddf89fb8c38a"
  },
  {
    "url": "assets/js/26.4afc9b81.js",
    "revision": "19b884abf19a9b403e02c3339a7c0116"
  },
  {
    "url": "assets/js/27.846f64a9.js",
    "revision": "7b3bf366a208434ef9432588563dc555"
  },
  {
    "url": "assets/js/28.298466ce.js",
    "revision": "cb6b0c542f952c2ada5c656d25d0b210"
  },
  {
    "url": "assets/js/29.e3028eeb.js",
    "revision": "0856f9b45aa7f8ea8c56afca4d2c8672"
  },
  {
    "url": "assets/js/30.66ff9a7a.js",
    "revision": "fc41a778cb682b428b0063ef4144d6f0"
  },
  {
    "url": "assets/js/31.0135613f.js",
    "revision": "dffc498973a5ca3f48e3812b30a7a05b"
  },
  {
    "url": "assets/js/32.0e40e0a5.js",
    "revision": "59a911f0177120109b9b294a916ef4b3"
  },
  {
    "url": "assets/js/33.118a0db0.js",
    "revision": "46eac624bfee69d99cc9cdc75f8c5a9e"
  },
  {
    "url": "assets/js/34.d552226b.js",
    "revision": "b5b6c51838297ea0b9d592cb7f2b42fd"
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
    "url": "assets/js/37.f4d23822.js",
    "revision": "bf0f830f3bd7bcc4058fb77852faf9b2"
  },
  {
    "url": "assets/js/38.ecfdb0a1.js",
    "revision": "95dc860453a35131c396a774c9977877"
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
    "url": "assets/js/40.1cfe0007.js",
    "revision": "03a8b2d89559fedbdaced5a246334be1"
  },
  {
    "url": "assets/js/41.4cb2c903.js",
    "revision": "7a6c99b25313579919a6e353f43b0989"
  },
  {
    "url": "assets/js/42.5292002c.js",
    "revision": "e78558eaf5bd4caa68ebc5e6aedec9fc"
  },
  {
    "url": "assets/js/43.e1eb7fb9.js",
    "revision": "5e315ff5c9682e8836ae807f5f041a0b"
  },
  {
    "url": "assets/js/44.a2c643e0.js",
    "revision": "2ce6ebef3856468fb096d2843be0fe5e"
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
    "url": "assets/js/app.883d3d0c.js",
    "revision": "566e3c19119bc1357f2ea7497bf93440"
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
    "revision": "9af1e83c838876d279d8237cba55dfcb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "794391d46fca8d0f374387deb70f2c80"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f6f8c08229712c439631895028244246"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2eb047bb5785287df749cddca3ba8476"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2734c1c7ee60c0b648aaee91f4104d4f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4385d4d25baec7eb6c3746598817dd91"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "54b876e06268a92b41ae37fa928cddcd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ff9c5728a033c4892a10385314ca6295"
  },
  {
    "url": "guide/index.html",
    "revision": "d17bacdd71b7c3d347a5650d70e12cd4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "cf18c09e0b6122e3b679f3d2a6ede756"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4b36b84f4ea4ff598525fe749e0a8667"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "d6614eec92175b752a24d2230efaf35a"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "005aee172be899d54c2222a4840af3eb"
  },
  {
    "url": "guide/metamask-sdk-getting-started.html",
    "revision": "f27b4a4f58742d8b4ad314a6e175c456"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "3bff3ed79d0700f5bd606d697a60145d"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "4caa9f48cfc7c60bdbc3a3bdab9b6207"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "16eae235c3ca853d24c3e76ea5510e3d"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "2861f225e3a35f742bd8b5f8f6baf711"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e7d9dfe90e69d5e1adb2a06e311cdba1"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "3ed8ba33d2eed342d91dbdbea10941e0"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "790f3ef732e877638f1cd50315795852"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "bb509e0464b4a5c5c730a245fb9b2e97"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "aacc4f57c69780f2716c3649e0cf5ede"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "bde3b6ae8b1a8b0da7ef01cb5c44989f"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "01ec1baac542a796fd864fb8160d76b7"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a80b652d1bc0186f0ee3c2c008d518db"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "62c61d5bccf57afc6ad544012bad36d5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "517d6007272ca99842bc3c1e6f130be3"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "ae8e3d7a2d783d5a9f8bc7979c433619"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "0b059e4471b8c51e86851fa9d041378f"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "2cc209173f89e84dd104a125e8b0a160"
  },
  {
    "url": "guide/snaps.html",
    "revision": "29f26bc8908fffb53a15c83139e4fadc"
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
