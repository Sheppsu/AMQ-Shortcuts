// ==UserScript==
// @name         AMQ-Shortcuts
// @namespace    https://github.com/Sheppsu
// @version      1.0.0
// @description  Keyboard shortcuts for skipping and switching between chat and answering
// @author       Sheppsu
// @match        https://animemusicquiz.com/*
// @downloadURL  https://github.com/Sheppsu/AMQ-Shortcuts/raw/main/script.user.js
// @updateURL    https://github.com/Sheppsu/AMQ-Shortcuts/raw/main/script.user.js
// @grant        none
// ==/UserScript==

const skipBtn = document.getElementById("qpInputVoteSkip");
const answerInput = document.getElementById("qpAnswerInput");
const chatInput = document.getElementById("gcInput");

function handleShortcuts(evt) {
    if (evt.key.toLowerCase() == "s" && evt.ctrlKey) {
        if (!evt.shiftKey) {
            skipBtn.click();
            evt.preventDefault();
            return;
        }

        if (chatInput === document.activeElement) {
            answerInput.focus();
            evt.preventDefault();
        } else {
            chatInput.focus();
            evt.preventDefault();
        }
    }
}

document.addEventListener("keydown", handleShortcuts);