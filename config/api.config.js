const isPro = Object.is(process.env.NODE_ENV, 'production')
 
module.exports = {
  baseUrl: isPro ? 'https://baijia.nutri-camel.com' : 'https://baijia.nutri-camel.com'
}
