FROM mongo:latest

MAINTAINER Ason Matthews <ason.matthews@gmail.com>

WORKDIR /data


COPY client /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf


docker build -t maisonam/builder:NGApp .

docker build -t maisonam/nodeapp:latest .

docker push

docker run -it --name nodeServer -v "$(pwd)":/src --link mongo:mongo -w /src -p 40001:80 -d maisonam/node bash -c "node server.js"

docker run -it --name nodeApp -v "$(pwd)":/usr/share/nginx/html --link nodeServer:nodeServer -p 49160:80 -d maisonam/nodeapp:latest

docker run -it --name nodeServer -v "$(pwd)":/src --link mongo:mongo -w /src-p 40001:80 -d node bash -c "node server.js"
