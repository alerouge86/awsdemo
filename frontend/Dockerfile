FROM node:12.13.0-alpine as build 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx 
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html





# FROM node:14.16.0-alpine3.13
# RUN addgroup app && adduser -S -G app app
# RUN mkdir /app && chown app:app /app
# USER app
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD [ "npm", "start" ]






# FROM openjdk:8-jdk-alpine as builder
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} application.jar
# RUN java -Djarmode=layertools -jar application.jar extract

# FROM openjdk:8-jdk-alpine
# COPY --from=builder dependencies/ ./
# COPY --from=builder snapshot-dependencies/ ./
# COPY --from=builder spring-boot-loader/ ./
# COPY --from=builder application/ ./
# ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]