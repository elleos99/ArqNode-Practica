import { RoleTo } from '../../to/RoleTo';
import RoleService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
    return await RoleService.create(role);
}


/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await RoleService.findAll();
}


/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function del(id: number): Promise<void> {
    return await RoleService.del(id);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function puting(role: RoleTo): Promise<RoleTo> {
    return await RoleService.puting(role);
}