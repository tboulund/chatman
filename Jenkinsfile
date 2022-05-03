pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }

    stages{
        stage('building: backend') {

            steps{
                sh "echo '[BackEnd] is building...'"
                dir("chatmanback"){
                    sh "npm install"
                    sh "nest build"
                }
            }
            post{
                success{
                    sh"echo 'backend successfully built'"
                }
            }
        }


    }
}