import {kApiUrlEndPoint} from "../config/WebService";

class ApiHelper {
  get = (url,data,headers) => {
    url=kApiUrlEndPoint+url;
    return fetch(url).then(x =>
      x.json(),
    );
  };
  post = () => {};
  put = () => {};
  delete = () => {};
}
export default new ApiHelper();
