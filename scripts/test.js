function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

/*
// 调用函数并打印结果
console.log(multiply(4, 7)); // 输出 28
console.log(multiply(20, 20)); // 输出 400
console.log(multiply(0.5, 3)); // 输出 1.5
*/

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*
document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼！");
});
*/

document.querySelector("html").addEventListener("click", () => {
  alert("别戳我，我怕疼！");
});
