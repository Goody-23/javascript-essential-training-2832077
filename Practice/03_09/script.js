/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 6,
    right: 10,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);

console.log("Pocketnum Value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);

console.log("Right before:", backpack.strapLength.right);

backpack.newStrapLength(23, 31);

console.log("Left after:", backpack.strapLength.left);

console.log("Right after:", backpack.strapLength.right);
