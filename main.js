var questions = [{
    id: "q4",
    class: 'alert alert-warning',
    qText: "Is it 11:37 p.m. on her bday and you have been crazy busy all day and are now out and your battery is at 4%?",
    response: [{
      answer: "Yes",
      text: "Text from a friend's phone. Save your battery in case you need to call security on the way back to your dorm."
    }, {
      answer: "No, it's at 8%.",
      text: "Text now."
    }]
  },
  {
    id: "q5",
    class: 'alert alert-info',
    qText: "Did you just spot Malia Obama?",
    response: [{
      answer: "Yes",
      text: "Text mom. But do not be such a creeper around Malia that she has to text Michelle."
    }, {
      answer: "Nope",
      text: "Oh well."
    }]
  },
  {
    id: "q3",
    class: 'alert alert-secondary',
    qText: "Can you not find your umbrella and dental floss?",
    response: [{
      answer: "Yes",
      text: "Text. She knows exactly where they are."
    }, {
      answer: "Maybe, but not planning to use either for next four years.",
      text: "Do not text her this."
    }]
  },
  {
    id: "q6",
    class: 'alert alert-danger',
    qText: "Has it been more than 24 hours since she texted you with a non-urgent question?",
    response: [{
      answer: "Yes",
      text: "Are you the first sibling to leave the nest?",
      responseLevel2: [{
        answer: "Yes",
        text: "Text."
      }, {
        answer: "No",
        text: "Text tomorrow."
      }]
    }, {
      answer: "No",
      text: "You can chill."
    }]
  },

  {
    id: "q2",
    class: 'alert alert-dark',
    qText: "Are your classes messed up?",
    response: [{
      answer: "Yes",
      text: "Do you expect her to fix this?",
      responseLevel2: [{
        answer: "Yes",
        text: "Alas, she cannot. It’s all you."
      }, {
        answer: "No",
        text: "Do text for sympathy."
      }]
    }, {
      answer: "No",
      text: "Amazing! Text to tell her."
    }]
  },
  {
    id: "q1",
    class: 'alert alert-warning',
    qText: "Are you injured?",
    response: [{
      answer: "Yes",
      text: "Did you seek medical help?",
      responseLevel2: [{
        answer: "Yes",
        text: "Good. Now text."
      }, {
        answer: "No",
        text: "Seek help or she will freak. : )"
      }]
    }, {
      answer: "No",
      text: "Whew! Text away."
    }]
  }
]
///// Local Storage =========================
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("yourName").innerHTML = localStorage.getItem("???");
} else {
  document.getElementById("yourName").innerHTML = "Sorry, your browser does not support Web Storage...";
}
///// ======================================
var rowOpen = `<div class="main-questions row d-flex align-items-center">`
var ColOpen = `<div class="main-questions col text-center">`
var divClose = `</div>`
var br = `</br>`


//APPEND OBJECTS INTO BODY
function appendMain() {
  $('.main-questions').empty()
  for (var i = 0; i < questions.length; i++) {
    $('.main-questions').append(
      `<div id='${questions[i].id}' class="${questions[i].class}"  onClick="display('${questions[i].id}')" role="alert">` +
      `<a  href="# " class="alert-link ">${questions[i].qText}</a>` +
      divClose)
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
    `<div class="alert alert-warning" role="alert">` + `${question.qText}` + divClose + divClose + divClose)

  $('.main-questions').append(
    `<div class="row">
      <div class="col-6 text-center">
        <button data-toggle="collapse" data-target="#yes-answer" type="button" class="btn btn-warning">  ${question.response[0].answer}  </button>
        <div id='yes-answer' style=display-hidden class="collapse alert alert-info" role="alert">` + question.response[0].text +
    divClose + divClose + `<div class="col-6  text-center">` + `<button data-toggle="collapse" data-target="#no-answer" type="button" class="btn btn-warning">  ${question.response[1].answer}  </button>` +
    `<div id='no-answer' style=display-hidden class="collapse alert alert-info" role="alert">` + question.response[1].text +
    divClose + divClose + divClose
  )


  $('.main-questions').append(
    `<div class="row ">` + `<div class="col-12 d-flex align-items-center">` + `<a href="#" onClick='appendMain()' id='bottom-button' class="btn btn-dark btn-lg active" role="button" aria-pressed="true">back to questions</a>` + divClose + divClose + divClose)

}
