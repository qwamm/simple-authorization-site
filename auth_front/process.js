var user_log = document.getElementById("login")
var user_pass = document.getElementById("password")
var submit_bottom = document.getElementById('submit_bottom')
submit_bottom.onclick = function () {
    console.log(user_log.value)
    console.log(user_pass.value)
}