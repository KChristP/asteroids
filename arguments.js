function sum1(){
  let args = Array.from(arguments);
  return args.reduce((accum, el) => {
    accum = accum + el;
    return accum;
  });
}

// console.log(sum1(1,2,3,4));


function sum2(...args){
  return args.reduce((accum, el) => {
    accum = accum + el;
    return accum;
  });
}

// console.log(sum2(1,2,3,4));


Function.prototype.myBind1 = function () {
  let args = Array.from(arguments);
  let that = this;
  return function() {
    let args2 = args.concat(Array.from(arguments));
    that.apply(args2[0], args2.slice(1));
  };
};

Function.prototype.myBind2 = function (...args) {
  let that = this;
  return function(...args2) {
    let args3 = args.concat(args2);
    that.apply(args3[0], args3.slice(1));
  };
};


function curriedSum(numArgs){
  let numbers = [];
  return function _curriedSum(numGiven){
    numbers.push(numGiven);
    if (numbers.length === numArgs){
      return numbers.reduce((accum, el) => {
        return accum + el;
      });
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curryBind = function(numArgs){
  let numbers = [];
  let that = this;
  return function _curry(numGiven){
    numbers.push(numGiven);
    if (numbers.length === numArgs){
      that.num1 = numbers[0];
      that.num2 = numbers[1];
      that.num3 = numbers[2];
      return that.bind(that)();
    } else {
      return _curry;
    }
  };
};

function sumThreeBind() {
  return this.num1 + this.num2 + this.num3;
}



Function.prototype.curry = function(numArgs){
  let numbers = [];
  let that = this;
  return function _curry(numGiven){
    numbers.push(numGiven);
    if (numbers.length === numArgs){
      return that.apply(null, numbers);
    } else {
      return _curry;
    }
  };
};
//
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


// Function.prototype.curry = function(numArgs) {
//   let that = this;
//   let numbers = [];
//   return function _curry(numGiven) {
//     numbers.push(numGiven);
//     if (numbers.length === numArgs) {
//       return that.call(null,...numbers);
//     } else {
//       return _curry;
//     }
//   };
// };

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
console.log(f1 = f1(4)); // [Function]
console.log(f1 = f1(20)); // [Function]
console.log(f1 = f1(6));

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));
