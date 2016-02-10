var jokes = [
        {"q": "What did mama buffalo say when her youngest went off to college?", "a": "Bison!"},
        {"q": "How can you tell if a buffalo is under your sleeping bag?", "a": "The ceiling of your tent is very close."},
        {"q": "What do you find between the hooves of buffaloes?", "a": "Slow buffalo hunters."},
        {"q": "What did the grape say when the buffalo stood on it?", "a": "Nothing, it just let out a little wine!"},
        {"q": "What do you get when you cross peanut butter with a buffalo?", "a": "You either get peanut butter that roams the range or a buffalo that sticks to the roof of your mouth."},
        {"q": "How can you tell a buffalo from a field mouse?", "a": "Try to pick it up. If you can't, it's either a buffalo or a very overweight mouse."},
        {"q": "What time is it when a buffalo sits in your canoe?", "a": "Time to get a new canoe."},
        {"q": "How do you make sense out of a water buffalo?", "a": "With buffalo nickels."},
        {"q": "What has 2 tails, 3 horns and 6 feet?", "a": "A water buffalo with spare parts!"},
        {"q": "Why did the buffalo cross the road?", "a": "To prove to the possum that it could be done!"},
        {"q": "What do you call an buffalo at the North Pole?", "a": "Lost!"},
        {"q": "What's brown but turns red?", "a": "An embarrassed buffalo!"},
        {"q": "What the difference between a Buffalo and Bison?", "a": "You can't wash your hands in a buffalo!"},
        {"q": "What is as big as a buffalo but weighs nothing?", "a": "Its shadow!"},
        {"q": "What do you call a single buffalo?", "a": "A buffalonely"},
        {"q": "What is the Native Americans name for buffalo that can fly?", "a": "Buffalo Wild Wings"},
        {"q": "What do you call a buffalo in a phone booth?", "a": "Stuck!"},
        {"q": "What animal is always the designated driver?", "a": "The water buffalo."},
        {"q": "What happens when 2 single buffalo meet up, fall in love and run away to get married?", "a": "they buffalope"},
        {"q": "What time is it when a buffalo sits on your bed?", "a": "Time to get a new bed!"},
        {"q": "How do you know when there is an buffalo under your bed?", "a": "When your nose touches the ceiling!"},
        {"q": "What do you call an buffalo with a carrot in each ear?", "a": "Anything you want as he can't hear you!"},
        {"q": "What kind of milk comes from a forgetful buffalo?", "a": "Milk of Amnesia"},
        {"q": "What do you call a buffalo that doesn't give milk?", "a": "A MILK DUD!"},
        {"q": "How do you make a milkshake?", "a": "Give a buffalo a pogo stick."}
];

//var colors = ["#508b1a", "#1a508b", "#8b1a50"];

var colors = ["rgb(139, 26, 80)", "rgb(26, 80, 139)", "rgb(80, 139, 26)"]

$("body").css("background-color", colors[Math.floor(Math.random()*colors.length)])

var joke;

function tell_joke() {
            joke = jokes[Math.floor(Math.random()*jokes.length)]
            $("#text").html(joke["q"]);
            while (true) {
                var color = colors[Math.floor(Math.random()*colors.length)];
                if (color != $("body").css("background-color")) {
                    $("body").css("background-color", color);
                    break;
                }
            }
            $("#button").html("ANSWER");
}

tell_joke()

function show_answer() {
            $("#text").html(joke["a"]);
            $("#button").html("NEXT");
}

$("#button").click(function() {
    console.log(1);
    if ($("#button").html() == "ANSWER") {
        console.log(2);
        show_answer()
    } else {
        console.log(3);
        tell_joke();
    }
});