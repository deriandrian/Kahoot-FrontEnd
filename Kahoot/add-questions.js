//==============//
// ADD QUESTION //
//==============//



function addQuestion(q_id){
    var q_id = q_id
    var number = 1
    var question = document.getElementById('question').value
    var answer = document.getElementById('answer').value
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var d = document.getElementById('d').value
    console.log(number)
    console.log(question)
    console.log(answer)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)


    $.ajax({
        url: `http://localhost:5000/addQuestion/${q_id}`,
        method: 'POST',
        contentType: 'application/json',
        data : JSON.stringify({
            number: number,
            question: question,
            answer : answer,
            option_list: {
                a: a,
                b: b,
                c: c,
                d: d
            }
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
function isquestion(){
    // cara get  param id | source https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var url_string = window.location.href
    var url = new URL(url_string);
    var quiz_id = Number(url.searchParams.get("quiz_id"));
    //-------
    addQuestion(quiz_id);
}