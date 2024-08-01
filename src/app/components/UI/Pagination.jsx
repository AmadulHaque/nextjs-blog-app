'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages = 1 }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const generatePageLinks = () => {
    const pageLinks = [];
    const range = 2; 

    if (totalPages <= 1) {
      return pageLinks;
    }

    // Add "Previous" button
    if (currentPage > 1) {
      pageLinks.push(
        <Link key="prev" href={createPageURL(currentPage - 1)} className="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" title="Previous Page">
          <span className="sr-only">Previous Page</span>
          <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" />
          </svg>
        </Link>
      );
    }

    // Add first page link if needed
    if (currentPage > range + 1) {
      pageLinks.push(
        <Link key="page-1" href={createPageURL(1)} className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" title="Page 1">
          1
        </Link>
      );
      if (currentPage > range + 2) {
        pageLinks.push(
          <span key="dots-prev" className="flex w-10 h-10 mx-1 justify-center items-center">
            ...
          </span>
        );
      }
    }

    // Add page links around the current page
    for (let i = Math.max(1, currentPage - range); i <= Math.min(totalPages, currentPage + range); i++) {
      if (i === currentPage) {
        pageLinks.push(
          <span key={`page-${i}`} className="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none" aria-current="page">
            {i}
          </span>
        );
      } else {
        pageLinks.push(
          <Link key={`page-${i}`} href={createPageURL(i)} className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" title={`Page ${i}`}>
            {i}
          </Link>
        );
      }
    }

    // Add last page link if needed
    if (currentPage < totalPages - range) {
      if (currentPage < totalPages - range - 1) {
        pageLinks.push(
          <span key="dots-next" className="flex w-10 h-10 mx-1 justify-center items-center">
            ...
          </span>
        );
      }
      pageLinks.push(
        <Link key={`page-${totalPages}`} href={createPageURL(totalPages)} className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" title={`Page ${totalPages}`}>
          {totalPages}
        </Link>
      );
    }

    // Add "Next" button
    if (currentPage < totalPages) {
      pageLinks.push(
        <Link key="next" href={createPageURL(currentPage + 1)} className="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" title="Next Page">
          <span className="sr-only">Next Page</span>
          <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686 4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z" />
          </svg>
        </Link>
      );
    }

    return pageLinks;
  };

  return (
    <div className="container mx-auto px-4">
      <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
        {generatePageLinks()}
      </nav>
    </div>
  );
}
