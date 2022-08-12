// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ([...arguments].length == 0) return [];
    else return  matrix.map((el, index) => {
      if (index !== 0 && index % 2 !== 0) return el.reverse();
      else return el
    }).flat();
  }
