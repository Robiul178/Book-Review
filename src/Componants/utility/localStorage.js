import { toast } from "react-toastify";

export const saveDataInToLocalStorage = (book) => {
    const saveBook = JSON.parse(localStorage.getItem("books")) || [];
    const checkBook = saveBook.find((b) => b.bookId == book.bookId);
    if (checkBook) {
        toast.error('Already read this!')
    } else {
        saveBook.push(book);
        localStorage.setItem("books", JSON.stringify(saveBook));
        // localStorage.setItem("allbook", JSON.stringify(saveBook));
    }
};
export const saveWishListData = (book) => {
    const saveBook = JSON.parse(localStorage.getItem("books")) || [];
    const checkBook = saveBook.find((b) => b.bookId == book.bookId);
    if (checkBook) {
        toast.error('You have Already read this!')
    } else {
        saveBook.push(book);
        localStorage.setItem("wishlist", JSON.stringify(saveBook));
        // localStorage.setItem("allbook", JSON.stringify(saveBook));
    }
};