import { HttpService } from "./base.service";

class UnBlockListingNftService extends HttpService {
  private readonly prefix: string = "marketplace";

  /**
   * Basic Collection
   * @paramdata
   */
  
   unBlockNft =(id:any): Promise<any> => this.get(`${this.prefix}/un-block/${id}`);


 


}



export const unBlockListingNftService = new UnBlockListingNftService();