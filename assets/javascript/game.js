// global variables
var name;
var attack;
var defend;

      var attackflower;
      var defendflower;
      
var attackerHP;
var attackerAP;
var attackerCAP;
var attackerFN;

      var defenderHP;
      var defenderAP;
      var defenderCAP;
      var defenderFN;


var yourFlower;
var myFlower = '';

      var yourDefender;
      var myDefender = '';


function reset() {

   $('#picRow').show();
   $('.restart').hide();
   $('.attackButton').show();

   var myFlower = '';
   var myDefender = '';

   // healthPoints reset
   flowers.Oleander.healthPoints = 120;
   flowers.WolfsBane.healthPoints = 100;
   flowers.Larkspur.healthPoints = 150;
   flowers.Foxglove.healthPoints = 180;

   // attack power reset
   flowers.Oleander.attackPower = 8;
   flowers.WolfsBane.attackPower = 10;
   flowers.Larkspur.attackPower = 10;
   flowers.Foxglove.attackPower = 12;

   // delete virtual text
   $(".youAttacked").empty();
	$(".attackedBack").empty();
	$(".youDefeated").empty();
	$(".youWon").empty();
	$(".youLose").empty();
   $(".noEnemy").empty();
   
   // write poisonous flowers to DOM
   $('.nameo').html(flowers.Oleander.fullName);
   $('.namew').html(flowers.WolfsBane.fullName);
   $('.namel').html(flowers.Larkspur.fullName);
   $('.namef').html(flowers.Foxglove.fullName);

   // add flower pictures
   $('#nerium').appendTo('#picRow');
   $('#aconitum').appendTo('#picRow');
   $('#delphinium').appendTo('#picRow');
   $('#digitalis').appendTo('#picRow');

   // write health points to DOM
   $('.oleanhp').html(flowers.Oleander.healthPoints);
   $('.wolfhp').html(flowers.WolfsBane.healthPoints);
   $('.larkhp').html(flowers.Larkspur.healthPoints);
   $('.foxhp').html(flowers.Foxglove.healthPoints);
}

// Poisonous Flowers Object
// Holds game statistics
var flowers = { 

	Oleander: {
			name: "Oleander",
			visual: 'assets/images/oleander-imageo.jpeg',
			healthPoints: 120,
			attackPower: 8,
			fullName: "Oleander  |  Nerium oleander",
			counterAttackPower: 24
			},

	WolfsBane:{
			name: "WolfsBane",
			visual: 'assets/images/wolfsbane-imagew.jpg',
			healthPoints: 100,
			attackPower: 10,
			fullName: "Wolf's Bane  |  Aconitum",
			counterAttackPower: 5
			},

	Larkspur:{ 
			name: "Larkspur",
			visual: 'assets/images/larkspur-imagel.jpg',
			healthPoints: 150,
			attackPower: 10,
			fullName: "Larkspur  |  Delphinium",
			counterAttackPower: 20
			},

	Foxglove:{ 
			name: "Foxglove",
			visual: 'assets/images/foxglove-imagef.jpg',
			healthPoints: 180,
			attackPower: 12,
			fullName: "Foxglove  |  Digitalis",
			counterAttackPower: 25
			}
};

