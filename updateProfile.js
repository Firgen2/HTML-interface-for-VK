// Загрузка профиля пользователя
access_token = localStorage.getItem('access_token');
vk_id = localStorage.getItem('vk_id');
function loadProfile() {
    var vk_id = localStorage.getItem('vk_id');
    var access_token = localStorage.getItem('access_token');
    VK.Api.call('users.get', {user_ids: vk_id, fields: 'photo_max_orig', access_token: access_token, v: '5.131' }, function(response) {
      if (response && response.response) {
        var userData = response.response[0];
        // Обновление данных на странице
        var firstNameSpan = document.querySelector('#first_name');
        var lastNameSpan = document.querySelector('#last_name');
        var profileidSpan = document.querySelector('#profile_id');
        var profile_photo_img = document.querySelector('.profile_photo_img');
        firstNameSpan.innerText = userData.first_name;
        lastNameSpan.innerText = userData.last_name;
        profileidSpan.innerText = 'vk.com/id' + vk_id;
        profile_photo_img.setAttribute('src', userData.photo_max_orig);
        var profile_top_vk_id = document.querySelector('#vk_id');
        var photo_page = document.querySelector('#photo_page');
        profile_top_vk_id.innerText = 'vk.com/id' + vk_id;
        photo_page.setAttribute('src', userData.photo_max_orig);
        console.log(vk_id);
        console.log(access_token);
        console.log(response);
        //window.location.href = 'http://socialserver.ru/dashboard.html';
      }
    });
  }

  // Вызов функции после полной загрузки DOM
  document.addEventListener("DOMContentLoaded", function(event) {
    loadProfile();
  });
  