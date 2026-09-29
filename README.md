# Welcome to your Lovable project

## Publicação no GitHub e na Vercel

Repositório: https://github.com/agenciaprogrex/Aula-bonus-Painel

Importe esse repositório na Vercel e use `main` como branch de produção.
O projeto usa TanStack Start com Nitro e a configuração do Lovable, que detecta
a Vercel automaticamente. Mantenha os comandos de instalação e build detectados
pela plataforma e a raiz do projeto em `./`.

Após a conexão, cada push em `main` dispara uma nova publicação. Alterações
feitas apenas nos arquivos locais ainda precisam de commit e push. O fluxo
autorizado para concluir as edições neste workspace está em `AGENTS.md`.

Para validar localmente a saída da Vercel no PowerShell:

```powershell
$env:NITRO_PRESET = 'vercel'
npm run build
```

Os arquivos gerados em `.vercel/` e as credenciais locais não entram no Git.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
