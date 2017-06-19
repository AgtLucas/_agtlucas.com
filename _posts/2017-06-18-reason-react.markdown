---
layout: post
title:  "Reason, ReasonReact"
description: "Afinal, o que é Reason e ReasonReact?"
date:   2017-06-18 08:17:58 +0200
categories: blog
comments: true
language: pt-BR
---

Nos últimos meses o nome Reason tem ganhado força na comunidade JavaScript, principalmente após a última ReactConf (2017), onde [Cheng Lou](https://twitter.com/_chenglou) revelou o ReasonReact; bindings do ReactJS para o Reason. Na ocasião, também foi citado que estão convertendo o [messenger.com](https://messenger.com) para Reason/ReasonReact.

Mas afinal, o que diabos é Reason/ReasonReact? OCaml? 🤔

## OCaml

## Reason

![Reason](/img/reason.png)

## ReasonReact

## Exemplo

```ocaml
let component = ReasonReact.statelessComponent "App";

let make _ => {
  ...component,
  render: fun () _self => {
    <div> (ReasonReact.stringToElement "Hello, ReasonReact!") </div>
  }
};
```

## Exemplo - children

```ocaml
let component = ReasonReact.statelessComponent "App";

let make children => {
  ...component,
  render: fun () _self => {
    <div> children </div>
  }
};
```

## Exemplo - state

```ocaml
type state = { name: string };

let component = ReasonReact.statefulComponent "App";

let make _children => {
  ...component,
  initialState: fun () => {
    name: "Reason"
  },
  render: fun () _self => {
    <div> (ReasonReact.stringToElement "Hello, " ^ name) </div>
  }
};
```

## Exemplo - props

```ocaml
let component = ReasonReact.statelessComponent "App";

let make ::name _children => {
  ...component,
  render: fun () _self => {
    <div> (ReasonReact.stringToElement "Hello, " ^ name) </div>
  }
};
```

## Exemplo - callback

```ocaml
let component = ReasonReact.statelessComponent "App";

let make _ => {
  ...component,
  render: fun () _self => {
    <div> (ReasonReact.stringToElement "Hello, ReasonReact!") </div>
  }
};
```

## Exemplo - input value

```ocaml
type state = { name: string };

let component = ReasonReact.statefulComponent "App";

let currentTargetDom e => ReactDOMRe.domElementToObj @@ ReactEventRe.Form.currentTarget e;
let updateName event state _ => ReasonReact.Update { ...state, name: currentTargetDom(event) };

let make _ => {
  ...component,
  initialState: fun () => {
    name: "Lucas"
  },
  render: fun state self => {
    <input _type="text" placeholder="Your name" onChange=(self.update updateName) />
    <div> (ReasonReact.stringToElement state.name) </div>
  }
};
```

## Interoperabilidade

## Devo usar ReasonReact?

Eu penso que ainda não, a api está em constantes mudanças, mas aconselho você a pelo menos testar. Confira também a resposta do Cheng Lou para esta pergunta no video abaixo:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Should you start using <a href="https://twitter.com/reasonml">@reasonml</a> today in your project? <a href="https://twitter.com/_chenglou">@_chenglou</a> answers. Whole Q&amp;A&#39;s here <a href="https://t.co/hclSduwFwx">https://t.co/hclSduwFwx</a> <a href="https://t.co/eAViwyglJR">pic.twitter.com/eAViwyglJR</a></p>&mdash; react-europe (@ReactEurope) <a href="https://twitter.com/ReactEurope/status/872171762099859458">June 6, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">How is Facebook using <a href="https://twitter.com/reasonml">@reasonml</a> and how is it going? <a href="https://twitter.com/_chenglou">@_chenglou</a> answers again. <a href="https://t.co/NyeAOfxkFI">pic.twitter.com/NyeAOfxkFI</a></p>&mdash; react-europe (@ReactEurope) <a href="https://twitter.com/ReactEurope/status/872187305985015808">June 6, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
