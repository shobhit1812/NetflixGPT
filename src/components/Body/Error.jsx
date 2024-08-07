import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center font-poppins">
          <h1 className="text-errorColor font-semibold text-4xl">
            {status + " : " + statusText}
          </h1>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Oops... Something went wrong!
          </h1>
          <p className="mt-6 leading-7 text-2xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <button className="p-3 m-2 font-medium bg-orange-400 rounded-lg hover:bg-orange-300 text-xl text-white">
                <span aria-hidden="true">&larr;</span> Go back home
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
