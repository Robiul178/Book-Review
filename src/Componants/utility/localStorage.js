import { toast } from "react-toastify";

export const saveDataInToLocalStorage = (book) => {
    const saveBook = JSON.parse(localStorage.getItem("books")) || [];
    const checkBook = saveBook.find((b) => b.bookId == book.bookId);
    if (checkBook) {
        toast('Already read this!')
    } else {
        saveBook.push(book);
        localStorage.setItem("books", JSON.stringify(saveBook))
    }
};