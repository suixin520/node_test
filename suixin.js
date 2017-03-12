var suixin = ["Hello", "Suixin", "!"];

function splicingWords(arr) {
    var suixin_word = "";
    for(idx in arr) {
        suixin_word += arr[idx]+' ';
    }
    return suixin_word;
}
exports.splicingWords = splicingWords;
// console.log(splicingWords(suixin));