---
layout: post
title:  "Utiliser un listener de test avec PhpUnit"
description: "Si vous avez déjà utilisé PHPUnit, vous avez forcément en tête la succession de points qui s'affichent dans la console pour signifier que les tests passent. Sans doute aussi avez-vous l'habitude de vous ronger les ongles de peur qu'un joli F rouge apparaisse."
date:   2015-06-04 14:49:34
author: Sébastien Le Gall
category: backend
tags: [php, phpunit]
---
![RSE](http://le-gall.net/seb/blog-php/wp-content/uploads/2014/09/logo1-600x267.jpg)

Si vous avez déjà utilisé PHPUnit, vous avez forcément en tête la succession de points qui s'affichent dans la console pour signifier que les tests passent. Sans doute aussi avez-vous l'habitude de vous ronger les ongles de peur qu'un joli F rouge apparaisse.  Avec PHPUnit, cette sortie de console est gérée par un listener qui implémente l'interface :

~~~ php
PHPUnit_Framework_TestListener
~~~

Pour rajouter des listeners à ceux implémentés par défaut, il suffit donc de créer une classe qui implémente cette interface et de déclarer votre listener directement dans le fichier de configuration PHPUnit : phpunit.xml(.dist)
<!--more-->
Voici un exemple concret.


Exemple de listener PHPUnit : publier un message sur le chan Slack de la team à chaque failed

Le principe :  Slack est un webservice de channel de discussion entre membre d'une même équipe. Il propose un service de bot auquel on peu passer des commandes par curl. Dans cet exemple, nous allons utiliser le bot slack pour envoyer un message sur le chan chaque fois qu'un test ne passe pas. Il s'agit donc de créer une classe qui implémente l'interface PHPUnit des listeners pour exécuter une commande curl en fonction du résultat du test. Pour l'exemple, je me baserai sur une architecture Symfony2. A vous d'imaginer une autre configuration pour les besoins de vos propres projets.

Déclarer un nouveau listener dans phpunit.xml(.dist)

Il suffit pour cela de rajouter une balise à n'importe quel endroit du fichier comme ceci :

~~~ xml
<listeners>
   <listener class="SlackListner" file="slackListner.php"/>
</listeners>
~~~

Dans Symfony2, ce fichier se trouve dans le répertoire app/. On déclare ici le nom de la classe et le fichier qui contient sa déclaration.

Implémenter l'interface PHPUnit_Framework_TestListener

Voici un exemple de fichier SlackListener.php, placé directement dans app/.

~~~ php
<?php
class SlackListener implements PHPUnit_Framework_TestListener
{
    public $name;
    public $errorString;
    private $chan = "votre_chan_slack";
    private $token = "votre_token_slack";

    public function __construct()
    {
        $this->name = exec('git config --get user.name'); //On récupère le nom d'utilisateur git
        $this->errorString = $this->name.' failed a test';
    }

    private function sendMessage()
    {
         //On envoie la commande curl au bot slack
         exec("curl --silent --data '$this->errorString' 'https://kilix.slack.com/services/hooks/slackbot?token=$token&channel=%23$chan'");  
    }

    public function addError(PHPUnit_Framework_Test $test, Exception $e, $time)
    {
        $this->sendMessage();
    }

    public function addFailure(PHPUnit_Framework_Test $test, PHPUnit_Framework_AssertionFailedError $e, $time)
    {

        $this->sendMessage();
    }

    public function addIncompleteTest(PHPUnit_Framework_Test $test, Exception $e, $time)
    {
        $this->sendMessage();
    }

    public function addRiskyTest(PHPUnit_Framework_Test $test, Exception $e, $time)
    {
    }

    public function addSkippedTest(PHPUnit_Framework_Test $test, Exception $e, $time)
    {
    }

    public function startTest(PHPUnit_Framework_Test $test)
    {
    }

    public function endTest(PHPUnit_Framework_Test $test, $time)
    {
    }

    public function startTestSuite(PHPUnit_Framework_TestSuite $suite)
    {
    }

    public function endTestSuite(PHPUnit_Framework_TestSuite $suite)
    {
    }
}

~~~

Et voilà, c'est aussi simple que ça.

Pour plus d'information sur les listeners et, plus globalement, sur les différentes possibilités d'étendre PHPUnit, je vous invite à aller voir la doc : [https://phpunit.de/manual/3.6/en/extending-phpunit.html](https://phpunit.de/manual/3.6/en/extending-phpunit.html)
