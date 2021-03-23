const { transact } = require('../../api')
const { SYSTEM, ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const buyStorage = async ({ bytes }) => {
    await transact([{
        account: SYSTEM,
        name: 'buyrambytes',
        data: {
            payer: ACCOUNT,
            receiver: ACCOUNT,
            bytes: bytes
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }]
    }])
}

module.exports = {
    buyStorage
}