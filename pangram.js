export function isPangram(string) {
    let charSet = new Set();
    for (let iter = 0; iter < string.length; iter++) {
        if (string[iter] != ' ')
            charSet.add(string[iter]);
    }
    if (charSet.size == 26)
        return true;
    return false;
}
