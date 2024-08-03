import React from 'react'
import PraoductList from './productlist';

const fetchCategory = async (category: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await res.json();
    return data
  }

const CategoryName =async ({ params }: {
  params: {
    categoryName: string
  }
}) => {
  const categoryData = await fetchCategory(params.categoryName);
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <button >Click here</button>
      <PraoductList categoryData={categoryData} />
    </div>
  )
}

export default CategoryName