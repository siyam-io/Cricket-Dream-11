export default function Sendmail() {
  return (
    <div className="w-[85%] mx-auto p-5 border-2 rounded-3xl relative top-24 z-50">
      <div
        className="text-center flex flex-col items-center border-2 py-20 md:px-60 space-y-4 rounded-2xl"
        style={{
          background:
            "linear-gradient(to bottom left, #FBE4B4, white, #DBF2F9)",
        }}
      >
        <h1 className="font-bold text-4xl">Subscribe to our Newsletter</h1>
        <p className="text-stone-400">
          Get the latest updates and news right in your inbox!
        </p>

        <fieldset className="">
          <label className="label"></label>
          <div className="join">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered join-item"
            />
          </div>
          <button
            style={{
              background: "linear-gradient(to right, #E7B659, #E9B2AF)",
            }}
            className="btn join-item mt-3 ml-3"
          >
            Subscribe
          </button>
        </fieldset>
      </div>
    </div>
  );
}
