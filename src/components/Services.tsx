const services = [
  { title: 'Maanrakennus', desc: 'Kaivuut, täytöt ja salaojat.', icon: '🛠️' },
  { title: 'Kiveykset', desc: 'Pihojen ja julkisten alueiden viimeistely.', icon: '🧱' },
  { title: 'Kuljetukset', desc: 'Massat ja maa-ainekset perille saakka.', icon: '🚚' }
]

export default function Services() {
  return (
    <section className="p-12 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-8">Palvelumme</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg shadow">
            <div className="text-4xl mb-2">{s.icon}</div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
