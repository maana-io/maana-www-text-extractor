const util = require('util')
const boiler = util.promisify(require('boilerpipe-scraper'))

export const resolver = {
  Query: {
    extract: async (_, { url }) => boiler(url),
  },
}
