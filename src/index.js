
//
// Handler
//

exports.handler = async function (event) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: {
            status: 200,
            message: 'Charge successfully created!',
            result: event.body
        }
    }
}

//
// END
//
