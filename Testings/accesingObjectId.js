const obj = {
    STUDENT21B1424:
        {
            id:1,
            name:"Zed"
        },
    STUDENT21B1425:
        {
            id: 2,
            name: "Art"
        }
}
const a = `STUDENT${`21B1424`}`;

// dont use dot (.) when using this kind of value
console.log(JSON.parse(JSON.stringify(obj["STUDENT21B1424"])))