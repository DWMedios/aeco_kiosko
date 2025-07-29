const publicityRepository = require('../repositories/publicityRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.getActive = async (req, res) => {
    try {
        const publicities = await publicityRepository.getAll(true, true)
        return res.json(publicities)
    } catch (err) {
        console.error(err)
        return res
            .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
            .send({ message: 'Error al obtener la publicidad' })
    }
}

