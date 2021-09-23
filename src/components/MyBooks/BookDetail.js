import React, { useContext, useEffect, useState } from "react"
import { BookContext } from "../BookSearch/BookSearchProvider"
import { GoogleBooksApi } from "../../ApiKeys"

export const BookDetail = (props) => {
    const { getBookById } = useContext(BookContext)
    const [ book, setBook ] = useState({})

    useEffect(() => {
      // getBookById()
      // .then(book => {
      //   setBook(book)
      // })
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.book}&key=${GoogleBooksApi}`)
        .then(res => res.json())
        .then(book => {
          console.log(book)
          setBook(book.items[0].volumeInfo)
        })
    }, [])

    return (
    <>
       <section className="book">
       {/* <img class= "book__img" src={book.imageLinks.thumbnail}/> */}
       <div class="book__title">{book.title}</div>
       <div class="book__author">{book.authors}</div> 
     </section>
    </>
  )
}
