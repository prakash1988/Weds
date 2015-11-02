/*
 * Life Runs on Code
 *
 * @author: Bhanuprakash (https://www.linkedin.com/in/Bhanuprakash T.R)
 * @event: Wedding
 * @description: The code which going to change our life :)
 * 
 */

(function () {
	//calling marriage function
	marriage({
		groom: new Person("Bhanuprakash","Male"), 
		bride: new Person("Haritha","Female"),
		location: "Arya vysya kalyana mandapam,Piler",
		dateTime: "2016-02-17T04:30:00+05:30", //17 Feb 2016 04:30 AM IST
		engagementDateTime: "2015-11-29T18:00:00+05:30" //29 Nov 2015 06:00 PM IST
	});

	// Person Class
	function Person(name,gender) {
		this.name = name;
		this.gender = gender;
		this.status = "single";
		this.responsibility = "nothing";
	}

	// The Marriage Function
	function marriage(args) {
		var marriageTimestamp = new Date(args.dateTime).getTime();
		var engagementTimestamp = new Date(args.engagementDateTime).getTime();
		var currentTimestamp = new Date().getTime();
        
		//Constants
        var MUGURTHAM_HOURS = 1.5;
        var HOURS = 60;
        var MINS = 60;
        var JAVASCRIPT_MILLISECONDS = 1000;
        
		if (currentTimestamp > (marriageTimestamp + (MUGURTHAM_HOURS * HOURS * MINS * JAVASCRIPT_MILLISECONDS))) {
			args.bride.status = args.groom.status = "married";
			args.bride.responsibility = args.groom.responsibility = "family";
			console.log(args.groom.name + " and "+ args.bride.name + " are happy couple now!! :)");
		}else if (currentTimestamp > engagementTimestamp) {
			args.bride.status = args.groom.status = "engaged";
            console.log(args.groom.name + " weds "+ args.bride.name + " on "+args.dateTime+" at "+args.location);
		}
        console.log(args.groom.name + " & "+ args.bride.name + " are " + args.groom.status);
	}
}()); //initalizing and calling marriage