const env_details = require("../env_config.json")
export ={

    getEnv(){
            return env_details.env;
      

    },

    getUrl(){
        if(process.env.url == undefined){
            return env_details[this.getEnv()]["url"]
        }else{
            return process.env.url
        }
    }
}
