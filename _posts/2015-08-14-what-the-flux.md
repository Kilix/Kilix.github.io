---
layout: post
title:  "What the flux ?"
description: "Un petit topo sur l'évolution de flux à travers les millénaires"
header-img: "img/whattheflux.jpg"
date:   2015-08-14 17:00:00
author: Stéphane Montlouis-Calixte
category: frontend
tags: [react]
---


Chez Kilix, nous avons récemment choisi la librairie [React](http://facebook.github.io/react/) pour la refonte du CRM d’[Extia](https://medium.com/@bulby97/je-vais-dans-cet-article-detailler-la-facon-dont-le-site-extia-v2-a-ete-developpe-et-ce-dun-3bcf7946dbc3), Vamos. Je ne vais pas cacher mon excitation face à une technologie telle que React. Cela nous ouvre des possibilités jusqu’alors peu explorées en Javascript, telles que la programmation fonctionnelle et donc le principe d'immutabilité. Une fois le changement de paradigme maîtrisé, c’est un vrai plaisir de coder en React.

React n’est que la partie vue de l’application, un peu comme le V de MVC, et de ce fait, nous sommes livrés à nous même pour l’architecture de l’application. En effet un des problèmes majeurs avec une librairie UI comme React, ce sont les mille et une façons de structurer son code et de gérer l’architecture applicative. On se retrouve rapidement perdu dans les méandres d’Internet, écumant chaque article afin de trouver la meilleure façon d’aborder une problématique.  J’ai eu l’occasion de faire un workshop React que vous pourrez retrouver sur [slides.com](http://slides.com/bulby97/workshop-reactnstuff).

<!--more-->

-------------------------

Premiers pas de Flux
------------------------

Cela nous amène donc à Flux, qui est l’architecture d’application utilisée chez Facebook.
Attention, Flux n’est pas une librairie, mais un pattern. Aujourd’hui il y a près d’une vingtaine d’implémentations Flux. Je ne vais pas rentrer en profondeur dans ce qui a amené Facebook à créér ce pattern, ni détailler l'obsolescence du modèle MVC (*troll spotted*), mais plutôt faire un topo sur l’évolution de flux, d’après mon observation, depuis sa création jusqu’à aujourd’hui.

On peut résumer Flux par ce schéma ci-dessous :

![image alt text](https://cask.scotch.io/2014/10/V70cSEC.png)

Un **store** gère l’ensemble de données et la logique métier d’un domaine de l’application.

1. Quand l’utilisateur interagit avec l’application, la **view** lance une **action** qui passe à travers le **dispatcher**.
2. Le **dispatcher** émet **l’action** à tous les **stores** contenant les data et la logique de l’application.
3. Ces **stores** modifient les données et mettent à jour à leur tour les **views** dépendantes.
5. Repeat

>**Views -> Actions -> Stores -> Views**

C’est du flux d’informations unidirectionnel, aussi simple que ça :).

Ici, la seule et unique façon de modifier les states des **stores** est d’émettre des **actions**. Pour plus d’infos, vous pouvez lire [l’article de scotch.io](https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture) et ce schéma [très détaillé](http://danmaz74.me/wp-content/uploads/2015/07/flux-architecture-visual-cheatsheet-full.png).

Pour rappel, pour informer React que des data ont changé, on appelle la méthode `setState(data)` du composant. Cette méthode merge data dans `this.state`, et render à nouveau le composant avec le state mis à jour. Le pattern le plus utilisé est d’avoir des **composants parents** qui "écoutent" le **store** et récupèrent les data, se re-render et passent leur **state** aux **composants fils** via des **props**. Les composants qui écoutent le store sont appelés des **controller-views ou stateful components**, et les composants n’utilisant que des **props** comme données sont appelés simplement **views, stateless components, ou dumb components.**

Vous l’aurez compris, le but du jeu est d’avoir le moins de stateful components afin d’isoler les sources de changement de state (ou quelque chose du genre :v) .

![image alt text](https://cask.scotch.io/2014/10/4tBnC0e.png)

>*A ce stade, nous avons donc :*

- Plusieurs stores contenant des datas
- Plusieurs stateful components
- [x] "**Une seule et unique façon de modifier les states: en émettant des actions**"



----------------------

Le state centralisé
-------------------

Dans le but d’optimiser au maximum le flux de données unidirectionnel et de tirer profit de la programmation fonctionnelle dans React, l’idée de centraliser le state de toute l’application dans un seul atome a naturellement fait surface. Le concept d’un state global pour l’application toute entière nous vient d’[Om, une interface ClojureScript pour React créée par David Nolen.](https://github.com/omcljs/om)

React est basé sur le concept de flux de données unidirectionnel. Un changement se produit sur de la data d’une quelconque façon, et les composants dans l’application traduisent cette data en une nouvelle représentation du DOM. C’est la raison pour laquelle le modèle conceptuel de React est si bien approprié à la programmation fonctionnelle, et donc à [ClojureScript](https://github.com/clojure/clojurescript) et ses données immutables.

`Component(data) => UI`

Pour résumer, il y a de la donnée d’un côté, et une série de fonctions transforme cette donnée en DOM de l’autre côté. On a donc toute notre application qui se render à nouveau, mais en réalité, et ce par souci de performance, seuls les composants dont les props auront été modifiés seront re-render (voir le [purerendermixin](https://facebook.github.io/react/docs/pure-render-mixin.html) et le [HOC (High Order Component) en ES6](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)).

On se retrouve donc avec un seul state - *qu'on appelera **appState**, pour application State* - , une sorte d’arbre JSON reflétant toute l’application, et (idéalement) un seul stateful component, c’est à dire un seul *tronc* qui passe ses informations à toute l’application - *aux branches* - via des props.

Cela change **énormément** du modèle UI traditionnel ou plusieurs composants discutent entre eux et gèrent de l’information, pour ensuite combiner tous les states dans l’interface elle-même.

###Une single source of truth. Un seul state. :’). <br>C’est un changement de paradigme tellement énorme.

![enter image description here](http://media.topito.com/wp-content/uploads/2014/03/EMrknJP.gif)
<center>[Ou encore ici :D](https://www.youtube.com/watch?v=9CS7j5I6aOc)</center>

--------------------

Avec un state centralisé, qu’en est-il des stores ? Une solution serait d’avoir un store central contenant l’appState. Toutes nos features seraient alors gérées dans ce store. Cette solution, qui parait à première vue idéale serait en fait assez bordélique. On perd le découplage par feature que l’on avait dans la première implémentation de Flux.

## Stateless stores & Cursors

Dans l’implémentation originale de Facebook, les stores ont plusieurs utilités :

- Gérer le state,
- Muter le state avec les données reçues
- Emettre les changements.

Maintenant que nous traitons le state dans un seul objet, nous n’avons plus besoin de le gérer dans un store, d’où l’appellation "Stateless store". Il ne nous reste plus qu’à muter les données et émettre le changement pour chaque modification de l’appState.

####Afin de modifier le state depuis nos stateless stores, Om a créé le concept de [cursors](https://github.com/omcljs/om/wiki/Cursors).

Les cursors sont des sous-atomes de l’application state qui restent synchronisés avec l'atome principal. Les cursors contiennent des informations qui déterminent leur emplacement dans l’application State. De ce fait, lorsque l’on modifie un cursor, on modifie également l’application State.

![enter image description here](http://blog.getprismatic.com/content/images/2014/Jun/Cursor-example.png)

---------------------
Les cursors sont également très intéressants pour les composants. En temps normal, sans cursors, on passerait l’application state dans l’arbre de composants via des props. Une des conséquences est que la hiérarchie des composants est extrêmement couplée avec la *forme* de l’application state. Certains composants seront utilisées comme des passerelles, afin de passer le state aux composants les plus bas. Ce qui n’est pas idéal, car certaines parties du state sont exposées à des composants qui n’ont en pas besoin.

Avec les cursors, les dépendances des composants sont spécifiées dans le composant. Les cursors sont des boîtes noires dans l’appState : le composant lui même ne sait rien de l’appState. On a une flexibilité totale pour gérer les dépendances du composant sans avoir à se soucier des données passés au niveau plus haut.

####Sans cursors
~~~ html
<App>
  <Component propsToPass={name}>
    <Component2 propsToPass={name}>
      <Component3 propsToPass={name}>
        <Child name={propsToPass}/>
      </Component3>
    </Component2>
  </Component>
</App>
~~~

####Avec cursors
~~~ html
<App>
  <Component>
    <Component2>
      <Component3>
        <Child/>
      </Component3>
    </Component2>
  </Component>
</App>
//Dans child.react.js il suffira d'importer le cursor
~~~
----------------


Toutes ces idées en ClojureScript ont inspiré quelques libs en Javascript. On notera principalement [Omniscient.js](http://omniscientjs.github.io/), [Baobab.js](https://github.com/Yomguithereal/baobab), [Morearty](https://github.com/moreartyjs/moreartyjs) et [React Cursors](https://github.com/dustingetz/react-cursor).

####Examples de cursors dans un store
~~~ javascript
export const dispatchToken = register(({action, data}) => {

  switch (action) {
    case actions.addHundredTodos:
    todosCursor(todos => {
      return todos.update('list', list => list.withMutations(list => {
        list.push(...getRandomTodos(100));
      }));
    });
    break;

    case actions.clearAll:
    todosCursor(todos => {
      return todos
      .update('list', list => list.clear())
    });
    break;

    case actions.deleteTodo:
    todosCursor(todos => {
      const todo = data;
      return todos.update('list', list => list.delete(list.indexOf(todo)));
    });
    break;

  }

});
~~~
Vous pouvez voir une implémentation des cursors sur l'ancienne version d'[Este.js](https://github.com/este/este/blob/cceb94f0aa77d05902b743c6c5a5dc3fe998fe92/src/client/todos/store.js).


>*A ce stade, nous avons donc :*

- Des stateless stores
- Un state centralisé (appState)
- Des cursors modifiant l'appState
- Un stateful component, la racine
- [x] **"Une seule et unique façon de modifier les states: en émettant des actions"**
- [x] **"Le state de toute l’application stocké dans un seul objet."**


---------------------

Les reducers
---------------

En javascript le code pour mettre à jour via les cursors est assez verbeux. De plus les stores sont assez difficiles (voire impossibles) à tester sans hack.

Un nouveau pattern a fait surface récemment, et il a été mis en lumière par [Dan Abramov](https://github.com/gaearon) lors de la React Europe, ce sont **[les reducers](http://gaearon.github.io/redux/docs/basics/Reducers.html)**. J’ai d’abord eu connaissance de ce pattern sur la devstack que nous utilisons aujourd’hui sur Vamos, créée par [Daniel Steigerwald](https://github.com/steida). Un des gros avantages de ce pattern par rapport aux cursors est sa simplicité de compréhension et de mise en place. Les reducers sont des fonctions pures prenant en paramètres le state précédent et l’action, puis renvoient un nouveau state modifié, exactement comme la fonction [\[\].reduce() sur les tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

`(previousState, action) => newState`

####Implémentation sur Este.js
~~~ javascript
export default function(state = initialState, action, payload) {
  if (!action) return revive(state);

  switch (action) {

    case actions.addHundredTodos:
    return state.update('list', list => list.push(...getRandomTodos(100)));

    case actions.clearAll:
    return state
    .update('list', list => list.clear())

    case actions.deleteTodo:
    return state.update('list', list => list.delete(list.indexOf(payload)));
  }

  return state;
}
~~~


>*A ce stade, nous avons donc :*

- Des stateless stores/reducers sous formes de fonctiones pures
- Un state centralisé (appState)
- Un stateful component, la racine
- [x] "**Une seule et unique façon de modifier les states: en émettant des actions**"
- [x] "**Le state de toute l’application stocké dans un seul objet.**"
- [x] "**Les mutations représentées par des fonctions pures.**"

Les trois best-practices ci-dessus sont les trois principes fondamentaux de [Redux](https://github.com/gaearon/redux), la librairie la plus connue à ce jour utilisant les reducers.


Personnellement, je trouve cela assez dommage de perdre l’avantage que les cursors nous apportaient au niveau des composants, d'autres au contraire trouvent cette pratique plutôt [explicite](https://github.com/este/este#why-este-is-pure-and-why-we-have-to-pass-data-through-props). Malgré tout il y a un moyen moins verbeux de passer les props dans l’arbre de composants en utilisant [l'opérateur spread en ES6](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition) :

~~~
<App>
  <Component {...this.props}>
    <Component2 {...this.props}>
      <Component3  {...this.props}>
        <Child name={propsToPass}/>
      </Component3>
    </Component2>
  </Component>
</App>
~~~


Conclusion
--------------


Quelques lignes plus haut, j’ai parlé de la devstack que nous utilisons sur Vamos. Je vous laisse jeter un oeil à [Este.js](https://github.com/este/este), qui à mes yeux, est aujourd’hui le meilleur starter kit pour construire des apps isomorphiques React/Flux avec les best practices existantes. D'ailleurs il y aura bientôt un nouvel article sur Este.js, keep in touch ;).
