import axios, { CancelTokenStatic, CancelTokenSource } from "axios";
import { Console } from "console";
import Config from "../config/index";

export class HttpService {
  CancelToken: CancelTokenStatic;
  source: CancelTokenSource;

  constructor() {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();
  }

  /**
   * Set Token On Header
   * @param token
   */
  static setToken(token: string): void {    
    //@ts-ignore
  //  if(token) {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    // }

  }

  /**
   * Fetch data from server
   * @param url Endpoint link
   * @return Promise
   */
  protected get = (url: string, params?: any): Promise<any> =>
    axios.get(`${Config.API_ENDPOINT}/${url}`, {
      params,
      cancelToken: this.source.token,
    });

  /**
   * Write data over server
   * @param url Endpoint link
   * @param body Data to send over server
   * @return Promise
   */
  protected post = (url: string, body: any, options = {}): Promise<any> =>
    axios.post(`${Config.API_ENDPOINT}/${url}`, body, {
      ...options,
       cancelToken: this.source.token,
    });
   
  /**
   * Delete Data From Server
   * @param url Endpoint link
   * @param params Embed as query params
   * @return Promise
   */
  protected delete = (url: string, params?: any, data?: any): Promise<any> =>
    axios.delete(`${Config.API_ENDPOINT}/${url}`, { params, data });

  /**
   * Update data on server
   * @param url Endpoint link
   * @param body Data to send over server
   * @param params Embed as query params
   * @return Promise
   */
  protected put = (url: string, body?: any, params?: any): Promise<any> =>
    axios.put(`${Config.API_ENDPOINT}/${url}`, body, {
      ...params,
      cancelToken: this.source.token,
    });

  private updateCancelToken() {
    this.source = this.CancelToken.source();
  }

  cancel = () => {
    this.source.cancel("Explicitly cancelled HTTP request");
    this.updateCancelToken();
  };
}
