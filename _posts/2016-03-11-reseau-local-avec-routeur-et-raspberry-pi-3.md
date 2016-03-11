---
layout: post
title:  "Installer une Raspberry Pi 3 en réseau local sans fil"
description: "Installation d'une Raspberry Pi 3 et manipulation depuis un réseau local sans fil !"
date:   2016-03-11 18:30:00
author: Axel Venet
category: backend
tags: [backend, fun, network, raspberry]
---

Petit article aujourd'hui n'ayant pas grand-chose à voir avec la vie professionnelle de l'agence mais qui concerne une petite expérience assez enrichissante que j'aimerais partager avec le vaste monde !

Tout développeur ne touche pas forcément aux problématiques d'infrastructure et de réseau, ce que je trouve fort dommage et à quoi j'ai voulu remédier dans mon cas.

Alors bien sûr, on se connecte sur des machines de prod, en SSH, mais dans un contexte qui souvent ne permet pas trop la découverte de ce milieu (enfin après certains tapent des commandes au pif et découvrent aussi, mais nous ne cautionnons malheureusement pas ce genre de pratiques..).

C'est pour celà que je me suis pris une Raspberry et un routeur pour pouvoir m'éclater en paix !

<!--more-->

Matériel
========

On va commencer par une petite séquence "placement de produit", pour laquelle je ne suis absolument pas rémunéré malheureusement :

Le routeur
----------

Je suis passé gentiment à [LDLC](http://www.ldlc.com/), boutique spécialisée bien sympathique que je recommande fortement !

Là-bas je me suis pris un routeur [TP-Link Archer C7](http://www.tp-link.fr/products/details/cat-9_Archer-C7.html), petite bête bien élégante qui m'a séduit au premier coup d'oeil sur sa fiche de performance (et sur l'étiquette avec le prix par rapport à la gamme suivante).

Très facile d'utilisation, le plus long pour le rendre opérationnel a été de se défaire du carton d'emballage.

La Raspberry
------------

Je me suis pris le modèle [Raspberry Pi 3](https://www.raspberrypi.org/blog/raspberry-pi-3-on-sale/), tant qu'à faire autant prendre la dernière.

Je tiens à saluer le site [materiel.net](http://materiel.net) qui m'a livré ça du Dimanche soir pour le Mardi matin alors qu'ils avaient plus de boîtier en stock.

Alors que je craignais de devoir attendre 15 jours que ma petite carte arrive, j'ai pu commencer la bidouille très tôt !

Installation
============

Ayant eu le routeur en preum's j'ai tout d'abord commencé par jouer un peu avec.

Rien de bien sorcier, il suffit de monter les antennes de la bête, de la brancher amoureusement et ça y est, Skynet se réveille et prend le contrôle.

Deux réseaux WiFi sont créés, un réseau de 450Mbps sur la bande 2.4GHz et un autre de 1350Mbps sur la bande 5GHz. Autant vous dire qu'on se fiche pas de nous.

Je me branche bien gentiment sur la console d'administration qui est sur l'adresse de la passerelle (logique), soit 192.168.0.1.

Assez complète, j'ai la main sur quasiment toutes les fonctionnalités du routeur et je prends bien quelques minutes pour me sentir être le seigneur tout-puissant, en tout cas jusqu'aux limites infinies de mon LAN.

Pas grand chose à y redire, j'ai joué un peu en branchant plusieurs machines dessus et en analysant l'activité avec Wireshark. Jusqu'ici rien d'extraordinaire pour le jeune padawan en quête de savoir.
