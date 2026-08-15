import { createFileRoute, Link } from "@tanstack/react-router";
import { Carrossel } from "@/components/Carrossel";
import foto1 from "@/assets/IMG-20260803-WA0015.jpg.asset.json";
import foto2 from "@/assets/IMG-20260803-WA0016.jpg.asset.json";
import foto3 from "@/assets/IMG-20260803-WA0014.jpg.asset.json";


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
  { src: foto1.url, alt: "Jovens usando a camisa em um parque ao entardecer", legenda: "Feita para ser vivida no dia a dia" },
  { src: foto2.url, alt: "Estampa das costas: Não Mais Escravos, Somos Filhos", legenda: "Estampa completa nas costas" },
  { src: foto3.url, alt: "Grupo de jovens com a camisa marrom", legenda: "Modelagem masculina e gola V feminina" },
];


function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="font-display text-lg uppercase tracking-wide text-foreground">Não Mais Escravos</span>
          <Link
            to="/produto"
            className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Ver detalhes
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-primary/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-primary">
            29º Congresso Unificado
          </p>
          <h1 className="font-display text-5xl leading-[0.92] uppercase tracking-tight text-foreground md:text-7xl">
            Não mais<br />
            escravos, <span className="text-primary">somos filhos</span>
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-muted-foreground">Gálatas 4.7</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Uma camisa que veste a fé e proclama a liberdade em Cristo. Algodão marrom, estampa em alta
            durabilidade, disponível em modelagem tradicional e gola V.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/produto"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
            >
              Ver detalhes e tamanhos
            </Link>
            <a
              href={WHATSAPP}
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>

        <Link to="/produto" aria-label="Ver página de detalhes do produto">
          <Carrossel slides={slides} />
        </Link>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
          {[
            { t: "Tamanhos P ao GG", d: "Modelagem masculina e feminina gola V." },
            { t: "Entrega em Tupã/SP", d: "Retirada na igreja ou combinação por WhatsApp." },
            { t: "Presenteie alguém", d: "Você pode estar presenteando um amigo ou familiar." },
          ].map((c) => (
            <div key={c.t}>
              <h2 className="font-display text-xl uppercase tracking-wide text-foreground">{c.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-12 text-center">
        <p className="font-display text-2xl uppercase tracking-wide text-foreground">
          Assembleia de Deus Ministério Belém — Pq. Ipiranga
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Rua João Capioto, 80, Pq. Ipiranga, Tupã/SP · 2 a 4 de outubro de 2026
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/produto"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:brightness-110"
          >
            Ver detalhes do produto
          </Link>
          <a
            href={WHATSAPP}
            className="inline-flex rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
