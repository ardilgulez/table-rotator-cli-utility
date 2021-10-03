const { Transform, Writable } = require("stream");
const { createReadStream } = require("fs");
const { format } = require("fast-csv");
const CSVStream = require("csv-stream");

const { rotateTable } = require("./src/table-rotator");
const { processList } = require("./src/list-processor");

if (process.argv.length !== 3) {
    console.log("Usage: node cli.js <path_to_input_csv>");
    return;
}

const csvReadStream = CSVStream.createStream({
    escapeChar: '"',
    enclosedChar: '"',
});

const csvWriteStream = format({ headers: true });

const csvPath = process.argv[2];

const transformer = () => {
    return new Transform({
        objectMode: true,
        transform: (data, _, done) => {
            const list = JSON.parse(data.json);
            const rotatedTable = rotateTable(processList(list));
            if (!rotatedTable) {
                done(null, {
                    id: data.id,
                    json: JSON.stringify([]),
                    is_valid: false,
                });
            } else {
                done(null, {
                    id: data.id,
                    json: JSON.stringify(rotatedTable.flat()),
                    is_valid: true,
                });
            }
        },
    });
};

createReadStream(csvPath)
    .pipe(csvReadStream)
    .pipe(transformer())
    .pipe(csvWriteStream)
    .pipe(process.stdout);
