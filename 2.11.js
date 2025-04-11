import { catalog } from './catalog.js';

const chosenCentury = 20;
const searchQuery = 'История';

console.log(catalog);

function getUniqueLanguages() {
    let uniqueLanguages = [];
    for (let bookIndex = 0; bookIndex < catalog.length; bookIndex++) {
        if (!uniqueLanguages.includes(catalog[bookIndex].language)) {
            uniqueLanguages.push(catalog[bookIndex].language);
        }
    }
    return uniqueLanguages;
}

console.log(getUniqueLanguages());

function getBooksByCentury(centuryValue) {
    let booksInCentury = [];
    for (let bookIndex = 0; bookIndex < catalog.length; bookIndex++) {
        if (
            catalog[bookIndex].year > (centuryValue - 1) * 100 &&
            catalog[bookIndex].year < centuryValue * 100
        ) {
            booksInCentury.push(catalog[bookIndex].title);
        }
    }
    return booksInCentury;
}

console.log(getBooksByCentury(chosenCentury));

function findBooksByQuery(query) {
    let foundBooks = [];
    for (let i = 0; i < catalog.length; i++) {
        let bookAuthor = catalog[i].author;
        let bookTitle = catalog[i].title;
        if (
            bookAuthor.includes(query) ||
            bookAuthor.toLowerCase().includes(query.toLowerCase())
        ) {
            foundBooks.push(`${catalog[i].author} - ${catalog[i].title}`);
        } else if (
            bookTitle.includes(query) ||
            bookTitle.toLowerCase().includes(query.toLowerCase())
        ) {
            foundBooks.push(`${catalog[i].author} - ${catalog[i].title}`);
        }
    }
    return foundBooks;
}

console.log(findBooksByQuery(searchQuery));