#
# Build stage
#
FROM maven:3.8.1-jdk-11 AS build
COPY src /home/app/src
COPY pom.xml /home/app
# RUN mvn -f /home/app/pom.xml clean package -DskipTests
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /home/app/target/awsdemo-1.0.jar /usr/local/lib/demo.jar
EXPOSE 8181
ENTRYPOINT ["java","-jar","/usr/local/lib/demo.jar"]
