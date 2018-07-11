import chalk from 'chalk'
import * as _ from 'lodash'

export default class Test {
  constructor() {
    console.log(chalk.red('Test'))
  }
  upper(str: String): any {
    return str.toUpperCase()
  }
  lower(str: String): any {
    return str.toLowerCase()
  }
  title(str: String): any {
    return this.titleCase(str)
  }
  titleCase(str: String): any {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(' ')
  }
  reverse(str: String): any {
    return str.split('').reverse().join('')
  }
  family(values: Array<String>): any {
    return _.join(values, ' * ')
  }
}