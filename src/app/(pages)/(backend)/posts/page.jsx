import Link from "next/link";
import { PostList } from "../../actions/post";
import Image from "next/image";
import no_photo from "@/app/assets/images/no_photo.jpg";
import Pagination from "@/app/components/UI/Pagination";
import FilterStatus from "@/app/components/Category/FilterStatus";
import PostTable from "@/app/components/Post/PostTable";

export default async function page({ searchParams }) {
  const currentPage = Number(searchParams.page) || 1;
  const searchQuery = searchParams.search || "";
  const statusFilter = searchParams.status || "";

  const { data } = await PostList(currentPage, searchQuery, statusFilter);

  return (
    <>
      <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-2xl font-semibold text-gray-900">Post List </h1>
        <div className="flex items-center space-x-4">
          <div className="flex justify-between ">
            <FilterStatus />
          </div>

          <Link
            href="/posts/create"
            className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
          >
            Create new Post
          </Link>
        </div>
      </header>

      <section className="mt-6">
        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
            <PostTable data={data?.posts} />

            <div className="bg-gray-100 py-4">
              <Pagination totalPages={data?.totalPages} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
