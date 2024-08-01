'use client'
import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../components/queries';

const GqlComponent = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    console.log('--data--',data)
 if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data?.allFilms?.films?.map(movie => (
          <li key={movie.title}>
            {movie.title} - {movie.director}- {movie.releaseDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GqlComponent