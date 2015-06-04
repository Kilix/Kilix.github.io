# Kilix, l'agence digital avec des Post-Its sur les murs !

Kilix est l'agence digitale Agile d'[Extia](http://extia.fr).

## Notre ADN

### Extia

Nous nous appuyons  sur l’expertise d’EXTIA, acteur reconnu du conseil en ingénierie depuis 7 ans. Elle met à votre disposition ses meilleurs consultants pour vous garantir l’atteinte de vos objectifs dans les délais impartis.

### Gestion par la valeur

L’optimisation du Time-To-Market de votre produit est le facteur clé de succès le plus important. Afin de répondre aux attentes de vos utilisateurs finaux, nous pilotons votre projet en priorisant les besoins les plus urgents et en les livrant régulièrement.

### Gestion du risque

Avec vous, et dès le lancement d’un projet nous menons une analyse des risques et mettons en place des parades concrètes pour maximiser la réussite du produit.

### Amélioration continue

Vous bénéficiez du retour d’expérience de l’agence sur ses projets. Nous mettons en place à l’issue de chaque itération des activités pour capitaliser sur le positif, cibler et éliminer le négatif, et ce en toute transparence avec vous.

## Le Blog Kilix

L'objectif de ce blog est de partager nos retours d'expériences aussi bien technique qu'en terme de gestion de projet en Agilité.

### Comment contribuer ?

#### Ajouter un article

* Dans le dossier `_posts`, créez un nouveau fichier en cliquant sur le `+`
* Nommez le fichier comme suit: YYYY-MM-dd-nom-de-l-article.md
* Ajoutez le header de l'article dans le fichier:
```no-highlight
---
layout:     post
title:      "nom-de-l-article"
date:       YYYY-MM-dd HH:mm:ss
author:     nom-de-l-auteur
header-img: lien-vers-une-image [1][2]
category:   catégorie
tags:       [ tag1, tag2, tag3, ...]
---
```
[1] Si l'image se trouve en local, n'oubliez pas de l'ajouter dans le dossier `img`

[2] Optionnel, vous pouvez ne pas renseigner cette ligne

Catégories du blog: frontend, backend, agilité, fun, design

* Ajoutez le contenu de l'article à la suite dans le fichier, n'oubliez pas de placer `<!--more-->` qui définit la limite de l'extrait de l'article qui apparaitra sur la page d'accueil du blog
* Proposez votre article, et faites une requête pour le faire valider

##### Écrire en markdown

* [Un éditeur](http://markable.in/editor/)
* [Conventions markdown](http://kramdown.gettalong.org/quickref.html) 
* [Exemples de markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#### Ajouter un auteur

* Dans le dossier `_data`, modifiez le fichier `authors.yml`
* Rajoutez ces 3 lignes à la suite :
```no-highlight
- name: nom-de-l-auteur
  job:  job-de-l-auteur
  img:  lien-vers-une-photo-de-l-auteur [1]
```
[1] Si l'image se trouve en local, n'oubliez pas de l'ajouter dans le dossier `img`
* Proposez votre modification, et faites une requête pour la faire valider

#### Ajouter un tag

* Dans le dossier `_data`, modifiez le fichier `tags.yml`
* Rajoutez ces 2 lignes à la suite :
```no-highlight
- slug: votre-tag
  name: Nom du Tag
```
Exemple :
```no-highlight
- slug: product-owner
  name: Product Owner
```
* Proposez votre modification, et faites une requête pour la faire valider
* Dans le dossier `blog/tag`, créez un nouveau fichier en cliquant sur le `+`
* Nommez le fichier comme suit: votre-tag.md
* Ajoutez le header du tag dans le fichier:
```no-highlight
---
layout:     blog_by_tag
title:      "Nom du Tag"
tag:        votre-tag
permalink:  /blog/tag/votre-tag/
---
```
* Proposez votre fichier, et faites une requête pour le faire valider.

#### Ajouter une catégorie

* Dans le dossier `_data`, modifiez le fichier `categories.yml`
* Rajoutez ces 2 lignes à la suite :
```no-highlight
- slug: votre-categorie
  name: Nom de la Catégorie
```
Exemple :
```no-highlight
- slug: product-owner
  name: Product Owner
```
* Proposez votre modification, et faites une requête pour la faire valider
* Dans le dossier `blog/categorie`, créez un nouveau fichier en cliquant sur le `+`
* Nommez le fichier comme suit: votre-categorie.md
* Ajoutez le header du tag dans le fichier:
```no-highlight
---
layout:     blog_by_category
title:      "Nom de la Catégorie"
category:   votre-categorie
permalink:  /blog/category/votre-categorie/
---
```
* Proposez votre fichier, et faites une requête pour le faire valider.

Have fun and join us on [Kilix](htt://kilix.fr)
