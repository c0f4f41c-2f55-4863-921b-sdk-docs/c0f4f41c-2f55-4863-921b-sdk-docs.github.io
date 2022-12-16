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
    "revision": "6935ede8c52599a9dfa4cc46165b43b6"
  },
  {
    "url": "assets/css/0.styles.d1ff4bc1.css",
    "revision": "8fd8abafbc4640af7580a87658cdbe76"
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
    "url": "assets/img/unity_tutorial_video.b8df28e4.png",
    "revision": "b8df28e4431019fd16d3afd590a955ab"
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
    "url": "assets/js/12.e01a811f.js",
    "revision": "bbc7cdf9831ea60f2281eef8eaaf6287"
  },
  {
    "url": "assets/js/13.2a03752d.js",
    "revision": "c1c4c9de080bfe5743efa145fbeb9a24"
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
    "url": "assets/js/18.8e6ad33f.js",
    "revision": "6d58a29813d389d8de7773823515ac3b"
  },
  {
    "url": "assets/js/19.68da8ea1.js",
    "revision": "bd1461dcbe61c7876b13ed957d730da4"
  },
  {
    "url": "assets/js/20.5a7cdced.js",
    "revision": "4c7a7e67f829c676c7aac2d2da3035ba"
  },
  {
    "url": "assets/js/21.14477fa8.js",
    "revision": "8b45e7029cd9dc7b84d1d366bcaacb11"
  },
  {
    "url": "assets/js/22.62c42bba.js",
    "revision": "1424a77f434557d060d5d1cde8f39cea"
  },
  {
    "url": "assets/js/23.297766fa.js",
    "revision": "add7c398b762dca0774807102fa8e115"
  },
  {
    "url": "assets/js/24.bd840ca3.js",
    "revision": "e20ddf8453c5ac6fad0296ede65097cc"
  },
  {
    "url": "assets/js/25.28d33d20.js",
    "revision": "e11d90bbaa6c7be2df32614725b9d96d"
  },
  {
    "url": "assets/js/26.b1612835.js",
    "revision": "ecc9da2d7b34f32b9d10a785e6117b25"
  },
  {
    "url": "assets/js/27.5a732ccd.js",
    "revision": "c8587a6ff4817d8d377c4a52266a9f2f"
  },
  {
    "url": "assets/js/28.ba53d2e6.js",
    "revision": "ce7d97bfe218dd51ef4104b63474a5b7"
  },
  {
    "url": "assets/js/29.09c7028e.js",
    "revision": "02a09729638907d1ace056c92b626b19"
  },
  {
    "url": "assets/js/30.30b0f297.js",
    "revision": "399b992b210f1d39afea1b36d6935c69"
  },
  {
    "url": "assets/js/31.99c2308f.js",
    "revision": "bef3f269bac8517515c421f6288a6403"
  },
  {
    "url": "assets/js/32.2ef35652.js",
    "revision": "94ef0cb25d5277a91a61400352b8f245"
  },
  {
    "url": "assets/js/33.f714bfa0.js",
    "revision": "dffae40760f67b9de01584e4bf4743ed"
  },
  {
    "url": "assets/js/34.2d6f9f03.js",
    "revision": "4d3c92949813ff2dd2ee9bf4ffea2599"
  },
  {
    "url": "assets/js/35.70f1b9ff.js",
    "revision": "26255c96c257af0356ad6e9ae1a2f883"
  },
  {
    "url": "assets/js/36.424fa298.js",
    "revision": "d92bb960090673bc63ab33edfb92b46f"
  },
  {
    "url": "assets/js/37.aaf46d71.js",
    "revision": "0261666fd0468a2b4add8b58cf5b5608"
  },
  {
    "url": "assets/js/38.47087416.js",
    "revision": "090fa2531d560abe49ec7a154eb05a6c"
  },
  {
    "url": "assets/js/39.621bfde7.js",
    "revision": "9f9f08e4403a93d9967a5cf94c536eac"
  },
  {
    "url": "assets/js/4.f0af71a6.js",
    "revision": "ea03bb15b1d9f6ed38826daa53b0ccc4"
  },
  {
    "url": "assets/js/40.3269f0f6.js",
    "revision": "dd6b3cda2322efc61fbba6b2831f6502"
  },
  {
    "url": "assets/js/41.3043ea36.js",
    "revision": "ece4f1b72c7b33f70de0f0b47b703e05"
  },
  {
    "url": "assets/js/42.f9a491fd.js",
    "revision": "9d14ad352b01bbfc35b0d582625f141c"
  },
  {
    "url": "assets/js/43.4b587fff.js",
    "revision": "f049aa3eb936355cbd40053e4c77d080"
  },
  {
    "url": "assets/js/44.350c36f4.js",
    "revision": "e801ad78fb2028cc1c12f53741f022dc"
  },
  {
    "url": "assets/js/45.51af5a35.js",
    "revision": "bebae7d6be95652ef55fbeb74f31feb1"
  },
  {
    "url": "assets/js/46.e31ec392.js",
    "revision": "46129e23b49d857cf6ec9f9d0b974cfd"
  },
  {
    "url": "assets/js/47.8ed3d528.js",
    "revision": "99e36a4edc46c03b45ad15df47260d4b"
  },
  {
    "url": "assets/js/48.b3a80157.js",
    "revision": "ffab71f68bf1c8b800a1f8192671bf99"
  },
  {
    "url": "assets/js/49.6c0920b4.js",
    "revision": "7d34a7566aba767d30337f9af07c4e9c"
  },
  {
    "url": "assets/js/5.92ba9df5.js",
    "revision": "6339e93d48d91e7203227d4580876063"
  },
  {
    "url": "assets/js/50.03dda090.js",
    "revision": "9c59b1faca15baa4818719e67bab3948"
  },
  {
    "url": "assets/js/51.be5f5c1e.js",
    "revision": "fdd0faf3cf511dc7ccc314890f2f6a50"
  },
  {
    "url": "assets/js/52.f50dc954.js",
    "revision": "9f366d66160e6abffa04a73a56ed2b76"
  },
  {
    "url": "assets/js/53.b58e32fe.js",
    "revision": "4c309a3539fbcdf996d8c9f0e9e44e89"
  },
  {
    "url": "assets/js/6.3f9a92c5.js",
    "revision": "cead8b01b3fb2d8f4cc1116726d65dc2"
  },
  {
    "url": "assets/js/7.72ab9b7c.js",
    "revision": "4f042bb38b5404f54c48786944db28bd"
  },
  {
    "url": "assets/js/8.045baf3c.js",
    "revision": "3f66bb7f10bc095f426f2676d129b6ed"
  },
  {
    "url": "assets/js/9.7a784fac.js",
    "revision": "f22f48cb1795beed70aa343519866b0a"
  },
  {
    "url": "assets/js/app.b2f10fc4.js",
    "revision": "f4339acf31e1c86592a79f8b77161982"
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
    "revision": "9bc9158ba71012d0eac66c03e22fa1f6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "72354b4a6988b64bec7e87695956c28f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "99cba170372af009360fd35cca0a86c6"
  },
  {
    "url": "guide/contributors.html",
    "revision": "1b5d231b3bc9ab5b1322d2fc3793c99d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8314e53dd665578aa2fd6bbced525384"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "12f4f98f04afa352b6546cd98c1e7f90"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "35e4b92750330ed76568be31487e6142"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "292b858bf8891e7d87019a9e4b3f7744"
  },
  {
    "url": "guide/index.html",
    "revision": "020d13b939a076bdfd8fef159602676d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d5321fd20f1b5ba19af4672ddecea760"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "59e577d786bd3b2b89e4c2bf6e59767f"
  },
  {
    "url": "guide/metamask-sdk-concepts.html",
    "revision": "673302e1a46f48e5a3023811cefaf3b1"
  },
  {
    "url": "guide/metamask-sdk-gaming.html",
    "revision": "56291ed84e685f6aba291815a273c903"
  },
  {
    "url": "guide/metamask-sdk-intro.html",
    "revision": "297c046dc2214bfd80436adae3a04c2d"
  },
  {
    "url": "guide/metamask-sdk-js/index.html",
    "revision": "efd7efd949bbb7a6ba63b1715e5459d4"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-electron.html",
    "revision": "183248b2d355716d5a4e4c7af12a6a89"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-js-options.html",
    "revision": "1ff4527020518fcd64dacb33a46bd589"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-nodejs.html",
    "revision": "499d2707e67b40a2550bc8be04ae3917"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-other-frameworks.html",
    "revision": "7159b2987a34e13462937e786e653b23"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-pure-javascript.html",
    "revision": "f3b6edf3b120702449db61c4b5f6ed13"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react-native.html",
    "revision": "dbbad0704afbd7dc73d66da8e8b10acf"
  },
  {
    "url": "guide/metamask-sdk-js/metamask-sdk-react.html",
    "revision": "6773bdb6792eca24e4479269273dfb41"
  },
  {
    "url": "guide/metamask-sdk-known-issues-future-work.html",
    "revision": "16873d6a244f1d31ce488e738e3a107b"
  },
  {
    "url": "guide/metamask-sdk-mobile.html",
    "revision": "2f1027cbcd2b5a5dcf6ba9e78616e0e1"
  },
  {
    "url": "guide/metamask-sdk-support.html",
    "revision": "6852786e0c8d7abc01763a5d1db8efdf"
  },
  {
    "url": "guide/metamask-sdk-unity.html",
    "revision": "569877068d9cfe1e2f999fcd37e85e6d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "18fe2bdd82ffc21847af10aac9f6db12"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2eecdcbdbe123c24274ec1d42845a9f6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "fa477faa04d3fb47575c9b5eaa1544c3"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "08186b8df0f2b14357a5935f2add45bf"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0489f0279a7d678d3ef0df53829c7b0a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "35f090cfb0c5dededd75abfc2ff9bda4"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c81afd41dbc2c4fc40ffad2fe38ab747"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "f3be8506fd9a016a3dd1ece472c61b98"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "919dc4a83eda1de93cec30ee382a0e94"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5ad92183ade978c9b4d41d967fe38fce"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "f32c7b4a6bd257525130b93a9a5f70fa"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "0abbd310586ac711314536584b853687"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "cd7bcbe4905e637da394e9d3597a7c94"
  },
  {
    "url": "guide/snaps.html",
    "revision": "b6e1556c6121250a8f777c086437d636"
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
