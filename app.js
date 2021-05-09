let userName = document.querySelector("#user-name");
let confirmBtn = document.querySelector("#confirm");
confirmBtn.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${userName.value}`)
    .then((response) => response.json())
    .then((githubUser) => {
      console.log(githubUser);
      if (githubUser.message === "Not Found") {
        alert("Не пробовал(-а) ввести правильный узернэйм?");
      } else {
        new Promise((resolve, reject) => {
          let img = document.createElement("img");
          img.src = githubUser.avatar_url;
          img.className = "github-avatar";
          document.body.append(img);
          resolve(githubUser);
        });
      }
    })
    .catch((error) => alert(error.message));
});
