document.addEventListener("DOMContentLoaded", main);


function main() {// main program
    const canvas = document.getElementById("cg");
    // ปรับขนาดเปลี่ยนสี่ต่างๆของ canavs ก่อนเข้าถึง context
    canvas.style.backgroundColor = "#1f8f17ff";
    canvas.width = 800;
    canvas.height = 700;
    const ctx = canvas.getContext("2d");
   
    ctx.fillStyle = '#3e7bc0ff';
 ctx.fillRect(0, 0, 800, 400);


 // ตัวบ้าน
 ctx.fillStyle = '#dac825ff';
 ctx.fillRect(430, 480, 100, 100);
   


 // หลังคา
 ctx.beginPath();
 ctx.moveTo(400, 480);
 ctx.lineTo(480, 400); // จุดยอดของหลังคา
 ctx.lineTo(560, 480);
 ctx.closePath();
 ctx.fillStyle = '#ec21dbff';
 ctx.fill();
 


 // หน้าต่าง
 ctx.fillStyle = '#503711ff';
 ctx.fillRect(440, 540, 20, 20); // หน้าต่างซ้าย
 ctx.fillRect(500, 540, 20, 20); // หน้าต่างขวา


 // ประตู
 ctx.fillStyle = '#54a1e9ff';
 ctx.fillRect(470, 535, 25, 45); // ประตู
 
// ภูเขา
   // ภูเขาลูกซ้าย (ครึ่งวงกลม)
   ctx.beginPath();
   ctx.arc(190, 400, 240, Math.PI, 0, false); // ครึ่งวงกลม (รัศมี 200)
   ctx.fillStyle = '#103811ff';
   ctx.fill();
   

   // ภูเขาลูกขวา (ครึ่งวงกลม)
   ctx.beginPath();
   ctx.arc(600, 400, 230, Math.PI, 0, false); // ครึ่งวงกลม (รัศมี 200)
   ctx.fillStyle = '#164b13ff';
   ctx.fill();
   
// ภูเขาลูกซ้าย (ครึ่งวงกลม)
   ctx.beginPath();
   ctx.arc(210, 400, 190, Math.PI, 0, false); // ครึ่งวงกลม (รัศมี 200)
   ctx.fillStyle = '#155f18ff';
   ctx.fill();

// พระอาทิตย์
ctx.beginPath();
ctx.arc(400, 120, 70, 0, Math.PI * 2, true); // Outer circle
ctx.fillStyle = "#ff0505ff"; // สีเหลือง
ctx.fill();


// สระน้ำ
ctx.beginPath();
ctx.ellipse(120, 680, 150, 110, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#2da7eeff"; // สีเหลือง
ctx.fill();

// ก้อนหิน
ctx.beginPath();
ctx.ellipse(290, 670, 40, 30, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#522b0eff"; // สีเหลือง
ctx.fill();

ctx.beginPath();
ctx.ellipse(320, 680, 30, 25, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#3b1e08ff"; // สีเหลือง
ctx.fill();

    //ต้นไม้
    ctx.fillStyle = '#2c1508ff';
 ctx.fillRect(140, 500, 15, 60);

  // ใบไม้
 ctx.beginPath();
 ctx.ellipse(145, 440, 40, 70, 0, 0, 2 * Math.PI);
 ctx.fillStyle = '#2aa12eff'; // สีของวงรี
 ctx.fill();

 //ต้นไม้
    ctx.fillStyle = '#2c1508ff';
 ctx.fillRect(695, 560, 15, 60);

  // ใบไม้
 ctx.beginPath();
 ctx.ellipse(700, 500, 40, 70, 0, 0, 2 * Math.PI);
 ctx.fillStyle = '#2aa12eff'; // สีของวงรี
 ctx.fill();


   //ต้นไม้
    ctx.fillStyle = '#2c1508ff';
 ctx.fillRect(300, 460, 15, 60);

  // ใบไม้
 ctx.beginPath();
 ctx.ellipse(310, 400, 40, 70, 0, 0, 2 * Math.PI);
 ctx.fillStyle = '#2aa12eff'; // สีของวงรี
 ctx.fill();


// เมฆ

ctx.beginPath();
ctx.arc(440, 150, 30, 0, Math.PI * 2);
ctx.arc(480, 140, 35, 0, Math.PI * 2);
ctx.arc(520, 150, 30, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "#ffffff";              
ctx.fill();

ctx.beginPath();
ctx.arc(150, 90, 30, 0, Math.PI * 2);    
ctx.arc(200, 80, 40, 0, Math.PI * 2);    
ctx.arc(250, 90, 30, 0, Math.PI * 2);    
ctx.closePath();                         
ctx.fillStyle = "#ffffff";               
ctx.fill();

ctx.beginPath();
ctx.arc(620, 50, 30, 0, Math.PI * 2);
ctx.arc(660, 40, 35, 0, Math.PI * 2);
ctx.arc(700, 50, 30, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "#ffffff";              
ctx.fill();



}
