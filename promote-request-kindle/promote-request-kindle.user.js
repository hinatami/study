// ==UserScript==
// @name        promote-request-kindle
// @namespace   hinatami.net
// @description amazonの「Kindle化リクエスト」ブロックをページ上部に表示させます。
// @match       http://www.amazon.co.jp/*
// @grant       none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){
	var kindleBlock = document.getElementById('fiona-publisher-signup-link');
	if (kindleBlock && kindleBlock.innerHTML.match(/Kindle化リクエスト/)) {
		migrateKindle();
	}

	function migrateKindle(){
		var insertBox = document.getElementById('rightRail');
		var rightCol = document.getElementById('rightCol');
		rightCol.insertBefore(insertBox, rightCol.firstChild);  
	}
});