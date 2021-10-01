import React, { useContext } from "react"
import { BookContext } from "./BookSearchProvider"
import "./BookSearch.css"
import { useHistory } from "react-router"

export const BookSearchForm = () => {
  const { books, getBooks, setSearchTerms, searchTerms, saveBook } = useContext(BookContext)
  const searchBooks = (event) => {
    event.preventDefault()
    getBooks()
  }
const history = useHistory()  
const handleSaveBook = (event) => {
  console.log(event.target.value)
  event.preventDefault()
  const book = {
    googleBookId: event.target.id
  }
  saveBook(book)
  history.push("/myBooks")
}

  return (
    <>
    <form>
      <label>
        Search for a book:
        <input 
          type="text" 
          name="search" 
          value={searchTerms} 
          onChange={event => setSearchTerms(event.target.value)}
          placeholder="For example... " 
        />
      </label>
      <button className="search_button" onClick={searchBooks}>Search</button>
    </form>
    
    <div className="book_search_results">
    {books.map(book => {
        return (
          <> 
          <div className="returned_books">
            <div>
            <img className= "returned_item_image" 
            src={book.volumeInfo.imageLinks.thumbnail}/>
            </div>
            <div className="returned_item_title">
            {book.volumeInfo.title}
            </div>
            <div className="returned_item_author">
            {book.volumeInfo.authors}
            </div>
            <div>
            <button id={book.id} onClick={handleSaveBook}> 
            Save in My Books
            </button>
            </div>
          </div>
        
        </>
        )
      })
    }
    </div>
</>
)}
