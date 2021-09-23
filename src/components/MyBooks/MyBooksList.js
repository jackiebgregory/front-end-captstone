import { useHistory, Link } from 'react-router-dom'
import React, { useContext, useEffect, useState  } from "react"
import { MyBooksContext } from "../MyBooks/MyBooksProvider"
import { BookDetail } from "./BookDetail"


export const MyBooksList = () => {
  const { books, getMyBooks } = useContext(MyBooksContext)
  const [ filteredBooks, setFiltered ] = useState([])
  const history = useHistory()

  useEffect(() => {
    console.log("BookList: useEffect - getMyBooks")
    getMyBooks()
  }, [])

  return (
    <>
  <div className="books">
      {
        books.map(book => {
          return <BookDetail key={book.id} book={book.googleBookId} />
          
        })
      }
      </div>
    </>
  )
}
