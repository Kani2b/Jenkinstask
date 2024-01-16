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
                // Run automated unit tests using Jest and generate JUnit reports
                sh 'npx jest --config jest.config.js --reporters=default --reporters=jest-junit --outputDirectory=test-results'
            }

            post {
                always {
                    // Print workspace contents for debugging
                    sh 'ls -R'

                    // Archive test reports
                    junit 'test-results/**/*.xml'
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
