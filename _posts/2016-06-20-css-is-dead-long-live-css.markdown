---
layout: post
title:  "CSS is dead - Long live (post)CSS"
description: "Make CSS great again!"
date:   2016-06-25 06:17:58 -0300
categories: blog
---

Sejamos sinceros, "escrever" CSS é fácil se compararmos o quão difícil é manter e escalar o mesmo em um projeto grande, mas felizmente temos muitas opções para tornar estas tarefas pelo menos mais fáceis.

**Antes de prosseguir com o post, por determinação da W3C devemos sempre postar o gif abaixo quando o papo é CSS.**

![CSS...](/img/css.gif)

Bom, como eu ia dizendo, hoje temos várias opções para nos facilitar a vida, infelizmente o tempo vem nos provando que nenhuma delas é adequada e na verdade, cabe a você e sua equipe decidirem qual é a que melhor atende as vossas necessidades.

Recentemente abandonei os pré-processadores e migrei para o [PostCSS](http://postcss.org/), uma ferramenta que por padrão é muito útil e que não faz "nada"...

Antes de falarmos sobre PostCSS, vamos rever algumas soluções e metodologias que foram surgindo ao longo dos últimos anos e que foi moldando como escrevemos CSS atualmente.

![Oh boy...](/img/oh-boy.gif)

## Metodologias

Seja ela [SUIT CSS](https://suitcss.github.io/), [BEM](https://en.bem.info/), [OOCSS](http://oocss.org/), [SMACSS](https://smacss.com/), [...] entre tantas outras, todas elas possuem pontos positivos e negativos, e como falei acima, cabe a você decidir.

De uma maneira geral, todas cumprem o que prometem, se fosse para escolher uma eu optaria pelo SUIT CSS que tem nas suas raízes o BEM.

## Pré-processadores

Resumindo os pré-processadores CSS: Syntax sugar e template language. Os pré-processadores tornaram a tarefa de escrever CSS muito mais fácil e ainda adicinou alguns "poderes" como loops de repetição, mixins, funções e mais um monte de coisas que raramente as pessoas usam para valer em projetos, mas que deveriam.

## PostCSS

Ok, ao ponto principal do artigo, PostCSS.

PostCSS nada mais é do que uma ferramenta que nos permite transformar CSS usando JS. Simples e direto. Conforme relatei acima, PostCSS por padrão é muito útil, porém não faz nada, pois o responsável pela transformação são os plugins e, como você pode imaginar, [temos muitos plugins para os mais variados tipos de tarefas](http://postcss.parts/), existe até [plugin para resolver problemas com plugins](https://github.com/postcss/postcss-use). 🤔

Basicamente uma chamada PostCSS é composta pelo Parser e pelo CSS Stringifier, conforme imagem abaixo:

![Inside PostCSS](/img/inside-postcss.png)

Em outras palavras, o Parser recebe uma string de CSS e transforma esta string em uma AST (Abstract Syntax Tree), enquanto que o CSS Stringifier faz justamente o contrário, ele transforma a AST (já modificada pelos plugins) em uma string CSS. Simples assim.

Porém como quase tudo nesta vida é mutável,

Dito isto, este post perde o sentido, ora, se não existe bala de prata, por qual motivo devo continuar lendo se nenhuma solução é perfeita, não é mesmo? Não, não é mesmo! Não

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
