FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV API_URL=http://localhost:3000
EXPOSE 3000
# Shell form 
# CMD npm run dev

#Exec form 
CMD ["npm", "start"]
#ENTRYPOINT ["npm", "start"]
