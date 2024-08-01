import { CategorShow } from '@/app/(pages)/actions/category';
import CategoryForm from '@/app/components/Category/CategoryForm'

export default async function page({params}) {

    const {data} = await CategorShow(params.id);


    
  return (
    <>
        <CategoryForm initialvalue={data} />
    </>
  )
}
