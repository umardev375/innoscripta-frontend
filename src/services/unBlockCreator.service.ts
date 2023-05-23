import { HttpService } from "./base.service";

class UnBlockCreatorService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Basic Collection
   * @paramdata
   */

  unBlockCreators = (data: any): Promise<any> =>
    this.post(`${this.prefix}/block/unblockCreator`, data);
  makeFeaturedCreators = (data: any): Promise<any> =>
    this.post(`${this.prefix}/creator/make-featured`, data);
}

export const unBlockCreatorService = new UnBlockCreatorService();
