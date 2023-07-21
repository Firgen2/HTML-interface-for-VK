window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search_input");
  searchInput.addEventListener("input", () => {
    get_search_data();
  });
});
function get_search_data() {
  // Ваш существующий код
  let i = 0;
  var vk_id = localStorage.getItem('vk_id');
  var access_token = localStorage.getItem('access_token');
  const searchInput = document.querySelector("#search_input");
  const userDivs = document.querySelectorAll(".search_user1, .search_user2, .search_user3, .search_user4, .search_user5, .search_user6, .search_user7, .search_user8, .search_user9, .search_user10");
  const searchText = searchInput.value.trim();
  const delay = 500;

  clearTimeout(searchInput.timeout); // Сбросить предыдущий таймер

  searchInput.timeout = setTimeout(() => {
    VK.Api.call(
      "users.search",
      {
        q: searchText,
        fields: 'photo_max_orig',
        count: 10,
        access_token: access_token,
        v: "5.131",
      },
      (response) => {
        if (response && response.response && response.response.items) {
          const users = response.response.items;
          console.log(response);
          for (let i = 0; i < users.length && i < userDivs.length; i++) {
            const userDiv = userDivs[i % userDivs.length];
            const user = users[i];
            const photoDiv = userDiv.querySelector(".search_photo_user" + (i + 1));
            const nameSpan = userDiv.querySelector(".search_name_user" + (i + 1) + " #search_name_user" + (i + 1));
            const idSpan = userDiv.querySelector(".search_name_user" + (i + 1) + " #search_id_user" + (i + 1));
            photoDiv.style.backgroundImage = `url(${user.photo_max_orig})`;
            nameSpan.textContent = user.first_name + " " + user.last_name;
            idSpan.textContent = "vk.com/id" + user.id;

            userDiv.style.display = "block";
          }
        }
      }
    );
  }, delay);
}
