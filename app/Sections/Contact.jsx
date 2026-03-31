import Button from "../Components/button";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="line" />
        <h1 className="padding text-[1.35rem]">Newsletter</h1>
        <div className="line" />

        <div className="flex flex-col gap-4 p-6 bg-striped justify-center items-center padding h-fit">
          <form className="flex items-end max-sm:flex-col sm:items-center gap-3 w-full  mx-auto">
            <label htmlFor="emailLabel" className="sr-only">
              Email address
            </label>

            <div
              className="w-full border border-border rounded-2xl p-0.5 bg-white"
              style={{ height: "44px" }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                name="Cemail"
                id="emailLabel"
                autoComplete="email"
                required
                className="
                  h-full px-4 
                  placeholder:select-none rounded-xl w-full 
                  border border-border bg-white text-foreground 
                  focus:outline-none focus:ring-0 focus:border-ring 
                  disabled:opacity-50 disabled:cursor-not-allowed 
                  transition-all duration-300 
                  placeholder:text-gray-500 
                  placeholder:opacity-100
           
                "
              />
            </div>

            <Button text={"Subscribe"} fontsize={"15px"} />
          </form>
        </div>

        <div className="line" />
      </section>

      <div className="padding mx-2">
        <div className="py-9 flex flex-col items-center text-center relative overflow-hidden group gap-9">
          <svg
            stroke="currentColor"
            fill="#000"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="opacity-20 size-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
          </svg>

          <blockquote className="text-[20px] sm:text-[30px] mb-6 px-2 font-bold! italic text-title leading-relaxed">
            "Do so much work that it would be unreasonable
            for you to not be successful."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-black/20" />
            <span className="font-bold! tracking-widest uppercase opacity-75">
              Alex Hormozi
            </span>
            <div className="h-px w-8 bg-black/20" />
          </div>
        </div>
      </div>

      <div className="line" />
      <div className="grid-holder">
        <div className="grid-spot" />
      </div>
    </>
  );
}