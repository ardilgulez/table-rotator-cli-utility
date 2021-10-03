## Table Rotator Utility

Give it a CSV of square matrices as one dimensional lists and it will rotate each square matrix once in clockwise direction, flatten it back to a one dimensional list, and output as csv.

Example:

```javascript
[1, 2, 3, 4] => [[1, 2], [3, 4]] => [[3, 1], [4, 2]] => [3, 1, 4, 2]
```

### How to run

You'll need to have node.js installed on your machine. This utility is developed and tested using node version `14.17.1`.

After you install node, you need to run `npm install` to install the dependencies of the utility.

Once you satisfy the requirements, the command to run the utility is:

`node cli.js <path-to-input-csv>`

You can also run automated tests via `npm test`.

### FAQ

> What if I send a path that does't exist as input

You're going to get the error straight from `fs.createReadStream`

> What if I send something that is not a CSV

You'll get a CSV output that won't serve any useful purpose.

> What if I send missing quotes in the CSV

This utility parses bad rows as invalid rows. That means, you'll most likely end up having not as many rows as intended (the utility is going to think that it's processing the same row until the next quotation mark comes up)

> My CSV is so big. Can your utility still parse that?

I tested myself with a CSV file of 7.5 million lines. The utility had no problem handling that.

> Can I sent multiple CSVs as input?

No. The utility checks for the argument count. Sending no arguments or more than one arguments will cause the utility to refuse to execute, telling you the correct format before promptly finishing execution.
