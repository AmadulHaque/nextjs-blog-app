import React from 'react'

export default function page() {
  return (
    <>
        <div className="flex items-center  ">
            <div className="w-full md:w-1/1 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
              <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                  <div>
                    <h5 className="text-white text-2xl font-bold leading-none">Total Post</h5>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg text-white font-light">00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/1 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
              <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
                  <div>
                    <h5 className="text-white text-2xl font-bold leading-none"> Published post </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg text-white font-light">00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/1 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
              <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
                  <div>
                    <h5 className="text-white text-2xl font-bold leading-none"> Total Category </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg text-white font-light">00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/1 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
              <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
                  <div>
                    <h5 className="text-white text-2xl font-bold leading-none"> Published Category </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg text-white font-light">00</div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </>
  )
}
