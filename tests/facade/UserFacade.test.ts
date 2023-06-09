process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";

describe('UserFacade Test', () => {

    before('Init', async () => {
        await db.sync({ force: true });
        User.create({
            id: 1,
            name: 'test',
            email: 'test@axity.com',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        });
    });

    describe('FindAll', () => {
        it('should return one user', async () => {
            const User: any[] = await UserFacade.findAll();
            expect(1).equal(User.length);
        });
    });

    describe('Create', () => {
        it('should create one user', async () => {
            let userTo: UserTo = {
                name: "Juan",
                email: "Juan@axity.com"
            }
            const user: UserTo = await UserFacade.create(userTo);
            expect(user.name).equal("Juan");
        });
    });

    describe('Create Error', () => {
        it('should retur error', async () => {
            let userTo: UserTo = {
                name: "Juan",
                email: "test@axity.com"
            }
            try {
                await UserFacade.create(userTo);
            } catch (error) {
                expect(error).instanceOf(ParametersError)
            }
        });
    });

    describe('Create Error atributes required', () => {
        it('should retur error -> attributes required', async () => {
            let userTo: UserTo = {
                name: "Juan"
            }
            try {
                await UserFacade.create(userTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError)
                expect(error.message).equal('El atributo email es requerido')
            }
        });
    });

    describe('Change', () => {
        it('should change one user', async () => {
            let userTo: UserTo = {
                id: 1,
                name: "Juanito",
                email: "Juanito@axity.com"
            }
            const user: UserTo = await UserFacade.puting(userTo);
            expect(user.name).equal("Juanito");
        });
    });

    describe('Eliminate', () => {
        it('should destoy one user', async () => {
            let userTo: UserTo = {
                id: 72,
                name: "Juan A Destruir",
                email: "JuanDestroyed@axity.com"
            }
            const user: UserTo = await UserFacade.create(userTo);
            await UserFacade.consumer(72);
            
            try {
                await UserFacade.consumer(72)
            } catch (error: any) {
                expect(error).instanceOf(ParametersError)
                expect(error.message).equal('Se borró el usuario')
            }
        });
        
    });
});