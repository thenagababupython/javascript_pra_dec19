const regex = /NA[a-z A-Z/.0-9]/gm;
const str = ``;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}




$(document).ready(function () {
    $("#btn1").click(function () {
        $("#firstdiv").hide()
    });
    $("#btn2").click(function () {
        $("#firstdiv").show()
    });
});
