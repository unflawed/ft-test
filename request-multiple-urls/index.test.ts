// @ts-nocheck
import mockAxios from 'jest-mock-axios'
import { requestMultipleUrls, errorUtil } from './src/utils'

// Tidy up mock data
beforeEach(() => mockAxios.mockClear())

// Test suite
describe('Request multiple URLs', () => {
    test('`urls` parameter must be string[] array', () => {
        const urls = ['a', 2, false]
        expect(requestMultipleUrls(urls)).rejects.toEqual(
            new Error(errorUtil.messages.INVALID_URL)
        )
    })
    test('Number of requests matches number of endpoints', async () => {
        let catchFn = jest.fn(),
            thenFn = jest.fn()
        const urls = [
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
        ]
        requestMultipleUrls(urls).then(thenFn).catch(catchFn)
        urls.forEach((url) => expect(mockAxios.get).toHaveBeenCalledWith(url))
        expect(catchFn).not.toHaveBeenCalled()
    })
})
