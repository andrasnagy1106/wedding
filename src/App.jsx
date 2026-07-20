import { useState } from 'react'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
import LiturgyViewer from './LiturgyViewer'
import CookieConsent from './CookieConsent'
import FunCounters from './FunCounters'
import { MasonryPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/masonry.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const guestPhotos = [
  { src: '/photos/1.jpg',  width: 1536, height: 2048 },
  { src: '/photos/2.jpg',  width: 2048, height: 1536 },
  { src: '/photos/3.jpg',  width: 1536, height: 2048 },
  { src: '/photos/4.jpg',  width: 1536, height: 2048 },
  { src: '/photos/5.jpg',  width: 1536, height: 2048 },
  { src: '/photos/6.jpg',  width: 2048, height: 1536 },
  { src: '/photos/7.jpg',  width: 1536, height: 2048 },
  { src: '/photos/8.jpg',  width: 1290, height: 726  },
  { src: '/photos/9.jpg',  width: 2048, height: 1536 },
  { src: '/photos/10.jpg', width: 2048, height: 1536 },
  { src: '/photos/11.jpg', width: 1290, height: 726  },
  { src: '/photos/12.jpg', width: 1536, height: 2048 },
  { src: '/photos/13.jpg', width: 1290, height: 726  },
  { src: '/photos/14.jpg', width: 1152, height: 2047 },
  { src: '/photos/15.jpg', width: 1536, height: 2048 },
  { src: '/photos/16.jpg', width: 1014, height: 1801 },
  { src: '/photos/17.jpg', width: 2048, height: 1536 },
  { src: '/photos/18.jpg', width: 5712, height: 4284 },
  { src: '/photos/19.jpg', width: 3926, height: 2794 },
]

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
      'Tejszínes zöldfűszeres mártás',
      'Édes-chili mártás',
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
      'Unicum – Narancs, Szilva',
      'Pálinka – szilva, szőlő, mézes',
      'Berentzen – alma, rebarbara-eper',
      'Vodka – Finlandia',
      'Gin – Beefeater',
      'Rum – Captain Morgan',
      'Baileys',
    ],
  },
  {
    category: 'Long drinkek',
    items: ['Aperol Spritz', 'Cuba Libre', 'Gin-tonic', 'Vodka-szóda', 'Vodka-narancs', 'Whiskey-cola'],
  },
]

