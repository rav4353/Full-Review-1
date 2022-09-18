// vowels

function noofvowels(word) {
    var vowels = 'aeiouAEIOU';
    var vowelscount = 0;
    for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            vowelscount += 1;
        }
    }
    return vowelscount;
}
document.write(noofvowels("ravanth"));


// 5 and its related num should not print

let num = 5;
let emptyarr = [];

for (i = 1; i <= 100; i++) {
    if (!(i % num == 0)) {
        if (!(i % 10 == num)) {
            if (!(Math.floor(i / 10) == num)) {
                emptyarr.push(i);
            }
        }
    }
}
document.write(emptyarr);