import NextImage from "@/components/NextImage";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <section className="pageWrap relative w-full pt-[4rem] md:pt-[4.375rem]">
  <div className="container mx-auto sm:container md:container lg:container xl:max-w-[73.125rem]">
    <div className="errorPage relative flex w-full flex-col items-center justify-center text-center">
      <div className="errorPageInner">
        <NextImage
          className="mb-5 inline-block"
          src={"/images/notfound.jpg"}
          alt="Error Page"
          width={700}
          height={500}
        />
        <h3 className="font-Poppins text-[1.875rem] font-medium text-[#647c9f] md:text-[2.5rem]">
          oops page not found
        </h3>
        <form className="relative mx-auto mt-10 block w-full max-w-[33.75rem]">
          <Input
            className="font-NunitoSans h-[3.125rem] w-full rounded-[5px] border-[1px] border-solid border-[#c2ccda] px-5 text-[1rem] font-semibold md:h-[4.0625rem] md:rounded-[10px] md:px-[2.1875rem]"
            type="search"
            placeholder="Enter your keyword..."
          />
          <button
            type="submit"
            className="hover:bg-accent2 absolute bottom-0 right-0 top-0 flex w-[3.4375rem] items-center justify-center rounded-r-[5px] bg-accent text-center text-white hover:text-white md:rounded-r-[10px]"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
        <a
          className="hover:text-accent2 font-Poppins underline-offset-7 mt-[1.875rem] inline-flex items-center gap-2 text-[1rem] font-bold uppercase text-accent underline md:mt-[2.8125rem] md:text-[1.0625rem]"
          title="Back to Home"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 576 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

