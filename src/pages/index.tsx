import Link from 'next/link'

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen pt-16 my-auto mt-0 bg-black bg-opacity-50 bg-center bg-cover lg:justify-center place-content-center wedding bg-blend-darken">
        <div className="max-w-lg place-content-center">
          <h1
            className="mb-5 text-6xl text-center text-orange-200 lg:text-9xl lg:font-extrabold lg:-mx-20 pt-52"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            Wanita & Pria
          </h1>
          <p
            className="pt-16 text-xl text-center text-orange-200 lg:text-2xl"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            Kepada
          </p>
          <p
            className="py-2 text-3xl text-center text-orange-200 lg:text-5xl"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            Nama Tamu
          </p>
          <span className="flex flex-wrap pb-40 place-content-center">
            <Link href="/invitation">
              <a data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <button className="flex px-3 items-center w-fit content-center !mt-3 space-x-3 border-2 border-orange-200 rounded-lg hover:bg-[#251A19] lg:h-10 ">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 stroke-orange-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                    />
                  </svg>
                  <p className="text-xs text-orange-200 font-mulish lg:text-base">Buka Undangan</p>
                </button>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

export default LandingPage
