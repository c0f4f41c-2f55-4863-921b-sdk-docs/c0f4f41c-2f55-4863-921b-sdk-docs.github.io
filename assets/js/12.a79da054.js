(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{386:function(e,t,s){e.exports=s.p+"assets/img/sdk-clear-connections.5371800d.png"},387:function(e,t,s){e.exports=s.p+"assets/img/sdk-comm-diagram.3472e32b.svg"},414:function(e,t,s){"use strict";s.r(t);var a=s(11),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("h2",{attrs:{id:"connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),a("h3",{attrs:{id:"lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle"}},[e._v("#")]),e._v(" Lifecycle")]),e._v(" "),a("p",[e._v("When connecting with MetaMask Mobile wallet, it's important to understand when connections get paused, resumed and cleared.")]),e._v(" "),a("h4",{attrs:{id:"paused"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paused"}},[e._v("#")]),e._v(" Paused:")]),e._v(" "),a("p",[e._v("Connections get paused after the MetaMask Mobile app is in background (minimized) for 20 seconds. This is to accomodate OS restrictions and it means that all traffic into MetaMask Mobile gets paused and the SDK won't produce any response unless the MetaMask Mobile app is opened again. The SDK automatically deeplinks into MetaMask Mobile so connections should be resumed automatically.\nIf MetaMask Mobile is in pause mode and the user completely closes the app, the connection will be maintained in paused mode until it's opened again.")]),e._v(" "),a("p",[e._v("For this reason, polling data from the wallet may not work for long periods of time.")]),e._v(" "),a("h4",{attrs:{id:"cleared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleared"}},[e._v("#")]),e._v(" Cleared:")]),e._v(" "),a("p",[e._v("Connections get cleared if the dapp is closed or refreshed (in the case of a browser) as we don't persist connections on the dapp side. We did this for simplicity and for security purposes. We believe that creating a connection should be very easy so there is no need to persist, but this may change in the future.")]),e._v(" "),a("p",[e._v("If the MetaMask Mobile app is completely closed without entering pause mode first, we close the connection as we believe it means the user is no longer using the wallet for any further actions.")]),e._v(" "),a("h4",{attrs:{id:"close-connections-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close-connections-manually"}},[e._v("#")]),e._v(" Close connections manually:")]),e._v(" "),a("p",[e._v("In order to close connections manually from the MetaMask Mobile app, you can go into")]),e._v(" "),a("p",[e._v("Settings -> Experimental")]),e._v(" "),a("img",{attrs:{src:s(386),height:"250"}}),e._v(" "),a("h2",{attrs:{id:"communication-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#communication-layer"}},[e._v("#")]),e._v(" Communication layer")]),e._v(" "),a("h3",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("p",[e._v("The security layer is handled via "),a("code",[e._v("AES-256-GCM")]),e._v(" symmetric encryption which is generated with an initial "),a("strong",[e._v("Elliptic-curve Diffie–Hellman")]),e._v(" key exchange. This allows the secure generation of the "),a("strong",[e._v("common symmetric key")]),e._v(" that encrypts every message sent/received between the two sides.")]),e._v(" "),a("p",[e._v("The following steps assume a "),a("code",[e._v("dApp")]),e._v(" and a user with "),a("code",[e._v("MetaMask Mobile app")]),e._v(" ("),a("code",[e._v("MMM app")]),e._v(") installed:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("dApp")]),e._v(" generates ECDH "),a("code",[e._v("Dpub")]),e._v(" dpriv keys.")]),e._v(" "),a("li",[a("code",[e._v("dApp")]),e._v(" sends deep link containing "),a("code",[e._v("session uuid")]),e._v(" + "),a("code",[e._v("Dpub")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("MMM app")]),e._v(" establishes connection on "),a("code",[e._v("session uuid")]),e._v(' "channel" (not encrypted).')]),e._v(" "),a("li",[a("code",[e._v("MMM app")]),e._v(" generates ECDH "),a("code",[e._v("Mpub")]),e._v(" "),a("code",[e._v("mpriv")]),e._v(" keys.")]),e._v(" "),a("li",[a("code",[e._v("MMM app")]),e._v(" uses "),a("code",[e._v("Dpub")]),e._v(" to calculate the "),a("code",[e._v("symmetric key")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("MMM app")]),e._v(" sends "),a("code",[e._v("Mpub")]),e._v(" to dApp via "),a("code",[e._v("session guid")]),e._v(' "channel" (not encrypted).')]),e._v(" "),a("li",[a("code",[e._v("dApp")]),e._v(" receives "),a("code",[e._v("Mpub")]),e._v(" and calculates the "),a("code",[e._v("symmetric key")]),e._v(".")]),e._v(" "),a("li",[e._v("From now on, "),a("code",[e._v("dApp")]),e._v(" and "),a("code",[e._v("MMM app")]),e._v(" use the same calculated "),a("code",[e._v("symmetric key")]),e._v(" with "),a("code",[e._v("AES-256-GCM")]),e._v(" to encrypt everything that is passed on the "),a("code",[e._v("session uuid")]),e._v(' "channel".')])]),e._v(" "),a("p",[a("img",{attrs:{src:s(387),alt:"Sequence diagram"}})]),e._v(" "),a("p",[e._v("Thanks to the ECDH algorithm, the "),a("code",[e._v("symmetric key")]),e._v(" calculated by "),a("code",[e._v("MMM app")]),e._v(" (using "),a("code",[e._v("Mpriv")]),e._v(", "),a("code",[e._v("mpub")]),e._v(", "),a("code",[e._v("dpub")]),e._v(") is the same as the one calculated by "),a("code",[e._v("dApp")]),e._v(" (using "),a("code",[e._v("Dpriv")]),e._v(", "),a("code",[e._v("dpub")]),e._v(", "),a("code",[e._v("mpub")]),e._v(").")]),e._v(" "),a("p",[e._v("A third malicious user listening to the exchange of the two public keys ("),a("code",[e._v("mpub")]),e._v(" and "),a("code",[e._v("dpub")]),e._v(") is not able to calculate the "),a("code",[e._v("dApp-MMM app")]),e._v(" symmetric key as its value also depends on the two private keys ("),a("code",[e._v("Mpriv")]),e._v(" and "),a("code",[e._v("Dpriv")]),e._v(").")])])}),[],!1,null,null,null);t.default=o.exports}}]);