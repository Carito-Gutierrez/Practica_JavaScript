let num = 30;

for (let i = 1; i <= num; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("TzStriker");
  } else if (i % 3 == 0) {
    console.log("Tz");
  } else if (i % 5 == 0) {
    console.log("Striker");
  } else {
    console.log(i);
  }
}
