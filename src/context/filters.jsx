/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

// Singletone -> Java Module

// 1. create context
export const FiltersContext = createContext()

// 2. create provider
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
