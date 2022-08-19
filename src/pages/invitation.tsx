import Image from 'next/image'
import React, { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const flower = require('@/../../public/static/images/BG-01.png') as string
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('@/../../public/static/images/logo.png') as string
const Invitation: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  return (
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

        <div className="flex flex-col px-5 pt-20 overflow-hidden place-content-center choco ">
          <p className="text-sm text-center text-orange-200 mt-30 lg:text-2xl lg:pt-20">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="mt-5 text-xs text-center text-orange-200 lg:mt-14 lg:text-lg ">
            Dengan memohon rahmat dan ridho Allah SWT. kami bermaksud menyelenggarakan resepsi pernikahan putra-putri kami:
          </p>
        </div>

        <div className="relative flex flex-col pt-10 overflow-hidden choco">
          <div style={{ height: '100%', width: '100%' }}>
            <Image
              src={flower}
              className="absolute z-10 overflow-visible top-10 "
              layout="fill"
              alt=""
              objectFit="inherit"
            />
          </div>
          <div className="z-20 flex flex-col px-5 pb-5 -mt-20 overflow-hidden place-content-center">
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
        <div className="px-7 ">
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
          <div className="z-50 flex flex-col px-5 overflow-hidden place-content-center">
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
          <div className="z-50 grid text-center text-orange-200 p-7">
            <span className="mt-16 mb-4 text-2xl lg:text-4xl">Love Story</span>
            <span className="mb-4 text-xs lg:text-lg lg:pt-7">
              Marriage is the golden ring in a chain whose beginning is a glance and whose ending is eternity
            </span>
          </div>
          <Image src={flower} className="absolute z-10 overflow-visible top-10 " layout="fill" alt="" objectFit="inherit" />
          <div className="z-50 flex flex-col overflow-hidden px-7 lg:mx-96 ">
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
        <div tw="mx-7 justify-center">
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
                  <option className="text-slate-600">Mungkin</option>
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
          <div className="z-50 flex flex-col w-screen mb-5 overflow-hidden">
            <div className="grid p-3 px-12 text-center text-orange-200 place-items-center font-mulish">
              <span className="text-2xl lg:text-5xl lg:pt-20">Kirim Hadiah</span>
              <span className="mt-4 mb-4 text-xs lg:text-lg lg:m-10">
                Bagi yang ingin memberikan tanda kasih, dapat mengirimkan melalui fitur dibawah ini :
              </span>

              {/* Modals */}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                id="btn"
                className="flex px-3 text-[#251A19] lg:m-10 py-1 items-center w-fit content-center stroke-[#251A19] !mt-1 space-x-3 border-2 border-orange-200 bg-orange-200 rounded-full hover:bg-[#251A19] hover:text-orange-200 hover:font-normal font-semibold">
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

              {/* Modal PopUp */}
              {showModal ? (
                <div id="modal">
                  <div className="fixed inset-0 z-20 overflow-y-auto bg-gray-500 bg-opacity-40 ">
                    <div className="flex items-center justify-center min-h-screen px-4 text-center md:items-center">
                      <div className="fixed "></div>
                      <div className="inline-block w-full max-w-xl p-5 text-left bg-orange-200 rounded-lg shadow-xl">
                        <div className="flex flex-col ">
                          <div className="grid ml-auto mr-0 align-right place-items-stretch">
                            <button id="btn-close" type="button" onClick={() => setShowModal(false)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 stroke-1 stroke-slate-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
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
                        <div className="flex text-[#251A19] ml-6 mt-10 lg:ml-24">
                          <div className="flex-none w-14 h-14">
                            <svg
                              className="w-12 h-12"
                              viewBox="0 0 144 123"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink">
                              <rect width="144" height="123" fill="url(#pattern0)" />
                              <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use
                                    xlinkHref="#image0_543_226"
                                    transform="translate(-0.000488281) scale(0.000606652 0.000710227)"
                                  />
                                </pattern>
                                <image
                                  id="image0_543_226"
                                  width="1650"
                                  height="1408"
                                  xlinkHref="data:image/png;base64,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"
                                />
                              </defs>
                            </svg>
                          </div>
                          <div className="flex-initial w-64 pl-5 lg:pl-16">
                            <p className="text-xl">1234567890</p>
                            <p className="text-sm">a.n mempelai wanita</p>
                          </div>
                          <div className="flex-initial w-32 pt-2 pl-5">
                            <a>
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-7 h-7"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="flex text-[#251A19] ml-6 mt-10 mb-14 lg:ml-24">
                          <div className="flex-none w-14 h-14">
                            <svg
                              className="w-12 h-12"
                              viewBox="0 0 144 123"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink">
                              <rect width="144" height="123" fill="url(#pattern0)" />
                              <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use
                                    xlinkHref="#image0_543_226"
                                    transform="translate(-0.000488281) scale(0.000606652 0.000710227)"
                                  />
                                </pattern>
                                <image
                                  id="image0_543_226"
                                  width="1650"
                                  height="1408"
                                  xlinkHref="data:image/png;base64,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"
                                />
                              </defs>
                            </svg>
                          </div>
                          <div className="flex-initial w-64 pl-5 lg:pl-16">
                            <p className="text-xl">1234567890</p>
                            <p className="text-sm">a.n mempelai wanita</p>
                          </div>
                          <div className="flex-initial w-32 pt-2 pl-5">
                            <a>
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-7 h-7"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <span className="mt-10 text-xs lg:text-base lg:px-60">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu
                sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                sayang.”
              </span>
              <p className="mt-4 text-sm">Q.S. Ar Rum : 21</p>
            </div>
            <div className="grid text-center place-items-center font-mulish">
              <span className="text-2xl text-orange-200 mt-9 lg:text-5xl lg:mt-20">Gallery</span>
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
          <p className="mb-8 text-lg text-center text-slate-200">CREATED WITH LOVE BY</p>
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
}

export default Invitation
