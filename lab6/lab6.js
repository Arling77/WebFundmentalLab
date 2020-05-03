/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    var cnt = 1;
    var date = new Date();

    setInterval(function () {
        date = new Date();
        if(cnt>=1024||date.getSeconds()===0) return; //分别判断两个条件
        cnt*=2;

        console.log(cnt);
    },5000)
}
// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let tel = /^1\d{10}$/;
    let res1 = tel.test(telephone);
    const email = /^[a-zA-Z0-9_\-]+@[a-zA-Z0-9_\-]+((\.[a-zA-Z0-9]+){2,4})$/;
    const res2 = email.test(mail);
    let telout = "right";
    let mailout = "right"
    if (!res1) telout = "wrong";
    if (!res2) mailout= "wrong";
    console.log("The telephone is "+telout+" and the mail is "+mailout);

}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
        let string = str.replace(","," ");
        let strArr  = string.split(" ");
        let res = new Set();

    for(let i = 0;i<strArr.length;i++){
        if(strArr[i].toLowerCase()===str[i+1].toLowerCase()) {
            res.add(strArr[i]+" "+strArr[i+1]);
            i++;
        }
    }
    if (res.size<=10) {
        console.log(res);
    }else {
        const array = Array.from(res);
        array.sort();
        for (let i=0;i<10;i++){
            console.log(array[i]);
        }

    }

}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
  let res = new Set();
  for (let i=0,len = wantInput.length;i<len;i++){
      if (actualInput.indexOf(wantInput.charAt(i))===-1||actualInput.indexOf(wantInput.charAt(i).toUpperCase())===-1)
          res.add(wantInput.charAt(i).toUpperCase());
  }
    console.log(res);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    str = str.trim();
    let res  = '';
    let strArr = str.split(" ");
    for (let i = strArr.length-1;i>=0;i--){

        if (i===0){
            res=res+strArr[0];
        }else {
            res= res+strArr[i]+" ";
        }
    }
    console.log(res);
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
       let dec = target - nums[i];
        if (map.has(dec)) {
            let res = [i, map.get(dec)];
            console.log(res);
        }
        else {
            map.set(nums[i], i);
        }
    }
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(s) {
    let str = '';//存放当前最大无重复项字符串
    let len = 0;//存放当前当前最大无重复项字符串长度
    for(let i=0; i<s.length; i++){
        const char = s.charAt(i);
        const index = str.indexOf(char);
        if(index === -1){  //遍历s将元素挨个放入到str中，每放入一次判断str中是否有重复项
            str += char;
            len = len<str.length?str.length:len;//记录最大长度项,每次重新记录str进行判断，是否大于上次一次最大项
        }
        else{
            str = str.substr(index + 1) + char; //从当前重复项开始重新记录str
        }
    }
    console.log(len);

}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function() {
        console.log("Hi, I am a developing country.");
    }
}

function PoorCountry() {
    this.prototype = new Country();
    this.saySad = function() {
        console.log("I am a sad poor country.");
    }
}

function DevelopedCountry() {
    this.sayHappy = function() {
        console.log("I am a Happy developed country.");
    }
    this.prototype = Object.create(Country);
}
function test() {
    console.log("Q1");
    testTime();

    console.log("Q2");
    testMail("4444","darkkhaki");

    console.log("Q3");
    testRedundancy("AB Ab hb jhj jk");

    console.log("Q4");
    testKeyBoard("7_This_is_a_test","_hs_s_a_es");

    console.log("Q5");
    testSpecialReverse(" hello world!");

    console.log("Q6");
    twoSum([1,2,3,4,5],6);

    console.log("Q7");
    lengthOfLongestSubstring("accccdfghhhhaaaabb")

    console.log("Q8");
    let C1 = new DevelopingCountry();
    let C2 = new PoorCountry();
    let C3 = new DevelopedCountry();
    C1.sayHi();
    C2.saySad();
    C3.sayHappy();

}
test();