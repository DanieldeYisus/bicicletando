function changeView(type) {
  const path = window.location.pathname;

  if (type === "home") {
    if (path === '/bicicletando/index.html') {
      document.body.style.backgroundColor = "red";
      return false;
    } else {
      window.location.href = "index.html";
    }
  } else if (type === "register") {
    if (path === '/bicicletando/register.html') {
      document.body.style.backgroundColor = "green";
      return false;
    } else {
      window.location.href = "register.html";
    }
  } else {
    window.location.href = "routes.html";

  }
}