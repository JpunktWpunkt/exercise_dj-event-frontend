const {events} = require('./data.json');
//limit the methods who can
export default function handler(request, response) {
    if (request.method === 'GET') {

        response.status(200).json({events})
    } else {
        response.setHeader('Allow', [Get]); //will be to to force only the method that i would allowed, in this place only posible use Get, ansonsten gibt es eine Fehlermeldung
        response.status(405).json({message: 'Method ${request.method} not supported'})
    }
}
