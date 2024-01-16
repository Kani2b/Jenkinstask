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

        stage('Run Automated Tests') {
            steps {
                // Run automated unit tests using Jest
                script {
                    sh 'npx jest'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                script {
                    sh 'docker build -t taskapp .'
                }
            }
        }
    }

    post {
        failure {
            script {
                // Check test results
                def testResult = sh(script: 'npx jest', returnStatus: true)
                if (testResult != 0) {
                    echo 'Tests failed. Triggering rollback.'
                    // Implement rollback steps here
                    // For example, you might use Git to revert to the previous commit
                    sh 'git reset --hard HEAD^'
                }
            }
        }
    }
}

