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
    "revision": "0b348247f8b9b1274959812d0636e073"
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
    "url": "assets/js/25.63241561.js",
    "revision": "2dafd4cd7a4f410d9441ddf89fb8c38a"
  },
  {
    "url": "assets/js/26.8345411c.js",
    "revision": "53bcb600b6bd3be6f9605e3abe035397"
  },
  {
    "url": "assets/js/27.6039d19b.js",
    "revision": "139ec2055f4e7c6eb441aa21943743a2"
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
    "url": "assets/js/33.0883962b.js",
    "revision": "ca21546f2ab84b346b5593749087cabc"
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
    "url": "assets/js/app.e22cd963.js",
    "revision": "75813f8f15fb980ddd816d24d954b2d4"
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
    "revision": "07c4a89d87f495312bf9ce1027c5f3d9"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e8d1ea102793e7dfe6f70dc2a2e71dfa"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b49ecff1834d2ba9baa8f3b82315084d"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f6db6c603a4e1cabf4b6788b0a16d44e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "81729d8fea7348d6215b3a55cd04ac1d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "b4e396a506592628057c47448f1420e7"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cae533f1d704f692b64e33a8ac168437"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1a8b4ea0b9aeb3073bec6ec1d244d09c"
  },
  {
    "url": "guide/index.html",
    "revision": "78dee0483b9ae0c4de3f6eaa2af6e4aa"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ec927539e30befff233828d8117de288"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "2bd98b60df5bc0457c758ffaa9cb786b"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "64ef0cf5ca5931ac9cbe57efc0bc20b5"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "68133091909ae8ac57bfed459d1c1af9"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "c432a442fc2400d27cbbb0b62dddb8a1"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "ada3a090a4e0724f527eb40723950794"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "773efb3e4e5654d3b05c0888a4162a03"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "0424f353bb80a1da35e40586696fad7f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b3caf2a8fa9b377c7aad20c66569dda0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "fe8eaf8308258c57224fabc3cfb50840"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0511e7eec3c3391b46cc7be9e7b75fbf"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "7d3e75fd8af1b69ece61b2f943bc50d1"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "a5cb38fdc6438b5b3b8a40c901c2c308"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2d364632fad030c6400f4013efb3630e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "69c52ebb0e1148dc46b07c29ef1d109f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "242650dba96cac976fc9f582551ad05e"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3d7b899ceb25b0ff064184b89227f92f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "038e6abda39ecc3ee5bbc3498ab76cc5"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "3a436e1def84f3e45cde2ab0ca34517b"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "154e5c46035a9847185a60f5bc30963b"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "43cf9212f0530daff9697d239fa8eba6"
  },
  {
    "url": "guide/snaps.html",
    "revision": "d6dff7d3d1c169d2de0f67261cbb8cce"
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
