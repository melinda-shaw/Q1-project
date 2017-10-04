var questions = [{
    id: "q5",
    class: 'alert alert-info',
    qText: "Did you just spot Malia Obama?",
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-smileySunglasses.png">`,
      answer: "Yes",
      text: "Text mom. But do not be such a creeper around Malia that she has to text Michelle."
    }, {
      type: `no`,
      image: `<img class='image-small' src="./images/image-flag.png">`,
      answer: "Nope",
      text: "Oh well."
    }]
  }, {
    id: "q4",
    class: 'alert alert-warning',
    qText: "Is it 11:37 p.m. on her bday and you have been crazy busy all day and are now out and your battery is at 4%?",
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-bdayHat.png">`,
      answer: "Yes",
      text: "Text from a friend's phone. Save your battery in case you need to call security on the way back to your dorm.",
    }, {
      type: `no`,
      image: `<img class='image-medium'src='./images/image-bday.png'>`,
      answer: "No, it's at 8%.",
      text: "Text now."
    }]
  },

  {
    id: "q3",
    class: 'alert alert-secondary',
    qText: "Can you not find your umbrella and dental floss?",
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-umbrella.png">`,
      answer: "Yes",
      text: "Text. She knows exactly where they are."
    }, {
      type: `no`,
      image: `<img class='headline' src="./images/image-blankFace.png">`,
      answer: "Maybe, but not planning to use either for next four years.",
      text: "Do not text her this."
    }]
  },
  {
    id: "q6",
    class: 'alert alert-danger',
    qText: "Has it been more than 24 hours since she texted you with a non-urgent question?",
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-clock.png">`,
      answer: "Are you the first sibling to leave the nest?",
      text: "Yes - Text. <br><br>No - Text tomorrow.",
    }, {
      type: `no`,
      image: `<img class='image-small' src="./images/image-hourGlass.png">`,
      answer: "No",
      text: "You can chill."
    }]
  },

  {
    id: "q2",
    class: 'alert alert-dark',
    qText: "Are your classes messed up?",
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-surprisedFace.png">`,
      answer: "Yes",
      text: "Do you expect her to fix this? <br><br> Yes - Alas, she cannot. It’s all you.<br><br> No - Do text for sympathy.",
    }, {
      type: `no`,
      image: `<img class='image-small' src="./images/image-smileFace.png">`,
      answer: "No",
      text: "Amazing! Text to tell her."
    }]
  },
  {
    id: "q1",
    class: 'alert alert-success',
    qText: "Are you injured?",
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-cross.png">`,
      answer: "Yes",
      text: "Did you seek medical help? <br> <br>Yes - Good. Now text. <br><br> No - Seek help or she will freak. : )",
    }, {
      type: `no`,
      image: `<img class='headline' src="./images/image-bandaid.png">`,
      answer: "Yes, but only your feelings.",
      text: "Text and maybe call. !<3!."
    }]
  },
  {
    id: "q7",
    class: 'alert alert-info',
    qText: `Did she text "You still alive?"`,
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-questionMark.png">`,
      answer: "How many “?”s did she use?",
      text: "One - Text now.<br><br>2 to 6 - Text now with apology.",
    }, {
      type: `no`,
      image: `<img class='image-small' src="./images/image-exclation.png">`,
      answer: "No",
      text: "Good job staying in touch!"
    }]
  },
  {
    id: "q8",
    class: 'alert alert-warning',
    qText: "Are you simply missing her?",
    response: [{
      type: `yes`,
      image: `<img class='image-small' src="./images/image-hearts.png">`,
      answer: "Yes",
      text: "Xoxo! Text",
    }, {
      type: `no`,
      image: `<img class='image-small' src="./images/image-star.png">`,
      answer: "Remember how awesome she is though?",
      text: "Yes - Xoxo! Text. <br><br>No - Even when she did that one cool thing? <br><br> Yes - xo. Text.<br><br> No - Don’t text when in this mood."
    }]
  }
]
///// Local Storage =========================

$(document).ready(function() {
  function init() {
    if (localStorage["name"]) {
      $('#name').val(localStorage["name"]);
    }
    if (localStorage["momsName"]) {
      $('#momsName').val(localStorage["momsName"]);
    }
  }
  init();
});

$('.stored').keyup(function() {
  localStorage[$(this).attr('name')] = $(this).val();
});

// $('#localStorageTest').submit(function() {
//   localStorage.clear();
// });

///// ======================================


//APPEND OBJECTS INTO BODY
function appendMain() {
  $('.main-questions').empty()
  for (var i = 0; i < questions.length; i++) {
    $('.main-questions').append(
      `<div id='${questions[i].id}' class="${questions[i].class}"  onClick="display('${questions[i].id}')" role="alert">` +
      `<a  href="# " class="alert-link ">${questions[i].qText}</a>` + `</div>`)
  }

}
appendMain()

function display(id) {
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id === id) {
      var question = questions[i]
    }
  }

  $('.main-questions').empty();
  $('.main-questions').append(
    `<div class="row d-flex align-items-center">` + `
  <div class="col-12 text-center ">` +
    `<div class="alert alert-warning" role="alert">` + `${question.qText}` + `</div>` + `</div>` + `</div>`)

  var input = ""
  for (var i = 0; i < question.response.length; i++) {
    var response = question.response[i]

    input += `<div class="col-6  text-center">` + `${response.image}<button data-toggle="collapse" data-target="#${response.type}-answer" type="button" class="btn btn-warning">  ${response.answer}  </button>` +
      `<div id='${response.type}-answer' style=display-hidden class="collapse alert alert-info" role="alert">` + response.text + `</div>` + `</div>`
  }
  $('.main-questions').append(
    `<div class="row">` + input + `</div>`
  )

  $('.main-questions').append(
    `<div class="row ">` + `<div class="col-12 d-flex align-items-center">` + `<a href="#" onClick='appendMain()' id='bottom-button' class="btn btn-dark btn-lg active" role="button" aria-pressed="true">back to questions</a>` + `</div>` + `</div>` + `</div>`)

}
