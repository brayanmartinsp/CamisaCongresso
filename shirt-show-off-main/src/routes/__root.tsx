import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="state-page">
      <div>
        <h1 className="state-page__code">404</h1>
        <h2 className="state-page__title">Página não encontrada</h2>
        <p className="state-page__text">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="state-page__actions">
          <Link to="/" className="btn btn--primary">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="state-page">
      <div>
        <h1 className="state-page__title">Esta página não carregou</h1>
        <p className="state-page__text">
          Algo deu errado. Tente atualizar ou volte para o início.
        </p>
        <div className="state-page__actions">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn--primary"
          >
            Tentar novamente
          </button>
          <a href="/" className="btn btn--ghost">
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Não Mais Escravos, Somos Filhos" },
      { name: "description", content: "Camisa oficial do 29º Congresso Unificado — Gálatas 4.7." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Não Mais Escravos, Somos Filhos" },
      { property: "og:description", content: "Camisa oficial do 29º Congresso Unificado — Gálatas 4.7." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
