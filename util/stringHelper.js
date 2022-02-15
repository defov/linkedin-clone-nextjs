
export function truncate(string, num) {
    return string?.length > num ? 
        string.substr(0, num - 1) + '...see more' :
        string
}