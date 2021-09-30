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
              <Image src="https://lh3.googleusercontent.com/Lq1pNJ3FR2vbiQHxjjzKCYEnbhFN6q4DPdMiRvKh8N0gb0qWgwHyGQjH_rj0CwNWsuts9e8i_WTH4pwXznWExQsGkhwNvB-4a3vq3sF0fH-p8fbU6fv7LePOhIKV76LlhCnUbXbylP65FWIl7YKbNrAZ6_cNa_udWo0G_qe1iAorIeBgAYMuQTKan53DFdtRGSCbPCQH2gpQyGbb7VXDsHZAFIspHZ9IUVlzVCqnw80AAVeX9k7vgptH7Fk6m4bs5iYFc2B5fnBkK6ONj2BIhY2qJGkbOz8ozAs3c2mqOMcNS5E0UM_tqEKhxtJ2U3Lg4ksl085wjKJXuezujd2MAtXgSgcpCk9qNRyoobT05MNp8Cp8aF5oNGZjchkmY1-MCr1OJQU2nvAbzOzVhiDVv5YOf5V3BAK8fFuPaoYw4123pNy-gLG7_enfGp0Aj6z7Vm90dlye32sWb2vr-aRFITk64MeCBVK-rr3PbIegHQykQjAndOpgvT9Z8IWvfwOlWgI4PvUgI02FRedj3BZ7PontdbD6Ca7gn796r2NG_mBCxh7mx85PVYNqyDIqx50Uobv874Ry7e__cEIId6jKbiT9R1tQYjeJk5pftvcQ9nzMoljmcY3kJ1mcsc1AvybS4vtbl1-AUtSXfJvdAl2Jc6xgJVw9EscO6PtAEPXkJEedYERUlVDUX2jU3q-Kdlt5f3s4oPevugeWHl3E01ZBljs=w1350-h650-no?authuser=0"  alt="book, read, reading, reader" className="responsive" width="" height="" fluid />
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
