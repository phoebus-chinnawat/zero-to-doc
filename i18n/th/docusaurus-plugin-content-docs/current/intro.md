---
sidebar_position: 1
---

# บทแนะนำการใช้งาน

มาค้นพบ **Docusaurus ในเวลาไม่ถึง 5 นาที** กันเถอะ!

## เริ่มต้นใช้งาน

เริ่มต้นโดย **สร้างเว็บไซต์ใหม่** หรือ **ทดลองใช้งาน Docusaurus ทันที** ด้วย **[docusaurus.new](https://docusaurus.new)**

### สิ่งที่คุณจะต้องมี

- [Node.js](https://nodejs.org/en/download/) เวอร์ชัน 18.0 หรือใหม่กว่า:
  - เมื่อคุณติดตั้ง Node.js แนะนำให้เลือกทำเครื่องหมายในช่องที่เกี่ยวข้องกับ dependencies ทั้งหมด

## สร้างเว็บไซต์ใหม่

สร้างเว็บไซต์ Docusaurus ใหม่โดยใช้ **เทมเพลตแบบคลาสสิก**

เทมเพลตแบบคลาสสิกจะถูกเพิ่มไปยังโปรเจกต์ของคุณโดยอัตโนมัติเมื่อคุณรันคำสั่งนี้:

```bash
npm init docusaurus@latest my-website classic
```

คุณสามารถพิมพ์คำสั่งนี้ใน Command Prompt, Powershell, Terminal หรือ terminal อื่นๆ ที่มีในโปรแกรมแก้ไขโค้ดของคุณ

คำสั่งนี้ยังติดตั้ง dependencies ที่จำเป็นทั้งหมดสำหรับการใช้งาน Docusaurus ให้คุณด้วย

## เริ่มต้นเว็บไซต์ของคุณ

รันเซิร์ฟเวอร์สำหรับการพัฒนา:

```bash
cd my-website
npm run start
```

คำสั่ง `cd` ใช้เพื่อเปลี่ยนไดเรกทอรีที่คุณกำลังทำงานอยู่ ในการทำงานกับเว็บไซต์ Docusaurus ที่คุณสร้างขึ้นใหม่ คุณจะต้องเปลี่ยน terminal ไปยังไดเรกทอรีนั้น

คำสั่ง `npm run start` จะสร้างเว็บไซต์ของคุณในเครื่องและเปิดใช้งานผ่านเซิร์ฟเวอร์สำหรับการพัฒนา ซึ่งสามารถดูได้ที่ http://localhost:3000/

เปิดไฟล์ `docs/intro.md` (หน้านี้) และแก้ไขบางบรรทัด: เว็บไซต์จะ **โหลดซ้ำโดยอัตโนมัติ** และแสดงการเปลี่ยนแปลงของคุณ