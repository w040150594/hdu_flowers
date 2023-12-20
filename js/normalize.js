function renderMain() {
  return `
          <div class="pictures">
          <div class="slider slider_one_big_picture">
            <img src="./assets/flowers/梅花.png" alt="" />
            <img src="./assets/flowers/玉兰花.png" alt="" />
            <img src="./assets/flowers/郁金香.png" alt="" />
            <div class="next_button"></div>
            <div class="prev_button"></div>
            <div class="nav_indicators"></div>
          </div>
        </div>

        <div class="card">
          <div class="card-item flower-information">
            <h2>杭电校内赏花信息</h2>
            <ul>
              <li><a href="#/list/0">花名：梅花，分布地点：8教实验楼门前，飞碟体育馆周边</a></li>
              <li><a href="#/list/1">花名：玉兰花，分布地点：8教实验楼门前，飞碟体育馆周边</a></li>
              <li><a href="#/list/2">花名：郁金香，分布地点：8教实验楼门前，飞碟体育馆周边</a></li>
              <div class="more-information"><a href="#/list">更多信息</a></div>
            </ul>
          </div>

          <div class="card-item more-link">
            <h2>更多关于花的网站</h2>
            <ul>
              <li><a href="http://www.huafensi.com/" target="_blank">花粉丝：花卉查询网</a></li>
              <li><a href="http://www.nahuayuan.com/" target="_blank">那花园--花卉第一网站！</a></li>
              <li><a href="https://www.yhzhishi.com/" target="_blank">养花知识网</a></li>
            </ul>
            <div class="more-information"><a href="#/more">更多信息</a></div>
          </div>
        </div>`;
}
function renderMore() {
  return `
        <h2>更多关于花的网站</h2>
        <ul class="list-link">
          <li>
            <div class="brief">简介：花粉丝——花卉查询网专业提供中国以及世界各地的花卉资料，通过细分花的分类，打造一个集花卉养殖、栽培、图片、花语以及花卉历史传说等知识为一体的特色网站。</div>
            <div class="brief">链接：<a href="http://www.huafensi.com/" target="_blank">花粉丝：花卉查询网</a></div>

          </li>
          <li>
            <div class="brief">简介：那花园花卉网-花卉第一网站,提供花卉图片及名称大全,多肉植物,花语大全,室内植物,盆景,插花,园艺等花卉信息,是最好的花卉网站！</div>
            <div class="brief">链接：<a href="http://www.nahuayuan.com/" target="_blank">那花园--花卉第一网站！</a>
          </li></div>
          <li>
            <div class="brief">简介：养花知识网（yhzhishi.com） - 收集分享养花知识、养花心得、养花经验的网站，网站包含养花知识、花卉创意、花语大全、花卉风水等栏目，喜欢养花就来养花知识网吧。</div>
            <div class="brief">链接：<a href="https://www.yhzhishi.com/" target="_blank">养花知识网</a></div>
          </li>
        </ul>`;
}
function renderForm() {
  return `<h2 class="title">新增赏花信息</h2>
<form action="" method="post">
  <div class="form-item">
    <label for="flower-name">花名：</label>
    <input type="text" id="flower-name" name="flower-name" placeholder="请输入花名" value="牡丹" />
  </div>
  <div class="form-item">
    <label for="flower-alias">别名：</label>
    <input type="text" id="flower-alias" name="flower-alias" placeholder="请输入别名" value="花王" />
  </div>
  <div class="form-item">
    <label for="flower-scientific-name">学名：</label>
    <input type="text" id="flower-scientific-name" name="flower-scientific-name" placeholder="请输入学名" value="Paeonia suffruticosa" />
  </div>
  <div class="form-item">
    <label for="flower-family">花科：</label>
    <input type="text" id="flower-family" name="flower-family" placeholder="请输入花科" value="牡丹科" />
  </div>
  <div class="form-item">
    <label for="flower-origin">原产地：</label>
    <select name="flower-origin" id="flower-origin">
      <option value="亚洲">亚洲</option>
      <option value="欧洲">欧洲</option>
      <option value="非洲">非洲</option>
      <option value="北美洲">北美洲</option>
      <option value="南美洲">南美洲</option>
      <option value="大洋洲">大洋洲</option>
      <option value="南极洲">南极洲</option>
    </select>
  </div>
  <div class="form-item">
    <label for="flower-flowering-period">花期：</label>
    <input type="radio" name="flower-flowering-period" value="春" checked />春
    <input type="radio" name="flower-flowering-period" value="夏" />夏
    <input type="radio" name="flower-flowering-period" value="秋" />秋
    <input type="radio" name="flower-flowering-period" value="冬" />冬
  </div>
  <div class="form-item">
    <label for="flower-color">花色：</label>
    <input type="checkbox" name="flower-color" value="红色" checked />红色
    <input type="checkbox" name="flower-color" value="蓝色" checked/>蓝色
    <input type="checkbox" name="flower-color" value="绿色" />绿色
    <input type="checkbox" name="flower-color" value="黄色" />黄色
    <input type="checkbox" name="flower-color" value="紫色" />紫色
    <input type="checkbox" name="flower-color" value="白色" />白色
    <input type="checkbox" name="flower-color" value="黑色" />黑色
    <input type="checkbox" name="flower-color" value="橙色" />橙色
    <input type="checkbox" name="flower-color" value="粉色" />粉色
    <input type="checkbox" name="flower-color" value="棕色" />棕色
    <input type="checkbox" name="flower-color" value="灰色" />灰色
    <input type="checkbox" name="flower-color" value="金色" />金色
    <input type="checkbox" name="flower-color" value="银色" />银色
  </div>
  <div class="form-item">
    <label for="flower-growth-environment">生长环境：</label>
    <input type="text" id="flower-growth-environment" name="flower-growth-environment" placeholder="请输入生长环境" value="阳光充足的地方" />
  </div>
  <div class="form-item">
    <label for="flower-distribution">校园分布地点：</label>
    <input type="text" id="flower-distribution" name="flower-distribution" placeholder="请输入分布地点" value="图书馆前" />
  </div>
  <div class="form-item">
    <label for="flower-description">特点描述：</label>
    <textarea name="flower-description" id="flower-description" cols="30" rows="10" placeholder="请输入特点描述">牡丹花大色艳，被誉为花中之王。</textarea>
  </div>
  <div class="form-item">
    <label for="flower-image">花朵图片（大小1MB以下）：</label>
    <input accept="image/jpeg, image/png" type="file" id="flower-image" name="flower-image" />
    <img id="flower-image-preview" src="" style="max-width: 200px; max-height: 200px;" />
  </div>
  <div class="form-item">
    <input type="submit" value="提交" />
  </div>
</form>`;
}
function renderList() {
  let itemsTemplate = "";
  localforage
    .iterate(function (value, key) {
      itemsTemplate += `
        <li>
          <a href="#/list/${key}">
            <img src="${value.flowerImage}" width="100" height="80" alt="${value.name}" />
            花名：${value.name}，分布地点：${value.distribution}
          </a>
        </li>
      `;
    })
    .then(function () {
      contentArea.innerHTML = `<h2>杭电校内赏花信息</h2>
        <ul class="list-flowers">
          ${itemsTemplate}
          <li>
            <a href="#/list/0"
              ><img
                src="./assets/flowers/梅花.png"
                alt="梅花"
                width="100"
                height="80"
              />花名：梅花，分布地点：8教实验楼门前，飞碟体育馆周边</a
            >
          </li>
          <li>
            <a href="#/list/1"
              ><img
                src="./assets/flowers/玉兰花.png"
                alt="玉兰花"
                width="100"
                height="80"
              />花名：玉兰花，分布地点：8教实验楼门前，飞碟体育馆周边</a
            >
          </li>
          <li>
            <a href="#/list/2"
              ><img
                src="./assets/flowers/郁金香.png"
                alt="郁金香"
                width="100"
                height="80"
              />花名：郁金香，分布地点：8教实验楼门前，飞碟体育馆周边</a
            >
          </li>
        </ul>`;
    })
    .catch(function (err) {
      console.log(err);
    });
}
function renderDetail(id) {
  const flowerData = [
    {
      flowerImage: "./assets/flowers/梅花.png",
      name: "梅花",
      alias: "花中四君子",
      scientificName: "Prunus mume",
      creatTime: "2023/11/28 11:43:04",
      family: "蔷薇科",
      origin: "中国",
      floweringPeriod: "冬季",
      colors: ["红色", "粉色", "白色"],
      growthEnvironment: "半阴半阳、通风良好、排水良好的砂质壤土",
      distribution: "中国南方、日本、朝鲜半岛等地",
      description: "梅花是中国传统名花之一，也是花中四君子之一。它具有傲雪凌霜、不畏严寒的品质，被誉为'岁寒三友'之一。",
    },
    {
      flowerImage: "./assets/flowers/玉兰花.png",
      name: "玉兰花",
      alias: "玉芙蓉",
      creatTime: "2023/12/2 15:48:04",
      scientificName: "Magnolia denudata",
      family: "木兰科",
      origin: "中国",
      floweringPeriod: "春",
      colors: ["白色", "淡紫色"],
      growthEnvironment: "湿润的环境",
      distribution: "食堂附近",
      description: "玉兰花瓣洁白如玉，花香四溢，是中国传统的观赏名花之一。",
    },
    {
      flowerImage: "./assets/flowers/郁金香.png",
      name: "郁金香",
      alias: "花中皇后",
      scientificName: "Tulipa gesneriana",
      creatTime: "2023/10/28 10:48:04",
      family: "百合科",
      origin: "中亚",
      floweringPeriod: "春",
      colors: ["红色", "黄色", "紫色", "粉色"],
      growthEnvironment: "阳光充足、排水良好的砂质壤土",
      distribution: "荷兰",
      description: "郁金香是一种多年生草本植物，叶子狭长，花茎高大，花色丰富，花型优美，被誉为'花中皇后'。",
    },
  ];
  if (id == 0 || id == 1 || id == 2) {
    contentArea.innerHTML = `<article class="article">
    <h2 class="title">${flowerData[id].name}</h2>
    <div class="date">发布时间: ${flowerData[id].creatTime}</div>
    <img src="${flowerData[id].flowerImage}" alt="${flowerData[id].name}" />
    <table>
      <tr>
        <td>花名：${flowerData[id].name}</td>
        <td>别名：${flowerData[id].alias}</td>
      </tr>
      <tr>
        <td>学名：${flowerData[id].scientificName}</td>
        <td>花科：${flowerData[id].family}</td>
      </tr>
      <tr>
        <td>原产地：${flowerData[id].origin}</td>
        <td>花期：${flowerData[id].floweringPeriod}</td>
      </tr>
      <tr>
        <td colspan="2">花色：${flowerData[id].colors.join("、")}</td>
      </tr>
      <tr>
        <td colspan="2">生长环境：${flowerData[id].growthEnvironment}</td>
      </tr>
      <tr>
        <td colspan="2">校园分布地点：${flowerData[id].distribution}</td>
      </tr>
      <tr>
        <td colspan="2">
          特点描述：${flowerData[id].description}
        </td>
      </tr>
    </table>
  </article>`;
  } else {
    localforage
      .getItem(id)
      .then(function (flowerData) {
        contentArea.innerHTML = `
    <article class="article">
    <h2 class="title">${flowerData.name}</h2>
    <div class="date">发布时间:${flowerData.creatTime}</div>
    <img src="${flowerData.flowerImage}" alt="${flowerData.name}" />
    <table>
      <tr>
        <td>花名：${flowerData.name}</td>
        <td>别名：${flowerData.alias}</td>
      </tr>
      <tr>
        <td>学名：${flowerData.scientificName}</td>
        <td>花科：${flowerData.family}</td>
      </tr>
      <tr>
        <td>原产地：${flowerData.origin}</td>
        <td>花期：${flowerData.floweringPeriod}</td>
      </tr>
      <tr>
        <td colspan="2">花色：${flowerData.colors.join("、")}</td>
      </tr>
      <tr>
        <td colspan="2">生长环境：${flowerData.growthEnvironment}</td>
      </tr>
      <tr>
        <td colspan="2">校园分布地点：${flowerData.distribution}</td>
      </tr>
      <tr>
        <td colspan="2">
          特点描述：${flowerData.description}
        </td>
      </tr>
    </table>
  </article>
`;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

//返回顶部
const topButton = document.querySelector(".top");
window.addEventListener("scroll", function () {
  topButton.style.display = "block";
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop === 0) {
    topButton.style.display = "none";
  }
});
topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
