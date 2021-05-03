const fs=require("fs");


const f=(req,res)=>{
    if(req.url==="/message" && req.method==="POST")
    {
        const body=[];
  
    req.on("data",(chunk)=>{
        body.push(chunk);
        console.log(body);
    });
    
   return req.on("end",()=>{
        const data=Buffer.concat(body).toString().split('=')[1];
        console.log(data);
        fs.writeFile("new.txt",data,(err)=>{
            res.writeHead(302,{"location":"/"});
            res.end();
        });
       
    });
   
    }
    if(req.url="/")
    {
    res.setHeader('contentType',"text/html");
    res.write(`
    <html>
    <head>
    <title>
    node
    </title>
    </head>
    <body>
    <form method="POST" action="/message">
    <input type="text" name="name">
    <button type="submit">submit</button>
    </form>
    </body>
    </html>
    `);
    return res.end();
    }
   
}


module.exports=f;