const templateBook = Handlebars.compile(document.querySelector('#template-book').innerHTML);
const listBookHtml = document.querySelector('.books-list');


function render() {
  for (const element in dataSource.books) {
    /*generate HTML based on template */
    const generatedHTML = templateBook(element);
    /*create element using utils.creteElementFromHTML */
    const elementhtml = utils.createDOMFromHTML(generatedHTML);
    /*find menu container*/
    const menuContainer = listBookHtml;
    /*add element to menu*/
    menuContainer.appendChild(elementhtml);
  }
}
render();
