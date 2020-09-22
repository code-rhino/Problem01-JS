class WuTangForeverBuzz {
    wuTangClan(inputValue){
        let output ="";
        for (var i=1; i <= inputValue; i++){
            if (i % 15 == 0) output +="WuTangForever\n";
            else if (i % 3 == 0) output +="Wu\n";
            else if (i % 5 == 0) output +="Tang\n";
            else output += i+"\n";
        }
        console.log(output);
        return output;
    }
}

module.exports = WuTangForeverBuzz;