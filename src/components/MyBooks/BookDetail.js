import React, { useContext, useEffect, useState } from "react"
import { BookContext } from "../BookSearch/BookSearchProvider"
import { GoogleBooksApi } from "../../ApiKeys"
// import "./MyBooks.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

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
       {/* <div className="book"> */}
       {/* <img className= "book__img" src={book.imageLinks.thumbnail}/>
       <div className="book__title">{book.title}</div>
       <div className="book__author">{book.authors}</div> 
     </div> */}


{/* bootstrap below */}
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${image}`} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
    {book.authors}
    </Card.Text>
  </Card.Body>
</Card>
    </>
  )
}
