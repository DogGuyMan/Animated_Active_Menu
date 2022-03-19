# Animated_Active_Menu
<img src="https://media.giphy.com/media/IyZsLpsVhvHCmIDZ7i/giphy.gif" width=100%>

## 개요
* OnlineTutorial 유튜브를 보고 구현함
  * https://www.youtube.com/watch?v=HLRlE1xk98A&list=PLIMQzWccmG7a8D3JVSQpUyYruGPDlc1ZZ&index=44

## 참고한 블로그
```
input:-internal-autofill-selected
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=naan_ace&logNo=221298520291
https://www.python2.net/questions-1052676.html
https://close-up.tistory.com/entry/input-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-css-%EC%88%98%EC%A0%95
```

## 깃허브 페이지 빌드 링크
* https://dogguyman.github.io/Animated_Active_Menu/index.html/


## ...그런데 리펙토링 하고싶은데?

### 일단..
1. 굳이 Jquary를 써야하나?
2. 왜 position:absolute를 쓰는건가.. 이거 마지노선이 되어야하는거 아닌가?

**CSS만 이용할수 있다면 그거 쓰고, flex를 활용하는게 어떨까?**

---

## 리펙토링 결과

https://user-images.githubusercontent.com/61660260/159112671-47ff3628-9443-4288-a724-4d3190b357e1.mp4

* #### 1. 굳이 Jquary를 써야하나?
  * 어... 해보니 Jquary 쓰는게 좋았다 *깔끔하네? 잘 응용하면 좋겠다고 생각*.
  * 어쩌다 TS/JS로 떼웠지만 **만족스러운 결과**를 얻었다.
    * **TS/JS로 개선한점**
      1. li 태그가 얼마나 들어오든 알아서 슬라이드 width를 동적으로 적용가능하다는것
         * listElementArray.length으로 li 개수 가져오고 calc(100% / length)
      2. 아직 애니메이션이 도착하지도 않았는데 투명도가 증가하는 문제를 해결했다.
    * **두려운점**
        1. foreach로 이벤트 설정하니 너무 부하가 많이 걸리는거 아닌가 생각이 든다.
        2. 첫 TS를 써봤지만 타입이 뭐가 이리 많은지 모르겠다.. ㅠㅠㅠㅠ
    * **배운점**
      1. Narrowing : null 판정이 참 중요하다 생각
      2. 굳이 css transition에서 엘리먼트 위치를 지정하지 않아도, 애니매이션 target Css에 transition만 설정하고
      JS, TS에서 엘리먼트 위치를 정해줘도 애니가 적용된다!!
      1. 부모에 relative한 요소 위치는 _E.target.offsetLeft 와 같이 사용가능하다.
      2. mouseEvent 버블링 캡쳐링
        * https://ko.javascript.info/bubbling-and-capturing
      5. 태그들이 겹쳐 이벤트리스너 처리하는데 방해가 되었다 그래서 zindex높은것 무시하기위해 pointer-events: none; 처리했다.
* #### 2. 왜 position:absolute를 쓰는건가.. 이거 마지노선이 되어야하는거 아닌가?
  * 정확히는 sliding 하는 하얀 박스다.
  * ㅇㅇ.. 이유가 있었다 
    * 정확히 애니매이션의 이벤트 타겟은 이산적인 위치에 있는 li태그다.
    * 이산적이라는것은 즉, 슉~슉 자연스럽게 지나가는 애니매이션을 적용하기에는 어려운점이 있다
    * 그래서 position:absolute로 li태그 위치에 신경쓰지 않고 미끄러지게 음직이는 또다른 요소가 필요했다...
