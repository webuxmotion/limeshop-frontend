export default function isEmptyObj(objectToCheck) {
    return Object.entries(objectToCheck).length === 0;
}