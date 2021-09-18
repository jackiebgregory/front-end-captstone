import React from "react"
import { Route } from "react-router-dom"
import { BookSearchForm } from "./BookSearch/BookSearchForm"
import { BookSearchProvider } from "./BookSearch/BookSearchProvider"

export const ApplicationViews = () => {
  return (
      <>
      <BookSearchProvider>
              <Route exact path="/searchBooks">
                  <BookSearchForm />
              </Route>
      </BookSearchProvider>
      </>
  )
}
