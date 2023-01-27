const Subscribe: React.FC = () => {
  return (
    <section className="text-gray-600 body-font" id="sign-up">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Get Early Access to Merged
          </h1>
          <p className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black">
            Sign up for early access and be one of the first to experience the
            power of Merged and take advantage of our exclusive features and see
            for yourself how Merged can help you improve your link sharing
            efforts.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <form className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
              className="w-full text-primary-dark rounded border border-primary-dark focus:border-primary-normal focus:bg-transparent focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </form>
          <button
            type="submit"
            className="w-full md:max-w-max text-white bg-primary-normal border-0 py-2 px-8 focus:outline-none  rounded text-lg active:scale-90"
          >
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
