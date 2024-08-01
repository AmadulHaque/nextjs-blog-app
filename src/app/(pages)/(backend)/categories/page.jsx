import Link from 'next/link'
import { CategorList } from '../../actions/category'
import Image from 'next/image';
import no_photo from '@/app/assets/images/no_photo.jpg';
import Pagination from '@/app/components/UI/Pagination';


export default async function page({searchParams }) {

  const currentPage = Number(searchParams.page) || 1;
  const searchQuery = searchParams.search || '';
  const statusFilter = searchParams.status || '';


  const {data} = await CategorList(currentPage,searchQuery,statusFilter);


    console.log(searchParams);

    const status_color = {
      1:'green',
      2:'yellow',
      3:'red',
    }

    return (
    <>
      <header className="flex items-center justify-between pb-4 border-b">
          <h1 className="text-2xl font-semibold text-gray-900">Category List </h1>
          <div className="flex items-center space-x-4">
            <Link href="/categories/create" className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
              Create new category
            </Link>
          </div>
      </header>

      <section className="mt-6">

        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
            
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 text-left font-medium">
                  <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
                </th>
                <th className="px-6 py-3 text-left font-medium">Name</th>
                <th className="px-6 py-3 text-left font-medium">Image</th>
                <th className="px-6 py-3 text-left font-medium">Author</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">

                {
                  data.categories?.map((item,index)=>(
                    
                    <tr className="bg-gray-100" key={index}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" value={item.id} />
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">{item.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            <Image
                              src={item.image ? item.image : no_photo.src}
                              width='100'
                              height='100'
                              className="rounded-full"
                              alt={item.slug}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">{item.user?.name}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full  bg-${status_color[item.status]}-100 text-${status_color[item.status]}-800`}>{item.status_label}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Show</a>
                      </td>

                    </tr>
                  ))
                }
                
              
            
            </tbody>
          </table>

          <Pagination totalPages={data.totalPages} />


          </div>
        </div>

      </section>


    </>
  )
}
