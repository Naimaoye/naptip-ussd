import UssdMenu from "ussd-menu-builder";

let sessions = {};
let menu = new UssdMenu();
let gender = '';
let state = '';
let incidence = '';
menu.sessionConfig({
  start: (sessionId, callback)=>{
      // initialize current session if it doesn't exist
      // this is called by menu.run()
      if(!(sessionId in sessions)) sessions[sessionId] = {};
      callback();
  },
  end: (sessionId, callback)=>{
      // clear current session
      // this is called by menu.end()
      delete sessions[sessionId];
      callback();
  },
  set: (sessionId, key, value, callback) => {
      // store key-value pair in current session
      sessions[sessionId][key] = value;
      callback();
  },
  get: (sessionId, key, callback)=>{
      // retrieve value by key in current session
      let value = sessions[sessionId][key];
      callback(null, value);
  }
});

menu.startState({
  run: () => {
    menu.con(
      "This is the NAPTIP VAPP Reporter, kindly select your Gender. Enter 1 or 2 to proceed:" + "\n1. Male" + "\n2. Female"
    );
  },
  // next object links to next state based on user input
  next: {
    "1": "male",
    "2": "female",
  },
 
});

menu.state("male", {
  run: () => {
    gender = 'male'
    menu.session.set('gender', gender);
    menu.con(
      "Kindly select the incidence you will like to report. Enter 1,2,3,4,5 to proceed:" + "\n1. Rape" + "\n2. Violence" + "\n3.Human Trafficking" + "\n4.Child labour"+ "\n5.Others" + "\n00. Back" 
    );
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
    run: () => {
        gender = 'female'
        menu.session.set('gender', gender);
      menu.con(
        "Kindly select the incidence you will like to report. Enter 1,2,3,4,5 to proceed:" + "\n1. Rape" + "\n2. Violence" + "\n3.Human Trafficking" + "\n4.Child labour"+ "\n5.Others" + "\n00. Back" 
      );
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
  run: () => {
    incidence = 'rape'
    menu.session.set('incidence', incidence);
    menu.con(
        "Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R"+ "\n5.S-Z" + "\n00. Back" 
      );
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
    run: () => {
        incidence = 'violence'
        menu.session.set('incidence', incidence);
      menu.con(
          "Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R"+ "\n5.S-Z" + "\n00. Back" 
        );
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
    run: () => {
        incidence = 'human trafficking'
        menu.session.set('incidence', incidence);
      menu.con(
          "Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R"+ "\n5.S-Z" + "\n00. Back" 
        );
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
    run: () => {
        incidence = 'child labour'
        menu.session.set('incidence', incidence);
      menu.con(
          "Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R"+ "\n5.S-Z" + "\n00. Back" 
        );
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
    run: () => {
        incidence = 'others'
        menu.session.set('incidence', incidence);
      menu.con(
          "Please select the first letter of your resident state:" + "\n1.A-B" + "\n2.C-I" + "\n3.J-L" + "\n4.N-R"+ "\n5.S-Z" + "\n00. Back" 
        );
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
    run: () => {
      menu.con(
          "Please select your resident state:" +  "\n1.Abia" + "\n2.Adamawa" + "\n3.Akwa Ibom" + "\n4.Anambra"+ "\n5.Bauchi"+ "\n6.Bayelsa"+ "\n7.Benue"+ "\n8.Borno" + "\n00. Back"
        );
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
    run: () => {
      menu.con(
          "Please select your resident state:" +  "\n1.Cross River" + "\n2.Delta" + "\n3.Ebonyi" + "\n4.Edo"+ "\n5.Ekiti"+ "\n6.Enugu"+ "\n7.Gombe"+ "\n8.Imo" + "\n00. Back"
        );
    },
    next: {
        "1": "crossRiver",
        "2": "delta",
        "3": "ebonyi",
        "4": "edo",
        "5": "ekiti",
        "6": "enugu",
        "5": "gombe",
        "5": "imo",
        "00": "others"
    }
  });
  menu.state('J-L', {
    run: () => {
      menu.con(
          "Please select your resident state:" +  "\n1.Jigawa" + "\n2.Kaduna" + "\n3.Kano" + "\n4.Katsina"+ "\n5.Kebbi"+ "\n6.Kogi"+ "\n7.Kwara"+ "\n8.Lagos" + "\n00. Back"
        );
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
    run: () => {
      menu.con(
          "Please select your resident state:" +  "\n1.Nasarawa" + "\n2.Niger" + "\n3.Ogun" + "\n4.Ondo"+ "\n5.Osun"+ "\n6.Oyo"+ "\n7.Plateau"+ "\n8.Rivers" + "\n00. Back"
        );
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
    run: () => {
      menu.con(
          "Please select your resident state:" +  "\n1.Sokoto" + "\n2.Taraba" + "\n3.Yobe" + "\n4.Zanfara"+ "\n00. Back"
        );
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
    run: () => {
        state = 'abia';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.');
      
    }
  });
  menu.state('adamawa', {
    run: () => {
        state = 'adamawa';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('akwaIbom', {
    run: () => {
        state = 'akwaIbom';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('anambra', {
    run: () => {
        state = 'anambra';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('bauchi', {
    run: () => {
        state = 'bauchi';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('bayelsa', {
    run: () => {
        state = 'bayelsa';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('benue', {
    run: () => {
        state = 'benue';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('borno', {
    run: () => {
        state = 'borno';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('crossRiver', {
    run: () => {
        state = 'crossRiver';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('delta', {
    run: () => {
        state = 'delta';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('ebonyi', {
    run: () => {
        state = 'ebonyi';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('edo', {
    run: () => {
        state = 'edo';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('ekiti', {
    run: () => {
        state = 'ekiti';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('enugu', {
    run: () => {
        state = 'enugu';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('gombe', {
    run: () => {
        state = 'gombe';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('imo', {
    run: () => {
        state = 'imo';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('jigawa', {
    run: () => {
        state = 'jigawa';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('kaduna', {
    run: () => {
        state = 'kaduna';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('kano', {
    run: () => {
        state = 'kano';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('katsina', {
    run: () => {
        state = 'katsina';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('kebbi', {
    run: () => {
        state = 'kebbi';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('kogi', {
    run: () => {
        state = 'kogi';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('kwara', {
    run: () => {
        state = 'kwara';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('lagos', {
    run: () => {
        state = 'lagos';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('nasarawa', {
    run: () => {
        state = 'nasarawa';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('niger', {
    run: () => {
        state = 'niger';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('ogun', {
    run: () => {
        state = 'ogun';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('ondo', {
    run: () => {
        state = 'ondo';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('osun', {
    run: () => {
        state = 'osun';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('oyo', {
    run: () => {
        state = 'oyo';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('plateau', {
    run: () => {
        state = 'plateau';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('rivers', {
    run: () => {
        state = 'rivers';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('sokoto', {
    run: () => {
        state = 'sokoto';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('taraba', {
    run: () => {
        state = 'taraba';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('yobe', {
    run: () => {
        state = 'yobe';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
  });
  menu.state('zamfara', {
    run: () => {
        state = 'zamfara';
  
          menu.end('Thank you, your report has been registered, we will contact you shortly.' +"data: "+ gender +' '+ incidence + ' '+ state);
      
    }
});

module.exports = menu;


