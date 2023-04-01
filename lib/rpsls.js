function rps(move){
    const moves = ["rock", "paper", "scissor"]
    if (move == undefined) {
        var my_move =  moves[(Math.floor(Math.random() * 10) % 2)];
        var return_move = {player: my_move}
        console.log(return_move);
        process.exit(0);
    }

    if (typeof move != "string") {
      console.log(`Usage: node-rps [SHOT]
      Play Rock Paper Scissors (RPS)
      
        -h, --help      display this help message and exit
        -r, --rules     display the rules and exit
        
      [SHOT] = rock || paper || scissor
    
      Examples:
        node-rps        Return JSON with single player RPS result.
                        e.g. {"player":"rock"}
        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"scissors","result":"win"}`);
      process.exit(0);
    }
    
    move = move.toLowerCase();
    
    if (move == "lizard" || move == "spock") {
        console.error(move + "is out of range");
        process.exit(0);
    }
    


}
function rpsls(move){
    const moves = ["rock", "paper", "scissor","lizard","spock"]
    if (move == undefined) {
        var my_move =  moves[(Math.floor(Math.random() * 10) % 2)];
        var return_move = {player: my_move}
        console.log(return_move);
        process.exit(0);
    }
      if (typeof move != "string") {
        console.log(`Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        
          -h, --help        display this help message and exit
          -r, --rules       display the rules and exit
        
        [SHOT] = rock || paper || scissor || lizard ||spock 
        
        Examples:
          node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
          node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
        process.exit(0);
      }
    
}
export {rps, rpsls}