function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    const isPalindromeRange = (s: string, l: number, r: number): boolean => {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    };

    while (left < right) {
        if (s[left] !== s[right]) {
            return (
                isPalindromeRange(s, left + 1, right) ||
                isPalindromeRange(s, left, right - 1)
            );
        }
        left++;
        right--;
    }

    return true;
}
