import { HttpService } from "./base.service";

class FeaturedNftService extends HttpService {
  private readonly prefix: string = "marketplace";

  /**
   * Basic Collection
   * @paramdata
   */
  
   featuredNft = (id: any, data:any): Promise<any> => this.put(`${this.prefix}/featuredNft/${id}`, data);


 


}



export const featuredNftService = new FeaturedNftService();