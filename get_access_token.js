  function getAccessTokenAndVkIdFromUrl() {
    var url = window.location.href;
    var accessTokenMatch = url.match(/#access_token=([^&]+)/);
    var vkIdMatch = url.match(/user_id=([^&]+)/);
  
    if (accessTokenMatch && accessTokenMatch[1] && vkIdMatch && vkIdMatch[1]) {
      var accessToken = accessTokenMatch[1];
      var vkId = vkIdMatch[1];
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('vk_id', vkId);
      window.location.href = 'http://socialserver.ru/dashboard.html';
    }
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    getAccessTokenAndVkIdFromUrl();
  });
  