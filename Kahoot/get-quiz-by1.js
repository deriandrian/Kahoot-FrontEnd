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
                var quiz = 
                `
                <form class="shadow-lg p-3 mb-5 bg-white rounded">
                <img src="img/kahoot new.png" style="width: 300px">
                <div class="form-group">
                    <label for="quiz-name">Title</label>
                    <div class="col" style="text-align: center;">${quizzes['quiz_name']}</div>
                </div>
                <div class="form-group">
                    <label for="quiz-category">Category</label>
                    <div class="col" style="text-align: center;">${quizzes['quiz_category']}</div>
                </div>
                </form>
                `

            $('#info_quiz').append(quiz)
    },
    error: function(){
        //error handling
    },
    complete: function(){

    }
})