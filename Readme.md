
# AJ Test
## Allure Report Installation Steps:

Install Java 1.8 to run allure report

Install allure-commandline globally using below command:

    npm install -g allure-commandline


## Dependencies Installation Steps:
Run the below command to install all the required dependencies

    npm install

Run the below command to run all the scripts

    npm run codeceptjs

Run the below command to run scenarios all Live page scenarios

    npx codeceptjs run --grep "@live_video"

Run the below command to run scenarios all Most Read section scenarios

    npx codeceptjs run --grep "@most_read_section"

To Open Allure report, run the below command

    allure serve output

## Conifguration:

1. To change the environment, please update "env" in env_config.json
2. To pass the url from enviornment variable, please set url as env variable before executing the code. Example:
    url="https://dev.aljazeera.com" npm run codeceptjs
