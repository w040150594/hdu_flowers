//主页
function renderMain() {
  return `
          <div class="pictures">
          <div class="slider slider_one_big_picture">
            ${flowerData.map((item) => {
              return `<img src="${item.flowerImage}" alt="" />`;
            })}
            <div class="nav_indicators"></div>
          </div>
        </div>

        <div class="card">
          <div class="card-item flower-information">
            <h2>杭电校内赏花信息</h2>
            <ul>
            ${flowerData
              .map((item) => {
                return `<li><a href="#/list/${item.key}">花名：${item.name}，分布地点：${item.distribution}</a></li>`;
              })
              .join("")}
            </ul>
            <div class="more-information"><a href="#/list">更多信息</a></div>
          </div>

          <div class="card-item more-link">
            <h2>更多关于花的网站</h2>
            <ul>
              ${moreData
                .map((item) => {
                  return `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`;
                })
                .join("")}
            </ul>
            <div class="more-information"><a href="#/more">更多信息</a></div>
          </div>
        </div>`;
}
//更多链接页
function renderMore() {
  return `
        <h2>更多关于花的网站</h2>
        <ul class="list-link">
            ${moreData
              .map((item) => {
                return `
          <li>
            <div class="brief">简介：${item.brief}</div>
            <div class="brief">链接：<a href="${item.link}" target="_blank">${item.name}</a></div>
          </li>`;
              })
              .join("")}
        </ul>`;
}
//新增表单页
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
    <input type="text" id="flower-distribution" name="flower-distribution" placeholder="请输入分布地点" value="科技馆附近" />
  </div>
  <div class="form-item">
    <label for="flower-description">特点描述：</label>
    <textarea name="flower-description" id="flower-description" cols="30" rows="10" placeholder="请输入特点描述">牡丹花大色艳，被誉为花中之王。</textarea>
  </div>
  <div class="form-item">
    <label for="flower-image">花朵图片（大小3MB以下）：</label>
    <input accept="image/jpeg, image/png" type="file" id="flower-image" name="flower-image" />
    <img id="flower-image-preview" src="" style="max-width: 200px; max-height: 200px;" />
  </div>
  <div class="form-item">
    <input type="submit" value="提交" />
  </div>
</form>`;
}
//列表页
function renderList() {
  let itemsTemplate = "";
  function renderListItem(value, key) {
    itemsTemplate += `
        <li>
          <a href="#/list/${key}">
            <img src="${value.flowerImage}" width="100" height="80" alt="${value.name}" />
            <div>
              <div>花名：${value.name}</div>
              <div>分布地点：${value.distribution}</div>
              <div>发布时间：${value.creatTime}</div>
            </div>
          </a>
        </li>
      `;
  }
  for (const item of flowerData) {
    renderListItem(item, item.key);
  }
  localforage
    .iterate(function (value, key) {
      renderListItem(value, key);
    })
    .then(function () {
      contentArea.innerHTML = `<h2>杭电校内赏花信息</h2>
        <ul class="list-flowers">
          ${itemsTemplate}
        </ul>`;
    })
    .catch(function (err) {
      console.log(err);
    });
}
//详情页
function renderDetail(key) {
  function renderDetailHtml(flowerData) {
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
  }
  if (key == 0 || key == 1 || key == 2) {
    renderDetailHtml(flowerData[key]);
  } else {
    localforage
      .getItem(key)
      .then(function (flowerData) {
        renderDetailHtml(flowerData);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
