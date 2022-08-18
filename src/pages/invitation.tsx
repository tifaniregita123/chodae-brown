import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const flower = require('@/../../public/static/images/BG-01.png') as string
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('@/../../public/static/images/logo.png') as string
const Invitation: React.FC = () => (
  <>
    <div className="choco">
      <div className="relative flex flex-col items-center pt-64 my-auto mt-0 bg-black bg-opacity-50 bg-center bg-cover md:flex wedding bg-blend-darken">
        <div className="justify-center max-w-lg sm:text-left place-content-center">
          <p className="pt-40 space-y-1 text-2xl text-center text-orange-200 text-9x">The Wedding Of</p>
          <h1 className="mb-5 text-6xl text-center text-orange-200 lg:text-9xl lg:-mx-20 ">Wanita & Pria</h1>
          <p className="pt-5 pb-64 space-y-1 text-2xl text-center text-orange-200 ">20 Juli 2022</p>
        </div>
        <div className="w-full pb-10 h-36 bg-gradient-to-b from-transparent to-[#251A19]"></div>
      </div>

      <div className="flex flex-col px-12 pt-20 overflow-hidden place-content-center choco ">
        <p className="text-sm text-center text-orange-200 mt-30 lg:text-2xl lg:pt-20">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </p>
        <p className="text-xs text-center text-orange-200 mt-7 lg:mt-14 lg:text-lg ">
          Dengan memohon rahmat dan ridho Allah SWT. kami bermaksud menyelenggarakan resepsi pernikahan putra-putri kami:
        </p>
      </div>

      <div className="relative flex flex-col p-10 overflow-hidden choco">
        <div style={{ height: '100%', width: '100%' }}>
          <Image src={flower} className="absolute z-10 overflow-visible top-10 " layout="fill" alt="" objectFit="inherit" />
        </div>
        <div className="z-20 flex flex-col px-12 pb-5 -mt-20 overflow-hidden place-content-center">
          {/* frame */}
          <div className="grid mt-20 place-items-center">
            <div className="bg-orange-200 rounded-t-full w-36 h-52 lg:w-80 lg:h-96"> </div>
          </div>

          <p className="mx-5 mb-3 text-xl text-center text-orange-200 border-b-2 border-orange-200 lg:mx-96 lg:pb-5 lg:text-4xl my-7">
            Mempelai Wanita, S.Pd
          </p>
          <p className="text-xs text-center text-orange-200 lg:mt-10 lg:text-lg">Putri dari</p>
          <p className="text-xs text-center text-orange-200 lg:text-lg">Bapak Mempelai & Ibu Mempelai</p>

          <a href="https://instagram.com/" className="grid mx-auto place-items-center">
            <svg
              className="w-10 h-10 text-orange-200 fill-current stroke-0 lg:w-20 lg:h-20 mt-7 stroke-orange-200 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                d="M12 5.422a24.53 24.53 0 0 1 3.2.089 4.123 4.123 0 0 1 1.511.267c.666.31 1.2.845 1.511 1.511.183.483.273.995.267 1.511 0 .8.089 1.067.089 3.2.04 1.068.01 2.136-.089 3.2a4.123 4.123 0 0 1-.267 1.511c-.31.666-.845 1.2-1.511 1.511a4.123 4.123 0 0 1-1.511.267c-.8 0-1.067.089-3.2.089-1.068.04-2.136.01-3.2-.089a4.123 4.123 0 0 1-1.511-.267 3.122 3.122 0 0 1-1.511-1.511 4.123 4.123 0 0 1-.267-1.511c0-.8-.089-1.067-.089-3.2a24.53 24.53 0 0 1 .089-3.2 4.123 4.123 0 0 1 .267-1.511c.155-.33.365-.63.622-.889a1.5 1.5 0 0 1 .889-.622A4.123 4.123 0 0 1 8.8 5.511a24.53 24.53 0 0 1 3.2-.089zM12 4a26.266 26.266 0 0 0-3.289.089 5.488 5.488 0 0 0-1.955.355 3.48 3.48 0 0 0-1.422.889 3.48 3.48 0 0 0-.89 1.423 4.05 4.05 0 0 0-.355 1.955A26.266 26.266 0 0 0 4 12c-.04 1.097-.01 2.196.089 3.289-.001.668.12 1.331.356 1.956a3.48 3.48 0 0 0 .889 1.422 3.48 3.48 0 0 0 1.422.889 5.487 5.487 0 0 0 1.956.356c1.093.098 2.191.127 3.288.088 1.097.04 2.196.01 3.289-.089a5.488 5.488 0 0 0 1.956-.356 3.73 3.73 0 0 0 2.311-2.311 5.488 5.488 0 0 0 .356-1.956C19.911 14.4 20 14.133 20 12a26.26 26.26 0 0 0-.089-3.289 5.487 5.487 0 0 0-.356-1.956 3.48 3.48 0 0 0-.889-1.422 3.48 3.48 0 0 0-1.422-.889 5.488 5.488 0 0 0-1.955-.355A26.266 26.266 0 0 0 12 4zm0 3.911A4.023 4.023 0 0 0 7.911 12 4.089 4.089 0 1 0 12 7.911zm0 6.756A2.62 2.62 0 0 1 9.333 12 2.62 2.62 0 0 1 12 9.333 2.62 2.62 0 0 1 14.667 12 2.62 2.62 0 0 1 12 14.667zm4.267-7.911a.978.978 0 1 0 .978.978.986.986 0 0 0-.978-.978"
              />
            </svg>
          </a>

          <h1 className="pt-6 mx-5 text-4xl text-center text-orange-200 lg:text-6xl lg:m-7">&</h1>
          {/* frame */}
          <div className="relative grid mt-5 place-items-center">
            <div className="text-orange-200 bg-orange-200 rounded-t-full w-36 h-52 lg:w-80 lg:h-96"> </div>
          </div>

          <p className="mx-5 my-10 mb-3 text-xl text-center text-orange-200 border-b-2 border-orange-200 lg:mx-96 lg:pb-5 lg:text-4xl">
            Mempelai Pria, S.Pd
          </p>
          <p className="text-xs text-center text-orange-200 lg:mt-10 lg:text-lg">Putra dari</p>
          <p className="text-xs text-center text-orange-200 lg:text-lg">Bapak Mempelai & Ibu Mempelai</p>

          <a href="https://instagram.com/" className="grid mx-auto place-items-center">
            <svg
              className="w-10 h-10 text-orange-200 fill-current stroke-0 mt-7 stroke-orange-200 lg:w-20 lg:h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                d="M12 5.422a24.53 24.53 0 0 1 3.2.089 4.123 4.123 0 0 1 1.511.267c.666.31 1.2.845 1.511 1.511.183.483.273.995.267 1.511 0 .8.089 1.067.089 3.2.04 1.068.01 2.136-.089 3.2a4.123 4.123 0 0 1-.267 1.511c-.31.666-.845 1.2-1.511 1.511a4.123 4.123 0 0 1-1.511.267c-.8 0-1.067.089-3.2.089-1.068.04-2.136.01-3.2-.089a4.123 4.123 0 0 1-1.511-.267 3.122 3.122 0 0 1-1.511-1.511 4.123 4.123 0 0 1-.267-1.511c0-.8-.089-1.067-.089-3.2a24.53 24.53 0 0 1 .089-3.2 4.123 4.123 0 0 1 .267-1.511c.155-.33.365-.63.622-.889a1.5 1.5 0 0 1 .889-.622A4.123 4.123 0 0 1 8.8 5.511a24.53 24.53 0 0 1 3.2-.089zM12 4a26.266 26.266 0 0 0-3.289.089 5.488 5.488 0 0 0-1.955.355 3.48 3.48 0 0 0-1.422.889 3.48 3.48 0 0 0-.89 1.423 4.05 4.05 0 0 0-.355 1.955A26.266 26.266 0 0 0 4 12c-.04 1.097-.01 2.196.089 3.289-.001.668.12 1.331.356 1.956a3.48 3.48 0 0 0 .889 1.422 3.48 3.48 0 0 0 1.422.889 5.487 5.487 0 0 0 1.956.356c1.093.098 2.191.127 3.288.088 1.097.04 2.196.01 3.289-.089a5.488 5.488 0 0 0 1.956-.356 3.73 3.73 0 0 0 2.311-2.311 5.488 5.488 0 0 0 .356-1.956C19.911 14.4 20 14.133 20 12a26.26 26.26 0 0 0-.089-3.289 5.487 5.487 0 0 0-.356-1.956 3.48 3.48 0 0 0-.889-1.422 3.48 3.48 0 0 0-1.422-.889 5.488 5.488 0 0 0-1.955-.355A26.266 26.266 0 0 0 12 4zm0 3.911A4.023 4.023 0 0 0 7.911 12 4.089 4.089 0 1 0 12 7.911zm0 6.756A2.62 2.62 0 0 1 9.333 12 2.62 2.62 0 0 1 12 9.333 2.62 2.62 0 0 1 14.667 12 2.62 2.62 0 0 1 12 14.667zm4.267-7.911a.978.978 0 1 0 .978.978.986.986 0 0 0-.978-.978"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="px-12 ">
        <p className="text-xs text-center text-orange-200 border-orange-200 lg:text-lg lg:mx-72 border-y-0">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami,apabila Bapak/Ibu/Saudara/i berkenan hadir untuk doa restu
          kepada mempelai :
        </p>
        <p className="py-4 mt-4 text-xl text-center text-orange-200 lg:text-4xl lg:m-10">Save The Date</p>

        {/* Hitung mundur */}
        <div className="grid grid-flow-col grid-cols-4 gap-4 py-4 mt-1 text-center text-orange-200 lg:px-96">
          <div>
            <span className="text-2xl lg:text-4xl ">15</span>
            <div className="grid grid-flow-col gap-4 ">
              <span className="text-base lg:text-2xl lg:m-7">D</span>
            </div>
          </div>
          <div>
            <span className="text-2xl lg:text-4xl ">23</span>
            <div className="grid grid-flow-col gap-4 ">
              <span className="text-base lg:text-2xl lg:m-7">H</span>
            </div>
          </div>
          <div>
            <span className="text-2xl lg:text-4xl ">52</span>
            <div className="grid grid-flow-col gap-4 ">
              <span className="text-base lg:text-2xl lg:m-7">M</span>
            </div>
          </div>
          <div>
            <span className="text-2xl lg:text-4xl">30</span>
            <div className="grid grid-flow-colgap-4 ">
              <span className="text-base lg:text-2xl lg:m-7">S</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col overflow-hidden ">
        <Image src={flower} className="absolute z-10 overflow-visible top-10 " layout="fill" alt="" objectFit="inherit" />
        <div className="z-50 flex flex-col px-12 overflow-hidden place-content-center">
          {/* Akad */}
          <div className="grid text-center text-orange-200 border-2 border-orange-200 rounded-md lg:mx-60 lg:p-40 place-items-center p-7 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 stroke-orange-200 icon icon-tabler lg:w-12 lg:h-12 icon-tabler-diamond"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 5h12l3 5l-8.5 9.5a0.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
              <path d="M10 12l-2 -2.2l.6 -1" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-orange-200 w-8 h-8 icon icon-tabler icon-tabler-circle lg:w-24 lg:h-24   lg:-translate-y-[20px] -translate-y-[9px]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <span className="m-4 text-2xl lg:text-5xl lg:m-9">Akad</span>
            <span className="mb-4 text-base lg:text-xl">Wednesday, 20 July 2022</span>
            <span className="mb-4 text-sm lg:text-xl">08.00 - 10.00 WIB</span>
            <span className="pt-5 mb-4 text-xs border-t-0 border-orange-200 lg:text-lg lg:m-9">
              Jl. R.A. Kartini No.28, Regol Wetan, Kec. Sumedang Sel.,Kabupaten Sumedang, Jawa Barat 45311
            </span>
            <a href="https://g.page/sawala-space?share">
              <button className="flex px-3 items-center w-fit content-center stroke-[#251A19] !mt-3 space-x-3 border-2 border-orange-200 rounded-lg hover:bg-[#251A19] hover:text-orange-200 hover:font-normal font-semibold bg-yellow-200 text-[#251A19]">
                <svg
                  className="w-4 h-4 lg:w-7 lg:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                <span className="text-xs lg:text-base">Map Location</span>
              </button>
            </a>
          </div>

          {/* Resepsi */}
          <div className="grid mt-40 text-center text-orange-200 -translate-y-32 border-2 border-orange-200 rounded-md lg:mt-54 lg:rounded-lg lg:p-40 lg:mx-60 place-items-center p-7 ">
            <svg
              className="w-9 h-9 lg:w-24 lg:h-24"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="m-4 text-2xl lg:text-5xl lg:m-9">Resepsi</span>
            <span className="mb-4 text-base lg:text-xl">Wednesday, 20 July 2022</span>
            <span className="mb-4 text-sm lg:text-xl">08.00 - 10.00 WIB</span>
            <span className="pt-5 mb-4 text-xs border-t-0 border-orange-200 lg:text-lg lg:mt-9">
              Jl. R.A. Kartini No.28, Regol Wetan, Kec. Sumedang Sel.,Kabupaten Sumedang, Jawa Barat 45311
            </span>
            <a href="https://g.page/sawala-space?share">
              <button className="flex px-3 items-center w-fit content-center stroke-[#251A19] !mt-3 space-x-3 border-2 border-orange-200 rounded-lg hover:bg-[#251A19] hover:text-orange-200 hover:font-normal font-semibold bg-yellow-200 text-[#251A19]">
                <svg
                  className="w-4 h-4 lg:w-7 lg:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                <span className="text-xs lg:text-base">Map Location</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid -mt-32 text-center text-orange-200 place-items-center p-7 ">
        <span className="m-4 text-2xl lg:text-4xl lg:pt-20">Live Streaming</span>
        <span className="mb-4 text-xs lg:text-lg lg:p-10">
          Kami juga berencana untuk mempublikasikan pernikahan kami secara virtual live instagram/youtube yang bisa anda
          ikuti melalui link berikut :
        </span>
        <a href="https://g.page/sawala-space?share">
          <button className="flex px-3 items-center w-fit content-center stroke-choco !mt-1 space-x-3 border-2 border-orange-200 rounded-lg lg:px-3 hover:bg-orange-200 hover:text-[#251A19] lg:hover:font-bold hover:font-semibold text-orange-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 lg:w-5 lg:h-5 icon icon-tabler icon-tabler-player-play"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 4v16l13 -8z" />
            </svg>
            <span className="text-xs lg:text-base">Live Streaming</span>
          </button>
        </a>
      </div>
      <div className="relative flex flex-col overflow-hidden">
        <div className="z-50 grid text-center text-orange-200 ">
          <span className="mt-16 mb-4 text-2xl lg:text-4xl">Love Story</span>
          <span className="mb-4 text-xs lg:text-lg lg:pt-7">
            Marriage is the golden ring in a chain whose beginning is a glance and whose ending is eternity
          </span>
        </div>
        <Image src={flower} className="absolute z-10 overflow-visible top-10 " layout="fill" alt="" objectFit="inherit" />
        <div className="z-50 flex flex-col px-12 overflow-hidden lg:mx-96 ">
          <div className="grid text-orange-200 rounded-md place-items-center bg-zinc-700 p-7 lg:my-5 l lg:p-20">
            <span className="mt-8 text-xs text-center lg:text-lg lg:m-20">Gambar</span>
            <div className="grid object-left">
              <span className="mt-8 text-base text-left lg:text-xl">First Meet</span>
              <span className="text-xs lg:text-lg">
                Marriage is the golden ring in a chain whose beginning is a glance and whose ending is eternity
              </span>
            </div>
          </div>
          <div className="grid mt-4 text-orange-200 rounded-md place-items-center bg-zinc-700 p-7 lg:my-5 lg:p-20">
            <span className="mt-8 text-xs text-center lg:text-lg lg:m-20">Gambar</span>
            <div className="grid object-left">
              <span className="mt-8 text-base text-left lg:text-xl">Relationship</span>
              <span className="text-xs lg:text-lg">
                Marriage is the golden ring in a chain whose beginning is a glance and whose ending is eternity
              </span>
            </div>
          </div>
          <div className="grid mt-4 text-orange-200 rounded-md place-items-center bg-zinc-700 p-7 lg:my-5 lg:p-20">
            <span className="mt-8 text-xs text-center lg:text-lg lg:m-20">Gambar</span>
            <div className="grid object-left">
              <span className="mt-8 text-base text-left lg:text-xl">Engangement</span>
              <span className="text-xs lg:text-lg">
                Marriage is the golden ring in a chain whose beginning is a glance and whose ending is eternity
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Card Ucapan */}
      <div className="grid mt-40 text-center text-orange-200 -translate-y-52 place-items-center p-7">
        <span className="mt-16 mb-4 text-2xl lg:text-5xl lg:mt-32">Ucapan & Do'a</span>
        <span className="mb-4 text-xs lg:text-lg lg:py-10">Kirimkan do’a & ucapan kepada kedua mempelai</span>
      </div>
      <div tw="mx-12 justify-center">
        <div className="flex flex-col max-w-lg p-5 mx-auto rounded-md shadow-md lg:p-8 boder border-slate-100 bg-slate-200 -translate-y-60">
          <form action="" className="">
            <input
              type="text"
              className="block w-full px-3 py-2 my-5 text-sm border rounded shadow lg:text-lg placeholder:text-slate-400 fokus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-500"
              maxLength={32}
              placeholder="Nama"
            />
            <textarea
              id="ucapan"
              className="block w-full px-3 py-2 my-5 text-sm border rounded shadow lg:text-lg placeholder:text-slate-400 fokus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-500"
              maxLength={180}
              placeholder="Ucapan & Do'a"></textarea>
            <div className="relative">
              <select
                className="block w-full px-3 py-2 my-5 text-sm border shadow lg:text-lg fokus:outline-none focus:ring-1 text-slate-400 focus:border-sky-500"
                id="grid-state">
                <option className="text-slate-600" disabled selected>
                  Konfirmasi Kehadiran
                </option>
                <option className="text-slate-600">Hadir</option>
                <option className="text-slate-600">Tidak Hadir</option>
              </select>
            </div>
            <div className="relative grid place-content-center">
              <a href="#" className="">
                <button className="flex px-3 items-center w-fit content-center stroke-choco !mt-1 space-x-3 border-2 border-slate-500 rounded-lg hover:bg-slate-500 hover:text-white  text-slate-700">
                  <span className="text-xs lg:text-base">Kirim ucapan</span>
                </button>
              </a>
            </div>
          </form>
          <div className="h-24 overflow-y-auto lg:h-32 mt-7">
            <div className="grid object-right grid-flow-col grid-rows-2 gap-1">
              <div className="row-span-3 ">
                <svg
                  className="w-6 h-6 lg:w-10 lg:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="col-span-2 pl-3 text-sm -translate-x-10 lg:pl-0 lg:text-lg">
                <span>User 1</span>
              </div>
              <div className="row-span-2 pl-3 text-xs -translate-x-10 lg:pl-0 lg:text-base">
                <p>Semoga Samawa yaa</p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-1 origin-left snap-y">
              <div className="row-span-3 ">
                <svg
                  className="w-6 h-6 lg:w-10 lg:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="col-span-2 pl-3 text-sm -translate-x-10 lg:pl-0 lg:text-lg">
                <span>User 2</span>
              </div>
              <div className="row-span-2 pl-3 text-xs -translate-x-10 lg:pl-0 lg:text-base">
                <p>Semoga Samawa yaa</p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-1 snap-y">
              <div className="row-span-3 ">
                <svg
                  className="w-6 h-6 lg:w-10 lg:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="col-span-2 pl-3 text-sm -translate-x-10 lg:pl-0 lg:text-lg">
                <span>User 3</span>
              </div>
              <div className="row-span-2 pl-3 text-xs -translate-x-10 lg:pl-0 lg:text-base">
                <p>Semoga Samawa yaa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col overflow-hidden font-mulish -top-56 ">
        <Image src={flower} className="absolute z-10 overflow-visible top-10 " layout="fill" alt="" objectFit="inherit" />
        <div className="z-50 flex flex-col w-screen overflow-hidden ">
          <div className="grid px-12 text-center text-orange-200 place-items-center p-7 font-mulish">
            <span className="text-2xl lg:text-5xl lg:pt-20">Kirim Hadiah</span>
            <span className="mt-4 mb-4 text-xs lg:text-lg lg:m-10">
              Bagi yang ingin memberikan tanda kasih, dapat mengirimkan melalui fitur dibawah ini :
            </span>

            {/* Modals */}
            {/* <div x-data="{ modelOpen: false }"> */}
            <button className="flex px-3 text-[#251A19] lg:m-10 py-1 items-center w-fit content-center stroke-[#251A19] !mt-1 space-x-3 border-2 border-orange-200 bg-orange-200 rounded-full hover:bg-[#251A19] hover:text-orange-200 hover:font-normal font-semibold">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path>
              </svg>
              <span className="text-xs lg:text-base">Kirim Hadiah Terbaikmu</span>
            </button>

            {/* <div>
              <div className="fixed inset-0 z-20 overflow-y-auto bg-gray-500 bg-opacity-40 ">
                <div className="flex items-center justify-center min-h-screen px-4 text-center md:items-center">
                  <div className="fixed inset-0 "></div>
                  <div className="inline-block w-full max-w-xl p-5 text-left bg-orange-200 rounded-lg shadow-xl">
                    <div className="flex flex-col ">
                      <div className="grid ml-auto mr-0 align-right place-items-stretch">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 stroke-slate-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-[#251A19] lg:text-base text-center font-bold">
                        Silahkan transfer hadiah melalui
                      </p>
                      <p className="text-xs font-bold text-[#251A19] lg:text-base text-center lg:text-normal">
                        nomor rekening maupun dompet digital berikut
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <span className="mt-10 text-xs lg:text-base">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu
              sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
              sayang.”
            </span>
            <p className="mt-4 text-sm">Q.S. Ar Rum : 21</p>
          </div>
          <div className="grid text-center place-items-center font-mulish">
            <span className="text-2xl text-orange-200 lg:text-5xl lg:mt-20">Gallery</span>
            <div className="grid grid-flow-col grid-cols-2 gap-4 py-4 mt-1 lg:gap-16 ">
              <div>
                <div className="border-orange-200 border-[20px] rounded-xl lg:mb-10 w-44 h-32 my-4 lg:w-96 lg:h-72"> </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4 lg:my-5 border-orange-200 border-[20px] rounded-xl w-44 h-32 my-4 lg:w-96 lg:h-72">
                  {' '}
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4 lg:my-10  border-orange-200 border-[20px] rounded-xl w-44 h-32 my-4 lg:w-96 lg:h-72">
                  {' '}
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4 border-orange-200 border-[20px] rounded-xl w-44 h-32 my-4 lg:w-96 lg:h-72">
                  {' '}
                </div>
              </div>
              <div>
                <div className="border-orange-200 border-[20px] rounded-xl lg:mb-10 w-44 h-32 my-4 lg:w-96 lg:h-72"> </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4 border-orange-200 border-[20px] rounded-xl w-44 h-32 my-4 lg:w-96 lg:h-72">
                  {' '}
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4 lg:my-10 border-orange-200 border-[20px] rounded-xl w-44 h-32 my-4 lg:w-96 lg:h-72">
                  {' '}
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4 border-orange-200 border-[20px] rounded-xl w-44 h-32 my-4 lg:w-96 lg:h-72">
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center mt-0 bg-black bg-opacity-50 bg-top bg-no-repeat bg-cover wedding2 bg-blend-darken -top-56">
        <div className="z-20 justify-center place-content-center lg:w-auto lg:h-screen lg:pt-72">
          <p className="mt-16 space-y-1 text-2xl text-center text-orange-200 lg:text-4xl">The Wedding Of</p>
          <h1 className="pt-5 mx-5 mb-5 text-6xl text-center text-orange-200 lg:text-9xl">Wanita & Pria</h1>
          <p className="pt-5 mb-16 space-y-1 text-2xl text-center text-orange-200 lg:text-4xl">20 Juli 2022</p>
        </div>
      </div>

      <div className="relative grid justify-center place-content-center -top-36">
        <p className="mb-8 text-lg text-center text-slate-200">CREATE WITH LOVE BY</p>
        <span className="h-auto w-44">
          <Image src={logo} className="absolute w-auto mx-auto overflow-visible p-auto" alt="" />
        </span>
      </div>
      <div className="grid -mt-10 -translate-y-20 place-content-center">
        <div className="flex">
          <svg
            className="fill-current w-7 h-7 lg:w-10 lg:h-10 text-slate-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
          <svg
            className="w-10 h-10 lg:w-12 lg:h-12 fill-current stroke-0 mt-7 text-slate-200 -translate-y-[34px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              d="M12 5.422a24.53 24.53 0 0 1 3.2.089 4.123 4.123 0 0 1 1.511.267c.666.31 1.2.845 1.511 1.511.183.483.273.995.267 1.511 0 .8.089 1.067.089 3.2.04 1.068.01 2.136-.089 3.2a4.123 4.123 0 0 1-.267 1.511c-.31.666-.845 1.2-1.511 1.511a4.123 4.123 0 0 1-1.511.267c-.8 0-1.067.089-3.2.089-1.068.04-2.136.01-3.2-.089a4.123 4.123 0 0 1-1.511-.267 3.122 3.122 0 0 1-1.511-1.511 4.123 4.123 0 0 1-.267-1.511c0-.8-.089-1.067-.089-3.2a24.53 24.53 0 0 1 .089-3.2 4.123 4.123 0 0 1 .267-1.511c.155-.33.365-.63.622-.889a1.5 1.5 0 0 1 .889-.622A4.123 4.123 0 0 1 8.8 5.511a24.53 24.53 0 0 1 3.2-.089zM12 4a26.266 26.266 0 0 0-3.289.089 5.488 5.488 0 0 0-1.955.355 3.48 3.48 0 0 0-1.422.889 3.48 3.48 0 0 0-.89 1.423 4.05 4.05 0 0 0-.355 1.955A26.266 26.266 0 0 0 4 12c-.04 1.097-.01 2.196.089 3.289-.001.668.12 1.331.356 1.956a3.48 3.48 0 0 0 .889 1.422 3.48 3.48 0 0 0 1.422.889 5.487 5.487 0 0 0 1.956.356c1.093.098 2.191.127 3.288.088 1.097.04 2.196.01 3.289-.089a5.488 5.488 0 0 0 1.956-.356 3.73 3.73 0 0 0 2.311-2.311 5.488 5.488 0 0 0 .356-1.956C19.911 14.4 20 14.133 20 12a26.26 26.26 0 0 0-.089-3.289 5.487 5.487 0 0 0-.356-1.956 3.48 3.48 0 0 0-.889-1.422 3.48 3.48 0 0 0-1.422-.889 5.488 5.488 0 0 0-1.955-.355A26.266 26.266 0 0 0 12 4zm0 3.911A4.023 4.023 0 0 0 7.911 12 4.089 4.089 0 1 0 12 7.911zm0 6.756A2.62 2.62 0 0 1 9.333 12 2.62 2.62 0 0 1 12 9.333 2.62 2.62 0 0 1 14.667 12 2.62 2.62 0 0 1 12 14.667zm4.267-7.911a.978.978 0 1 0 .978.978.986.986 0 0 0-.978-.978"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 lg:w-10 lg:h-10 text-slate-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
      </div>
    </div>
  </>
)

export default Invitation
