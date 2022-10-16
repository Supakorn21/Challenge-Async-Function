// แสดงข้อความว่า "Hello, world" โดยทำการดีเลย์ไว้ 3 วินาที

function task1() {
  return setTimeout(() => {
    console.log("Hello, world");
  }, 3000);
}

task1();
