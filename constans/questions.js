const xlsx = require("xlsx");

// Read Excel files
const fileExcel = xlsx.readFile("./constans/web.xlsx");
// const fileExcelAr = xlsx.readFile("./constans/web.xlsx");

// Access Worksheets
const worksheet = fileExcel.Sheets[fileExcel.SheetNames[0]];
// const worksheetAr = fileExcelAr.Sheets[fileExcelAr.SheetNames[0]];

// Convert Worksheets to JSON
const data = xlsx.utils.sheet_to_json(worksheet);
// const dataAr = xlsx.utils.sheet_to_json(worksheetAr);

// Process data to remove correct answers from wrong answers
const processData = (data) => {
  data.forEach((obj) => {
    const correctAnswer = obj["correct answer"];
    for (const key in obj) {
      if (obj[key] && obj[key].includes(correctAnswer) && key !== "correct answer") {
        delete obj[key];
      }
    }
  });
};

processData(data);
// processData(dataAr);
// console.log("Data processed", data, dataAr);
const result = [];

// Combine data from both languages
data.forEach((d, i) => {
  if (!d.question || !d["correct answer"]) {
    console.warn(`Skipping question ${i} due to missing data`, d);
    return;
  }
  // console.log(i, d);
  result[i] = {
    value: { ar: d.question, en: d.question },
    correct_answer: {
      ar: d["correct answer"],
      en: d["correct answer"],

    },
    wrong_answers: Object.entries(d)
      .filter((e) => e[0] !== "question" && e[0] !== "correct answer")
      .map((ele) => ({
        ar: ele[1] == d["correct answer"] || !ele[1] ? `` : ele[1],
        en: ele[1] == d["correct answer"] || !ele[1] ? `` : ele[1],
      })),
  };

});

// dataAr.forEach((d, i) => {
//   // console.log(d);
//   result[i].value.ar = d.question;
//   result[i].correct_answer.ar = d["correct answer"];
//   result[i].wrong_answers = Array(7)
//     .fill(``)
//     .map((e, index) => {
//       return {
//         ...result[i].wrong_answers[index],
//         ar:
//           d[`answer ${index + 1}`] == d["correct answer"] || !d[`answer ${index + 1}`]
//             ? ``
//             : d[`answer ${index + 1}`],
//       };
//     })
//     .filter((wr) => !!wr?.ar || !!wr?.en);
//   // .filter((data) => );
// });

// Uncomment to see the result
// console.log(
//   "result",
//   result
//     .map((r) => r.wrong_answers)
//   // .map(e=>e.en)
// );
// console.log(
//   result.map((e) => e.wrong_answers).map(wrArr =>)
//     .map((wr) => wr.ar),
//   { corr: result.map((r) => r.correct_answer).map((cr) => cr.ar) }
// );

// console.log(result )


module.exports = result;
