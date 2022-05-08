/* let filePath = path.join(__dirname, 'public', req.url === "/" ? 'cv.html' : req.url);
    
    let extname = path.extname(filePath)
    console.log("Ext: ", extname);

    switch(extname) {
        case '.css':
            contentType= "text/css";
            break;
        case '.js':
            contentType= "text/javascript";
            break;
        case '.json':
            contentType= "text/json";
            break;
        case '.jpg':
            contentType= "text/jpg";
            break;
        case '.html':
            contentType= "text/html";
            break;
    }

    console.log(contentType)

    fs.readFile(filePath, (err, content)=> {
        if(err) {
            if(err.code = 'ENONET'){    //file doesnt exist
                fs.readFile(path.join(__dirname, 'public', '404.html'), 
                (err, content)=> {
                    if(err) throw err;
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(content, 'utf-8');
                })
            }else {
                res.writeHead(500);
                res.end(`server error ${err.code} has occured`)
            }
        }else{
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf-8')
        }
        
    }) */

    
    //res.writeHead(200, {'Content-Type': 'text/html'})
    //res.end("<a href='./index.html'>Click me!!</a>")