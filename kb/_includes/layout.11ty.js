exports.render = (data) => `
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
  </head>
  <body>
    ${data.content}

    <ul>
      ${data.global.articles.map(a => `<li>${a}</li>`)}    
    </ul>
  </body>
</html>
`;
