import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Carrossel } from "@/components/Carrossel";
import { Check, Truck, ShieldCheck, MessageCircle, ArrowLeft } from "lucide-react";
import frente from "@/assets/camisa-frente.png.asset.json";
import costas from "@/assets/camisa-costas.png.asset.json";



export const Route = createFileRoute("/produto")({
  head: () => ({
    meta: [
      { title: "Camisa Não Mais Escravos, Somos Filhos | Detalhes e Tamanhos" },
      {
        name: "description",
        content:
          "Camisa oficial do 29º Congresso Unificado — Gálatas 4.7. Algodão marrom, estampa durável, tamanhos P ao GG. Faça seu pedido pelo WhatsApp.",
      },
      { property: "og:title", content: "Camisa Não Mais Escravos, Somos Filhos — Detalhes" },
      {
        property: "og:description",
        content:
          "Camisa oficial do 29º Congresso Unificado. Algodão marrom, estampa durável, modelagem masculina e gola V feminina. Peça a sua.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Produto,
});

const WHATSAPP = "https://wa.me/5514997982105?text=Ol%C3%A1!%20Quero%20pedir%20a%20camisa%20N%C3%A3o%20Mais%20Escravos%2C%20Somos%20Filhos.";

const slides = [
  { src: frente.url, alt: "Frente da camisa marrom com estampa do cordeiro e a cruz — Gálatas 4.7", legenda: "Frente — Gálatas 4.7" },
  { src: costas.url, alt: "Costas da camisa com a estampa Não Mais Escravos, Somos Filhos", legenda: "Costas — Não Mais Escravos, Somos Filhos" },
];



const sizes = [
  { label: "P", measures: "50 cm x 68 cm", width: 50, length: 68 },
  { label: "M", measures: "53 cm x 70 cm", width: 53, length: 70 },
  { label: "G", measures: "56 cm x 72 cm", width: 56, length: 72 },
  { label: "GG", measures: "59 cm x 74 cm", width: 59, length: 74 },
];

const details = [
  { icon: Check, title: "Material", text: "100% algodão 30.1 penteado, toque macio e respirável." },
  { icon: ShieldCheck, title: "Estampa", text: "Silk de alta durabilidade com acabamento resistente a lavagens." },
  { icon: Truck, title: "Entrega", text: "Retirada em Tupã/SP ou entrega combinada via WhatsApp." },
];

const faqs = [
  { q: "Quais são os tamanhos disponíveis?", a: "Temos tamanhos P, M, G e GG, com modelagem masculina tradicional e feminina gola V." },
  { q: "Qual o valor da camisa?", a: "O valor é informado no ato do pedido pelo WhatsApp. Aceitamos pix e dinheiro." },
  { q: "Posso presentear alguém?", a: "Sim! Você pode fazer o pedido em nome de outra pessoa e combinar a entrega." },
  { q: "Até quando posso pedir?", a: "Os pedidos são fechados conforme a produção. Garanta a sua o quanto antes." },
];

function makeWhatsAppLink(tamanho: string) {
  const text = `Olá! Quero pedir a camisa Não Mais Escravos, Somos Filhos no tamanho ${tamanho}.`;
  return `https://wa.me/5514997982105?text=${encodeURIComponent(text)}`;
}

function Produto() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedGender, setSelectedGender] = useState<"masculina" | "feminina">("masculina");
  const selected = sizes.find((s) => s.label === selectedSize)!;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-display text-lg uppercase tracking-wide text-foreground">
            Não Mais Escravos
          </Link>
          <a
            href={WHATSAPP}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:brightness-110"
          >
            <MessageCircle className="size-4" />
            Pedir agora
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Voltar para a página inicial
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Galeria */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Carrossel slides={slides} />
            <div className="mt-4 grid grid-cols-2 gap-3">
              {slides.map((s) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  className="aspect-square rounded-xl border border-border object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Detalhes */}
          <div>
            <p className="mb-3 inline-flex rounded-full border border-primary/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-primary">
              29º Congresso Unificado
            </p>
            <h1 className="font-display text-4xl leading-[0.95] uppercase tracking-tight text-foreground md:text-5xl">
              Não mais escravos, <span className="text-primary">somos filhos</span>
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">Gálatas 4.7</p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Camisa oficial do 29º Congresso Unificado. Cor marrom, algodão macio, estampa em alta durabilidade
              com a mensagem de liberdade em Cristo. Disponível em modelagem masculina tradicional e gola V
              feminina.
            </p>

            {/* Detalhes rápidos */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {details.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-4">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-3 font-display text-sm uppercase tracking-wide text-foreground">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>

            {/* Modelagem */}
            <div className="mt-8">
              <h2 className="font-display text-sm uppercase tracking-wide text-foreground">Modelagem</h2>
              <div className="mt-3 flex gap-2">
                {(["masculina", "feminina"] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`rounded-full border px-5 py-2 text-sm font-medium capitalize transition ${
                      selectedGender === g
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/50"
                    }`}
                  >
                    {g} {g === "masculina" ? "(tradicional)" : "(gola V)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Tamanhos */}
            <div className="mt-8">
              <h2 className="font-display text-sm uppercase tracking-wide text-foreground">Escolha o tamanho</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSize(s.label)}
                    aria-pressed={selectedSize === s.label}
                    className={`flex size-14 items-center justify-center rounded-2xl border text-base font-semibold transition ${
                      selectedSize === s.label
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                        : "border-border bg-card text-foreground hover:border-primary/50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Tamanho {selected.label} selecionado: largura {selected.width} cm × comprimento {selected.length} cm
                (medidas aproximadas).
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-3xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">Pedido personalizado pelo WhatsApp</p>
              <p className="mt-1 font-display text-2xl uppercase tracking-wide text-foreground">
                Tamanho {selected.label} · Modelagem {selectedGender}
              </p>
              <a
                href={makeWhatsAppLink(`${selected.label} (${selectedGender})`)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110 sm:w-auto"
              >
                <MessageCircle className="size-5" />
                Pedir pelo WhatsApp
              </a>
              <p className="mt-3 text-xs text-muted-foreground">ou ligue 14 99798-2105</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-center font-display text-2xl uppercase tracking-wide text-foreground md:text-3xl">
            Dúvidas frequentes
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border bg-background p-5">
                <h3 className="font-display text-sm uppercase tracking-wide text-foreground">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-5 py-12 text-center">
        <p className="font-display text-2xl uppercase tracking-wide text-foreground">
          Assembleia de Deus Ministério Belém — Pq. Ipiranga
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Rua João Capioto, 80, Pq. Ipiranga, Tupã/SP · 2 a 4 de outubro de 2026
        </p>
        <a
          href={WHATSAPP}
          className="mt-6 inline-flex rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          Pedir pelo WhatsApp
        </a>
      </footer>
    </main>
  );
}
