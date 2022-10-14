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
    "revision": "05888370345aeeeaa5912df7abd7853a"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
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
    "url": "assets/js/10.8c75f070.js",
    "revision": "a9eabeef11f8ee33829d3788ac07aa9f"
  },
  {
    "url": "assets/js/11.f74cf859.js",
    "revision": "98948dee413dfca6c1f257f6807f09a2"
  },
  {
    "url": "assets/js/12.783e0e5a.js",
    "revision": "6e365546c676e39d4eb26ac5f5040e68"
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
    "url": "assets/js/15.6932a00b.js",
    "revision": "28d3b242d1a5fae22ead2ab290ada81d"
  },
  {
    "url": "assets/js/16.67300195.js",
    "revision": "868ba83901e3103bebf14788ac77ecba"
  },
  {
    "url": "assets/js/17.8028663e.js",
    "revision": "32f0e701dda918012509b22ed6cfe4e1"
  },
  {
    "url": "assets/js/18.58a0bf04.js",
    "revision": "3ddbf755304c6a48d2c4907c23a5edf1"
  },
  {
    "url": "assets/js/19.4db10219.js",
    "revision": "ef8b22792885dce6d025687bafeec76f"
  },
  {
    "url": "assets/js/20.dc4a55b7.js",
    "revision": "7bb17b170f4ca25d040cbf88deb43bb4"
  },
  {
    "url": "assets/js/21.3fe4807b.js",
    "revision": "47330977afefb973e6f07abed2aa8df7"
  },
  {
    "url": "assets/js/22.9dff99c9.js",
    "revision": "524e4f4d4f83caf4a7f6c6a682e751da"
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
    "url": "assets/js/25.04bb5196.js",
    "revision": "0caf3c6bd9edf9f0fc968805b55ffd34"
  },
  {
    "url": "assets/js/26.88b4b7bb.js",
    "revision": "522f27b34f412077259e686f51ca7cba"
  },
  {
    "url": "assets/js/27.3bbe9a90.js",
    "revision": "5be318d438bab60a6e63d8cc57508969"
  },
  {
    "url": "assets/js/28.f393274f.js",
    "revision": "56ca8032f731d0ca6b73331ff147cedd"
  },
  {
    "url": "assets/js/29.a35d8ef3.js",
    "revision": "d58d284d764e4bd8be0238367ed73ab4"
  },
  {
    "url": "assets/js/30.31e7f649.js",
    "revision": "3b1f79ea134b74148c2f44bd60d88edb"
  },
  {
    "url": "assets/js/31.2e1ef9df.js",
    "revision": "d5c79793a003bf25015e5ad000a83cc0"
  },
  {
    "url": "assets/js/32.15534953.js",
    "revision": "79dc25763d763d34173c32df51ce6b89"
  },
  {
    "url": "assets/js/33.e2d1710f.js",
    "revision": "e0fa2876f9360f05f03a1624c84746f5"
  },
  {
    "url": "assets/js/34.0a8486f2.js",
    "revision": "509cff2b8035c7013377d7f7795a052a"
  },
  {
    "url": "assets/js/35.e373e28a.js",
    "revision": "46777964f57ce9f42502fa415aaad001"
  },
  {
    "url": "assets/js/36.0b53d3ef.js",
    "revision": "361538120bc8a5fa9d1a34ade58c3287"
  },
  {
    "url": "assets/js/37.708e05df.js",
    "revision": "3df3520746069defa4832f54bf750b5b"
  },
  {
    "url": "assets/js/38.1f674b38.js",
    "revision": "22b60a9d540791741faed133243d4153"
  },
  {
    "url": "assets/js/39.40452820.js",
    "revision": "ea358ed8d7444502950e8609f7ee6981"
  },
  {
    "url": "assets/js/4.335f270e.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.6bd2bfce.js",
    "revision": "23abe53ab3cd8198668a8984f57de69a"
  },
  {
    "url": "assets/js/41.d122e261.js",
    "revision": "a98416452e1de79d142b4d17beb164bf"
  },
  {
    "url": "assets/js/42.a160868e.js",
    "revision": "f6eed8a84ac898cebbaf161d80a9517c"
  },
  {
    "url": "assets/js/43.3a967495.js",
    "revision": "7c057a42164ea6936b359fdbb5f8dd1b"
  },
  {
    "url": "assets/js/44.a6121f2d.js",
    "revision": "22089dc9c2977f2ded0759ce38d36683"
  },
  {
    "url": "assets/js/45.91ad0a61.js",
    "revision": "170004e42bbc2c4358be2f4b0e00e86b"
  },
  {
    "url": "assets/js/46.7b527703.js",
    "revision": "9ae737f33910e75b0a9ae09e88a44d73"
  },
  {
    "url": "assets/js/47.2d6284c7.js",
    "revision": "aa4702100ec46e3084a325e5724a9121"
  },
  {
    "url": "assets/js/48.a524dddf.js",
    "revision": "70c1bb03d8330bbddcad89bd048e3016"
  },
  {
    "url": "assets/js/49.17c57319.js",
    "revision": "e2d5ff7e95f89852b0b538eecb683663"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/50.617cefa5.js",
    "revision": "2c3f8cf4e56c4f852526d40dc24a411c"
  },
  {
    "url": "assets/js/51.5ebfd1ab.js",
    "revision": "8173b6c1e394f44c0cabeb29cea6d322"
  },
  {
    "url": "assets/js/52.d6cc6a34.js",
    "revision": "f7fa90696d7c0c1cd31f854151e665bc"
  },
  {
    "url": "assets/js/6.408b7a4e.js",
    "revision": "f134cf5e3d99eea6a4ed24c7ac5b6c58"
  },
  {
    "url": "assets/js/7.2abaf22c.js",
    "revision": "ba14d26f7d37981c99ffcf173d3f2ec6"
  },
  {
    "url": "assets/js/8.29467d76.js",
    "revision": "461d6b7f698f98e73296bc46e5741ab1"
  },
  {
    "url": "assets/js/9.a901d6e4.js",
    "revision": "cb37366959b3927625011c72f277cdb1"
  },
  {
    "url": "assets/js/app.2232b0da.js",
    "revision": "2914bc726af4fb3e019ddec925c5be25"
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
    "revision": "5cd97c1b35fcd4bec71ebede50857a6b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "51f84c4de7bb23a8d2bd553590bf101c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "12d57fc7a73e68b17142b29c30ac970d"
  },
  {
    "url": "guide/contributors.html",
    "revision": "95729ebdc6b5fca3e217ddc7a990a7d8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d8fbb6ade921367558a8100ed57e83b8"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a1ea78b6283100f86b0e7af293a5abf8"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "eaaebd9cbd7416b63774bf81d44e4491"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "da31214fc63018f9aad878e275d7c462"
  },
  {
    "url": "guide/index.html",
    "revision": "c1ded5f532980d8c8b4b577c557f9a4c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e8d0108fe5a8f18d758a17536bb3e1be"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "da8b0fdcad9d8f2a74d064ef4204e929"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "d08bdbf505fd200107ccd7ef22486f5c"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "dc56c75eaa448827e0eaf51e4e2f0080"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "87b38781d2e69dd9a5ac23a3aea1b6ed"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "8b15b82d8d2888031d974979f9f00e98"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "84e61d0ab244cc6706ec95e57a1e2536"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "f2cee1b1af4c00cf6aa30d98ff61f3c3"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "a4cd66a789d29bb612917bd4a73f1919"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "ff5d090bb497540e4f55296242de33e4"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "6ab701ba6215ee88ead54ddea2e976eb"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "42102561d5e412c35abd447b58bcfbb4"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "998b406a199d5c0090eb01556fda902c"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "19decc1954f22f7a3905691eac1b2e5d"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "9dcb8d0c73afb8a1f3260a7d7c6fa375"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "21283f5ada01dbfd6e5b9b0f25f49409"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "6860e0a31e68488e6f24313c9a489780"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "270937e081eb1e06ed7b71da73cbfbc2"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a855b0b6e8e5059ecebaf9f4b11a9b42"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "d3566d936e47492a48988933c9268bbb"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "650dd4aa6d9bd6a0db6e3157c82e227d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "643e975fe9dc739b803d329528fd6eb8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "243c52e0b77bf1b85c0dfad50144bf23"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d1b18e45f76187f92159bdea5f9dda46"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "ed1ff0bf64353e008c3c3e9ae2ca0542"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "51ff6a8cf2bfaf1e8c3c5521996d8240"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "84a5b688ee0ea21d8eced2feaf61c46d"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "519e5cf6946ce46d1a13a8e11f55d920"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "078fb8df93f690d0a9810b3d2e12020f"
  },
  {
    "url": "guide/snaps.html",
    "revision": "ea68d6973103ca8f6bde7419ebc369b0"
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
