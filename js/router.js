const contentArea = document.getElementById("content");

// 添加hashchange事件监听器
window.addEventListener("hashchange", handleRouteChange);

// 定义路由配置
const routes = [
  { path: "/", component: renderMain() },
  { path: "/more", component: renderMore() },
  { path: "/list", component: renderList },
  { path: "/form", component: renderForm() },
  { path: "/list/:id", component: renderDetail },
];
// 初始状态下处理路由
handleRouteChange();
function handleRouteChange() {
  // 去除'#'字符，添加默认路由
  const currentHash = window.location.hash.slice(1) || "/";

  const route = findRoute(currentHash);
  renderRouteComponent(currentHash, route);

  //根据路由更新 js 事件注册函数
  updateJS(route);
}
function findRoute(currentHash) {
  // 查找匹配的路由配置
  const route = routes.find((r) => {
    if (r.path.includes(":id")) {
      const regex = new RegExp(r.path.replace(/:[^\s/]+/, "([\\w-]+)"));
      return currentHash.match(regex);
    }
    return currentHash === r.path;
  });

  return route;
}
// 获取路由参数
function getRouteParams(hash, path) {
  const hashParts = hash.split("/");
  const pathParts = path.split("/");
  const params = [];

  pathParts.forEach((part, i) => {
    if (part.startsWith(":")) {
      params.push(hashParts[i] || null);
    }
  });

  return params;
}
// 渲染路由组件
function renderRouteComponent(currentHash, route) {
  if (route) {
    if (typeof route.component === "function") {
      // 如果页面组件是函数，调用它并传递参数
      const params = getRouteParams(currentHash, route.path);
      route.component(...params);
    } else {
      // 否则，直接渲染组件
      contentArea.innerHTML = route.component;
    }
  } else {
    contentArea.innerHTML = "<h1>404 - 页面未找到</h1>";
  }
}
//更新 js 事件注册函数
function updateJS(route) {
  if (route.path === "/") {
    $(".slider_one_big_picture").EasySlides({
      autoplay: true,
      timeout: 3000,
      loop: true,
      show: 3,
    });
  } else if (route.path === "/form") {
    initForm();
  }
}
