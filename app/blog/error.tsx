'use client'

import { useEffect } from 'react'

export default function Error(
  {
  error
}: {
  error: Error
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='text-2xl'>
      Something went wrong! {error.message}
    </div>
  )
}
