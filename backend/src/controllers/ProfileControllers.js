const connection = require('../database/connection');

module.exports = {
    async index(request, response){

        const ong_ind = request.headers.authorization;
        const insidents = await connection('incidents')
        .where('ong_id', ong_ind)
        .select('*')

        return response.json(insidents);
    }
}
