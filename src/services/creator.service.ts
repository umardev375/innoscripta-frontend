import { HttpService } from "./base.service";

class CreatorService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Basic Collection
   * @paramdata
   */

  getAllCreators = (params?: any): Promise<any> =>
    this.get(`${this.prefix}/allCreators`, params);
  getAllCreatorsCSV = (params?: any): Promise<any> =>
    this.get(`${this.prefix}/allCreatorCSV`, params);
}

export const creatorService = new CreatorService();
