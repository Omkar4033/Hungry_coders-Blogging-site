import * as fs from "fs";

export default async function handler(req, res) {

    let allBlogs=[];
    let data = await fs.promises.readdir("blogdata");
    for(let index=0;index<data.length;index++)
    {
      const item=data[index];
      console.log(item);
      let myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
      allBlogs.push(JSON.parse(myfile));
    }
    res.status(200).json(allBlogs);
  ;
}
