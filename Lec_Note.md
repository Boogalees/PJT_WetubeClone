"start": "nodemon --exec babel-node index.js --delay 2"
--> --delay 2를 추가
--> 서버가 두번 시작되는것을 해결
--> nodeomn랑 babel이 동시에 작동하기 때문?


app.get("/", hadnleHome);
--> root / home을 요청

route / middleware 개념