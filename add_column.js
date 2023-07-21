window.addEventListener("DOMContentLoaded", () => {
    const add_column_div = document.querySelector('.add_column_div');
    const add_column_button = document.querySelector('.add_column_button');
    const close_button_column = document.querySelector('.close_button_column');
    const add_column_home_button = document.querySelector('.add_column_home_button');
    const add_column_groups_button = document.querySelector('.add_column_groups_button');
    const home_page = document.querySelector('.home_page');
    const search_groups = document.querySelector('.search_groups');

    add_column_home_button.addEventListener('click', () => {
      if(home_page.style.display = 'flex'){
      }
      else{
        openHome();
        closeModal();
      }

      });
  
    add_column_button.addEventListener('click', () => {
      openModal();
    });

    close_button_column.addEventListener('click', () => {
      closeModal();
      });
    
    add_column_groups_button.addEventListener('click', () => {
      openSearchGroups();
      closeModal();
    })


    function openModal() {
        add_column_div.style.display = 'flex';
        add_column_div.style.borderRight = '3px solid gray';
    }
    
    function closeModal() {
        add_column_div.style.display = 'none';
        add_column_div.style.borderRight = '0px';
    }

    function openHome() {
      home_page.style.display = 'flex';
    }

    function openSearchGroups() {
      search_groups.style.display = 'flex';
      search_groups.style.borderRight = '3px solid gray';
    }

  });
  