function GuestGallery() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <MasonryPhotoAlbum
        photos={guestPhotos}
        columns={(w) => (w < 500 ? 2 : w < 900 ? 3 : 4)}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={guestPhotos}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </>
  )
}

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
            <p className="location-name">
              <a href="https://www.facebook.com/szajoli.reformatusok/" target="_blank" rel="noopener noreferrer" className="location-name-link">
                Szajoli Református Templom
              </a>
            </p>
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
            <p className="location-name">
              <a href="https://nairam.hu" target="_blank" rel="noopener noreferrer" className="location-name-link">
                Nairam Rendezvényközpont – Szellőpalota
              </a>
            </p>
            <p className="location-address">Szolnok, Külterület 096/8, 5081</p>
            <a
              className="map-link"
              href="https://maps.google.com/?q=Nairam+Rendezvényközpont+Szolnok"
              target="_blank"
              rel="noopener noreferrer"
            >
              Megmutatás térképen ↗
            </a>
            <div className="social-links">
              <a href="https://www.facebook.com/NairamKlubhotelHivatalos" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/nairam_rendezvenykozpont/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@nairam_events" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
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
        <p className="menu-serving-note">🍽 A pörkölt és a sültek egyszerre kerülnek tálalásra.</p>
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

      {/* ── Éjféli menü ── */}
      <section className="section">
        <h2 className="section-title">Éjféli menü</h2>
        <div className="menu-grid">
          <div className="menu-block midnight-menu">
            <ul className="menu-items">
              <li>Mini töltött káposzta tejföllel</li>
              <li>Csirkés caesar wrap</li>
              <li>Sajtkoktél <span className="menu-note-inline">(ötféle sajt, gyümölccsel, ropogóssal együtt tálalva)</span></li>
            </ul>
          </div>
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

      {/* ── Gyereksarok ── */}
      <section className="section kids-section">
        <div className="kids-emoji-row">🧸 🎨 🪀 🎲 🖍️</div>
        <h2 className="section-title">Gyereksarok</h2>
        <p className="kids-text">
          Készültünk pár apró játékkal és meglepetéssel,<br />
          hogy a gyerekek is jól érezzék magukat. 🤍
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
            <li>📶 A helyszínen a térerő elég gyenge, érdemes erre felkészülni.</li>
            <li>💳 Fizetési lehetőségek: készpénz, bankkártya és SZÉP-kártya.</li>
            <li>🧒 A helyszín a szállás és reggeli árából <strong>12 év alatti gyermekeknek 30% kedvezményt</strong> biztosít. <strong>3 év alatti gyermekek</strong> számára ezek a szolgáltatások <strong>díjmentesek</strong>.</li>
          </ul>

          <div className="venue-access-box">
            <div className="venue-access-item">
              <h4 className="venue-access-title">🚧 Be- és kijutás</h4>
              <ul className="venue-access-list">
                <li>Az esküvő napján kb. <strong>13:30-tól</strong> nyitjuk ki a kapukat, amelyet a szertartást követően biztonsági okokból bezárunk.</li>
                <li>Másnap reggel <strong>8:00-tól</strong> nyitjuk ki újra a kapukat.</li>
                <li>Kijutás esetén a főkapu mellett lévő <strong>kódot beírva</strong> lehet kijutni.</li>
              </ul>
            </div>
            <div className="venue-access-item">
              <h4 className="venue-access-title">🅿️ Parkolás</h4>
              <ul className="venue-access-list">
                <li>Első körben a <strong>Harmat teremnél lévő 1-es és 2-es parkoló</strong> áll rendelkezésre – a <strong>Főkapun (1-es kapu)</strong> megközelíthető.</li>
                <li>Ha ezek megtelnek, megnyitjuk a <strong>Szellőpalotánál lévő 3-as parkolót</strong> – a <strong>2-es kapun</strong> keresztül érhető el.</li>
                <li>⚡ Elektromos autók töltésére sajnos nincs lehetőség.</li>
              </ul>
            </div>
          </div>

          <div className="goodid-checkin">
            <h3 className="goodid-title">📋 Szobakulcsátvétel – személyes adatok</h3>
            <p className="goodid-intro">
              A gördülékenyebb szobakulcsátvétel érdekében kérjük, küldje el személyes adatait
              egyszerűen és biztonságosan a <strong>GoodID alkalmazás</strong> segítségével!
            </p>
            <a
              className="goodid-link-btn"
              href="https://app.goodid.net/s/cHGBXl3zZI7BxTnv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adatok megadása a GoodID-ban ↗
            </a>
            <div className="goodid-app-hint">
              <p className="goodid-app-hint-text">Ha a link nem működik, először töltsd le az alkalmazást:</p>
              <div className="goodid-store-badges">
                <a
                  className="store-badge-btn"
                  href="https://apps.apple.com/hu/app/goodid-strong-authentication/id1072149515"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Letöltés az App Store-ból"
                >
                  <AppStoreIcon />
                  <span className="store-badge-text">
                    <span className="store-badge-sub">Letöltés az</span>
                    <span className="store-badge-name">App Store</span>
                  </span>
                </a>
                <a
                  className="store-badge-btn"
                  href="https://play.google.com/store/apps/details?id=com.idandtrust.goodid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Letöltés a Google Play-ből"
                >
                  <GooglePlayIcon />
                  <span className="store-badge-text">
                    <span className="store-badge-sub">Letöltés a</span>
                    <span className="store-badge-name">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="goodid-fields">
              <p className="goodid-fields-label">Az alábbi adatokat szükséges megadni:</p>
              <ul className="goodid-fields-list">
                <li><strong>Érkezés dátuma:</strong> 2026. május 30.</li>
                <li><strong>Foglalási azonosító:</strong> 539</li>
                <li><strong>Foglalási név:</strong> Kiss Anna</li>
                <li><strong>E-mail cím</strong></li>
                <li><strong>Telefonszám</strong></li>
                <li><strong>Lakcím</strong></li>
                <li><strong>Gépjármű rendszáma</strong></li>
                <li><strong>További vendégek adatai</strong> <span className="goodid-hint">(egy családon belül több szállóvendég esetén érdemes hozzáadni)</span></li>
              </ul>
            </div>
            <p className="goodid-note">* A személyazonosság ellenőrzéséhez az okmányadatokon túl szelfit is kérnek.</p>
          </div>

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

      <FunCounters />

      <Divider />

      {/* ── Fotók ── */}
      <section className="section photos-section">
        <h2 className="section-title">Esküvői fotók</h2>
        <div className="photos-coming-soon">
          <div className="photos-icon">📷</div>

          <div className="photos-guest-gallery">
            <h3 className="photos-guest-title">Ti küldtétek 🤍</h3>
            <GuestGallery />
          </div>

          <div className="photos-selfie-box">
            <p className="photos-selfie-text">📷 Profi fotók:</p>
            <a
              className="photos-selfie-link"
              href="https://zartvilag.smugmug.com/Anna-Andr%C3%A1s-2026/n-5PBN6R"
              target="_blank"
              rel="noopener noreferrer"
            >
              Képek megtekintése
            </a>
          </div>
          <div className="photos-selfie-box">
            <p className="photos-selfie-text">🤳 Szelfiboxos fotók:</p>
            <a
              className="photos-selfie-link"
              href="https://fotoshare.co/e/IqmYln3ZCgNEPYcTlbd0U"
              target="_blank"
              rel="noopener noreferrer"
            >
              Szelfiboxos képek megtekintése
            </a>
          </div>
          <div className="photos-selfie-box">
            <p className="photos-selfie-text">🎬 Vőfény videó:</p>
            <a
              className="photos-selfie-link"
              href="https://www.facebook.com/share/v/18gGdEsQoy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Videó megtekintése
            </a>
          </div>
          <div className="photos-selfie-box">
            <p className="photos-selfie-text">🎥 Fotós rövid videója:</p>
            <div className="youtube-embed-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Tvl2NPXFuxI"
                title="Fotós rövid videója – Anna & Andris esküvő"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="photos-selfie-box">
            <p className="photos-selfie-text">🎞️ Fotós slideshow – legjobb pillanatok:</p>
            <div className="youtube-embed-wrapper">
              <iframe
                src="https://drive.google.com/file/d/1Tq56UoBf9J2JgSHmSV5qFfyCKI6xWuxh/preview"
                title="Fotós slideshow – Anna & Andris esküvő"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
          <div className="photos-selfie-box">
            <p className="photos-selfie-text">🏛️ Polgári szertartás:</p>
            <div className="youtube-embed-wrapper">
              <iframe
                src="https://drive.google.com/file/d/124xfTht0F-pmW04CUorp8Vutcud3cX6H/preview"
                title="Polgári szertartás – Anna & Andris esküvő"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
          <div className="photos-selfie-box">
            <p className="photos-selfie-text">⛪ Templomi esküvő:</p>
            <div className="youtube-embed-wrapper">
              <iframe
                src="https://drive.google.com/file/d/1ni32DVTQmQxEtJd9mk9OFTZyqv6MVAcZ/preview"
                title="Templomi esküvő – Anna & Andris esküvő"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
          <div className="photos-selfie-box">
            <p className="photos-selfie-text">✨ Wedding highlights:</p>
            <div className="youtube-embed-wrapper">
              <iframe
                src="https://drive.google.com/file/d/1wFuc5gD5obU2qybX_NjfSXEp1nhAEY8p/preview"
                title="Wedding highlights – Anna & Andris esküvő"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
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
      <Analytics />
    </div>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  )
}

function ViberIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{display:'inline',verticalAlign:'middle',marginRight:'3px'}}>
      <path d="M16 2C8.82 2 3 7.38 3 14c0 3.9 1.9 7.38 4.88 9.72L7 30l6.18-2.1C14.07 28.27 15.02 28.4 16 28.4c7.18 0 13-5.38 13-12.4S23.18 2 16 2zm0 22.4c-.9 0-1.78-.12-2.62-.34l-.44-.12-3.66 1.24.7-3.54-.28-.4C7.72 19.6 6.2 16.9 6.2 14c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm5.36-7.34c-.28-.14-1.68-.84-1.94-.94-.26-.1-.46-.14-.66.14-.2.28-.76.94-.92 1.12-.18.2-.34.22-.62.08-.28-.14-1.2-.44-2.28-1.42-.84-.74-1.4-1.66-1.56-1.94-.18-.28-.02-.44.12-.58.14-.12.28-.34.42-.52.14-.16.18-.28.28-.46.1-.2.04-.36-.02-.5-.08-.14-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.06-.78.36-.28.28-1.04 1-1.04 2.46s1.06 2.86 1.22 3.06c.14.2 2.1 3.2 5.08 4.48.7.3 1.26.48 1.68.62.7.22 1.34.18 1.84.1.56-.08 1.74-.7 1.98-1.38.24-.68.24-1.26.18-1.38-.08-.14-.28-.22-.56-.36z"/>
    </svg>
  )
}

function AppStoreIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.18 23.76c.3.16.64.2.98.1l12.53-7.23-2.8-2.8-10.71 9.93zM.54 1.1C.2 1.46 0 2.02 0 2.73v18.54c0 .71.2 1.27.54 1.63l.09.08 10.39-10.39v-.24L.63 1.02.54 1.1zM20.3 10.27l-2.98-1.72-3.13 3.13 3.13 3.13 3-.73c.85-.49.85-1.29 0-1.78l-3-1.73.98-1.1zM3.18.24l12.53 7.23-2.8 2.8L3.18.24z"/>
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
