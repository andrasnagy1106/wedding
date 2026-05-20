import './App.css'
import LiturgyViewer from './LiturgyViewer'
import CookieConsent from './CookieConsent'

const schedule = [
  { time: '14:00', label: 'Szobák elfoglalása' },
  { time: '14:30', label: 'Vendégvárás' },
  { time: '16:00', label: 'Templomi szertartás' },
  { time: '17:00', label: 'Polgári szertartás' },
  { time: '17:30', label: 'Közös fotózás' },
  { time: '19:00', label: 'Ünnepi vacsora' },
  { time: '21:00', label: 'Indul a bulivonat' },
  { time: '22:30', label: 'Tortavágás' },
  { time: '23:00', label: 'Menyasszonytánc' },
  { time: '00:00', label: 'Éjféli menü' },
]

const menu = [
  {
    category: 'Leves',
    items: [
      'Újházi tyúkhúsleves főtt hússal, zöldségekkel gazdagon tálalva',
      'Levesbetét: Csigatészta',
    ],
    note: 'Érzékeny vendégek számára tányérszervízben: Fokhagymás zellerkrémleves',
  },
  {
    category: 'Pörkölt',
    items: [
      'Sertéspörkölt',
      'Köret: Galuska',
    ],
  },
  {
    category: 'Sültek & Húsos ételek',
    items: [
      'Konfitált kacsamell ropogósra sütve',
      'Sajttal, jalapeñoval és baconnel töltött sertéskaraj rántva',
      'Puha szaftos zöldfűszerben pácolt csirkemell egészben sütve',
      'Fokhagymás petrezselmyes panírban sült csirkecsíkok',
    ],
  },
  {
    category: 'Vegetáriánus ételek',
    items: [
      'Brokkoli fasírt zabpehellyel',
      'Sörbundában sült cukkini',
    ],
  },
  {
    category: 'Köretek',
    items: [
      'Fűszeres-fokhagymás rozmaringos házi steak burgonya (héjában sütve)',
      'Rizibizi',
      'Petrezselymes vajas burgonya',
      'Rozmaringos grillezett zöldségek (répa, cékla, hagyma, gomba, padlizsán)',
    ],
  },
  {
    category: 'Savanyúság & Saláta',
    items: [
      'Csemege uborka',
      'Coleslaw saláta',
    ],
  },
  {
    category: 'Mártások',
    items: [
      'Tejszínes zöldfűszeres mártás (szárnyas ételekhez ajánljuk)',
      'Édes-chili mártás (bundázott és vegetáriánus ételekhez ajánljuk)',
    ],
  },
  {
    category: 'Desszertek',
    items: [
      'Macaron',
      'Barack',
      'Mandula',
      'Kosárka',
      'Kozáksapka',
      'Linzer',
      'Isler',
      'Zserbó',
      'Lajcsi szelet',
      'Kókusztekercs',
      'Szlovák krémes',
    ],
  },
]

const drinks = [
  {
    category: 'Szénsavas üdítők',
    items: ['Pepsi Cola', 'Pepsi Max', 'Schweppes Narancs', 'Schweppes Canada Dry', 'Schweppes Tonic', '7UP'],
  },
  {
    category: 'Rostos üdítők',
    items: ['Toma alma', 'Toma narancs', 'Toma őszibarack', 'Sió Citrus Friss lime-citrom', 'Sió Zero alma-maracuja-mangó'],
  },
  {
    category: 'Ásványvíz',
    items: ['Szénsavas és mentes ásványvíz'],
  },
  {
    category: 'Kávé',
    items: ['Kávé', 'Cappuccino', 'Latte'],
  },
  {
    category: 'Borok',
    note: 'Bolyki – Egri borok',
    items: [
      'Egri Csillag 2024 – fehér, száraz',
      'Királyleányka 2025 – fehér, száraz',
      'Bolyki Rosé 2024 – rozé, száraz',
      'Indián nyár 2024 – vörös, száraz',
    ],
  },
  {
    category: 'Sörök',
    items: ['Csapolt Krusovice', 'Csapolt Heineken', 'Heineken 0,0% (alkoholmentes)'],
  },
  {
    category: 'Röviditalok',
    items: [
      'Whiskey – Jameson',
      'Unicum Narancs',
      'Unicum Szilva',
      'Pálinka – szilva, szőlő, mézes',
      'Berentzen – alma, rebarbara-eper',
      'Vodka – Finlandia',
      'Gin – Beefeater',
      'Rum – Captain Morgan',
      'Baileys',
    ],
  },
  {
    category: 'Koktélok',
    items: ['Aperol Spritz'],
  },
]

