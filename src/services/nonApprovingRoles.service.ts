import { HttpService } from "./base.service";

class NonApprovingCreatorService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Basic Collection
   * @paramdata
   */

  getNonApprovingCreators = (page: any, params: any): Promise<any> => {
    return this.get(
      `${this.prefix}/non-proved-creators/?page=${page}&search=` + params
    );
  };
  getNonApprovingBuyers = (page: any, params: any): Promise<any> => {
    return this.get(
      `${this.prefix}/non-proved-buyers/?page=${page}&search=` + params
    );
  };
}

export const nonApprovingcreatorService = new NonApprovingCreatorService();
