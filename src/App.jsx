import background from "./assets/Image/netflix-img/images/header-image.png";

const App = () => {
  return (
    <>
      <section
        className=" pt-16 pb-32 bg-slate-900 bg-cover bg-center relative  after:content-[' '] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black after:opacity-80 after:z-0"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container relative z-10">
          <div className="">
            <div className=" w-full px-10 mx-auto text-center mt-5">
              <h1 className="font-bold text-[2rem] text-white mb-3 z-10 leading-tight">
                Film, acara Tv tak terbatas dan banyak lagi
              </h1>
              <h4 className="font-medium text-base text-white mb-6">
                Harga mulai dari Rp 54.000. Batalkan kapan pun
              </h4>
              <p className="font-medium text-base text-white">
                Siap menonton? Masukkan email untuk membuat atau memulai lagi
                keanggotanmu.
              </p>
            </div>
            <div className="w-full px-10 mx-auto mt-5">
              <label
                htmlFor="email"
                className="w-full h-14 relative group mb-5 peer"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-full text-sm text-white bg-transparent ring-1 ring-white rounded-md px-5 pt-6 z-10 pb-2 outline-none peer invalid:ring-red-700"
                />
                <span className="text-sm text-slate-600 whitespace-nowrap absolute left-5 top-0 -translate-y-1/2  peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:transition-all duration-300 ease-in-out">
                  Alamat Email
                </span>
                <p className="font-bold text-xs text-red-700 invisible my-2 peer-invalid:visible">
                  Masukan aamat email yang valid
                </p>
              </label>

              <button
                href=""
                className="block w-1/3 h-auto text-xl font-medium text-center leading-loose text-white mx-auto bg-red-700 ring-1 ring-red-700 rounded-md after:content-[''] after:w-3 after:h-3 after:inline-block after:ml-1 after:border-l-2 after:border-t-2 after:border-white after:rotate-[135deg]"
              >
                Mulai
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
