var globalNinja = "Yoshi";

function reportActivity() {
    var functionActivity = "jumping";

    for(var i=1; i<3; i++) {
        var forMessage = globalNinja + " " + functionActivity;
        assert(forMessage === "Yoshi jumping", "Yoshi is jamping within the for block");
        assert(i, "Current loop counter: " + i);
    }
    assert(i === 3 && forMessage === "Yoshi jumping", "Loop variables accessible outside of the loop");
}

reportActivity();

assert( 
    typeof functionActivity === "undefined" && 
    typeof i === "undefined" && 
    typeof forMessage === "undefined", "We cannot see function variables outside of a function"
);