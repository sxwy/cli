import inquirer, { Answers, QuestionCollection } from 'inquirer'

export default (params: QuestionCollection<Answers>): Promise<string> => {
  return inquirer
    .prompt({
      name: 'name',
      ...params
    })
    .then((answers) => answers.name)
}
