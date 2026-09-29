import { useEffect, useRef } from "react";

type Player = { destroy: () => void };
type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      host: string;
      videoId: string;
      playerVars: { origin: string; rel: number; playsinline: number };
      events: { onStateChange: (event: { data: number }) => void };
    },
  ) => Player;
};

let apiPromise: Promise<YouTubeApi> | undefined;

function loadYouTubeApi() {
  const youtubeWindow = window as typeof window & {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  };
  if (youtubeWindow.YT?.Player) return Promise.resolve(youtubeWindow.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const previousCallback = youtubeWindow.onYouTubeIframeAPIReady;
      youtubeWindow.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        if (youtubeWindow.YT) resolve(youtubeWindow.YT);
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.onerror = () => {
        apiPromise = undefined;
        script.remove();
        reject(new Error("Não foi possível carregar a API do vídeo."));
      };
      document.head.appendChild(script);
    });
  }
  return apiPromise;
}

export function LessonVideo({ onPlay }: { onPlay: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const onPlayRef = useRef(onPlay);
  useEffect(() => {
    onPlayRef.current = onPlay;
  }, [onPlay]);

  useEffect(() => {
    let disposed = false;
    let player: Player | undefined;
    loadYouTubeApi()
      .then((api) => {
        if (disposed || !container.current) return;
        const iframe = container.current.querySelector("iframe");
        if (!iframe) return;
        player = new api.Player(iframe, {
          host: "https://www.youtube-nocookie.com",
          videoId: "F9-eFy0AoMs",
          playerVars: { origin: window.location.origin, rel: 0, playsinline: 1 },
          events: {
            onStateChange: ({ data }) => {
              if (!disposed && data === 1) onPlayRef.current();
            },
          },
        });
      })
      .catch(() => {
        // The iframe remains usable if the external API cannot be loaded.
      });
    return () => {
      disposed = true;
      player?.destroy();
    };
  }, []);

  return (
    <div
      ref={container}
      className="aspect-video min-h-[200px] w-full [&_iframe]:h-full [&_iframe]:w-full"
    >
      <iframe
        src="https://www.youtube-nocookie.com/embed/F9-eFy0AoMs?rel=0&enablejsapi=1&playsinline=1"
        title="Aula bônus: diagnóstico de problema no painel"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
