import React, { createContext, useState } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [nominees, setNominee] = useState({})
  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        nominees,
        setNominee
      }}>
      {children}
    </SearchContext.Provider>
  )
}
