function test(){
    var colorCount = 18;
    var indices = '.'.repeat(colorCount).split('').map(function(ignore,i){return i;});
    var colors = indices.map(function(index){
        return generateColor(index);
    });
    document.body.textContent = '';
    var swatchesContainer = document.createElement('div');
    for (var i=0; i<colors.length; i++){
        var div = document.createElement('div');
        div.classList.add('swatch');
        div.style.backgroundColor = colors[i];
        div.textContent = i;
        swatchesContainer.appendChild(div);
    }
    document.body.appendChild(swatchesContainer);
}
// starting with empty html page, paste contents of fibonaccicolors.js into the console,
// then paste above function test into the console, then type
// test()
