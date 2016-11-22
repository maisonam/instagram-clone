FROM nginx:1

MAINTAINER Ason Matthews <ason.matthews@gmail.com>

COPY client /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

