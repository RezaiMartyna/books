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

const filters = [];

const buttonFilters = document.querySelector('.filters');

function initActions() {

  //nasłuchuj na lisćie z ksiązkami  podwójnego kliknięcia
  listBookHtml.addEventListener('dblclick', function (event) {
    //zablokuj domyślną funkcję przeglądarki
    event.preventDefault();
    //ustaw klikniety element= na (event.target=kliknięty element) (offsetParent=rodzic elementu)
    const clickedElement = event.target.offsetParent;

    //jeżeli kliknięcie nastąpiło na obrazku
    if (clickedElement.classList.contains('book__image')) {

      // jeżeli zdjęcie ma klasę 'favorite'
      if (clickedElement.classList.contains('favorite')) {
        //weź atrybut z obrazka przypisana w 'data-id'
        const bookId = clickedElement.getAttribute('data-id');
        //znajdz index pod którym znajduje się atrybut
        const indexOfBookID = favoriteBooks.indexOf(bookId);
        // usunać ten element z tablicy
        favoriteBooks.splice(indexOfBookID, 1);
        //usuń klase favorite z obrazka
        clickedElement.classList.remove('favorite');

        //jeżeli inaczej
      } else {
        //dodaj klase favorite do obrazka
        clickedElement.classList.add('favorite');
        //weź atrybut z obrazka przypisana w 'data-id'
        const bookId = clickedElement.getAttribute('data-id');
        //dodaj ten element do tablicy
        favoriteBooks.push(bookId);
      }
    }
  });

  buttonFilters.addEventListener('click', function (event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'INPUT' && clickedElement.type === 'checkbox' && clickedElement.name === 'filter') {

      const input = document.querySelectorAll('input[name=filter]');
      for (const inp of input) {
        if (inp.checked) {
          const value = inp.getAttribute('value');
          filters.push(value);
          console.log(filters, 'dodaj')
        } else {
          const value = inp.getAttribute('value');
          const indexOfFilterID = filters.indexOf(value);
          filters.splice(indexOfFilterID, 1);
          console.log(filters, 'usuń')
        }
      }
    }
    console.log(filters);
  });
}
//wywołaj funkcje
initActions();


