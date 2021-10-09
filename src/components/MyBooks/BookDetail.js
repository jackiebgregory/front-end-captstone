import React, { useContext, useEffect, useState } from "react"
import { BookContext } from "../BookSearch/BookSearchProvider"
import { GoogleBooksApi } from "../../ApiKeys"
import "./MyBooks.css"

export const BookDetail = (props) => {
    const { getBookById } = useContext(BookContext)
    const [ book, setBook ] = useState({
        imageLinks: {}
    })
    const [ image, setImage ] = useState("")
    useEffect(() => {
      // getBookById()
      // .then(book => {
      //   setBook(book)
      // })
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.book}&key=${GoogleBooksApi}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.items[0].volumeInfo){
            setBook(data.items[0].volumeInfo)
            if(data.items[0].volumeInfo.imageLinks){
              setImage(data.items[0].volumeInfo.imageLinks.thumbnail)
            }
         }
          
        })
    }, [])

    return (
    <>
      <div className="my_books_container">
        <div className="my_books">
          <img className= "book__img" src={book.imageLinks.thumbnail}/>
          <div className="book__title">{book.title}</div>
          <div className="book__author">{book.authors}</div> 
          
          <form>
            <label for="name">Grade Level:</label>
            <input type="text"></input>
            <label>Curriculum Standards:</label>
            <input type="text"></input>
            <button>Save</button>
          </form>
          
        </div>
      
      </div>
    
     
    </>
  )
}
