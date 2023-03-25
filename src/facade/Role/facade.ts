import { Utils } from "../../commons/utils/Utils";
import { RoleService } from "../../services";
import { RoleTo } from "../../to/RoleTo";
import { IRoleFacade } from "./interface";


/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {
    
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        Utils.required({name: role.name});
        let RoleResponse: RoleTo = await RoleService.create(role);
        return RoleResponse;
    },


    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async findAll(): Promise<RoleTo[]> {

        let Role = await RoleService.findAll();
        return Role;
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async consumer(id: number): Promise<void> {
        await RoleService.del(id);
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async puting(role: RoleTo): Promise<RoleTo> {
        let roleResponse: RoleTo = await RoleService.puting(role);
        return roleResponse;
    }




}

export default RoleFacade;