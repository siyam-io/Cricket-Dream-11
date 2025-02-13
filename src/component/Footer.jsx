export default function Footer() {
  return (
    <div className="w-[100%] mx-auto absolute">
      <footer className="footer bg-[#000000] pt-32 pb-12">
        <div className="w-[80%] mx-auto">
          <p className="w-[100%] flex justify-center">
            <img className="" src="logo.png" />
          </p>

          <div className="lg:flex justify-between space-y-3 lg:space-y-0 w-[100%] mt-12 border-b-2 pb-5 border-slate-600">
            <nav>
              <h6 className="footer-title text-white font-bold text-xl">
                About us
              </h6>
              <p className="text-slate-400">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </nav>
            <nav>
              <h6 className="footer-title text-white font-bold text-xl">
                Quick Links
              </h6>
              <ul className="text-slate-400 list-disc">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
            <nav></nav>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h6 className="footer-title text-white font-bold text-xl">
                Subscribe
              </h6>
              <p className="text-slate-400">
                Subscribe to our newsletter for the latest updates.
              </p>
              <fieldset className="form-control w-80">
                <label className="label"></label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered join-item"
                  />
                  <button
                    style={{
                      background: 'linear-gradient(to right, #E7B659, #E9B2AF)',
                    }}
                    className="btn join-item"
                  >
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <p className="text-slate-400 pt-3 mx-auto">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
