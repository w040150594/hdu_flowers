var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  // 阻止表单默认提交行为
  event.preventDefault();

  // 获取表单数据
  var flowerName = document.getElementById("flower-name").value.trim();
  var flowerAlias = document.getElementById("flower-alias").value.trim();
  var flowerScientificName = document.getElementById("flower-scientific-name").value.trim();
  var flowerFamily = document.getElementById("flower-family").value.trim();
  var flowerOrigin = document.getElementById("flower-origin").value;
  var flowerFloweringPeriod = document.querySelector('input[name="flower-flowering-period"]:checked');
  var flowerColors = document.querySelectorAll('input[name="colors"]:checked');
  var flowerGrowthEnvironment = document.getElementById("flower-growth-environment").value.trim();
  var flowerDistribution = document.getElementById("flower-distribution").value.trim();
  var flowerDescription = document.getElementById("flower-description").value.trim();
  var flowerImage = document.getElementById("flower-image").files;

  // 检查是否所有字段都已填写
  if (
    !flowerName ||
    !flowerAlias ||
    !flowerScientificName ||
    !flowerFamily ||
    !flowerOrigin ||
    !flowerFloweringPeriod ||
    flowerColors.length === 0 ||
    !flowerGrowthEnvironment ||
    !flowerDistribution ||
    !flowerDescription ||
    flowerImage.length === 0
  ) {
    alert("你必须填完所有字段并上传图片。");
    return;
  }

  alert("还未实现存储功能");
});
