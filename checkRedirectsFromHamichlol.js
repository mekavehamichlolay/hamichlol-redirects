//@ts-check
const fs = require("fs");

/**
 *
 * @param {string[]} wikipediaArticleList
 * @param {string[]} hamichlolRedirectList
 * @param {string[]} excludeList
 * @returns {string[]} array of articles in wikipedia which R redirects in hamichlol
 */
const matchLists = (wikipediaArticleList, hamichlolRedirectList, excludeList) => {
  const articleFromWikipedia = wikipediaArticleList.filter(
    (article) => hamichlolRedirectList.indexOf(article) + 1
  );
  if (articleFromWikipedia.length <= 0 || excludeFileName.length <= 0) {
    return articleFromWikipedia;
  }
  return articleFromWikipedia.filter(article => !(excludeList.indexOf(article) + 1));
};

/**
 *
 * @param {string} fileName
 * @returns {string[]} the list from the file in array format
 */
const turnListFromFileInToArray = (fileName) => {
  try {
    const list = fs.readFileSync(fileName, { encoding: "utf-8" });
    return list.split("\n");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
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
const excludeFileName = "";
const fileToSave = "";

const wikiList = turnListFromFileInToArray(wikiArticleFile);
const hamichlolList = turnListFromFileInToArray(hamichlolRedirectFile);
const excludeList = turnListFromFileInToArray(excludeFileName);

const matchedList = matchLists(wikiList, hamichlolList, excludeList);

if (matchedList.length > 0) {
  saveList(matchedList, fileToSave);
} else {
  console.log("got no atricles to save");
}
