//当滚动到一定距离时，显示返回顶部按钮
const topButton = document.querySelector(".top");
window.addEventListener("scroll", function () {
  topButton.style.display = "block";
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop === 0) {
    topButton.style.display = "none";
  }
});
//点击返回顶部
topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
