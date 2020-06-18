window.status = "lol";
window.product = "lol";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.product = request.product;
  if (request.status == "Chinese") {
    window.status = request.status;
    chrome.browserAction.setIcon({ path: "images/cancel.png" });
    sendResponse({ farewell: "goodbye" });
  } else if (request.status == "NotChinese") {
    window.status = request.status;
    chrome.browserAction.setIcon({ path: "images/approval.png" });
    sendResponse({ farewell: "goodbye" });
  } else {
    window.status = request.status;
    chrome.browserAction.setIcon({ path: "images/icon-128.png" });
    sendResponse({ farewell: "goodbye" });
  }
});
