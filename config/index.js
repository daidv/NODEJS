var configValues = require("./config.json");

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configValues.username}:${configValues.password}@ds133231.mlab.com:33231/node-todos1`;
    }
}