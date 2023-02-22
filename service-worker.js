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
    "revision": "02832136c947e125dd8247da70bfbbce"
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
    "url": "assets/js/14.b940967e.js",
    "revision": "ec6c6082aaf3dfb7dfb2dc520b166b07"
  },
  {
    "url": "assets/js/15.6932a00b.js",
    "revision": "28d3b242d1a5fae22ead2ab290ada81d"
  },
  {
    "url": "assets/js/16.df90c8d2.js",
    "revision": "6938ab27ef2b7a603b3c8d143f879757"
  },
  {
    "url": "assets/js/17.a3d9e177.js",
    "revision": "ab5802c321606f0eb24429bf1c5ef4ce"
  },
  {
    "url": "assets/js/18.17ed76e3.js",
    "revision": "c56dbb62ddb33d8752718244eb06bb08"
  },
  {
    "url": "assets/js/19.41550a32.js",
    "revision": "5c9f53fb71ee85e49627f0baf91e9fcf"
  },
  {
    "url": "assets/js/20.815b5134.js",
    "revision": "ad8285650d16fc2023297fd6ab979e51"
  },
  {
    "url": "assets/js/21.3fe4807b.js",
    "revision": "47330977afefb973e6f07abed2aa8df7"
  },
  {
    "url": "assets/js/22.dce1df44.js",
    "revision": "4df4ab2b98264ef6961ee690e7ff420c"
  },
  {
    "url": "assets/js/23.d43d53c6.js",
    "revision": "244a6b792e53f508d37207537d78e0fd"
  },
  {
    "url": "assets/js/24.098ad2f0.js",
    "revision": "e99c4637e9dd3b8f3ee92ca97d7d6de5"
  },
  {
    "url": "assets/js/25.03afa8f4.js",
    "revision": "faddd7ffbb9702c020a8ef23ff1474ff"
  },
  {
    "url": "assets/js/26.43759453.js",
    "revision": "5d0521e37b69825105fee7455339436f"
  },
  {
    "url": "assets/js/27.74373352.js",
    "revision": "4afdc5badf1a204dcadf8c48c3f5bd54"
  },
  {
    "url": "assets/js/28.ba53d2e6.js",
    "revision": "ce7d97bfe218dd51ef4104b63474a5b7"
  },
  {
    "url": "assets/js/29.8a1c2b7d.js",
    "revision": "228bd43c269bd1c5084aa1a95d21066d"
  },
  {
    "url": "assets/js/30.a00256d9.js",
    "revision": "afb9e42b8648d55f71ebf81f3629e19e"
  },
  {
    "url": "assets/js/31.8c9baf54.js",
    "revision": "db0dfb5ce43a4cb927f1140028fa1c93"
  },
  {
    "url": "assets/js/32.7152bedb.js",
    "revision": "b59a07f8cdd83d854e8b392cb020cab5"
  },
  {
    "url": "assets/js/33.68097aa7.js",
    "revision": "e12bdc1df384fc4a94fa5fdafe1beb72"
  },
  {
    "url": "assets/js/34.54b3aa21.js",
    "revision": "e7351f373020e038b11427e03d5ee6dc"
  },
  {
    "url": "assets/js/35.014211ce.js",
    "revision": "fabbe5db2308c1dc1ca1f65f3dfd1451"
  },
  {
    "url": "assets/js/36.424fa298.js",
    "revision": "d92bb960090673bc63ab33edfb92b46f"
  },
  {
    "url": "assets/js/37.e76d21ea.js",
    "revision": "5051e39c2caeb9f921f064119d7c01f2"
  },
  {
    "url": "assets/js/38.8efd5066.js",
    "revision": "5190259b002f048ec85fce4bf192c848"
  },
  {
    "url": "assets/js/39.2f93a6dc.js",
    "revision": "c1c61c8c50c444e3daba1c8a7ace1677"
  },
  {
    "url": "assets/js/4.7d26e848.js",
    "revision": "3efb78573eaa34628279365fa6f1d82a"
  },
  {
    "url": "assets/js/40.6c636cae.js",
    "revision": "3e22feff848b3ee82d053c2aa53472f9"
  },
  {
    "url": "assets/js/41.f089a1c9.js",
    "revision": "9bed66e146dffd786e7554bcb827b0d7"
  },
  {
    "url": "assets/js/42.c7141fe6.js",
    "revision": "d411d3a06c95226a83de77f33d674a89"
  },
  {
    "url": "assets/js/43.a2d53b87.js",
    "revision": "d7b7cc6d7f0675b6b6688fa01c7988f0"
  },
  {
    "url": "assets/js/44.877769f5.js",
    "revision": "40c58c9e3bb55b82309e30dc44aabf7a"
  },
  {
    "url": "assets/js/45.a12e4acd.js",
    "revision": "d71f553878b0178095131d1ab9183904"
  },
  {
    "url": "assets/js/46.44966cbf.js",
    "revision": "a5b21afa3c95ce6f8352b33d2d873258"
  },
  {
    "url": "assets/js/47.f40c0c2e.js",
    "revision": "8d4fc0ea7e56f6e68d771c69c5bd6543"
  },
  {
    "url": "assets/js/48.d35d4750.js",
    "revision": "73a4120767743d107fb0a4896b57ed12"
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
    "url": "assets/js/50.7d4ae732.js",
    "revision": "287e8a4458f83ab1e5aa73efe1a6266b"
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
    "url": "assets/js/app.00eb425e.js",
    "revision": "cd246e9fe03dc98725075b4676bff876"
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
    "revision": "ade26b57d4805ba858f8b97d3c52241f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "95cd21f16837906b941a9aaaef29b08f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "172334338ed11f07fb9d05f1d2a936d8"
  },
  {
    "url": "guide/contributors.html",
    "revision": "26144b887fedd4b3e3f00d027fca471f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "73a3ee17d272a7be9791171c00dbae8e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "09fb292ee34202cce6c30f6b5728387e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9143b1107f6cb3e38513c1d1f268130c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4c2e60c73d105de2035dcc53c04f2b07"
  },
  {
    "url": "guide/index.html",
    "revision": "d29fb5586523773767f8e8954b515218"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e148bcc32ba825b80cdd7a438b87059d"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "ef2d8c0abffedecf96656755f168e29d"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "97db6ad0f46b062099d590103d28b3df"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "ee11259754ee90674c7c0e8d832657b6"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "3ccb68f9a5ea8a94f3355fac4001efe8"
  },
  {
    "url": "guide/metamask-sdk-ios.html",
    "revision": "b54601c02beedb9b8280a5537c25db75"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "d6c23fa8c6f70da63290826e11737c84"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "e0a3e30d6f9f43100d9d7dbe512538b7"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "083e38f944982713f6d6b3ce6d13c8ef"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "7bed086858318a218a8b9c1f40040909"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "67f31e2b1f3fb3bb6c72bd6d200a9dd2"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "80bb5458101bc3d4d40cbc1a95b3ec46"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "e8db7dc6b6470baa8b0e8fbf8f01b7c9"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "006c44c5dc6e96257f8cb27d17d1ca29"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "adee4c13e7b502e1666704bef3a11cc2"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "91cba095caae3b304016ead20431991f"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "6f3b22202918cda6a3d4339a1bdccff6"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "aada3481a07108bafb3e735bdc1a3eb9"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f663ebc4c44e29fe60faaa831807a50b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "bcc7d914d40933fcfd87e5f71ed75812"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4d9d33aefcb7e1c4579e1539c61ecec1"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2d76e734e651236bb3a7da71e17f34a6"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8ac5d7db3f13963764f67080e6349fde"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a0e6c3474b2437bcb64beb82b70b1931"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bbd8cd24d1e1847a3bf904add6273bba"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c88cd869dcdaf210c72f3dee6a4e25e8"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "668b0a589484556819fe80307c1352a4"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "92d67fe00f76002c6b3f11fec7ea5e01"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "174c13f0881cee3cbba857be23b34626"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9672529e66512fabcef555eb0c8e6047"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "d8bc434341678d3ea94c83b8f127baba"
  },
  {
    "url": "guide/snaps.html",
    "revision": "97e3b19f489d829d02e6543d7e337a13"
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
