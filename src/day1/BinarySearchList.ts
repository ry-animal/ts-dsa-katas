export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let search = haystack[mid];

        if (search === needle) {
            return true;
        } else {
            if (search < needle) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return false;
}

// o(logn)
