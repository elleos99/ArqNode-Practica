import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {

     /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    create(role: RoleTo): Promise<RoleTo>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleService
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    del(id: number): Promise<void>;

    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    puting(role: RoleTo): Promise<RoleTo>;
    
}