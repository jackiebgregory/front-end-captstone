import React from "react"
import { Route } from "react-router-dom"
import { BookSearchForm } from "./BookSearch/BookSearchForm"
import { BookSearchProvider } from "./BookSearch/BookSearchProvider"
import { MyBooksProvider } from "./MyBooks/MyBooksProvider"
import { MyBooksList } from "./MyBooks/MyBooksList"

export const ApplicationViews = () => {
  return (
      <>
      <BookSearchProvider>
              <Route exact path="/">
              <img src="https://lh3.googleusercontent.com/TUSZVLMz5DXLXJatKadVg66kU-ytid-Fu19ZJRvArSFCUMHcFCaMSBVqo2Rv2RS6pJGoA0QZKNwC9nAPFHIObRJbJwNygFAguerWH5e9gQMwbHoLdHs5x5FK3C_3WUBUw1ArSnsfxsZhHVGf5fFuKJoggATBmn7RvQ4haBrA5h9QCDP8Dh1oDx51dikRFkdu4nful0AWMUCI2F0sfTxgcVe4VniMzNZD7wWD_U0oCOP9sXGc5YfNq2DXNZfbP89xW0l4WQXNfnjo2r-YMm9iNjNtOaju_An_LAlformW6QzotpbP-n0I4PU9WDDrDOjtTAS5UhhDsjp7CEqoAoMdYNOfJGJouFSeYLPslOBkcTJ3dXGSEmNf1C4Ms40xqNGkLBPsI4q_2a3bUAcTE8QQ2m-8ZZvLTXYZhS9JnDvll8kjfsEBW-jQXjbA-OohnIi3-VPNdqkAJbekgZs1C4kM4aZV99G_V7KnShwVtI6ybjdlyc90DZ_OEpOYiuJMtDyriiGPuCQoRYaIbwmiTaHYXDhzby_k1gbjtsPMbqB8reQAP9WHBmFebnIpYchlR4kPi0FQeBS05gfyY9mFBKzc6IWW_otgF5lEIWKwmKBEwQM4ycnXevUNkWb4uf_ZOFBV1Qa2sfOvmYoXMIvUre6xXbDW7SzKWKdk2phb2VDgorlVHA5RHhrwX1xafFgUQi4-HC9Io0YCfujnR3ECY3_YS4Y=w1350-h650-no?authuser=0"  alt="books" className="main_image" width="" height=""  />
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



