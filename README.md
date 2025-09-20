# restful-booker

Tests are written in Postman. To run the tests follow the steps below:
- Change directory to root folder of the project
- Run the tests using the following command in terminal
```bash
newman run restful-booker.collection.json -e restful-booker.environment.json
```

## Prerequisites

- You need newman installed globally. Check it by running:
```bash
newman -v
```
- If you don't have it installed, you can do so by running the following command:
```bash
npm install -g newman
```