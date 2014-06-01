"use strict";

/* World script name. For a new comms pack, change this to a unique name */
this.name = "Comms Pack A";

/* The generic prefix used for this OXP's comms entries in
 * descriptions.plist */
this.$commsPrefix = "commsPackA";

/* This function runs at game startup to set up the comms */
this.startUp = function()
{
	/* ensure the priority AI library is started */
	if (worldScripts["oolite-libPriorityAI"].startUp)
	{
		worldScripts["oolite-libPriorityAI"].startUp();
	}

	/* This object defines the communications to be set up. It has
	 * several layers: the first layer is the communications role for
	 * the ships; the second layer is the personality of the pilot;
	 * the third layer is the communications key, and the value is a
	 * key in descriptions.plist which is expanded to give the
	 * communications text. 
	 *
	 * See notes in descriptions.plist for more
	 * information. Using descriptions.plist rather than just putting
	 * literal text strings in makes it much easier to reuse
	 * components between roles and personalities.
	 *
	 * The roles have standard names defined by the core Oolite AIs
	 * (and potentially by OXP AIs, but we're not adding any new comms
	 * for those here).
	 *
	 * The personalities we can name what we like, so they should have
	 * an OXP-specific prefix, in this case "commsPackA". When a ship
	 * is added it gets a personality picked randomly from those
	 * available for its role - several comms packs could be defining
	 * different personalities.
	 *
	 * The communications keys again have standard names from Oolite
	 * core - again, custom OXP AIs might define some more, but we
	 * aren't adding new comms to those here.
	 *
	 * Oolite defines "oolite_surrender" and "oolite_thanksForHelp" as
	 * generic communications, so these need redefining for every
	 * role, even those which don't have messages.
	 */
	var comms = {
		/* role: bounty hunters */
		hunter: {
			/* The _makeComms function saves a bit of typing on
			 * defining key/value entries like
			 * "oolite_killedTarget": "[commsPackA_vigilante_killedTarget]",	
			 */
			/* Comms keys/values - see
			 * http://wiki.alioth.net/index.php/Oolite_PriorityAI_Documentation#Usage
			 * for a list of available keys. */

			/* personality: motivated by stopping criminals for 'justice' */
			commsPackA_vigilante: this._makeComms("vigilante",
				  [
					  "attackLowEnergy",
					  "beginningAttack",
					  "beginningAttackThargoid",
					  "beginningFight",
					  "continuingAttack",
					  "continuingAttackThargoid",
					  "distressResponseAggressor",
					  "distressResponseSender",
					  "engageWitchspaceDriveFlee",
					  "engageWitchspaceDriveGroup",
					  "friendlyFire",
					  "groupIsOutnumbered",
					  "incomingMissile",
					  "killedTarget",
					  "quiriumCascade",
					  "selectedStation",
					  "startFleeing",
					  "surrender",
					  "thanksForHelp",
					  "thargoidAttack",
					  "waypointReached"
				  ]),

			/* personality: motivated by being given money.
			 *
			 * Mostly defines the same keys as the vigilante above,
			 * with a few differences */
			commsPackA_mercenary: this._makeComms("mercenary",
				  [
					  "attackLowEnergy",
					  "beginningAttack",
					  "beginningAttackThargoid",
					  "beginningFight",
					  "continuingAttack",
					  "continuingAttackThargoid",
					  "distressResponseAggressor",
					  "distressResponseSender",
					  "engageWitchspaceDriveFlee",
					  "engageWitchspaceDriveGroup",
					  "firedMissile",
					  "friendlyFire",
					  "groupIsOutnumbered",
					  "incomingMissile",
					  "killedTarget",
					  "quiriumCascade",
					  "selectedStation",
					  "surrender",
					  "thanksForHelp",
					  "thargoidAttack",
					  "waypointReached"
				  ])
		},
		/* Traders of various sorts. No specific entries for
		 * trader-courier, trader-smuggler, trader-opportunist yet.
		 * Oolite defines "agreeingToDumpCargo" and "makeDistressCall",
		 * so all trader entries should include them to avoid the
		 * generic fallbacks. */
		trader: {
			/* personality: out to get the best profit from the trip */
			commsPackA_capitalist: this._makeComms("capitalist",
				  [
					  "agreeingToDumpCargo",
					  "attackLowEnergy",
					  "beginningAttack",
					  "beginningAttackThargoid",
					  "continueFleeing",
					  "continuingAttack",
					  "dockingWait",
					  "eject",
					  "engageWitchspaceDriveGroup",
					  "escortAccepted",
					  "friendlyFire",
					  "makeDistressCall",
					  "quiriumCascade",
					  "startFleeing",
					  "surrender",
					  "thanksForHelp",
					  "thargoidAttack"
				  ]),

			/* personality: hoping this time will be the big one */
			commsPackA_optimist: this._makeComms("optimist",
				 [
					 "agreeingToDumpCargo",
					 "attackLowEnergy",
					 "dockingWait",
					 "eject",
					 "engageWitchspaceDriveGroup",
					 "escortAccepted",
					 "friendlyFire",
					 "incomingMissile",
					 "makeDistressCall",
					 "quiriumCascade",
					 "selectedStation",
					 "selectedWitchspaceDestination",
					 "startFleeing",
					 "surrender",
					 "thanksForHelp",
					 "thargoidAttack"
				 ])
		},
		// pirates and associates
		/* Oolite defines 'oolite_makePirateDemand' for pirates */
		pirate: {
			/* Looter: out to make a profit from "free" cargo */
			commsPackA_looter: this._makeComms("looter",
			   [
				   "attackLowEnergy",
				   "beginningAttack",
				   "beginningAttackThargoid",
				   "continuingAttack",
				   "eject",
				   "engageWitchspaceDriveFlee",
				   "firedMissile",
				   "friendlyFire",
				   "groupIsOutnumbered",
				   "hitTarget",
				   "killedTarget",
				   "killedUncrewedTarget",
				   "landingOnPlanet",
				   "makePirateDemand",
				   "quiriumCascade",
				   "scoopedCargo",
				   "selectedWitchspaceDestination",
				   "surrender",
				   "thanksForHelp"
			   ]),
			/* Rebel: fighting against an oppressive state */
			commsPackA_rebel: this._makeComms("rebel",
			   [
				   "attackLowEnergy",
				   "beginningAttack",
				   "beginningAttackThargoid",
				   "continuingAttack",
				   "continuingAttackThargoid",
				   "eject",
				   "engageWitchspaceDriveFlee",
				   "engageWitchspaceDriveGroup",
				   "friendlyFire",
				   "groupIsOutnumbered",
				   "hitTarget",
				   "incomingMissile",
				   "killedTarget",
				   "killedUncrewedTarget",
				   "makePirateDemand",
				   "quiriumCascade",
				   "scoopedCargo",
				   "startFleeing",
				   "startHelping",
				   "surrender",
				   "thargoidAttack",
				   "thanksForHelp"
			   ])
		},
		// assassins
		assassin: {
			/* Enforcer: working to protect a criminal organisation */
			commsPackA_enforcer: this._makeComms("enforcer",
			 [
				 "attackLowEnergy",
				 "beginningAssassination",
				 "beginningAttack",
				 "beginningAttackInanimate",
				 "continuingAttack",
				 "firedMissile",
				 "hitTarget",
				 "killedTarget",
				 "killedUncrewedTarget",
				 "quiriumCascade",
				 "startFleeing",
				 "surrender",
				 "thargoidAttack",
				 "thanksForHelp",
				 "waypointReached"
			 ]),
			/* Freelancer: takes on contracts for the money, from
			 * various sources */
			commsPackA_freelancer: this._makeComms("freelancer",
			 [
				 "attackLowEnergy",
				 "beginningAssassination",
				 "beginningAttack",
				 "beginningAttackInanimate",
				 "continuingAttack",
				 "firedMissile",
				 "hitTarget",
				 "killedTarget",
				 "killedUncrewedTarget",
				 "quiriumCascade",
				 "startFleeing",
				 "surrender",
				 "thargoidAttack",
				 "thanksForHelp",
				 "waypointReached"
			 ])
		},
		// police ships
		police: {
			/* Formal by-the-book police */
			commsPackA_academy: this._makeComms("academy",
				[
					"beginningAttack",
					"beginningAttackThargoid",
					"distressResponseAggressor",
					"distressResponseSender",
					"eject",
					"firedMissile",
					"friendlyFire",
					"killedTarget",
					"markForFines",
					"offenceDetected",
					"patrolReportIn",
					"startHelping",
					"surrender",
					"thanksForHelp",
					"thargoidAttack"
				]),
			/* Aggressive police looking for a fight */
			commsPackA_vicious: this._makeComms("vicious",
				[
					"beginningAttack",
					"beginningAttackThargoid",
					"continuingAttack",
					"continuingAttackThargoid",
					"distressResponseAggressor",
					"distressResponseSender",
					"dockingWait",
					"eject",
					"firedMissile",
					"friendlyFire",
					"hitTarget",
					"killedTarget",
					"markForFines",
					"offenceDetected",
					"quiriumCascade",
					"surrender",
					"thanksForHelp",
					"thargoidAttack"
				])
		},
		// escorts
		escort: {
			/* Paramilitary-style escorts: hired from
			 * professional(ish) organisations. */
			commsPackA_paramilitary: this._makeComms("paramilitary",
				[
					"attackLowEnergy",
					"beginningAttack",
					"beginningAttackThargoid",
					"continuingAttack",
					"continuingAttackThargoid",
					"eject",
					"escortFormation",
					"escortMotherAccepted",
					"friendlyFire",
					"groupIsOutnumbered",
					"incomingMissile",
					"killedTarget",
					"quiriumCascade",
					"startHelping",
					"surrender",
					"thanksForHelp"
				]),
			/* Friendly escorts: probably know the crew of the ship
			 * they're escorting personally. */
			commsPackA_friendly: this._makeComms("friendly",
				[
					"attackLowEnergy",
					"beginningAttack",
					"beginningAttackThargoid",
					"continuingAttack",
					"continuingAttackThargoid",
					"eject",
					"escortFormation",
					"escortMotherAccepted",
					"friendlyFire",
					"groupIsOutnumbered",
					"incomingMissile",
					"killedTarget",
					"quiriumCascade",
					"startHelping",
					"surrender",
					"thanksForHelp"
				])

		},
		// station<->surface shuttles
		shuttle: {
			commsPackA_cargoshuttle: this._makeComms("cargoshuttle",
				[
					"dockingWait",
					"eject",
					"incomingMissile",
					"landingOnPlanet",
					"makeDistressCall",
					"quiriumCascade",
					"selectedStation",
					"surrender",
					"thanksForHelp"
				]),
			commsPackA_touristshuttle: this._makeComms("touristshuttle",
				[
					"dockingWait",
					"eject",
					"incomingMissile",
					"landingOnPlanet",
					"makeDistressCall",
					"quiriumCascade",
					"selectedStation",
					"surrender",
					"thanksForHelp"
				])
		},
		// stations and rock hermits
		station: {
			commsPackA_mainstation: this._makeComms("mainstation",
				[												
					"friendlyFire",
					"killedAlly",
					"killedNonTarget",
					"killedTarget",
					"launchDefenseShips",
					"launchPatrol",
					"offenceDetected",
					"quiriumCascade"
				])
		},
		hermit: {
			commsPackA_rockhermit: this._makeComms("rockhermit",
				[												
					"attackLowEnergy",
					"friendlyFire",
					"killedAlly",
					"launchMiner",
					"quiriumCascade"
				])
		},
		// scavengers and miners
		scavenger: {
			commsPackA_loner: this._makeComms("loner",
				[
					"beginningAttack",
					"surrender",
					"thanksForHelp"
				]),
			commsPackA_cheerful: this._makeComms("cheerful",
				[
					"attackLowEnergy",
					"eject",
					"incomingMissile",
					"mining",
					"scoopedCargo",
					"surrender",
					"thanksForHelp"
				])
		},
		// station defence ships
		defenseShip: {
			commsPackA_defenseship: this._makeComms("defenseship",
				[
					"attackLowEnergy",
					"beginningAttack",
					"beginningAttackThargoid",
					"eject",
					"friendlyFire",
					"incomingMissile",
					"killedTarget",
					"quiriumCascade",
					"surrender",
					"thanksForHelp"
				])
		} 
	};

	/* This loads the communications settings into the library */
	worldScripts["oolite-libPriorityAI"]._setCommunications(comms);
}


/* This function makes a set of descriptions.plist entries, to save a
 * little typing. 'specific' is the personality we're writing for, and
 * 'entries' is an array of the communications keys (which assumes an
 * oolite_ prefix on all of them. */
this._makeComms = function(specific, entries)
{
	var result = {};
	for (var i=entries.length-1;i>=0;i--)
	{
		var entry = entries[i];
		result["oolite_"+entry] = "["+this.$commsPrefix+"_"+specific+"_"+entry+"]";
	}
	return result;
}