"use client";
import { useState } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import RabbitEmoji from "/assets/rabbit-emoji.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const bukaModal = (proyek) => {
    setSelectedProject(proyek);
    setShowModal(true);
  };

  const tutupModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-pink-100 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah lahir dari ketekunan. :D</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Davina Nur Oktavia!{" "}
            <img
              src={RabbitEmoji}
              alt="Kelinci lucu"
              className="inline-block w-10 h-10 ml-2 animate-bounce-small"
            />{" "}
          </h1>

          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki ketertarikan dalam bidang Programming, terutama pada
            bagian pembuatan Website. Dengan pengalaman belajar selama satu
            tahun, Proses ini mengasah kemampuan saya dalam merancang logika
            aplikasi dan menciptakan antarmuka pengguna.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/CV_Davina_Nur_Oktavia.pdf"
              download="CV_Davina_Nur_Oktavia.pdf"
              className="bg-pink-200 p-4 rounded-2xl hover:bg-pink-100"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-white p-4 rounded-2xl hover:bg-violet-50 border border-pink-400 text-pink-400 "
            >
              Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/*tentang*/}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-pink-100 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, Perkenalkan Nama saya Davina Nur Oktavia, Seorang Fullstack Web
            Developer. Saya terbiasa menangani proyek web dari awal hingga
            akhir. Peran saya sebagai Fullstack Developer memungkinkan saya
            untuk merancang arsitektur backend sekaligus membangun pengalaman
            pengguna di frontend.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10 <span className="text-black">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2 <span className="text-black">+</span>
                </h1>
                <p>Tahun Belajar </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut Tools yang biasa dipakai untuk pembuatan website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-pink-100 rounded-md hover:bg-pink-50 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-white p-1 group-hover:bg-pink-100"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold"> {tool.nama} </h4>
                  <p className="opacity-50"> {tool.ket} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut beberapa proyek yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-pink-100 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-300 bg-white rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  {proyek.link ? (
                    // Jika ada link, tampilkan tag <a>
                    <a
                      href={proyek.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-lg block border border-white hover:bg-pink-100"
                    >
                      Lihat Website
                    </a>
                  ) : (
                    // Jika TIDAK ada link, tampilkan <button> untuk buka modal
                    <button
                      onClick={() => bukaModal(proyek)}
                      className="bg-pink-500 text-white p-3 rounded-lg block w-full border border-pink-500 hover:bg-pink-600 transition-all cursor-pointer font-semibold"
                    >
                      Lihat Detail
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari Terhubung
        </p>
        <form
          action="https://formsubmit.co/dvnnro@gmail.com"
          method="POST"
          className="bg-pink-50 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-pink-50"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* kontak */}

      {/* Modal Pop-up */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col relative animate__animated animate__zoomIn animate__faster">
            <button
              onClick={tutupModal}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-red-500 hover:text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-colors"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-6">
              <h2 className="text-3xl font-bold mb-4 text-pink-600">
                {selectedProject.nama}
              </h2>
              <div className="flex flex-col gap-4 mb-6">
                {(selectedProject.detailGambar || [selectedProject.gambar]).map(
                  (img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="preview"
                      className="w-full rounded-xl shadow-md border border-gray-100"
                    />
                  )
                )}
              </div>
              <div className="bg-pink-50 p-5 rounded-xl border border-pink-100">
                <h4 className="font-bold mb-2 text-gray-800">
                  Tentang Proyek:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.desk}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
