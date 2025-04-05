pipeline {
    agent any

    environment {
        IMG_NAME = 'img_sicei'
        CONT_NAME = "ctn_sicei"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    bat "docker build -t %IMG_NAME%:%BUILD_ID% ."
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                script {
                    bat "docker stop %CONT_NAME%"
                    bat "docker rm %CONT_NAME%"
                    bat "docker run -p 80:5000 --name %CONT_NAME% -d %IMG_NAME%:%BUILD_ID%"
                }
            }
        }
    }
}