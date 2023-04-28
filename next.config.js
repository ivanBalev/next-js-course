// post-build dynamic build by next.js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'isbalev',
                mongodb_password: 'GpqFzjyBb4bjltQi',
                mongodb_clustername: 'nextjs',
                mongodb_database: 'dev'
            }
        }
    }

    return {
        env: {
            mongodb_username: 'isbalev',
            mongodb_password: 'GpqFzjyBb4bjltQi',
            mongodb_clustername: 'nextjs',
            mongodb_database: 'prod'
        }
    }
}
