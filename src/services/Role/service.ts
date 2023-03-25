import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        let roleModel = await Role.create(role);
        return roleModel
    },

    /**
         * @returns {Promise < any[] >}
         * @memberof RoleFacade
         */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return Role.findAll();
    },


    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async del(id: number): Promise<void> {
        Role.destroy({
            where: {
                id:id
            }
        });
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async puting(role: RoleTo): Promise<Role> {
        let [roleModel, istrue] = await Role.upsert(role);
        return roleModel
    },



}



export default RoleService;