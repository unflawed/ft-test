/**
 * [Keeping as an example, this can be deleted]
 * Using local dir as "mock" NPM package where this would be published
 * using npm publish with correct .npmrc config
 */
import { requestMultipleUrls } from './src/utils/index'
const urls: Array<string> = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
]
/**
 * [Keeping as an example, this can also be deleted]
 * Returns an array of GET request promises for an array of URLs of type String
 * @param {String[]} urls
 */
requestMultipleUrls(urls)
    .then((data) => console.log(data))
    .catch((error) => console.error(error))

/**
 *  Remove LoC 1-20 when publishing as a package
 */
export { requestMultipleUrls }
