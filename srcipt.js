function test(){
    let uid = document.getElementById('username').value;
    let pw = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    //alert(uid+pw+email)
    let user =localStorage.setItem("uid", uid);
    let pass =localStorage.setItem("pw", pw);
    let em =localStorage.setItem("email", email);
    localStorage.removeItem(uid)
    localStorage.removeItem(pw)
    localStorage.removeItem(email)

}