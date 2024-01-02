//初始化预设数据
const flowerData = [
  {
    key: 0,
    flowerImage: "./imgs/flowers/梅花.png",
    name: "梅花",
    alias: "花中四君子",
    scientificName: "Prunus mume",
    creatTime: "2023/11/28 11:43:04",
    family: "蔷薇科",
    origin: "中国",
    floweringPeriod: "冬季",
    colors: ["红色", "粉色", "白色"],
    growthEnvironment: "半阴半阳、通风良好、排水良好的砂质壤土",
    distribution: "6 教北面，8 教南面",
    description: "梅花是中国传统名花之一，也是花中四君子之一。它具有傲雪凌霜、不畏严寒的品质，被誉为'岁寒三友'之一。",
  },
  {
    key: 1,
    flowerImage: "./imgs/flowers/玉兰花.png",
    name: "玉兰花",
    alias: "玉芙蓉",
    creatTime: "2023/12/2 15:48:04",
    scientificName: "Magnolia denudata",
    family: "木兰科",
    origin: "中国",
    floweringPeriod: "春",
    colors: ["白色", "淡紫色"],
    growthEnvironment: "湿润的环境",
    distribution: "生活区五号楼附近",
    description: "玉兰花瓣洁白如玉，花香四溢，是中国传统的观赏名花之一。",
  },
  {
    key: 2,
    flowerImage: "./imgs/flowers/郁金香.png",
    name: "郁金香",
    alias: "花中皇后",
    scientificName: "Tulipa gesneriana",
    creatTime: "2023/10/28 10:48:04",
    family: "百合科",
    origin: "中亚",
    floweringPeriod: "春",
    colors: ["红色", "黄色", "紫色", "粉色"],
    growthEnvironment: "阳光充足、排水良好的砂质壤土",
    distribution: "南大门月雅湖附近",
    description: "郁金香是一种多年生草本植物，叶子狭长，花茎高大，花色丰富，花型优美，被誉为'花中皇后'。",
  },
];
const moreData = [
  {
    brief:
      "花粉丝——花卉查询网专业提供中国以及世界各地的花卉资料，通过细分花的分类，打造一个集花卉养殖、栽培、图片、花语以及花卉历史传说等知识为一体的特色网站。",
    name: "花粉丝——花卉查询网",
    link: "http://www.huafensi.com/",
  },
  {
    brief:
      "那花园花卉网-花卉第一网站,提供花卉图片及名称大全,多肉植物,花语大全,室内植物,盆景,插花,园艺等花卉信息,是最好的花卉网站！",
    name: "那花园花卉网",
    link: "http://www.nahuayuan.com/",
  },
  {
    brief:
      "养花知识网（yhzhishi.com） - 收集分享养花知识、养花心得、养花经验的网站，网站包含养花知识、花卉创意、花语大全、花卉风水等栏目，喜欢养花就来养花知识网吧。",
    name: "养花知识网（yhzhishi.com）",
    link: "https://www.yhzhishi.com/",
  },
];

//高德地图 api 获取本校天气
AMap.plugin("AMap.Weather", function () {
  var weather = new AMap.Weather();

  weather.getLive("杭州市", function (err, data) {
    const { city, weather, temperature, windPower, humidity, reportTime } = data;
    const weatherInfo = document.querySelector(".weather");
    const reportTimeNew = reportTime.slice(0, 10);
    weatherInfo.innerHTML = `
    <div>
    天气信息：<span>${reportTimeNew}、</span><span>${city}、</span><span>${weather}</span>
    </div>
    <div><span>温度：${temperature}℃、</span><span>湿度：${humidity}、</span><span>风速：${windPower}级 </span>
    </div>`;
  });
});

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
