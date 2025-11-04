import React from 'react'

export default function CategoryFilter({categories,selectedCategory,setSelectedCategory}) {
  return (
    <>
      <select
      value={selectedCategory}
      onChange={(e)=>setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {
          categories.map((i)=>(
            <option key={i} value={i}>
              {i}
            </option>
          ))
        }
      </select>
    </>
  )
}
