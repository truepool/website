exports.render = (data) => `
<!doctype html>
<html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Satisfy&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Satisfy&display=swap">
    </noscript>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>

    <link rel="stylesheet" href="/_assets/ix-tp-kb.css">
  </head>
  <body>
    <ul>
      ${data.global.articles.map((a) => `<li>${a}</li>`).join('\n')}    
    </ul>
    ${data.content}
  </body>
</html>
`;
