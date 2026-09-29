import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LessonVideo } from "@/components/LessonVideo";
import { ArrowRight, CheckCircle2, Gift, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aula bônus | Diagnóstico de painel automotivo" },
      {
        name: "description",
        content:
          "Aula especial prática sobre diagnóstico e solução de um problema no painel de um carro.",
      },
      { property: "og:title", content: "Aula bônus de diagnóstico automotivo" },
      {
        property: "og:description",
        content: "Veja na prática como um problema no painel deste carro foi resolvido.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [hasPlayed, setHasPlayed] = useState(false);
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl items-stretch lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
          <div className="mb-10 flex items-start gap-3 rounded-xl border border-success/20 bg-success-soft p-5 shadow-[0_12px_32px_-12px_var(--success)] sm:gap-4 sm:p-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Gift aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-success">
                Um bônus preparado para você
              </p>
              <p className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                Aula especial para você dominar painel
              </p>
            </div>
          </div>

          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl">
            Veja como o problema no{" "}
            <span className="block text-[1.4em] leading-none text-success">PAINEL</span> deste carro
            foi <span className="block text-[1.4em] leading-none text-success">RESOLVIDO</span> na
            prática
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Preparei uma aula bônus direta ao ponto para você acompanhar, na prática, o diagnóstico
            e a solução de um defeito real.
          </p>

          <div className="mt-8 grid max-w-xl gap-3 border-l-4 border-success bg-success-soft px-5 py-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-success" />
              <p className="font-semibold text-foreground">Problema do painel identificado</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-success" />
              <p className="font-semibold text-foreground">Solução mostrada passo a passo</p>
            </div>
          </div>

          <a
            href="#aula"
            className="mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-workshop transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Assistir à aula agora
            <ArrowRight aria-hidden="true" className="size-5" />
          </a>
        </div>

        <div
          id="aula"
          className="relative flex flex-col justify-center gap-6 bg-video p-4 sm:p-8 lg:p-10 xl:p-14"
        >
          <div className="w-full overflow-hidden rounded-md border border-video-border bg-video-surface shadow-video">
            <div className="flex items-center justify-between gap-3 border-b border-video-border px-4 py-3 text-video-foreground">
              <div className="flex items-center gap-2">
                <PlayCircle aria-hidden="true" className="size-4 text-success-bright" />
                <span className="font-display text-xs font-bold uppercase">
                  Aula bônus liberada
                </span>
              </div>
              <span className="text-xs font-medium text-success-bright">Assista agora</span>
            </div>
            <LessonVideo onPlay={() => setHasPlayed(true)} />
          </div>
          {hasPlayed && (
            <div
              className="w-full rounded-md border border-success-bright/30 bg-background p-5 shadow-video sm:p-7"
              aria-label="Oferta do curso"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-display text-lg font-bold uppercase text-success">
                  Valor promocional
                </p>
                <span className="rounded-full bg-success-soft px-3 py-1 text-xs font-bold uppercase text-success">
                  Últimas 3 vagas
                </span>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                De <s>R$ 1.597,00</s> por
              </p>
              <p className="mt-1 font-display text-5xl font-bold leading-tight text-foreground">
                <span className="text-3xl">12x de</span> R$ 103,21
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                no cartão de crédito{" "}
                <span className="whitespace-nowrap">(total de R$ 1.238,52)</span>
              </p>
              <p className="mt-3 text-lg text-foreground">
                ou <strong>R$ 997,00 no Pix</strong>
              </p>
              <a
                href="https://pay.kiwify.com.br/4787ZmG?afid=FvwvF4ul"
                className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-primary px-5 py-4 text-center font-bold text-primary-foreground shadow-workshop transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Quero dominar painel hoje
                <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
              </a>
              <div className="mt-7 border-t border-border pt-6">
                <h2 className="font-display text-2xl font-bold uppercase text-foreground">
                  O melhor curso do Brasil, tudo incluso:
                </h2>
                <ul className="mt-5 grid gap-4">
                  {[
                    "Mais de 80 aulas práticas na plataforma exclusiva",
                    "Grupo de comunidade de crescimento no WhatsApp junto com o professor",
                    "Acesso vitalício: só paga uma única vez",
                    "Acesso exclusivo aos links dos fornecedores que o professor usa",
                    "Acesso ao banco de arquivos das montadoras com pinagens",
                  ].map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-foreground"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-success"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
