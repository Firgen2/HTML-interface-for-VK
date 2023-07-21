document.addEventListener('DOMContentLoaded', function() {
  var publishButton = document.querySelector('.publish_button');

  publishButton.addEventListener('click', sendwallpost);
});


function sendwallpost(){
  vk_id = localStorage.getItem('vk_id');
  var url = 'https://vk.com/wall' + vk_id;
  window.open(url, '_blank');
}
