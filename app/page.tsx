'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import MovieCard from '../components/Cards/MovieCard';
import TypeSwitch from '../components/Controls/TypeSwitch';

export default function Home() {
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState('popularity.desc');

  const url = 'https://api.themoviedb.org/3/discover/movie';
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDE1MGE3Y2RkNjNlNDdhMzc5YjA5NTQ1OTg1NTQzNiIsInN1YiI6IjY0ZWZhZmVjZGJiYjQyMDBhYjVlNDc2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4H_tOhlmgDONW_vk3b3VCTWq_qJuR-EK2Ka9MBaE98';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${url}?page=${pageNumber}&sort_by=${sortBy}`,
        options
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, [pageNumber, sortBy]);

  const elements = data?.results.map((result) => {
    return <p key={result.id}>{result.original_title}</p>;
  });

  return (
    <section className='bg-gray-50 w-full min-h-screen p-4 lg:p-8'>
      <div className='flex justify-between items-center'>
        <h1 className='uppercase font-bold'>Discover</h1>
        <TypeSwitch />
      </div>
      <ul className='grid gap-6 mt-8'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
    </section>
  );
}
