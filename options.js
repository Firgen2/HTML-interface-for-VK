window.addEventListener("DOMContentLoaded", () => {
    const options_div_button = document.querySelector('.options_div_button');
    const close_button = document.querySelector('.close_button');
    const options_home_page = document.querySelector('.options_home_page');
    const home_page = document.querySelector('.home_page');
    const delete_column_button = document.querySelector('.delete_column_button');
    
  
    options_div_button.addEventListener('click', () => {
      openModal();
    });

    close_button.addEventListener('click', () => {
        closeModal();
      });

    delete_column_button.addEventListener('click', () => {
        close_home_page();
      });
  
    function openModal() {
        options_home_page.style.display = 'block';
        options_home_page.style.borderRight = '3px solid gray';
    }
    
    function closeModal() {
        options_home_page.style.display = 'none';
        options_home_page.style.borderRight = '0px';
    }

    function close_home_page(){
        home_page.style.display = 'none';
        options_home_page.style.display = 'none';
        options_home_page.style.borderRight = '0px';
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
  