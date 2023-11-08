const num = document.querySelectorAll(".number")

for (let i = 0; i <= num.length; i++) {
    // 1. 현재 숫자 값 가져오기
    const currentNum = parseInt(num[i].textContent, 10);

    // 2. 10을 더한 새로운 숫자 계산하기
    const newNum = currentNum + 10;

    // 3. 새로운 숫자로 텍스트 내용 업데이트하기
    num[i].textContent = newNum;
}