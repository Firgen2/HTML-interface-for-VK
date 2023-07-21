window.addEventListener("DOMContentLoaded", () => {
    const search_groups_input = document.querySelector("#search_groups_input");

    search_groups_input.addEventListener("input", () => {
      get_groups_data();
    });


  });
  function get_groups_data() {
    // Ваш существующий код
    let i = 0;
    var vk_id = localStorage.getItem('vk_id');
    var access_token = localStorage.getItem('access_token');
    const search_groups_input = document.querySelector("#search_groups_input");
    const groupDivs = document.querySelectorAll(".search_group1, .search_group2, .search_group3, .search_group4, .search_group5, .search_group6, .search_group7, .search_group8, .search_group9, .search_group10");
    const searchText = search_groups_input.value.trim();
    const delay = 500;
  
    clearTimeout(search_groups_input.timeout); // Сбросить предыдущий таймер
  
    search_groups_input.timeout = setTimeout(() => {
      VK.Api.call(
        "groups.search",
        {
          q: searchText,
          fields: 'photo_max_orig',
          count: 10,
          access_token: access_token,
          v: "5.131",
        },
        (response) => {
          if (response && response.response && response.response.items) {
            const groups = response.response.items;
            console.log(response);
            for (let i = 0; i < groups.length && i < groupDivs.length; i++) {
              const groupDiv = groupDivs[i % groupDivs.length];
              const group = groups[i];
              const photoDiv = groupDiv.querySelector(".search_photo_group" + (i + 1));
              const nameSpan = groupDiv.querySelector(".search_name_group" + (i + 1) + " #search_name_group" + (i + 1));
              const idSpan = groupDiv.querySelector(".search_name_group" + (i + 1) + " #search_id_group" + (i + 1));
              const idGroup = groupDiv.querySelector(".search_group_button" + (i + 1));
              photoDiv.style.backgroundImage = `url(${group.photo_max_orig})`;
              nameSpan.textContent = group.name ;
              idSpan.textContent = "vk.com/club" + group.id;
              idGroup.id = group.id;
  
              groupDiv.style.display = "flex";
              localStorage.setItem('idGroup', idGroup);
            }
          }
        }
      );
    }, delay);
  }
  