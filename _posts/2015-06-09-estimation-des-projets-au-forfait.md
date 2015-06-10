---
layout: post
title:  "Estimation des projets au forfait : la contractualisation itérative, une pise de reflexion"
date:   2015-06-09 17:00:00
author: Sébastien Le Gall
category: agilité
tags: [forfait, agilite, scrum, contrat]
---


## L'état des projets informatique en 2015

Le [rapport Big Bang Boom](http://www.standishgroup.com/sample_research_files/BigBangBoom.pdf) publié en 2014 par le Standish Group met en exergue de façon très pragmatique la principale cause de l'échec d'un projet informatique :

> A Big Bang theory for software and information technology projects is that everything needs to come together at once to have a working solution that is universal to all stakeholders.

Il explique, notamment, que sur un panel représentatif de projet IT :

- 42% échouent purement et simplement;
- 52% ne répondent pas aux contraintes imposées (coût, délais, qualité, périmètre, etc.);
- <b>6% seulement réussissent</b>.

Par ailleurs, ce même institut fait une analyse plus globale de l'évolution des projets IT au fil du temps dans son fameux [Chaos report](http://www.projectsmart.co.uk/docs/chaos-report.pdf).

![RSE]({{ site.url }}/img/Standish_Group-chaos_reports-historique_2010.jpg)

On y constate que la réussite d'un projet informatique est un challenge que peu d'entreprises réussissent.

<!--more-->

Néanmoins, la démocratisation, au fil des ans, des méthodes de gestion de projet permettent d'augmenter la qualité et de mieux tenir les engagements.

<b>L'emergence de l'agilité, notamment, permet de réussir trois fois plus de projets</b> qu'en gestion de projet classique, dit cycle en V.

![RSE]({{ site.url }}/img/Agile-Waterfall-Success-Failure-Rates.jpg)

Reste que, en majorité, les projets IT, quand ils se terminent, ne se terminent pas bien.

## Périmètre, coût, délais... vraiment?

La logique forfaitaire classique impose trois éléments :

- un engagement de résultat
- un engagement de date de livraison
- un engagement de coût

<b>Il s'avère quasiment impossible de tenir la distance sur ces trois facteurs en même temps</b> sauf, bien sûr, à jouer sur le facteur qualité ou, pour les entreprises les plus réputées, à augmenter fortement les coûts pour engranger une grosse part du risque.

Avec la démocratisation de l'Agilité, certains de ces postulats tendent à être remis en cause. On assiste dès lors à l'émergence de nouveaux types de contrat introduisant une dose de flexibilité, notamment sur le périmètre.

Il s'agit de contractualiser, non pas un périmètre, mais un certain nombre de points de complexité. On travaille donc à complexité constante. Et <b>toute évolution du périmètre doit s'inscrire dans une logique de "priorisation" des nouvelles fonctionnalités</b>. Quand la limite de points de complexité est atteinte, le projet s'arrête. Par ailleurs, si l'on ajoute la contrainte de délais, cela nécessite de la part du prestataire de s'engager aussi sur une capacité de production par sprint et donc aussi, sur un coût. 

Cette approche Agile de l'aspect contractuel permet de gagner en flexibilité sur le périmètre et donc, conformément à la logique Agile, de pouvoir s'adapter à l'évolution du besoin des utilisateurs finaux. C'est cette logique de type "gestion par le <i>product backlog</i>", [décrite en détail](http://www.staub-associes.com/wp-content/uploads/2014/04/methode_agile.pdf) par le cabinet d'avocat Staub & Associé spécialisé dans l'IT qui, aujourd'hui, tend à se démocratiser.

Mais quand bien même on s'assure de travailler dans un cadre où la charge est fixée d'avance, reste une problématique sousjacente : l'estimation du temps à passer ou de la complexité.

En effet, si la gestion d'un projet par le <i>product backlog</i> permet de résoudre la contrainte de périmètre, deux questions se posent :

- Un client est-il prêt à engager le développement d'une application / d'un site web sans être assuré à l'avance du périmètre qui sera mis en production? Pour certains, familiers des méthodes Agiles, ou pour d'autres, qui auront pu être convaincu de l'intérêt de raisonner sur une logique de [Minimum Valuable Product](http://en.wikipedia.org/wiki/Minimum_viable_product) , c'est probable. Mais pour la majorité, ce ne sera pas le cas. Mon expérience chez Kilix l'a montré à de nombreuses reprises.
- Comment minimiser les risques d'erreur dans l'estimation de la complexité / de la charge d'un projet ou d'une <i>feature</i>?

## Peut-on vraiment estimer la complexité d'un projet / d'une feature ?

Travailler au forfait, et ce, que l'on soit habitué à travailler en cycle en V classique ou en Agilité, cela implique d'être capable de déterminer en amont la charge de travail nécessaire au développement d'un périmètre fourni par le client.

Mais, l'expérience prouve que dans ce domaine, les chances de succès sont infimes.

Dans un [billet récent](http://blog.hut8labs.com/coding-fast-and-slow.html?reddit), le développeur Dan Milstein, revient en détail sur la question de l'estimation. Il fait notamment le lien entre le niveau détail des spécifications et l'estimation :

> if you were to write a specification in such detail that it would capture those issues, you’d be writing the software

En d'autres termes, il apparaît évident que, <b>plus les spécifications sont précises, plus l'estimation sera juste</b>. Mais en réalité, atteindre <b>un tel niveau de spécification reviendrait à coder l'application directement</b>.

Tout la difficulté est donc de trouver un compromis entre le niveau de détail des spécifications et la marge d'erreur dans l'estimation de la complexité.

SCRUM a résolu ce problème en proposant un model itératif où, lors du planning poker, les développeurs estiment les tâches techniques du prochain sprint uniquement. Et, là encore, on peut souvent se rendre compte que la marge d'erreur n'est pas négligeable.

Selon Dan Milstein, qui s'inspire largement du livre Thinking, Fast and Slow de Daniel Kahneman, il est impossible de ne pas se tromper dans les estimations pour deux raisons :

- Le niveau de détail des spécifications n'est jamais suffisant, sauf à écrire l'application directement;
- La niveau de confiance des développeurs / experts dans leur capacité à résoudre un problème en tenant compte des expériences passées est toujours trop élevée;

Et, pour ma part, il existe une troisième raison que l'article ne relate pas : 
- La sous-estimation du bruit qui freine les développements : réunion, aller-retour avec le client, etc.

Reste que, en mode forfaitaire, même si les US sont découpées et estimées de façon itérative, le contrat prévoit, en général, une dead-line fixée à partir d'une estimation globale du projet. Et souvent, <b>le décalage entre l'estimation globale et l'estimation des sprints est énorme</b>.

Par ailleurs, outre le respect des dead-lines, sur des projets complexes où le développement d'un MVP s'étens sur plusieurs mois, voire plusieurs années, <b>le manque de visibilité tant sur les futures fonctionnalités que sur la date de mise en production qui semble reculer à chaque sprint, est un facteur de démotivation de l'équipe</b>.

Enfin, côté client, quand le nombre d'US à embarquer dans un MVP est si grand, la visibilité et la motivation diminuent aussi très fortement, aboutissant ainsi à des situations illogiques où l'équipe de développement se concentre à faire de la refactorisation et de l'optimisation car le Product Owner n'a pas fourni de spécifications pour le sprint. Ou, plus anodin encore, <b>il s'avère parfois que, le Product Owner lui-même n'aurait pas pu tenir les délais de livraison, ne serait-ce que pour spécifier les fonctionnalités</b> ou pour recetter.

## Un contrat itératif de développement du MVP, une piste de réflexion pour garantir la visibilité sur les engagements du prestataire et du client

S'il faut retenir une leçon de l'expérience des projets sur lesquels Kilix s'est engagé, c'est la suivante :

> La tenue des engagements forfaitaire est proportionnel à la visibilité

Et cette visibilité doit être maximisée tant sur le développement des <i>features</i> que sur les spécifications et sur les feedback utilisateurs. C'est à dire en somme, être capable de :

- Donner de la <b>visibilité aux développeurs</b> sur les US à venir et les dates à tenir;
- Donner de la <b>visibilité au Product Owner</b> sur les sprints à venir et la charge qui pourra être dépilée;
- Donner de la <b>visibilité au couple (développeur + Product Owner)</b> sur les retours des utilisateurs.

Cela implique d'engager contractuellement, non seulement le prestataire sur sa capacité de développement, mais aussi le client sur sa capacité de spécification et de recette.

Et sur ce point, <b>la gestion par le <i>product backlog</i> ne résout pas toujours la question de la visibilité</b>. Quelle visibilité peut-on avoir sur un fichier de 500 lignes (US)? Quelle visibilité peut-on avoir sur une fonctionnalité résumée en 1 ligne d'un fichier?

Afin de répondre à ces enjeux de visibilité, une piste de réflexion pourrait être une contractualisation itérative avec :
- <b>Un engagement sur une complexité suffisamment petite</b> ou, à défaut, un engagement sur un périmètre suffisamment petit (une ou deux épics, par exemple);
- <b>Un engagement sur un délais suffisamment court</b> (trois où quatres itérations);
- <b>Un engagement sur le coût</b> d'une itération.

Cette logique amène à <b>responsabiliser</b> à la fois l'équipe de développement qui s'engage sur des dates de livraisons à portée de vue mais aussi le Product Owner qui se trouve confronté au sujet de la recette avant mise en production ainsi qu'à celui de la livraison des spécifications. L'objectif est d'éviter deux cas de figure récurrents :

Pour les développeurs :

> "On a pas tenu nos engagements sur le sprint, tant pis, on se rattrapera sur les 10 prochains."

Pour le Product Owner :

> "Je n'ai pas spécifié cette US, tant pis, je la dépriorise."

On pourrait alors imaginer un contrat renouvelable tacitement qui, dans le cas de dysfonctionnement, pourrait être revu afin, par exemple, de revoir la taille de l'équipe (et donc la capacité de production) ou les engagements de délais.
