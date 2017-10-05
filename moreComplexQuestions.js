{
  id: "q6",
  image1: "",
  image2: "",
  class: 'alert alert-danger',
  qText: "Has it been more than 24 hours since she texted you with a non-urgent question?",
  responses: [{
      answer: "Yes",
      question: {
        qText: 'test nested q'
      }
    },
    {
      answer: "no",
      question: {
        qText: 'test nested q'
      }
    }
  ]
}

var q1 = {
  qText: "Has it been more than 24 hours since she texted you with a non-urgent question?",
  responses: [{
    bText: 'Yes',
    question: q1aEndA
  },{
    bText: 'No',
    question: q1b
  }]
}

var q1b = {
  qText: "Has it been more than 24 hours since she texted you with a non-urgent question?",
  responses: [{
    bText: 'Yes',
    question: q1aEndA
  },{
    bText: 'No',
    question: q1aEndB
  }]
}

var q1a = {
  qText: "Q2?",
  responses: []
}

var q1aEndA = {
  qText: 'End'
}

var q1aEndB = {
  qText: 'End'
}
