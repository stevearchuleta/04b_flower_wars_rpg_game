// global variables
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

var name;

var yourFlower;
var yourDefender;

var myFlower = '';
var mydef = '';

// reset
function reset() {
   $('#picRow').show();
   $('.restart').hide();
   $('.attackButton').show();

   myFlower = '';
   myDef = '';

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
			healthPoints: 120 + ' health-points',
			attackPower: 8,
			fullName: "Oleander  |  Nerium oleander",
			counterAttackPower: 24
			},

	WolfsBane:{
			name: "WolfsBane",
			visual: 'assets/images/wolfsbane-imagew.jpg',
			healthPoints: 100 + ' health-points',
			attackPower: 10,
			fullName: "Wolf's Bane  |  Aconitum",
			counterAttackPower: 5
			},

	Larkspur:{ 
			name: "Larkspur",
			visual: 'assets/images/larkspur-imagel.jpg',
			healthPoints: 150 + ' health-points',
			attackPower: 10,
			fullName: "Larkspur  |  Delphinium",
			counterAttackPower: 20
			},

	Foxglove:{ 
			name: "Foxglove",
			visual: 'assets/images/DarthMaul.png',
			healthPoints: 180 + ' health-points',
			attackPower: 12,
			fullName: "Foxglove  |  Digitalis",
			counterAttackPower: 25
			}
};

$(document).ready(function() {
   reset();

   // Upon user selection, move flowers to appropriate grid area
   $('.poisonous').on('click', function() {

      if (myFlower == '') {
         // append chosen flower to #yourFlower player grid area
         console.log('USER SELECTED FLOWER $(this): ', this);
         $(this).appendTo('#yourFlower');
         myFlower = $(this);
         yourFlower = $(myFlower).attr('value');
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
      }
      else if (yourFlower == flowers.Larkspur.name) {
         attackerHP = flowers.Larkspur.healthPoints;
         attackerAP = flowers.Larkspur.attackPower;
         attackerCAP = flowers.Larkspur.counterAttackPower;
         attackerFN = flowers.Larkspur.fullName;
         attack = flowers.Larkspur;

      }
      else if (yourFlower == flowers.Foxglove.name) {
         attackerHP = flowers.Foxglove.healthPoints;
         attackerAP = flowers.Foxglove.attackPower;
         attackerCAP = flowers.Foxglove.counterAttackPower;
         attackerFN = flowers.Foxglove.fullName;
         attack = flowers.Foxglove;
      }

      // clone the three remaining flowers to their appropriate grid areas
      for (var i = 0; i < 4; i++) {
        
            $('._' + [i]).not(myFlower).removeClass('poisonous').addClass('defender').appendTo('#poison-' + [i]);
            console.log('._' + [i]);
            console.log($('._' + [i]).not(myFlower).removeClass('poisonous').addClass('defender').appendTo('#poison-' + [i]));
         }
      
      $('#picRow').hide();

   });

      // move poisonous enemy flower into the opponent grid area
      $('.defender').on('click', function() {
         console.log('BIG TEST');
         $(this).appendTo('#defender');
         myDef = $(this);
         yourDefender = $(myDef).children().attr('value');
      });


   
});
