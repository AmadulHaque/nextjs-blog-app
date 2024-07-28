import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* =========={ MAIN }========== */} 
      
        <div className="bg-white py-6">
           <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2"> {/* big grid 1 */} 
            <div className="flex flex-row flex-wrap"> {/* Start left cover */} 
              <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                 <div className="relative hover-img max-h-98 overflow-hidden">
                   <a href="#">
                     <Image className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img1.jpg" alt="Image description" layout="responsive" width={700} height={475} />
                   </a>
                   <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                     <a href="#">
                       <h2 className="text-3xl font-bold capitalize text-white mb-3"> Amazon Shoppers Are Ditching Designer Belts for This Best-Selling </h2>
                     </a>
                     <p className="text-gray-100 hidden sm:inline-block"> This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content.. </p>
                     <div className="pt-2">
                       <div className="text-gray-100">
                         <div className="inline-block h-3 border-l-2 border-red-600 mr-2" /> Europe
                       </div>
                     </div>
                   </div>
                 </div>
               </div> {/* Start box news */} <div className="flex-shrink max-w-full w-full lg:w-1/2">
                 <div className="box-one flex flex-row flex-wrap">
                   <article className="flex-shrink max-w-full w-full sm:w-1/2">
                     <div className="relative hover-img max-h-48 overflow-hidden">
                       <a href="#">
                         <Image className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img2.jpg" alt="Image description" layout="responsive" width={700} height={475} />
                       </a>
                       <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                         <a href="#">
                           <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1"> News magazines are becoming obsolete, replaced by gadgets </h2>
                         </a>
                         <div className="pt-1">
                           <div className="text-gray-100">
                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2" /> Techno
                           </div>
                         </div>
                       </div>
                     </div>
                   </article>
                   <article className="flex-shrink max-w-full w-full sm:w-1/2">
                     <div className="relative hover-img max-h-48 overflow-hidden">
                       <a href="#">
                         <Image className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img3.jpg" alt="Image description" layout="responsive" width={700} height={475} />
                       </a>
                       <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                         <a href="#">
                           <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1"> Minimalist designs are starting to be popular with the next generation </h2>
                         </a>
                         <div className="pt-1">
                           <div className="text-gray-100">
                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2" /> Architecture
                           </div>
                         </div>
                       </div>
                     </div>
                   </article>
                   <article className="flex-shrink max-w-full w-full sm:w-1/2">
                     <div className="relative hover-img max-h-48 overflow-hidden">
                       <a href="#">
                         <Image className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img4.jpg" alt="Image description" layout="responsive" width={700} height={475} />
                       </a>
                       <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                         <a href="#">
                           <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1"> Tips for decorating the interior of the living room </h2>
                         </a>
                         <div className="pt-1">
                           <div className="text-gray-100">
                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2" /> Interior
                           </div>
                         </div>
                       </div>
                     </div>
                   </article>
                   <article className="flex-shrink max-w-full w-full sm:w-1/2">
                     <div className="relative hover-img max-h-48 overflow-hidden">
                       <a href="#">
                         <Image className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img5.jpg" alt="Image description" layout="responsive" width={700} height={475} />
                       </a>
                       <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                         <a href="#">
                           <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1"> Online taxi users are increasing drastically ahead of the new year </h2>
                         </a>
                         <div className="pt-1">
                           <div className="text-gray-100">
                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2" /> Lifestyle
                           </div>
                         </div>
                       </div>
                     </div>
                   </article>
                 </div>
               </div>
             </div>
           </div>
        </div>


        <div className="bg-white">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              {/* Left */}
              <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" /> Europe
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  {["img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg"].map((img, index) => (
                    <div key={index} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                      <div className="flex flex-row sm:block hover-img">
                        <a href="">
                          <Image
                            className="max-w-full w-full mx-auto"
                            src={`https://tailnews.tailwindtemplate.net/src/img/dummy/${img}`}
                            alt="alt title"
                            width={500}
                            height={300}
                          />
                        </a>
                        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                          <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#"> 5 Tips to Save Money Booking Your Next Hotel Room </a>
                          </h3>
                          <p className="hidden md:block text-gray-600 leading-tight mb-1">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                          <a className="text-gray-500" href="#">
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" /> Europe
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right */}
              <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                <div className="w-full bg-gray-50 h-full">
                  <div className="text-sm py-6 sticky">
                    <div className="w-full text-center">
                      <a className="uppercase" href="#"> Advertisement </a>
                      <a href="#">
                        <Image
                          className="mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/ads/250.jpg"
                          alt="advertisement area"
                          width={250}
                          height={250}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* end main */} 
    </>
  );
}
