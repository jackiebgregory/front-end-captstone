import React, { useContext } from "react"
import { BookContext } from "./BookSearchProvider"
import "./BookSearch.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const BookSearchForm = () => {
  const { books, getBooks, setSearchTerms, searchTerms, saveBook } = useContext(BookContext)
  const searchBooks = (event) => {
    event.preventDefault()
    getBooks()
  }

const handleSaveBook = (event) => {
  console.log(event.target.value)
  event.preventDefault()
  const book = {
    googleBookId: event.target.id
  }
  saveBook(book)
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

    {books.map(book => {
        return (
          <> 
        {/* <div>
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
        </div> */}

        
     {/* bootstrap below */}
     
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="{book.volumeInfo.imageLinks.thumbnail}/100px180" />
  <Card.Body>
    <Card.Title>{book.volumeInfo.title}</Card.Title>
    <Card.Text>
    {book.volumeInfo.authors}
    </Card.Text>
    <Button variant="primary" id={book.id} onClick={handleSaveBook}>
      Save in My Books</Button>
  </Card.Body>
</Card>
        </>
        )
      })
    }
</>
)}
