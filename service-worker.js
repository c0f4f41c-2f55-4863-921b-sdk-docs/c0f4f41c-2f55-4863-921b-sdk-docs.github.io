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
    "revision": "5ee053a48a888972d6f8676bc0fa3acc"
  },
  {
    "url": "assets/css/0.styles.01d83501.css",
    "revision": "9c1ba210052693ad3ae1d14466944cef"
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
    "url": "assets/js/11.3f84195b.js",
    "revision": "b60cbeb0a84e90746c64bb9f80a89997"
  },
  {
    "url": "assets/js/12.ffa2a844.js",
    "revision": "d155e1d1690a585520b27a6dd2ff93b1"
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
    "url": "assets/js/15.c025855f.js",
    "revision": "a451607350e78e4da52e1f2a710d858c"
  },
  {
    "url": "assets/js/16.df90c8d2.js",
    "revision": "6938ab27ef2b7a603b3c8d143f879757"
  },
  {
    "url": "assets/js/17.8028663e.js",
    "revision": "32f0e701dda918012509b22ed6cfe4e1"
  },
  {
    "url": "assets/js/18.17aeb02a.js",
    "revision": "d4456c677cc1bfa55ca5a10a4e41a58c"
  },
  {
    "url": "assets/js/19.4db10219.js",
    "revision": "ef8b22792885dce6d025687bafeec76f"
  },
  {
    "url": "assets/js/20.55ae3c5d.js",
    "revision": "1622ba988f2ecb7307ec78285ae9b060"
  },
  {
    "url": "assets/js/21.06383ecd.js",
    "revision": "d5ab8272e30e1c9f23772cd96584048c"
  },
  {
    "url": "assets/js/22.c1de6add.js",
    "revision": "2042d060a95ec6ed102a54fa185194f8"
  },
  {
    "url": "assets/js/23.04557df6.js",
    "revision": "3c3d52c3e54459cb670c252f6b73f240"
  },
  {
    "url": "assets/js/24.098ad2f0.js",
    "revision": "e99c4637e9dd3b8f3ee92ca97d7d6de5"
  },
  {
    "url": "assets/js/25.95c42c25.js",
    "revision": "1a233cf7e277fa0892ebbbb559382f8b"
  },
  {
    "url": "assets/js/26.17ce7e9f.js",
    "revision": "28f1bf64865a48ef9a15c2d2457c2c5b"
  },
  {
    "url": "assets/js/27.a5ca7973.js",
    "revision": "94edb8b9c81b63d6c94eb406d26354d0"
  },
  {
    "url": "assets/js/28.298466ce.js",
    "revision": "cb6b0c542f952c2ada5c656d25d0b210"
  },
  {
    "url": "assets/js/29.69f7008d.js",
    "revision": "1ab3af4ee3a635136d332b7500a3b2cf"
  },
  {
    "url": "assets/js/30.30567258.js",
    "revision": "d2bcba6c7747af59253a6d2f56977aa3"
  },
  {
    "url": "assets/js/31.0135613f.js",
    "revision": "dffc498973a5ca3f48e3812b30a7a05b"
  },
  {
    "url": "assets/js/32.5b316ba0.js",
    "revision": "96020b0fa05365f09db9fa557c03bb64"
  },
  {
    "url": "assets/js/33.62183484.js",
    "revision": "6ff34ee94f901e78bdfa70e3cc4514b0"
  },
  {
    "url": "assets/js/34.bfd8391e.js",
    "revision": "6b34d839609e347d732203372ffce1fb"
  },
  {
    "url": "assets/js/35.d8f32cfa.js",
    "revision": "ade0ddc0c90e181bf75a48f83123753e"
  },
  {
    "url": "assets/js/36.3dbb4af1.js",
    "revision": "5c4119e6f0bfa9a3960c5426e7602c19"
  },
  {
    "url": "assets/js/37.2855592d.js",
    "revision": "ac14b02fa14670ddd0e43fb333433d22"
  },
  {
    "url": "assets/js/38.b8f80fce.js",
    "revision": "aa5d6a1657216df941adf31154bde656"
  },
  {
    "url": "assets/js/39.63b530b9.js",
    "revision": "495c92fde96aee3959a731ff9d7561e6"
  },
  {
    "url": "assets/js/4.335f270e.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.ad0f9511.js",
    "revision": "434d86a0a7348a064f4e126f48bbde76"
  },
  {
    "url": "assets/js/41.40bc8896.js",
    "revision": "0485380700abd7035088c5651bfd431e"
  },
  {
    "url": "assets/js/42.5292002c.js",
    "revision": "e78558eaf5bd4caa68ebc5e6aedec9fc"
  },
  {
    "url": "assets/js/43.03ff128a.js",
    "revision": "a04a822b87299cfbb2610fb06c770e0c"
  },
  {
    "url": "assets/js/44.185c94c8.js",
    "revision": "22fa1f16a1e7e728b3c2413f414fa753"
  },
  {
    "url": "assets/js/45.8186b77e.js",
    "revision": "44696b3abc8049d8783cfdb61a82bbf4"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/6.1987e49f.js",
    "revision": "e754738e4fe4958a9cfebd0d423f1adc"
  },
  {
    "url": "assets/js/7.3713bc8d.js",
    "revision": "7405cc3b51a6351a8c166e8fa0949390"
  },
  {
    "url": "assets/js/8.29467d76.js",
    "revision": "461d6b7f698f98e73296bc46e5741ab1"
  },
  {
    "url": "assets/js/9.6d834ffa.js",
    "revision": "d88dfe4dcba566e5bff60aa17166ebec"
  },
  {
    "url": "assets/js/app.27ec8cea.js",
    "revision": "8b1c8e704aad821a6a3c97b5e5c41e0a"
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
    "revision": "726e6fdabb437b27a3affa3e1a19c178"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "2125398817aba0c3d4c899977f74bdf6"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "05d41b030e53f8dda9fb5c986e1bcfca"
  },
  {
    "url": "guide/contributors.html",
    "revision": "494cae579d3131ba88d6e0b6109bc9b6"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2445fbe67a662fe575d2416131a8869f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ec885bc58b8b221c9c218927ffd22ee4"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6ff10954fdf01241c7f95f1dd1f5c562"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "393f3d0b430f99303b38578580259624"
  },
  {
    "url": "guide/index.html",
    "revision": "ea03b8c88113dde4c44470c787229fb2"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e79fea4609fc414dd4b0d64cb3c6ab06"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "db2cc0ff9652998478105a804b779706"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "00edc8f2c1d8ce9fcdda1dffe52a304a"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "4a1857072d59772bd4451a714a8bbab4"
  },
  {
    "url": "guide/metamask-sdk-getting-started.html",
    "revision": "f73398d236669995253708fdd21a116d"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "5c2acf964f7db5010fa860f7c0234c90"
  },
  {
    "url": "guide/metamask-sdk-js.html",
    "revision": "c7074621663efa1f336fdfd2f7588bb0"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "affb672c0edf282266ee0ec50a418b86"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "81ebc6a02a1e5f458a65d4aed2cd0cc7"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "ae390ca96a81b576608158f0791f4dc5"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "71bf10226ab3e1ba101b31542604ae5b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "902fd2d2d9f7320c3e3fc68a730c5fcf"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1b5393f6cf960f1ca490887496f15769"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "c50db09fb94c9523e25a14a638cdc720"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1cec9232844e0d2251032be1b776b040"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "29ae88284cff192bd92da00feeeab239"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "7f4ca465a35e2b4320622db2b3e05519"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c3b4ad93f04e6d0aa60497f2cbfadd75"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "36ff405b4c2da2bb36beab3513a259b7"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "79bd6301cd474f5e945eea9603d72100"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9c18a3d7c2b22886fc45397decf47921"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "620ffa06623f633a5e00ae31c6fc7f4f"
  },
  {
    "url": "guide/snaps.html",
    "revision": "04fc8a1b13fb1ad2aab682011cc951fd"
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
