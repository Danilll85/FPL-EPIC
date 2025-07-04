import { Router, Request, Response } from "express";
import { Book } from "../types/Book";

const router = Router();

let books: Book[] = [
  {
    id: 1,
    title: "Node.js for Beginners",
    author: "John Doe",
    year: 2022,
  },
  {
    id: 2,
    title: "The Witcher last wish",
    author: "Andrzej Sapkowski",
    year: 1998,
  },
];

router.get("/", (req: Request<{}, {}, {}, { title?: string; year?: number }>, res: Response) => {
  const bookTitle = req.query.title?.replace(/^"|"$/g, "");
  const bookYear = Number(req.query.year);

  console.log(bookTitle);
  console.log(bookYear);

  const filteredBooks =
    bookTitle && bookYear
      ? books.filter((book) => book.title == bookTitle && book.year == bookYear)
      : bookTitle
      ? books.filter((book) => book.title == bookTitle)
      : bookYear
      ? books.filter((book) => book.year == bookYear)
      : books;

  console.log(filteredBooks);

  res.status(200).json(filteredBooks);
});

router.get("/search", (req: Request<{}, {}, {}, { title: string }>, res) => {
  const bookTitle = req.query.title?.replace(/^"|"$/g, "");

  const book = books.find((book) => book.title == bookTitle);

  res.status(200).json(book);
});

router.post("/", (req: Request<{}, {}, Book>, res: Response) => {
  const newBook = {
    ...req.body,
    id: Date.now(),
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  const book = books.find((book) => book.id == +req.params.id);

  if (!book) {
    res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

router.put("/:id", (req, res: any) => {
  const bookId = parseInt(req.params.id);
  const updatedBookData = req.body;

  if (isNaN(bookId)) {
    return res.status(400).json({ message: "Invalid book ID" });
  }

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const updatedBook: Book = {
    ...books[bookIndex],
    ...updatedBookData,
    id: bookId,
  };

  books[bookIndex] = updatedBook;

  return res.status(200).json(updatedBook);
});

router.delete("/:id", (req, res: any) => {
  const bookId = parseInt(req.params.id);

  if (isNaN(bookId)) {
    return res.status(400).json({ message: "Invalid book ID" });
  }

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = books[bookIndex];
  books.splice(bookIndex, 1);

  return res.status(200).json({
    message: "Book deleted successfully",
    deletedBook,
  });
});

export default router;
