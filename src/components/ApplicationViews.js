import React from "react"
import { Route } from "react-router-dom"
import { BookSearchForm } from "./BookSearch/BookSearchForm"
import { BookSearchProvider } from "./BookSearch/BookSearchProvider"
import { MyBooksProvider } from "./MyBooks/MyBooksProvider"
import { MyBooksList } from "./MyBooks/MyBooksList"
import Image from 'react-bootstrap/Image'

export const ApplicationViews = () => {
  return (
      <>
      {/* <img src="https://c.pxhere.com/photos/da/af/books_bookstore_book_reading_shop_writer_sale_books_read-822866.jpg!d" srcset="https://c.pxhere.com/photos/da/af/books_bookstore_book_reading_shop_writer_sale_books_read-822866.jpg!d" alt="book, read, reading, reader, shop, color, shelf, writer, furniture, education, colors, bookstore, library, books, shelving, sale books, Free Images In PxHere"></img> */}
      <BookSearchProvider>
              <Route exact path="/">
              <Image src="https://c.pxhere.com/photos/da/af/books_bookstore_book_reading_shop_writer_sale_books_read-822866.jpg!d" srcset="https://c.pxhere.com/photos/da/af/books_bookstore_book_reading_shop_writer_sale_books_read-822866.jpg!d" alt="book, read, reading, reader, shop, color, shelf, writer, furniture, education, colors, bookstore, library, books, shelving, sale books, Free Images In PxHere" className="responsive" width="650 px" height="%" fluid />
                  <BookSearchForm />
              </Route>
      
      <MyBooksProvider>
        
              <Route path="/MyBooks">
                  <MyBooksList />
                  
              </Route>
      </MyBooksProvider>
      </BookSearchProvider>
      </>
  )
}
