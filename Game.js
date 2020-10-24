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
                }else{
                    sReply = "The dog catches up to you and starts gnawing your leg...GAME OVER!";
                    this.stateCur = GameState.OVER;
                }
                break;
            case GameState.HOUSE:
                if(sInput.toLowerCase().match("knock")){
                    sReply ="No one seems to be answering. Do you continue to KNOCK or just ENTER?";
                    this.stateCur = GameState.HOUSE;
                }
                else if(sInput.toLowerCase().match("enter")){
                    sReply = "After you enter the door slams shut and lock you in. Do you YELL or GO find another exit?"
                    this.stateCur = GameState.INSIDE;
                }else{
                    sReply ="The door seems to be open and swaying. Do you KNOCK to see if anybody is home or just ENTER?";
                    this.stateCur = GameState.FLAT;
                }
                break;
            case GameState.INSIDE:
                if(sInput.toLowerCase().match("go")){
                    sReply = "You hear a loud BANG!!!. Do you KEEP walking or go INVESTIGATE?";
                    this.stateCur = GameState.BANG;

                }else{
                    sReply = "Nobody seems to answer.... Do you KEEP walking or go INVESTIGATE?";
                    this.stateCur = GameState.BANG;

                }
                break;
                case GameState.BANG:
                if(sInput.toLowerCase().match("investigate")){
                    sReply = "You see someone standing in the kitchen. 'Happy Halloween' he says and walks towards you. GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else{
                    sReply = "EEK! A mouse. Do you go into the KITCHEN or UP the stairs?";
                    this.stateCur = GameState.MOUSE;
    
                }
                break;
                case GameState.MOUSE:
                if(sInput.toLowerCase().match("kitchen")){
                    sReply = "You see someone standing in the kitchen. 'Happy Halloween' he says and walks towards you. GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else{
                    sReply = "As you walk up the stairs the floor boards are starting to creak and crack. There is a person in a mask reaching out. Do you GRAB his hand or KEEP walking?";
                    this.stateCur = GameState.STAIRS;
                }
                break;
                case GameState.STAIRS:
                if(sInput.toLowerCase().match("keep")){
                    sReply = "You fall down the stairs and break everything... GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else{
                    sReply = "You were saved and the guy vanishes. He leaves you a map to the exit. Do you follow the MAP or KEEP walking around?";
                    this.stateCur = GameState.UPSTAIRS;
                }
                break;
                case GameState.UPSTAIRS:
                if(sInput.toLowerCase().match("map")){
                    sReply = "You walk into a room and get trapped, It's Him!! ... GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else{
                    sReply = "You manage to find a window, with a rope and ladder. Do you use the ROPE or LADDER?";
                    this.stateCur = GameState.EXIT;
                }
                break;

                case GameState.OVER:
                sReply = "Type to Play Again";
                this.stateCur=GameState.WELCOMING;
                break;

                case GameState.EXIT:
                if(sInput.toLowerCase().match("rope")){
                    sReply = "As you climb down the rope snaps! ... GAME OVER!";
                    this.stateCur = GameState.OVER;

                }else{
                    sReply = "You manage to exit the house! As you leave you hear a voice say 'HAPPY HALLOWEEN' and laugh...GAME OVER";
                    this.stateCur = GameState.OVER;
                }
                break;
            // case GameState.n:
            //     if(sInput.toLowerCase().match("BANG")){
            //         sReply = "you enter a new world of adventure ... game over";
            //         this.stateCur = GameState.WELCOMING;
            //     }else{
            //         sReply = "the phone lines are down ... Would you like some BANG perhaps?";
            //     }
        }
        return([sReply]);
    }
}    