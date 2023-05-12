let pressed = [];
let code = 'mufaddal';
window.addEventListener('keyup', (e)=>{
    pressed.push(e.key);
    pressed.splice(-code.lenght-1,pressed.length-code.length);
    console.log(pressed.join(''));
    if(pressed.join('').includes('mufaddal')) cornify_add();
    
});
