# TodoList With Calendar
달력과 연동된 투두리스트


## 주요기능
좌측 화면에 달력에 날짜를 선택하고 우측 화면의 추가 버튼을 눌러 해야할 일을 작성후 추가하여 사용자가 해야할 일의 목록을 확인하고 달성시 체크박스로 체크 및 삭제가 가능하다.

![image](https://user-images.githubusercontent.com/56331400/163675052-622abc38-e7eb-4a0f-8442-a2145c181eb7.png)


## 구성 요소

`components` - `header`와 `Content`로 구성

              header: 사이트 맨 위의 로고와 문구가 적힌구간. material-ui의 컴포넌트를 사용했으며 
                      일정 너비 이상으로 줄어들면 문구의 내용이 사라지고 로고의 `font-size`가 줄어들게 된다.

              Content : 달력화면과 투두리스트의 화면을 렌더링한다. 달력은 react-datepicker를 설치하여 사용했다.
                
              TodoList: Content에서 투두리스트를 렌더링 한다. ContextAPI를 이용하여 state, reducer, distach를 가져와서 
                          사용자가 입력한 정보의 내용을 Localstorage에 저장하며, 
                          저장된 데이터 목록을 initialstate로 지정해서 데이터의 변화에 따라 리스트가 렌더링 된다.
                
             
             

              


## 사용 화면


![ezgif com-gif-maker (22)](https://user-images.githubusercontent.com/56331400/163675783-3a354a41-a94c-41c9-9e9e-33df0f6ba107.gif)
