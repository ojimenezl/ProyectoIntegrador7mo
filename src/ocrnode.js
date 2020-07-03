console.log("adentro");

const publicar = (req, res) => {
    const spawn = require("child_process").spawn;
    const py = spawn('python', ["ocr.py"]);
    console.log("adentro2");
    py.stdout.on('data', (data) => {
        console.log("adentro3");
        console.log(`nose js ${data}`)
        console.log(`type is: ${typeof data}`)
        mystr = data.toString();
        console.log(`data toString ${mystr} tpe of ${typeof mystr}`);
        myjson = JSON.parse(mystr);
        console.log(`JSON: ${myjson}`)

    });
};

module.exports = {
    publicar
}