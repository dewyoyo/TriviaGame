var triviaList = [
    [
        "What is the dot of an i or j called?", //question
        "tittle",       //examp1
        "dot",          //examp2
        "spec",         //examp3
        "spot",         //examp4
        1,              //right answer
        "he dot of an i or j is called a tittle because it is so small. Written by FunTrivia author Awesomeness13. "   //explanation     //interesting information
    ],
    [
        "What are Chubby Hubby, Half-Baked and Vermonty Python?",
        "Ice cream flavours",
        "Punk bands",
        "Comedians",
        "Cars",
        1,
        "They are just three of Ben & Jerry's ice cream flavours. Vermonty Python is coffee liqueur flavoured with cookie pieces and fudge. Half-Baked is a blend of chocolate and vanilla ice cream with gobs of cookie dough and pieces of brownie, and Chubby Hubby is vanilla ice cream with peanut-butter filled pretzel pieces and a ribbon of fudge."
    ],
    [
        "The first portable electric vacuum was released in 1905. Why did this machine not sell well?",
        "It weighed 92 pounds and had a fan 18 inches in diameter",
        "Electricity was not invented yet",
        "People preferred to have professionals come in and clean",
        "Beating rugs is good exercise for arm and back muscles",
        1,
        "Yep, you wouldn't catch me lugging around a 92 pound vacuum cleaner either! One of the most famous vacuum cleaner companies sprang up not long after this in 1908 when James Murray Spangler sold his electric suction vacuum cleaner patent to his cousin's husband, William Hoover. So began 'Hoover's Electric Suction Sweeper Company'. Hoover was so successful that to this day people refer to doing the vacuuming as 'hoovering'.Not that Hoover had it all his own way, the 'Eureka Vacuum Cleaner Company' were so popular that by 1919 they were making 2,000 vacuums a day - and amongst the attatchments you got with your vacuum was a blower to dry your hair! Possibly the greatest advancement in vacuums since this time has been iRobots 'Roomba', a small, disc-shaped vacuum that navigates itself around your house independently - genius!"
    ],
    [
        "According to legend, which plant screams when the root is dug up?",
        "Mandrake",
        "Carrot",
        "Orchid",
        "Daffodil",
        1,
        "The Mandrake is native to Central and Southern Europe, and all parts of the plant are poisonous. It has long been used in sorcery rituals, and some cultures believe it to be an aid to conception. According to folklore all who hear the scream are immediately killed. It's difficult to understand how people know that it screams if that's the case, but such legends are often far more interesting than reality!"
    ],
    [
        "What is'The Devil's Picture Book'?",
        "A deck of cards",
        "Marvel Comics",
        "A bathroom mirror",
        "Flat pack assembly instructions",
        1,
        "The first decks of cards, from which modern playing cards have descended, were Tarot cards which are still used by fortune tellers, and the soubriquet derives from the bible forbidding any form of divination. Comics can be great fun and I find mirrors quite useful (so long as the lighting is subdued) but I'm convinced that assembly instructions are compiled by using an internet translater to translate comprehensible English into Japanese, translating the results into Italian, then converting the Italian translation back into English so that it makes no sense at all!"
    ]
];

var timeinterval = 5; //minutes
var ansTimeInter = 5 * 1000;
var timerId;
var selectedAns = 0;

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};


function correctAns(k) {
    console.log("Correct");
    reset();
    $(".ques-div").html("<p style='color:black;font-size:22pt;font-weight:bold;'>Correct</p>");
    console.log(".ques-div: "+ $(".ques-div").text());
    timerId = setTimeout(retriveQues, ansTimeInter, (k + 1));

};
function wrongAns(anskey, k) {
    console.log("Wrong answer");
    reset();
    $(".ques-div").html("<p style='color:black;font-size:22pt;font-weight:bold;'>Nope</p>");
    $(".ques-div").append("The Correct Answer was " + anskey + ". <br>");
    $(".ques-div").append(triviaList[k][6]);
    console.log(".ques-div: "+ $(".ques-div").text());
    timerId = setTimeout(retriveQues, ansTimeInter, (k + 1));
};
function reset() {
    //  Change the time div to "00:00."
    timeinterval = 5;
    $("#remaining-time").text(timeConverter(timeinterval));

    $(".ques-div").empty();
    $(".exmp-div").empty();
};
// display the trivia question and examples.
function retriveQues(i) {
    reset();

    // Question, examples and answer
    $(".ques-div").html("<p>Q : " + triviaList[i][0] + "</p>");
    $(".exmp-div").html("<h4 id='exmp1' class='exmp'>" + "1: " + triviaList[i][1] + "</h4>");
    $(".exmp-div").append("<h4 id='exmp2' class='exmp'>" + "2: " + triviaList[i][2] + "</h4>");
    $(".exmp-div").append("<h4 id='exmp3' class='exmp'>" + "3: " + triviaList[i][3] + "</h4>");
    $(".exmp-div").append("<h4 id='exmp4' class='exmp'>" + "4: " + triviaList[i][4] + "</h4>");
    var answer = triviaList[i][5];

    console.log("triviaList[i][1] " + triviaList[i][0]);
    console.log("#exmp1: " + $("#exmp1").text());

    // user select the one of the example
    $(".exmp").on("click", function () {

        console.log("exmp click : " + $(this).text());
        var str = $(this).text();
        selectedAns = str.substr(0, 1);
        console.log("selectedAns: " + selectedAns);

        if (selectedAns == answer) {
            correctAns(i);
        }
        else {
            wrongAns(triviaList[i][answer], i);
        };
    });
};

// beginning - if user click the 'start', then start the trivia game
$(".exmp-div").html("<h4 id='exmp1' class='exmp' style='font-size:30pt'>Start</h4>");
$(".exmp").on("click", function () {

        retriveQues(0);

});