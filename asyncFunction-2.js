// สร้างฟังก์ชันที่มี การรับค่าเป็นฟังก์ชัน โดยตรวจสอบว่า ถ้าค่าที่รับมาเป็นฟังก์ชัน ให้รันฟังก์ชันนั้นหลังจากผ่านไป 3 วินาทีและแสดงข้อความว่า "Callback is executed after 2 seconds"  หากค่าที่รับมาไม่ใช่ฟังก์ชัน ให้รีเทิร์นข้อความไปว่า "Argument is not function"

function task2(data) {
  const dataType = typeof data;
  const allow = dataType === "function";

  if (allow) {
    setTimeout(() => {
      console.log("Callback is executed after 2 seconds");
    }, 3000);
  } else {
    console.log("Argument is not function");
  }

  return;
}

const isfunctionTest = () => {
  console.log("123");
};

let a = "1234";

task2(isfunctionTest);
