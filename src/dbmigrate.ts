import { join } from 'path';

import { SequelizeTypescriptMigration } from '@techntools/sequelize-typescript-migration'

import config from './config';
import mysql from './store/mysql';


(async function() {
    try {
        await config.init()
        await mysql.init()
        await SequelizeTypescriptMigration.makeMigration(mysql.sequelize, {
            outDir: join(__dirname, "../migrations"),
        })
    } catch(err) {
        console.error(err)
    }

    process.exit(0)
})()
