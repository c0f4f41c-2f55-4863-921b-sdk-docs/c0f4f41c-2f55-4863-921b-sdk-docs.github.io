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
    "revision": "9859f596c7fcf8df9eea176c641f9510"
  },
  {
    "url": "assets/css/0.styles.29ddec2e.css",
    "revision": "c14a988a41685bced93319181cf3b8c5"
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
    "url": "assets/js/12.a0264f1d.js",
    "revision": "5cc46ed6fac8a2de8627dc28e16affc8"
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
    "url": "assets/js/16.e8db1a57.js",
    "revision": "f6b0bec35f3f529c5faaaf066b761fc2"
  },
  {
    "url": "assets/js/17.a3d9e177.js",
    "revision": "ab5802c321606f0eb24429bf1c5ef4ce"
  },
  {
    "url": "assets/js/18.298b7f8c.js",
    "revision": "c226c5be5697bd528b991c14bf9a2a98"
  },
  {
    "url": "assets/js/19.41550a32.js",
    "revision": "5c9f53fb71ee85e49627f0baf91e9fcf"
  },
  {
    "url": "assets/js/20.dc4a55b7.js",
    "revision": "7bb17b170f4ca25d040cbf88deb43bb4"
  },
  {
    "url": "assets/js/21.63a40cb6.js",
    "revision": "1a4632ecc7be58bbb93404c5bd93d2e5"
  },
  {
    "url": "assets/js/22.c1de6add.js",
    "revision": "2042d060a95ec6ed102a54fa185194f8"
  },
  {
    "url": "assets/js/23.3ff51f90.js",
    "revision": "0d060e6f68acc0c5a06699a0365d4ce2"
  },
  {
    "url": "assets/js/24.098ad2f0.js",
    "revision": "e99c4637e9dd3b8f3ee92ca97d7d6de5"
  },
  {
    "url": "assets/js/25.5b2af8d0.js",
    "revision": "24a624e461ffd6c1d00f51073a15049e"
  },
  {
    "url": "assets/js/26.2698fc8f.js",
    "revision": "d44c6097fd58698f57c028b404c1a5e3"
  },
  {
    "url": "assets/js/27.7f5f181f.js",
    "revision": "5a404fcd32c046149b26e774bda483f8"
  },
  {
    "url": "assets/js/28.ba53d2e6.js",
    "revision": "ce7d97bfe218dd51ef4104b63474a5b7"
  },
  {
    "url": "assets/js/29.4458dcec.js",
    "revision": "e1076d7859f92f7d3d6dbb6b5bcbe225"
  },
  {
    "url": "assets/js/30.9a12cb36.js",
    "revision": "38e2e165114aaa4554d32ae5262660b6"
  },
  {
    "url": "assets/js/31.3c2bcd89.js",
    "revision": "74ea6c55f8b61bc1bc1c07116f969a5f"
  },
  {
    "url": "assets/js/32.edf4b652.js",
    "revision": "a8eead3b923a95f42802638382de4743"
  },
  {
    "url": "assets/js/33.9a8a64e2.js",
    "revision": "c55969ef770ed7536d172120271e8518"
  },
  {
    "url": "assets/js/34.bc4d5632.js",
    "revision": "b5cd9135e336811cc6352709d3273b93"
  },
  {
    "url": "assets/js/35.014211ce.js",
    "revision": "fabbe5db2308c1dc1ca1f65f3dfd1451"
  },
  {
    "url": "assets/js/36.68da29a2.js",
    "revision": "5bc3dba2eafbd1693f4b27422199e157"
  },
  {
    "url": "assets/js/37.3a956f74.js",
    "revision": "f83e40fdcfa772731e25e9604d80f41c"
  },
  {
    "url": "assets/js/38.8efd5066.js",
    "revision": "5190259b002f048ec85fce4bf192c848"
  },
  {
    "url": "assets/js/39.73528062.js",
    "revision": "b39809f9f8815d6003f53a21e05e6a7a"
  },
  {
    "url": "assets/js/4.7d26e848.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.43e2e807.js",
    "revision": "9b8a55cbd3e28cb6470cc854ac3dd801"
  },
  {
    "url": "assets/js/41.a8f2873a.js",
    "revision": "c9a37e41fee003209dd2184059ee4ac1"
  },
  {
    "url": "assets/js/42.2978ae2a.js",
    "revision": "e5d120eb93be35a521aa93321b27a394"
  },
  {
    "url": "assets/js/43.bf27c1e6.js",
    "revision": "6a6b714cc16ee4f8b777121b64b187b2"
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
    "url": "assets/js/49.70f42589.js",
    "revision": "3efd56f194a43f638cba69039111a32d"
  },
  {
    "url": "assets/js/5.c5d1e422.js",
    "revision": "afbda0ad702ea1b8a11a91496cdd97c6"
  },
  {
    "url": "assets/js/50.ffc18222.js",
    "revision": "746e700b4dc57e02868d433f7032738b"
  },
  {
    "url": "assets/js/51.4cd0339e.js",
    "revision": "3cdd7b924c9333db6baf3fe932dece47"
  },
  {
    "url": "assets/js/52.af1adf7d.js",
    "revision": "2b05c7aaaa2b2fcd061cc705b777543a"
  },
  {
    "url": "assets/js/53.641a804e.js",
    "revision": "b49536fc7321e91eed5d804f83fbdbb4"
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
    "url": "assets/js/9.57f04676.js",
    "revision": "5eb8c278be586ac8384a2a7468b69c6f"
  },
  {
    "url": "assets/js/app.4586a63c.js",
    "revision": "f572b0086397f4e27142a516885b7a5f"
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
    "revision": "fc98617bb055776c344bd3df8903769c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "facd038b75a9b480bfa4b9a8a3e55128"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "83655c030042ef1c0cd5a276fabc2d07"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f19cfdbd671e4c9fcadd18ce90b7fe20"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0872e3621591303b90254515a2cf0a1b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "096faddb6a39986ee3986f755da6e6e7"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0121fb06583c5e4a81a68802438bb58c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "326f05568d9b4c019238ccbff54b6a72"
  },
  {
    "url": "guide/index.html",
    "revision": "a871bdbb76616d486e9e8588e13aaf57"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "90d8f9282a019e3dfb9ce0e6a5df9364"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "be533f9856425da8c96a9e1f474ec775"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "06b18a5f28cc167d35c947bd26cac6de"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "d09e40126962a602cdadff7ab3e21e12"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "6bd17d9fa458a4d814271fd7eabe90d6"
  },
  {
    "url": "guide/metamask-sdk-ios.html",
    "revision": "55052857ab7a8c407f21005ada9d1e07"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "34987569894a4bf90f4a011d7f21f193"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "fe4857033d0fac5611ff4fc97b3e1fba"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "f6052c3cc11c72b4c54c8e611d7d9b23"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "cb96ecf86de1f337932a2551f833dfb4"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "36a498e974d27ca0b83a4ef231afdb15"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "1e719644b376458bbd796e50dbaf775c"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "3ac04367467970dabb13f9e3703f280b"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "f4dca72fd3ba1e6ceaa6c984f520d5cb"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "7a6c1376daf58a1fece5bf6757d2a724"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "818f9310e1de5b612350c2a77ddacc9b"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "f85e678e5c4e290056b0ee73e414b5df"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "7e6d20e91501dfd51031755cc4e901e6"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0adf2da4bf3def1f2b75195dcf21a9a5"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2155683c3c849d4a34229a1478aa141e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "23a7f69e58d701b23f12ae170d71a76d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9cc2788b27695a812cd726fc77227f16"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b373dd5c984828af0d2b258ada9cc6e3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "cd8a6354756c8de783574fbb7c5bf906"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "eb015943e11b94def714054c99dba345"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d542085d4e967fe4c1b6cc1057c717a0"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9510c5f60963b2d450cb97fdcfe379ac"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "09cd3e6c9aca9c6d57b7b4ad0be6e9a1"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "0192fffceb99d98f8494a7f19622554f"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "599ceaec4abf09ecf749c6a7bbf2e62b"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "8e63c96177ef9690d690f6bb61c0d851"
  },
  {
    "url": "guide/snaps.html",
    "revision": "5201ba916b604ded314fb11494c85269"
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
