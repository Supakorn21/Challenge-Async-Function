// แสดงตัวเลข 1-10 โดยแต่ละตัวเลขทำการหน่วงเวลาไว้ทุกๆ 1 วินาที โดยใช้ฟังก์ชัน setTimeout

function task3() {
  for (let i = 1; i < 11; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

task3();
