import { HttpService } from "./base.service";

class BlockListingNftService extends HttpService {
  private readonly prefix: string = "marketplace";

  /**
   * Basic Collection
   * @paramdata
   */
  
   blockNft = (id:any): Promise<any> => this.get(`${this.prefix}/block/${id}`,);


 


}



export const blockListingNftService = new BlockListingNftService();