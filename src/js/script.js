const templateBook = Handlebars.compile(document.querySelector('#template-book').innerHTML);
const listBookHtml = document.querySelector('.books-list');
const elements = dataSource.books

function render() {
  for (const element of elements) {
    /*generate HTML based on template */
    const generatedHTML = templateBook(element);
    /*create element using utils.creteElementFromHTML */
    const elementhtml = utils.createDOMFromHTML(generatedHTML);
    /*find book container*/
    const menuContainer = listBookHtml;
    /*add element */
    menuContainer.appendChild(elementhtml);
  }
}
render();
