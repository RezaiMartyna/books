{

templateBook = Handlebars.compile(document.querySelector('#template-book').innerHTML),
console.log('temple', templateBook)
listBookHtml = document.querySelector('.books-list');
console.log('list', listBookHtml)




function render() {
  for (const element in dataSource.books) {
    /*generate HTML based on template */
    const generatedHTML = templateBook(element);
    /*create element using utils.creteElementFromHTML */
    elementhtml = utils.createDOMFromHTML(generatedHTML);
    /*find menu container*/
    const menuContainer = listBookHtml
    /*add element to menu*/
    menuContainer.appendChild(elementhtml);
  }
}
function render();

}


