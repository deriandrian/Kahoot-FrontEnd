//==========//
// ADD QUIZ //
//==========// 

function add_quiz(){

    var created_id = document.getElementById('created_id').value
    var quiz_name = document.getElementById('quiz_name').value
    var quiz_category = document.getElementById('quiz_category').value
    console.log(created_id)
    console.log(quiz_name)
    console.log(quiz_category)

    $.ajax({
        url: 'http://localhost:5000/addQuiz',
        method: 'POST',
        contentType: 'application/json',
        data : JSON.stringify({
            created_id: created_id,
            quiz_name: quiz_name,
            quiz_category: quiz_category
        }),
        success: function(response){
            alert("Mantulll")
            // window.location.href = 'add-questions.html'        
        },
        error: function(){
            alert("Error")
        },
        complete: function(){
    
        }
    })
}