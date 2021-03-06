var name		= "Plain Crystallizer";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Made 23 Plain Crystals";
var status_text		= "You've made the world a better, shinier, sparklier place. Yes, you. With this, your 23rd Plain Crystal, you've earned the fairly self-explanatory title Plain Crystallizer.";
var last_published	= 1338930494;
var is_shareworthy	= 0;
var url		= "plain-crystallizer";
var category		= "alchemy";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/plain_crystallizer_1315685874.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/plain_crystallizer_1315685874_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/plain_crystallizer_1315685874_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/plain_crystallizer_1315685874_40.png";
function on_apply(pc){
	
}
var conditions = {
	479 : {
		type	: "counter",
		group	: "crystallizer",
		label	: "crystalmalize",
		value	: "23"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(450 * multiplier), true);
	pc.stats_add_favor_points("ti", round_to_5(60 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 450,
	"favor"	: {
		"giant"		: "ti",
		"points"	: 60
	}
};

//log.info("plain_crystallizer.js LOADED");

// generated ok (NO DATE)
