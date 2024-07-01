
# Nvsu Test

## Project Structure

```bash
nvsu-test
├── README.md
├── package.json
├── src
│   ├── permutations.js
│   ├── findOdd.js
│   └── countSmileys.js
└── test
    ├── permutations.test.js
    ├── findOdd.test.js
    └── countSmileys.test.js
```

## Installation

```bash
npm install
```

## Run tests

```bash
npm test
```

## Functions

### 1. permutations.js

ฟังก์ชัน `permutations(string)` ใช้สำหรับสร้าง permutations ของ string ที่ได้รับมา โดยจะ Return เป็น Array ของ permutations ที่ไม่ซ้ำกัน

### 2. findOdd.js

ฟังก์ชัน `findOdd(arr)` ใช้สำหรับหาค่าใน Array ที่จำนวนครั้งเป็นเลขคี่ โดยจะ Return ตัวเลขที่พบ

### 3. countSmileys.js

ฟังก์ชัน `countSmileys(arr)` ใช้สำหรับนับจำนวน Smileys ใน Array ที่รับเข้ามา โดยจะ Return จำนวน Smileys ที่พบ
