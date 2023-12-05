//返回顶部
var topButton = document.querySelector(".top");

window.addEventListener("scroll", function () {
  topButton.style.display = "block";
  // 获取页面滚动的距离
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop == 0) {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", function () {
  // 平滑滚动到页面顶部
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
