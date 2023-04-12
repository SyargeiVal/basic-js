const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let arRes = [];
    for (let el of names) {
        if (arRes.includes(el)) {
            let el1 = el + "(1)";
            if (arRes.includes(el1)) {
                let el2 = el + "(2)";
                if (arRes.includes(el2)) {

                } else {
                    arRes.push(el2);
                }
            } else {
                arRes.push(el1);
            }
        } else {
            arRes.push(el);
        }
    }
    return arRes;
}

module.exports = {
  renameFiles
};
