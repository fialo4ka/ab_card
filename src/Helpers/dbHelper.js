import * as  SQLite  from "expo-sqlite";
import * as FileSystem from "expo-file-system";


export { openDatabase};


let db;

async function openDatabase() {
  let exist = (
    await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite/db.db")
  ).exists;
  console.log("before " + (exist ? "yes" : "no"));
  db = SQLite.openDatabase("ab.db");
  if (!exist) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table test (id integer primary key not null, done int, stroka);"
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
  db.transaction(
    (tx) => {
      tx.executeSql("select stroka from test", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    (error) => {
      console.log(error);
    }
  );
  return exist ? "yes" : "no";
}

