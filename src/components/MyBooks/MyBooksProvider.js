import React, { useState, createContext } from "react"
import { GoogleBooksApi } from "../../ApiKeys"

export const MyBooksContext = createContext()

export const MyBooksProvider = (props) => {
    const [books, setBooks] = useState([])

    const getBookById = (googleBookId) => {
      return fetch(`http://localhost:8088/myBooks?googleBookId=${googleBookId}`)
      .then(res => res.json())
  }

    const getMyBooks = () => {
      return fetch(`http://localhost:8088/myBooks`)
      .then(res => res.json())
      .then(setBooks)
  }

    return (
        <MyBooksContext.Provider value={{
            books, getBookById, getMyBooks, setBooks
        }}>
            {props.children}
        </MyBooksContext.Provider>
    )
}
