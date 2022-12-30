var face_X = [] //新增臉x軸的變數
var face_y = [] //新增臉y軸的變數
var face_size =  [] //新增臉大小的變數
var face_num =3 //新增臉數量的變數並設為3
var song //宣告變數song
var songIsplay=false //宣告變數songIsplay=false
var amp //宣告變數amp
var vol=0 //宣告變數vol=0
var m_x,m_y //宣告變數m_x,m_y
var music_btn,mouse_btn,Speech_btn //宣告變數music_btn,mouse_btn,Speech_btn
var musicIsplay=true  //宣告變數mosueIsplay=true
var mouseIsplay=true
var myRec = new p5.SpeechRec(); //宣告變數myRec = new p5.SpeechRec()
var result //宣告變數result


function preload(){
  song = loadSound("Spooky Boop - Otis McDonald.mp3");
  
}


function setup() {
  createCanvas (windowWidth, windowHeight);//設定畫布大小為視窗寬高
  angleMode(DEGREES);//去銳邊



music_btn = createButton("播音樂")
music_btn.position(10,10)//設定按鈕(位置10,10)
music_btn.size(350, 100) //設定按鈕(大小350,100)
music_btn.style('background-color', 'black');//設定按鈕(背景:黑)
music_btn.style('font-size', '44px');   //設定按鈕(文字大小44)
music_btn.style('color', 'white');   // 設定按鈕(文字顏色白色)
music_btn.mousePressed(music_btn_pressed)//設定按鈕(music_btn_pressed)


mouse_btn = createButton("暫停音樂")//設定按鈕(暫停音樂)
mouse_btn.position(370,10)//設定按鈕(座標:370,10)
mouse_btn.size(350, 100); //設定按鈕(大小350<100)
mouse_btn.style('background-color', 'black'); //設定按鈕(背景:黑)
mouse_btn.style('font-size', '44px'); //設定按鈕(文字大小44)
mouse_btn.style('color', 'white'); //設定按鈕(文字顏色白色)
mouse_btn.mousePressed(mouse_btn_pressed) //設定按鈕(music_btn_pressed)


Speech_btn = createButton("語音辨識(跳舞/暫停)") //設定按鈕(語音辨識(跳舞/暫停))
Speech_btn.position(740,10) //設定按鈕(座標:740,10)
Speech_btn.size(350, 100); //設定按鈕(大小350,100)
Speech_btn.style('background-color', 'black'); //設定按鈕(背景:黑)
Speech_btn.style('font-size', '32px'); //設定按鈕(文字大小32)
Speech_btn.style('color', 'white'); //設定按鈕(文字顏色白色)
Speech_btn.mousePressed(Speech_btn_pressed)//設定按鈕(Speech_btn_pressed)



function music_btn_pressed(){  //開始音樂
  song.stop()//音樂停止
  song.play()//音樂開始
  songIsplay = true//如果音樂撥放為真
  musicIsplay = false
  amp=new p5.Amplitude()  
  music_btn.style('background-color', '#f3c4fb');
  mouse_btn.style('background-color', 'black');

}

function mouse_btn_pressed(){  //暫停
  song.pause()
  musicIsplay = true
  songIsplay = false
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', '#f3c4fb');
}
function Speech_btn_pressed(){ //語音說話
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', 'black');
  Speech_btn.style('background-color', '#f3c4fb');
  myRec.onResult = showResult;
  myRec.start();
}

function showResult() //語音說話2
  {
      if(myRec.resultValue==true) {
			
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      console.log(1)
      console.log(myRec.resultString)
      if(myRec.resultString==="播音樂")
      {
        music_btn_pressed()
        mouseIsplay = false
        songIsplay = true
      }
      if(myRec.resultString==="暫停")
      {
        song.pause()
        mouseIsplay = true
        songIsplay = false
        }
		}
	}

  for (var i=0;i<face_num;i++){
    face_size[i] = random(100,400)//臉的大小190~400
    face_X[i] = random(0,width)
    face_y[i] = random(0,height)
    }
    }
    
function draw() {
  background("#caf0f8");
  textSize(50)
  text("X:"+mouseX+"Y:"+mouseY,50,50)

  if(songIsplay){
    vol = amp.getLevel()
    m_x =map(vol,0,1,0,width) 
    m_y= map(vol,0,1,0,height)
  }
  else
  if(mouseIsplay)
  {
    m_x = mouseX
    m_y= mouseY
  
  }
  for(var j=0;j<face_num;j++){
push()
var f_s =face_size[j]
  translate(face_X[j],face_y[j])
  fill('#faedcd')
    ellipse(0,0,400)  //臉
    fill('#ffffff')
    ellipse(60,-40,50,90)
    ellipse(-60,-40,-50,-90)
    //左眼
    fill(0)
    ellipse(-60+mouseX/80,-50+mouseY/60,30)
    noFill()
    //右眼
    fill(0)
    ellipse(50+mouseX/80,-50+mouseY/60,30)
    fill("#f5ebe0")//設定以下元件的顏色
  ellipse(-180,-160,150)//左邊小圓
  ellipse(180,-160,150)//右邊小圓
  fill('#d4a373')
  ellipse(-180,-160,75)
  ellipse(180,-160,75)
  fill('#ffafcc')
  ellipse(10,60,30)

  fill('#b5838d')
    arc(0,100,200,100,0,180)
    fill('#faedcd')
    if(mouseIsPressed)
    {   //mouseIsPressed為true，代表有按下滑鼠
    arc(0,99,200,40,0,180)  
    }
    else
    {   //mouseIsPressed為false，代表沒有按下滑鼠
     arc(0,99,200,90,0,180)
    }
    noFill()
  pop()
}
}

