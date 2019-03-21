var url_string = window.location.href
var url = new URL(url_string);
var quiz_id = Number(url.searchParams.get("id"));

$.ajax({
    url: `http://127.0.0.1:5000/quiz/getQuiz/${quiz_id}`,
    method: 'GET',
    success: function(result){
        for (var i = 0; i < result['question-List'].length; i++){
            var question = `
            <li class="list-group-item d-flex flex-row align-items-center mb-3">
                <span class="col-1 text-center no-gutters bg-dark text-white"><b>${i+1}</b></span>
                <div class="col">${result['question-list'][i]['question']}</div>
                <div class="col-2 text-right">
                    <button class="btn btn-warning rounded-pill mr-2" style="color:white;" onclick="location.href='edit_question.html?quiz_id=${quiz_id}&qs_id=${result['question-list'][i]['qs_id']}'">Edit</a>
                    <button class="btn btn-secondary rounded-pill" data-toggle="modal" data-target="#deleteModal-${result['question-list'][i]['qs_id']}" id="${result['question-list'][i]['qs_id']}">Delete</a>
                </div>
            </li>
            `
            $('ul#questionList').append(question)
        }
    }
})