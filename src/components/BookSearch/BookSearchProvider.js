import React, { useState, createContext } from "react"
import { GoogleBooksApi } from "../../ApiKeys"

export const BookContext = createContext()

export const BookSearchProvider = (props) => {
    const [books, setBooks] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getBooks = () => {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=${GoogleBooksApi}`)
        .then(res => res.json())
        .then(books => {
            setBooks(books.items)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const addBook = bookObj => {
        return fetch("http://localhost:8088/$`{VolumeId}`", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObj)
        })
        .then(getBooks)
    }
      
    return (
        <BookContext.Provider value={{
            books, getBooks, addBook, searchTerms, setSearchTerms
        }}>
            {props.children}
        </BookContext.Provider>
    )
}
