import { HttpService } from "./base.service";

class AuthService extends HttpService {
  private readonly prefix: string = "auth";
  private readonly transactions_prefix: string = "products";

  /**
   * Basic Authenticate User
   * @paramdata
   */
  login = (data: any): Promise<any> => this.post(`login`, data);
  resetPassword = (data: any): Promise<any> =>
    this.post(`${this.prefix}/reset-password`, data);
  signup = (data: any): Promise<any> =>
    this.post(`register`, data);
  refetch = (): Promise<any> => this.get(`${this.prefix}/refetch`);

  sendPasswordResetEmail = (data: any): Promise<any> =>
    this.post(`${this.prefix}/sendPasswordResetEmail`, data);
  getAllTransactions = (): Promise<any> =>
    this.get(`${this.transactions_prefix}/all-transaction`);
    loginFromAdmin = (data?:any): Promise<any> =>
    this.post(`${this.prefix}/refetchLogin`,data);
    deleteUser = (data?:any): Promise<any> =>
    this.put(`user/deleteUser`,data);
}

export const authService = new AuthService();
