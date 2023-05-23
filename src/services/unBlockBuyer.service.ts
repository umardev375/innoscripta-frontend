import { HttpService } from "./base.service";

class UnBlockBuyerService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Basic Collection
   * @paramdata
   */
  
   unBlockBuyer = (data:any): Promise<any> => this.post(`${this.prefix}/block/unblockBuyer`, data);


 


}



export const unBlockBuyerService = new UnBlockBuyerService();