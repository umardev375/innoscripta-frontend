import { HttpService } from "./base.service";

class ApprovingCreatorService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Basic Collection
   * @paramdata
   */

  getApprovingCreators = (data: any): Promise<any> =>
    this.get(
      `${this.prefix}/approvingCreators?userId=${data.userId}&updateIsVerified=${data.updateIsVerified}`
    );

  getApprovinguyers = (data: any): Promise<any> =>
  this.get(
    `${this.prefix}/approvingBuyers?userId=${data.userId}&updateIsVerified=${data.updateIsVerified}`
  );
}

export const approvingcreatorService = new ApprovingCreatorService();
