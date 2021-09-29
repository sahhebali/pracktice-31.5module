/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

 */

const myStudy = { class: 'class:one', roll: 'roll:3', books: 'subject:banga,eng,ongko,' }
const count = 5;
const new1 = `<h3 class="friend-name">Friend-${count} ${myStudy.class}</h3>;`

// console.log(new1);


// const numbers = [2, 4, 6, 8];
// const output2 = [];

// const dubbleNew = number => number * 2;
// for (const number of numbers) {
//     const result = dubbleNew(number);
//     output2.push(result);

// }
// console.log(output2);