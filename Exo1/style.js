const arr = [];
for(let i = 0; i < 101; i++) {
    arr.push(`${i}. je suis désolé`);
}
navigator.clipboard(arr.join('\n'))