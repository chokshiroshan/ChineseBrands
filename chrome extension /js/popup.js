let bgpage = chrome.extension.getBackgroundPage();
let status = bgpage.status;
let product = bgpage.product;

document
  .getElementById("report_button_right")
  .setAttribute(
    "href",
    "https://chinesebrands.herokuapp.com/recommends/" + product
  );

document
  .getElementById("report_button_wrong")
  .setAttribute(
    "href",
    "https://chinesebrands.herokuapp.com/declines/" + product
  );

if (status == "Chinese") {
  document.getElementById("chinese").style.display = "block";
  document.getElementById("notchinese").style.display = "none";
  document.getElementById("home").style.display = "none";
} else if (status == "NotChinese") {
  document.getElementById("chinese").style.display = "none";
  document.getElementById("notchinese").style.display = "block";
  document.getElementById("home").style.display = "none";
} else {
  document.getElementById("chinese").style.display = "none";
  document.getElementById("notchinese").style.display = "none";
  document.getElementById("home").style.display = "block";
}

window.addEventListener("load", () => {
  document.querySelector("#declines").addEventListener("click", (e) => {
    document.getElementById("chinese").style.display = "none";
    document.getElementById("reported").style.display = "block";
    // Can also cancel the event and manually navigate
    // e.preventDefault();
    // window.location = e.target.href;
  });
});

window.addEventListener("load", () => {
  document.querySelector("#recommends").addEventListener("click", (e) => {
    document.getElementById("notchinese").style.display = "none";
    document.getElementById("reported").style.display = "block";
    // Can also cancel the event and manually navigate
    // e.preventDefault();
    // window.location = e.target.href;
  });
});
