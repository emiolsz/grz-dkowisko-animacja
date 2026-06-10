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

        <div className="heroMist" />

        <div className="heroLogoAnimation" aria-hidden="true">
          <svg
            className="peaAnimationSvg"
            viewBox="0 0 900 260"
            role="img"
            aria-label="Animacja groszku oplatającego napis Grządkowisko"
          >
            <circle className="peaSeed" cx="38" cy="198" r="8" />

            <path
              className="peaStem"
              d="M 38 198
                 C 65 160, 55 120, 100 95
                 C 150 66, 190 94, 214 122
                 C 246 160, 204 188, 170 160
                 C 132 128, 178 78, 244 74
                 C 330 68, 390 130, 470 112
                 C 560 92, 620 58, 704 92
                 C 770 118, 812 150, 848 128"
            />

            <path
              className="peaTendril"
              d="M 214 122
                 C 238 86, 282 94, 270 128
                 C 260 154, 224 148, 236 118"
            />

            <ellipse className="peaLeaf peaLeafOne" cx="125" cy="104" rx="20" ry="10" />
            <ellipse className="peaLeaf peaLeafTwo" cx="338" cy="88" rx="22" ry="11" />
            <ellipse className="peaLeaf peaLeafThree" cx="585" cy="78" rx="24" ry="12" />

            <circle className="peaFlower peaFlowerOne" cx="470" cy="112" r="9" />
            <circle className="peaFlower peaFlowerTwo" cx="704" cy="92" r="9" />

            <path
              className="peaPod peaPodOne"
              d="M 505 118
                 C 545 100, 584 110, 604 136
                 C 560 152, 526 146, 505 118 Z"
            />

            <path
              className="peaPod peaPodTwo"
              d="M 706 98
                 C 746 82, 786 94, 804 120
                 C 764 134, 728 126, 706 98 Z"
            />

            <circle className="finalPea" cx="838" cy="132" r="11" />
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
