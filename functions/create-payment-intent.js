// domain/netlify/function/create-payment-intent

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: 'payment intent',
    }
}