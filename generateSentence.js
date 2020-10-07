// define generatePassword function
function generate_Sentence(options, task, phrase) {
  // define sentence structure
  // 身為一個 + 'target' + 'task' + 'phrase' 吧！
  // establish the first words
  let sentence = ''
  // detect the mount of user choose
  /* if (Object.keys(options).length === 0 || Object.keys(options).length > 1) {
    sentence += `只需選擇一個角色，你選了${Object.keys(options).length}個`
  }
  else {
    switch (Object.keys(options)[0]) {
      case 'developer': sentence += ('身為一個工程師' + sample(task.engineer) + sample(phrase) + '吧！');
        break;
      case 'designer': sentence += ('身為一個設計師' + sample(task.designer) + sample(phrase) + '吧！');
        break;
      case 'founder': sentence += ('身為一個創業家' + sample(task.entrepreneur) + sample(phrase) + '吧！');
        break;
    }
  } */
  if (options.target) {
    switch (options.target) {
      case 'developer': sentence += ('身為一個工程師' + sample(task.engineer) + sample(phrase) + '吧！')
        break;
      case 'designer': sentence += ('身為一個設計師' + sample(task.designer) + sample(phrase) + '吧！')
        break;
      case 'founder': sentence += ('身為一個創業家' + sample(task.entrepreneur) + sample(phrase) + '吧！')
        break;
    }
  } else {
    sentence = '需要您要選一個角色！'
  }
  // return the generated sentence
  return sentence
}

// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// export generatePassword function for other files to use
module.exports = generate_Sentence