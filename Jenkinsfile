pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }

    stages{
        stage('building: backend') {
            when {
                anyOf {
                    changeset "chatmanback/**"
                }
            }
            steps{
                sh "echo '[BackEnd] is building...'"
                sh "npm run build"
            }
            post{
                success{
                    sh"echo 'backend successfully built'"
                }
            }
        }


    }
}