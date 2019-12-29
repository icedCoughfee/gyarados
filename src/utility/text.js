function commaPerItem(arr, index) {
  return arr.length > 1 && index !== arr.length - 1 ? ", " : "";
}

export { commaPerItem };
