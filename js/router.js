const navLinks = document.querySelectorAll("a");
const contentArea = document.getElementById("content");

// 定义路由配置
const routes = [
  { path: "/", component: renderMain() },
  { path: "/more", component: renderMore() },
  { path: "/list", component: renderList },
  { path: "/form", component: renderForm() },
  { path: "/list/:id", component: renderDetail },
];

// 添加hashchange事件监听器
window.addEventListener("hashchange", handleRouteChange);

// 处理路由变化
function handleRouteChange() {
  const currentHash = window.location.hash.slice(1) || "/"; // 去除'#'字符，添加默认路由

  // 查找匹配的路由配置
  const route = routes.find((r) => {
    if (r.path.includes(":id")) {
      const regex = new RegExp(r.path.replace(/:[^\s/]+/, "([\\w-]+)"));
      return currentHash.match(regex);
    }
    return currentHash === r.path;
  });

  if (route) {
    if (typeof route.component === "function") {
      // 如果页面组件是函数，调用它并传递参数
      const params = getParams(currentHash, route.path);
      route.component(...params);
    } else {
      contentArea.innerHTML = route.component;
    }
  } else {
    contentArea.innerHTML = "<h1>404 - 页面未找到</h1>";
  }

  updateJS(route);
  //根据路由更新 js 事件注册函数
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
}
// 初始状态下处理路由
handleRouteChange();

// 阻止链接默认行为，使用路由处理导航
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      window.location.hash = e.target.getAttribute("href");
    }
  });
});

// 获取路由参数
function getParams(hash, path) {
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
