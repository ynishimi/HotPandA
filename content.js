const url = "https://panda.ecs.kyoto-u.ac.jp/cas/login?service=https%3A%2F%2Fpanda.ecs.kyoto-u.ac.jp%2Fsakai-login-tool%2Fcontainer";
function goLogin() {
  location.href = url;
}
タブがアクティブな時に自動で遷移
window.addEventListener("focus", goLogin());

// ログインボタン
let loginButton = document.createElement("button");
loginButton.textContent = "ログイン";
loginButton.onclick = goLogin;
let target = document.querySelector("#msg");
target.appendChild(loginButton);
