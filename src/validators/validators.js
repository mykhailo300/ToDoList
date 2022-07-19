

export let request = (value) => {
    return value ? undefined : "The field mustn't be empty"
}
export let maxLength = (maxLength) => (value) => {
    return value.length <= maxLength? undefined : `Your task is too long(maximum length is ${maxLength} symbols)`;
}