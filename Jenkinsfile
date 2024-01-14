
pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
        NODEJS_HOME = "${tool 'NodeJS 12'}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from version control
                git 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                // Run automated unit tests using Jest and generate JUnit reports
                sh 'npm test -- --reporters=default --reporters=jest-junit'
            }

            post {
                always {
                    // Archive test reports
                    junit 'junit-report/*.xml'
                }
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
