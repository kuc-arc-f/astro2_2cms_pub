import Config from './LibConfig';
import LibCommon from './LibCommon';

const  LibPost = {
  /**
  * getList
  * @param
  *
  * @return
  */  
  getList: async function () : Promise<any>
  {
    try {   
      let cmsData: any = {};
      const item = {
        siteId:  Config.MY_SITE_ID,
      }
      const res = await fetch(Config.MY_JSON_URL + "/posts/index", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(item),
      });        
      const json = await res.json();  
   
      let items = json;
      items  = LibCommon.getDateArray(items);
  //console.log(items); 
      cmsData.items = items;
      return cmsData;
    } catch (e) {
      console.error(e);
    }
  } 
}
export default LibPost;
