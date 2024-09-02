export default function getIdsWithCount(ids) {
    const idsWithCount = {};

    ids.forEach(id => {
        if (idsWithCount?.[id]) {
            idsWithCount[id]++;
        } else {
            idsWithCount[id] = 1;
        }
    });

    return idsWithCount;
}