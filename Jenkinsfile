pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }

    stages{
        stage('building: backend') {
            when{
                anyOf{
                    changeset "chatmanback/**"
                }
            }
            steps{
                sh "echo '[BackEnd] is building...'"
                dir("chatmanback"){
                    sh "npm install"
                    sh "npm run build"
                }
            }
            post{
                success{
                    sh"echo 'backend successfully built'"
                }
            }
        }
        stage('backend tests') {
            steps{
                sh"echo'TBD'"
            }
            post {
                success{
                    sh"echo'tests are done. coverage report TBD'"
                }
            }
        }
        stage('building: frontend') {
            when {
                anyOf {
                    changeset "chatmanfront/**"
                }
            }
            steps{
                sh"echo'[Frontend] is building...'"
                dir("chatmanfront"){
                    sh"npm install"
                    sh"npm build"
                }
            }

        }

    }
}