let Martin = 76;
let Thomas = 85;
let Klaus = 65;
let Maria = 93;
let David = 83;

let sum = Martin + Thomas + Klaus + Maria + David;

let gradeAv = sum / 5;

let className = [Martin, Thomas, Klaus, Maria, David, gradeAv];

for (i = 0; i < className.length; i++) {
  if (className[i] < 60) {
    console.log("F");
  } else if (className[i] < 70) {
    console.log("D");
  } else if (className[i] < 80) {
    console.log("C");
  } else if (className[i] < 90) {
    console.log("B");
  } else if (className[i] < 100) {
    console.log("A");
  }
}

// console.log(gradeAv);
