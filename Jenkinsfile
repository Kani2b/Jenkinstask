pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
        NODEJS_HOME = "${tool 'NodeJS 14'}"
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
                // Run automated unit tests (e.g., using Jest)
                sh 'npm test'
            }

            post {
                always {
                    // Archive test reports or take any other post-test actions
                    junit 'path/to/your/test/results/*.xml'
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

