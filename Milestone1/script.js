var toggleButon = document.getElementById('toggle-skills');
var Skills = document.getElementById('Skills');
toggleButon.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
