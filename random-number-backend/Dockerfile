FROM openjdk:11
COPY target/*.jar /deployments/rng-1.0.jar
RUN chmod -R 777 /deployments
RUN chmod -R 755 /deployments/rng-1.0.jar
RUN mkdir /deployments/logs
RUN chmod -R 777 /deployments/logs
ENTRYPOINT ["java","-jar","/deployments/rng-1.0.jar","/usr/bin/curl"]