$(document).ready(function() {
   reset();

   // Upon user selection, move flowers to appropriate grid area
   $('.poisonous').on('click', function() {
      var oleander = $('#nerium');
      var wolfsbane = $('#aconitum');
      var larkspur = $('#delphinium');
      var foxglove = $('#digitalis');
      
      if (myFlower == '') {
         
         // append chosen flower to #yourFlower grid area
         $(this).appendTo('#yourFlower');

         myFlower = $(this);
         yourFlower = $(myFlower).attr('value');
         



            console.log('USER SELECTED FLOWER this: ', this);
            console.log("jQuery THIS selection $('this'): ", $(this));
            console.log('myFlower is also the jQuery THIS selection: ', myFlower);
            console.log('yourFlower: ', yourFlower);
            console.log('myFlower attribute value: ', $(myFlower).attr('value'));

      }

      // determine which flower is the user's flower and assign properties accordingly
      if (yourFlower == flowers.Oleander.name) {
         attackerHP = flowers.Oleander.healthPoints;
         attackerAP = flowers.Oleander.attackPower;
         attackerCAP = flowers.Oleander.counterAttackPower;
         attackerFN = flowers.Oleander.fullName;
         attack = flowers.Oleander;
      }
      else if (yourFlower == flowers.WolfsBane.name) {
         attackerHP = flowers.WolfsBane.healthPoints;
         attackerAP = flowers.WolfsBane.attackPower;
         attackerCAP = flowers.WolfsBane.counterAttackPower;
         attackerFN = flowers.WolfsBane.fullName;
         attack = flowers.WolfsBane;

         // adjust oleander's Class (in order to match one of the three indexes in the poison grid area) so it can be moved properly
         oleander.removeClass('_3');
         oleander.addClass('_2');

         oleander.addClass('move');
         foxglove.addClass('move');
         larkspur.addClass('move');
            // console.log('#nerium: ', oleander);
            // console.log('#aconium: ', wolfsbane);
            // console.log('#delphinium: ', larkspur);
            // console.log('#digitalis: ', foxglove);
      }
      else if (yourFlower == flowers.Larkspur.name) {
         attackerHP = flowers.Larkspur.healthPoints;
         attackerAP = flowers.Larkspur.attackPower;
         attackerCAP = flowers.Larkspur.counterAttackPower;
         attackerFN = flowers.Larkspur.fullName;
         attack = flowers.Larkspur;

         // adjust oleander's Class (in order to match one of the three indexes in the poison grid area) so it can be moved properly
         oleander.removeClass('_3');
         oleander.addClass('_1');

         oleander.addClass('move');
         foxglove.addClass('move');
         wolfsbane.addClass('move');
            // console.log('#nerium: ', oleander);
            // console.log('#aconium: ', wolfsbane);
            // console.log('#delphinium: ', larkspur);
            // console.log('#digitalis: ', foxglove);
         }
      else if (yourFlower == flowers.Foxglove.name) {
         attackerHP = flowers.Foxglove.healthPoints;
         attackerAP = flowers.Foxglove.attackPower;
         attackerCAP = flowers.Foxglove.counterAttackPower;
         attackerFN = flowers.Foxglove.fullName;
         attack = flowers.Foxglove;

         // adjust oleander's Class (in order to match one of the three indexes in the poison grid area) so it can be moved properly
         oleander.removeClass('_3');
         oleander.addClass('_0');

         oleander.addClass('move');
         larkspur.addClass('move');
         wolfsbane.addClass('move');
            // console.log('#nerium: ', oleander);
            // console.log('#aconium: ', wolfsbane);
            // console.log('#delphinium: ', larkspur);
            // console.log('#digitalis: ', foxglove);
      }
            // console.log(yourFlower);
            // console.log(flowers.WolfsBane.name);
            // console.log(attackerHP);
            // console.log(attackerAP);
            // console.log(attackerCAP);
            // console.log(attackerFN);
            // console.log(attack);

      // move the three remaining flowers to the poison grid areas
      for (var i = 0; i < 3; i++) {
        
            $('._' + [i]).not(myFlower).removeClass('poisonous').addClass('defender').appendTo('#poison-' + [i]);

            // console.log('._' + [i]);
            // console.log($('._' + [i]).not(myFlower).removeClass('poisonous').addClass('defender').appendTo('#poison-' + [i]));
         }
      
      $('#picRow').hide();

   });

   // move poisonous enemy flower into the opponent grid area
   $('.move').on('click', function() {
      
      $(this).appendTo('#defender');

      myDefender = $(this);
      yourDefender = $(myDefender).children().attr('value');
      
      $(".youDefeated").empty();
      
            console.log('USER SELECTED DEFENDER this: ', this);
            console.log("jQuery THIS selection $('this'): ", $(this));
            console.log('myDefender is also the jQuery THIS selection: ', myDefender);
            console.log('yourDefender: ', yourDefender);
            console.log('myDefender attribute value: ', $(myDefender).children().attr('value'));
      
           // determine which flower is the defender flower and assign properties accordingly
      if (yourDefender == flowers.Oleander.name) {
         defenderHP = flowers.Oleander.healthPoints;
         defenderAP = flowers.Oleander.attackPower;
         defenderCAP = flowers.Oleander.counterAttackPower;
         defenderFN = flowers.Oleander.fullName;
         defender = flowers.Oleander;
      }
      else if (yourDefender == flowers.WolfsBane.name) {
         defenderHP = flowers.WolfsBane.healthPoints;
         defenderAP = flowers.WolfsBane.attackPower;
         defenderCAP = flowers.WolfsBane.counterAttackPower;
         defenderFN = flowers.WolfsBane.fullName;
         defender = flowers.WolfsBane;
      }
      else if (yourDefender == flowers.Larkspur.name) {
         defenderHP = flowers.Larkspur.healthPoints;
         defenderAP = flowers.Larkspur.attackPower;
         defenderCAP = flowers.Larkspur.counterAttackPower;
         defenderFN = flowers.Larkspur.fullName;
         defender = flowers.Larkspur;
         
      }
      else if (yourDefender == flowers.Foxglove.name) {
         defenderHP = flowers.Foxglove.healthPoints;
         defenderAP = flowers.Foxglove.attackPower;
         defenderCAP = flowers.Foxglove.counterAttackPower;
         defenderFN = flowers.Foxglove.fullName;
         defender = flowers.Foxglove;
      }

            console.log(yourDefender);
            console.log(flowers.WolfsBane.name);
            console.log(defenderHP);
            console.log(defenderAP);
            console.log(defenderCAP);
            console.log(defenderFN);
            console.log(defend);

   });


   $('.attackButton').on('click', function() {
      if ($('#defender').children().length == 0) {
         $(".noEnemy").html("Pick an Opponent.");
      }

      if ( !attackerHP < 1 || !defenderHP < 1 ) {
         // when attackButton is clicked, if both players healthpoints are not 0,
     		// then the game subtracts the defender's CAP from the attacker's HP.)
         attackerHP = (attackerHP - defenderCAP);
         console.log(defenderCAP);
         console.log(attackerHP);
         // write new healthpoints to yourFlower
         $("." + yourFlower).html(attackerHP);

         $('.youAttacked').html("You attacked " + defenderFN + " for " + attackerAP + " points.");
         // when attackButton is clicked, if both players healthpoints are not 0,
     		// then the game subtracts the attacker's AP points from the defender's HP.)
         defenderHP = (defenderHP - attackerAP);

         $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " points.");

         // write new healthpoints to defender
         $("." + yourDefender).html(defenderHP)

      }

      // if your character defeats the defender.
      if (defenderHP <= 0) {
         // clear text then add text
         $('.youAttacked').empty();
         $('.attackedBack').empty();

         $(".youDefeated").html("You've defeated" + defenderFN + "." + ' You can choose anohter flower to challenge.');

         $('#defender').empty();

         console.log(attackerAP);
         // increase myFlower attack power
         attackerAP = (attackerAP + 10);
         // new value for attackPower
         attack.attackPower = attackerAP;
         console.log(attackerAP);
      }

      // if all enemies have been defeated and the attacker still has healthpoints, then the player wins.
      if ($('.move').children().length == 0) {
         // clear appropriate text and add victory text.
         $('.youAttacked').empty();
         $('.attackedBack').empty();
         $('.youDefeated').empty();
         $('.noEnemy').empty();
         $('.youWon').html("You are victorious!!!  GAME OVER.");

         $('.restart').on('click', function(){
            location.reload(true);
         })

      }
// if your flower's hp = 0 then you lose.
      if (attackerHP <= 0 ) {
         $('.restart').show();

         $('.attackButton').hide();
         
         // clear appropriate text and add text expressing 'you lose'.
         $(".youAttacked").empty();
         $(".attackedBack").empty();
         $(".youDefeated").empty();
         $(".youLose").html("You've been defeated...GAME OVER!!!");

         $('.restart').on('click', function(){
            location.reload(true);
         })

      }

   });

});


