var called_one = false;
var called_two = false;

function callMe(msg) {
    console.log("call me hit: " + msg);
    called_one = true;
}

function callMeAlso(msg) {
    console.log("call me also hit: " + msg);
    called_two = true;
}

//setup listener
var jsListener = new JSListener();
jsListener.addListener("someEventMessage", callMe);
jsListener.addListener("someEventMessage", callMeAlso);

//add the same listener twice
jsListener.addListener("someEventMessage", callMeAlso);

//call the listening functions
jsListener.callListeners("someEventMessage", "some message");

//later remove the listener
jsListener.removeListener("someEventMessage", callMe);

//test for failures

if (jsListener.callObj["someEventMessage"].length > 1)
    console.error("ERROR: removing listener failed or duplicates incorrectly added");

if (!called_one || !called_two)
    console.error("ERROR: function callback miss");