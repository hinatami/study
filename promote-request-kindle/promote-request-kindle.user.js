// ==UserScript==
// @name        promote-request-kindle
// @namespace   hinatami.net
// @description amazonの「Kindle化リクエスト」ブロックをページ上部に表示させます。
// @match       http://www.amazon.co.jp/*
// @grant       none
// ==/UserScript==

window.onload = function() {
	var kindleBlock = document.getElementById('fiona-publisher-signup-link');
	var kindleChildren = kindleBlock.children;
	for (var i = 0; i < kindleChildren.length; i++) {
	  if (kindleChildren[i].innerHTML.match(/Kindle化リクエスト/)) {
	    migrateKindle();
	    break;
	  }
	}

	function migrateKindle(){
	  var insertBox = document.getElementById('rightRail');
	  var rightCol = document.getElementById('rightCol');
	  rightCol.insertBefore(insertBox, rightCol.firstChild);  
	}
}
