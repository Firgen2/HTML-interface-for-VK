window.addEventListener("DOMContentLoaded", () => {
  const publishButton = document.querySelector('.publish_button');
  const publishModal = document.querySelector('.publish_modal');
  const main_sidebar = document.querySelector('.main_sidebar');
  const main_main = document.querySelector('.main_main');
  const add_column_button = document.querySelector('.add_column_button');
  const search_top = document.querySelector('.search_top');
  const search_button = document.querySelector('.search_button');
  const search_input = document.querySelector('.search_input');
  const search_del = document.querySelector('.search_del');
  const search_delete_button = document.querySelector('.search_delete_button');
  const sidebar = document.querySelector('.sidebar');
  const search_back_button = document.querySelector('.search_back_button');
  const search_text = document.querySelector('#search_text');

  search_button.addEventListener('click', () => {
    openModal();
  });

  sidebar.addEventListener('click', (event) => {
    if (event.target === sidebar && publishModal.style.display !== 'none') {
      closeModal();
      clearUserDivs();
    }
  });

  publishModal.addEventListener('click', (event) => {
    if (event.target === publishModal) {
      closeModal();
      clearUserDivs();
    }
  });

  search_back_button.addEventListener('click', (event) => {
    if (event.target === search_back_button) {
      closeModal();
      clearUserDivs();
    }
  });

  search_delete_button.addEventListener('click', (event) => {
    if (event.target === search_delete_button) {
      closeModal();
      clearUserDivs();
    }
  });

  function openModal() {
    publishModal.style.display = 'block';
    search_top.style.display = 'flex';
    search_del.style.display = 'flex';
    main_sidebar.style.width = parseInt(main_sidebar.clientWidth, 10) + 400 + 'px';
    const currentLeft = parseInt(window.getComputedStyle(main_main).left, 10);
    main_sidebar.style.borderRight = '3px solid gray';
    main_main.style.left = (currentLeft + 400) + 'px';
  }
  
  function closeModal() {
    publishModal.style.display = 'none';
    search_top.style.display = 'none';
    search_text.style.display = 'none';
    main_sidebar.style.width = parseInt(main_sidebar.style.width, 10) - 400 + 'px';
    const currentLeft = parseInt(window.getComputedStyle(main_main).left, 10);
    main_sidebar.style.borderRight = '0px';
    main_main.style.left = (currentLeft - 400) + 'px';
    search_input.value = '';
  }

  function clearUserDivs() {
    const userDivs = document.querySelectorAll(".search_user1, .search_user2, .search_user3, .search_user4, .search_user5, .search_user6, .search_user7, .search_user8, .search_user9, .search_user10");
  
    for (let i = 0; i < 10 && i < 10; i++) {
      const userDiv = userDivs[i % userDivs.length];
      const photoDiv = userDiv.querySelector(".search_photo_user" + (i + 1));
      const nameSpan = userDiv.querySelector(".search_name_user" + (i + 1) + " #search_name_user" + (i + 1));
      const idSpan = userDiv.querySelector(".search_name_user" + (i + 1) + " #search_id_user" + (i + 1));
      photoDiv.style.backgroundImage = '';
      nameSpan.textContent = "";
      idSpan.textContent = "";
  
      userDiv.style.display = "none";
    }
  }   
});
