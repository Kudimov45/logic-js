function alphabetPosition(text) {
    text = text.toUpperCase();
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbAlf = [];
    for(let item of text){
        for(let i in alf) {
            if (item == alf[i]) {
                numbAlf.push(+i+1);
                break;
            }
        }
    }
    if(numbAlf.lenght==0){
        return;
    }
    return numbAlf.join(' ');
}

console.log(alphabetPosition(">(9.rh|h"));