pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
        NODEJS_HOME = "${tool 'NodeJS 12'}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                // Run automated unit tests using Jest without publishing JUnit reports
                sh 'npx jest
            }
        }
    }

    post {
        failure {
            // Actions to perform if any stage fails (e.g., send notification)
            echo 'Pipeline failed! Notify team, send email, etc.'
        }
    }
}

