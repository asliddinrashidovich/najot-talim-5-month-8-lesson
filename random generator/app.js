const input = document.getElementById('input');
const copybtn = document.getElementById('copy');
const header = document.getElementById('one');
const generatebtn = document.getElementById('button');


function  generator () {
    let text = ' '

    let keyboards = 'qwertyuiopasdfghjklzxcvbnm1234567890$@!#%^&*';
    let keys = keyboards.split('');

    let random = Math.floor(Math.random() * keys.length );
    let one = keys[Math.floor(Math.random() * keys.length )];
    let two = keys[Math.floor(Math.random() * keys.length )];
    let three = keys[Math.floor(Math.random() * keys.length )];
    let four = keys[Math.floor(Math.random() * keys.length )];
    let five = keys[Math.floor(Math.random() * keys.length )];
    let six = keys[Math.floor(Math.random() * keys.length )];
    let seven = keys[Math.floor(Math.random() * keys.length )];
    let eight = keys[Math.floor(Math.random() * keys.length )];
    let nine = keys[Math.floor(Math.random() * keys.length )];
    let ten = keys[Math.floor(Math.random() * keys.length )];
    let elevn = keys[Math.floor(Math.random() * keys.length )];
    let twelf = keys[Math.floor(Math.random() * keys.length )];;

    text += one + two +three + four + five + six + seven + eight + nine + ten + elevn + twelf
    input.value = text;
}
function copyer () {
    input.select()
    document.execCommand('copy')
}

generatebtn.addEventListener('click', ()=> {
    generator()
})

copybtn.addEventListener('click', ()=> {
    copyer()
})