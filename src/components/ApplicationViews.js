import React from "react"
import { Route } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import { BookSearchForm } from "./BookSearch/BookSearchForm"
import { BookSearchProvider } from "./BookSearch/BookSearchProvider"
import { MyBooksProvider } from "./MyBooks/MyBooksProvider"
import { MyBooksList } from "./MyBooks/MyBooksList"

export const ApplicationViews = () => {
  return (
      <>
      <Image src="https://enterprisersproject.com/sites/default/files/styles/large/public/images/cio-book-list.png?itok=eNOL_QL8" />
      <BookSearchProvider>
              <Route exact path="/">
                  <BookSearchForm />
              </Route>
      
      <MyBooksProvider>
        
              <Route path="/MyBooks">
                  <MyBooksList />
              </Route>
      </MyBooksProvider>
      </BookSearchProvider>
      </>
  )
}
