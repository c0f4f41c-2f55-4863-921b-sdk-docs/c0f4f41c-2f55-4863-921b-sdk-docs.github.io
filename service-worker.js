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
    "revision": "1c5b7bcfbd0d07d7ab6630d53d1f770f"
  },
  {
    "url": "assets/css/0.styles.fa09ab35.css",
    "revision": "7d1e17401d2dbf4ca056f95868e9981e"
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
    "url": "assets/js/10.aa67722d.js",
    "revision": "5fd493d124d1b801bf1f1cd7ccf7f4d1"
  },
  {
    "url": "assets/js/11.9845dae2.js",
    "revision": "29a6cb087b704b98b813685fedb23f9d"
  },
  {
    "url": "assets/js/12.e01a811f.js",
    "revision": "bbc7cdf9831ea60f2281eef8eaaf6287"
  },
  {
    "url": "assets/js/13.4f3209c4.js",
    "revision": "dedb2ea0837cf02ccc3d35e79a964c99"
  },
  {
    "url": "assets/js/14.14702349.js",
    "revision": "05c883f718a2531f4cb6421cb3eb5ba2"
  },
  {
    "url": "assets/js/15.c025855f.js",
    "revision": "a451607350e78e4da52e1f2a710d858c"
  },
  {
    "url": "assets/js/16.c524c1e8.js",
    "revision": "c8cb4b081209648adfb9690541acb482"
  },
  {
    "url": "assets/js/17.ea804405.js",
    "revision": "34ad8b5956ede3676a6022f0d0f22d19"
  },
  {
    "url": "assets/js/18.fded3646.js",
    "revision": "e5b7d833e6675c8268b68c9515be61ea"
  },
  {
    "url": "assets/js/19.dd6f933f.js",
    "revision": "6ce8f9487f19f20179e17d8670793bc5"
  },
  {
    "url": "assets/js/20.85d85fe9.js",
    "revision": "bd053ddbec48a95985825f86fa0aaeb9"
  },
  {
    "url": "assets/js/21.06383ecd.js",
    "revision": "d5ab8272e30e1c9f23772cd96584048c"
  },
  {
    "url": "assets/js/22.421d9483.js",
    "revision": "90dc2684973b8727f762077726f9aa69"
  },
  {
    "url": "assets/js/23.3860f311.js",
    "revision": "dc4e65116f5c6a4b990dc0ce9f4ea821"
  },
  {
    "url": "assets/js/24.50b66f7b.js",
    "revision": "c800cb03ad05e76c04faf77afb96f970"
  },
  {
    "url": "assets/js/25.7c4dc572.js",
    "revision": "e9698a713c012daf4490eb885cad7579"
  },
  {
    "url": "assets/js/26.2698fc8f.js",
    "revision": "d44c6097fd58698f57c028b404c1a5e3"
  },
  {
    "url": "assets/js/27.ee970291.js",
    "revision": "fc610e2c22c88beab1ac4b96fccad406"
  },
  {
    "url": "assets/js/28.0b06f203.js",
    "revision": "8cb3571ebd0af3793190939dabdb9f1e"
  },
  {
    "url": "assets/js/29.7b082c70.js",
    "revision": "af2800af506c7e3c4d8f1ba54c66ac09"
  },
  {
    "url": "assets/js/30.80fb53f8.js",
    "revision": "fc995675e46f3c5ccf56ea38811bb499"
  },
  {
    "url": "assets/js/31.3c2bcd89.js",
    "revision": "74ea6c55f8b61bc1bc1c07116f969a5f"
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
    "url": "assets/js/34.78eed321.js",
    "revision": "db1b1b4507d34deea39ac0fcd56d1a27"
  },
  {
    "url": "assets/js/35.83bab299.js",
    "revision": "b1fc11fccccbf6b538041818ce2e476a"
  },
  {
    "url": "assets/js/36.424fa298.js",
    "revision": "d92bb960090673bc63ab33edfb92b46f"
  },
  {
    "url": "assets/js/37.1282237b.js",
    "revision": "70afb3f06c47b2c7014f57e96df0d936"
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
    "url": "assets/js/40.de0a9818.js",
    "revision": "2f95dfea0a51f66274885d758ffd888a"
  },
  {
    "url": "assets/js/41.fba8b5c4.js",
    "revision": "e2e037d68245140fb17da0c7bea55b0d"
  },
  {
    "url": "assets/js/42.c7141fe6.js",
    "revision": "d411d3a06c95226a83de77f33d674a89"
  },
  {
    "url": "assets/js/43.2a632321.js",
    "revision": "06319f7b8590e24d152cdaa42e742afb"
  },
  {
    "url": "assets/js/44.fe6058a7.js",
    "revision": "c0c7d1b4bb895aa0a75395e308ce2507"
  },
  {
    "url": "assets/js/45.ca9597fb.js",
    "revision": "65658d532cb6378e04fe45322b8af5ea"
  },
  {
    "url": "assets/js/46.39210f0c.js",
    "revision": "b2202fba250cfa6cb2fd98bcfd1991eb"
  },
  {
    "url": "assets/js/47.0f87069c.js",
    "revision": "2da82f9bd37d26a6edf3c2320ee015fc"
  },
  {
    "url": "assets/js/48.a6f9409c.js",
    "revision": "755636abeff815a5407096d80036bf47"
  },
  {
    "url": "assets/js/49.be52d9ea.js",
    "revision": "8b2acb9d5755fd666fd1a294427de2a5"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/50.bd580f37.js",
    "revision": "ac976333b6852898a67d70fa68d43384"
  },
  {
    "url": "assets/js/51.b2b804f4.js",
    "revision": "75f1bcc87cc730d1d47429543cd93688"
  },
  {
    "url": "assets/js/52.ce0601c8.js",
    "revision": "d75405b3ea2020dff5751cf2aa30d68a"
  },
  {
    "url": "assets/js/53.5ed84b41.js",
    "revision": "d9996f65866f4fcfe0c37f0bd83345f4"
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
    "url": "assets/js/9.89fc5bd8.js",
    "revision": "a0b310a313c208dcc64d0627e28a479c"
  },
  {
    "url": "assets/js/app.92b2db76.js",
    "revision": "0518b27a0df9a3bd312de2665797de58"
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
    "revision": "1b8001916a4f8bd9380db2da6cee136d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b15ca9b26f9ad08f50f63f7676858e7b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "58dc717eb7d7b4b2b3a70bae687feb42"
  },
  {
    "url": "guide/contributors.html",
    "revision": "546dcc103bd258a248704ac0f55296e9"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "c756d1b2649ae47aedc158199aa7b32b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "3280259171e20f252185e3399ed96d3c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b0a549d3a7d67564a383622dda9dc40d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e9ef8789cb5b0c0f2d5571ac29f3c693"
  },
  {
    "url": "guide/index.html",
    "revision": "9038ea2f47faae3af8dc2adec85a8d42"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "baf36a60d778f11fa45c5da92431f71b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4898112f264044562aeb3cd05a701c20"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "43919013eea5756e0c57622c1d198a72"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "2563a50e217d669964668c8297dad3e3"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "8be16706e00d67d298f40d455b596433"
  },
  {
    "url": "guide/metamask-sdk-ios.html",
    "revision": "42e24d7feda2b179e40b668b0f74f0da"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "e212efecaaa6ce3ac45ae03d2a40a57f"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "38110e02eb78169913a39ea3840f9b75"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "aec3d509b0ed6fd6d0248fcab78c59b5"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "3f68f4423c1d6b27be592b193c232c20"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "1f27cf667d0f91fce1b9b52b5f50bbd3"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "86da6eff57e5574a63655e2b99f941c6"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "123ca75aa56c7f46f5e5308f4b8e6abb"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "fe1b9ac36b959ba017470e66079269e2"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "d24c249a221bc2e464de303e0947634a"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "f32a79b28ed8af2cba3c591dd05b7cb0"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "54e1765b1c9bd4312a9978c871564110"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "251ad8fa14f7ea21e928606c6bc30b68"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0bee254c6244a4f5ed47d174a0b6ce78"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c8d1a50fde72c0537da20d7a61b9a3cb"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "d6672b3e5112d50eb67c285ee2da22f8"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "7e81a2e4689f0673ff92311c2599efd2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "66cfd3fc43448e736289f82bca9ef95c"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fb317d37908028a63728ea40e6e04056"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "fdf39dbad966e5e3aa42cbe29512c07f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "f614efe7f96ee80522dbdea004621944"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8bc4a29f6f4d7a53598fd4e01262dffa"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "de84dc2a39089dd2fd4807a6835a024f"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "44cf37c344046725cc50dff61e3daa22"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "0c7c0dc8b336d1536ee5b711dfe6593f"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "6b1b9f40a26632fb68a61841f83a406e"
  },
  {
    "url": "guide/snaps.html",
    "revision": "221eb5a94480e5f5247ced54a7d43f51"
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
