window.addEventListener("DOMContentLoaded", () => {
const search_del_back_button = document.querySelector('.search_del_back_button');
const search_del_delete_button = document.querySelector('.search_del_delete_button');
const search_groups = document.querySelector('.search_groups');
const search_groups_input = document.querySelector("#search_groups_input");


search_del_back_button.addEventListener('click', (event) => {
    if (event.target === search_del_back_button) {
      closeModal();
      cleargroupDivs();
    }
  });

search_del_delete_button.addEventListener('click', (event) => {
    if (event.target === search_del_delete_button) {
      closeModal();
      cleargroupDivs();
    }
  });

function closeModal() {
    search_groups.style.display = 'none';
    search_groups_input.value = '';
  }

  function cleargroupDivs() {
    const groupDivs = document.querySelectorAll(".search_group1, .search_group2, .search_group3, .search_group4, .search_group5, .search_group6, .search_group7, .search_group8, .search_group9, .search_group10");
  
    for (let i = 0; i < 10 && i < 10; i++) {
      const groupDiv = groupDivs[i % groupDivs.length];
      const photoDiv = groupDiv.querySelector(".search_photo_group" + (i + 1));
      const nameSpan = groupDiv.querySelector(".search_name_group" + (i + 1) + " #search_name_group" + (i + 1));
      const idSpan = groupDiv.querySelector(".search_name_group" + (i + 1) + " #search_id_group" + (i + 1));
      photoDiv.style.backgroundImage = '';
      nameSpan.textContent = "";
      idSpan.textContent = "";
  
      groupDiv.style.display = "none";
    }
  } 
});