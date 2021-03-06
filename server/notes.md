1. Make sure the typeorm CLI is installed globally
2. `typeorm init`
3. update `ormconfig.json`
   1. { "type": "postgres", "host": "localhost", "port": 5432, "username": "me", "password": "**\*\***", "database": "test", "synchronize": true, "logging": false, "entities": ["src/entity/**/*.ts"], "migrations": ["src/migration/**/*.ts"], "subscribers": ["src/subscriber/**/*.ts"], "cli": { "entitiesDir": "src/entity", "migrationsDir": "src/migration", "subscribersDir": "src/subscriber" } }
4. Update typescript and ts-node `npm install -D typescript@latest ts-node@latest`
5. Install all dependencies `npm install`
6. Update `ormconfig.json` to include your database `"database":"mydb"`
7. Make sure your db exists
   1. `psql <anydb>`
   2. `create database <mydb>;`
   3. `\q` & `psql <mydb>`
8. In psql: `create extension if not exists "uuid-ossp";`
9. Create your models & relations
10. Install express `npm i express @types/express`
11. Add to tsconfig: "esModuleInterop": true
12. Add this command to scripts in package.json: `"typeorm": "ts-node ./node_modules/typeorm/cli.js"`
13. 1. Create Model Entity
14. {
    id: uuid,
    createdDate: date,
    updatedDate: date
    }
15. Create Tag Entity - Tag Has Many Events
    1. Tag has: {
       tag: manyEvents
       name: string,
       }
16. Create routes for Tags
    1. Create a Tag
    2. Read a list of all tags
    3. Read a single tag
    4. Update a single tag
    5. Delete a single tag
17. Create Event Entity - Event Has Many Tags
    1. Event has: {DateTime: date}
18. Create routes for Events
    1. Create an Event
    2. Read a list of all events
    3. Read a single event
    4. Update a single tag
    5. Delete a single tag
