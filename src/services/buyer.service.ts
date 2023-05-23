import { HttpService } from "./base.service";

class BuyerService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Basic Collection
   * @paramdata
   */

  getAllBuyer = (params?: any): Promise<any> =>
    this.get(`${this.prefix}/allBuyers`, params);
  getAllBuyerCSV = (params?: any): Promise<any> =>
    this.get(`${this.prefix}/allBuyersCSV`, params);
  adminDashboardData = (): Promise<any> =>
    this.get(`${this.prefix}/admin-dashboard-data`);
  getChartData = (): Promise<any> => this.get(`marketplace/admin-chart-data`);
}
export const buyerService = new BuyerService();
