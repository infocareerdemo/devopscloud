FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from your local machine to the container
COPY target/springsample.jar springsample.jar

# Expose the application port (if any specific port is used)
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/springsample.jar"]


