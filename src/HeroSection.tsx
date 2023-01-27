import { useState } from "react";

import Logo from "./assets/Icons/logo-primary.png";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white ">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        {/* <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg> */}

        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          width="253"
          height="42"
          viewBox="0 0 253 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_833)">
            <g clip-path="url(#clip1_2_833)">
              <path
                d="M39.2525 17.0795L28.1658 28.1661C25.1032 31.2288 20.1418 31.2288 17.0792 28.1661L13.3836 24.4706L17.0792 20.775L20.7747 24.4706C21.7956 25.4889 23.4519 25.4915 24.4703 24.4706L35.5569 13.3839C36.5753 12.3644 36.5753 10.7067 35.5569 9.68708L31.8614 5.99153C30.843 4.97319 29.1842 4.97319 28.1658 5.99153L24.2074 9.94998C22.3723 8.87038 20.2872 8.40715 18.2225 8.54624L24.4703 2.29598C27.5329 -0.765326 32.4968 -0.765326 35.5569 2.29598L39.2525 5.99153C42.3151 9.05292 42.3151 14.0182 39.2525 17.0795ZM17.3395 31.6013L13.3836 35.5572C12.3627 36.5781 10.7064 36.5756 9.68806 35.5572L5.99251 31.8617C4.97164 30.8434 4.97164 29.187 5.99251 28.1661L17.0792 17.0795C18.0975 16.0612 19.7564 16.0612 20.7747 17.0795L24.4703 20.775L28.1658 17.0795L24.4703 13.3839C21.4077 10.3226 16.4462 10.3226 13.3836 13.3839L2.29696 24.4706C-0.765653 27.5332 -0.765653 32.4972 2.29696 35.5572L5.99251 39.2528C9.05259 42.3154 14.0165 42.3154 17.0792 39.2528L23.3269 33.0051C21.2622 33.1428 19.1822 32.6784 17.3395 31.6013Z"
                fill="#232323"
              />
            </g>
            <path
              d="M81.885 31.9933V17.534C81.885 13.7945 80.0153 11.5093 76.2343 11.5093C73.5335 11.5093 71.3314 12.9635 69.5448 14.7502C68.7969 12.7973 67.2595 11.5093 64.3926 11.5093C61.6919 11.5093 59.6559 12.9635 57.7862 14.7502L57.3291 11.9248H53.0911V31.9933H58.077V18.4065C59.5313 16.9107 60.9855 15.9136 62.5229 15.9136C64.351 15.9136 65.0158 17.1185 65.0158 18.8636V31.9933H70.0018V18.4065C71.4561 16.9107 72.9103 15.9136 74.4476 15.9136C76.2758 15.9136 76.8991 17.1185 76.8991 18.8636V31.9933H81.885ZM103.155 21.7305C103.155 16.0382 100.455 11.5093 94.4299 11.5093C89.1946 11.5093 85.289 15.4565 85.289 21.9798C85.289 29.2095 89.4855 32.4088 95.0947 32.4088C98.3356 32.4088 100.953 31.4532 103.114 29.9574L102.532 26.0517C100.33 27.589 98.2109 28.5447 95.6349 28.5447C92.5602 28.5447 90.4827 26.8411 90.2334 22.9355H103.114C103.114 22.6446 103.155 22.146 103.155 21.7305ZM98.294 19.8192H90.3165C90.6904 16.5368 92.3109 14.9579 94.3053 14.9579C96.7151 14.9579 97.9616 16.703 98.294 19.8192ZM118.733 16.4537L117.944 11.5093C114.828 11.6755 112.833 13.6283 111.504 15.9551L110.88 11.9248H106.642V31.9933H111.628V20.484C113.041 18.3234 115.617 16.6614 118.733 16.4537ZM125.669 30.9961C126.666 31.2039 127.289 31.3285 128.661 31.4947L131.361 31.8271C133.854 32.2011 134.727 32.8243 134.727 33.9046C134.727 35.4004 132.691 36.6053 129.118 36.6053C125.337 36.6053 123.55 35.525 123.55 34.0292C123.55 32.9905 124.215 32.0349 125.669 30.9961ZM132.234 18.4896C132.234 20.6502 130.904 22.2707 128.702 22.2707C126.542 22.2707 125.212 20.6918 125.212 18.6143C125.212 16.4121 126.5 14.7086 128.702 14.7086C130.821 14.7086 132.234 16.3291 132.234 18.4896ZM134.353 13.379C132.899 12.1741 130.946 11.5093 128.661 11.5093C124.173 11.5093 120.6 14.2516 120.6 18.6143C120.6 21.2735 122.013 23.351 124.381 24.4728C122.719 25.47 121.846 26.5503 121.846 27.6721C121.846 28.4616 122.22 29.2095 123.01 29.8327C120.517 31.2454 119.229 32.6997 119.229 34.5694C119.229 37.8934 123.342 39.5554 128.785 39.5554C134.602 39.5554 139.339 37.1455 139.339 32.8243C139.339 29.7496 136.763 28.4616 132.649 27.8799L130.073 27.6306C126.957 27.1735 126.334 27.0073 126.334 26.3425C126.334 26.0101 126.666 25.6362 127.165 25.2622C127.663 25.3453 128.204 25.3869 128.785 25.3869C133.106 25.3869 136.804 22.8108 136.804 18.4896C136.804 17.5755 136.638 16.6614 136.264 15.872L139.921 15.6227L139.256 11.6339L134.353 13.379ZM159.196 21.7305C159.196 16.0382 156.496 11.5093 150.471 11.5093C145.236 11.5093 141.33 15.4565 141.33 21.9798C141.33 29.2095 145.527 32.4088 151.136 32.4088C154.377 32.4088 156.994 31.4532 159.155 29.9574L158.573 26.0517C156.371 27.589 154.252 28.5447 151.676 28.5447C148.601 28.5447 146.524 26.8411 146.275 22.9355H159.155C159.155 22.6446 159.196 22.146 159.196 21.7305ZM154.335 19.8192H146.358C146.732 16.5368 148.352 14.9579 150.346 14.9579C152.756 14.9579 154.003 16.703 154.335 19.8192ZM180.093 31.9933V1.99438L175.107 2.78383V12.4649C173.902 12.0494 172.365 11.717 170.453 11.717C165.8 11.717 161.686 15.041 161.686 22.52C161.686 29.2926 165.052 32.4088 169.248 32.4088C172.032 32.4088 173.985 30.913 175.398 29.2095L175.813 31.9933H180.093ZM175.107 25.2207C173.777 26.8827 172.365 27.963 170.536 27.963C168.334 27.963 166.672 26.1348 166.672 22.2291C166.672 17.8248 168.584 15.7058 171.201 15.7058C172.905 15.7058 173.86 15.9967 175.107 16.5783V25.2207ZM200.948 31.9933L200.2 27.132H190.643V3.32398H185.117V31.9933H200.948ZM209.587 5.73386C209.587 4.03032 208.257 2.82538 206.637 2.82538C204.975 2.82538 203.645 4.03032 203.645 5.73386C203.645 7.39585 204.975 8.55925 206.637 8.55925C208.257 8.55925 209.587 7.39585 209.587 5.73386ZM209.088 31.9933V11.9248H204.102V31.9933H209.088ZM230.94 31.9933V17.534C230.94 13.7945 228.946 11.5093 225.206 11.5093C222.506 11.5093 220.387 12.9635 218.517 14.7502L218.06 11.9248H213.822V31.9933H218.808V18.4481C220.262 16.9107 221.799 15.9136 223.378 15.9136C225.206 15.9136 225.954 17.1185 225.954 18.8636V31.9933H230.94ZM253 31.5363L245.147 20.8995L252.543 11.9248H246.934L240.369 20.2347V1.99438L235.383 2.78383V31.9933H240.369V22.0629L247.723 32.2842L253 31.5363Z"
              fill="url(#paint0_linear_2_833)"
              style={{ mixBlendMode: "hard-light" }}
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2_833"
              x1="34.6256"
              y1="21.1744"
              x2="275.48"
              y2="21.1744"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#111827" />
              <stop offset="1" stop-color="#452A5A" />
            </linearGradient>
            <clipPath id="clip0_2_833">
              <rect width="253" height="41.5498" fill="white" />
            </clipPath>
            <clipPath id="clip1_2_833">
              <rect width="41.5494" height="41.5498" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 drop-shadow-lg" src={Logo} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div> */}
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#sign-up"
                className="inline-block rounded-lg px-4 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Sign up
              </a>
            </div>
          </nav>
          {/* <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              //   onFocus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog> */}
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{" "}
                    <a href="#" className="font-semibold text-primary-normal">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div> */}
              <div>
                <h1 className="text-primary-normal text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Transform Your Link Sharing Experience with Merged
                  {/* : The Ultimate URL
                  Shortening Solution{" "} */}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Create Short, Memorable, and Secure Links with Advanced
                  Tracking and Management Features
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#features"
                    className="inline-block rounded-lg bg-primary-gradient px-8 py-2.5 text-lg font-semibold leading-7 text-white shadow-sm  hover:bg-indigo-700 hover:ring-indigo-700 hover:shadow-lg hover:scale-110 active:scale-100"
                  >
                    Get started{" "}
                    <span className="text-indigo-200 pb-0.5" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
