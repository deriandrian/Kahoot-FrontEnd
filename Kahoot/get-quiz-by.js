//=============//
// GET QUIZ BY //
//=============//

var url_string = window.location.href
var url = new URL(url_string);
var quiz_id = Number(url.searchParams.get("id"));

$.ajax({
    url: `http://localhost:5000/getQuizBy/${quiz_id}`,
    method: 'GET', 
    success: function(quizzes){
        for (var i = 0; i < quizzes['questions'].length; i++){
                var questions = `
                <form class="shadow-lg p-3 m-3 bg-white rounded">
                <li class="list-group-item d-flex flex-row align-items-center mb-3">
                <span class="col-1"><b>${i+1}.</b></span>
                <div class="col">${quizzes['questions'][i]['question']}</div>
                </li>
                </from>
                    `
            $('#questions').append(questions)
        }
        var question= `
        <button type="button" class="btn btn-warning text-white" style="text-decoration:none; color:white;" onclick="location.href='add-questions.html?quiz_id=${quiz_id}'">Add Question</button>
        `
        $(`#addQuestion`).append(question)

    },
    error: function(){
        //error handling
    },
    complete: function(){

    }
})
