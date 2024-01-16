pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
        NODEJS_HOME = "${tool 'NodeJS 12'}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Automated Tests') {
            steps {
                script {
                    sh 'npx jest'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t taskapp .'
                }
            }
        }
    }

    post {
        failure {
            script {
                def testResult = sh(script: 'npx jest', returnStatus: true)
                if (testResult != 0) {
                    echo 'Tests failed. Rolling back to the previous commit.'
                    
                    // Revert the last commit
                    sh 'git reset --hard HEAD^'

                    // Force-push to the repository
                    sh 'git push -f origin master'
                }
            }
        }
    }
}

