import { Book } from "./book.model";

export interface Library {
    library: {
        book: Book
    }[];
}