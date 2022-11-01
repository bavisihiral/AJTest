const env_details = require("../env_config.json")

export ={

    getEnv(){
        return env_details.env;

    },

    getUrl(){
        return env_details[this.getEnv()]["url"]
    }
}
