import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ButtonComponet from '@/app/components/button';

const fetchCategory = async (category: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await res.json();
  return data
}
async function CategoryName({ params }: {
  params: {
    categoryName: string
  }
}) {
  const categoryData = await fetchCategory(params.categoryName);
  console.log(categoryData)
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {categoryData.map((item: any) => {
          return (
            <div  key={item.id} className="rounded overflow-hidden shadow-lg">
              <div className="relative">
                <Link href={`/p/${item.id}`}>
                  <div className='relative pb-52'>
                    <Image
                      alt="Image Alt"
                      src={item.image}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 
                    right-0 left-0 bg-gray-900 opacity-25">
                  </div>
                </Link>
                  <div
                    className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm
                     transition duration-500 ease-in-out">
                    ${item.price}
                  </div>

                <a href="!#">
                  <div
                    className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white
                     rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3
                      hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    <span className="font-bold">{item.rating.rate}*/</span>
                    <small>{item.rating.count}</small>
                  </div>
                </a>
              </div>
              <div className="px-6 py-4">

                <a href="#"
                  className="font-semibold text-lg inline-block hover:text-indigo-600 
                  transition duration-500 ease-in-out">{item.title.substring(1, 50)}...</a>
                <p className="text-gray-500 text-sm">
                  {item.description.substring(1, 100)}...
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryName