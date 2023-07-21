window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('#search_input');
    const searchText = document.querySelector('#search_text');
    const searchTextContent = document.querySelector('#search_text_content');
    const search_groups_text_content = document.querySelector('#search_groups_text_content');
    const search_groups_input = document.querySelector('#search_groups_input');
    const search_groups_text = document.querySelector('#search_groups_text');



    search_groups_input.addEventListener('input', (event) => {
        const inputText1 = event.target.value;
        if (inputText1) {
            search_groups_text_content.textContent = inputText1;
            search_groups_text.style.display = 'block';
        } else {
            search_groups_text.style.display = 'none';
        }
        });

    searchInput.addEventListener('input', (event) => {
    const inputText = event.target.value;
    if (inputText) {
        searchTextContent.textContent = inputText;
        searchText.style.display = 'block';
    } else {
        searchText.style.display = 'none';
    }
    });

});
