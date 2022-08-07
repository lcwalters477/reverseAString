function solution(str){
    let arr = [];
    for(let i = 0; i < str.length; i ++){
        arr.push(str[i]);  
    }

    arr.reverse();
    let reversed = arr.join("");
    return reversed;
  }

  solution('hello');