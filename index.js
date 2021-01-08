// Write your solution in this file!
const driver = {name: "Maria"}

function updateDriverWithKeyAndValue(driver, key, value) {
  const copy = Object.assign({}, driver)
  copy[key] = value
  return copy
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
}

function deleteFromDriverByKey(driver, key) {
  const copy = Object.assign({}, driver)
  delete copy[key]
  return copy
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
}

