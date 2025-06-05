function getMomentFromHour(hour){
    if(hour>=0 && hour<12){
        return "matin";
    }
    else if(hour===12){
        return "midi";
    }
    else if(hour>12 && hour<18){
        return "après-midi";
    }
    else if(hour>=18 && hour<24){
        return "soir";
    }
    else if(hour>=24){"wrong"};
}

function printEmotionFromHour(moment){
    if(moment === "matin"){
        return "J'ai trop hâte de continuer de coder !";
    }
    else if(moment === "midi"){
        return "J'ai faim, j'en ai marre des bugs...";
    }
    else if(moment === "après-midi"){
        return "Ciao les copains";
    }
    else if(moment === "soir"){
        return "ZzzzZZZzzz";
    }
    else if(moment === "wrong")
        return "mauvaise option";
};

function getEmotionFromHour(hour){
    return printEmotionFromHour(getMomentFromHour(hour));
};

console.log(getEmotionFromHour(13));