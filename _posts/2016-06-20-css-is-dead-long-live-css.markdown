---
layout: post
title:  "CSS is dead - Long live CSS"
description: "Um breve relato e algumas opiniões sobre o futuro do CSS"
date:   2016-06-20 06:17:58 -0300
categories: blog
---

CSS, um dos pilares da web, quem nunca teve algum problema com ele que atire a primeira pedra. Este ano o CSS completa 20 anos, (17 de Dezembro), e para comemorar (ou não) escrevo este post onde relato minha breve experiência com o mesmo.

Não sou nenhum dinossauro neste mundo de web, comecei brincando com blogspot em 2009, minha ideia era fazer um blog pois todo mundo tinha um blog e era "cool", anyway, o objetivo deste post (como já falei no paragráfo anterior) é outro, então, voltando ao assunto.

### CSS.

Ok, na época que comecei a brincar com web o CSS já estava um pouco mais estabilizado, (in)felizmente não peguei a época onde as tabelas comandavam os layouts, entre outras coisas...

### Less

Meu primeiro contato com Less foi através do blog [Loop Infinito](http://loopinfinito.com.br/). Lembro que fuçando o site encontrei um projeto de tradução do site do Less.

> ...

### Sass

Minha mudança para o lado Sass da força ocorreu por conta de 2 fatores: Compass e Rails.
Percebi que estavam falando muito do tal do Compass e então descobri que era um framework para o Sass. Como estava num processo de transição do PHP para o Rails, acabei descobrindo todo o poder do Sass. Engraçado que muito se fala (e critica) hoje sobre escrever CSS no JS, mas vale lembrar que já escrevemos muito CSS no Ruby!

> Codekit
> Grunt

### Pré-conceito com o Stylus

Nunca gostei muito do Stylus, principalmente pela liberdade excessiva (?).

### Adeus pré-processadores

Hoje, com raras exceções, não uso mais pré-processedores. Os motivos são claros:

* Apenas syntax-sugar
* Não resolvem problemas mais importantes, tais qual escalabilidade

### PostCSS
> <3
> String

### CSS Modules
> <3
Sass/Stylus/Less ajudam a escrever CSS mais facilmente
CSS Modules ajuda escrever CSS escalável

### CSS4? Não!
> <3

### Futuro!
> Far beyond...
> https://drafts.csswg.org/cssom/
> Make CSS great again

```css
ul {
  --itemColor: #08C;
}

ol {
  --itemColor: #655;
}

/* Adivinha o que acontece?! */
li {
  color: var(--itemColor);
}
```
