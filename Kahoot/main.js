// var name;
// name = "ahiiw";

// var angka = 9;

// var  jumlah = name + angka;

// if (angka == "10"){
//     alert("angka" + angka);
// }else if (angka > 10){
//     alert(angka);
// }else {
//     alert(angka + 20);
// }

// var arr = [222, "test"];

// arr.push("hai")
// // arr.pop

// const phi = 3.14;

// for(let i = 0; i < arr.length; i = i+1){
//     if(i == 1){
//         continue;
//     }
//     // console.log(i)
//     // console.log(arr[i])
// }

// let j = 0;
// while(true){
//     // console.log(arr[j]);
//     j++;
//     if(j == arr.length){
//         break;
//     }
// }

// function testFunction(message){
//     console.log(message);
// };


// var testFunction = function(message){
//     console.log(message);
// }

// const testFunction2 = (message) => console.log(message);

// testFunction ("Skidipaw iwii")
// testFunction2("yeyelalayeyelala")

// var dict = {
//     angka : 2,
//     iwik : "wadaw"
// };

// dict.angka
// dict["angka"]

// dict.nama = "baru";
// dict["kelas"] = "Makers";

// var biodata = {
//     kantor : [
//         {
//         nama : "dekah",
//         alamat : "tasik",
//         telpon : [101010, 1010101]
//         },
//         {
//         nama : "tere",
//         alamat : "bandung"
//         }
//     ],
//     rumah : [
//         {
//         nama : "ntur",
//         alamat : "tasik",
//         telpon : [101010, 1010101],
//         game : {
//             hp : "AoV",
//             pc : "PUBG",
//             dll : ["ps4", "xbox"]
//         }
//         },
//         {
//         nama : "njum",
//         alamat : "bandung"
//         }
//     ],
//     mobil: function(tipe){
//         console.log("tipe mobil " + tipe)
//     }
// }
// console.log(biodata)
// console.log(biodata.rumah[0].game["dll"][1])

// biodata.mobil("ford")

// Array Method
// 1. push
// 2. unshift => insert ke paling depan
// 3. pop => ngambil paling belakang
// 4. shift => ngambil element paling depan
// 5. join => dari array ke string

// ==================================================================
// XMLHttpRequest
// var xhttp = new XMLHttpRequest()
// xhttp.open('GET', 'http://5aa22b1915bf10001492f18c.mockapi.io/belajarxmlhttprequest', true)
// // xhttp.send()
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         var username = JSON.parse(this.responseText)
        // console.table(username)
        // vanilla javascript
        // for (var i = 0; i < username.length; i++){
        //     var node = document.createElement('LI')
        //     var textnode = document.createTextNode(username[i].name)
        //     node.appendChild(textnode)
        //     document.getElementById('namaUser').appendChild(node)
        // } 

        //jQuery
            // $('ol#namaUser').append('<li>' + username[i].name + '</li>')
        // }
//     }
// }

// jquery ajax
// sama seperti XMLHttpRequest

// $.ajax({
//     url: 'http://5aa22b1915bf10001492f18c.mockapi.io/belajarxmlhttprequest',
//     method: 'GET',
//     // type: 'GET'
//     // data: [], {}, string, int, JSON.stringify([{}]) --> kalo misalnya api membutuhkan data dari 
//     success: function(username){
//         for (var i = 0; i < username.length; i++){
//             $('ol#namaUser').append('<li>' + username[i].name + '</li>')
//         }
//     },
//     error: function(){
//         var error = "lieuuur"
//         console.log(error)
//         //error handling
//     },
//     complete: function(){

//     }
// })


// ====================================================================
// ======================= K A H O O T ! ==============================
// ====================================================================

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:5000/getAllQuestion")
// xhr.setRequestHeader("Authorization", ('token'))
// xhr.send()
// xhr.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status < 400){
//         console.log(this.response)
//         var resp = JSON.parse(this.response)
//         console.log(resp)
//     } else if(this.readyState == 4){
//         console.log(this.response)
//     }
// }

// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://localhost:5000/addUser");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.send(JSON.stringify({
//     "username": "coba",
//     "password": "cobacoba",
//     "email": "coba@gmail.com"
// }))
// xhr.onreadystatechange = function(){

//     if(this.readyState == 4 && this.status == 200){
//         // respons = JSON.parse(this.response);
//         console.log(this.response)
//         // alert(response.message);
//     } else if(this.readyState == 4){
//         // respons = JSON.parse(this.response);
//         console.log(this.response)
//         // alert(response.message);
//     }
// }


//==========//
// REGISTER //
//==========//

function register(){
    var email = document.getElementById('orangeForm-email').value
    var username = document.getElementById('orangeForm-name').value
    var password = document.getElementById('orangeForm-pass').value
    console.log(email)
    console.log(username)
    console.log(password)

    $.ajax({
        url: 'http://localhost:5000/addUser',
        method: 'POST',
        contentType: 'application/json',
        data : JSON.stringify({
            email: email,
            username: username,
            password: password
        }),
        success: function(response){
            alert("Welcome to Kahoot!")
            window.location.href = 'quizzes.html'        
        },
        error: function(){
            alert("Email is already exists!")
        },
        complete: function(){
    
        }
    })
}
//=======//
// LOGIN //
//=======//

function login(){
    var username = document.getElementById('username-form').value
    var password = document.getElementById('password-form').value
    //jQuery
    // var username = $('input#username_form').val()
    // var password = $('input#password_form').val()
    // console.log(username)
    // console.log(password)

    $.ajax({
        url: 'http://localhost:5000/login',
        method: 'POST',
        contentType: 'application/json',
        data : JSON.stringify({
            username: username,
            password: password
        }),
        success: function(response){
            window.location.href = 'quizzes.html'
        
        },
        error: function(){
            alert("Username or password is wrong!")
        },
        complete: function(){
    
        }
    })
    
}

//======//
// QUIZ //
//======//

$.ajax({
    url: 'http://localhost:5000/getAllQuizzes',
    method: 'GET', 
    success: function(quizzes){
        for (var i = 0; i < quizzes.length; i++){
            var card=
            `
                <div class="col-md m-3">
                    <div class="card" style="width: 18rem;">
                        <img src="img/kahoot_plus_game_reports.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${quizzes[i].quiz_name}</h5>
                            <p class="card-text">${quizzes[i].questions.length} Questions</p>
                            <a href="view-quiz.html?id=${quizzes[i].id}" class="btn btn-warning">Play</a>
                        </div>
                    </div>
                </div>
            `
            $('#quiz').append(card)
        }
    },
    error: function(){
        //error handling
    },
    complete: function(){

    }
})





