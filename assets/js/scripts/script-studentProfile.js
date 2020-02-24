window.addEventListener('load', function(){
    const url = 'https://reqres.in';

    let userProfile = this.document.getElementById('userProfile');
    let name = this.document.getElementById('name');
    let carreer = this.document.getElementById('carreer');
    let college = this.document.getElementById('college');
    let location = this.document.getElementById('location');

    this.fetch(url + '/api/users/4').then(function (res) {
        return res.json();
    }).then(function (res) {
        // actualizar según backend
        let student = res.data;
        name.innerText = student.first_name + ' ' + student.last_name;
        // carreer.innerText = student.
        // college.innerText = student.
        // location.innerText = student.
        userProfile.src = student.avatar;
    }).catch(function (err) {
        alert(err.message || err);
        console.error(err);
    })
});