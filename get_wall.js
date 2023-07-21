var isLoading = false; // Флаг, указывающий на то, идет ли загрузка новых записей в данный момент
var offset = 1; // Смещение, указывающее на количество уже загруженных записей
var limit = 4; // Количество записей для загрузки за один запрос
var access_token = localStorage.getItem('access_token');

function getWallPosts() {
  if (isLoading) return; // Если уже идет загрузка, прерываем выполнение функции
  isLoading = true; // Устанавливаем флаг загрузки
  var vk_id = localStorage.getItem('vk_id');
  var access_token = localStorage.getItem('access_token');

  VK.api(
    'wall.get',
    {
      owner_id: vk_id,
      offset: offset,
      count: limit,
      extended: 1,
      access_token: access_token,
      v: '5.131'
    },
    function(response) {
      if (response && response.response) {
        var posts = response.response.items;
        var authors = response.response.profiles;
        console.log(response);
        var i = 0;

        function addNextWidget() {
          if (i < posts.length) {
            var post = posts[i];
            var author = authors.find(function(a) {
              return a.id === post.from_id;
            });
            if (author) {
              createWidget(author.id, post.id, post.hash);
            }

            i++;
            addNextWidget(); // Вызываем следующий виджет без задержки
          } else {
            offset += limit; // Увеличиваем смещение для следующей загрузки
            isLoading = false; // Снимаем флаг загрузки
          }
        }

        addNextWidget();
      }
    }
  );
}

function createWidget(authorId, postId, postHash) {
  var div = document.createElement('div');
  div.id = "vk_post_" + authorId + "_" + postId;
  var list = document.querySelector(".wall_post");
  list.appendChild(div);

  VK.Widgets.Post(div.id, authorId, postId, postHash); // Устанавливаем ширину виджета "auto"
  var wallPost = document.querySelector('.wall_post');
  var newMaxHeight = parseInt(window.getComputedStyle(wallPost).maxHeight, 10) + 500;
  wallPost.style.maxHeight = newMaxHeight + 'px';
}

function handleScroll() {
  var wallPostContainer = document.querySelector('.home_bottom');
  var scrollPosition = wallPostContainer.clientHeight + wallPostContainer.scrollTop;
  var scrollHeight = wallPostContainer.scrollHeight;

  if (scrollPosition >= scrollHeight) {
    getWallPosts();
  }
}

function setupScrollHandler() {
  var wallPostContainer = document.querySelector('.home_bottom');
  wallPostContainer.addEventListener('scroll', handleScroll);
}

document.addEventListener("DOMContentLoaded", function(event) {
  setupScrollHandler();
  getWallPosts();
});
