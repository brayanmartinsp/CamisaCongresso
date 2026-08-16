import { createFileRoute, Link } from "@tanstack/react-router";
import { Carrossel } from "@/components/Carrossel";
import foto1 from "@/assets/foto-1.jpg";
import foto2 from "@/assets/foto_2.jpg";
import foto3 from "@/assets/foto_3.jpg";
import foto4 from "@/assets/foto_4.jpg";
import foto5 from "@/assets/foto_5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Não Mais Escravos, Somos Filhos | Camisa Gálatas 4.7" },
      {
        name: "description",
        content:
          "Camisa oficial do 29º Congresso Unificado — Gálatas 4.7. Peça a sua e vista a fé que proclama a liberdade em Cristo.",
      },
      { property: "og:title", content: "Camisa Não Mais Escravos, Somos Filhos" },
      {
        property: "og:description",
        content: "Camisa oficial do 29º Congresso Unificado — Gálatas 4.7. Faça já o seu pedido.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP =
  "https://wa.me/5514997982105?text=Ol%C3%A1!%20Quero%20pedir%20a%20camisa%20N%C3%A3o%20Mais%20Escravos%2C%20Somos%20Filhos.";

const slides = [
  {
    src: foto1,
    alt: "Jovens usando a camisa em um parque ao entardecer",
    legenda: "Feita para ser vivida no dia a dia",
  },
  {
    src: foto2,
    alt: "Estampa das costas: Não Mais Escravos, Somos Filhos",
    legenda: "Estampa completa nas costas",
  },
  {
    src: foto3,
    alt: "Grupo de jovens com a camisa marrom",
    legenda: "Modelagem masculina e gola V feminina",
  },
  {
    src: foto4,
    alt: "Grupo de jovens com a camisa marrom",
    legenda: "Modelagem masculina e gola V feminina",
  },

  {
   src: foto5,
    alt: "Grupo de jovens com a camisa marrom",
    legenda: "Modelagem masculina e gola V feminina",
  }
];

const destaques = [
  { t: "Tamanhos P ao GG", d: "Modelagem masculina e feminina gola V." },
  { t: "Entrega em Tupã/SP", d: "Retirada na igreja ou combinação por WhatsApp." },
  { t: "Presenteie alguém", d: "Você pode estar presenteando um amigo ou familiar." },
];

function Index() {
  return (
    <main className="page">
      <header className="site-header">
        <div className="container site-header__inner">
          <span className="site-header__brand">Não Mais Escravos</span>
          <Link to="/produto" className="btn btn--ghost btn--sm">
            Ver detalhes
          </Link>
        </div>
      </header>

      <section className="container hero">
        <div>
          <p className="eyebrow">29º Congresso Unificado</p>
          <h1 className="hero__title">
            Não mais
            <br />
            escravos, <span className="accent">somos filhos</span>
          </h1>
          <p className="hero__verse">Gálatas 4.7</p>
          <p className="hero__text">
            Uma camisa que veste a fé e proclama a liberdade em Cristo. Algodão marrom, estampa em
            alta durabilidade, disponível em modelagem tradicional e gola V.
          </p>
          <div className="hero__actions">
            <Link to="/produto" className="btn btn--primary">
              Ver detalhes e tamanhos
            </Link>
            <a href={WHATSAPP} className="btn btn--ghost">
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>

        <Link to="/produto" aria-label="Ver página de detalhes do produto">
          <Carrossel slides={slides} />
        </Link>
      </section>

      <section className="strip">
        <div className="container strip__grid">
          {destaques.map((c) => (
            <div key={c.t}>
              <h2 className="strip__title">{c.t}</h2>
              <p className="strip__text">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="container site-footer">
        <p className="site-footer__name">Assembleia de Deus Ministério Belém — Pq. Ipiranga</p>
        <p className="site-footer__address">
          Rua João Capioto, 80, Pq. Ipiranga, Tupã/SP · 2 a 4 de outubro de 2026
        </p>
        <div className="site-footer__actions">
          <Link to="/produto" className="btn btn--primary">
            Ver detalhes do produto
          </Link>
          <a href={WHATSAPP} className="btn btn--ghost">
            Pedir pelo WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
