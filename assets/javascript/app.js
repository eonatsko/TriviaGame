  var rightAnswers=0;
  var wrongAnswers=0;
  var timer=30;
  var gamePlay=false;
  if(!gamePlay){
    $("#start").append("<img src=assets/images/start.jpeg>");
    }
    $(document).on('click', '#start', function() {
      getQuestion();

      var timerId = setInterval(function() {
        timer--;
        $("#timer").text("You have "+timer+" seconds to complete the quiz!");
        if(timer === 0) {
            clearInterval(timerId);
            $("#questions-container").hide();
            $("#timer").text("Correct Answers "+ rightAnswers);
            $("#timer").text("Incorrect Answers "+ wrongAnswers);
            $("#timer").text("Unanswered Questions "+ wrongAnswers);
    
        }
    }, 1000);
}) ;

$(document).on('click', '#end', function() {
  $("#questions-container").hide();
  clearInterval(timerId);
  $("#timer").text("Correct Answers "+ rightAnswers);
  $("#timer").text("Incorrect Answers "+ wrongAnswers);
  $("#timer").text("Unanswered Questions "+ wrongAnswers);
});
  var myQuestions = [
    {
      question: "1. Will Farrell did NOT appear in which of these early 2000’s movies?",
      answers: ["Van Wilder", "Elf", "Zoolander","Old School"],
      correctAnswer:"Van Wilder",
    },
    {
      question: "2. In which movie did Jennifer Garner portray Nurse Sandra in?",
      answers: ["Saving Private Ryan","Nurse Betty","Crash","Pearl Harbor"],
      correctAnswer: "Pearl Harbor",
    },
    {
      question: "3. Napoleon ran for ... in “Napoleon Dynamite”",
      answers:[ "Class President", "Prom King", "Mayor", "He Did Not Run"],
      correctAnswer: "He Did Not Run",
    },
   {
      question: "4. In “Cast Away,” Tom Hanks’ character gives the name Wilson to what inanimate object?",
      answers: ["Volleyball","Coconut","Teddy Bear","Basketball"],
      correctAnswer: "Volleyball",
    },
    {
      question: "5. Which movie alternates time sequences, going forward from the beginning, and regressing from the end?",
      answers: ["Insomnia", "Snatch", "Traffic", "Memento"],
      correctAnswer: "Memento",
    },
    {
      question: "6. In “Almost Famous”, what does William’s mother want him to become?",
      answers: ["Lawyer","Doctor","Professor","President"],
      correctAnswer: "Lawyer",
    },
    {
      question: "7. In “What Women Want,” Mel Gibson is in what line of work?",
      answers: ["Law","Medicine","Advertising","Acting"],
      correctAnswer: "Advertising",
    },
    {
      question: "8. Which Lord of the Rings installment boasts this line: 'My friends…you bow to no one'?",
      answers: ["The Two Towers", "Return of the King", "The Hobbit", "The Fellowship of the Ring"],
      correctAnswer: "Return of the King",
    },
    {
      question : "9. This was the true story of a professional con-man who assumed a variety of identities and eluded capture for many years.",
      answers: ["Saw","Mystic River","Snatch","Catch Me if You Can"],
      correctAnswer: "Catch me if You Can",
    } 
    
  ];
  function getQuestion() {
    $("#start").hide();
  
    for (i=0;i<myQuestions.length; i++){
    $("#questions-container").append(
        "<p>"+myQuestions[i].question+"</p>"+
        "<input type='radio' name='question-"+i+"'value="+myQuestions[i].answers[0]+"</input>"+
        "<h3>"+myQuestions[i].answers[0]+"</h3>"+
        "<input type='radio' name='question-"+i+"'value="+myQuestions[i].answers[1]+"</input>"+
        "<h3>"+myQuestions[i].answers[1]+"</h3>"+
        "<input type='radio' name='question-"+i+"'value="+myQuestions[i].answers[2]+"</input>"+
        "<h3>"+myQuestions[i].answers[2]+"</h3>"+
        "<input type='radio' name='question-"+i+"'value="+myQuestions[i].answers[3]+"</input>"+
        "<h3>"+myQuestions[i].answers[3]+"</h3>"+"<br>"
        


    )
  }
  $("#questions-container").append('<br><button id="end">Quiz Me!</button>');

}
function userSelect(){
  $('input').on("click", function() {
  $.each($('input[name="question-0"]:checked'), function(){
    if($(this).val()==="myQuestions[0].correctAnswer"){
      console.log("p");
  }
}
  );}
);
}

userSelect();

    
/* if($(this).val() === myQuestions[i].correctAnswer) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }
  }
  system.log(rightAnswers);
});  */


