export function getFullYear() {
  let today = new Date();
  return today.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

