import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "4 menit dari Terminal Baru Bumiayu",
        "5 menit dari Stasiun Bumiayu",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "5 menit dari SMA N 1 Bumiayu",
        "5 menit dari SMK Semesta Bumiayu",
        "5 menit dari SMK Muhammadiyah Bumiayu",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "7 menit dari RSUD Bumiayu",
        "7 menit dari RS Harapan Sehat",
        "8 menit dari RS Alam Medika Bumiayu",
        "8 menit dari RSU Siti Aisyah Bumiayu",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "4 menit dari Toserba Jadi Baru Bumiayu",
        "4 menit dari Pasar Induk Bumiayu",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
