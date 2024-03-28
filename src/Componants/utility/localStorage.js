import { toast } from "react-toastify";

export const saveDataInToLocalStorage = (book) => {
    const saveBook = JSON.parse(localStorage.getItem("books")) || [];
    const checkBook = saveBook.find((b) => b.bookId == book.bookId);
    if (checkBook) {
        toast.error('Already read this!')
    } else {
        saveBook.push(book);
        localStorage.setItem("books", JSON.stringify(saveBook));
    }
};
export const saveWishListData = (book) => {
    const saveBook = JSON.parse(localStorage.getItem("books")) || [];
    const saveWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    // console.log(saveWishlist)
    const checkBook = saveBook.find((b) => b.bookId == book.bookId);
    if (checkBook) {
        toast.error('You have Already read this!')
    } else {
        saveWishlist.push(book);
        localStorage.setItem("wishlist", JSON.stringify(saveWishlist));
        // console.log(book)
    }
};

