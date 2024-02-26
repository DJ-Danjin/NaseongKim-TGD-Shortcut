// ==UserScript==
// @name           김나성 트게더 단축키
// @name:ko        김나성 트게더 단축키
// @name:en        NaseongKim TGD Shortcut
// @namespace    https://github.com/DJ-Danjin/NaseongKimTgdShortcut
// @version      2024-02-26
// @description    다음글 - 컨트롤 + 쉬프트 + X / 이전글 - 컨트롤 + 쉬프트 + C
// @description:ko 다음글 - 컨트롤 + 쉬프트 + X / 이전글 - 컨트롤 + 쉬프트 + C
// @description:en Next Post - Ctrl + Shift + X / Prev Post - Ctrl + Shift + C
// @author       DJ-Danjin
// @match        https://tgd.kr/s/naseongkim/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tgd.kr
// @updateURL    https://github.com/DJ-Danjin/NaseongKimTgdShortcut/raw/main/NaseongKimTgdShortcut.user.js
// @downloadURL  https://github.com/DJ-Danjin/NaseongKimTgdShortcut/raw/main/NaseongKimTgdShortcut.user.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  window.addEventListener("keydown", keysPressed, false);
  window.addEventListener("keyup", keysReleased, false);

  var keys = [];

  function keysPressed(e) {
    let focusElement = document.activeElement;
    if (document.querySelector('.fr-element') != focusElement) {
      keys[e.keyCode] = true;

      // Ctrl + Shift + X
      if (keys[17] && keys[16] && keys[88]) {
        let key = document.querySelector('#article-neighbor-list .subject').getAttribute('href');
        let link = 'https://tgd.kr' + key;
        location.assign(link);
        e.preventDefault();
      }

      // Ctrl + Shift + C
      if (keys[17] && keys[16] && keys[67]) {
        let key = document.querySelectorAll('#article-neighbor-list .subject')[1].getAttribute('href');
        let link = 'https://tgd.kr' + key;
        location.assign(link);
        e.preventDefault();
      }
    }

  }

  function keysReleased(e) {
    keys[e.keyCode] = false;
  }

  window.onload = function () {
    let headImg = document.querySelector("header .row > div:nth-child(1) > a").style.backgroundImage;
    let headFilter = document.querySelector("header .row > div:nth-child(1) > a").style.removeProperty(filter);
    let backImg = document.querySelector("html, body").style.backgroundImage;

    headImg = "url(https://github.com/DJ-Danjin/NaseongKimTgdShortcut/assets/85267238/25a216e8-bc0b-4339-b536-327f0f9627e8)";
    backImg = "url(https://github.com/DJ-Danjin/NaseongKimTgdShortcut/assets/85267238/9032b40f-ced5-4476-ab72-c1773dd1e582)";
  }

})();