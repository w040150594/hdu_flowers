var form = document.querySelector("form");
var flowerImgInput = document.getElementById("flower-image");
var flowerData = {};

flowerImgInput.addEventListener("change", function (event) {
  var file = event.target.files[0];

  // 检查文件是否存在
  if (!file) {
    alert("没有选择文件");
    return;
  }

  // 约束图片大小，例如 1MB
  var maxSize = 1 * 1024 * 1024;
  if (file.size > maxSize) {
    event.target.value = "";
    alert("图片大小不能超过 1MB");
    return;
  }

  // 使用 FileReader 读取文件
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function (e) {
    var img = new Image();
    // 设置图片源为读取结果
    img.src = e.target.result;
    // 图片加载完成后执行
    img.onload = function () {
      // 使用 canvas 进行压缩
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      var width = img.width;
      var height = img.height;
      var maxSide = Math.max(width, height);

      // 设置最大宽度或高度
      if (maxSide > 1024) {
        var scale = 1024 / maxSide;
        width *= scale;
        height *= scale;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // 将压缩后的图片转换为 DataURL
      var dataUrl = canvas.toDataURL("image/jpeg", 0.5);
      flowerData.flowerImage = dataUrl;
    };
  };
});

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
  var flowerColors = document.querySelectorAll('input[name="flower-color"]:checked');

  var flowerGrowthEnvironment = document.getElementById("flower-growth-environment").value.trim();
  var flowerDistribution = document.getElementById("flower-distribution").value.trim();
  var flowerDescription = document.getElementById("flower-description").value.trim();

  // 检查是否所有字段都已填写;
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
    flowerImgInput.files.length === 0
  ) {
    alert("你必须填完所有字段并上传图片。");
    return;
  }

  flowerData.name = flowerName;
  flowerData.alias = flowerAlias;
  flowerData.scientificName = flowerScientificName;
  flowerData.family = flowerFamily;
  flowerData.origin = flowerOrigin;
  flowerData.floweringPeriod = flowerFloweringPeriod.value;
  flowerData.colors = Array.from(flowerColors).map(function (checkbox) {
    return checkbox.value;
  });
  flowerData.growthEnvironment = flowerGrowthEnvironment;
  flowerData.distribution = flowerDistribution;
  flowerData.description = flowerDescription;

  console.log(flowerData);

  // 使用 uuid 生成一个唯一标识符作为键来存储数据
  var uniqueId = uuidv4();
  localforage
    .setItem(uniqueId, flowerData)
    .then(function () {
      alert("表单数据和图片已保存。");
    })
    .catch(function (err) {
      alert("保存数据时出错：" + err);
    });
});
