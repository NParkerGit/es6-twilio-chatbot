const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    FLAT: Symbol("flat"),
    RUN: Symbol("run"),
    HOUSE: Symbol("house"),
    MOUSE: Symbol("mouse"),
    INSIDE: Symbol("inside"),
    STAIRS: Symbol("stairs"),
    UPSTAIRS: Symbol("upstairs"),
    OVER: Symbol("over"),
    EXIT: Symbol("exit"),
    BANG: Symbol("bang")
});

export default class Game {
    constructor() {
        this.stateCur = GameState.WELCOMING;
    }
 
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You are being chased by a dog while out Trick-or-Treating. Do you try to out RUN it or GO to the old abandoned house around the corner?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("go")){
                    sReply ="The door seems to be open and swaying. Do you KNOCK to see if anybody is home or just ENTER?";
                    this.stateCur = GameState.HOUSE;
                }else if(sInput.toLowerCase().match("run")){
                    sReply = "The dog catches up to you and starts gnawing your leg... \n GAME OVER!";
                    this.stateCur = GameState.OVER;
                }
                else
                    {
                        sReply = "You are being chased by a dog while out Trick-or-Treating. Do you try to out RUN it or GO to the old abandoned house around the corner?";
                        this.stateCur = GameState.FLAT;
                    }
                break;
            case GameState.HOUSE:
                if(sInput.toLowerCase().match("knock")){
                    sReply ="No one seems to be answering. Do you continue to KNOCK or just ENTER?";
                    this.stateCur = GameState.HOUSE;
                }
                else if(sInput.toLowerCase().match("enter")){
                    sReply = "After you enter the door slams shut and locks you in. Do you YELL or GO find another exit?"
                    this.stateCur = GameState.INSIDE;
                }else{
                    sReply ="The door seems to be open and swaying. Do you KNOCK to see if anybody is home or just ENTER?";
                    this.stateCur = GameState.HOUSE;
                }
                break;
            case GameState.INSIDE:
                if(sInput.toLowerCase().match("go")){
                    sReply = "You hear a loud BANG!!!. Do you KEEP walking or go INVESTIGATE?";
                    this.stateCur = GameState.BANG;

                }else if(sInput.toLowerCase().match("yell")){
                    sReply = "Nobody seems to answer, and you hear a bang!.... Do you KEEP walking or go INVESTIGATE?";
                    this.stateCur = GameState.BANG;

                }
                else{
                    sReply = "After you enter the door slams shut and locks you in. Do you YELL or GO find another exit?"
                    this.stateCur = GameState.INSIDE;
                }
                break;
            case GameState.BANG:
                if(sInput.toLowerCase().match("investigate")){
                    sReply = "You see someone standing in the kitchen with a knife. 'Happy Halloween' he says and walks towards you... \n GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else{
                    sReply = "EEK! A bunch of rats crawl over your toes... Do you go into the KITCHEN or UP the stairs?";
                    this.stateCur = GameState.MOUSE;
    
                }
                break;
            case GameState.MOUSE:
                if(sInput.toLowerCase().match("kitchen")){
                    sReply = "You see someone standing in the kitchen with a knife. 'Happy Halloween' he says and walks towards you... \n GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else if(sInput.toLowerCase().match("up")){
                    sReply = "As you walk up the stairs the floor boards are starting to creak and crack. There is a person in a mask reaching out. Do you GRAB his hand or KEEP walking up the stairs?";
                    this.stateCur = GameState.STAIRS;
                }
                else{
                    sReply = "EEK! A bunch of rats crawl over your toes... Do you go into the KITCHEN or UP the stairs?";
                    this.stateCur = GameState.MOUSE;
                }
                break;
            case GameState.STAIRS:
                if(sInput.toLowerCase().match("keep")){
                    sReply = "You fall down the stairs and break everything... \n GAME OVER!";
                    this.stateCur = GameState.OVER;

                }
                if(sInput.toLowerCase().match("grab")){
                    sReply = "You were saved and the guy just vanishes in front of you. He leaves you a map to the exit. Do you follow the MAP or KEEP walking around to find the exit?";
                    this.stateCur = GameState.UPSTAIRS;
                }
                else{
                    sReply = "As you walk up the stairs the floor boards are starting to creak and crack. There is a person in a mask reaching out. Do you GRAB his hand or KEEP walking up the stairs?";
                    this.stateCur = GameState.STAIRS;
                }
                break;
            case GameState.UPSTAIRS:
                if(sInput.toLowerCase().match("map")){
                    sReply = "You walk into a room and the door shuts behind you. YOU ARE TRAPPED! You see a shadowy figure, IT WAS HIM!!!... \n GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else if(sInput.toLowerCase().match("keep")){
                    sReply = "You manage to find a window that you can escape out of. Beside the window appears a rope and ladder. Do you use the ROPE or LADDER?";
                    this.stateCur = GameState.EXIT;
                }
                else{
                    sReply = "You were saved and the guy just vanishes in front of you. He leaves you a map to the exit. Do you follow the MAP or KEEP walking around to find the exit?";
                    this.stateCur = GameState.UPSTAIRS;
                }
                break;

            case GameState.OVER:
                sReply = "Type to Play Again";
                this.stateCur=GameState.WELCOMING;
                break;

            case GameState.EXIT:
                if(sInput.toLowerCase().match("rope")){
                    sReply = "As you slide down the rope snaps!... \n GAME OVER!";
                    this.stateCur = GameState.OVER;
                }
                
                else if(sInput.toLowerCase().match("rope")){
                    sReply = "You manage to climb down the ladder and exit the house! As you leave you hear a voice say 'HAPPY HALLOWEEN'... \n YOU WIN!";
                    this.stateCur = GameState.OVER;
                }
                else{
                    sReply = "You manage to find a window that you can escape out of. Beside the window appears a rope and ladder. Do you use the ROPE or LADDER?";
                    this.stateCur = GameState.EXIT;
                }
                break;
        }
        return([sReply]);
    }
}    