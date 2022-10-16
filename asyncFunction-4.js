// Task 4

// แสดงตัวเลข 1-10 โดยแต่ละตัวเลขทำการหน่วงเวลาไว้ทุกๆ 1 วินาที โดยใช้ฟังก์ชัน setInterval

function task4() {
  let initNumber = 0;
  let i = setInterval(() => {
    initNumber++;
    console.log(initNumber);
    if (initNumber === 10) {
      clearInterval(i);
    }
  }, 1000);
}

task4();
