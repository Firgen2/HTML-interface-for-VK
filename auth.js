function login() {
  var redirectUrl = 'http://socialserver.ru/blank.html'; 

  var authUrl = 'https://oauth.vk.com/authorize?' +
    'client_id=51649831' + 
    '&display=page' +
    '&redirect_uri=' + encodeURIComponent(redirectUrl) +
    '&scope=friends,offline,wall' + 
    '&response_type=token' +
    '&v=5.131';

  window.location.href = authUrl;
}


window.addEventListener("DOMContentLoaded", () => {
  const button_vk = document.querySelector('.button_vk');
  button_vk.addEventListener('click', () => {    
    login();
  });
});
