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
        responses: [{
            answer: "Yes",
            question: {
              qText: 'test nested q'
            }
          },
          {
            answer: "No",
            question: {
              qText: 'test nested q'
            }
          }
        ]
      }
    }
  ]
}

var q1 = {
  qText: "Has it been more than 24 hours since she texted you with a non-urgent question?",
  responses: [yes, no]
}

var q2 = {
  qText: "Q2?",
  responses: []
}

var yes = {
  bText = 'Yes'
}

var no = {
  bText: 'No',
  question: q2
}
