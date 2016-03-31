---
layout: post
title:  "Ivre, il fait un site web SEO-friendly avec React"
description: "Ou quelles sont les problématiques d'un site éditorial avec React+Redux"
header-img: "img/salade.jpeg"
date:   2016-03-30 15:00:00
author: Stéphane Montlouis-Calixte
category: frontend
tags: [react]
---

## Ou quelles sont les problématiques d'un site éditorial avec React+Redux

Tout le monde vous le dira à Kilix, React et moi, c’est un peu le coup de
foudre, Love at first sight. Programmation fonctionnelle, Redux, Stateless Components, Fonctions pures, Immutabilité … (*sigh*, augmentation de la fréquence cardiaque). J’ai d’ailleurs pour projet de me tatouer le logo React sur les fesses.

<!--more-->

Plus sérieusement, il y a quelques semaines, [@Huitre](https://github.com/huitre) et moi avons été staffés
sur le projet de refonte du site Amnesty France. Après l’excitation due à
l’ampleur du projet et à l’ouverture d’esprit du client — MVP basé sur des
personas, agilité tout ça, nous nous sommes attelés à la phase préférée du
développeur :

![](https://d262ilb51hltx0.cloudfront.net/max/1600/1*mtHu4u4VlMUyvaDfP-f4cA.jpeg)


Jade ? Haml ? Liquid ? Express ? Loopback ? Hapi ? Sylex ? PostCSS ? CSS Modules
? Symfony 2 ?

Je ne l’ai pas forcément mentionné, mais oui, ne vous inquiétez pas, on choisit
notre stack tout d’abord en fonction du besoin client. Saupoudrez tout cela avec
le besoin constant d’apprendre et de tester de nouvelles technos, et on se
retrouve entre 1 à 2 journées de réflexion pour la stack.

<br>

## React en tant que moteur de template

À ce jour, j’ai pas mal d’expérience avec **React+Redux**. J’ai eu l’occasion de
mettre en production plusieurs Single Page Applications et de créer une application
semi-[universelle](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.2wb75kfxk)
— *qui délivre une portion de la page côté back-end*, mais JAMAIS je n’aurais
pensé utiliser React comme moteur de template sur un site éditorial —
*j’explique pourquoi un peu plus bas*. Histoire de level-up et de s’amuser un
peu — *l’intégration classique, c’est un peu redondant*,
[@Huitre](https://github.com/huitre) a eu l’idée d’utiliser React comme un simple MoustacheJS ou autre
HandleBars.

Au début, je n’étais pas très emballé, je trouvais ça carrément nul. Je
m’explique : Certes, l’idée de développer une UI basée sur des composants est
extrêmement séduisante — *d’ailleurs j’étais un peu triste de retourner sur de
l’intégration HTML classique*, mais ce qui me peinait, c’était d’utiliser React
**uniquement** comme moteur de template.

*****

> Utiliser React comme moteur de template c’est comme aller au McDonalds pour
> prendre une salade. C’est comme capturer Roucoul avec une MasterBall.

*****

![](https://d262ilb51hltx0.cloudfront.net/max/1600/1*6TYqMppsXPc0yo95nyisPA.gif)
<span class="figcaption_hack">“Jean Leguin, humoriste !”</span>

Désolé j’avais pas d’autres exemples.

Parce que bon, disons le clairement, c’est extrêmement frustrant d’utiliser
React en back-end, puis de faire du Javascript classique en front-end pour
l’interactivité des composants :

~~~ javascript
//ActButton.js
const ActButton = ({label}) => {
  return (
    <div className="ActButton">
      <div className="ActButton__LeftButton">
        Agir
      </div>
      <div className="ActButton__RightButton">
        <img src="plume.svg" />
        {label}
      </div>
    </div>
  );
};

export default ActButton;

//scripts.js
document.querySelector('.ActButton').addEventListener('click', e => {
  //Do stuff
});
~~~

![](https://d262ilb51hltx0.cloudfront.net/max/1600/1*VHbVTpsjGWT2Y1OQrdvT0Q.gif)

<span class="figcaption_hack">**Franchement**, je sais pas pour vous, mais ça me blesse de voir ça.</span>

*****

## Javascript universel pour un site web ?

L’idée qui vient naturellement à l’esprit c’est de réutiliser React côté
front-end. Exactement comme une SPA universelle en fait*.*

La seule différence étant le changement de paradigme: D’un côté on fait une
application pure front-end puis on y ajoute le rendu back-end. D’un autre on
fait un site web purement back-end et on y ajoute la reprise avec React côté
front-end.

Qui plus est, aujourd’hui les sites internet se rapprochent beaucoup plus
d’applications web que des sites web 2.0, donc pourquoi pas ?

![](https://d262ilb51hltx0.cloudfront.net/max/2000/1*wlc01zs9x47aPOnsQCG3Yw.png)
<span class="figcaption_hack">Wireframe d’un article d’Amnesty France. Notez les éléments dans le header qui se rapproche d'une application riche </span>

Ce serait tellement plus simple de faire ceci :

~~~ javascript
import React, {PropTypes} from 'react';
import Svg from 'react-inlinesvg';
const styles = require('./ActButton.scss');

const ActButton = ({action, label}) => {
  return (
    <div onClick={action} className={styles.ActButton}>
      <div className={styles.LeftButton}>
        Agir
      </div>
      <div className={styles.RightButton}>
        <Svg src={`/assets/images/plume.svg`} />
        {label}
      </div>
    </div>
  );
};

ActButton.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string,
};


export default ActButton;


//Dans le parent

this._onActButtonClick = (e) => {
  //Do stuff
}

<ActButton
  label="Click me"
  onClick={this._onActButtonClick}
/>
~~~

MUCH BETTER ! Remarquez l’utilisation des CSS Modules et du package react-inlineSvg,
je reviendrai là-dessus.

<br>

## Et l’accessibilité ?

On doit se l’avouer, coder du Javascript Universel sur un site éditorial fait
trembler les experts en accessibilité. Un site aussi étroitement couplé à
Javascript fait automatiquement bondir une partie des intégrateurs, développeurs
et experts SEO. Mais n’oublions pas que c’est ce changement de paradigme
Back-End JS vers Front-End JS qui nous permet de prioriser le référencement en
pensant amélioration progressive.

De plus Amnesty France a émis le souhait d’être compatible avec les navigateurs récents
(Chrome, FF, Safari, IE 10 +…), donc pas de panique pour ce qui est du support
des anciennes versions IE.

Concernant ceux qui désactivent leur Javascript… ils pourront toujours naviguer
sur le site, mais auront quelques soucis à utiliser les widgets/composants
interactifs.

J’ai toujours pensé que seuls les vieux barbus et les entreprises médiévales
désactivaient leur javascript. Aujourd’hui supporter les navigateurs no-JS,
c’est comme faire de jolis sites en pensant à ceux qui désactivent leur CSS…Oui
je sais, ça n’a pas de sens: **that is the point**. Le web c’est du HTML5, du
CSS3, et du Javascript : c’est un tout.

<br>

## Maintenant, par où commencer ?

*Si vous savez comment fonctionne une application universelle sous React, vous
pouvez zapper cette partie et retourner jouer à [Agar.io](http://agar.io)*

<br>

### Routing

Tout d’abord, en plus d’être pris en charge côté front-end, le routing doit être
géré côté back-end. Heureusement,
[react-router](https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md)
nous propose une solution universelle que l’on peut utiliser pour surcharger le
routing de Node.js.

<br>

### Loader les bonnes données

La seconde étape consiste à savoir à quelle route d’API faire appel selon l’URL.


Il nous faut donc:

1.  Obtenir les données nécessaires au rendu des composants
1.  Rendre le HTML en utilisant le state généré
1.  Envoyer le HTML généré au client

<br>

~~~ javascript
//PetitionPage.react.js
export default class Petition extends Component {

  static fetchData() {
    actions.fetchPetitionData(); //promise
  }

  componentDidMount() {
    Petition.fetchData();
  }

  return (
    <div>
      <Header/>
      <Section
        {...props}
        >
      </Section>
      <WidgetPetition />
    </div>
  );
};

//routes.js
export default (store) => {
  ...
  return (
    <Route path="/" component={App}>
      ...
      <Route path="petition/:id" component={Petition}/>
      ...
    </Route>
  );
};
~~~

En prenant pour exemple la page-composant **Petition** ci-dessus, il nous faut
indiquer à React-router comment appeler les données relatives à **Petition** pour préparer le state de l’application lorsqu’on accède à l’url
*/petition/:id*. Pour cela le pattern classique utilisé est de créer une
**promesse fetchData() en tant que fonction statique** dans le composant parent
de chaque route. Ainsi, react-router est capable de matcher l’URL au composant
parent, d’appeler **fetchData()** et d’obtenir les données correspondantes \o/

[Redux-async-connect](https://github.com/Rezonans/redux-async-connect) s’occupe
de faire ce travail pour nous *(et dire qu’à l’époque je devais faire [tout ça à
la main](https://github.com/Kilix/Vamos/blob/master/src/server/frontend/dataFetching.js)..)*.

<br>

### Déshydratation réhydratation

![](https://d262ilb51hltx0.cloudfront.net/max/1600/1*b60PTAgopHpo1Gs5L7qMpQ.gif)

Sous ce terme un peu barbare se cache la récupération du state par le front-end
: une fois que le back-end a généré le state grâce aux appels API, il est
nécessaire de le passer au front-end. La seule façon de partager le state entre
le back-end et le front-end est de “déshydrater” le state en objet au moyen de
la serialization, puis de le “réhydrater” en le récupérant côté front-end. Ce
n’est pas très sexy, parce que cela nécessite d’écrire le state dans le DOM,
mais ça fonctionne.

![](https://d262ilb51hltx0.cloudfront.net/max/1600/1*wjcIXrjpe9tTEPOZgeQ6dA.png)
<span class="figcaption_hack">Exemple pas joli du state dans le DOM</span>

*Plus d’informations
[ici](http://stackoverflow.com/questions/29824908/what-does-dehydrate-and-rehydrate-stand-for-in-fluxible)*.

<br>

### Gérer les imports côté serveur

Si vous remontez un peu plus haut dans l’exemple du composant universel Petition
, vous remarquerez qu’on importe deux modules : react-inlineSvg et styles. Si
après avoir joyeusement mis en place le rendu back-end avec React, vous lancez
la commande

~~~
  node server.js
~~~

Là vous avez  :

~~~
    SyntaxErrors … Unexpected token * 10 ^30
~~~

Huh. C’est parce que sur un serveur Node.js, il n’y a pas la magie du require de
Webpack. Du coup notre serveur essaie simplement de require tous les assets
(styles, images, fonts, etc) comme si c’était de simples modules Javascript. Il
comprend rien du tout et il plante.

Heureusement ! Il existe un module capable de faire en sorte que le code côté
client puisse fonctionner côté serveur :
[webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools).
Il fait des trucs magiques afin de permettre à NodeJS de gérer les assets :).

<br>

## En conclusion

C’est à peu près tout ce dont vous avez besoin de savoir afin de coder une
application universelle avec React! Aujourd'hui les concepts universels sont assez matures pour vous permettre de vous lancer à l'aventure, donc n'ayez surtout pas peur de tenter l'expérience! #HtmlIsDead #JsAllTheWay #ImJoking

Bien sûr je n’allais pas vous laissez sans vous proposer la stack que l’on utilise sur ce projet :

[React-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)
