const displayData = (api) => {
  // Chose the question type
  let question = {};
  question.type = ["flag", "capital", "region"].at(
    Math.floor(Math.random() * 3)
  );

  // Pick 4 countries
  const countries = [];
  const countriesCount = api.countries.edges.length;
  for (let i = 0; i < 4; i++) {
    let country =
      api.countries.edges[Math.floor(Math.random() * countriesCount)];
    if (!countries.includes(country)) countries.push(country);
    else i--;
  }

  // Fill question's data
  question.type === "flag"
    ? (question.question = "Which country does this flag belong to?")
    : question.type === "capital"
    ? (question.question = `${countries[0].node.capital} is the capital of:`)
    : (question.question = `In which region is ${countries[0].node.name} located?`);

  // Flag
  question.type === "flag" && (question.flag = countries[0].node.flag);
  // Options
  question.options = countries.map(
    (e, i) =>
      new Object({
        option: e.node[`${question.type === "region" ? "subregion" : "name"}`],
        correct: i === 0 ? true : false,
      })
  );
  // Mix the options
  for (let i = 4 - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [question.options[i], question.options[j]] = [
      question.options[j],
      question.options[i],
    ];
  }
  return question;
};
export default displayData;
