"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _ussdMenuBuilder = _interopRequireDefault(require("ussd-menu-builder"));

var sessions = {};
var menu = new _ussdMenuBuilder["default"]();
menu.sessionConfig({
  start: function start(sessionId, callback) {
    // initialize current session if it doesn't exist
    // this is called by menu.run()
    if (!(sessionId in sessions)) sessions[sessionId] = {};
    callback();
  },
  end: function end(sessionId, callback) {
    // clear current session
    // this is called by menu.end()
    delete sessions[sessionId];
    callback();
  },
  set: function set(sessionId, key, value, callback) {
    // store key-value pair in current session
    sessions[sessionId][key] = value;
    callback();
  },
  get: function get(sessionId, key, callback) {
    // retrieve value by key in current session
    var value = sessions[sessionId][key];
    callback(null, value);
  }
});
menu.startState({
  run: function run() {
    menu.con("This is the NAPTIP VAPP Reporter, kindly select your Gender. Enter 1 or 2 to proceed:" + "\n1. Male" + "\n2. Female");
  },
  // next object links to next state based on user input
  next: {
    "1": "male",
    "2": "female"
  }
});
menu.state("male", {
  run: function run() {
    menu.con("Kindly select the incidence you will like to report. Enter 1,2,3,4,5 to proceed:" + "\n1. Rape" + "\n2. Violence" + "\n3.Human Trafficking" + "\n4.Child labour" + "\n5.Others" + "\n00. Back");
  },
  // next object links to next state based on user input
  next: {
    "1": "rape",
    "2": "violence",
    "3": "humanTrafficking",
    "4": "childLabour",
    "5": "others",
    '00': '__start__'
  },
  defaultNext: 'invalidOption'
});
menu.state("female", {
  run: function run() {
    menu.con("Kindly select the incidence you will like to report. Enter 1,2,3,4,5 to proceed:" + "\n1. Rape" + "\n2. Violence" + "\n3.Human Trafficking" + "\n4.Child labour" + "\n5.Others" + "\n00. Back");
  },
  // next object links to next state based on user input
  next: {
    "1": "rape",
    "2": "violence",
    "3": "humanTrafficking",
    "4": "childLabour",
    "5": "others",
    '00': '__start__'
  },
  defaultNext: 'invalidOption'
});
menu.state('rape', {
  run: function run() {
    menu.con("Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R" + "\n5.S-Z" + "\n00. Back");
  },
  next: {
    "1": "A-B",
    "2": "C-I",
    "3": "J-L",
    "4": "N-R",
    "5": "S-Z",
    "00": "male"
  }
});
menu.state('violence', {
  run: function run() {
    menu.con("Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R" + "\n5.S-Z" + "\n00. Back");
  },
  next: {
    "1": "A-B",
    "2": "C-I",
    "3": "J-L",
    "4": "N-R",
    "5": "S-Z",
    "00": "male"
  }
});
menu.state('humanTrafficking', {
  run: function run() {
    menu.con("Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R" + "\n5.S-Z" + "\n00. Back");
  },
  next: {
    "1": "A-B",
    "2": "C-I",
    "3": "J-L",
    "4": "N-R",
    "5": "S-Z",
    "00": "male"
  }
});
menu.state('childLabour', {
  run: function run() {
    menu.con("Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R" + "\n5.S-Z" + "\n00. Back");
  },
  next: {
    "1": "A-B",
    "2": "C-I",
    "3": "J-L",
    "4": "N-R",
    "5": "S-Z",
    "00": "male"
  }
});
menu.state('others', {
  run: function run() {
    menu.con("Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R" + "\n5.S-Z" + "\n00. Back");
  },
  next: {
    "1": "A-B",
    "2": "C-I",
    "3": "J-L",
    "4": "N-R",
    "5": "S-Z",
    "00": "male"
  }
});
menu.state('A-B', {
  run: function run() {
    menu.con("Please select your resident state:" + "\n1.Abia" + "\n2.Adamawa" + "\n3.Akwa Ibom" + "\n4.Anambra" + "\n5.Bauchi" + "\n6.Bayelsa" + "\n7.Benue" + "\n8.Borno" + "\n00. Back");
  },
  next: {
    "1": "abia",
    "2": "adamawa",
    "3": "akwaIbom",
    "4": "anambra",
    "5": "bauchi",
    "6": "bayelsa",
    "7": "benue",
    "8": "borno",
    "00": "others"
  }
});
menu.state('C-I', {
  run: function run() {
    menu.con("Please select your resident state:" + "\n1.Cross River" + "\n2.Delta" + "\n3.Ebonyi" + "\n4.Edo" + "\n5.Ekiti" + "\n6.Enugu" + "\n7.Gombe" + "\n8.Imo" + "\n00. Back");
  },
  next: {
    "1": "crossRiver",
    "2": "delta",
    "3": "ebonyi",
    "4": "edo",
    "5": "ekiti",
    "6": "enugu",
    "7": "gombe",
    "8": "imo",
    "00": "others"
  }
});
menu.state('J-L', {
  run: function run() {
    menu.con("Please select your resident state:" + "\n1.Jigawa" + "\n2.Kaduna" + "\n3.Kano" + "\n4.Katsina" + "\n5.Kebbi" + "\n6.Kogi" + "\n7.Kwara" + "\n8.Lagos" + "\n00. Back");
  },
  next: {
    "1": "jigawa",
    "2": "kaduna",
    "3": "kano",
    "4": "katsina",
    "5": "kebbi",
    "6": "kogi",
    "7": "kwara",
    "8": "lagos",
    "00": "others"
  }
});
menu.state('N-R', {
  run: function run() {
    menu.con("Please select your resident state:" + "\n1.Nasarawa" + "\n2.Niger" + "\n3.Ogun" + "\n4.Ondo" + "\n5.Osun" + "\n6.Oyo" + "\n7.Plateau" + "\n8.Rivers" + "\n00. Back");
  },
  next: {
    "1": "nasarawa",
    "2": "niger",
    "3": "ogun",
    "4": "ondo",
    "5": "osun",
    "6": "oyo",
    "7": "plateau",
    "8": "rivers",
    "00": "others"
  }
});
menu.state('S-Z', {
  run: function run() {
    menu.con("Please select your resident state:" + "\n1.Sokoto" + "\n2.Taraba" + "\n3.Yobe" + "\n4.Zanfara" + "\n00. Back");
  },
  next: {
    "1": "sokoto",
    "2": "taraba",
    "3": "yobe",
    "4": "zamfara",
    "00": "others"
  }
});
menu.state('abia', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('adamawa', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('akwaIbom', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('anambra', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('bauchi', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('bayelsa', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('benue', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('borno', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('crossRiver', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('delta', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('ebonyi', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('edo', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('ekiti', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('enugu', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('gombe', {
  run: function run() {
    state = 'gombe';
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('imo', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('jigawa', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('kaduna', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('kano', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('katsina', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('kebbi', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('kogi', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('kwara', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('lagos', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('nasarawa', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('niger', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('ogun', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('ondo', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('osun', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('oyo', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('plateau', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('rivers', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('sokoto', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('taraba', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('yobe', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
menu.state('zamfara', {
  run: function run() {
    menu.end('Thank you, your report has been registered, we will contact you shortly.');
  }
});
module.exports = menu;
//# sourceMappingURL=ussd.js.map