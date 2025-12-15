"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1764522415/Salinan_tipe_32_77_2_jjtyhl.avif"
                alt="Samara Village Bumiayu"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Samara Village Bumiayu</h2>
              <p className="about-description">
                Berada di kawasan strategis Bumiayu, Samara Village Bumiayu menghadirkan perumahan Bumiayu yang nyaman dan fungsional bagi keluarga muda. Terletak di Jl. Lapangan Asri, Dukuhturi, hunian ini dekat dengan stasiun, sekolah, dan pusat kota, memudahkan aktivitas sehari-hari tanpa harus jauh dari kenyamanan lingkungan yang tenang. 
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Bumiayu</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">200+</div>
              <div className="about-stat-label">Keluarga Samara Village Bumiayu</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">24</div>
              <div className="about-stat-label">Jam Keamanan One-Gate</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Samara Village Bumiayu</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1764522439/Salinan_tipe_32_standar_1_pzso4t.avif"
                  alt="Samara Village Bumiayu"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di kawasan strategis Bumiayu, Samara Village Bumiayu menghadirkan perumahan Bumiayu yang nyaman dan fungsional bagi keluarga muda. Terletak di Jl. Lapangan Asri, Dukuhturi, hunian ini dekat dengan stasiun, sekolah, dan pusat kota, memudahkan aktivitas sehari-hari tanpa harus jauh dari kenyamanan lingkungan yang tenang. Dirancang dengan layout minimalis dan lingkungan yang tertata, Samara Village Bumiayu menjadi pilihan tepat untuk memulai rumah pertama dengan pengalaman tinggal yang aman, jelas, dan menyenangkan.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>7 menit ke fasilitas kesehatan</li>
                  <li>5 menit ke fasilitas pendidikan</li>
                  <li>4 menit ke pusat perbelanjaan dan pasar tradisional</li>
                  <li>Lingkungan tenang, bebas polusi dan kebisingan</li>
                  <li>Dikelilingi area hijau</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti dan sistem one gate</li>
                  <li>Dekat jalan utama, memudahkan akses transportasi umum dan mobilitas</li>
                  <li>Ruang terbuka hijau dengan suasana asri dan udara segar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
