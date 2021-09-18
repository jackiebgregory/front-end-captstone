import React, { useContext } from "react"
import { BookContext } from "./BookSearchProvider"

export const BookSearchForm = () => {
  const { books, getBooks, setSearchTerms, searchTerms } = useContext(BookContext)
  const searchBooks = (event) => {
    event.preventDefault()
    // setSearchTerms(event.target.value)
    getBooks()
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
      <button onClick={searchBooks}>Search</button>
    </form>

  <ul>
    {books.map(book => {
        return (
          <div>
            
        <div class="search_return">
          <img class= "returned_item" src={book.volumeInfo.imageLinks.thumbnail}/>
          </div>
          <div class="returned_item">
          {book.volumeInfo.title}
          </div>
          <div class="returned_item">
          {book.volumeInfo.authors}
          </div>
          <div>
            <button > 
            Save in My Books
          </button>
          </div>
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
