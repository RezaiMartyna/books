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
}
//wywołaj funkcje
render();

const favoriteBooks = [];

function initActions() {

  //Lista obrazów w liście ksiązek w html
  const ListOfPictures = listBookHtml.querySelectorAll('.book__image');

  for (const picture of ListOfPictures) {
    //nasłuchuj na każdym zdjęciu podwójnego kliknięcia
    picture.addEventListener('dblclick', function(event){
      //zablokuj domyślną funkcję przeglądarki
      event.preventDefault();

      // jeżeli zdjęcie ma klasę 'favorite'
      if (picture.classList.contains('favorite')){
        //weź atrybut z obrazka przypisana w 'data-id'
        const bookId = picture.getAttribute('data-id');
        //znajdz index pod którym znajduje się atrybut
        const indexOfBookID = favoriteBooks.indexOf(bookId[ fromIndex = 0]);
        // usunać ten element z tablicy
        favoriteBooks.splice(indexOfBookID, 1);
        //usuń klase favorite z obrazka
        picture.classList.remove('favorite');

        //jeżeli inaczej
      } else {
        //dodaj klase favorite do obrazka
        picture.classList.add('favorite');
        //weź atrybut z obrazka przypisana w 'data-id'
        const bookId = picture.getAttribute('data-id');
        //dodaj ten element do tablicy
        favoriteBooks.push(bookId);
      };
    });
  };
};
//wywołaj funkcje
initActions();

