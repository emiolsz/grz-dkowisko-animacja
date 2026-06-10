import Image from "next/image";

const plants = [
  {
    name: "Pokrzywa",
    text: "Karta botaniczna, funkcje w ogrodzie, przepisy, opowieści i powiązania ekosystemowe.",
  },
  {
    name: "Dynia",
    text: "Gatunek + problem: żółte liście, brak kwitnienia, owoce nie rosną.",
  },
  {
    name: "Mak",
    text: "Roślina krajobrazu, pamięci, zapylaczy i delikatnych pól.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/hero/maki-chabry.webp"
          alt="Maki i chabry na łące"
          fill
          priority
          className="heroImage"
        />

        <div className="introLogoScene">
          <Image
            src="/images/hero/logo-do-animacji.png"
            alt="Grządkowisko"
            fill
            priority
            className="introLogoImage"
          />

          <svg className="peaIntroAnimation" viewBox="0 0 1920 1080">
            <circle className="peaSeed" cx="240" cy="610" r="12" />

            <path
              className="peaStem"
              d="M240 610 C250 520 310 460 390 455 C470 450 510 520 470 570 C435 615 360 590 380 520 C405 430 560 420 720 460 C880 500 1010 430 1160 475"
            />

            <ellipse className="peaLeaf leaf1" cx="365" cy="490" rx="28" ry="13" />
            <ellipse className="peaLeaf leaf2" cx="620" cy="445" rx="32" ry="14" />
            <ellipse className="peaLeaf leaf3" cx="920" cy="465" rx="34" ry="15" />

            <path
              className="peaPod"
              d="M1060 480 C1115 450 1170 465 1200 500 C1140 525 1090 515 1060 480 Z"
            />

            <circle className="finalPea" cx="1180" cy="500" r="16" />
          </svg>
        </div>

        <div className="heroContent">
          <p className="label">Atlas zależności przyrodniczych</p>

          <h1>Grządkowisko</h1>

          <p className="motto">
            Życie jest nieustającym procesem.
            <br />
            Bądź jego świadomym elementem.
            <br />
            Wzrastaj.
          </p>

          <div className="searchBox">
            🔍 Wpisz nazwę rośliny, np. pokrzywa, dynia, mak...
          </div>
        </div>
      </section>

      <section className="section">
        <p className="label">Zachwyć się</p>
        <h2>Najpierw zobacz.</h2>
        <p>
          Grządkowisko zaczyna się od obrazu: łąki, światła, liści,
          zapachu ziemi i pytania, co właściwie dzieje się wokół nas.
        </p>
      </section>

      <section className="section">
        <p className="label">Obserwuj</p>
        <h2>Roślina jest początkiem.</h2>
        <p>
          Użytkownik nie szuka działu. Wpisuje nazwę rośliny. Dlatego
          centrum Grządkowiska będzie gatunek i wszystko, co z nim związane.
        </p>

        <div className="grid">
          {plants.map((plant) => (
            <article className="card" key={plant.name}>
              <h3>{plant.name}</h3>
              <p>{plant.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="label">Zrozum</p>
        <h2>Nie pojedyncze fakty. Zależności.</h2>
        <p>
          Pokrzywa zwyczajna nie jest wcale taka zwyczajna — powiedziałabym
          niezwykła — ze względu na szereg cennych właściwości. Jej obecność
          uruchamia łańcuch wzajemnych korzyści między glebą, owadami,
          ptakami. W tym łańcuchu wzajemności jest i człowiek.
        </p>
      </section>

      <section className="section">
        <p className="label">Działaj</p>
        <h2>Alleopatia — Asystent Ogrodnika.</h2>
        <p>
          Grządkowisko wyjaśnia świat zależności. Alleopatia pomaga podjąć
          decyzję: które sąsiedztwo będzie najlepsze dla roślin, które będą się
          wspierać, a które konkurować.
        </p>
      </section>

      <section className="section">
        <p className="label">Opowieści</p>
        <h2>Atramentowe Opowieści.</h2>
        <p>
          Są rzeczy, które najlepiej zapamiętuje się przez pięknie opowiedziane
          historie. Opowieści będą prowadzić małych i dużych w barwną krainę
          roślin.
        </p>
      </section>

      <footer className="section">
        <p>© Emilia Olszewska · Grządkowisko</p>
      </footer>
    </main>
  );
}
