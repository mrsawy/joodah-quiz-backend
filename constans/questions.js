// const xlsx = require("xlsx");

// // /
// let result = [];
// // __________________________________________________________________

// const fileExcel = xlsx.readFile("./all_admin_salesforce_questions.xlsx");
// // const workbookEn = xlsx.readFile("./constans/EN_data_with_answers.xlsx");

// // Access Worksheet
// const worksheet = fileExcel.Sheets[fileExcel.SheetNames[0]];
// // const worksheetEn = workbookEn.Sheets[workbookEn.SheetNames[0]];

// // Convert Worksheet to JSON
// const data = xlsx.utils.sheet_to_json(worksheet);
// // const dataEn = xlsx.utils.sheet_to_json(worksheetEn);

// // data.forEach((row, i, arr) => {
// //   result[i].value = { ar: data[i]["questions"], en: `` };
// //   result[i].correct_answer = { ar: data[i]["correct answer"], en: `` };
// //   for (let j = 0; j < 4; j++) {
// //     if (data[i]["answer " + (j + 1)]) {
// //       if (!!result[i]?.wrong_answers[j]?.ar) {
// //         result[i].wrong_answers[j].ar = data[i]["answer " + (j + 1)];
// //       } else {
// //         result[i].wrong_answers[j] = { ar: data[i]["answer " + (j + 1)], en: `` };
// //       }
// //     }
// //   }
// // });

// // dataEn.forEach((row, i, arr) => {
// //   result[i].value.en = dataEn[i]["questions"];
// //   result[i].correct_answer.en = dataEn[i]["correct answer"];
// //   for (let j = 0; j < 4; j++) {
// //     if (dataEn[i]["answer " + (j + 1)]) {
// //       if (!!result[i]?.wrong_answers[j]?.en) {
// //         result[i].wrong_answers[j].en = dataEn[i]["answer " + (j + 1)];
// //       } else {
// //         result[i].wrong_answers[j] = {
// //           ar: result[i].wrong_answers[j]?.ar,
// //           en: dataEn[i]["answer " + (j + 1)],
// //         };
// //       }
// //     }
// //   }
// // });

// // result.forEach((ele) => {
// //   ele.wrong_answers.forEach((e) => {
// //     if(!e?.en){
// //       console.log(e.en);
// //       console.log(ele);

// //     }
// //   });
// // });
// let shortest_wrong_ans = { length: 10, value: null };
// let longest_wrong_ans = { length: 0, value: null };

// data.forEach((d, i) => {
//   result[i] = {
//     value: { ar: d.Question, en: d.Question },
//     correct_answer: {
//       ar: d["Correct Answer"],
//       en: d["Correct Answer"],
//     },
//     wrong_answers: d.Options.split(`,`).map((e) => ({ ar: e, en: e })),
//   };
//   if (d.Options.split(`,`).length > longest_wrong_ans?.length) {
//     longest_wrong_ans.length = d.Options.split(`,`).length;
//     longest_wrong_ans.value = result[i];
//   }
//   if (d.Options.split(`,`).length < shortest_wrong_ans?.length) {
//     shortest_wrong_ans.length = d.Options.split(`,`).length;
//     shortest_wrong_ans.value = result[i];
//   }
// });

// console.log(
//   `shortest_wrong_ans`,
//   shortest_wrong_ans?.value?.wrong_answers,
//   `longest_wrong_ans`,
//   longest_wrong_ans?.value?.wrong_answers
// );
// // console.log();
// // module.exports.result = result;
