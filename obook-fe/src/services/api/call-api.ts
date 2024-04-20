import IResponse from "@/interfaces/response-interface";
import axios, { AxiosRequestConfig } from "axios";

export default class CallAPI {
  static call = async (
    url: string,
    { method = "POST", ...config }: AxiosRequestConfig
  ): Promise<IResponse> => {
    let { data: dataResponse } = await axios({
      method,
      baseURL: process.env.NEXT_PUBLIC_DOMAIN_SERVER + url,
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    return {
      type: dataResponse.type,
      code: dataResponse.code,
      message: dataResponse?.message,
    };
  };
}
