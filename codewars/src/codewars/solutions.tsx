// you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// For example:

// bags = 2
// cap = 2
// x (or garden) =
// [[ _ , _ , _ , _ , _ , _ ],
//  [ _ , _ , _ , _ , @ , _ ],
//  [ @ , _ , _ , _ , _ , _ ]]

// # Clean up after your dog
// function crap(garden, bags, cap){
// if (garden.includes('D')) {
//   return 'Dog!!'
// } if (bags )
// }

//Battery Bars

function battery_bars(percent) {
  if (percent == 100) {
    return "[#####]";
  } else if (percent >= 80) {
    return "[####.]";
  } else if (percent >= 60) {
    return "[###..]";
  } else if (percent >= 40) {
    return "[##...]";
  } else if (percent >= 20) {
    return "[#....]";
  } else {
    return "[.....]";
  }
}

function spEng(sentence) {
  if (sentence.toLowerCase().includes("english")) {
    return true;
  } else {
    return false;
  }
}
