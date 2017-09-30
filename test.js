var questions = [{
    id: "id='q4'",
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
    id: "id='q5'",
    class: 'alert alert-info',
    qText: "Did you just spot Malia Obama?",
    response: [{
      answer: "Yes",
      text: "Text mom. But do not be such a creeper around Malia that she has to tex Michelle."
    }, {
      answer: "Nope",
      text: "Oh well."
    }]
  },
  {
    id: "id='q3'",
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
    id: "id='q6'",
    class: 'alert alert-danger',
    qText: "Has it been more than 24 hours since she texted you with a non-urgent question?",
    response: [{
      answer: "Yes",
      text: "Are you the first sibling to leave the nest?",
      answer: [{
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
    id: "id='q2'",
    class: 'alert alert-dark',
    qText: "Are your classes messed up?",
    response: [{
      answer: "Yes",
      text: "Do you expect her to fix this?",
      answer: [{
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
    id: "id='q1'",
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
    }, {
      answer: "Yes, but only your feelings.",
      text: "Text and maybe call. !<3!"
    }]
  }
]


///// ======================================
var rowOpen = `<div class="main-questions row d-flex align-items-center ">`
var ColOpen = `<div class="main-questions col text-center ">`
var divClose = `</div>`
var br = `</br>`
// var rowOpen = `<div class="row">`
// var pictureColOpen = `<div class="col l5 s12">`
// var articleColOpen = `<div class="col l7 s12">`
// var divClose = `</div>`
// var br = `</br>`

//APPEND OBJECTS INTO BODY
function appendArticle() {
  for (var i = 0; i < questions.length; i++) {
    $('.main-questions').append(
      `<div ${questions[i].id} class="${questions[i].class}" role="alert">` +
      `<a href="# " class="alert-link ">${questions[i].qText}</a>` +
      divClose)
  }
}
appendArticle()

function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
myFunction()

// function appendArticle() {
//   for (var i = 0; i < questions.length; i++) {
//     $('.performer-main').append(rowOpen + pictureColOpen + `<img class="responsive-img" src="${questions[i].img}" alt="${questions[i].imgAlt}">` + divClose + articleColOpen + `<h3>${questions[i].name}</h3>` + `<p>${questions[i].about}</p>` +
//       `<p><a href="${questions[i].facebook}"><img src="./images/facebook-icon.png" alt="${questions[i].name} Facebook"></a><a href="${questions[i].insta}"><img src="./images/instagram-icon.png" alt="${questions[i].name} Instagram"></a></p>` + divClose + divClose + `<div class="divider"></div>` + br)
//   }
// }
//
// appendArticle()
