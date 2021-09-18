import React, { useContext } from "react"
import { BookContext } from "./BookSearchProvider"

export const BookSearchForm = () => {
  const { books, getBooks, setSearchTerms } = useContext(BookContext)
  const searchBooks = (event) => {
    event.preventDefault()
    setSearchTerms(event.target.value)
    getBooks()
  }

  return (
    <>
    <form onSubmit={searchBooks}>
      <label>
        Search for a book:
        <input type="text" name="search" 
        placeholder="Search for a book... " />
      </label>
      <input type="submit" value="Submit" 
      />
    </form>

  <ul>
    {books.map(book => {
        return (
          <div>
            <li>
          {book.volumeInfo.title}
        </li>
        <li>
          <img src={book.volumeInfo.imageLinks.thumbnail}/>
        </li>
        </div>
        )
      })
    }
  </ul>

</>

)}





{/* <button
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    saveLead()
                }}>
                {leadId ? <>Save Lead</> : <>Add Lead</>}</button> */}
