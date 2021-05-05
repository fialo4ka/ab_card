import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Result extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("ab_db.db");
  }

  static get tableName() {
    return "result";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      word_id: { type: types.TEXT, not_null: true },
      level: { type: types.TEXT, not_null: true },
      memory: {
        type: types.INTEGER,
        not_null: true,
        default: () => 0,
      },
      timestamp: { type: types.INTEGER, default: () => Date.now() },
    };
  }
}
