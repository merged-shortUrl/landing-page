import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Subscribe: React.FC = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    window.alert("hello");

    emailjs
      .sendForm(
        "service_q5jbklu", //   "YOUR_SERVICE_ID",
        "template_s8wgfs1", //"YOUR_TEMPLATE_ID",
        form.current,
        "ysgj6LgIT7qysBntQ" // "YOUR_PUBLIC_KEY"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

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
          <form
            ref={form}
            // onSubmit={sendEmail}
            className="relative flex w-full"
          >
            <div className="flex-col flex-grow mx-2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full text-primary-dark rounded border border-primary-dark focus:border-primary-normal focus:bg-transparent focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex-col flex-grow mx-2">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your e-mail address"
                required
                className="w-full text-primary-dark rounded border border-primary-dark focus:border-primary-normal focus:bg-transparent focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </form>
          <button
            onClick={(e: any) => sendEmail(e)}
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
