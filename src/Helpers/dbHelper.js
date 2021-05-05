import * as  SQLite  from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import Word from "../Models/Word"
import Result from "../Models/Result";
import * as dataHelper from "./dataHelper";

export { getNewWord };


let db;

async function openDatabase() {
    let exist = (
        await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "SQLite/ab_db.db"
        )
    ).exists;
    if (!exist) {
        createTables();
    }
    console.log("db checked");
}

function createTables() {
  Word.createTable();
  Result.createTable();
  dataHelper.fillWordTable(); 

}

async function getWorldMax() {
    await openDatabase();
    db = SQLite.openDatabase("ab_db.db");
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "select count(*) as count from word",
            [],
            (_, { rows }) => {
              console.log(JSON.stringify(rows));
              console.log("rows.count = " + rows.item(0).count);
              resolve(rows.item(0).count);
            }
          );
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

async function getNewWord(){
    let maxId = await getWorldMax();
    let id = getRandomInt(maxId);
    console.log("id = " + id);
    return await Word.find(id);   
  }