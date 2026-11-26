Following npm packages are demonstrated here

1. [sequelize-to-openapi](https://github.com/techntools/sequelize-to-openapi)
2. [sequelize-typescript-migration](https://github.com/techntools/sequelize-typescript-migration)

## Run Locally

* Install packages
  <br>
  ```bash
  npm i
  ```
* Compile the TypeScript code
  <br>
  ```bash
  npm run compile
  ```
* Copy the ```.env.example``` to ```.env``` and change values as per your setup
* Start the database
  <br>
  ```bash
  docker compose --env-file .env up postgis -d
  ```
* Run the express app
  ```bash
  npm run dev
  ```

## Migrations

```bash
# Create the migrations directory
mkdir migrations

# Create the migrations
DOTENV_CONFIG_PATH=.env node -r dotenv/config build/dbmigrate.js

# Use migration to update the database
npx sequelize-cli db:migrate --url "postgres://username:password@localhost:5432/database" --to '00000001-noname.js' --migrations-path='/path/to/migrations'

# Revert the migration
npx sequelize-cli db:migrate:undo --url "postgres://username:password@localhost:5432/database" --name '00000001-noname.js'
```

And then visit the [documentation](openapi-doc.png) at http://localhost:3000/api/v1/docs
