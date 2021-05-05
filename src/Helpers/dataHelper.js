import Word from "../Models/Word";

export { fillWordTable };

function fillWordTable() {
    let i = 2;
    let props = {
        id: i,
        word: "Hallo",
        level: "A1.1",
    };
    Word.create(new Word(props));
    i++;
    props = {
        id: i,
        word: "Hi",
        level: "A1.1",
    };
    Word.create(new Word(props));
    i++;
    props = {
      id: i,
      word: "Ata",
      level: "A1.1",
    };
    Word.create(new Word(props));
    i++;
    props = {
      id: i,
      word: "By",
      level: "A1.1",
    };
    Word.create(new Word(props));
    Word.save();
}
