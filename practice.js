const box = document.getElementById('box')
const content = document.getElementById('content')
const btn = document.getElementById('button')

function onscrollfunction(){
    var x = box.scrollLeft
    var y = box.scrollTop
    document.getElementById('result').innerHTML = 'Horizontal: ' + x + '\nVertical: ' + y
    content.style.backgroundColor = 'rgb('+ y +','+ (y-50) + ', ' + (y - 50) +')'   
}