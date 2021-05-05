import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Word extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("ab_db.db");
  }

  static get tableName() {
    return "word";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true }, 
      word: { type: types.TEXT, not_null: true },
      level: { type: types.TEXT, not_null: true },
    };
  }
}
