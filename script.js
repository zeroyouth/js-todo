function addItem() {
  let list = document.getElementById('todolist');
  //입력값 읽기
  let todo = document.getElementById('tesk-input');
  //li 요소 생성
  let listitem = document.createElement('li');

  //닫기 버튼
  let closebutton = document.createElement('button');

  //li에 css 추가
  listitem.className = 'list-item';
  closebutton.className = 'close';

  //close에 이벤트 처리
  closebutton.onclick = function (e) {
    //이벤트가 발생한 부모 요소 li요소를 가져오고 삭제
    let pnode = e.target.parentNode;
    list.removeChild(pnode);
  }

  //li 요소 구성
  listitem.innerText = todo.value;
  listitem.appendChild(closebutton);

  //ul 요소 li 추가
  list.appendChild(listitem);

  //입력칸을 비우고 포스 이동
  todo.value = '';
  todo.focus();
}