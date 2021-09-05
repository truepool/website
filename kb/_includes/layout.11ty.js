exports.render = (data) => `
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Satisfy&display=swap">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>

    <link rel="stylesheet" href="/_assets/markdown-theme.css">
    <link rel="stylesheet" href="/_assets/ix-tp-kb.css">
  </head>
  <body>
    <header>
      <section>
        <a
            href="https://truepool.io"
            target="_blank"
            height="32px"
        >
            <img
                class="logo"
                src="/_assets/img/logo-with-text.png"
            >
        </a>


        <div class="header-links">
            <a class="header-link" href="https://truepool.io/news">News</p>
            <a class="header-link" href="https://truepool.io/stats">Stats</p>
            <a class="header-link" href="https://truepool.io/farmers">Farmers</p>
            <a class="header-link" href="https://truepool.io/kb/v1/">Knowledge Base</p>
            <button class="join">
                <a
                    href="https://truepool.io/pages/join-truepool"
                    target="_blank"
                >
                    Join
                </a>
            </button>
        </div>
    </section>
  </header>

    <section class="content">
      <a href="/" style="margin-bottom: var(--space-md)">KNOWLEDGE BASE</a>
      ${data.content}
    </section>
  </body>
</html>
`;
