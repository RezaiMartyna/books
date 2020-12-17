//szablon znajdujący się w html
const templateBook = Handlebars.compile(document.querySelector('#template-book').innerHTML);
//lista książek w html
const listBookHtml = document.querySelector('.books-list');

function render() {
  //dla każdego elementu zapisanego w pliku dataSource.books
  for (const element of dataSource.books) {
    /*wstaw element do szablonu */
    const generatedHTML = templateBook(element);
    /*stwórz gotowy html o to co powstało wyrzej */
    const elementhtml = utils.createDOMFromHTML(generatedHTML);
    /*znajdz miejsce do którego chcesz włożyc gotowy html*/
    const menuContainer = listBookHtml;
    /*dodaj html do miejsca w którym chcesz zeby sie znajdował */
    menuContainer.appendChild(elementhtml);
  }
};
//wywołaj funkcje
render();

const favoriteBooks = [];

function initActions() {

  ListOfElements = listBookHtml.querySelectorAll('.book__image');

  for (const picture of ListOfElements) {
    picture.addEventListener('dblclick', function(event){
      event.preventDefault();

      if (picture.hasAttribute('favorite')){
        const bookId = picture.getAttribute('data-id');
        // usunać element z tablicy
        delete favoriteBooks(bookId);
        picture.classList.remove('favorite');
      } else {
        picture.classList.add('favorite');
        const bookId = picture.getAttribute('data-id');
        favoriteBooks.push(bookId);
        console.log(favoriteBooks, 'ulubione ksiazki')
      }
    })
  }
};
initActions();

