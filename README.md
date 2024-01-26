# 김나성 트게더 단축키

![image](https://github.com/DJ-Danjin/NaseongKimTgdShortcut/assets/85267238/248b156f-c6a7-4f2b-b1f8-0e5dd06a83b0)


## 소개

킹게더에서 다음글(윗글) / 이전글(아랫글)을 단축키로 이동할 수 있게 해주는 탬퍼몽키 스크립트 입니다.
<br/><br/><br/>

## 목차

1. [소개](#소개)
2. [설치](#설치)
3. [현재 문제점](#현재-문제점)
4. [기여하기](#기여하기)
5. [License](#license)
<br/><br/><br/>

## 설치

1. **Tampermonkey 설치** : 
   아직 Tampermonkey 브라우저 확장 프로그램을 설치하지 않은 경우, Tampermonkey 브라우저 확장 프로그램을 설치해야 합니다. 다양한 브라우저에서 사용할 수 있습니다
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - [Tampermonkey for Opera/OperaGX](https://addons.opera.com/en-gb/extensions/details/tampermonkey-beta/)
<br/><br/>
2. **스크립트 설치** : 
   [클릭하여 설치](NaseongKimTgdShortcut.user.js?raw=True).
<br/><br/>
3. **스크립트 활성화** : 
   Tampermonkey 대시보드의 스크립트 이름 옆에 있는 스위치를 클릭하여 스크립트를 활성화합니다.
<br/><br/><br/>

참고 : 이미 킹게더를 열어둔 상태일 경우 페이지를 새로고침(F5)해야 작동합니다.
<br/><br/>
참고2 : keyCode를 수정하여 원하는 조합의 단축키로 변경하실 수 있습니다.
<br/><br/><br/>

## 현재 문제점

**이전글(아랫글)이 neighbor-list에 존재하지 않을 시 크롬 개발자 도구가 열리는 현상**
<br/><br/>

이 스크립트는 neighbor-list의 a태그 속성을 이용하여 작동합니다. 때문에 태그 자체가 존재하지 않으면 크롬 브라우저의 기본 단축키 기능이 작동하게 됩니다.

이런 현상을 방지하기 위해 겹치지 않는 단축키를 찾아 '컨트롤 + 쉬프트 + S'와 '컨트롤 + 쉬프트 + X'를 사용하려 했습니다만, 모종의 이유로 '컨트롤 + 쉬프트 + S'가 동작하지 않았습니다.
<br/><br/>

현재로써는 아래와 같은 방법을 이용해 해결 가능합니다.

- **할당 단축키 변경** : 크롬 브라우저의 개발자 도구 호출 단축키인 '컨트롤 + 쉬프트 + C' 대신 다른 키에 할당하는 방법

- **브라우저 단축키 무효화** : preventDefault를 이용해 브라우저가 적용하는 기본 동작을 방지하는 방법
<br/><br/><br/>

## 기여하기

이 사용자 스크립트에 대한 제안, 버그 제보, 또는 기타 여러 방법으로 기여하고 싶은 경우 이 GitHub repository에서 issues 혹은 pull requests를 올려주세요.
<br/><br/><br/>

## License

This project is licensed under the [MIT License](LICENSE).
