"use client";
import { useState, useCallback, useMemo } from "react";
import Select from "@/app/components/UI/Select";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash/debounce";

const items = [
  {
    title: "-- All --",
    value: "",
    image: null,
  },
  {
    title: "Published",
    value: 1,
    image: null,
  },
  {
    title: "Pending",
    value: 2,
    image: null,
  },
  {
    title: "InActive",
    value: 3,
    image: null,
  },
];

export default function FilterStatus() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const statusFilter = searchParams.get("status") || "";

  const handleStatusFilter = (event) => {
    router.push(`?search=${searchQuery}&page=1&status=${event.value}`);
  };

  // Memoize the debounced function, including 'router' in the dependency array
  const debouncedHandleSearch = useMemo(
    () =>
      debounce((query) => {
        router.push(`?search=${query}&page=1&status=${statusFilter}`);
      }, 1000),
    [router, statusFilter] // Added 'router' to the dependencies
  );

  const handleSearch = useCallback(
    (event) => {
      const query = event.target.value;
      debouncedHandleSearch(query);
    },
    [debouncedHandleSearch]
  );

  return (
    <>
      <div className="mr-2">
        <Select items={items} defaultValue={0} onchange={handleStatusFilter} />
      </div>
      <input
        type="text"
        defaultValue={searchQuery}
        onChange={handleSearch}
        placeholder="Search ..."
        className="pl-2 border border-gray-300 rounded"
      />
    </>
  );
}
