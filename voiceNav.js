// var recognition = new webkitSpeechRecognition();

// recognition.lang = window.navigator.language;
// recognition.interimResults = true;

// recognition.start();

// recognition.addEventListener('result', (event) => {
//    console.log("result: " + event)
//    const result = event.results[event.results.length - 1][0].transcript.toLowerCase();

//    if(result.indexOf("accueil.") !== -1 || result.indexOf("accueil.") !== -1){
//       window.location.href = "index.html";
//    }
//    if(result.indexOf("emploi du temps.") !== -1 || result.indexOf("emploi du temps.") !== -1){
//       window.location.href = "edt.html";
//    }
//    if(result.indexOf("profil.") !== -1 || result.indexOf("profil.") !== -1){
//       window.location.href = "profil.html";
//    }
//    if(result.indexOf("contrat.") !== -1 || result.indexOf("contrat.") !== -1){
//       window.location.href = "contrat.html";
//    }
//    if(result.indexOf("fiche de paie.") !== -1 || result.indexOf("fiche de paie.") !== -1){
//       window.location.href = "fichePaie.html";
//    }
//    if(result.indexOf("campus.") !== -1 || result.indexOf("campus.") !== -1){
//       window.location.href = "campus.html";
//    }
//    if(result.indexOf("accessibilité.") !== -1 || result.indexOf("accessibilité.") !== -1){
//       window.location.href = "access.html";
//    }

// });