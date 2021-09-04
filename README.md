```
                                                                             
 _|_|_|_|_|                                                              _|  
     _|      _|  _|_|  _|    _|    _|_|    _|_|_|      _|_|      _|_|    _|  
     _|      _|_|      _|    _|  _|_|_|_|  _|    _|  _|    _|  _|    _|  _|  
     _|      _|        _|    _|  _|        _|    _|  _|    _|  _|    _|  _|  
     _|      _|          _|_|_|    _|_|_|  _|_|_|      _|_|      _|_|    _|  
                                           _|                                
                                           _|                                
```

<p align="center">
 <a href="https://discord.com/invite/hWwAfGFyBz"><img alt="Chat Now" src="https://badgen.net/discord/members/Q3St5fPETd/?icon=discord&label=Join%20the%20TruePool%20Community" /></a>
</p>

# Setup
- Have node setup, for example with https://github.com/nvm-sh/nvm.
- `npm i`
- `npm run start`

Website will be available at http://localhost

# Contributing

## Adding articles

Pages can be added in markdown format.
To do this: 
1. Go to `src/content/kb` and create a new markdown file.
2. Open `src/content/content-directory.ts` and add your page there. Url is responsible for both the address page will be available at and path tells where markdown file can be found.

## Translating articles

You can help us by translating one of the articles in your language:

1. Go to `src/content/kb` and open the folder corresponding to the article you'll be translating.
2. Create a new file appending language code to end of the filename, e.g. `how-to-use-chia-on-truenas.zh.md`.
3. Translate the article.
4. Open `src/content/content-directory.ts` and add language code to `extraLanguages` for the corresponding article.

## Adding code
Please see our [github page](https://github.com/truepool/website/issues) for list of open issues.

You can also join #web-development channel on [our Discord server.](https://discord.gg/rkew3ESE5K).
