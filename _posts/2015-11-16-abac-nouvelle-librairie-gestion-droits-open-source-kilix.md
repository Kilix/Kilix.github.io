---
layout: post
title:  "PHP-ABAC, la nouvelle librairie Open-Source de gestion des droits, by Kilix"
description: "Contrôler les accès dans son application à l'aide des attributs de l'utilisateur, des ressources et de l'environnement, une nouvelle façon d'appréhender la gestion des droits !"
date:   2015-11-16 19:12:36
author: Axel Venet
category: backend
tags: [backend, security, access-control]
---


Aujourd'hui, Kilix publie sur Github son premier projet open-source ([lien ici](https://github.com/Kilix/php-abac)).

Celui-ci consiste en l'implémentation en PHP d'un concept de gestion d'accès : ABAC (Attribute-Based Access-Control).

<!--more-->

Au cours de notre vie d'agence et de nos projets, nous avions flirté avec un concept voisin : RBAC (Role-Based Access-Control).
Une des [principales librairies PHP implémentant RBAC](https://github.com/OWASP/rbac), que nous avons donc testé, emploie deux arbres hiérarchiques distincts :
l'un dédié aux rôles tandis que l'autre à des permissions.
Un rôle pouvait ensuite être lié à une ou plusieurs permissions.
L'application intégrant RBAC contrôle ensuite que l'utilisateur dispose bien d'une permission donnée au travers des rôles qui lui sont assignés.

<img src="http://phprbac.net/img/rbac.png" alt="Drawing" style="width: 600px;"/>

Cependant, au sein de nos projets, le thème de la gestion des droits a été fortement challengé par des besoins métiers très spécifiques.
Se baser uniquement sur la possession d'une permission pour déterminer l'accès à une ressource ou à une action n'était pas suffisant pour répondre à ces besoins.
Nous avions dès lors besoin de la notion de contextualisation, pour définir le droit d'accès à une ressource, non seulement selon l'utilisateur, mais aussi selon la ressource accédée.

Par exemple, pour éditer un article de blog, il n'est parfois pas suffisant de contrôler une permission ``edit_article`` ou un rôle ``ROLE_CONTRIBUTOR``.
Des informations supplémentaires doivent être contrôlées, comme par exemple la propriété de l'article (à un groupe ou à son auteur), le statut de l'article (publié, archivé...).

Pour répondre à cette problématique, nous avons utilisé sur nos projets Symfony2 la notion de ``SecurityVoter``, ce qui nous a permis de répondre au besoin.
Mais l'idée d'une librairie générique dédiée à ce type de gestion des droits était lancée. Une librairie où la contextualisation serait nativement gérée.

Par le biais d'un [document de spécification du NIST](http://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.sp.800-162.pdf), nous avons découvert le concept d'ABAC.
Cette fois-ci, plutôt que de se baser sur les rôles d'un utilisateur, cette philosophie de contrôle d'accès se repose sur la notion d'attributs.
Non seulement les attributs de l'utilisateur, mais également les attributs de la ressource accédée et de l'environnement.
Ceci permet de pouvoir contrôler l'accès selon l'utilisateur mais aussi selon la ressource à laquelle on veut accéder !
De plus, la notion de rôles et de permissions peut être conservée. Il suffit de considérer ces derniers comme étant des attributs de l'utilisateur. RBAC peut donc être une composante au sein d'ABAC !

![image alt text](http://ef67fc04ce9b132c2b32-8aedd782b7d22cfe0d1146da69a52436.r14.cf1.rackcdn.com/guidance-aims-to-ease-access-control-eresource-1-a-5706.jpg)

Pour ce faire, nous définissons des "Policy Rules", des règles qui vont déterminer quels attributs l'utilisateur, la ressource et l'environnement doivent avoir pour que la règle soit vérifiée et l'accès autorisé.
Chaque règle va donc contenir un ensemble d'attributs avec des valeurs attendues, et un système de comparaison.
Grâce à cela, nous allons pouvoir effectuer des vérifications "complexes", par exemple vérifier qu'un utilisateur a bien passé son code il y a moins de 5 ans pour pouvoir s'inscrire à l'auto-école en épreuve de conduite.

Tout cela est stocké en base de données, la définition des règles tout comme les attributs visés, la librairie récupérant les attributs directement via des requêtes SQL dynamiques.
Pour le moment, la librairie dans sa version MVP supporte uniquement un fonctionnement sous Mysql, mais une évolution incluant le fonctionnement sous d'autres bases de données peut être envisagée.

D'autres évolutions peuvent être apportées à cette librairie. Sa version MVP peut être améliorée, et nous sommes vigilants vis-à-vis des feedbacks que nous espérons obtenir. Dans une approche Agile, nous comptons être à l'écoute des utilisateurs, et grâce à leur expérience, améliorer cette librairie, faciliter son utilisation, la rendre confortable malgré la complexité qu'elle tente de génériser.

Nous sommes également ouverts à toute contribution directe. N'hésitez pas à forker le dépôt, effectuer vos modifications et ensuite nous soumettre une Pull Request, ce sera avec plaisir que nous la challengerons avec vous pour l'intégrer !

Merci pour votre lecture !
