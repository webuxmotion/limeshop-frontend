export default function convertMongooseObjToJSON(mongooseObj) {
    return JSON.parse(JSON.stringify(mongooseObj));
}