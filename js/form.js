function initForm() {
  const form = document.querySelector("form");
  const flowerImgInput = document.getElementById("flower-image");
  const flowerData = {};

  flowerImgInput.addEventListener("change", function (event) {
    const file = event.target.files[0];

    // 检查文件是否存在
    if (!file) {
      alert("没有选择文件");
      return;
    }

    // 约束图片大小，例如 1MB
    const maxSize = 1 * 1024 * 1024;
    if (file.size > maxSize) {
      event.target.value = "";
      alert("图片大小不能超过 1MB");
      return;
    }

    // 使用 FileReader 读取文件
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      const img = new Image();
      // 设置图片源为读取结果
      img.src = e.target.result;
      // 图片加载完成后执行
      img.onload = function () {
        // 使用 canvas 进行压缩
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        let width = img.width;
        let height = img.height;
        let maxSide = Math.max(width, height);

        // 设置最大宽度或高度
        if (maxSide > 1024) {
          const scale = 1024 / maxSide;
          width *= scale;
          height *= scale;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        // 将压缩后的图片转换为 DataURL
        const dataUrl = canvas.toDataURL("image/jpeg", 0.5);
        //添加到上传按钮下面预览图片
        const flowerImgPreview = document.querySelector("#flower-image-preview");
        flowerImgPreview.src = dataUrl;

        flowerData.flowerImage = dataUrl;
      };
    };
  });

  form.addEventListener("submit", function (event) {
    // 阻止表单默认提交行为
    event.preventDefault();

    // 获取表单数据
    const flowerName = document.getElementById("flower-name").value.trim();
    const flowerAlias = document.getElementById("flower-alias").value.trim();
    const flowerScientificName = document.getElementById("flower-scientific-name").value.trim();
    const flowerFamily = document.getElementById("flower-family").value.trim();
    const flowerOrigin = document.getElementById("flower-origin").value;

    const flowerFloweringPeriod = document.querySelector('input[name="flower-flowering-period"]:checked');
    const flowerColors = document.querySelectorAll('input[name="flower-color"]:checked');

    const flowerGrowthEnvironment = document.getElementById("flower-growth-environment").value.trim();
    const flowerDistribution = document.getElementById("flower-distribution").value.trim();
    const flowerDescription = document.getElementById("flower-description").value.trim();

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

    // 使用 uuid 生成一个唯一标识符作为键来存储数据
    const uniqueId = uuidv4();
    //获取本地时间做为发布时间
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    flowerData.creatTime = time;
    //本地存储
    localforage
      .setItem(uniqueId, flowerData)
      .then(function () {
        alert("表单数据和图片已保存成功！");
        window.location.href = "#/list";
      })
      .catch(function (err) {
        alert("保存数据时出错：" + err);
      });
  });
  localforage.clear();
}
