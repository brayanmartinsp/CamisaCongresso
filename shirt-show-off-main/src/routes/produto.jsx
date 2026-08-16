import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Carrossel } from "@/components/Carrossel";
import { Check, Truck, ShieldCheck, MessageCircle, ArrowLeft } from "lucide-react";
import camisaFrente from "@/assets/camisa-frente.png";
import camisaCostas from "@/assets/camisa-costas.png";

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

const WHATSAPP =
  "https://wa.me/5514997982105?text=Ol%C3%A1!%20Quero%20pedir%20a%20camisa%20N%C3%A3o%20Mais%20Escravos%2C%20Somos%20Filhos.";

const slides = [
  {
    src: camisaFrente,
    alt: "Frente da camisa marrom com estampa do cordeiro e a cruz — Gálatas 4.7",
  },
  {
     src: camisaCostas,
    alt: "Costas da camisa com a estampa Não Mais Escravos, Somos Filhos",
  },
];

const sizes = [
  { label: "P", width: 50, length: 68 },
  { label: "M", width: 53, length: 70 },
  { label: "G", width: 56, length: 72 },
  { label: "GG", width: 59, length: 74 },
];

const details = [
  { icon: Check, title: "Material", text: "100% algodão 30.1 penteado, toque macio e respirável." },
  {
    icon: ShieldCheck,
    title: "Estampa",
    text: "Silk de alta durabilidade com acabamento resistente a lavagens.",
  },
  { icon: Truck, title: "Entrega", text: "Retirada em Tupã/SP ou entrega combinada via WhatsApp." },
];

const faqs = [
  {
    q: "Quais são os tamanhos disponíveis?",
    a: "Temos tamanhos P, M, G e GG, com modelagem masculina tradicional e feminina gola V.",
  },
  {
    q: "Qual o valor da camisa?",
    a: "O valor é informado no ato do pedido pelo WhatsApp. Aceitamos pix e dinheiro.",
  },
  {
    q: "Posso presentear alguém?",
    a: "Sim! Você pode fazer o pedido em nome de outra pessoa e combinar a entrega.",
  },
  {
    q: "Até quando posso pedir?",
    a: "Os pedidos são fechados conforme a produção. Garanta a sua o quanto antes.",
  },
];

function makeWhatsAppLink(tamanho) {
  const text = `Olá! Quero pedir a camisa Não Mais Escravos, Somos Filhos no tamanho ${tamanho}.`;
  return `https://wa.me/5514997982105?text=${encodeURIComponent(text)}`;
}

function Produto() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedGender, setSelectedGender] = useState("masculina");
  const selected = sizes.find((s) => s.label === selectedSize);

  return (
    <main className="page">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand">
            Não Mais Escravos
          </Link>
          <a href={WHATSAPP} className="btn btn--primary btn--sm">
            <MessageCircle className="icon--sm" />
            Pedir agora
          </a>
        </div>
      </header>

      <section className="container product">
        <Link to="/" className="back-link">
          <ArrowLeft className="icon--sm" />
          Voltar para a página inicial
        </Link>

        <div className="product__grid">
          <div className="product__gallery">
            <Carrossel slides={slides} />
            <div className="thumbs">
              {slides.map((s) => (
                <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">29º Congresso Unificado</p>
            <h1 className="product__title">
              Não mais escravos, <span className="accent">somos filhos</span>
            </h1>
            <p className="hero__verse">Gálatas 4.7</p>

            <p className="product__text">
              Camisa oficial do 29º Congresso Unificado. Cor marrom, algodão macio, estampa em alta
              durabilidade com a mensagem de liberdade em Cristo. Disponível em modelagem masculina
              tradicional e gola V feminina.
            </p>

            <div className="features">
              {details.map(({ icon: Icon, title, text }) => (
                <div key={title} className="feature">
                  <Icon />
                  <h3 className="feature__title">{title}</h3>
                  <p className="feature__text">{text}</p>
                </div>
              ))}
            </div>

            <div className="block">
              <h2 className="block__label">Modelagem</h2>
              <div className="options">
                {["masculina", "feminina"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGender(g)}
                    aria-pressed={selectedGender === g}
                    className={`chip${selectedGender === g ? " is-active" : ""}`}
                  >
                    {g} {g === "masculina" ? "(tradicional)" : "(gola V)"}
                  </button>
                ))}
              </div>
            </div>

            <div className="block">
              <h2 className="block__label">Escolha o tamanho</h2>
              <div className="sizes">
                {sizes.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setSelectedSize(s.label)}
                    aria-pressed={selectedSize === s.label}
                    className={`size${selectedSize === s.label ? " is-active" : ""}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="size-hint">
                Tamanho {selected.label} selecionado: largura {selected.width} cm × comprimento{" "}
                {selected.length} cm (medidas aproximadas).
              </p>
            </div>

            <div className="order-box">
              <p className="order-box__label">Pedido personalizado pelo WhatsApp</p>
              <p className="order-box__resume">
                Tamanho {selected.label} · Modelagem {selectedGender}
              </p>
              <a
                href={makeWhatsAppLink(`${selected.label} (${selectedGender})`)}
                className="btn btn--primary btn--block"
              >
                <MessageCircle className="icon" />
                Pedir pelo WhatsApp
              </a>
              <p className="order-box__note">ou ligue 14 99798-2105</p>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container container--narrow faq">
          <h2 className="faq__title">Dúvidas frequentes</h2>
          <div className="faq__list">
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq__item">
                <h3 className="faq__q">{q}</h3>
                <p className="faq__a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="container site-footer">
        <p className="site-footer__name">Assembleia de Deus Ministério Belém — Pq. Ipiranga</p>
        <p className="site-footer__address">
          Rua João Capioto, 80, Pq. Ipiranga, Tupã/SP · 2 a 4 de outubro de 2026
        </p>
        <div className="site-footer__actions">
          <a href={WHATSAPP} className="btn btn--ghost">
            Pedir pelo WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
