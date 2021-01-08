// Write your solution in this file!
const driver = {name: "Maria"}

function updateDriverWithKeyAndValue(driver, key, value) {
  const copy = Object.assign({}, driver)
  copy[key] = value
  console.log(`driver copy is: ${copy}, ${key}, ${value}`)
  return copy
}