const xlsx = require("xlsx");

// /
// __________________________________________________________________
const result = [];

const fileExcel = xlsx.readFile("./constans/convince_en.xlsx");
const fileExcelAr = xlsx.readFile("./constans/convince_ar.xlsx");
// const workbookEn = xlsx.readFile("./constans/EN_data_with_answers.xlsx");

// Access Worksheet
const worksheet = fileExcel.Sheets[fileExcel.SheetNames[0]];
const worksheetAr = fileExcelAr.Sheets[fileExcelAr.SheetNames[0]];
// const worksheetEn = workbookEn.Sheets[workbookEn.SheetNames[0]];

// Convert Worksheet to JSON
const data = xlsx.utils.sheet_to_json(worksheet);
const dataAr = xlsx.utils.sheet_to_json(worksheetAr);
// const dataEn = xlsx.utils.sheet_to_json(worksheetEn);

const processData = (data) => {
  data.forEach((obj) => {
    const correctAnswer = obj["correct answer"];
    for (const key in obj) {
      if (obj[key] === correctAnswer && key !== "correct answer") {
        delete obj[key];
      }
    }
  });
};

processData(data);
processData(dataAr);

data.forEach((d, i) => {
  result[i] = {
    value: { ar: d.questions, en: d.questions },
    correct_answer: {
      ar: d["correct answer"],
      en: d["correct answer"],
    },
    wrong_answers: Object.entries(d)
      .filter((e) => e[0] != "questions" && e[0] != "correct answer")
      .map((ele) => {
        return {
          ar: ele[1],
          en: ele[1],
        };
      }),
  };
});

dataAr.forEach((d, i) => {
  result[i].value.ar = d.questions;
  result[i].correct_answer.ar = d["correct answer"];
  result[i].wrong_answers = result[i].wrong_answers.map((wr, index) => {
    return {
      ar: d[`answer ${index + 1}`] || wr.ar,
      en: wr.en,
    };
  });
});

console.log(`result`, { result });

// console.log(result.map((e) => e.wrong_answers));
module.exports = result;
