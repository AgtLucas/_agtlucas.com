---
layout: post
title:  "CSS is dead - Long live (post)CSS"
description: "Make CSS great again!"
date:   2016-06-25 06:17:58 -0300
categories: blog
---

Sejamos sinceros, "escrever" CSS é fácil se compararmos o quão difícil é manter e escalar o mesmo, mas felizmente temos muitas opções para tornar estas tarefas um pouco mais fáceis.

> O objetivo deste post é resumir de forma bem resumida o que é PostCSS.

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

Resumindo os pré-processadores CSS: Syntax sugar e template language. Os pré-processadores tornaram a tarefa de escrever CSS muito mais fácil e ainda adicinou alguns "poderes" como loops, mixins, funções e mais um monte de coisas que raramente as pessoas usam para valer em projetos, mas que deveriam.

## PostCSS

Ok, ao ponto principal do post, PostCSS.

![Inside PostCSS](/img/go-on.gif)

> **PostCSS nada mais é do que uma ferramenta que nos permite transformar CSS usando JS.**

Conforme relatei acima, PostCSS por padrão é muito útil, porém não faz nada, pois o responsável pela transformação são os plugins e, como você pode imaginar, [temos muitos plugins para os mais variados tipos de tarefas](http://postcss.parts/), existe até [plugin para resolver problemas com plugins](https://github.com/postcss/postcss-use). 🤔

Basicamente uma chamada PostCSS é composta pelo Parser e pelo CSS Stringifier, conforme imagem abaixo:

![Inside PostCSS](/img/inside-postcss.png)

Em outras palavras, o Parser recebe uma string de CSS e transforma esta string em uma AST (Abstract Syntax Tree), enquanto que o CSS Stringifier faz justamente o contrário, ele transforma a AST (já modificada pelos plugins) em uma string CSS.

Deu pra perceber o quão poderoso isto é? Podemos fazer basicamente qualquer coisa com o CSS manipulando-o usando JS.

Mesmo com todo este poder, PostCSS é rápido, muito rápido! Veja o benchmark abaixo:

```css
/* Results on node 5.0.0, Fedora 22, Intel 5Y70, 8 GB RAM and SSD::
PostCSS:   40 ms
Rework:    75 ms   (1.9 times slower)
libsass:   76 ms   (1.9 times slower)
Less:      147 ms  (3.7 times slower)
Stylus:    166 ms  (4.1 times slower)
Stylecow:  258 ms  (6.4 times slower)
Ruby Sass: 1042 ms (26.0 times slower)
*/
```

Entretando, podemos notar que com exceção da versão em Ruby do compilador do Sass, todas as demais são rápidas o suficiente. O benchmark completo pode ser visto [aqui](https://github.com/postcss/benchmark).

Como este post é apenas um breve resumo, não vou entrar em detalhes de configurações, isto fica para o próximo post que será sobre **CSS Modules e ReactJS**, mas apenas adiantando um pouco o assunto...

## cssnext

> Não, não teremos CSS4 (assim como não temos CSS3, e sim CSS com seletores level 3).

cssnext nos permite usar novas features do CSS (ex.: variáveis) hoje, ou seja, é como o Babel, só que "do css..."

Considere:

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

No exemplo acima, declaramos uma variável nativa do CSS e atribuímos 2 valores diferentes em 2 escopos diferentes; `ul` e `ol`. Todo `li` que estiver no escopo do `ul` terá uma cor azul e aqueles que estiverem no escopo do `ol` terão uma cor marrom. Bacana, não?

Apesar da sintaxe feia, variáveis nativas no CSS vão muito além do que atribuição de valores, se quiser saber mais recomendo ler [este post escrito pela Diéssica](https://diessi.ca/blog/a-cascata-das-variaveis-do-css/).

Demais features do cssnext => [http://cssnext.io/features/](http://cssnext.io/features/).

![Not bad](/img/not-bad.gif)

## CSS Modules

CSS Modules surgiu da necessidade de algum mecanismo de escopo no CSS.

> [Existe um draft sobre escopo nativo, porém ainda não passa de draft](https://www.w3.org/TR/css-scoping-1/).

Com CSS Modules, tudo tem seu próprio escopo, ou seja local, dito isto não precisamos nos preocupar com nomes & prefixos de classes & conflitos.

Considere os seguintes componente **Foo**:

```js
// Foo.js
import React, { Component } from 'react'
import styles from './foo.css'

class Foo extends Component {
  render () {
    return (
      <div className={styles.title}>Foo</div>
    )
  }
}
```

```css
/* Foo.css */
.title {
  color: #666;
}
```

Mesmo usando uma classe com nome tão comum como `title` não terei problemas de conflitos pois quando compilado, meu componente vai ter uma classe "escopada" com uma hash, algo do tipo:

```html
<div class="_6kldcs">Foo</div>
```

![Not bad](/img/clap-kim.gif)

E caso eu tivesse um componente **Bar** com a mesma estrutura e mesmo nome de classe, a hash seria diferente.

No próximo post explicarei em detalhes como funciona o escopo local e global no CSS Modules.

### Continua no próximo episódio.
