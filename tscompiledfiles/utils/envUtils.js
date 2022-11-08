"use strict";
const env_details = require("../env_config.json");
module.exports = {
    getEnv() {
        return env_details.env;
    },
    getUrl() {
        if (process.env.url == undefined) {
            return env_details[this.getEnv()]["url"];
        }
        else {
            return process.env.url;
        }
    }
};
//# sourceMappingURL=envUtils.js.map