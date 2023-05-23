import { HttpService } from "./base.service";

class nftManagementService extends HttpService {
  private readonly prefix: string = "marketplace";

  /**
   * Basic Collection
   * @paramdata
   */

  getNftManagement = (params?: any): Promise<any> =>
    this.get(`${this.prefix}/nftManagement`, params);
  addCategories = (data?: any): Promise<any> =>
    this.post("categories/create", data);
  getCategories = (data?: any): Promise<any> =>
    this.get("categories/allCategories");
  updateCategories = (id: string, data?: any): Promise<any> =>
    this.put(`categories/updateCategory/${id}`, data);
  deleteCategories = (id: string): Promise<any> =>
    this.delete(`categories/deleteCategory/${id}`);
}

export const NftManagementService = new nftManagementService();