export default function App() {
  return (
    <div className="page">
      <CookieConsent />

      {/* Dekoratív felső sarok */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* ── Hero ── */}
      <header className="hero">
        <div className="leaf-row top-leaves">
          <LeafCluster side="left" />
          <LeafCluster side="right" />
        </div>

        <p className="pre-title">Kedves Családunk és Barátaink!</p>
        <p className="subtitle-intro">Boldogan tudatjuk, hogy Ámor nyila végleg célba talált!</p>

        <div className="names">
          <span className="name">Anna</span>
          <span className="ampersand">&amp;</span>
          <span className="name">Andris</span>
        </div>

        <p className="date-big">2026. május 30.</p>

        <blockquote className="quote">
          „Amint megláttalak, tudtam, hogy nagy kaland veszi kezdetét…"
          <cite>– A. A. Milne</cite>
        </blockquote>

        <p className="invite-text">
          Sok szeretettel meghívunk benneteket<br />
          <strong>2026. Május 30-án</strong> tartandó esküvőnkre.
        </p>

        <div className="leaf-row bottom-leaves">
          <LeafCluster side="left" />
          <LeafCluster side="right" />
        </div>
      </header>

      <Divider />

      {/* ── Helyszínek ── */}
      <section className="section locations">
        <h2 className="section-title">Helyszínek</h2>
        <div className="location-cards">
          <div className="location-card">
            <div className="location-icon">⛪</div>
            <h3>Templomi szertartás</h3>
            <p className="location-name">Szajoli Református Templom</p>
            <p className="location-address">5081 Szajol, Szent István király út 84.</p>
            <a
              className="map-link"
              href="https://maps.google.com/?q=Szajoli+Református+Templom,+5081+Szajol,+Szent+István+király+út+84"
              target="_blank"
              rel="noopener noreferrer"
            >
              Megmutatás térképen ↗
            </a>
          </div>
          <div className="location-card">
            <div className="location-icon">🥂</div>
            <h3>Rendezvény helyszín</h3>
            <p className="location-name">Nairam Rendezvényközpont – Szellőpalota</p>
            <p className="location-address">Szolnok, Külterület 096/8, 5081</p>
            <a
              className="map-link"
              href="https://maps.google.com/?q=Nairam+Rendezvényközpont+Szolnok"
              target="_blank"
              rel="noopener noreferrer"
            >
              Megmutatás térképen ↗
            </a>
          </div>
        </div>
      </section>

      <div className="venue-map-section">
        <p className="venue-map-label">Szellőpalota (Nairam Rendezvényközpont) – megközelítés</p>
        <img
          src="/terkep.jpg"
          alt="Nairam Rendezvényközpont helyszín térkép"
          className="venue-map-img"
        />
      </div>

      <Divider />

      {/* ── Liturgia ── */}
      <section className="section">
        <h2 className="section-title">Templomi szertartás liturgiája</h2>
        <p className="liturgy-subtitle">Az istentisztelet menetét az alábbi dokumentumban találjátok:</p>
        <LiturgyViewer />
        <a className="liturgy-download" href="/liturgia.pdf" download="liturgia.pdf">
          ⬇ Letöltés
        </a>
      </section>

      <Divider />

      {/* ── Program ── */}
      <section className="section">
        <h2 className="section-title">A nap programja</h2>
        <div className="timeline">
          {schedule.map((item, i) => (
            <div className="timeline-item" key={i}>
              <span className="timeline-time">{item.time}</span>
              <span className="timeline-dot" />
              <span className="timeline-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Menü ── */}
      <section className="section">
        <h2 className="section-title">Ünnepi menü</h2>
        <div className="menu-grid">
          {menu.map((block, i) => (
            <div className="menu-block" key={i}>
              <h3 className="menu-category">{block.category}</h3>
              {block.note && <p className="menu-note">{block.note}</p>}
              <ul className="menu-items">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Italok ── */}
      <section className="section">
        <h2 className="section-title">Italok</h2>
        <div className="menu-grid">
          {drinks.map((block, i) => (
            <div className="menu-block" key={i}>
              <h3 className="menu-category">{block.category}</h3>
              {block.note && <p className="menu-note">{block.note}</p>}
              <ul className="menu-items">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Ajándék ── */}
      <section className="section gift-section">
        <div className="leaf-small">🌿</div>
        <p className="gift-poem">
          Ajándékon ne gondolkozz,<br />
          Magaddal csak jó kedvet hozz!<br />
          Inkább add a menyasszonytáncnál,<br />
          Amit ajándékba szántál.
        </p>
      </section>

      <Divider />

      {/* ── Szállás ── */}
      <section className="section">
        <h2 className="section-title">Szállás</h2>
        <div className="accommodation-box">
          <div className="accommodation-times">
            <div className="acc-time-item">
              <span className="acc-time-icon">🔑</span>
              <div>
                <p className="acc-time-label">Bejelentkezés</p>
                <p className="acc-time-value">14:00-tól</p>
              </div>
            </div>
            <div className="acc-time-divider" />
            <div className="acc-time-item">
              <span className="acc-time-icon">🚪</span>
              <div>
                <p className="acc-time-label">Kijelentkezés</p>
                <p className="acc-time-value">11:00-ig</p>
              </div>
            </div>
            <div className="acc-time-divider" />
            <div className="acc-time-item">
              <span className="acc-time-icon">💰</span>
              <div>
                <p className="acc-time-label">Ár</p>
                <p className="acc-time-value">11 200 Ft / fő / éj</p>
              </div>
            </div>
          </div>
          <ul className="acc-info-list">
            <li>Az ágyakat nem lehet mozgatni.</li>
            <li>A szobákban törölközők rendelkezésre állnak, tusfürdőről azonban érdemes gondoskodni.</li>
            <li>A fizetési lehetőségekről és az adatok bekéréséről később értesítünk.</li>
            <li>🧒 A helyszín a szállás, reggeli és pezsgős koccintás árából <strong>12 év alatti gyermekeknek 30% kedvezményt</strong> biztosít. <strong>3 év alatti gyermekek</strong> számára ezek a szolgáltatások <strong>díjmentesek</strong>.</li>
          </ul>

          <div className="accommodation-breakfast">
            <h3 className="accommodation-subtitle">Büféreggeli <span className="optional-tag">opcionális • 4 400 Ft / fő</span></h3>
            <div className="breakfast-meta">
              <span>🕗 8:00 – 11:00</span>
              <span>📍 Harmat terem</span>
              <span>🗝 Igény jelzése szobakulcs átvételkor</span>
            </div>
            <ul className="menu-items">
              {[
                'Rántotta',
                'Virsli',
                'Bundás kenyér',
                'Mustár, ketchup, majonéz',
                'Sonka- és szalámi tál',
                'Sajttál',
                'Vaj, lekvár, méz, szendvicskrémek',
                'Müzli',
                'Zöldségtál',
                'Pékáru',
                'Filteres tea, tej, kávé, narancslé',
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Fotók ── */}
      <section className="section photos-section">
        <h2 className="section-title">Esküvői fotók</h2>
        <div className="photos-coming-soon">
          <div className="photos-icon">📷</div>
          <p className="photos-text">Az esküvői fotók hamarosan itt lesznek elérhetők.</p>
          <p className="photos-subtext">Gyere vissza később!</p>
          <div className="photos-share">
            <p className="photos-share-text">
              Ha nektek is készültek szép fotók vagy videók az esküvőn,<br />
              nagyon örülnénk, ha megoszlanátok velünk! 🤍
            </p>
            <a className="photos-email" href="mailto:annabandi0530@gmail.com">
              annabandi0530@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Kapcsolat ── */}
      <section className="section">
        <h2 className="section-title">Kérdésetek van?</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-name">Anna</span>
            <span className="contact-phone">+36 30 251 7439</span>
            <div className="contact-actions">
              <a className="contact-btn call-btn" href="tel:+36302517439">📞 Hívás</a>
              <a className="contact-btn viber-btn" href="viber://chat?number=%2B36302517439">
                <ViberIcon /> Viber
              </a>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-name">Andris</span>
            <span className="contact-phone">+36 30 318 2526</span>
            <div className="contact-actions">
              <a className="contact-btn call-btn" href="tel:+36303182526">📞 Hívás</a>
              <a className="contact-btn viber-btn" href="viber://chat?number=%2B36303182526">
                <ViberIcon /> Viber
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <p>Anna &amp; Andris • 2026. május 30.</p>
      </footer>
    </div>
  )
}

function ViberIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{display:'inline',verticalAlign:'middle',marginRight:'3px'}}>
      <path d="M16 2C8.82 2 3 7.38 3 14c0 3.9 1.9 7.38 4.88 9.72L7 30l6.18-2.1C14.07 28.27 15.02 28.4 16 28.4c7.18 0 13-5.38 13-12.4S23.18 2 16 2zm0 22.4c-.9 0-1.78-.12-2.62-.34l-.44-.12-3.66 1.24.7-3.54-.28-.4C7.72 19.6 6.2 16.9 6.2 14c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm5.36-7.34c-.28-.14-1.68-.84-1.94-.94-.26-.1-.46-.14-.66.14-.2.28-.76.94-.92 1.12-.18.2-.34.22-.62.08-.28-.14-1.2-.44-2.28-1.42-.84-.74-1.4-1.66-1.56-1.94-.18-.28-.02-.44.12-.58.14-.12.28-.34.42-.52.14-.16.18-.28.28-.46.1-.2.04-.36-.02-.5-.08-.14-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.06-.78.36-.28.28-1.04 1-1.04 2.46s1.06 2.86 1.22 3.06c.14.2 2.1 3.2 5.08 4.48.7.3 1.26.48 1.68.62.7.22 1.34.18 1.84.1.56-.08 1.74-.7 1.98-1.38.24-.68.24-1.26.18-1.38-.08-.14-.28-.22-.56-.36z"/>
    </svg>
  )
}

function Divider() {
  return (
    <div className="divider">
      <span className="divider-line" />
      <span className="divider-icon">✦</span>
      <span className="divider-line" />
    </div>
  )
}

function LeafCluster({ side }) {
  return (
    <svg
      className={`leaf-svg leaf-${side}`}
      viewBox="0 0 120 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      {side === 'left' ? (
        <>
          <path d="M10,70 Q40,10 100,20 Q60,50 10,70Z" fill="#5a7a4a" opacity="0.75" />
          <path d="M5,65 Q25,30 70,40 Q40,60 5,65Z" fill="#7a9e5a" opacity="0.55" />
          <path d="M15,72 Q50,45 90,55 Q55,70 15,72Z" fill="#4a6a3a" opacity="0.5" />
          <line x1="10" y1="70" x2="100" y2="20" stroke="#3a5a2a" strokeWidth="0.8" opacity="0.4" />
        </>
      ) : (
        <>
          <path d="M110,70 Q80,10 20,20 Q60,50 110,70Z" fill="#5a7a4a" opacity="0.75" />
          <path d="M115,65 Q95,30 50,40 Q80,60 115,65Z" fill="#7a9e5a" opacity="0.55" />
          <path d="M105,72 Q70,45 30,55 Q65,70 105,72Z" fill="#4a6a3a" opacity="0.5" />
          <line x1="110" y1="70" x2="20" y2="20" stroke="#3a5a2a" strokeWidth="0.8" opacity="0.4" />
        </>
      )}
    </svg>
  )
}
