import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="bg-white">
        <div className="bg-black mb-6">
          <div className="container mx-auto px-8">
            <div className="flex items-center py-2 px-10">
              <div className="w-3/4 flex items-center">
                <div>
                  <svg
                    className="h-8 w-8 fill-current text-white"
                    aria-labelledby="simpleicons-github-icon"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="simpleicons-github-icon">GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <div className="ml-4">
                  <input
                    className="p-2 rounded bg-gray-700 text-white text-xs w-72 border-none"
                    type="text"
                    name="q"
                    placeholder="Search Github"
                  />
                </div>
                <div className="ml-14">
                  <div className="text-sm flex items-center gap-12 ">
                    <div>
                      <a href="#" className="no-underline text-white pr-3">
                        Pull Requests
                      </a>
                    </div>
                    <div>
                      <a href="#" className="no-underline text-white pr-3">
                        Issues
                      </a>
                    </div>
                    <div>
                      <a href="#" className="no-underline text-white pr-3">
                        Marketplace
                      </a>
                    </div>
                    <div>
                      <a href="#" className="no-underline text-white pr-3">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 text-right flex items-center justify-end">
                <div className="flex items-center mr-3">
                  <div>
                    <svg
                      className="fill-current text-white h-4 w-4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mr-3">
                  <div>
                    <svg
                      className="fill-current text-white h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </div>
                  <div className="">
                    <svg
                      className="fill-current text-white h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <img
                      className="h-4 w-4 inline-block rounded"
                      src="https://avatars2.githubusercontent.com/u/1791228?s=460&v=4"
                    />
                  </div>
                  <div className="">
                    <svg
                      className="fill-current text-white h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="container mx-auto px-8">
            <div className="flex px-10">
              <div className="w-1/4">
                <div className="mb-4">
                  <img
                    className="rounded-lg"
                    src="https://avatars2.githubusercontent.com/u/1791228?s=460&v=4"
                  />
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-medium text-grey-darkest">
                    Andrew Huggins
                  </div>
                  <div className="text-xl text-grey-dark font-light">
                    ahuggins
                  </div>
                </div>
                <div className="pb-6 border-b">
                  <a href="#" className="no-underline text-sm text-[#0000f0]">
                    Add a bio
                  </a>
                </div>
                <div className="flex items-center text-left py-4 mb-4 border-b">
                  <div className="flex items-center mr-2">
                    <svg
                      className="fill-current text-grey-dark w-4 h-4"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="no-underline text-base text-[#0000f0]"
                    >
                      email@address.com
                    </a>
                  </div>
                </div>
                <div className="">
                  <div className="font-medium text-grey-darkest">
                    Organizations
                  </div>
                  <div className="flex items-center mt-2">
                    {/* <div className="mr-1">
                      <a href="https://github.com/cogitools">
                        <img
                          className="w-8 h-8 rounded"
                          src="https://avatars1.githubusercontent.com/u/1054277?s=70&v=4"
                        />
                      </a>
                    </div> */}
                    <div>
                      <a href="https://github.com/cogitools">
                        <img
                          className="w-8 h-8 rounded"
                          src="https://avatars1.githubusercontent.com/u/1054277?s=70&v=4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-3/4 ml-6 mt-2">
                <div className="flex items-center font-thin text-grey-dark text-sm border-b">
                  <div className="p-4 border-b-2 font-normal text-grey-darkest border-orange-400 -mb-2px">
                    Overview
                  </div>
                  <div className="p-4 flex items-center">
                    <div>Repositories</div>
                    <div className="rounded-lg bg-gray-300 text-xs ml-1 p-px">
                      41
                    </div>
                  </div>
                  <div className="p-4 flex items-center">
                    <div>Stars</div>
                    <div className="rounded-lg bg-gray-300 text-xs ml-1 p-px">
                      6
                    </div>
                  </div>
                  <div className="p-4 flex items-center">
                    <div>Followers</div>
                    <div className="rounded-lg bg-gray-300 text-xs ml-1 p-px">
                      15
                    </div>
                  </div>
                  <div className="p-4 flex items-center">
                    <div>Following</div>
                    <div className="rounded-lg bg-gray-300 text-xs ml-1 p-px">
                      23
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 pt-6 pb-2 font-normal text-black">
                    Pinned repositories
                  </div>
                  <div className="w-1/2 justify-end text-right text-grey-dark text-sm font-light pt-6 pb-2">
                    Customize your pinned repositories
                  </div>
                </div>
                <div className="flex">
                  {/* <div className="w-1/2 border px-4 py-4 mb-4 -mr-2 rounded text-sm">
                    <div className="flex">
                      <div className="mr-2">
                        <svg
                          className="h-3 w-3 fill-current text-grey-dark"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/2000/svg"
                        >
                          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                        </svg>
                      </div>
                      <div>
                        <a href="#" className="no-underline">
                          laravel/framework
                        </a>
                      </div>
                    </div>
                    <div className="flex text-sm mt-6">
                      <div className="mr-4 font-thin text-xs">PHP</div>
                      <div className="mr-4 font-thin text-xs">8.8k</div>
                      <div className="mr-4 font-thin text-xs">5k</div>
                    </div>
                  </div>
                  <div className="w-1/2 border px-4 py-4 mb-4 ml-4 rounded text-sm">
                    <div className="flex">
                      <div className="mr-2">
                        <svg
                          className="h-3 w-3 fill-current text-grey-dark"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/2000/svg"
                        >
                          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                        </svg>
                      </div>
                      <div>
                        <a href="#" className="no-underline">
                          laravel/framework
                        </a>
                      </div>
                    </div>
                    <div className="flex text-sm mt-6">
                      <div className="mr-4 font-thin text-xs">PHP</div>
                      <div className="mr-4 font-thin text-xs">8.8k</div>
                      <div className="mr-4 font-thin text-xs">5k</div>
                    </div>
                  </div> */}
                </div>
                <div className="flex">
                  <div className="w-1/2 border px-4 py-4 mb-4 -mr-2 rounded text-sm">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="h-3 w-3 fill-current text-grey-dark"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/2000/svg"
                        >
                          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                        </svg>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="no-underline text-base text-[#0000f0]"
                        >
                          laravel/framework
                        </a>
                      </div>
                    </div>
                    <div className="flex text-sm mt-6 ">
                      <div className="mr-4 font-thin text-xs">PHP</div>
                      <div className="mr-4 font-thin text-xs">8.8k</div>
                      <div className="mr-4 font-thin text-xs">5k</div>
                    </div>
                  </div>
                  <div className="w-1/2 border px-4 py-4 mb-4 ml-4 rounded text-sm">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="h-3 w-3 fill-current text-grey-dark"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/2000/svg"
                        >
                          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                        </svg>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="no-underline text-base text-[#0000f0]"
                        >
                          laravel/framework
                        </a>
                      </div>
                    </div>
                    <div className="flex text-sm mt-6">
                      <div className="mr-4 font-thin text-xs">PHP</div>
                      <div className="mr-4 font-thin text-xs">8.8k</div>
                      <div className="mr-4 font-thin text-xs">5k</div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 border px-4 py-4 mb-4 -mr-2 rounded text-sm">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="h-3 w-3 fill-current text-grey-dark"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/2000/svg"
                        >
                          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                        </svg>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="no-underline text-base text-[#0000f0]"
                        >
                          laravel/framework
                        </a>
                      </div>
                    </div>
                    <div className="flex text-sm mt-6">
                      <div className="mr-4 font-thin text-xs">PHP</div>
                      <div className="mr-4 font-thin text-xs">8.8k</div>
                      <div className="mr-4 font-thin text-xs">5k</div>
                    </div>
                  </div>
                  <div className="w-1/2 border px-4 py-4 mb-4 ml-4 rounded text-sm">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="h-3 w-3 fill-current text-grey-dark"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/2000/svg"
                        >
                          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                        </svg>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="no-underline text-base text-[#0000f0]"
                        >
                          laravel/framework
                        </a>
                      </div>
                    </div>
                    <div className="flex text-sm mt-6">
                      <div className="mr-4 font-thin text-xs">PHP</div>
                      <div className="mr-4 font-thin text-xs">8.8k</div>
                      <div className="mr-4 font-thin text-xs">5k</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pt-6 pb-2 font-normal text-grey-darkest">
                    1,438 contributions in the last year
                  </div>
                  <div className="w-1/2 pt-6 pb-2 justify-end text-right text-grey-dark text-sm font-light flex">
                    <div>Contribution settings</div>
                    <div className="">
                      <svg
                        className="fill-current text-grey-dark h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="border p-4 rounded">
                  <img src="https://user-images.githubusercontent.com/1791228/34055423-1e71e608-e19d-11e7-87f9-49d2cbb08c50.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* i can add admin footer here */}
      </div>

      {/* admin footer */}
      {/* <div className="mt-8">
          <div className="container mx-auto px-8">
            <div className="px-10">
              <div className="flex items-center justify-between border-t py-8">
                <div className="justify-start  text-xs w-2/5 flex">
                  <div className="mr-4">&copy; 2017 GitHub, Inc.</div>
                  <div className="mr-4">
                    <a href="#" className="no-underline">
                      Terms
                    </a>
                  </div>
                  <div className="mr-4">
                    <a href="#" className="no-underline">
                      Privacy
                    </a>
                  </div>
                  <div className="mr-4">
                    <a href="#" className="no-underline">
                      Security
                    </a>
                  </div>
                  <div className="mr-4">
                    <a href="#" className="no-underline">
                      Status
                    </a>
                  </div>
                  <div className="mr-4">
                    <a href="#" className="no-underline">
                      Help
                    </a>
                  </div>
                </div>
                <div className="justify-center w-1/5 text-center">
                  <svg
                    className="fill-current text-grey h-6 w-6"
                    aria-labelledby="simpleicons-github-icon"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="simpleicons-github-icon">GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <div className="justify-end text-xs w-2/5 flex text-right">
                  <div className="ml-4">
                    <a href="#" className="no-underline">
                      Contact GitHub
                    </a>
                  </div>
                  <div className="ml-4">
                    <a href="#" className="no-underline">
                      API
                    </a>
                  </div>
                  <div className="ml-4">
                    <a href="#" className="no-underline">
                      Training
                    </a>
                  </div>
                  <div className="ml-4">
                    <a href="#" className="no-underline">
                      Shop
                    </a>
                  </div>
                  <div className="ml-4">
                    <a href="#" className="no-underline">
                      Blog
                    </a>
                  </div>
                  <div className="ml-4">
                    <a href="#" className="no-underline">
                      About
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* </div> */}
    </>
  );
};

export default Dashboard;
