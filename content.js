const url = "https://panda.ecs.kyoto-u.ac.jp/cas/login?service=https%3A%2F%2Fpanda.ecs.kyoto-u.ac.jp%2Fsakai-login-tool%2Fcontainer";
// const url2 = "https://panda.ecs.kyoto-u.ac.jp/portal/login";
// let loginButton = document.createElement("button");
// loginButton.textContent = "ログイン";
// loginButton.setAttribute("onclick", "location.href='${url2}'")
// let target = document.querySelector("#msg");
// target.appendChild(loginButton);

// window.onload = function() {
//     location.href = url;
// }

window.addEventListener('pageshow', () => location.href = url);