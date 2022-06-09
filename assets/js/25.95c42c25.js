(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{416:function(e,t,a){"use strict";a.r(t);var s=a(11),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gaming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gaming"}},[e._v("#")]),e._v(" Gaming")]),e._v(" "),a("h2",{attrs:{id:"unity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unity"}},[e._v("#")]),e._v(" Unity")]),e._v(" "),a("p",[e._v("MetaMask SDK for Unity")]),e._v(" "),a("h3",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" "),a("strong",[e._v("How it works")])]),e._v(" "),a("p",[e._v("You can import the MetaMask SDK into your Unity game to enable users to easily connect with their MetaMask Mobile wallet.")]),e._v(" "),a("p",[e._v("The SDK will render a QR code in the UI which users can scan with their MetaMask Mobile app. Now you can use all the "),a("RouterLink",{attrs:{to:"/guide/guide/ethereum-provider.html"}},[a("code",[e._v("ethereum")]),e._v(" methods available")]),e._v(" right from your game!")],1),e._v(" "),a("h3",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Getting started")])]),e._v(" "),a("h4",{attrs:{id:"_1-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install"}},[e._v("#")]),e._v(" 1. Install")]),e._v(" "),a("p",[e._v("To install the module, you simply have to download/clone the "),a("a",{attrs:{href:"https://github.com/MetaMask/metamask-unity-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),a("OutboundLink")],1),e._v(" and import it via the "),a("strong",[e._v("Package Manager")]),e._v(".")]),e._v(" "),a("p",[e._v('To do that, go to the Window menu > Package Manager. Select the + and "Add Package from Disk," then select the folder where you have downloaded or cloned the repository. Select the '),a("code",[e._v("package.json")]),e._v(' file and select "Open". You should see the '),a("code",[e._v("MetaMask SDK")]),e._v(" package now listed in the project packages.")]),e._v(" "),a("h4",{attrs:{id:"_2-add-the-metamasksdkqrcodeimage-prefab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-the-metamasksdkqrcodeimage-prefab"}},[e._v("#")]),e._v(" 2. Add the MetaMaskSDKQRCodeImage prefab")]),e._v(" "),a("p",[e._v("The first thing to do is add the "),a("strong",[e._v("MetaMaskSDKQRCodeImage")]),e._v(" prefab to your scene. It is located in the package directory > Runtime folder.")]),e._v(" "),a("p",[e._v("This is a "),a("code",[e._v("Raw Image")]),e._v(" that is used by the connect script to display the QRCode that needs to be scanned by MetaMask mobile app to establish the connection.")]),e._v(" "),a("h4",{attrs:{id:"_3-prompt-the-qr-code-for-users-to-scan-with-metamask-mobile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-prompt-the-qr-code-for-users-to-scan-with-metamask-mobile"}},[e._v("#")]),e._v(" 3. Prompt the QR Code for users to scan with MetaMask Mobile")]),e._v(" "),a("p",[e._v("In order to connect your application, you can call "),a("code",[e._v("MMSDK.ethereum.connect")]),e._v(" with your dapp information like so:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var dappMetadata = new MMSDK.DappMetadata\n    {\n        name = "myapp",\n        url = "myapp.com"\n    };\n\n// This is the same as calling "eth_requestAccounts"\nvar response = await MMSDK.ethereum.connect(dappMetadata);\n')])])]),a("p",[e._v("This will render the QRCode in the UI for your users to scan with MetaMask Mobile. After user scan this QR code, a connect screen will appear in MetaMask Mobile where the user can now approve the connection with your game.")]),e._v(" "),a("h4",{attrs:{id:"_4-you-can-now-call-any-ethereum-provider-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-you-can-now-call-any-ethereum-provider-method"}},[e._v("#")]),e._v(" 4. You can now call any ethereum provider method")]),e._v(" "),a("p",[e._v("Once the connection has been established, you are now able to call any "),a("code",[e._v("ethereum")]),e._v(" method listed on the "),a("a",{attrs:{href:"https://github.com/MetaMask/metamask-sdk-docs/blob/main/docs/guide/ethereum-provider.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Ethereum Provider API"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Here's a simple example of a "),a("code",[e._v("request")]),e._v(" method, specifically an "),a("code",[e._v("eth_chainId")]),e._v(" one:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var requestChainId = new MMSDK.EthereumRequest\n    {\n        method = "eth_chainId",\n        @params = new string[] { }\n    };\n\nvar responseChainId = await MMSDK.ethereum.request(requestChainId);\n')])])]),a("h3",{attrs:{id:"available-prefabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-prefabs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Available Prefabs")])]),e._v(" "),a("p",[e._v("Here's the list of the available prefabs:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("MetaMaskSDKQRCodeImage")]),e._v(" (mandatory): this is the only "),a("strong",[e._v("mandatory")]),e._v(" prefab and it's a "),a("code",[e._v("Raw Image")]),e._v(" that is used to display the connection QRCode")]),e._v(" "),a("li",[a("strong",[e._v("ButtonConnect")]),e._v(": a sample button with the "),a("code",[e._v("ConnectButton")]),e._v(' script attached to it and called on "on click" event')]),e._v(" "),a("li",[a("strong",[e._v("ButtonSendTransaction")]),e._v(": a sample button with the "),a("code",[e._v("SendTransactionButton")]),e._v(' script attached to it and called on "on click" event')]),e._v(" "),a("li",[a("strong",[e._v("ButtonSign")]),e._v(": a sample button with the "),a("code",[e._v("SignButton")]),e._v(' script attached to it and called on "on click" event')])]),e._v(" "),a("p",[a("strong",[e._v("MetaMaskSDKQRCodeImage")]),e._v(" is mandatory.")]),e._v(" "),a("h3",{attrs:{id:"package-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-structure"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Package Structure")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Documentation")]),e._v(": contains the documentation")]),e._v(" "),a("li",[a("strong",[e._v("Packages")]),e._v(": contains some of the packages that could not be imported automatically. In particular the "),a("code",[e._v("SocketIO")]),e._v(" module")]),e._v(" "),a("li",[a("strong",[e._v("Plugins")]),e._v(": contains the plugins needed by the package. In particular the cryptographic library (BouncyCastle)")]),e._v(" "),a("li",[a("strong",[e._v("Runtime")]),e._v(": contains the main scripts to be used in your project. You can find a more detailed description of those script below.")]),e._v(" "),a("li",[a("strong",[e._v("Samples")]),e._v(": contains a test application scene that can be used as a referral for your project")]),e._v(" "),a("li",[a("strong",[e._v("UserSettings")]),e._v(": contains user settings")]),e._v(" "),a("li",[a("strong",[e._v("CHANGELOG.md")]),e._v(": the package changelog")]),e._v(" "),a("li",[a("strong",[e._v("LICENSE.md")]),e._v(": the package license")]),e._v(" "),a("li",[a("strong",[e._v("package.json")]),e._v(": the json file describing the package")]),e._v(" "),a("li",[a("strong",[e._v("README.md")]),e._v(": this file")]),e._v(" "),a("li",[a("strong",[e._v("Third Party Notices.md")]),e._v(": third party notices")])]),e._v(" "),a("h3",{attrs:{id:"runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Runtime")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Runtime")]),e._v(" folder contains the cs scripts that you need to import or use in your script for your project.")]),e._v(" "),a("h4",{attrs:{id:"msdk-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msdk-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("MSDK.cs")])]),e._v(" "),a("p",[e._v("This is the main SDK class of the package.")]),e._v(" "),a("h4",{attrs:{id:"msdk-ethereum-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msdk-ethereum-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("MSDK_Ethereum.cs")])]),e._v(" "),a("p",[e._v("This gives your project access to the "),a("code",[e._v("ethereum")]),e._v(" method.")]),e._v(" "),a("h4",{attrs:{id:"msdk-keyexchange-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msdk-keyexchange-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("MSDK_KeyExchange.cs")])]),e._v(" "),a("p",[e._v("This class is used to establish a secure connection between your project application and the MetaMask Mobile app.")]),e._v(" "),a("h4",{attrs:{id:"msdk-ecdh-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msdk-ecdh-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("MSDK_ECDH.cs")])]),e._v(" "),a("p",[e._v("This class has the cryptographic methods used for the initial secure key exchange and the encryption/decryption methods used to secure the communication between your project application and MetaMask mobile app.")]),e._v(" "),a("h4",{attrs:{id:"qrcodecube-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qrcodecube-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("QRCodeCube.cs")])]),e._v(" "),a("p",[e._v("This is an example script used by the sample scene. This QRCode cube is used to show the QR Code that the user has to scan with the MetaMask mobile app in order to establish the connection.")]),e._v(" "),a("h4",{attrs:{id:"connectbutton-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectbutton-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("ConnectButton.cs")])]),e._v(" "),a("p",[e._v("This is an example script used by the sample scene and shows you how to establish the first connection between your appliction and the MetaMask mobile app.")]),e._v(" "),a("h4",{attrs:{id:"signbutton-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signbutton-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("SignButton.cs")])]),e._v(" "),a("p",[e._v("This is an example script used by the sample scene and shows you how to sign a message sent from your appliction with the MetaMask mobile app.")]),e._v(" "),a("h4",{attrs:{id:"sendtransactionbutton-cs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendtransactionbutton-cs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("SendTransactionButton.cs")])]),e._v(" "),a("p",[e._v("This is an example script used by the sample scene and shows you how to request the sending of a transaction sent from your application to the MetaMask mobile app.")]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Examples")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[e._v("Unity examples")])])]),e._v(" "),a("h3",{attrs:{id:"recordings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recordings"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Recordings")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://recordit.co/QN196nsR1d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity game"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"unreal-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unreal-engine"}},[e._v("#")]),e._v(" Unreal Engine")]),e._v(" "),a("p",[e._v("Coming soon. We are working on a MetaMask SDK for Unreal Engine and will post updates soon.")])])}),[],!1,null,null,null);t.default=o.exports}}]);