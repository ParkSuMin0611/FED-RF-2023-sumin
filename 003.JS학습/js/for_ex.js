// for문 연습1 : 외부JS파일 - for_ex.js

// JS외부파일은 html문서에 직접 들어가
// 작동되므로 CSS처럼 'utf-8' 인코딩 설정이
// 필요없음!

// 1. 대상선정 ////////////

// 1-1. 이벤트대상 : 미니언즈
var mini = document.querySelectorAll(".mini");

// 1-2. 출력대상 : 파란박스안 미니언즈 박스
var blue_box = document.querySelector(".mini-space");

console.log("미니언즈:", mini, blue_box);

// 2. 이벤트 연결하기 ///////////////////

// 2-1. 미니언즈 이미지 클릭시 넣기함수 호출
// mini[0].onclick = insertMini;

// 기본for문으로 반복하여 개수만큼 이벤트 셋팅하기
// for(시;한;증){코드}
// (0부터 시작; 개수보다 작을때까지 반복; 1씩증가)

for (var i = 0; i < mini.length; i++) {
    mini[i].addEventListener("click", insertMini);
    console.log("for문내i:", i);
} //////////// for ///////////////

console.log("for문밖i:", i);

// 3. 함수만들기 ////////////////////////

// 3-1. 미니언즈 넣기함수

/**************************************** 
    함수명 : insertMini
    기능 : 미니언즈 이미지 개수만큼 넣기
****************************************/
function insertMini() {
    // 1. 호출확인
    // console.log('미니넣어!',this);
    // this 나자신! -> 호출한 .mini

    // 2. 셋팅된 개수 속성(data-cnt) 가져오기
    var cnt = this.getAttribute("data-cnt");
    // getAttribute(속성명) -> 속성값 가져오기! 내장함수
    // console.log('data-cnt:',cnt);

    // 3. 미니언즈 넣기
    // 대상: .Bcase -> blue_box
    // for(시;한;증){코드}
    // (0부터; 개수보다작을때까지; 1씩증가)
    for (var j = 0; j < cnt; j++) {
        blue_box.innerHTML += `
        <img src="./images/Minions.png" alt="미니언즈">
        `;
    } ///////// for ////////////
} //////// insertMini함수 ///////////////
/////////////////////////////////////////