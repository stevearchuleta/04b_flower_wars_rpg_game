// global variables
      var attack;
      var defend;

      var attackflower;
      var defendflower;
      
var attackerHP;
var attackerAP;
var attackerCAP;

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
			visual: 'assets/images/DarthMaul.png',
			healthPoints: 180,
			attackPower: 12,
			fullName: "Foxglove  |  Digitalis",
			counterAttackPower: 25
			}
};