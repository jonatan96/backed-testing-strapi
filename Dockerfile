FROM node:20.14.0

RUN mkdir -p /home/app 

COPY  . /home/app

EXPOSE 3005

CMD ["node", "home/app/src/index.ts"]
