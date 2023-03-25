process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { db } from '../../src/config/connection/database';
import { ParametersError } from "../../src/config/error";
import { RoleTo } from "../../src/to/RoleTo";
import RoleFacade from "../../src/facade/Role/facade";

describe('RoleFacade Test', () => {

    before('Init', async () => {
        await db.sync({ force: true });
       
    });

    describe('Create', () => {
        it('should create one role', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            const role: RoleTo = await RoleFacade.create(roleTo);
            expect(role.id).to.not.be.null;
        });
    });

    describe('Create Error atributes required', () => {
        it('should retur error -> attributes required', async () => {
            let roleTo: RoleTo = {
            }
            try {
                await RoleFacade.create(roleTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError)
                expect(error.message).equal('El atributo name es requerido')
            }
        });
    });

    describe('FindAll', () => {
        it('should return one role', async () => {
            const Role: any[] = await RoleFacade.findAll();
            expect(1).equal(Role.length);
        });
    });

    
    describe('Change', () => {
        it('should change one role', async () => {
            let roleTo: RoleTo = {
                id: 1,
                name: "Rol cambiado",
            }
            const role: RoleTo = await RoleFacade.puting(roleTo);
            expect(role.name).equal("Rol cambiado");
        });
    });

    describe('Eliminate', () => {
        it('should destoy one role', async () => {
            let roleTo: RoleTo = {
                id: 72,
                name: "Rol A Destruir",
            }
            const role: RoleTo = await RoleFacade.create(roleTo);
            await RoleFacade.consumer(72);
            
            try {
                await RoleFacade.consumer(72)
            } catch (error: any) {
                expect(error).instanceOf(ParametersError)
                expect(error.message).equal('Se borró el usuario')
            }
        });
        
    });
});