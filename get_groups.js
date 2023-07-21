var isLoading1 = false;
var offset1 = 0; // Смещение, указывающее на количество уже загруженных записей
var limit1 = 5; // Количество записей для загрузки за один запрос
var intervalId;

access_token = localStorage.getItem('access_token');
vk_id = localStorage.getItem('vk_id');

function create_column_div (search_group_button1){
    localStorage.setItem('search_group_button1', search_group_button1);
    var mainMain = document.querySelector('.main_main');
  // Проверяем наличие дочернего элемента с классом 'main_group'
  var existingGroup = mainMain.querySelector('.main_group');
  if (existingGroup) {
    clearInterval(intervalId);
    offset1 = 0;
    limit1 = 5;
    existingGroup.classList.remove('main_group'); // Удаляем класс 'main_group'
    existingGroup.remove(); // Удаляем элемент
    var div = document.createElement('div');
    div.className = 'main_group';
    var list = document.querySelector(".main_main");
    list.appendChild(div);
    setupScrollHandler1();
    loadLastPostId();
    intervalId = setInterval(loadNewPosts, 1000);
    getWallPosts1(search_group_button1);
  }
  else{
    var div = document.createElement('div');
    div.className = 'main_group';
    var list = document.querySelector(".main_main");
    list.appendChild(div);
    setupScrollHandler1();
    loadLastPostId();
    intervalId = setInterval(loadNewPosts, 1000);
    getWallPosts1(search_group_button1);
  }
}

function create_column(authorId, postId, postHash) {
    var div1 = document.createElement('div');
    div1.id = "vk_post_" + authorId + "_" + postId;
    var list1 = document.querySelector(".main_group");
    list1.appendChild(div1);
    VK.Widgets.Post(div1.id, authorId, postId, postHash); // Устанавливаем ширину виджета "auto"
}

function getWallPosts1(search_group_button1) {
    if (isLoading1) return; // Если уже идет загрузка, прерываем выполнение функции
    isLoading1 = true; // Устанавливаем флаг загрузки
    var access_token = localStorage.getItem('access_token');

  
    VK.api(
      'wall.get',
      {
        owner_id: '-' + search_group_button1,
        offset: offset1,
        count: limit1,
        extended: 1,
        access_token: access_token,
        v: '5.131'
      },
      function(response) {
        if (response && response.response) {
            console.log(response);
            var posts = response.response.items;
          createWidget1(posts);
        }
      }
    );
  }

  function createWidget1(posts) {
    var i = 0;
    console.log('1');
    createNextWidget();
  
    function createNextWidget() {
      if (i < posts.length) {
        console.log('2');
        var post = posts[i];
        console.log(post.from_id);
        create_column(post.from_id, post.id, post.hash);
        console.log("i = " + i);
        i++;
        console.log('4');
        setTimeout(createNextWidget, 0); // Вызываем следующий виджет без задержки
      } else {
        console.log('5');
        offset1 += limit1; // Увеличиваем смещение для следующей загрузки
        isLoading1 = false; // Снимаем флаг загрузки
      }
    }
  }
  
  

function handleScroll1() {
  var wallPostContainer = document.querySelector('.main_group');
  var scrollPosition = wallPostContainer.clientHeight + wallPostContainer.scrollTop;
  var scrollHeight = wallPostContainer.scrollHeight;
    
  if (scrollPosition >= scrollHeight) {
    search_group_button1 = localStorage.getItem('search_group_button1');
    getWallPosts1(search_group_button1);
  }
}

function setupScrollHandler1() {
  var wallPostContainer = document.querySelector('.main_group');
  wallPostContainer.addEventListener('scroll', handleScroll1);
}

document.addEventListener("DOMContentLoaded", function(event) {
    const search_group_button1 = document.querySelector('.search_group_button1');
    const search_group_button2 = document.querySelector('.search_group_button2');
    const search_group_button3 = document.querySelector('.search_group_button3');
    const search_group_button4 = document.querySelector('.search_group_button4');
    const search_group_button5 = document.querySelector('.search_group_button5');
    const search_group_button6 = document.querySelector('.search_group_button6');
    const search_group_button7 = document.querySelector('.search_group_button7');
    const search_group_button8 = document.querySelector('.search_group_button8');
    const search_group_button9 = document.querySelector('.search_group_button9');
    const search_group_button10 = document.querySelector('.search_group_button10');

    search_group_button1.addEventListener('click', () => {
        create_column_div(search_group_button1.id);
        closeSearch();
      });
      search_group_button2.addEventListener('click', () => {
        create_column_div(search_group_button2.id);
        closeSearch();
      });
      search_group_button3.addEventListener('click', () => {
        create_column_div(search_group_button3.id);
        closeSearch();
      });
      search_group_button4.addEventListener('click', () => {
        create_column_div(search_group_button4.id);
        closeSearch();
      });
      search_group_button5.addEventListener('click', () => {
        create_column_div(search_group_button5.id);
        closeSearch();
      });
      search_group_button6.addEventListener('click', () => {
        create_column_div(search_group_button6.id);
        closeSearch();
      });
      search_group_button7.addEventListener('click', () => {
        create_column_div(search_group_button7.id);
        closeSearch();
      });
      search_group_button8.addEventListener('click', () => {
        create_column_div(search_group_button8.id);
        closeSearch();
      });
      search_group_button9.addEventListener('click', () => {
        create_column_div(search_group_button9.id);
        closeSearch();
      });
      search_group_button10.addEventListener('click', () => {
        create_column_div(search_group_button10.id);
        closeSearch();
      });
      
});

function closeSearch(){
  const search_groups = document.querySelector('.search_groups');
  search_groups.style.display = 'none';
}

function loadNewPosts() {
  VK.Api.call('wall.get', { owner_id: '-' + group_id, count: 2, v: "5.131" }, function(response) {
    if (response && response.response && response.response.items && response.response.items.length > 0) {
      var newPost = response.response.items[1];
      if (newPost.id != lastPostId) {
        lastPostId = newPost.id;
        offset1++;
        var div1 = document.createElement('div');
        div1.id = "vk_post_" + newPost.from_id + "_" + newPost.id;
        var list1 = document.querySelector(".main_group");
        list1.prepend(div1);
        VK.Widgets.Post(div1.id, newPost.from_id, newPost.id, newPost.hash); // Устанавливаем ширину виджета "auto"
        
      }
    }
  });
}

// Функция для загрузки последнего идентификатора записи при запуске
function loadLastPostId() {
    group_id = localStorage.getItem('search_group_button1');
  VK.Api.call('wall.get', { owner_id: '-' + group_id, count: 2, v: "5.131" }, function(response) {
    if (response && response.response && response.response.items && response.response.items.length > 0) {
      lastPostId = response.response.items[1].id;
      localStorage.setItem('lastPostId', lastPostId);
    }
  });
}