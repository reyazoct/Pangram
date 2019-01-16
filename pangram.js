export function isPangram(string) {
    let charSet = new Set();
    for (let iter = 0; iter < string.length; iter++) {
        if (string[iter].match(/[a-zA-Z]/))
            charSet.add(string[iter].toLowerCase());
    }
    if (charSet.size == 26)
        return true;
    return false;
}
