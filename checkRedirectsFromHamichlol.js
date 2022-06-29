//@ts-check
const fs = require("fs");

/**
 *
 * @param {string[]} wikipediaArticleList
 * @param {string[]} hamichlolRedirectList
 * @returns {string[]} array of articles in wikipedia which R redirects in hamichlol
 */
const matchLists = (wikipediaArticleList, hamichlolRedirectList) => {
  const articleFromWikipedia = wikipediaArticleList.filter(
    (article) => hamichlolRedirectList.indexOf(article) + 1
  );
  return articleFromWikipedia;
};

/**
 *
 * @param {string} fileName
 * @returns {string[]} the list from the file in array format
 */
const turnListFromFileInToArray = (fileName) => {
  const list = fs.readFileSync(fileName, { encoding: "utf-8" });
  return list.split("\n");
};
/**
 *
 * @param {string[]} listToSave
 * @param {string} fileNameToSave
 */
const saveList = (listToSave, fileNameToSave) => {
  const listInText = listToSave.join("\n");
  fs.appendFile(fileNameToSave, listInText, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(
      `saved ${listToSave.length} redirect names to ${fileNameToSave}`
    );
  });
};

const wikiArticleFile = "";
const hamichlolRedirectFile = "";
const fileToSave = "";

const wikiList = turnListFromFileInToArray(wikiArticleFile);
const hamichlolList = turnListFromFileInToArray(hamichlolRedirectFile);

const matchedList = matchLists(wikiList, hamichlolList);

if (matchedList.length > 0) {
  saveList(matchedList, fileToSave);
}
